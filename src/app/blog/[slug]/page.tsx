import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CalculatorCard, SectionHeader } from "@/components";
import {
  getBlogPostBySlug,
  getCalculatorBySlug,
  SITE_NAME,
  SITE_URL,
  getBlogPostsByLocale,
} from "@/lib/content";
import { buildPageMetadata } from "@/lib/seo";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n";
import type { Calculator } from "@/types/content";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  const posts = await getBlogPostsByLocale(DEFAULT_LOCALE as Locale);
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  return post
    ? buildPageMetadata({
        seoTitle: post.seoTitle,
        seoDescription: post.seoDescription,
        path: `/blog/${post.slug}`,
        type: "article",
      })
    : {};
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedCalculatorsRaw = await Promise.all(
    post.relatedCalculatorSlugs.map((calculatorSlug) => getCalculatorBySlug(calculatorSlug))
  );
  const relatedCalculators = relatedCalculatorsRaw.filter((calculator): calculator is Calculator => Boolean(calculator));
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: post.title,
      description: post.excerpt,
      mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
      author: {
        "@type": "Organization",
        name: SITE_NAME,
      },
      publisher: {
        "@type": "Organization",
        name: SITE_NAME,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: SITE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: `${SITE_URL}/blog`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: post.title,
          item: `${SITE_URL}/blog/${post.slug}`,
        },
      ],
    },
  ];

  return (
    <main className="cv-container py-12">
      <nav className="text-sm text-slate-500" aria-label="Breadcrumb">
        <Link className="cv-link" href="/">
          Home
        </Link>
        <span aria-hidden="true"> / </span>
        <Link className="cv-link" href="/blog">
          Blog
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
          <SectionHeader title="Related calculators" />
          <div className="cv-grid">
            {relatedCalculators.map((calculator) => (
              <CalculatorCard
                key={calculator.slug}
                title={calculator.name}
                description={calculator.description}
                href={`/${calculator.slug}`}
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
