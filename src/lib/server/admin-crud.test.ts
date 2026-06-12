import { describe, expect, it } from "vitest";
import {
  createResource,
  databaseErrorToResult,
  deleteResource,
  listResources,
  parseAdminId,
  updateResource,
} from "./admin-crud";

const emptyExecutor = async () => [];

describe("admin CRUD helpers", () => {
  it("returns a stable validation error when required category fields are missing", async () => {
    const result = await createResource("categories", { name: "Finance" }, emptyExecutor);

    expect(result).toEqual({
      ok: false,
      status: 400,
      error: {
        code: "VALIDATION_ERROR",
        message: "Request body is invalid.",
        details: [
          { field: "slug", message: "Required string field is missing." },
          { field: "seoTitle", message: "Required string field is missing." },
          { field: "seoDescription", message: "Required string field is missing." },
        ],
      },
    });
  });

  it("lists resources without deleted or archived rows", async () => {
    const calls: Array<{ sql: string; values: readonly unknown[] }> = [];
    const executor = async (sql: string, values: readonly unknown[]) => {
      calls.push({ sql, values });
      return [
        {
          id: "1",
          name: "Finance",
          slug: "finance",
          seo_title: "Finance calculators",
          seo_description: "Finance calculators.",
          status: 1,
        },
      ];
    };

    const result = await listResources("categories", executor);

    expect(result.ok).toBe(true);
    expect(calls).toEqual([
      {
        sql: "SELECT id, name, slug, description, icon, seo_title, seo_description, canonical_path, sort_order, status, created_by, updated_by, created_at, updated_at, deleted_at FROM categories WHERE deleted_at IS NULL AND status <> ? ORDER BY sort_order ASC, id ASC LIMIT ? OFFSET ?",
        values: [2, 50, 0],
      },
    ]);
  });

  it("uses a resource-specific order for blog post lists", async () => {
    const calls: Array<{ sql: string; values: readonly unknown[] }> = [];
    const executor = async (sql: string, values: readonly unknown[]) => {
      calls.push({ sql, values });
      return [];
    };

    const result = await listResources("blog-posts", executor);

    expect(result.ok).toBe(true);
    expect(calls[0].sql).toContain("ORDER BY COALESCE(published_at, created_at) DESC, id DESC");
  });

  it("soft deletes resources by archiving status and setting deleted_at", async () => {
    const calls: Array<{ sql: string; values: readonly unknown[] }> = [];
    const executor = async (sql: string, values: readonly unknown[]) => {
      calls.push({ sql, values });
      return { affectedRows: 1 };
    };

    const result = await deleteResource("calculators", 42, executor);

    expect(result).toEqual({ ok: true, status: 200, data: { id: "42", deleted: true } });
    expect(calls).toEqual([
      {
        sql: "UPDATE calculators SET status = 2, deleted_at = CURRENT_TIMESTAMP WHERE id = ? AND deleted_at IS NULL",
        values: [42],
      },
    ]);
  });

  it("updates resources with normalized values and reloads the persisted row", async () => {
    const calls: Array<{ sql: string; values: readonly unknown[] }> = [];
    const executor = async (sql: string, values: readonly unknown[]) => {
      calls.push({ sql, values });
      if (/^\s*select\b/i.test(sql)) {
        return [
          {
            id: 42,
            category_id: 7,
            name: "ROI Calculator",
            slug: "roi-calculator",
            description: "Measure return on investment.",
            seo_title: "ROI Calculator",
            seo_description: "Calculate return on investment.",
            canonical_path: "/roi-calculator",
            og_title: null,
            og_description: null,
            og_image_url: null,
            twitter_card: "summary",
            featured: 1,
            status: 1,
            sort_order: 3,
            published_at: null,
            created_by: null,
            updated_by: null,
            created_at: "2026-01-01 00:00:00",
            updated_at: "2026-01-02 00:00:00",
            deleted_at: null,
          },
        ];
      }

      return { affectedRows: 1 };
    };

    const result = await updateResource(
      "calculators",
      42,
      { name: " ROI Calculator ", featured: true, sortOrder: "3" },
      executor,
    );

    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.data).toMatchObject({
        id: "42",
        categoryId: "7",
        name: "ROI Calculator",
        featured: true,
        sortOrder: 3,
      });
    }
    expect(calls).toEqual([
      {
        sql: "UPDATE calculators SET name = ?, featured = ?, sort_order = ? WHERE id = ? AND deleted_at IS NULL",
        values: ["ROI Calculator", 1, 3, 42],
      },
      {
        sql: "SELECT id, category_id, name, slug, description, seo_title, seo_description, canonical_path, og_title, og_description, og_image_url, twitter_card, featured, status, sort_order, published_at, created_by, updated_by, created_at, updated_at, deleted_at FROM calculators WHERE id = ? AND deleted_at IS NULL AND status <> ? LIMIT 1",
        values: [42, 2],
      },
    ]);
  });

  it("rejects invalid calculator field types before SQL execution", async () => {
    const result = await createResource(
      "calculators",
      {
        categoryId: -1,
        name: "ROI Calculator",
        slug: "ROI Calculator",
        description: "Measure return on investment.",
        seoTitle: "ROI Calculator",
        seoDescription: "Calculate return on investment.",
        featured: "yes",
        publishedAt: "01/01/2026",
      },
      emptyExecutor,
    );

    expect(result).toEqual({
      ok: false,
      status: 400,
      error: {
        code: "VALIDATION_ERROR",
        message: "Request body is invalid.",
        details: [
          { field: "categoryId", message: "Expected a non-negative integer." },
          {
            field: "slug",
            message: "Slug must use lowercase letters, numbers, and hyphens.",
          },
          { field: "featured", message: "Expected a boolean." },
          { field: "publishedAt", message: "Expected a MySQL date or datetime string." },
        ],
      },
    });
  });

  it("rejects archive status updates so DELETE owns soft-delete semantics", async () => {
    const result = await updateResource("categories", 1, { status: 2 }, emptyExecutor);

    expect(result).toEqual({
      ok: false,
      status: 400,
      error: {
        code: "VALIDATION_ERROR",
        message: "Request body is invalid.",
        details: [{ field: "status", message: "Use DELETE to archive resources." }],
      },
    });
  });

  it("rejects unsafe id path parameters before they reach SQL", () => {
    expect(parseAdminId("abc")).toEqual({
      ok: false,
      status: 400,
      error: {
        code: "INVALID_ID",
        message: "Resource id must be a positive integer.",
      },
    });
  });

  it("maps known MySQL errors to stable API failures", () => {
    expect(databaseErrorToResult({ code: "ER_DUP_ENTRY" })).toEqual({
      ok: false,
      status: 409,
      error: {
        code: "CONFLICT",
        message: "A resource with the same unique value already exists.",
      },
    });

    expect(databaseErrorToResult({ code: "ER_NO_REFERENCED_ROW_2" })).toEqual({
      ok: false,
      status: 400,
      error: {
        code: "VALIDATION_ERROR",
        message: "Request body is invalid.",
        details: [{ field: "foreignKey", message: "Referenced resource does not exist." }],
      },
    });
  });
});
