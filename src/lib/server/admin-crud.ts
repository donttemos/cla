import type { ResultSetHeader, RowDataPacket } from "mysql2/promise";
import { executeStatement, queryRows, type DbValue } from "@/lib/db/mysql";
import { fail, ok, type ApiFailure, type ApiResult } from "./api-response";

export type AdminResource = "categories" | "calculators" | "blog-posts";
export type QueryExecutor = (sql: string, values: readonly DbValue[]) => Promise<unknown>;

type FieldKind = "boolean" | "date" | "number" | "string";

type FieldDefinition = {
  key: string;
  column: string;
  kind: FieldKind;
  required?: boolean;
  nullable?: boolean;
};

type ResourceDefinition = {
  table: string;
  fields: readonly FieldDefinition[];
  selectColumns: readonly string[];
  orderBy: string;
};

type ValidationIssue = {
  field: string;
  message: string;
};

type MutationPayload = Record<string, unknown>;

const archivedStatus = 2;

const resources: Record<AdminResource, ResourceDefinition> = {
  categories: {
    table: "categories",
    orderBy: "sort_order ASC, id ASC",
    selectColumns: [
      "id",
      "name",
      "slug",
      "description",
      "icon",
      "seo_title",
      "seo_description",
      "canonical_path",
      "sort_order",
      "status",
      "lang",
      "created_by",
      "updated_by",
      "created_at",
      "updated_at",
      "deleted_at",
    ],
    fields: [
      { key: "name", column: "name", kind: "string", required: true },
      { key: "slug", column: "slug", kind: "string", required: true },
      { key: "description", column: "description", kind: "string", nullable: true },
      { key: "icon", column: "icon", kind: "string", nullable: true },
      { key: "seoTitle", column: "seo_title", kind: "string", required: true },
      { key: "seoDescription", column: "seo_description", kind: "string", required: true },
      { key: "canonicalPath", column: "canonical_path", kind: "string", nullable: true },
      { key: "sortOrder", column: "sort_order", kind: "number" },
      { key: "status", column: "status", kind: "number" },
      { key: "lang", column: "lang", kind: "string", required: true },
    ],
  },
  calculators: {
    table: "calculators",
    orderBy: "sort_order ASC, id ASC",
    selectColumns: [
      "id",
      "category_id",
      "name",
      "slug",
      "lang",
      "description",
      "seo_title",
      "seo_description",
      "canonical_path",
      "og_title",
      "og_description",
      "og_image_url",
      "twitter_card",
      "featured",
      "status",
      "sort_order",
      "published_at",
      "created_by",
      "updated_by",
      "created_at",
      "updated_at",
      "deleted_at",
    ],
    fields: [
      { key: "categoryId", column: "category_id", kind: "number", required: true },
      { key: "name", column: "name", kind: "string", required: true },
      { key: "slug", column: "slug", kind: "string", required: true },
      { key: "description", column: "description", kind: "string", required: true },
      { key: "seoTitle", column: "seo_title", kind: "string", required: true },
      { key: "seoDescription", column: "seo_description", kind: "string", required: true },
      { key: "canonicalPath", column: "canonical_path", kind: "string", nullable: true },
      { key: "ogTitle", column: "og_title", kind: "string", nullable: true },
      { key: "ogDescription", column: "og_description", kind: "string", nullable: true },
      { key: "ogImageUrl", column: "og_image_url", kind: "string", nullable: true },
      { key: "twitterCard", column: "twitter_card", kind: "string" },
      { key: "featured", column: "featured", kind: "boolean" },
      { key: "status", column: "status", kind: "number" },
      { key: "lang", column: "lang", kind: "string", required: true },
      { key: "sortOrder", column: "sort_order", kind: "number" },
      { key: "publishedAt", column: "published_at", kind: "date", nullable: true },
    ],
  },
  "blog-posts": {
    table: "blog_posts",
    orderBy: "COALESCE(published_at, created_at) DESC, id DESC",
    selectColumns: [
      "id",
      "title",
      "slug",
      "lang",
      "excerpt",
      "content_md",
      "seo_title",
      "seo_description",
      "canonical_path",
      "og_title",
      "og_description",
      "og_image_url",
      "status",
      "published_at",
      "created_by",
      "updated_by",
      "created_at",
      "updated_at",
      "deleted_at",
    ],
    fields: [
      { key: "title", column: "title", kind: "string", required: true },
      { key: "slug", column: "slug", kind: "string", required: true },
      { key: "excerpt", column: "excerpt", kind: "string", nullable: true },
      { key: "contentMd", column: "content_md", kind: "string", nullable: true },
      { key: "seoTitle", column: "seo_title", kind: "string", required: true },
      { key: "seoDescription", column: "seo_description", kind: "string", required: true },
      { key: "canonicalPath", column: "canonical_path", kind: "string", nullable: true },
      { key: "ogTitle", column: "og_title", kind: "string", nullable: true },
      { key: "ogDescription", column: "og_description", kind: "string", nullable: true },
      { key: "ogImageUrl", column: "og_image_url", kind: "string", nullable: true },
      { key: "status", column: "status", kind: "number" },
      { key: "lang", column: "lang", kind: "string", required: true },
      { key: "publishedAt", column: "published_at", kind: "date", nullable: true },
    ],
  },
};

