import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { generateStaticParams as generateBlogPostStaticParams } from "../../../../blog/[slug]/page";
import { CalculatorCard, SectionHeader } from "@/components";
import {
  getAllCalculators,
  getBlogPostBySlugAndLocale,
  getCalculatorBySlugAndLocale,
  SITE_NAME,
  SITE_URL,
} from "@/lib/content";
import { getDictionary } from "@/lib/i18n";
import { buildPageMetadata } from "@/lib/seo";
import {
  generateLocaleStaticParams,
  validateLocale,
  type LocaleSlugPageProps,
} from "../../_locale";

export async function generateStaticParams() {
  const locales = generateLocaleStaticParams();
  const posts = await Promise.resolve(generateBlogPostStaticParams());

  return locales.flatMap(({ locale }) =>
    posts.map(({ slug }) => ({ locale, slug })),
  );
}

export async function generateMetadata({
  params,
}: LocaleSlugPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const validLocale = validateLocale(locale);
  const post = getBlogPostBySlugAndLocale(slug, validLocale);

  return post
    ? buildPageMetadata({
        seoTitle: post.seoTitle,
        seoDescription: post.seoDescription,
        path: `/blog/${post.slug}`,
        locale: validLocale,
        type: "article",
      })
    : {};
}

export default async function LocaleBlogPostPage({
  params,
}: LocaleSlugPageProps) {
  const { locale, slug } = await params;
  const validLocale = validateLocale(locale);
  const dictionary = getDictionary(validLocale);
  const post = getBlogPostBySlugAndLocale(slug, validLocale);

  if (!post) {
    notFound();
  }

  const relatedCalculators = post.relatedCalculatorSlugs
    .map((calculatorSlug) => getCalculatorBySlugAndLocale(calculatorSlug, validLocale))
    .filter((calculator): calculator is ReturnType<typeof getAllCalculators>[number] =>
      Boolean(calculator),
    );
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: post.title,
      description: post.excerpt,
      mainEntityOfPage: `${SITE_URL}/${validLocale}/blog/${post.slug}`,
      author: {
        "@type": "Organization",
        name: SITE_NAME,
      },
      publisher: {
        "@type": "Organization",
        name: SITE_NAME,
      },
    },
  ];

  return (
    <main className="cv-container py-12">
      <nav className="text-sm text-slate-500" aria-label="Breadcrumb">
        <Link className="cv-link" href={`/${validLocale}`}>
          {dictionary.nav.home}
        </Link>
        <span aria-hidden="true"> / </span>
        <Link className="cv-link" href={`/${validLocale}/blog`}>
          {dictionary.pages.blog.eyebrow}
        </Link>
        <span aria-hidden="true"> / </span>
        <span>{post.title}</span>
      </nav>
      <h1 className="mt-3 max-w-4xl text-4xl leading-tight text-slate-950 sm:text-5xl">
        {post.title}
      </h1>
      <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
        {post.excerpt}
      </p>

      <section className="mt-10 cv-surface p-6">
        <div className="space-y-8 leading-7 text-slate-600">
          {post.sections?.map((section) => (
            <section key={section.heading}>
              <h2 className="text-2xl text-slate-950">{section.heading}</h2>
              <div className="mt-3 space-y-4">
                {section.body.map((para) => (
                  <p key={para}>{para}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      {relatedCalculators.length > 0 ? (
        <section className="mt-12">
          <SectionHeader title={dictionary.pages.blog.relatedCalculators} />
          <div className="cv-grid">
            {relatedCalculators.map((calculator) => (
              <CalculatorCard
                key={calculator.slug}
                title={calculator.name}
                description={calculator.description}
                href={`/${validLocale}/${calculator.slug}`}
              />
            ))}
          </div>
        </section>
      ) : null}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}
