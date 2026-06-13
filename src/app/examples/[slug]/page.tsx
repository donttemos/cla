import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllExamples, getExampleBySlug } from "@/lib/seo-centers";
import { buildPageMetadata } from "@/lib/seo";
import { SectionHeader, LocalizedLink as Link } from "@/components";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  const all = await getAllExamples();
  return all.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const example = await getExampleBySlug(slug);
  if (!example) return {};

  return buildPageMetadata({
    seoTitle: example.seoTitle,
    seoDescription: example.seoDescription,
    path: `/examples/${example.slug}`,
  });
}

export default async function ExampleDetailPage({ params }: Props) {
  const { slug } = await params;
  const example = await getExampleBySlug(slug);

  if (!example) notFound();

  return (
    <main className="cv-container py-12">
      <nav className="mb-8 text-sm text-slate-500" aria-label="Breadcrumb">
        <Link className="cv-link" href="/">Home</Link>
        <span aria-hidden="true"> / </span>
        <Link className="cv-link" href="/examples">Examples</Link>
        <span aria-hidden="true"> / </span>
        <span className="text-slate-900">{example.title}</span>
      </nav>

      <SectionHeader
        eyebrow="Step-by-Step Example"
        title={example.title}
        description={example.description}
      />

      <article className="mt-12 max-w-3xl space-y-12">
        
        <section className="cv-surface p-8 bg-slate-50/50">
          <h2 className="text-xl font-serif text-slate-950 mb-3">The Scenario</h2>
          <p className="text-base leading-8 text-slate-700">
            {example.scenario}
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-serif text-slate-950 mb-6">Calculation Steps</h2>
          <div className="space-y-4">
            {example.steps.map((step, i) => (
              <div key={i} className="flex items-start gap-4 p-4 rounded-lg border border-slate-100 hover:bg-slate-50 transition">
                <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-sky-100 text-sky-700 font-bold font-mono text-sm">
                  {i + 1}
                </div>
                <p className="pt-1 text-slate-700 font-medium">{step}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="cv-surface p-8 border-l-4 border-l-sky-500">
          <h2 className="text-xl font-serif text-slate-950 mb-3">Final Result</h2>
          <p className="text-base leading-8 text-slate-700 font-medium">
            {example.result}
          </p>
        </section>

        {example.relatedCalculators.length > 0 && (
          <section className="pt-8 border-t border-slate-200">
            <h3 className="text-xl font-semibold text-slate-950 mb-6">Run Your Own Numbers</h3>
            <div className="flex flex-wrap gap-4">
              {example.relatedCalculators.map(calcSlug => (
                <Link key={calcSlug} href={`/${calcSlug}`} className="inline-flex items-center rounded-full bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-800 transition">
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