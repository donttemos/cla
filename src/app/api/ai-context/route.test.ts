import { describe, expect, it } from "vitest";
import { SITE_URL } from "@/lib/content";
import { GET } from "./route";

describe("ai-context route", () => {
  it("returns DTECALC context with root calculator URLs", async () => {
    const response = GET();
    const body = await response.json();
    const serializedBody = JSON.stringify(body);

    expect(body.site).toMatchObject({
      name: "DTECALC",
      url: SITE_URL,
    });
    expect(body.site.description).toContain("DTECALC");
    expect(body.site.description).not.toContain("CalcVerse");
    expect(serializedBody).toContain(`${SITE_URL}/loan-calculator`);
    expect(serializedBody).not.toContain(`${SITE_URL}/calculator/`);
  });
});
