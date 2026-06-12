import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const ORIGINAL_ENV = { ...process.env };

describe("database runtime compatibility", () => {
  beforeEach(() => {
    vi.resetModules();
    vi.unstubAllGlobals();
    restoreEnv();
  });

  afterEach(() => {
    vi.resetModules();
    vi.unstubAllGlobals();
    vi.doUnmock("mysql2/promise");
    restoreEnv();
  });

  it("imports without loading the Node-only MySQL driver so Cloudflare Worker paths can boot", async () => {
    vi.doMock("mysql2/promise", () => {
      throw new Error("mysql2 requires Node TCP sockets");
    });

    await expect(import("./mysql")).resolves.toMatchObject({
      configureDatabaseBinding: expect.any(Function),
      configureDatabaseEnvironment: expect.any(Function),
      executeStatement: expect.any(Function),
      getDatabasePool: expect.any(Function),
      pingDatabase: expect.any(Function),
      queryRows: expect.any(Function),
    });
  });

  it("uses D1 bindings when available and does not create a MySQL pool", async () => {
    const { createPool } = mockMysqlDriver();
    const all = vi.fn().mockResolvedValue({ results: [{ id: 1, slug: "finance" }] });
    const run = vi.fn().mockResolvedValue({ meta: { changes: 1, last_row_id: 42 } });
    const bind = vi.fn(() => ({ all, run }));
    const prepare = vi.fn(() => ({ bind }));
    globalThis.__DATABASE_D1__ = { prepare };

    const mysql = await import("./mysql");

    await expect(mysql.queryRows("SELECT * FROM categories WHERE slug = ?", ["finance"])).resolves.toEqual([
      { id: 1, slug: "finance" },
    ]);
    await expect(mysql.executeStatement("INSERT INTO categories (name) VALUES (?)", ["Finance"])).resolves.toMatchObject({
      affectedRows: 1,
      insertId: 42,
    });

    expect(prepare).toHaveBeenNthCalledWith(1, "SELECT * FROM categories WHERE slug = ?");
    expect(bind).toHaveBeenNthCalledWith(1, "finance");
    expect(prepare).toHaveBeenNthCalledWith(2, "INSERT INTO categories (name) VALUES (?)");
    expect(bind).toHaveBeenNthCalledWith(2, "Finance");
    expect(createPool).not.toHaveBeenCalled();
  });

  it("creates the MySQL pool lazily with explicit driver options when only env config is present", async () => {
    const { createPool, pool } = mockMysqlDriver();
    setDatabaseEnv({
      DB_HOST: "db.example.test",
      DB_PORT: "3307",
      DB_USER: "worker_user",
      DB_PASSWORD: "worker_password",
      DB_NAME: "calcverse",
      DB_SSL: "true",
      DB_SSL_REJECT_UNAUTHORIZED: "false",
      DB_CONNECTION_LIMIT: "4",
    });

    const mysql = await import("./mysql");

    expect(createPool).not.toHaveBeenCalled();
    await expect(mysql.getDatabasePool()).resolves.toBe(pool);
    await expect(mysql.getDatabasePool()).resolves.toBe(pool);
    expect(createPool).toHaveBeenCalledTimes(1);
    expect(createPool).toHaveBeenCalledWith({
      host: "db.example.test",
      port: 3307,
      user: "worker_user",
      password: "worker_password",
      database: "calcverse",
      ssl: { rejectUnauthorized: false },
      waitForConnections: true,
      connectionLimit: 4,
      charset: "utf8mb4",
      supportBigNumbers: true,
      bigNumberStrings: true,
      dateStrings: true,
      disableEval: true,
    });
  });

  it("copies readonly query values before passing them to the MySQL driver", async () => {
    const { execute } = mockMysqlDriver();
    setDatabaseEnv();
    const mysql = await import("./mysql");
    const values = Object.freeze(["finance", 1] as const);

    execute.mockResolvedValueOnce([[{ id: 1 }], []]);
    await expect(mysql.queryRows("SELECT * FROM categories WHERE slug = ? AND status = ?", values)).resolves.toEqual([
      { id: 1 },
    ]);

    execute.mockResolvedValueOnce([{ affectedRows: 1 }, []]);
    await expect(mysql.executeStatement("UPDATE categories SET status = ? WHERE slug = ?", values)).resolves.toEqual({
      affectedRows: 1,
    });

    expect(execute.mock.calls[0]).toEqual([
      "SELECT * FROM categories WHERE slug = ? AND status = ?",
      ["finance", 1],
    ]);
    expect(execute.mock.calls[0][1]).not.toBe(values);
    expect(execute.mock.calls[1]).toEqual(["UPDATE categories SET status = ? WHERE slug = ?", ["finance", 1]]);
    expect(execute.mock.calls[1][1]).not.toBe(values);
  });

  it("fails fast on invalid port configuration before creating a MySQL driver pool", async () => {
    const { createPool } = mockMysqlDriver();
    setDatabaseEnv({ DB_PORT: "not-a-port" });
    const mysql = await import("./mysql");

    await expect(mysql.getDatabasePool()).rejects.toThrow("DB_PORT must be a valid TCP port.");
    expect(createPool).not.toHaveBeenCalled();
  });
});

function mockMysqlDriver() {
  const execute = vi.fn();
  const pool = { execute };
  const createPool = vi.fn(() => pool);

  vi.doMock("mysql2/promise", () => ({
    createPool,
    default: { createPool },
  }));

  return { createPool, execute, pool };
}

function setDatabaseEnv(overrides: Record<string, string | undefined> = {}) {
  delete globalThis.__DATABASE_D1__;
  process.env.DB_HOST = overrides.DB_HOST ?? "db.example.test";
  process.env.DB_PORT = overrides.DB_PORT ?? "3306";
  process.env.DB_USER = overrides.DB_USER ?? "db_user";
  process.env.DB_PASSWORD = overrides.DB_PASSWORD ?? "db_password";
  process.env.DB_NAME = overrides.DB_NAME ?? "calcverse";
  process.env.DB_SSL = overrides.DB_SSL ?? "false";
  process.env.DB_SSL_REJECT_UNAUTHORIZED = overrides.DB_SSL_REJECT_UNAUTHORIZED;
  process.env.DB_CONNECTION_LIMIT = overrides.DB_CONNECTION_LIMIT;
}

function restoreEnv() {
  process.env = { ...ORIGINAL_ENV };
  delete globalThis.__DATABASE_D1__;
  delete globalThis.__DATABASE_ENV__;
}