export function parseAdminId(value: string): ApiResult<number> {
  if (!/^[1-9]\d*$/.test(value)) {
    return fail(400, "INVALID_ID", "Resource id must be a positive integer.");
  }

  return ok(Number(value));
}

export async function listResources(
  resource: AdminResource,
  executor: QueryExecutor = queryRows,
  pagination: { limit?: number; offset?: number } = {},
): Promise<ApiResult<unknown[]>> {
  const definition = resources[resource];
  const limit = clampInteger(pagination.limit ?? 50, 1, 100);
  const offset = clampInteger(pagination.offset ?? 0, 0, 100000);
  const sql = `SELECT ${definition.selectColumns.join(", ")} FROM ${definition.table} WHERE deleted_at IS NULL AND status <> ? ORDER BY ${definition.orderBy} LIMIT ? OFFSET ?`;
  const rows = await executor(sql, [archivedStatus, limit, offset]);

  return ok(asRows(rows).map((row) => toPayload(resource, row)));
}

export async function getResource(
  resource: AdminResource,
  id: number,
  executor: QueryExecutor = queryRows,
): Promise<ApiResult<unknown>> {
  const definition = resources[resource];
  const sql = `SELECT ${definition.selectColumns.join(", ")} FROM ${definition.table} WHERE id = ? AND deleted_at IS NULL AND status <> ? LIMIT 1`;
  const rows = asRows(await executor(sql, [id, archivedStatus]));
  const row = rows[0];

  if (!row) {
    return fail(404, "NOT_FOUND", "Resource was not found.");
  }

  return ok(toPayload(resource, row));
}

export async function createResource(
  resource: AdminResource,
  body: unknown,
  executor: QueryExecutor = executeAdminQuery,
): Promise<ApiResult<unknown>> {
  const validation = validatePayload(resource, body, "create");
  if (!validation.ok) {
    return validation;
  }

  const columns = Object.keys(validation.data);
  const values = Object.values(validation.data);
  const placeholders = columns.map(() => "?").join(", ");
  const definition = resources[resource];
  const result = asResultHeader(
    await executor(
      `INSERT INTO ${definition.table} (${columns.join(", ")}) VALUES (${placeholders})`,
      values,
    ),
  );

  return getResource(resource, result.insertId, executor).then((created) =>
    created.ok ? ok(created.data, 201) : created,
  );
}

export async function updateResource(
  resource: AdminResource,
  id: number,
  body: unknown,
  executor: QueryExecutor = executeAdminQuery,
): Promise<ApiResult<unknown>> {
  const validation = validatePayload(resource, body, "update");
  if (!validation.ok) {
    return validation;
  }

  const columns = Object.keys(validation.data);
  if (columns.length === 0) {
    return fail(400, "VALIDATION_ERROR", "Request body is invalid.", [
      { field: "body", message: "At least one editable field is required." },
    ]);
  }

  const definition = resources[resource];
  const setClause = columns.map((column) => `${column} = ?`).join(", ");
  const result = asResultHeader(
    await executor(
      `UPDATE ${definition.table} SET ${setClause} WHERE id = ? AND deleted_at IS NULL`,
      [...Object.values(validation.data), id],
    ),
  );

  if (result.affectedRows === 0) {
    return fail(404, "NOT_FOUND", "Resource was not found.");
  }

  return getResource(resource, id, executor);
}

export async function deleteResource(
  resource: AdminResource,
  id: number,
  executor: QueryExecutor = executeAdminQuery,
): Promise<ApiResult<{ id: string; deleted: true }>> {
  const definition = resources[resource];
  const result = asResultHeader(
    await executor(
      `UPDATE ${definition.table} SET status = 2, deleted_at = CURRENT_TIMESTAMP WHERE id = ? AND deleted_at IS NULL`,
      [id],
    ),
  );

  if (result.affectedRows === 0) {
    return fail(404, "NOT_FOUND", "Resource was not found.");
  }

  return ok({ id: String(id), deleted: true });
}

export async function executeAdminQuery(sql: string, values: readonly DbValue[]): Promise<unknown> {
  if (/^\s*select\b/i.test(sql)) {
    return queryRows<RowDataPacket>(sql, values);
  }

  return executeStatement(sql, values);
}

