import {
  getAllCalculators,
  getAllCategories,
  getFeaturedCalculators,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
} from "@/lib/content";

export const dynamic = "force-static";

export async function GET() {
  const cats = await getAllCategories();
  const categories = cats
    .map((category) => `- ${category.name}: ${category.description}`)
    .join("\n");
  const featured = await getFeaturedCalculators(12);
  const popularPages = featured
    .map((calculator) => `- ${calculator.name}: ${SITE_URL}/${calculator.slug}`)
    .join("\n");
  const allCalcs = await getAllCalculators();
  const calculatorCount = allCalcs.length;

  return new Response(
    `# ${SITE_NAME}\n\n${SITE_TAGLINE}\n\n${SITE_NAME} is a free online calculator site for finance calculators, health calculators, math calculators, conversion tools, date and time tools, business calculators, and AI cost calculators.\n\n## Calculator Categories\n\n${categories}\n\n## Popular Pages\n\n${popularPages}\n\n## Index\n\nCurrent calculator pages: ${calculatorCount}. Canonical site URL: ${SITE_URL}.\n`,
    {
      headers: {
        "content-type": "text/plain; charset=utf-8",
      },
    },
  );
}
