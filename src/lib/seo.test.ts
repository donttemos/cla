import { describe, expect, it } from "vitest";
import { getCalculatorBySlug, SITE_URL } from "@/lib/content";
import {
  buildCalculatorJsonLd,
  buildCalculatorMetadata,
  buildLanguageAlternates,
} from "@/lib/seo";

describe("calculator SEO helpers", () => {
  it("uses the root calculator path for metadata canonical and Open Graph URL", () => {
    const calculator = getRequiredCalculator("loan-calculator");
    const metadata = buildCalculatorMetadata(calculator);
    const expectedUrl = `${SITE_URL}/loan-calculator`;

    expect(metadata.alternates).toMatchObject({
      canonical: expectedUrl,
    });
    expect(metadata.openGraph).toMatchObject({
      url: expectedUrl,
    });
  });

  it("uses localized canonical URLs while keeping full language alternates", () => {
    const calculator = getRequiredCalculator("bmi-calculator");
    const metadata = buildCalculatorMetadata(calculator, "es");

    expect(metadata.alternates).toMatchObject({
      canonical: `${SITE_URL}/es/bmi-calculator`,
      languages: {
        "x-default": `${SITE_URL}/bmi-calculator`,
        en: `${SITE_URL}/bmi-calculator`,
        es: `${SITE_URL}/es/bmi-calculator`,
        "pt-BR": `${SITE_URL}/pt-BR/bmi-calculator`,
        "zh-CN": `${SITE_URL}/zh-CN/bmi-calculator`,
        "zh-TW": `${SITE_URL}/zh-TW/bmi-calculator`,
        id: `${SITE_URL}/id/bmi-calculator`,
      },
    });
    expect(metadata.openGraph).toMatchObject({
      url: `${SITE_URL}/es/bmi-calculator`,
    });
  });

  it("builds x-default and prefixed hreflang alternates for root paths", () => {
    expect(buildLanguageAlternates("/")).toMatchObject({
      "x-default": `${SITE_URL}/`,
      en: `${SITE_URL}/`,
      es: `${SITE_URL}/es`,
      "pt-BR": `${SITE_URL}/pt-BR`,
      id: `${SITE_URL}/id`,
      "zh-CN": `${SITE_URL}/zh-CN`,
      "zh-TW": `${SITE_URL}/zh-TW`,
    });
  });

  it("uses the root calculator path for WebApplication JSON-LD URL", () => {
    const calculator = getRequiredCalculator("loan-calculator");

    expect(buildCalculatorJsonLd(calculator)).toMatchObject({
      name: "Loan Calculator",
      url: `${SITE_URL}/loan-calculator`,
    });
  });
});

function getRequiredCalculator(slug: string) {
  const calculator = getCalculatorBySlug(slug);

  if (!calculator) {
    throw new Error(`Missing calculator fixture for ${slug}`);
  }

  return calculator;
}
