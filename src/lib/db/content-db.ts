import { sql, mapPostgresRow } from "./postgres";
import type { Category, Calculator, BlogPost } from "@/types/content";
import type { ComparisonPage, FormulaPage, ExamplePage } from "@/types/seo-centers";
import {
  categories as seededCategories,
  calculators as seededCalculators,
  blogPosts as seededBlogPosts,
} from "../../../scripts/data-seed";

const allowSeedFallback = process.env.CONTENT_SOURCE_FALLBACK === "seed";

async function queryRows<T>(query: TemplateStringsArray, ...values: unknown[]): Promise<T[]> {
  if (!sql) {
    return [];
  }

  try {
    const rows = await sql(query, ...values);
    return rows as T[];
  } catch (error) {
    console.error("Postgres query failed, falling back to static content.", error);
    return [];
  }
}

function fallbackRows<T>(
  label: string,
  rows: readonly T[],
  fallback: readonly T[],
): readonly T[] {
  if (rows.length > 0) {
    return rows;
  }

  if (allowSeedFallback) {
    console.warn(`[content-db] ${label}: using seed fallback`);
    return fallback;
  }

  console.warn(`[content-db] ${label}: database returned no rows and seed fallback is disabled`);
  return rows;
}

function fallbackItem<T>(
  label: string,
  item: T | undefined,
  fallback: T | undefined,
): T | undefined {
  if (item) {
    return item;
  }

  if (allowSeedFallback && fallback) {
    console.warn(`[content-db] ${label}: using seed fallback`);
    return fallback;
  }

  if (!item) {
    console.warn(`[content-db] ${label}: database returned no row and seed fallback is disabled`);
  }

  return item;
}

// --- Categories ---

export async function dbGetAllCategories(): Promise<readonly Category[]> {
  const rows = await queryRows<Record<string, unknown>>`SELECT * FROM categories`;
  return fallbackRows(
    "categories.all",
    rows.map((row) => mapPostgresRow<Category>(row)),
    seededCategories,
  );
}

export async function dbGetCategoryBySlug(slug: string): Promise<Category | undefined> {
  const rows = await queryRows<Record<string, unknown>>`SELECT * FROM categories WHERE slug = ${slug} LIMIT 1`;
  return fallbackItem(
    `categories.bySlug:${slug}`,
    rows[0] ? mapPostgresRow<Category>(rows[0]) : undefined,
    seededCategories.find((category) => category.slug === slug),
  );
}

// --- Calculators ---

export async function dbGetAllCalculators(): Promise<readonly Calculator[]> {
  const rows = await queryRows<Record<string, unknown>>`SELECT * FROM calculators`;
  return fallbackRows(
    "calculators.all",
    rows.map((row) => mapPostgresRow<Calculator>(row)),
    seededCalculators,
  );
}

export async function dbGetCalculatorBySlug(slug: string): Promise<Calculator | undefined> {
  const rows = await queryRows<Record<string, unknown>>`SELECT * FROM calculators WHERE slug = ${slug} LIMIT 1`;
  return fallbackItem(
    `calculators.bySlug:${slug}`,
    rows[0] ? mapPostgresRow<Calculator>(rows[0]) : undefined,
    seededCalculators.find((calculator) => calculator.slug === slug),
  );
}

export async function dbGetCalculatorsByCategorySlug(categorySlug: string): Promise<readonly Calculator[]> {
  const rows = await queryRows<Record<string, unknown>>`SELECT * FROM calculators WHERE category_slug = ${categorySlug}`;
  return fallbackRows(
    `calculators.byCategory:${categorySlug}`,
    rows.map((row) => mapPostgresRow<Calculator>(row)),
    seededCalculators.filter((calculator) => calculator.categorySlug === categorySlug),
  );
}

