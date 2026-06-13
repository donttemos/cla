import { neon } from '@neondatabase/serverless';

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL environment variable is required');
}

export const sql = neon(process.env.DATABASE_URL);

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
