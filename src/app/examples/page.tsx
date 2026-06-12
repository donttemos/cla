import type { Metadata } from "next";
import { getAllExamples } from "@/lib/seo-centers";
import { buildPageMetadata } from "@/lib/seo";
import { SectionHeader, LocalizedLink as Link } from "@/components";

export const metadata: Metadata = buildPageMetadata({
  seoTitle: "Example Center - Step-by-Step Calculations",
  seoDescription: "View concrete, step-by-step examples of real-world calculations. From estimating mortgages to calculating exact BMI ranges.",
  path: "/examples",
});

export default function ExamplesIndexPage() {
  const examples = getAllExamples();

  return (
    <main className="cv-container py-12">
      <SectionHeader
        eyebrow="Knowledge Base"
        title="Example Center"
        description="Sometimes the best way to understand a complex calculation is to see a real-world example walked through step by step."
      />

      <div className="grid gap-6 md:grid-cols-2 mt-12">
        {examples.map((ex) => (
          <Link
            key={ex.slug}
            href={`/examples/${ex.slug}`}
            className="cv-surface block p-8 transition hover:border-sky-300 hover:shadow-md group"
          >
            <h2 className="text-2xl font-serif text-slate-950 group-hover:text-sky-700 transition-colors mb-4">{ex.title}</h2>
            <p className="text-base leading-7 text-slate-600 line-clamp-3">
              {ex.excerpt}
            </p>
            <div className="mt-6 flex items-center text-xs font-bold uppercase tracking-widest text-sky-600">
              View Example &rarr;
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}