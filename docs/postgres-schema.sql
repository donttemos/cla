-- Create Categories Table
CREATE TABLE IF NOT EXISTS categories (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    description TEXT,
    icon TEXT,
    seo_title TEXT,
    seo_description TEXT
);

-- Create Calculators Table
CREATE TABLE IF NOT EXISTS calculators (
    id TEXT PRIMARY KEY,
    category_slug TEXT NOT NULL REFERENCES categories(slug),
    name TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    description TEXT,
    formula TEXT,
    content_summary TEXT,
    what_is TEXT,
    formula_explanation TEXT,
    how_to_steps JSONB, -- Array of strings
    example TEXT,
    use_cases JSONB, -- Array of strings
    faq JSONB, -- Array of objects {question, answer}
    featured BOOLEAN DEFAULT false,
    related_calculator_slugs JSONB, -- Array of strings
    related_blog_post_slugs JSONB, -- Array of strings
    seo_title TEXT,
    seo_description TEXT,
    last_updated TEXT,
    reviewed_by TEXT,
    calculation_method TEXT,
    version_history JSONB -- Array of objects {version, date, changes}
);

-- Create Blog Posts Table
CREATE TABLE IF NOT EXISTS blog_posts (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    excerpt TEXT,
    seo_title TEXT,
    seo_description TEXT,
    published BOOLEAN DEFAULT true,
    category_slug TEXT REFERENCES categories(slug),
    related_calculator_slugs JSONB, -- Array of strings
    sections JSONB, -- Array of objects {heading, body: string[]}
    last_updated TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create Comparison Center Table
CREATE TABLE IF NOT EXISTS comparisons (
    slug TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    excerpt TEXT,
    description TEXT,
    differences JSONB, -- Array of objects {aspect, a, b}
    conclusion TEXT,
    related_calculators JSONB, -- Array of CalculatorSlugs
    seo_title TEXT,
    seo_description TEXT
);

-- Create Formula Center Table
CREATE TABLE IF NOT EXISTS formulas (
    slug TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    excerpt TEXT,
    description TEXT,
    formula TEXT,
    variables JSONB, -- Array of objects {name, definition}
    explanation JSONB, -- Array of strings
    related_calculators JSONB, -- Array of CalculatorSlugs
    seo_title TEXT,
    seo_description TEXT
);

-- Create Example Center Table
CREATE TABLE IF NOT EXISTS examples (
    slug TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    excerpt TEXT,
    description TEXT,
    scenario TEXT,
    steps JSONB, -- Array of strings
    result TEXT,
    related_calculators JSONB, -- Array of CalculatorSlugs
    seo_title TEXT,
    seo_description TEXT
);
