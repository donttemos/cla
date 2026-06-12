import { createRequire } from "node:module";
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { describe, expect, it, vi } from "vitest";

type ConnectionCall = { name: string; sql?: string; values?: readonly unknown[] };

type SeedRunOptions = {
  failOnSql?: RegExp;
};

const realRequire = createRequire(import.meta.url);
const seedPath = path.resolve("scripts", "seed-mysql.js");

describe("mysql seed script", () => {
  it("runs content seeding inside one transaction and closes the connection", async () => {
    const run = await runSeedScript();

    expect(run.createConnectionConfig).toMatchObject({
      host: "db.example.test",
      port: 3307,
      user: "seed_user",
      password: "seed_password",
      database: "calcverse",
      charset: "utf8mb4",
      supportBigNumbers: true,
      bigNumberStrings: true,
      dateStrings: true,
      ssl: undefined,
    });
    expect(run.callNames).toContain("beginTransaction");
    expect(run.callNames).toContain("commit");
    expect(run.callNames).toContain("end");
    expect(run.callNames).not.toContain("rollback");
    expect(run.callNames.indexOf("beginTransaction")).toBeLessThan(run.callNames.indexOf("commit"));
    expect(run.callNames.indexOf("commit")).toBeLessThan(run.callNames.indexOf("end"));
  });

  it("rolls back and exits non-zero when a seed write fails", async () => {
    const run = await runSeedScript({ failOnSql: /DELETE FROM calculator_faqs/ });

    expect(run.callNames).toContain("beginTransaction");
    expect(run.callNames).toContain("rollback");
    expect(run.callNames).toContain("end");
    expect(run.callNames).not.toContain("commit");
    expect(run.exitCode).toBe(1);
    expect(run.errors[0]).toEqual(new Error("seed write failed"));
  });
});

async function runSeedScript(options: SeedRunOptions = {}) {
  const calls: ConnectionCall[] = [];
  const errors: unknown[] = [];
  const idBySlug = new Map<string, number>();
  let nextId = 1;
  let createConnectionConfig: unknown;
  let exitCode: number | undefined;
  let finish!: () => void;
  const finished = new Promise<void>((resolve) => {
    finish = resolve;
  });

  const connection = {
    beginTransaction: vi.fn(async () => {
      calls.push({ name: "beginTransaction" });
    }),
    commit: vi.fn(async () => {
      calls.push({ name: "commit" });
    }),
    rollback: vi.fn(async () => {
      calls.push({ name: "rollback" });
    }),
    end: vi.fn(async () => {
      calls.push({ name: "end" });
      if (!options.failOnSql) {
        finish();
      }
    }),
    execute: vi.fn(async (sql: string, values: readonly unknown[]) => {
      calls.push({ name: "execute", sql: normalizeSql(sql), values });
      if (options.failOnSql?.test(sql)) {
        throw new Error("seed write failed");
      }

      if (/SELECT id FROM (categories|calculators|blog_posts) WHERE slug = \? LIMIT 1/.test(sql)) {
        const slug = String(values[0]);
        const id = idBySlug.get(slug) ?? nextId++;
        idBySlug.set(slug, id);
        return [[{ id }]];
      }

      return [{ affectedRows: 1 }];
    }),
  };

  const sandbox = {
    __dirname: path.dirname(seedPath),
    console: {
      log: vi.fn(),
      error: vi.fn((error: unknown) => {
        errors.push(error);
      }),
    },
    process: {
      env: {
        DB_HOST: "db.example.test",
        DB_PORT: "3307",
        DB_USER: "seed_user",
        DB_PASSWORD: "seed_password",
        DB_NAME: "calcverse",
        DB_SSL: "false",
      },
      exit: vi.fn((code?: number) => {
        exitCode = code;
        finish();
      }),
    },
    require: (id: string) => {
      if (id === "mysql2/promise") {
        return {
          createConnection: vi.fn(async (config: unknown) => {
            createConnectionConfig = config;
            return connection;
          }),
        };
      }

      return realRequire(id);
    },
  };

  vm.runInNewContext(fs.readFileSync(seedPath, "utf8"), sandbox, { filename: seedPath });
  await finished;

  return {
    callNames: calls.map((call) => call.name),
    calls,
    createConnectionConfig,
    errors,
    exitCode,
  };
}

function normalizeSql(sql: string): string {
  return sql.replace(/\s+/g, " ").trim();
}
