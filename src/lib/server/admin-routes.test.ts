import { NextRequest } from "next/server";
import { afterEach, describe, expect, it } from "vitest";
import { handleResourceCreate, handleResourceList } from "./admin-routes";

describe("admin route handlers", () => {
  afterEach(() => {
    delete process.env.ADMIN_API_KEY;
  });

  it("wraps successful list responses in a stable data envelope", async () => {
    process.env.ADMIN_API_KEY = "secret-key";
    const request = new NextRequest("http://localhost/api/admin/categories", {
      headers: { authorization: "Bearer secret-key" },
    });
    const response = await handleResourceList(request, "categories", async () => []);

    expect(response.status).toBe(200);
    await expect(response.json()).resolves.toEqual({ data: [] });
  });

  it("enforces the temporary admin API key guard when configured", async () => {
    process.env.ADMIN_API_KEY = "secret-key";
    const request = new NextRequest("http://localhost/api/admin/categories");
    const response = await handleResourceList(request, "categories", async () => []);

    expect(response.status).toBe(401);
    await expect(response.json()).resolves.toEqual({
      error: {
        code: "UNAUTHORIZED",
        message: "Admin authentication is required.",
      },
    });
  });

  it("blocks admin APIs until the temporary admin API key is configured", async () => {
    const request = new NextRequest("http://localhost/api/admin/categories", {
      method: "POST",
      body: JSON.stringify({ name: "Finance" }),
    });

    const response = await handleResourceCreate(request, "categories", async () => {
      throw new Error("executor should not be called");
    });

    expect(response.status).toBe(403);
    await expect(response.json()).resolves.toEqual({
      error: {
        code: "FORBIDDEN",
        message: "ADMIN_API_KEY must be configured before admin APIs are available.",
      },
    });
  });

  it("maps database conflicts from mutations to stable API responses", async () => {
    process.env.ADMIN_API_KEY = "secret-key";
    const request = new NextRequest("http://localhost/api/admin/categories", {
      method: "POST",
      headers: { authorization: "Bearer secret-key" },
      body: JSON.stringify({
        name: "Finance",
        slug: "finance",
        seoTitle: "Finance calculators",
        seoDescription: "Finance calculators.",
      }),
    });

    const response = await handleResourceCreate(request, "categories", async () => {
      throw { code: "ER_DUP_ENTRY" };
    });

    expect(response.status).toBe(409);
    await expect(response.json()).resolves.toEqual({
      error: {
        code: "CONFLICT",
        message: "A resource with the same unique value already exists.",
      },
    });
  });
});
