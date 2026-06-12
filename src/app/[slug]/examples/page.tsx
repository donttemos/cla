import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllCalculators, getCalculatorBySlug } from "@/lib/content";
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
    seoTitle: `${calculator.name} Examples & Use Cases`,
    seoDescription: `See real-world examples and common use cases for the ${calculator.name}. Learn how to apply these calculations to your situation.`,
    path: `/${calculator.slug}/examples`,
  });
}

export default async function CalculatorExamplesPage({ params }: CalculatorSubPageProps) {
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
        <span className="text-slate-900">Examples</span>
      </nav>

      <SectionHeader
        eyebrow="Examples"
        title={`Real-World ${calculator.name} Scenarios`}
        description="See how others are using this tool."
      />

      <article className="mt-12 max-w-4xl space-y-12">
        <section className="cv-surface p-8 bg-slate-50/50">
          <h2 className="text-2xl font-serif text-slate-950 mb-6">Detailed Example</h2>
          <p className="text-lg leading-8 text-slate-700">
            {calculator.example}
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-serif text-slate-950 mb-6">Common Use Cases</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {calculator.useCases.map((useCase) => (
              <div key={useCase} className="cv-surface p-6">
                <p className="text-base font-medium text-slate-800">{useCase}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="pt-8">
          <Link href={`/${calculator.slug}`} className="inline-flex items-center justify-center rounded-full bg-sky-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-sky-700 active:scale-[0.98]">
            Run Your Own Scenario
          </Link>
        </div>
      </article>
    </main>
  );
}