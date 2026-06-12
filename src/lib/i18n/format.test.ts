import { describe, expect, it } from "vitest";
import { formatCurrency, formatDate, formatNumber } from "./format";

describe("i18n format helpers", () => {
  it("formats numbers with Intl using the provided locale", () => {
    expect(formatNumber(1234.5, "en")).toBe("1,234.5");
    expect(formatNumber(1234.5, "pt-BR")).toBe("1.234,5");
  });

  it("formats dates with Intl using stable explicit options", () => {
    expect(
      formatDate("2026-06-02T00:00:00.000Z", "en", {
        day: "2-digit",
        month: "2-digit",
        timeZone: "UTC",
        year: "numeric",
      }),
    ).toBe("06/02/2026");
  });

  it("formats currency with Intl and a stable currency contract", () => {
    expect(formatCurrency(1234.5, "en", "USD")).toBe("$1,234.50");
    expect(formatCurrency(1234.5, "pt-BR", "BRL")).toMatch(/R\$\s?1\.234,50/);
  });
});
