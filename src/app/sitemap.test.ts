import { describe, expect, it } from "vitest";
import { getAllCalculators, SITE_URL } from "@/lib/content";
import { SUPPORTED_LOCALES } from "@/lib/i18n";
import sitemap from "./sitemap";

describe("sitemap", () => {
  it("contains root calculator URLs and excludes legacy /calculator/ URLs", async () => {
    const sm = await sitemap();
    const urls = sm.map((entry) => entry.url);
    const all = await getAllCalculators();
    const calculatorSlugs = all.map(
      (calculator) => calculator.slug,
    );

    expect(urls).toEqual(
      expect.arrayContaining(
        calculatorSlugs.map((slug) => `${SITE_URL}/${slug}`),
      ),
    );
    expect(urls).not.toEqual(
      expect.arrayContaining(
        calculatorSlugs.map((slug) => `${SITE_URL}/calculator/${slug}`),
      ),
    );
  });

  it("emits localized calculator entries with language alternates", async () => {
    const entries = await sitemap();
    const calculatorEntries = entries.filter((entry) =>
      entry.url.endsWith("/loan-calculator"),
    );

    expect(calculatorEntries).toHaveLength(SUPPORTED_LOCALES.length);
    expect(calculatorEntries.map((entry) => entry.url)).toEqual(
      expect.arrayContaining([
        `${SITE_URL}/loan-calculator`,
        `${SITE_URL}/es/loan-calculator`,
        `${SITE_URL}/pt-BR/loan-calculator`,
        `${SITE_URL}/id/loan-calculator`,
        `${SITE_URL}/zh-CN/loan-calculator`,
        `${SITE_URL}/zh-TW/loan-calculator`,
      ]),
    );
    expect(calculatorEntries[0]?.alternates?.languages).toMatchObject({
      "x-default": `${SITE_URL}/loan-calculator`,
      en: `${SITE_URL}/loan-calculator`,
      es: `${SITE_URL}/es/loan-calculator`,
      "pt-BR": `${SITE_URL}/pt-BR/loan-calculator`,
      id: `${SITE_URL}/id/loan-calculator`,
      "zh-CN": `${SITE_URL}/zh-CN/loan-calculator`,
      "zh-TW": `${SITE_URL}/zh-TW/loan-calculator`,
    });
  });
});
