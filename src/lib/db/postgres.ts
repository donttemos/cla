import { getCloudflareContext } from "@opennextjs/cloudflare";
import { neon, type NeonQueryFunction } from "@neondatabase/serverless";

type RuntimeEnvironment = Record<string, string | undefined>;

type CloudflareEnvironment = RuntimeEnvironment;

let configuredEnvironment: RuntimeEnvironment | undefined;

declare const process:
  | {
      env?: RuntimeEnvironment;
    }
  | undefined;

declare global {
  var __POSTGRES_ENV__: RuntimeEnvironment | undefined;
}

export function configurePostgresEnvironment(env: RuntimeEnvironment): void {
  configuredEnvironment = env;
}

function readRuntimeEnvironment(): RuntimeEnvironment {
  if (configuredEnvironment) {
    return configuredEnvironment;
  }

  if (globalThis.__POSTGRES_ENV__) {
    return globalThis.__POSTGRES_ENV__;
  }

  try {
    const context = getCloudflareContext({ async: false });
    return context.env as CloudflareEnvironment;
  } catch {
    // Ignore and continue to Node-style env lookup.
  }

  if (typeof process !== "undefined" && process.env) {
    return process.env;
  }

  return {};
}

function getDatabaseUrl(): string | undefined {
  return readRuntimeEnvironment().DATABASE_URL;
}

export function isPostgresConfigured(): boolean {
  return Boolean(getDatabaseUrl());
}

function createSqlClient(): NeonQueryFunction<boolean, boolean> {
  const databaseUrl = getDatabaseUrl();
  if (!databaseUrl) {
    throw new Error("DATABASE_URL is not configured.");
  }

  return neon(databaseUrl);
}

type SqlTag = ((...args: Parameters<NeonQueryFunction<boolean, boolean>>) => ReturnType<NeonQueryFunction<boolean, boolean>>) &
  Pick<NeonQueryFunction<boolean, boolean>, "query" | "unsafe" | "transaction">;

const sqlTag = ((...args: Parameters<NeonQueryFunction<boolean, boolean>>) => {
  const client = createSqlClient();
  return client(...args);
}) as SqlTag;

sqlTag.query = (...args) => createSqlClient().query(...args);
sqlTag.unsafe = (...args) => createSqlClient().unsafe(...args);
sqlTag.transaction = (...args) => createSqlClient().transaction(...args);

export const sql = sqlTag;

export async function pingPostgres(): Promise<{ ok: true }> {
  if (!isPostgresConfigured()) {
    throw new Error("DATABASE_URL is not configured.");
  }

  await sql`SELECT 1`;
  return { ok: true };
}

/**
 * Utility to convert PostgreSQL snake_case rows to TypeScript camelCase objects.
 * We'll use this if needed, but for simplicity we can also just map them manually.
 */
export function mapPostgresRow<T>(row: Record<string, unknown>): T {
  const result: Record<string, unknown> = {};
  for (const key in row) {
    const camelKey = key.replace(/_([a-z])/g, (g) => g[1].toUpperCase());
    result[camelKey] = row[key];
  }
  return result as T;
}
