import type { Metadata } from "next";
import { CalculatorCard, CalculatorSearch, SectionHeader } from "@/components";
import { getAllCalculators, getCategoryBySlug, getFeaturedCalculators } from "@/lib/content";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  seoTitle: "All Calculators - Free Online Calculator Library",
  seoDescription: "Browse every free online calculator available on DTECALC, including finance, health, math, conversion, business, date, and AI cost tools.",
  path: "/calculators",
});

export default function CalculatorsPage() {
  const calculators = getAllCalculators();
  const popularSearches = getFeaturedCalculators(5).map((calculator) => ({
    label: calculator.name,
    href: `/${calculator.slug}`,
  }));

  return (
    <main className="cv-container py-12">
      <SectionHeader
        eyebrow="All calculators"
        title="Browse the DTECALC library"
        description="A growing library of finance calculators, health calculators, math calculators, conversion tools, date tools, business calculators, and AI cost calculators."
      />
      <div className="mb-8 max-w-3xl">
        <CalculatorSearch popularSearches={popularSearches} />
      </div>
      <div className="cv-grid">
        {calculators.map((calculator) => {
          const category = getCategoryBySlug(calculator.categorySlug);
          return (
            <CalculatorCard
              key={calculator.slug}
              title={calculator.name}
              description={calculator.description}
              href={`/${calculator.slug}`}
              category={category?.name}
              badge={calculator.featured ? "Popular" : undefined}
            />
          );
        })}
      </div>
    </main>
  );
}
