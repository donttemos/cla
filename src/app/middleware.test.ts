import { describe, expect, it } from "vitest";
import { NextRequest } from "next/server";
import { middleware } from "../middleware";

describe("middleware locale routing", () => {
  it("redirects human root requests to the preferred non-English locale", () => {
    const response = middleware(
      new NextRequest("https://dtecalc.example/", {
        headers: {
          "accept-language": "fr-CA,fr;q=0.9,en;q=0.8",
          "user-agent": "Mozilla/5.0",
        },
      }),
    );

    expect(response.status).toBe(307);
    expect(response.headers.get("location")).toBe("https://dtecalc.example/fr");
  });

  it("does not redirect bots from the root page", () => {
    const response = middleware(
      new NextRequest("https://dtecalc.example/", {
        headers: {
          "accept-language": "fr-CA,fr;q=0.9,en;q=0.8",
          "user-agent": "ExampleBot/1.0",
        },
      }),
    );

    expect(response.status).toBe(200);
    expect(response.headers.get("location")).toBeNull();
  });

  it("prefers the language cookie over Accept-Language", () => {
    const response = middleware(
      new NextRequest("https://dtecalc.example/", {
        headers: {
          "accept-language": "fr-CA,fr;q=0.9",
          cookie: "app_language=de",
          "user-agent": "Mozilla/5.0",
        },
      }),
    );

    expect(response.status).toBe(307);
    expect(response.headers.get("location")).toBe("https://dtecalc.example/de");
  });
});