export async function dbGetFeaturedCalculators(limit: number = 6): Promise<readonly Calculator[]> {
  const rows = await queryRows<Record<string, unknown>>`SELECT * FROM calculators WHERE featured = true LIMIT ${limit}`;
  return fallbackRows(
    `calculators.featured:${limit}`,
    rows.map((row) => mapPostgresRow<Calculator>(row)),
    seededCalculators.filter((calculator) => calculator.featured).slice(0, limit),
  );
}

export async function dbGetLatestCalculators(limit: number = 6): Promise<readonly Calculator[]> {
  // Assuming ID or a date field indicates 'latest'
  const rows = await queryRows<Record<string, unknown>>`SELECT * FROM calculators ORDER BY id DESC LIMIT ${limit}`;
  return fallbackRows(
    `calculators.latest:${limit}`,
    rows.map((row) => mapPostgresRow<Calculator>(row)),
    [...seededCalculators].slice(-limit).reverse(),
  );
}

// --- Blog Posts ---

export async function dbGetAllBlogPosts(): Promise<readonly BlogPost[]> {
  const rows = await queryRows<Record<string, unknown>>`SELECT * FROM blog_posts WHERE published = true ORDER BY last_updated DESC`;
  return fallbackRows(
    "blogPosts.all",
    rows.map((row) => mapPostgresRow<BlogPost>(row)),
    seededBlogPosts.filter((post) => post.published),
  );
}

export async function dbGetBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
  const rows = await queryRows<Record<string, unknown>>`SELECT * FROM blog_posts WHERE slug = ${slug} AND published = true LIMIT 1`;
  return fallbackItem(
    `blogPosts.bySlug:${slug}`,
    rows[0] ? mapPostgresRow<BlogPost>(rows[0]) : undefined,
    seededBlogPosts.find((post) => post.slug === slug && post.published),
  );
}

export async function dbGetBlogPostsByCategorySlug(categorySlug: string): Promise<readonly BlogPost[]> {
  const rows = await queryRows<Record<string, unknown>>`SELECT * FROM blog_posts WHERE category_slug = ${categorySlug} AND published = true ORDER BY last_updated DESC`;
  return fallbackRows(
    `blogPosts.byCategory:${categorySlug}`,
    rows.map((row) => mapPostgresRow<BlogPost>(row)),
    seededBlogPosts.filter((post) => post.categorySlug === categorySlug && post.published),
  );
}

// --- SEO Centers ---

export async function dbGetAllComparisons(): Promise<readonly ComparisonPage[]> {
  const rows = await queryRows<Record<string, unknown>>`SELECT * FROM comparisons`;
  return rows.map(row => mapPostgresRow<ComparisonPage>(row));
}

export async function dbGetComparisonBySlug(slug: string): Promise<ComparisonPage | undefined> {
  const rows = await queryRows<Record<string, unknown>>`SELECT * FROM comparisons WHERE slug = ${slug} LIMIT 1`;
  return rows[0] ? mapPostgresRow<ComparisonPage>(rows[0]) : undefined;
}

export async function dbGetAllFormulas(): Promise<readonly FormulaPage[]> {
  const rows = await queryRows<Record<string, unknown>>`SELECT * FROM formulas`;
  return rows.map(row => mapPostgresRow<FormulaPage>(row));
}

export async function dbGetFormulaBySlug(slug: string): Promise<FormulaPage | undefined> {
  const rows = await queryRows<Record<string, unknown>>`SELECT * FROM formulas WHERE slug = ${slug} LIMIT 1`;
  return rows[0] ? mapPostgresRow<FormulaPage>(rows[0]) : undefined;
}

export async function dbGetAllExamples(): Promise<readonly ExamplePage[]> {
  const rows = await queryRows<Record<string, unknown>>`SELECT * FROM examples`;
  return rows.map(row => mapPostgresRow<ExamplePage>(row));
}

export async function dbGetExampleBySlug(slug: string): Promise<ExamplePage | undefined> {
  const rows = await queryRows<Record<string, unknown>>`SELECT * FROM examples WHERE slug = ${slug} LIMIT 1`;
  return rows[0] ? mapPostgresRow<ExamplePage>(rows[0]) : undefined;
}
