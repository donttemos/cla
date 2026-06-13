import { sql, mapPostgresRow } from "./postgres";
import type { Category, Calculator, BlogPost } from "@/types/content";
import type { ComparisonPage, FormulaPage, ExamplePage } from "@/types/seo-centers";

async function queryRows<T>(query: TemplateStringsArray, ...values: unknown[]): Promise<T[]> {
  if (!sql) {
    return [];
  }

  const rows = await sql(query, ...values);
  return rows as T[];
}

// --- Categories ---

export async function dbGetAllCategories(): Promise<readonly Category[]> {
  const rows = await queryRows<Record<string, unknown>>`SELECT * FROM categories`;
  return rows.map(row => mapPostgresRow<Category>(row));
}

export async function dbGetCategoryBySlug(slug: string): Promise<Category | undefined> {
  const rows = await queryRows<Record<string, unknown>>`SELECT * FROM categories WHERE slug = ${slug} LIMIT 1`;
  return rows[0] ? mapPostgresRow<Category>(rows[0]) : undefined;
}

// --- Calculators ---

export async function dbGetAllCalculators(): Promise<readonly Calculator[]> {
  const rows = await queryRows<Record<string, unknown>>`SELECT * FROM calculators`;
  return rows.map(row => mapPostgresRow<Calculator>(row));
}

export async function dbGetCalculatorBySlug(slug: string): Promise<Calculator | undefined> {
  const rows = await queryRows<Record<string, unknown>>`SELECT * FROM calculators WHERE slug = ${slug} LIMIT 1`;
  return rows[0] ? mapPostgresRow<Calculator>(rows[0]) : undefined;
}

export async function dbGetCalculatorsByCategorySlug(categorySlug: string): Promise<readonly Calculator[]> {
  const rows = await queryRows<Record<string, unknown>>`SELECT * FROM calculators WHERE category_slug = ${categorySlug}`;
  return rows.map(row => mapPostgresRow<Calculator>(row));
}

export async function dbGetFeaturedCalculators(limit: number = 6): Promise<readonly Calculator[]> {
  const rows = await queryRows<Record<string, unknown>>`SELECT * FROM calculators WHERE featured = true LIMIT ${limit}`;
  return rows.map(row => mapPostgresRow<Calculator>(row));
}

export async function dbGetLatestCalculators(limit: number = 6): Promise<readonly Calculator[]> {
  // Assuming ID or a date field indicates 'latest'
  const rows = await queryRows<Record<string, unknown>>`SELECT * FROM calculators ORDER BY id DESC LIMIT ${limit}`;
  return rows.map(row => mapPostgresRow<Calculator>(row));
}

// --- Blog Posts ---

export async function dbGetAllBlogPosts(): Promise<readonly BlogPost[]> {
  const rows = await queryRows<Record<string, unknown>>`SELECT * FROM blog_posts WHERE published = true ORDER BY last_updated DESC`;
  return rows.map(row => mapPostgresRow<BlogPost>(row));
}

export async function dbGetBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
  const rows = await queryRows<Record<string, unknown>>`SELECT * FROM blog_posts WHERE slug = ${slug} AND published = true LIMIT 1`;
  return rows[0] ? mapPostgresRow<BlogPost>(rows[0]) : undefined;
}

export async function dbGetBlogPostsByCategorySlug(categorySlug: string): Promise<readonly BlogPost[]> {
  const rows = await queryRows<Record<string, unknown>>`SELECT * FROM blog_posts WHERE category_slug = ${categorySlug} AND published = true ORDER BY last_updated DESC`;
  return rows.map(row => mapPostgresRow<BlogPost>(row));
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
