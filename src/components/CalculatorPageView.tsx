import type { Calculator } from "@/types/content";
import { getCalculatorConfigBySlug } from "@/lib/calculator-configs";
import { DEFAULT_LOCALE, getDictionary, type Locale } from "@/lib/i18n";
import {
  getBlogPostsForCalculatorSlug,
  getCategoryBySlug,
  getRelatedCalculators,
} from "@/lib/content";
import { buildCalculatorJsonLd } from "@/lib/seo";
import { CalculatorCard, DynamicCalculator, SectionHeader, LocalizedLink as Link } from "@/components";

type CalculatorPageViewProps = {
  calculator: Calculator;
  locale?: Locale;
};

export function CalculatorPageView({
  calculator,
  locale = DEFAULT_LOCALE,
}: CalculatorPageViewProps) {
  const dict = getDictionary(locale);
  const category = getCategoryBySlug(calculator.categorySlug);
  const relatedCalculators = getRelatedCalculators(calculator, 3);
  const relatedBlogPosts = getBlogPostsForCalculatorSlug(calculator.slug);
  const calculatorConfig = getCalculatorConfigBySlug(calculator.slug);
  const jsonLd = buildCalculatorJsonLd(calculator);

  return (
    <main className="cv-container py-12">
      <p className="text-sm font-bold uppercase tracking-wide text-sky-800">
        {category ? (
          <Link className="cv-link" href={`/category/${category.slug}`}>
            {category.name}
          </Link>
        ) : (
          dict.calculatorWidget.title
        )}
      </p>
      <h1 className="mt-3 max-w-4xl text-4xl leading-tight text-slate-950 sm:text-5xl">
        {calculator.name}
      </h1>
      <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
        {calculator.description}
      </p>

      <nav className="mt-6 text-sm text-slate-500" aria-label="Breadcrumb">
        <Link className="cv-link" href="/">
          {dict.nav.home}
        </Link>
        <span aria-hidden="true"> / </span>
        {category ? (
          <Link className="cv-link" href={`/category/${category.slug}`}>
            {category.name}
          </Link>
        ) : (
          <span>{dict.calculatorWidget.title}</span>
        )}
        <span aria-hidden="true"> / </span>
        <span>{calculator.name}</span>
      </nav>

      <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-500">
        {calculator.lastUpdated && (
          <p>
            <span className="font-medium text-slate-700">Last Updated:</span> {calculator.lastUpdated}
          </p>
        )}
        {calculator.reviewedBy && (
          <p>
            <span className="font-medium text-slate-700">Reviewed By:</span> {calculator.reviewedBy}
          </p>
        )}
        {calculator.calculationMethod && (
          <p>
            <span className="font-medium text-slate-700">Method:</span> {calculator.calculationMethod}
          </p>
        )}
      </div>

      <div className="mt-8">
        {calculatorConfig ? (
          <DynamicCalculator locale={locale} slug={calculator.slug} />
        ) : (
          <section className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
            <div className="cv-surface p-6">
              <h2 className="text-2xl text-slate-950">{dict.calculatorWidget.calculatorWidgetTitle}</h2>
              <p className="mt-3 text-slate-600">
                {dict.calculatorWidget.calculatorWidgetDesc.replace('{name}', calculator.name)}
              </p>
            </div>
            <div className="cv-surface p-6">
              <h2 className="text-2xl text-slate-950">{dict.calculatorWidget.whatThisShowsTitle}</h2>
              <p className="mt-3 text-slate-600">
                {dict.calculatorWidget.whatThisShowsDesc}
              </p>
            </div>
          </section>
        )}
      </div>

      <aside className="mt-6 cv-surface flex min-h-24 items-center justify-center p-6 text-center text-sm font-semibold text-slate-500">
        AdSense placement: result below
      </aside>

      {/* Part 1: Tool Introduction */}
      <section className="mt-12">
        <SectionHeader
          eyebrow="Introduction"
          title={`${dict.calculatorWidget.whatIsThe} ${calculator.name}?`}
          description={calculator.contentSummary}
        />
        <div className="grid gap-6 lg:grid-cols-[1fr_280px] mt-8">
          <div className="space-y-6 text-base leading-8 text-slate-600">
            <p>{calculator.whatIs}</p>
          </div>
          <aside className="cv-surface flex min-h-36 items-center justify-center p-6 text-center text-sm font-semibold text-slate-500">
            AdSense placement: content rail
          </aside>
        </div>
      </section>

      {/* Part 2: Formula Explanation */}
      <section className="mt-16 border-t border-zinc-200 pt-16">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-3xl font-serif text-slate-950 tracking-tight">{dict.calculatorWidget.formulaExplanation}</h2>
            <div className="rounded-md bg-slate-50 p-6 font-mono text-sm font-semibold text-slate-800 border border-slate-200">
              {calculator.formula}
            </div>
            <p className="text-base leading-8 text-slate-600">
              {calculator.formulaExplanation}
            </p>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-serif text-slate-950 tracking-tight">{dict.calculatorWidget.howItWorks}</h3>
            <ol className="list-decimal space-y-4 pl-5 text-base leading-8 text-slate-600">
              {calculator.howToSteps.map((step) => (
                <li key={step} className="pl-2">{step}</li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Part 3: Use Cases & Examples */}
      <section className="mt-16 border-t border-zinc-200 pt-16">
        <SectionHeader title={dict.calculatorWidget.commonUses} />
        <div className="mt-8 space-y-8">
          <article className="cv-surface p-8 bg-slate-50/50">
            <h3 className="text-xl font-semibold text-slate-950 mb-4">{dict.calculatorWidget.examples}</h3>
            <p className="text-base leading-8 text-slate-600">
              {calculator.example}
            </p>
          </article>
          
          <div className="grid gap-6 md:grid-cols-3">
            {calculator.useCases.map((useCase) => (
              <article key={useCase} className="cv-surface p-6">
                <h4 className="text-lg font-medium text-slate-950">{useCase}</h4>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {dict.calculatorWidget.formulaNote}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Part 4: FAQ */}
      <section className="mt-16 border-t border-zinc-200 pt-16">
        <SectionHeader
          eyebrow="FAQ"
          title={`${dict.calculatorWidget.aboutThe} ${calculator.name}`}
          description={calculator.contentSummary}
        />
        <div className="grid gap-6 md:grid-cols-2 mt-8">
          {calculator.faq.map((item) => (
            <article key={item.question} className="cv-surface p-6">
              <h3 className="text-lg font-semibold text-slate-950 mb-3">{item.question}</h3>
              <p className="text-base leading-7 text-slate-600">{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <aside className="mt-8 cv-surface flex min-h-24 items-center justify-center p-6 text-center text-sm font-semibold text-slate-500">
        AdSense placement: FAQ middle
      </aside>

      {/* Part 5: Related Content & Version History */}
      <div className="mt-16 border-t border-zinc-200 pt-16 space-y-16">
        {calculator.versionHistory && calculator.versionHistory.length > 0 && (
        <section className="mt-12">
          <SectionHeader eyebrow="Changelog" title="Version History" description={`Track changes and updates to the ${calculator.name}.`} />
          <div className="mt-6 space-y-4">
            {calculator.versionHistory.map((history) => (
              <article key={history.version} className="cv-surface p-5 text-sm">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <span className="font-semibold text-slate-900">v{history.version}</span>
                  <time className="text-slate-500">{history.date}</time>
                </div>
                <p className="mt-3 leading-6 text-slate-600">{history.changes}</p>
              </article>
            ))}
          </div>
        </section>
      )}

      {relatedCalculators.length > 0 ? (
        <section className="mt-12">
          <SectionHeader title={dict.calculatorWidget.relatedCalculators} />
          <div className="cv-grid">
            {relatedCalculators.map((related) => (
              <CalculatorCard
                key={related.slug}
                title={related.name}
                description={related.description}
                href={`/${related.slug}`}
              />
            ))}
          </div>
        </section>
      ) : null}

      {relatedBlogPosts.length > 0 ? (
        <section className="mt-12">
          <SectionHeader title={dict.calculatorWidget.relatedBlogPosts} />
          <div className="grid gap-4 md:grid-cols-2">
            {relatedBlogPosts.map((post) => (
              <Link
                key={post.slug}
                className="cv-surface block p-5 transition hover:border-sky-300"
                href={`/blog/${post.slug}`}
              >
                <h3 className="text-lg text-slate-950">{post.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {post.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      <aside className="mt-12 cv-surface flex min-h-24 items-center justify-center p-6 text-center text-sm font-semibold text-slate-500">
        AdSense placement: bottom content
      </aside>

      </div> {/* End of Part 5: Related Content */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}
