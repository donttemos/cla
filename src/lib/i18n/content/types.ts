import type {
  BlogPostSlug,
  CalculatorSlug,
  CategorySlug,
  FaqItem,
} from "@/types/content";

export type CategoryTranslation = {
  name?: string;
  description?: string;
  seoTitle?: string;
  seoDescription?: string;
};

export type CalculatorTranslation = {
  name?: string;
  description?: string;
  contentSummary?: string;
  whatIs?: string;
  formula?: string;
  formulaExplanation?: string;
  howToSteps?: readonly string[];
  example?: string;
  useCases?: readonly string[];
  faq?: readonly FaqItem[];
  seoTitle?: string;
  seoDescription?: string;
};

export type BlogPostSectionTranslation = {
  heading?: string;
  body?: readonly string[];
};

export type BlogPostTranslation = {
  title?: string;
  excerpt?: string;
  seoTitle?: string;
  seoDescription?: string;
  sections?: readonly BlogPostSectionTranslation[];
};

export type ContentTranslations = {
  categories?: Partial<Record<CategorySlug, CategoryTranslation>>;
  calculators?: Partial<Record<CalculatorSlug, CalculatorTranslation>>;
  blogPosts?: Partial<Record<BlogPostSlug, BlogPostTranslation>>;
};
