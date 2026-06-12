import {
  getAllCalculators,
  getAllCategories,
  getFeaturedCalculators,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
} from "@/lib/content";

export const dynamic = "force-static";

export function GET() {
  const categories = getAllCategories();
  const calculators = getAllCalculators();

  return Response.json({
    site: {
      name: SITE_NAME,
      tagline: SITE_TAGLINE,
      url: SITE_URL,
      description:
        "DTECALC is a free online calculator site for finance, health, math, conversion, date, business, and AI cost tools.",
    },
    categories: categories.map((category) => ({
      name: category.name,
      slug: category.slug,
      url: `${SITE_URL}/category/${category.slug}`,
      description: category.description,
      calculatorCount: calculators.filter(
        (calculator) => calculator.categorySlug === category.slug,
      ).length,
    })),
    popularPages: getFeaturedCalculators(12).map((calculator) => ({
      name: calculator.name,
      slug: calculator.slug,
      url: `${SITE_URL}/${calculator.slug}`,
      description: calculator.description,
    })),
    calculators: calculators.map((calculator) => ({
      name: calculator.name,
      slug: calculator.slug,
      categorySlug: calculator.categorySlug,
      url: `${SITE_URL}/${calculator.slug}`,
      description: calculator.description,
      formula: calculator.formula,
      whatIs: calculator.whatIs,
    })),
  });
}
