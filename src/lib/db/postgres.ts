import { neon } from '@neondatabase/serverless';

export const sql = process.env.DATABASE_URL
  ? neon(process.env.DATABASE_URL)
  : null;

export function isPostgresConfigured(): boolean {
  return Boolean(process.env.DATABASE_URL);
}

export async function pingPostgres(): Promise<{ ok: true }> {
  if (!sql) {
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
