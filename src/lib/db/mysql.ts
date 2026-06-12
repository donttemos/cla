import { getCloudflareContext } from "@opennextjs/cloudflare";
import type {
  FieldPacket,
  Pool,
  ResultSetHeader,
  RowDataPacket,
} from "mysql2/promise";

type DatabaseConfig = {
  host: string;
  port: number;
  user: string;
  password: string;
  database: string;
  ssl?: { rejectUnauthorized: boolean };
};

type RuntimeEnvironment = Record<string, string | undefined>;

type D1LikeResult = {
  meta?: {
    changed_db?: boolean;
    changes?: number;
    duration?: number;
    last_row_id?: number;
    rows_read?: number;
    rows_written?: number;
    size_after?: number;
  };
  results?: unknown[];
  success?: boolean;
};

type D1LikePreparedStatement = {
  bind: (...values: DbValue[]) => {
    all: <T = unknown>() => Promise<{ results?: T[] }>;
    run: () => Promise<D1LikeResult>;
  };
};

type D1LikeDatabase = {
  prepare: (query: string) => D1LikePreparedStatement;
};

type CloudflareEnvironment = RuntimeEnvironment & {
  DB?: D1LikeDatabase;
};

let pool: Pool | undefined;
let poolPromise: Promise<Pool> | undefined;
let configuredEnvironment: RuntimeEnvironment | undefined;
let configuredD1Database: D1LikeDatabase | undefined;

export type DbValue = string | number | boolean | Date | null | Buffer | Uint8Array;

declare const process:
  | {
      env?: RuntimeEnvironment;
    }
  | undefined;

declare global {
  var __DATABASE_ENV__: RuntimeEnvironment | undefined;
  var __DATABASE_D1__: D1LikeDatabase | undefined;
}

export function configureDatabaseEnvironment(env: RuntimeEnvironment): void {
  configuredEnvironment = env;
}

export function configureDatabaseBinding(database: D1LikeDatabase | undefined): void {
  configuredD1Database = database;
}

function readRuntimeEnvironment(): RuntimeEnvironment {
  if (configuredEnvironment) {
    return configuredEnvironment;
  }

  if (globalThis.__DATABASE_ENV__) {
    return globalThis.__DATABASE_ENV__;
  }

  if (typeof process !== "undefined" && process.env) {
    return process.env;
  }

  return {};
}

function readDatabaseBinding(): D1LikeDatabase | undefined {
  if (configuredD1Database) {
    return configuredD1Database;
  }

  if (globalThis.__DATABASE_D1__) {
    return globalThis.__DATABASE_D1__;
  }

  try {
    const context = getCloudflareContext({ async: false });
    return (context.env as CloudflareEnvironment).DB;
  } catch {
    return undefined;
  }
}

function readDatabaseConfig(): DatabaseConfig {
  const env = readRuntimeEnvironment();
  const host = env.DB_HOST;
  const user = env.DB_USER;
  const password = env.DB_PASSWORD;
  const database = env.DB_NAME;
  const port = Number(env.DB_PORT ?? "3306");

  const missing = [
    ["DB_HOST", host],
    ["DB_USER", user],
    ["DB_PASSWORD", password],
    ["DB_NAME", database],
  ]
    .filter(([, value]) => !value)
    .map(([name]) => name);

  if (missing.length > 0) {
    throw new Error(`Missing database environment variables: ${missing.join(", ")}`);
  }

  if (!Number.isInteger(port) || port <= 0 || port > 65535) {
    throw new Error("DB_PORT must be a valid TCP port.");
  }

  return {
    host: host as string,
    port,
    user: user as string,
    password: password as string,
    database: database as string,
    ssl:
      env.DB_SSL === "true" || env.DB_SSL === "1"
        ? { rejectUnauthorized: env.DB_SSL_REJECT_UNAUTHORIZED !== "false" }
        : undefined,
  };
}

export async function getDatabasePool(): Promise<Pool> {
  if (!pool) {
    poolPromise ??= createDatabasePool();
    pool = await poolPromise;
  }

  return pool;
}

async function createDatabasePool(): Promise<Pool> {
  const config = readDatabaseConfig();
  const mysql = await import("mysql2/promise");
  const env = readRuntimeEnvironment();

  return mysql.createPool({
    ...config,
    waitForConnections: true,
    connectionLimit: Number(env.DB_CONNECTION_LIMIT ?? "10"),
    charset: "utf8mb4",
    supportBigNumbers: true,
    bigNumberStrings: true,
    dateStrings: true,
    disableEval: true,
  });
}

export async function queryRows<T extends RowDataPacket>(
  sql: string,
  values: readonly DbValue[] = [],
): Promise<T[]> {
  const d1 = readDatabaseBinding();
  if (d1) {
    const result = await d1.prepare(sql).bind(...normalizeValues(values)).all<T>();
    return (result.results ?? []) as T[];
  }

  const [rows]: [T[], FieldPacket[]] = await (await getDatabasePool()).execute(sql, [...values]);
  return rows;
}

export async function executeStatement(
  sql: string,
  values: readonly DbValue[] = [],
): Promise<ResultSetHeader> {
  const d1 = readDatabaseBinding();
  if (d1) {
    const result = await d1.prepare(sql).bind(...normalizeValues(values)).run();
    return {
      affectedRows: result.meta?.changes ?? 0,
      insertId: result.meta?.last_row_id ?? 0,
    } as ResultSetHeader;
  }

  const [result]: [ResultSetHeader, FieldPacket[]] = await (await getDatabasePool()).execute(sql, [...values]);
  return result;
}

export async function pingDatabase(): Promise<{ ok: true }> {
  await queryRows("SELECT 1 AS ok");
  return { ok: true };
}

function normalizeValues(values: readonly DbValue[]): DbValue[] {
  return values.map((value) => {
    if (typeof value === "boolean") {
      return value ? 1 : 0;
    }

    if (value instanceof Date) {
      return toSqlDateTime(value);
    }

    return value;
  });
}

function toSqlDateTime(value: Date): string {
  const year = value.getUTCFullYear();
  const month = String(value.getUTCMonth() + 1).padStart(2, "0");
  const day = String(value.getUTCDate()).padStart(2, "0");
  const hours = String(value.getUTCHours()).padStart(2, "0");
  const minutes = String(value.getUTCMinutes()).padStart(2, "0");
  const seconds = String(value.getUTCSeconds()).padStart(2, "0");

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}