export function databaseErrorToResult(error: unknown): ApiFailure {
  const mysqlError = error as { code?: string; errno?: number; message?: string };

  if (mysqlError.code === "ER_DUP_ENTRY") {
    return fail(409, "CONFLICT", "A resource with the same unique value already exists.");
  }

  if (mysqlError.code === "ER_NO_REFERENCED_ROW_2") {
    return fail(400, "VALIDATION_ERROR", "Request body is invalid.", [
      { field: "foreignKey", message: "Referenced resource does not exist." },
    ]);
  }

  return fail(500, "DATABASE_ERROR", "Database operation failed.");
}

function validatePayload(
  resource: AdminResource,
  body: unknown,
  mode: "create" | "update",
): ApiResult<Record<string, DbValue>> {
  if (!isPlainObject(body)) {
    return fail(400, "BAD_REQUEST", "Request body must be a JSON object.");
  }

  const definition = resources[resource];
  const data: Record<string, DbValue> = {};
  const details: ValidationIssue[] = [];

  for (const field of definition.fields) {
    const value = body[field.key];
    const missing = value === undefined || value === "";

    if (mode === "create" && field.required && missing) {
      details.push({
        field: field.key,
        message:
          field.kind === "number"
            ? "Required number field is missing."
            : "Required string field is missing.",
      });
      continue;
    }

    if (missing) {
      continue;
    }

    if (value === null) {
      if (field.nullable) {
        data[field.column] = null;
      } else {
        details.push({ field: field.key, message: "Field cannot be null." });
      }
      continue;
    }

    const normalized = normalizeField(field, value);
    if (normalized.ok) {
      if (field.key === "status" && normalized.data === archivedStatus) {
        details.push({ field: field.key, message: "Use DELETE to archive resources." });
        continue;
      }

      data[field.column] = normalized.data;
    } else {
      details.push({ field: field.key, message: normalized.error.message });
    }
  }

  if (details.length > 0) {
    return fail(400, "VALIDATION_ERROR", "Request body is invalid.", details);
  }

  return ok(data);
}

function normalizeField(field: FieldDefinition, value: unknown): ApiResult<DbValue> {
  if (field.kind === "string") {
    if (typeof value !== "string") {
      return fail(400, "VALIDATION_ERROR", "Expected a string.");
    }

    const trimmed = value.trim();
    if (field.key === "slug" && !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(trimmed)) {
      return fail(400, "VALIDATION_ERROR", "Slug must use lowercase letters, numbers, and hyphens.");
    }

    return ok(trimmed);
  }

  if (field.kind === "number") {
    const numberValue = typeof value === "number" ? value : Number(value);
    if (!Number.isInteger(numberValue) || numberValue < 0) {
      return fail(400, "VALIDATION_ERROR", "Expected a non-negative integer.");
    }

    if (field.key === "status" && ![0, 1, 2].includes(numberValue)) {
      return fail(400, "VALIDATION_ERROR", "Status must be 0, 1, or 2.");
    }

    return ok(numberValue);
  }

  if (field.kind === "boolean") {
    if (typeof value !== "boolean") {
      return fail(400, "VALIDATION_ERROR", "Expected a boolean.");
    }

    return ok(value ? 1 : 0);
  }

  if (typeof value !== "string" || !/^\d{4}-\d{2}-\d{2}( \d{2}:\d{2}:\d{2})?$/.test(value)) {
    return fail(400, "VALIDATION_ERROR", "Expected a MySQL date or datetime string.");
  }

  return ok(value);
}

function toPayload(resource: AdminResource, row: RowDataPacket): Record<string, unknown> {
  const payload: Record<string, unknown> = {};

  for (const column of resources[resource].selectColumns) {
    const key = columnToPayloadKey(column);
    payload[key] = row[column];
  }

  if ("id" in payload) {
    payload.id = String(payload.id);
  }

  if ("categoryId" in payload && payload.categoryId !== null && payload.categoryId !== undefined) {
    payload.categoryId = String(payload.categoryId);
  }

  if ("featured" in payload) {
    payload.featured = Boolean(payload.featured);
  }

  return payload;
}

function columnToPayloadKey(column: string): string {
  return column.replace(/_([a-z])/g, (_, char: string) => char.toUpperCase());
}

function asRows(rows: unknown): RowDataPacket[] {
  return Array.isArray(rows) ? (rows as RowDataPacket[]) : [];
}

function asResultHeader(result: unknown): ResultSetHeader {
  return result as ResultSetHeader;
}

function clampInteger(value: number, min: number, max: number): number {
  if (!Number.isFinite(value)) {
    return min;
  }

  return Math.min(Math.max(Math.trunc(value), min), max);
}

function isPlainObject(value: unknown): value is MutationPayload {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}
