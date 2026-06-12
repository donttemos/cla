import { describe, expect, it, vi } from "vitest";
import { SITE_URL } from "@/lib/content";
import { metadata } from "./layout";
import robots from "./robots";

vi.mock("next/font/google", () => {
  const font = () => ({ variable: "mock-font-variable" });

  return {
    Instrument_Sans: font,
    Instrument_Serif: font,
    JetBrains_Mono: font,
  };
});

describe("app SEO metadata", () => {
  it("allows public assets while blocking only admin and API routes in robots.txt", () => {
    expect(robots()).toEqual({
      rules: [
        {
          userAgent: "*",
          allow: "/",
          disallow: ["/admin", "/api"],
        },
      ],
      sitemap: `${SITE_URL}/sitemap.xml`,
    });
  });

  it("does not force a root canonical from the root layout", () => {
    expect(metadata.alternates).toBeUndefined();
    expect(metadata.metadataBase?.toString()).toBe(`${SITE_URL}/`);
  });
});
