import { describe, expect, it } from "vitest";
import {
  DEFAULT_LOCALE,
  SUPPORTED_LOCALES,
  dictionaries,
  getDictionary,
} from "./index";

describe("i18n dictionaries", () => {
  it("preserves a dictionary entry for every supported locale", () => {
    expect(Object.keys(dictionaries).sort()).toEqual(
      [...SUPPORTED_LOCALES].sort(),
    );
  });

  it("keeps the core dictionary shape stable across locales", () => {
    const englishKeys = Object.keys(dictionaries.en);

    for (const locale of SUPPORTED_LOCALES) {
      expect(Object.keys(dictionaries[locale])).toEqual(englishKeys);
      expect(Object.keys(dictionaries[locale].calculatorWidget)).toEqual(
        Object.keys(dictionaries.en.calculatorWidget),
      );
      expect(Object.keys(dictionaries[locale].languageSwitcher)).toEqual(
        Object.keys(dictionaries.en.languageSwitcher),
      );
    }
  });

  it("returns the requested dictionary", () => {
    expect(getDictionary(DEFAULT_LOCALE)).toBe(dictionaries.en);
    expect(getDictionary("es")).toBe(dictionaries.es);
  });

  it("uses Chinese dictionaries instead of falling back to English", () => {
    expect(getDictionary("zh-CN").nav.home).toBe("首页");
    expect(getDictionary("zh-TW").nav.home).toBe("首頁");
    expect(getDictionary("zh-CN")).not.toBe(dictionaries.en);
    expect(getDictionary("zh-TW")).not.toBe(dictionaries.en);
  });
});
