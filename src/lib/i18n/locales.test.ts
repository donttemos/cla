import { describe, expect, it } from "vitest";
import {
  DEFAULT_LOCALE,
  addLocaleToPathname,
  getLocalePrefix,
  getLocaleLabel,
  getLocalizedPathname,
  isSupportedLocale,
  isRtlLocale,
  matchLocaleFromAcceptLanguage,
  normalizeLocale,
  stripLocaleFromPathname,
} from "./locales";

describe("i18n locale helpers", () => {
  it("recognizes supported canonical locales", () => {
    expect(isSupportedLocale("en")).toBe(true);
    expect(isSupportedLocale("pt-BR")).toBe(true);
    expect(isSupportedLocale("pt-br")).toBe(false);
    expect(isSupportedLocale("en-US")).toBe(false);
  });

  it("normalizes regional and script variants to supported locales", () => {
    expect(normalizeLocale("en-US")).toBe(DEFAULT_LOCALE);
    expect(normalizeLocale("pt-br")).toBe("pt-BR");
    expect(normalizeLocale("zh-Hant-TW")).toBe("zh-TW");
    expect(normalizeLocale("zh-Hans-CN")).toBe("zh-CN");
    expect(normalizeLocale("unknown")).toBe(DEFAULT_LOCALE);
  });

  it("keeps English unprefixed and prefixes every other locale", () => {
    expect(getLocalePrefix("en")).toBe("");
    expect(getLocalePrefix("es")).toBe("/es");
    expect(getLocalePrefix("pt-BR")).toBe("/pt-BR");
  });

  it("returns locale display metadata for switcher integrations", () => {
    expect(getLocaleLabel("pt-BR")).toBe("Portuguese (Brazil)");
    expect(isRtlLocale("zh-TW")).toBe(false);
    expect(isRtlLocale("en")).toBe(false);
  });

  it("strips prefixed locales from pathnames", () => {
    expect(stripLocaleFromPathname("/es/calculators")).toEqual({
      locale: "es",
      pathname: "/calculators",
    });
    expect(stripLocaleFromPathname("/pt-BR")).toEqual({
      locale: "pt-BR",
      pathname: "/",
    });
    expect(stripLocaleFromPathname("/calculators")).toEqual({
      locale: null,
      pathname: "/calculators",
    });
  });

  it("adds and swaps locale prefixes without prefixing English", () => {
    expect(addLocaleToPathname("/calculators", "zh-CN")).toBe("/zh-CN/calculators");
    expect(addLocaleToPathname("/es/calculators", "pt-BR")).toBe(
      "/pt-BR/calculators",
    );
    expect(addLocaleToPathname("/pt-BR/calculators", "en")).toBe("/calculators");
    expect(addLocaleToPathname("/", "id")).toBe("/id");
    expect(getLocalizedPathname("/id/search", "en")).toBe("/search");
  });

  it("matches the best supported locale from Accept-Language", () => {
    expect(matchLocaleFromAcceptLanguage("es-MX,es;q=0.9,en;q=0.8")).toBe(
      "es",
    );
    expect(matchLocaleFromAcceptLanguage("pt;q=0.9,en;q=0.4")).toBe("pt-BR");
    expect(matchLocaleFromAcceptLanguage("zh-Hant-TW;q=0.8,en;q=0.7")).toBe(
      "zh-TW",
    );
    expect(matchLocaleFromAcceptLanguage("unknown;q=0.9,id;q=0.5")).toBe("id");
    expect(matchLocaleFromAcceptLanguage("es;q=0,unknown;q=0.9")).toBe(
      DEFAULT_LOCALE,
    );
  });
});
