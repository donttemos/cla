import { describe, expect, it } from "vitest";
import { SITE_URL } from "@/lib/content";
import { GET } from "./route";

describe("llms.txt route", () => {
  it("publishes DTECALC root calculator URLs without legacy branding", async () => {
    const response = GET();
    const text = await response.text();

    expect(response.headers.get("content-type")).toBe(
      "text/plain; charset=utf-8",
    );
    expect(text).toContain("# DTECALC");
    expect(text).toContain(`${SITE_URL}/loan-calculator`);
    expect(text).not.toContain(`${SITE_URL}/calculator/`);
    expect(text).not.toContain("CalcVerse");
  });
});
