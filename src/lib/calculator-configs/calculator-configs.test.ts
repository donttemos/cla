import { describe, expect, it } from "vitest";
import { getAllCalculators } from "@/lib/content";
import { calculatorConfigs, getCalculatorConfigBySlug } from "./index";

const representativeSlugs = [
  "age-calculator",
  "bmi-calculator",
  "loan-calculator",
  "percentage-calculator",
  "celsius-to-fahrenheit",
  "compound-interest-calculator",
  "salary-calculator",
  "bmr-calculator",
  "average-calculator",
  "llm-cost-calculator",
] as const;

describe("calculator configuration catalog", () => {
  it("defines the required representative calculators with slug, title, and inputs", () => {
    for (const slug of representativeSlugs) {
      const config = getCalculatorConfigBySlug(slug);

      expect(config, `${slug} should be registered`).toBeDefined();
      expect(config).toMatchObject({
        slug,
        title: expect.any(String),
        inputs: expect.any(Array),
      });
      expect(config?.title.trim().length).toBeGreaterThan(0);
      expect(config?.inputs.length).toBeGreaterThan(0);
    }
  });

  it("keeps every config renderable from metadata instead of calculator-specific forms", () => {
    const slugs = new Set<string>();

    for (const config of calculatorConfigs) {
      expect(config.slug).toMatch(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);
      expect(config.title.trim()).not.toBe("");
      expect(config.inputs.length, `${config.slug} should expose form inputs`).toBeGreaterThan(0);
      expect(slugs.has(config.slug), `${config.slug} should be unique`).toBe(false);
      slugs.add(config.slug);

      for (const input of config.inputs) {
        expect(input).toMatchObject({
          name: expect.any(String),
          label: expect.any(String),
          type: expect.any(String),
        });
        expect(input.name.trim()).not.toBe("");
        expect(input.label.trim()).not.toBe("");
        expect(["number", "date", "select", "text", "textarea"]).toContain(input.type);
      }
    }
  });

  it("registers an interactive config for every catalog calculator slug", () => {
    const configSlugs = new Set(calculatorConfigs.map((config) => config.slug));

    expect(configSlugs).toEqual(new Set(getAllCalculators().map((calculator) => calculator.slug)));
  });
});
