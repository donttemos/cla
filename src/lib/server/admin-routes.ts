import type { NextRequest } from "next/server";
import { jsonResult, type ApiResult } from "./api-response";
import {
  createResource,
  databaseErrorToResult,
  deleteResource,
  getResource,
  listResources,
  parseAdminId,
  updateResource,
  type AdminResource,
  type QueryExecutor,
} from "./admin-crud";
import { requireAdminRequest } from "./admin-auth";

export async function handleResourceList(
  request: NextRequest,
  resource: AdminResource,
  executor?: QueryExecutor,
): Promise<Response> {
  return handleAdminRequest(request, async () => {
    const limit = Number(request.nextUrl.searchParams.get("limit") ?? "50");
    const offset = Number(request.nextUrl.searchParams.get("offset") ?? "0");
    return listResources(resource, executor, { limit, offset });
  });
}

export async function handleResourceCreate(
  request: NextRequest,
  resource: AdminResource,
  executor?: QueryExecutor,
): Promise<Response> {
  return handleAdminRequest(request, async () =>
    createResource(resource, await request.json(), executor),
  );
}

export async function handleResourceGet(
  request: NextRequest,
  resource: AdminResource,
  idParam: string,
  executor?: QueryExecutor,
): Promise<Response> {
  return handleResourceById(request, idParam, (id) => getResource(resource, id, executor));
}

export async function handleResourceUpdate(
  request: NextRequest,
  resource: AdminResource,
  idParam: string,
  executor?: QueryExecutor,
): Promise<Response> {
  return handleResourceById(request, idParam, async (id) =>
    updateResource(resource, id, await request.json(), executor),
  );
}

export async function handleResourceDelete(
  request: NextRequest,
  resource: AdminResource,
  idParam: string,
  executor?: QueryExecutor,
): Promise<Response> {
  return handleResourceById(request, idParam, (id) => deleteResource(resource, id, executor));
}

async function handleResourceById(
  request: NextRequest,
  idParam: string,
  handler: (id: number) => Promise<ApiResult<unknown>>,
): Promise<Response> {
  const id = parseAdminId(idParam);
  if (!id.ok) {
    return jsonResult(id);
  }

  return handleAdminRequest(request, () => handler(id.data));
}

async function handleAdminRequest<T>(
  request: NextRequest,
  handler: () => Promise<ApiResult<T>>,
): Promise<Response> {
  const auth = requireAdminRequest(request);
  if (!auth.ok) {
    return jsonResult(auth);
  }

  try {
    return jsonResult(await handler());
  } catch (error) {
    if (error instanceof SyntaxError) {
      return jsonResult({
        ok: false,
        status: 400,
        error: {
          code: "BAD_REQUEST",
          message: "Request body must be valid JSON.",
        },
      });
    }

    return jsonResult(databaseErrorToResult(error));
  }
}
