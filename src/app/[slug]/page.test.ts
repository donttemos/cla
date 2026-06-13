import { describe, expect, it } from "vitest";
import { getAllCalculators, SITE_URL } from "@/lib/content";
import { generateMetadata, generateStaticParams } from "./page";

describe("root calculator slug route", () => {
  it("generates static params for every calculator slug", async () => {
    const all = await getAllCalculators();
    const params = await generateStaticParams();
    expect(params).toEqual(
      all.map((calculator) => ({ slug: calculator.slug })),
    );
  });

  it("resolves known slug metadata to the root calculator canonical URL", async () => {
    await expect(
      generateMetadata({
        params: Promise.resolve({ slug: "loan-calculator" }),
      }),
    ).resolves.toMatchObject({
      alternates: {
        canonical: `${SITE_URL}/loan-calculator`,
      },
      openGraph: {
        url: `${SITE_URL}/loan-calculator`,
      },
    });
  });

  it("returns empty metadata for an unknown slug", async () => {
    await expect(
      generateMetadata({
        params: Promise.resolve({ slug: "missing-calculator" }),
      }),
    ).resolves.toEqual({});
  });
});
