import type { Metadata } from "next";
import { getAllComparisons } from "@/lib/seo-centers";
import { buildPageMetadata } from "@/lib/seo";
import { SectionHeader, LocalizedLink as Link } from "@/components";

export const metadata: Metadata = buildPageMetadata({
  seoTitle: "Comparisons Center - Compare Formulas & Concepts",
  seoDescription: "Compare related mathematical, financial, and health concepts. Understand the differences between APR and APY, Simple vs Compound Interest, and more.",
  path: "/comparisons",
});

export default async function ComparisonsIndexPage() {
  const comparisons = await getAllComparisons();

  return (
    <main className="cv-container py-12">
      <SectionHeader
        eyebrow="Knowledge Base"
        title="Comparison Center"
        description="Compare related mathematical, financial, and health concepts side-by-side to understand which formula or tool fits your specific needs."
      />

      <div className="grid gap-6 md:grid-cols-2 mt-12">
        {comparisons.map((comp) => (
          <Link
            key={comp.slug}
            href={`/comparisons/${comp.slug}`}
            className="cv-surface block p-8 transition hover:border-sky-300 hover:shadow-md group"
          >
            <h2 className="text-2xl font-serif text-slate-950 group-hover:text-sky-700 transition-colors mb-4">{comp.title}</h2>
            <p className="text-base leading-7 text-slate-600 line-clamp-3">
              {comp.excerpt}
            </p>
            <div className="mt-6 flex items-center text-xs font-bold uppercase tracking-widest text-sky-600">
              Read Comparison &rarr;
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}