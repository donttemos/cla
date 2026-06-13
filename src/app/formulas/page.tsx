import type { Metadata } from "next";
import { getAllFormulas } from "@/lib/seo-centers";
import { buildPageMetadata } from "@/lib/seo";
import { SectionHeader, LocalizedLink as Link } from "@/components";

export const metadata: Metadata = buildPageMetadata({
  seoTitle: "Formula Center - Mathematical & Financial Formulas",
  seoDescription: "Explore our database of core formulas used in our calculators. See the raw math, variables, and explanations for standard industry equations.",
  path: "/formulas",
});

export default async function FormulasIndexPage() {
  const formulas = await getAllFormulas();

  return (
    <main className="cv-container py-12">
      <SectionHeader
        eyebrow="Knowledge Base"
        title="Formula Center"
        description="Explore the core mathematical, financial, and scientific formulas that power our deterministic calculation engines. We believe in complete transparency, never black-box results."
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
        {formulas.map((form) => (
          <Link
            key={form.slug}
            href={`/formulas/${form.slug}`}
            className="cv-surface block p-8 transition hover:border-sky-300 hover:shadow-md group flex flex-col justify-between"
          >
            <div>
              <h2 className="text-xl font-serif text-slate-950 group-hover:text-sky-700 transition-colors mb-4">{form.title}</h2>
              <div className="rounded bg-slate-50 p-3 font-mono text-xs font-semibold text-slate-800 border border-slate-200 text-center mb-4 truncate">
                {form.formula}
              </div>
              <p className="text-sm leading-6 text-slate-600 line-clamp-3">
                {form.excerpt}
              </p>
            </div>
            <div className="mt-6 flex items-center text-xs font-bold uppercase tracking-widest text-sky-600">
              View Formula &rarr;
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}