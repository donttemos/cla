import { describe, expect, it } from "vitest";
import { getDictionary } from "./index";

describe("localized dictionary page groups", () => {
  it("does not fall back to English page-group copy for Spanish", () => {
    const dictionary = getDictionary("es");

    expect(dictionary.pages.calculators.title).toBe("Explora la biblioteca de DTECALC");
    expect(dictionary.pages.blog.financeGuides).toBe("Guias de finanzas");
  });

  it("does not fall back to English page-group copy for Portuguese (Brazil)", () => {
    const dictionary = getDictionary("pt-BR");

    expect(dictionary.pages.calculators.title).toBe("Explore a biblioteca da DTECALC");
    expect(dictionary.pages.blog.businessConversionGuides).toBe(
      "Guias de negocios e conversoes",
    );
  });

  it("does not fall back to English page-group copy for Indonesian", () => {
    const dictionary = getDictionary("id");

    expect(dictionary.pages.calculators.title).toBe("Jelajahi pustaka DTECALC");
    expect(dictionary.pages.category.titleSuffix).toBe("Kalkulator");
  });
});
