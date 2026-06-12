import type { NextRequest } from "next/server";
import { fail, ok, type ApiResult } from "./api-response";

export type AdminActor = {
  id: string | null;
};

export function requireAdminRequest(request: NextRequest): ApiResult<AdminActor> {
  const expectedKey = process.env.ADMIN_API_KEY;

  if (!expectedKey) {
    return fail(403, "FORBIDDEN", "ADMIN_API_KEY must be configured before admin APIs are available.");
  }

  const headerKey = request.headers.get("x-admin-api-key");
  const bearerToken = request.headers.get("authorization")?.replace(/^Bearer\s+/i, "");
  const cookieToken = request.cookies.get("admin_token")?.value;

  if (headerKey === expectedKey || bearerToken === expectedKey || cookieToken === expectedKey) {
    return ok({ id: "api-key-admin" });
  }

  return fail(401, "UNAUTHORIZED", "Admin authentication is required.");
}
