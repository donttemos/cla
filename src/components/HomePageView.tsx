import { CalculatorCard, CalculatorSearch, CategoryCard, SectionHeader, LocalizedLink as Link } from "@/components";
import { TextReveal } from "@/components/ui/text-reveal";
import {
  getAllCategories,
  getAllCalculators,
  getCalculatorsByCategorySlug,
  getFeaturedCalculators,
  getLatestCalculators,
  getBlogPostsByLocale,
} from "@/lib/content";
import { getDictionary, type Locale, DEFAULT_LOCALE } from "@/lib/i18n";

export function HomePageView({ locale = DEFAULT_LOCALE as Locale }: { locale?: Locale }) {
  const dict = getDictionary(locale);
  const allCalculators = getAllCalculators();
  const featuredCalculators = getFeaturedCalculators(10);
  const latestCalculators = getLatestCalculators(6);
  const featuredBlogPosts = getBlogPostsByLocale(locale).filter(post => post.published).slice(0, 6);
  const categories = getAllCategories();
  const popularSearches = featuredCalculators.slice(0, 4).map((calculator) => ({
    label: calculator.name,
    href: `/${calculator.slug}`,
  }));
  const categoryLabels = [
    "Finance Calculators",
    "Health Calculators",
    "Math Calculators",
    "AI Cost Calculators",
    "Conversion Tools",
  ];

  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 sm:pt-48 sm:pb-32 grid-background border-b border-zinc-200">
        <div className="cv-container relative z-10 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/50 px-3 py-1 text-xs font-mono text-zinc-600 mb-8 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse"></span>
            {dict.home.freeLibrary}
          </div>
          
          <h1 className="text-6xl sm:text-8xl md:text-9xl font-serif tracking-tight leading-[0.9] text-zinc-950 mb-6 max-w-5xl mx-auto flex flex-col sm:flex-row flex-wrap justify-center gap-x-6 gap-y-2">
            <TextReveal delay={0.1}>{dict.home.title.split(" ")[0] || "Online"}</TextReveal>
            <TextReveal delay={0.3} className="text-zinc-400">{dict.home.title.split(" ").slice(1).join(" ") || "calculators for clear answers"}</TextReveal>
          </h1>
          
          <p className="max-w-2xl text-lg sm:text-xl text-zinc-600 mb-12 leading-relaxed font-sans font-light mt-4">
            {dict.home.subtitle}
          </p>

          <div className="mb-10 flex max-w-3xl flex-wrap items-center justify-center gap-3">
            {categoryLabels.map((label) => (
              <Link
                key={label}
                className="rounded-full border border-zinc-200 bg-white/70 px-4 py-2 text-sm font-semibold text-zinc-700 transition hover:border-zinc-400 hover:text-zinc-950"
                href={label === "Conversion Tools" ? "/category/conversion" : `/category/${label.split(" ")[0].toLowerCase()}`}
              >
                {label}
              </Link>
            ))}
          </div>
          
          <div className="w-full max-w-2xl">
            <CalculatorSearch popularSearches={popularSearches} />
          </div>
        </div>

        {/* Gradient fade at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
      </section>

      {/* Metrics Marquee */}
      <div className="border-b border-zinc-200 bg-zinc-50/50 overflow-hidden py-4 whitespace-nowrap flex relative">
        <div className="animate-marquee inline-flex items-center gap-16 px-8">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-16 items-center">
              <div className="flex items-center gap-3"><span className="text-xs font-mono text-zinc-500">{dict.home.latency}</span><span className="text-sm font-mono text-zinc-950">12ms</span></div>
              <div className="flex items-center gap-3"><span className="text-xs font-mono text-zinc-500">{dict.home.calculatorsLabel}</span><span className="text-sm font-mono text-zinc-950">{allCalculators.length}</span></div>
              <div className="flex items-center gap-3"><span className="text-xs font-mono text-zinc-500">{dict.home.categoriesLabel}</span><span className="text-sm font-mono text-zinc-950">{categories.length}</span></div>
              <div className="flex items-center gap-3"><span className="text-xs font-mono text-zinc-500">{dict.home.popularLabel}</span><span className="text-sm font-mono text-zinc-950">Mortgage</span></div>
              <div className="flex items-center gap-3"><span className="text-xs font-mono text-zinc-500">{dict.home.popularLabel}</span><span className="text-sm font-mono text-zinc-950">BMI</span></div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Grid Section */}
      <section className="py-24 relative">
        <div className="cv-container relative z-10">
          <SectionHeader
            eyebrow={dict.home.popularCalculators}
            title={dict.home.popularCalculators}
            description={dict.home.popularCalculatorsDesc}
          />
          <div className="cv-grid mt-12">
            {featuredCalculators.slice(0, 6).map((calculator) => (
              <CalculatorCard
                key={calculator.slug}
                title={calculator.name}
                description={calculator.description}
                href={`/${calculator.slug}`}
                badge={calculator.featured ? "Popular" : undefined}
                category={calculator.categorySlug}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-24 border-y border-zinc-200 bg-zinc-50/50">
        <div className="cv-container">
          <SectionHeader
            eyebrow="Calculator categories"
            title={dict.pages.category.eyebrow + " " + dict.pages.category.titleSuffix}
            description="Browse finance calculators, health calculators, math calculators, AI cost calculators, date tools, business calculators, and conversion tools."
            action={
              <Link className="cv-link !no-underline flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-600 hover:text-zinc-950" href="/calculators">
                {dict.home.allCalculators}
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                </svg>
              </Link>
            }
          />
          <div className="cv-grid mt-12 !grid-cols-1 md:!grid-cols-2 lg:!grid-cols-3">
            {categories.map((category) => (
              <CategoryCard
                key={category.slug}
                name={category.name}
                description={category.description}
                href={`/category/${category.slug}`}
                calculatorCount={getCalculatorsByCategorySlug(category.slug).length}
                featuredCalculators={getCalculatorsByCategorySlug(category.slug)
                  .slice(0, 3)
                  .map((calculator) => calculator.name)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Deep Content & SEO Authority Section */}
      <section className="cv-container py-32 space-y-32">
        {/* Why Trust DTECALC */}
        <article className="grid gap-16 lg:grid-cols-[1fr_320px]">
          <div className="cv-surface p-12 lg:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-[0.05]">
              <svg className="w-64 h-64 text-zinc-950" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="currentColor" d="M42.7,-73.4C55.9,-66.1,67.6,-55.4,76.6,-42.6C85.6,-29.8,91.9,-14.9,90.4,-0.8C88.8,13.3,79.5,26.6,70.1,38.5C60.8,50.3,51.4,60.8,39.6,67.6C27.7,74.3,13.9,77.3,0.3,76.8C-13.4,76.3,-26.8,72.2,-39.7,66.1C-52.5,60,-64.8,51.9,-72.2,40.6C-79.6,29.3,-82.1,14.6,-82.1,-0.1C-82.2,-14.7,-79.8,-29.5,-72.5,-40.9C-65.2,-52.4,-52.9,-60.5,-40.1,-67.9C-27.3,-75.3,-13.7,-82,0.9,-83.6C15.5,-85.1,31,-79.5,42.7,-73.4Z" transform="translate(100 100)" />
              </svg>
            </div>
            
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-serif text-zinc-950 tracking-tight mb-8">
                Why Trust DTECALC<br/><span className="text-zinc-400">Our Commitment to Accuracy</span>
              </h2>
              <div className="mt-8 space-y-6 text-lg font-sans leading-relaxed text-zinc-600 max-w-3xl">
                <p>
                  At DTECALC, we understand that numbers drive major life decisions. Whether you are calculating the monthly payment for a new home mortgage, estimating the return on investment for a business marketing campaign, or finding your daily caloric needs to meet a health goal, accuracy is not optional—it is mandatory. That is why we have built a comprehensive online platform grounded in mathematical transparency, algorithmic reliability, and strict engineering rigor.
                </p>
                <p>
                  Our editorial and engineering teams work together to ensure that every single calculator uses industry-standard formulas, verified data sources, and precision floating-point handling. We don&apos;t just give you a black-box result; we explain the exact math behind the numbers. Every tool page is meticulously structured to provide a detailed formula breakdown, real-world step-by-step examples, and a comprehensive FAQ section that addresses common edge cases and user questions.
                </p>
                <p>
                  We regularly review our calculators against updated financial regulations, health guidelines, and technology pricing models to ensure they remain current and highly relevant. Our commitment to the E-E-A-T (Experience, Expertise, Authoritativeness, and Trustworthiness) principles means you can rely on our results for both your personal and professional needs. We do not host sponsored calculators that skew results in favor of a specific loan product or diet plan. Instead, we provide 100% objective, deterministic outcomes based solely on the data inputs you provide.
                </p>
                <div className="pt-8">
                  <Link href="/editorial-policy" className="inline-flex items-center justify-center rounded-full bg-zinc-950 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-zinc-800 active:scale-[0.98]">
                    Read Our Editorial Policy
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          <aside className="cv-surface flex flex-col justify-between p-8 bg-zinc-50/50">
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-widest text-zinc-500 mb-6">{dict.home.indexTitle}</p>
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-zinc-200 pb-4">
                  <span className="text-sm text-zinc-600">{dict.home.indexFreeTools}</span>
                  <span className="flex items-center gap-2 text-sm text-zinc-950">{allCalculators.length}</span>
                </div>
                <div className="flex items-center justify-between border-b border-zinc-200 pb-4">
                  <span className="text-sm text-zinc-600">{dict.home.indexCategories}</span>
                  <span className="flex items-center gap-2 text-sm text-zinc-950">{categories.length}</span>
                </div>
                <div className="flex items-center justify-between pb-4">
                  <span className="text-sm text-zinc-600">{dict.home.indexBlog}</span>
                  <span className="flex items-center gap-2 text-sm text-zinc-950">Expert Guides</span>
                </div>
              </div>
            </div>
            
            <div className="pt-8 mt-8 border-t border-zinc-200">
              <p className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-2">{dict.home.popularSearchesTitle}</p>
              <p className="text-sm font-medium text-zinc-500">mortgage calculator, car loan calculator, interest calculator, percentage calculator, GPA calculator, age calculator</p>
            </div>
          </aside>
        </article>

        {/* How Our Calculators Work & Methodology */}
        <article className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-3xl font-serif text-zinc-950 tracking-tight">How Our Calculators Work</h2>
            <div className="space-y-4 text-zinc-600 leading-relaxed">
              <p>Behind every tool on DTECALC is a custom-built, high-performance calculation engine designed specifically for speed and precision. When you enter your data, our system processes it using strict floating-point arithmetic libraries to prevent the standard rounding errors that are notoriously common in basic browser-based math. This ensures that a fractional cent in a 30-year mortgage calculation doesn&apos;t compound into a multi-dollar discrepancy.</p>
              <p>For financial tools, we apply the exact standard amortization and compound interest formulas utilized by major banking institutions and certified public accountants. For health and fitness, we strictly incorporate equations endorsed by global health organizations like the CDC and WHO, including the Mifflin-St Jeor equation for basal metabolic rate (BMR) and standard body mass index (BMI) curves.</p>
              <p>For technology and AI cost estimates, our engine pulls from the latest documented API pricing tiers provided by enterprise LLM vendors. Every calculation happens instantaneously on your device, ensuring complete data privacy—your numbers never leave your browser.</p>
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-serif text-zinc-950 tracking-tight">Calculator Methodology</h2>
            <div className="space-y-6 text-zinc-600 leading-relaxed">
              <div className="cv-surface p-6 bg-zinc-50/50">
                <h3 className="font-semibold text-zinc-950 mb-2">1. Interest & Amortization</h3>
                <p className="text-sm">We strictly differentiate between simple and compound interest. Our compound interest engine allows for varying compounding frequencies (daily, monthly, annually) to give you an exact projection of your savings growth or loan cost over time, accounting for period boundaries.</p>
              </div>
              <div className="cv-surface p-6 bg-zinc-50/50">
                <h3 className="font-semibold text-zinc-950 mb-2">2. Health Metrics (BMI & BMR)</h3>
                <p className="text-sm">We calculate health metrics using verified metric formulas. For users preferring imperial units (pounds/inches), our system seamlessly converts the inputs with high-precision constants before applying the core formula, guaranteeing consistency across all localized experiences.</p>
              </div>
              <div className="cv-surface p-6 bg-zinc-50/50">
                <h3 className="font-semibold text-zinc-950 mb-2">3. Percentage and Ratio Math</h3>
                <p className="text-sm">Whether it is finding the percentage increase of a retail price or determining a corporate profit margin, our percentage calculators handle complex order of operations and gracefully manage edge cases, such as division by zero, to prevent application crashes.</p>
              </div>
            </div>
          </div>
        </article>

        {/* Featured Guides Section */}
        <section>
          <SectionHeader
            eyebrow="Expert Resources"
            title="Featured Guides & Articles"
            description="Deepen your understanding of the math behind the numbers with our comprehensive, editorially reviewed guides and tutorials."
            action={
              <Link className="cv-link !no-underline flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-600 hover:text-zinc-950" href="/blog">
                View All Guides
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                </svg>
              </Link>
            }
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
            {featuredBlogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="cv-surface group block p-8 transition-all hover:border-sky-300 hover:shadow-md"
              >
                <h3 className="text-xl font-semibold text-zinc-950 group-hover:text-sky-700 transition-colors mb-3 leading-tight">
                  {post.title}
                </h3>
                <p className="text-sm text-zinc-600 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="mt-6 flex items-center text-xs font-bold uppercase tracking-widest text-sky-600">
                  Read Guide &rarr;
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Latest Updates Section */}
        <section className="border-t border-zinc-200 pt-32">
          <SectionHeader
            eyebrow="New Additions"
            title="Latest Updates"
            description="We are constantly expanding our library. Explore the newest calculators and tools added to the DTECALC platform."
          />
          <div className="cv-grid mt-12">
            {latestCalculators.map((calculator) => (
              <CalculatorCard
                key={calculator.slug}
                title={calculator.name}
                description={calculator.description}
                href={`/${calculator.slug}`}
                category={calculator.categorySlug}
                badge="New"
              />
            ))}
          </div>
        </section>

      </section>
    </main>
  );
}