import { NextRequest } from "next/server";
import { afterEach, describe, expect, it } from "vitest";
import { requireAdminRequest } from "./admin-auth";

describe("admin auth guard", () => {
  afterEach(() => {
    delete process.env.ADMIN_API_KEY;
  });

  it("blocks admin requests until ADMIN_API_KEY is configured", () => {
    const request = new NextRequest("http://localhost/api/admin/categories", {
      method: "GET",
    });

    expect(requireAdminRequest(request)).toEqual({
      ok: false,
      status: 403,
      error: {
        code: "FORBIDDEN",
        message: "ADMIN_API_KEY must be configured before admin APIs are available.",
      },
    });
  });

  it("allows admin requests with the configured temporary key", () => {
    process.env.ADMIN_API_KEY = "secret-key";
    const request = new NextRequest("http://localhost/api/admin/categories", {
      method: "POST",
      headers: {
        authorization: "Bearer secret-key",
      },
    });

    expect(requireAdminRequest(request)).toEqual({
      ok: true,
      status: 200,
      data: { id: "api-key-admin" },
    });
  });
});
