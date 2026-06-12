import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllFormulas, getFormulaBySlug } from "@/lib/seo-centers";
import { buildPageMetadata } from "@/lib/seo";
import { SectionHeader, LocalizedLink as Link } from "@/components";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getAllFormulas().map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const formula = getFormulaBySlug(slug);
  if (!formula) return {};

  return buildPageMetadata({
    seoTitle: formula.seoTitle,
    seoDescription: formula.seoDescription,
    path: `/formulas/${formula.slug}`,
  });
}

export default async function FormulaDetailPage({ params }: Props) {
  const { slug } = await params;
  const formula = getFormulaBySlug(slug);

  if (!formula) notFound();

  return (
    <main className="cv-container py-12">
      <nav className="mb-8 text-sm text-slate-500" aria-label="Breadcrumb">
        <Link className="cv-link" href="/">Home</Link>
        <span aria-hidden="true"> / </span>
        <Link className="cv-link" href="/formulas">Formulas</Link>
        <span aria-hidden="true"> / </span>
        <span className="text-slate-900">{formula.title}</span>
      </nav>

      <SectionHeader
        eyebrow="Formula Explanation"
        title={formula.title}
        description={formula.description}
      />

      <article className="mt-12 max-w-4xl space-y-12">
        
        <section className="cv-surface p-8 lg:p-12 text-center bg-slate-950 border-none">
          <div className="font-mono text-2xl md:text-4xl text-white">
            {formula.formula}
          </div>
        </section>

        <div className="grid gap-12 lg:grid-cols-[1fr_300px]">
          <section className="space-y-6">
            <h2 className="text-2xl font-serif text-slate-950 mb-4">Methodology</h2>
            <div className="space-y-4 text-base leading-8 text-slate-600">
              {formula.explanation.map((para, i) => <p key={i}>{para}</p>)}
            </div>
          </section>

          <aside>
            <h3 className="text-lg font-semibold text-slate-950 mb-4 border-b border-slate-200 pb-2">Variables Key</h3>
            <ul className="space-y-4">
              {formula.variables.map((v) => (
                <li key={v.name} className="text-sm">
                  <span className="font-mono font-bold text-slate-900 bg-slate-100 px-2 py-0.5 rounded">{v.name}</span>
                  <p className="mt-1 text-slate-600 leading-relaxed">{v.definition}</p>
                </li>
              ))}
            </ul>
          </aside>
        </div>

        {formula.relatedCalculators.length > 0 && (
          <section className="pt-8 border-t border-slate-200">
            <h3 className="text-xl font-semibold text-slate-950 mb-6">Test This Formula in Action</h3>
            <div className="flex flex-wrap gap-4">
              {formula.relatedCalculators.map(calcSlug => (
                <Link key={calcSlug} href={`/${calcSlug}`} className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 hover:border-slate-300 hover:bg-slate-50">
                  Open the {calcSlug.replace(/-/g, ' ')}
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>
    </main>
  );
}