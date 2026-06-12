import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllCalculators, getCalculatorBySlug, SITE_URL } from "@/lib/content";
import { buildPageMetadata } from "@/lib/seo";
import { SectionHeader, LocalizedLink as Link } from "@/components";

type CalculatorSubPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getAllCalculators().map((calculator) => ({ slug: calculator.slug }));
}

export async function generateMetadata({
  params,
}: CalculatorSubPageProps): Promise<Metadata> {
  const { slug } = await params;
  const calculator = getCalculatorBySlug(slug);

  if (!calculator) return {};

  return buildPageMetadata({
    seoTitle: `${calculator.name} Formula Explained`,
    seoDescription: `Understand the exact math behind the ${calculator.name}. We explain the formula, variables, and calculation methodology in detail.`,
    path: `/${calculator.slug}/formula`,
  });
}

export default async function CalculatorFormulaPage({ params }: CalculatorSubPageProps) {
  const { slug } = await params;
  const calculator = getCalculatorBySlug(slug);

  if (!calculator) notFound();

  return (
    <main className="cv-container py-12">
      <nav className="mb-8 text-sm text-slate-500" aria-label="Breadcrumb">
        <Link className="cv-link" href="/">Home</Link>
        <span aria-hidden="true"> / </span>
        <Link className="cv-link" href={`/${calculator.slug}`}>{calculator.name}</Link>
        <span aria-hidden="true"> / </span>
        <span className="text-slate-900">Formula</span>
      </nav>

      <SectionHeader
        eyebrow="Formula & Methodology"
        title={`The Math Behind the ${calculator.name}`}
        description="Understanding how your results are calculated."
      />

      <article className="mt-12 max-w-3xl space-y-8">
        <section className="cv-surface p-8">
          <h2 className="text-2xl font-serif text-slate-950 mb-6">Core Formula</h2>
          <div className="rounded-md bg-slate-50 p-6 font-mono text-lg font-semibold text-slate-800 border border-slate-200 text-center mb-6">
            {calculator.formula}
          </div>
          <h3 className="text-xl font-semibold text-slate-950 mb-3 mt-8">Formula Explanation</h3>
          <p className="text-base leading-8 text-slate-600">
            {calculator.formulaExplanation}
          </p>
        </section>

        {calculator.calculationMethod && (
          <section className="cv-surface p-8">
            <h2 className="text-2xl font-serif text-slate-950 mb-4">Calculation Methodology</h2>
            <p className="text-base leading-8 text-slate-600">{calculator.calculationMethod}</p>
          </section>
        )}

        <div className="pt-8">
          <Link href={`/${calculator.slug}`} className="inline-flex items-center justify-center rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-sky-700 active:scale-[0.98]">
            Test the Formula
          </Link>
        </div>
      </article>
    </main>
  );
}