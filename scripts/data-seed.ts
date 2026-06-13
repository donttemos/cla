import type {
  BlogPost,
  BlogPostSection,
  BlogPostSlug,
  Calculator,
  CalculatorSlug,
  Category,
  CategorySlug,
  FaqItem,
  VersionHistoryItem,
} from "@/types/content";
import { calculatorConfigs } from "@/lib/calculator-configs";
import { simplifiedChineseContentTranslations } from "@/lib/i18n/content/zh-CN";

const CATEGORY_METADATA: Record<CategorySlug, Omit<Category, "id" | "slug">> = {
  finance: {
    name: "Finance",
    description:
      "Estimate loans, mortgages, returns, retirement savings, taxes, and everyday money decisions.",
    icon: "landmark",
    seoTitle: "Finance Calculators - Loans, Interest, ROI, Tax, and Retirement",
    seoDescription:
      "Use free finance calculators for loans, mortgages, compound interest, ROI, salary, tax, and retirement planning.",
  },
  health: {
    name: "Health",
    description:
      "Check BMI, BMR, calorie needs, body fat, hydration, and practical wellness numbers.",
    icon: "heart-pulse",
    seoTitle: "Health Calculators - BMI, BMR, Calories, Body Fat, and Water",
    seoDescription:
      "Use free health calculators for BMI, BMR, calories, hydration, and body composition planning.",
  },
  "date-time": {
    name: "Date & Time",
    description:
      "Calculate age, day differences, durations, and week ranges for planning and scheduling.",
    icon: "calendar-range",
    seoTitle: "Date and Time Calculators - Age, Days, Duration, and Weeks",
    seoDescription:
      "Use free date and time calculators for age, days between dates, time duration, and week planning.",
  },
  math: {
    name: "Math",
    description:
      "Solve percentages, fractions, GPA, averages, and other common arithmetic tasks.",
    icon: "sigma",
    seoTitle: "Math Calculators - Percentage, Fraction, GPA, and Average",
    seoDescription:
      "Use free math calculators for percentages, fractions, GPA, averages, and daily arithmetic checks.",
  },
  conversion: {
    name: "Conversion",
    description:
      "Convert weight, length, distance, and temperature values quickly and clearly.",
    icon: "ruler",
    seoTitle: "Conversion Calculators - Weight, Length, Distance, and Temperature",
    seoDescription:
      "Use free unit conversion calculators for kg to lbs, cm to inches, miles to km, and Celsius to Fahrenheit.",
  },
  business: {
    name: "Business",
    description:
      "Model revenue, profit, break-even, CAC, and LTV for practical business decisions.",
    icon: "briefcase-business",
    seoTitle: "Business Calculators - Profit, Revenue, Break-Even, CAC, and LTV",
    seoDescription:
      "Use free business calculators for profit, revenue, break-even analysis, customer acquisition cost, and lifetime value.",
  },
  ai: {
    name: "AI",
    description:
      "Estimate token spend, API usage, AI pricing, model costs, and GPU training budgets.",
    icon: "bot",
    seoTitle: "AI Cost Calculators - Tokens, API Spend, LLMs, and GPU Costs",
    seoDescription:
      "Use free AI calculators for OpenAI cost, Claude token usage, LLM pricing, GPU training cost, and AI product pricing.",
  },
};

const CALCULATOR_CATEGORY_MAP: Record<CalculatorSlug, CategorySlug> = {
  "loan-calculator": "finance",
  "mortgage-calculator": "finance",
  "car-loan-calculator": "finance",
  "interest-calculator": "finance",
  "compound-interest-calculator": "finance",
  "investment-calculator": "finance",
  "roi-calculator": "finance",
  "retirement-calculator": "finance",
  "salary-calculator": "finance",
  "tax-calculator": "finance",
  "bmi-calculator": "health",
  "bmr-calculator": "health",
  "calories-calculator": "health",
  "body-fat-calculator": "health",
  "water-intake-calculator": "health",
  "age-calculator": "date-time",
  "days-between-dates": "date-time",
  "time-duration-calculator": "date-time",
  "week-calculator": "date-time",
  "percentage-calculator": "math",
  "fraction-calculator": "math",
  "gpa-calculator": "math",
  "average-calculator": "math",
  "kg-to-lbs": "conversion",
  "cm-to-inches": "conversion",
  "miles-to-km": "conversion",
  "celsius-to-fahrenheit": "conversion",
  "profit-calculator": "business",
  "revenue-calculator": "business",
  "break-even-calculator": "business",
  "cac-calculator": "business",
  "ltv-calculator": "business",
  "openai-cost-calculator": "ai",
  "claude-token-calculator": "ai",
  "llm-cost-calculator": "ai",
  "gpu-training-cost-calculator": "ai",
  "ai-pricing-calculator": "ai",
};

const CALCULATOR_FORMULA_MAP: Partial<Record<CalculatorSlug, string>> = {
  "loan-calculator":
    "Payment = P * (r / 12) / (1 - (1 + r / 12)^(-12t))",
  "mortgage-calculator":
    "Payment = P * (r / 12) / (1 - (1 + r / 12)^(-12t))",
  "car-loan-calculator":
    "Payment = P * (r / 12) / (1 - (1 + r / 12)^(-12t))",
  "interest-calculator": "Interest = Principal * Rate * Time",
  "compound-interest-calculator": "A = P(1 + r / n)^(nt)",
  "investment-calculator": "Future Value = Present Value * (1 + r)^t",
  "roi-calculator": "ROI = (Gain - Cost) / Cost * 100",
  "retirement-calculator":
    "Projected Balance = Current Savings + Contributions + Compound Growth",
  "salary-calculator": "Equivalent Pay = Base Pay / Time Unit",
  "tax-calculator": "After-Tax Income = Income - Tax Owed",
  "bmi-calculator": "BMI = weight(kg) / height(m)^2",
  "bmr-calculator":
    "BMR ~= energy formula based on age, sex, height, and weight",
  "calories-calculator": "TDEE = BMR * Activity Multiplier",
  "body-fat-calculator":
    "Body Fat % ~= measurement-based estimation formula",
  "water-intake-calculator":
    "Daily Water ~= body weight and activity adjustment",
  "age-calculator": "Age = difference between birth date and target date",
  "days-between-dates":
    "Days Between = end date - start date in calendar days",
  "time-duration-calculator":
    "Duration = end timestamp - start timestamp",
  "week-calculator": "Week Number = ISO week calculation",
  "percentage-calculator": "Percentage = Part / Whole * 100",
  "fraction-calculator":
    "Fraction result = arithmetic operation with simplification",
  "gpa-calculator":
    "GPA = sum(grade points * credits) / sum(credits)",
  "average-calculator": "Average = sum(values) / count(values)",
  "kg-to-lbs": "lb = kg * 2.20462",
  "cm-to-inches": "in = cm / 2.54",
  "miles-to-km": "km = miles * 1.60934",
  "celsius-to-fahrenheit": "F = C * 9 / 5 + 32",
  "profit-calculator": "Profit = Revenue - Cost",
  "revenue-calculator": "Revenue = Price * Quantity",
  "break-even-calculator":
    "Break-Even Units = Fixed Cost / (Price - Variable Cost)",
  "cac-calculator":
    "CAC = Sales and Marketing Spend / New Customers Acquired",
  "ltv-calculator":
    "LTV = Average Revenue * Gross Margin * Customer Lifespan",
  "openai-cost-calculator":
    "Cost = ((Input Tokens * Input Rate) + (Output Tokens * Output Rate)) / 1,000,000",
  "claude-token-calculator":
    "Cost = ((Input Tokens * Input Rate) + (Output Tokens * Output Rate)) / 1,000,000",
  "llm-cost-calculator":
    "Cost = requests * ((input tokens * input rate) + (output tokens * output rate))",
  "gpu-training-cost-calculator":
    "Training Cost = GPU Hourly Rate * Hours * GPU Count * Utilization",
  "ai-pricing-calculator":
    "Price = Cost Per User / (1 - Gross Margin - Payment Fee)",
};

const BLOG_CALCULATOR_RULES: readonly {
  readonly match: readonly string[];
  readonly calculators: readonly CalculatorSlug[];
}[] = [
  { match: ["bmi"], calculators: ["bmi-calculator"] },
  { match: ["bmr", "mifflin", "harris-benedict"], calculators: ["bmr-calculator"] },
  { match: ["body-fat"], calculators: ["body-fat-calculator"] },
  { match: ["water-intake", "hydration"], calculators: ["water-intake-calculator"] },
  { match: ["calorie", "tdee", "maintenance-calories"], calculators: ["calories-calculator"] },
  { match: ["macro", "protein"], calculators: ["calories-calculator", "bmr-calculator"] },
  { match: ["healthy-weight", "ideal-weight", "weight-loss"], calculators: ["bmi-calculator", "calories-calculator"] },
  { match: ["mortgage"], calculators: ["mortgage-calculator", "loan-calculator"] },
  { match: ["car-loan"], calculators: ["car-loan-calculator", "loan-calculator"] },
  { match: ["loan"], calculators: ["loan-calculator"] },
  { match: ["apr", "apy", "simple-interest"], calculators: ["interest-calculator", "loan-calculator"] },
  {
    match: ["compound-interest", "annual-percentage-yield"],
    calculators: ["compound-interest-calculator", "interest-calculator"],
  },
  { match: ["investment-return", "savings-goal"], calculators: ["investment-calculator"] },
  { match: ["retirement", "withdrawal"], calculators: ["retirement-calculator"] },
  { match: ["tax-rate", "tax-reserve"], calculators: ["tax-calculator"] },
  { match: ["salary-to-hourly", "freelancer-hourly-rate"], calculators: ["salary-calculator"] },
  { match: ["debt-to-income"], calculators: ["loan-calculator", "mortgage-calculator"] },
  { match: ["roi", "roas"], calculators: ["roi-calculator"] },
  { match: ["revenue-growth", "lead-value", "pipeline-coverage"], calculators: ["revenue-calculator"] },
  {
    match: ["profit-margin", "churn-impact", "invoice-late-fee", "subscription-burn"],
    calculators: ["profit-calculator", "revenue-calculator"],
  },
  {
    match: ["break-even", "cash-conversion-cycle", "burn-rate", "business-runway"],
    calculators: ["break-even-calculator", "profit-calculator"],
  },
  {
    match: ["conversion-rate", "checkout-conversion", "trial-to-paid", "activation-rate", "referral-conversion-rate", "email-conversion-rate", "form-completion-rate", "funnel-conversion", "landing-page-lift", "cpc-to-cpa", "cpa-calculator", "cpl-calculator"],
    calculators: ["cac-calculator", "revenue-calculator"],
  },
  {
    match: ["cac", "customer-acquisition-cost", "payback"],
    calculators: ["cac-calculator", "ltv-calculator"],
  },
  {
    match: ["ltv", "customer-ltv"],
    calculators: ["ltv-calculator", "cac-calculator"],
  },
  { match: ["openai"], calculators: ["openai-cost-calculator", "llm-cost-calculator"] },
  { match: ["claude", "token"], calculators: ["claude-token-calculator", "llm-cost-calculator"] },
  { match: ["llm", "routing"], calculators: ["llm-cost-calculator", "ai-pricing-calculator"] },
  { match: ["gpu", "fine-tuning"], calculators: ["gpu-training-cost-calculator", "llm-cost-calculator"] },
  {
    match: ["ai-pricing", "app-margin"],
    calculators: ["ai-pricing-calculator", "llm-cost-calculator"],
  },
  {
    match: ["rag", "embedding", "image-generation", "translation-cost", "agent-cost", "customer-support-cost", "sales-email-cost", "meeting-notes-cost", "batch-processing", "cached-token", "multimodal", "evaluation"],
    calculators: ["llm-cost-calculator", "openai-cost-calculator", "ai-pricing-calculator"],
  },
];

const CATEGORY_BLOG_FALLBACK: Record<CategorySlug, readonly CalculatorSlug[]> = {
  finance: ["loan-calculator", "compound-interest-calculator"],
  health: ["bmi-calculator", "calories-calculator"],
  "date-time": ["age-calculator", "time-duration-calculator"],
  math: ["percentage-calculator", "average-calculator"],
  conversion: ["kg-to-lbs", "cm-to-inches"],
  business: ["profit-calculator", "cac-calculator"],
  ai: ["llm-cost-calculator", "ai-pricing-calculator"],
};

const ACRONYM_WORDS = new Set([
  "ai",
  "api",
  "apr",
  "apy",
  "bmi",
  "bmr",
  "cac",
  "cpa",
  "cpc",
  "cpl",
  "ctr",
  "gpu",
  "gpa",
  "llm",
  "ltv",
  "rag",
  "roas",
  "roi",
  "saas",
  "tdee",
]);

const DEFAULT_VERSION_HISTORY: readonly VersionHistoryItem[] = [
  {
    version: "1.0.0",
    date: "2026-06-13",
    changes: "Initial seeded content and metadata for production deployment.",
  },
];

const blogSlugs = Object.keys(
  simplifiedChineseContentTranslations.blogPosts ?? {},
) as BlogPostSlug[];

export const categories: readonly Category[] = (
  Object.entries(CATEGORY_METADATA) as readonly [CategorySlug, Omit<Category, "id" | "slug">][]
).map(([slug, metadata]) => ({
  id: slug,
  slug,
  ...metadata,
}));

export const blogPosts: readonly BlogPost[] = blogSlugs.map((slug) => {
  const relatedCalculatorSlugs = inferRelatedCalculatorsForBlog(slug);
  const categorySlug = inferCategoryForBlog(slug, relatedCalculatorSlugs);
  const title = slugToTitle(slug);
  const sections = buildBlogSections(title, slug, categorySlug);

  return {
    id: slug,
    slug,
    title,
    excerpt: `Learn the key idea behind ${title.toLowerCase()}, how to interpret the number responsibly, and which calculator can help you model real scenarios.`,
    published: true,
    categorySlug,
    relatedCalculatorSlugs,
    sections,
    seoTitle: `${title} - Guide, Examples, and Calculator`,
    seoDescription: `Read a practical guide to ${title.toLowerCase()}, including examples, assumptions, and related calculators for deeper analysis.`,
  };
});

const relatedBlogPostSlugsByCalculator = buildRelatedBlogPostSlugsByCalculator(
  blogPosts,
);

export const calculators: readonly Calculator[] = calculatorConfigs.map((config) => {
  const slug = config.slug as CalculatorSlug;
  const categorySlug = CALCULATOR_CATEGORY_MAP[slug];
  const categoryName = CATEGORY_METADATA[categorySlug].name;
  const relatedCalculatorSlugs = buildRelatedCalculatorSlugs(slug, categorySlug);

  return {
    id: slug,
    slug,
    categorySlug,
    name: config.title,
    description:
      config.description ??
      `Use the ${config.title} to estimate results for common ${categoryName.toLowerCase()} scenarios.`,
    formula:
      CALCULATOR_FORMULA_MAP[slug] ??
      `Use the ${config.title} inputs and calculation logic to produce the final result.`,
    contentSummary: `${config.title} helps you ${toSentenceFragment(
      config.description ??
        `estimate common ${categoryName.toLowerCase()} outcomes with clear inputs and outputs`,
    )}.`,
    whatIs: `${config.title} is a free ${categoryName.toLowerCase()} tool for fast, transparent estimates. It combines the calculator widget with formula notes, examples, and FAQs so users can both get an answer and understand what is driving it.`,
    formulaExplanation: `This tool uses the following working formula or method: ${
      CALCULATOR_FORMULA_MAP[slug] ??
      "calculator-specific inputs processed through the configured calculation logic"
    }. Use the result together with your assumptions, units, rates, and time period because small input changes can materially affect the output.`,
    howToSteps: [
      "Enter the required values into the calculator fields.",
      "Check that units, rates, dates, or amounts match your real scenario.",
      "Review the calculated result and compare it with at least one alternative scenario.",
      `Use the supporting explanation to understand how the ${categoryName.toLowerCase()} estimate was produced.`,
    ],
    example: `For example, you can use ${config.title} with one realistic set of inputs first, then adjust the biggest variables to compare best-case, expected, and cautious scenarios before making a decision.`,
    useCases: [
      `Estimate a ${categoryName.toLowerCase()} outcome before committing to a plan.`,
      "Compare multiple scenarios with different assumptions.",
      "Understand the key variables behind the final result instead of treating the output like a black box.",
    ],
    faq: buildCalculatorFaq(config.title, categoryName),
    featured: isFeaturedCalculator(slug),
    relatedCalculatorSlugs,
    relatedBlogPostSlugs: relatedBlogPostSlugsByCalculator[slug] ?? [],
    seoTitle: `${config.title} - Free Online Calculator`,
    seoDescription:
      config.description ??
      `Use the free ${config.title} to estimate ${categoryName.toLowerCase()} results online.`,
    lastUpdated: "2026-06-13",
    reviewedBy: "DTECALC Editorial Team",
    calculationMethod: buildCalculationMethod(config.title, categoryName),
    versionHistory: DEFAULT_VERSION_HISTORY,
  };
});

function buildCalculatorFaq(
  calculatorName: string,
  categoryName: string,
): readonly FaqItem[] {
  return [
    {
      question: `Is ${calculatorName} free to use?`,
      answer: `Yes. ${calculatorName} is part of the free DTECALC calculator library.`,
    },
    {
      question: `What information do I need for ${calculatorName}?`,
      answer: `Enter the values requested by the calculator and make sure the units, rates, dates, or amounts match your ${categoryName.toLowerCase()} scenario.`,
    },
    {
      question: `Should I rely on one result only?`,
      answer: "Usually no. It is better to compare a few scenarios and verify assumptions before using the result for an important decision.",
    },
  ];
}

function buildRelatedCalculatorSlugs(
  slug: CalculatorSlug,
  categorySlug: CategorySlug,
): readonly CalculatorSlug[] {
  const sameCategory = Object.entries(CALCULATOR_CATEGORY_MAP)
    .filter(([candidateSlug, candidateCategory]) => {
      return candidateSlug !== slug && candidateCategory === categorySlug;
    })
    .map(([candidateSlug]) => candidateSlug as CalculatorSlug)
    .slice(0, 3);

  return sameCategory;
}

function buildCalculationMethod(
  calculatorName: string,
  categoryName: string,
): string {
  return `${calculatorName} uses structured inputs and calculator-specific formulas to estimate a ${categoryName.toLowerCase()} result. Outputs should be interpreted together with your assumptions, data quality, and any fees, taxes, or external constraints that apply.`;
}

function isFeaturedCalculator(slug: CalculatorSlug): boolean {
  return [
    "loan-calculator",
    "mortgage-calculator",
    "compound-interest-calculator",
    "bmi-calculator",
    "calories-calculator",
    "percentage-calculator",
    "profit-calculator",
    "openai-cost-calculator",
    "llm-cost-calculator",
  ].includes(slug);
}

function inferRelatedCalculatorsForBlog(
  slug: BlogPostSlug,
): readonly CalculatorSlug[] {
  const matches = new Set<CalculatorSlug>();

  for (const rule of BLOG_CALCULATOR_RULES) {
    if (rule.match.some((term) => slug.includes(term))) {
      for (const calculatorSlug of rule.calculators) {
        matches.add(calculatorSlug);
      }
    }
  }

  if (matches.size > 0) {
    return [...matches].slice(0, 3);
  }

  const categorySlug = inferCategoryFromBlogSlug(slug);
  return CATEGORY_BLOG_FALLBACK[categorySlug];
}

function inferCategoryForBlog(
  slug: BlogPostSlug,
  relatedCalculatorSlugs: readonly CalculatorSlug[],
): CategorySlug {
  const firstRelated = relatedCalculatorSlugs[0];
  if (firstRelated) {
    return CALCULATOR_CATEGORY_MAP[firstRelated];
  }

  return inferCategoryFromBlogSlug(slug);
}

function inferCategoryFromBlogSlug(slug: BlogPostSlug): CategorySlug {
  if (
    containsAny(slug, [
      "bmi",
      "bmr",
      "calorie",
      "body-fat",
      "water",
      "hydration",
      "weight",
      "protein",
      "macro",
      "exercise",
      "walking",
      "activity-level",
      "tdee",
    ])
  ) {
    return "health";
  }

  if (
    containsAny(slug, [
      "openai",
      "claude",
      "token",
      "llm",
      "gpu",
      "rag",
      "embedding",
      "image-generation",
      "translation-cost",
      "agent-cost",
      "meeting-notes",
      "batch-processing",
      "cached-token",
      "multimodal",
      "fine-tuning",
      "evaluation",
      "routing",
      "app-margin",
      "ai-",
    ])
  ) {
    return "ai";
  }

  if (
    containsAny(slug, [
      "conversion-rate",
      "checkout-conversion",
      "trial-to-paid",
      "activation-rate",
      "referral-conversion-rate",
      "email-conversion-rate",
      "form-completion-rate",
      "pipeline-coverage",
      "churn-impact",
      "lead-value",
      "cpc-to-cpa",
      "cpa-calculator",
      "cpl-calculator",
      "funnel-conversion",
      "landing-page-lift",
      "burn-rate",
      "runway",
      "subscription-burn",
      "invoice-late-fee",
      "cash-conversion-cycle",
    ])
  ) {
    return "business";
  }

  return "finance";
}

function buildBlogSections(
  title: string,
  slug: BlogPostSlug,
  categorySlug: CategorySlug,
): readonly BlogPostSection[] {
  const categoryName = CATEGORY_METADATA[categorySlug].name;

  return [
    {
      heading: `What ${title} Covers`,
      body: [
        `${title} is most useful when you want a quick, practical explanation before plugging numbers into a calculator.`,
        `This topic sits in the ${categoryName.toLowerCase()} area, so the exact result usually depends on your assumptions, units, time horizon, or cost structure.`,
      ],
    },
    {
      heading: "How to Use the Number",
      body: [
        `Start with a simple base case, then change the one or two inputs that most affect the outcome for ${slugToTopic(slug)}.`,
        "Comparing an optimistic scenario, an expected scenario, and a cautious scenario is usually more informative than trusting a single point estimate.",
      ],
    },
    {
      heading: "Important Limits and Context",
      body: [
        `A calculator can clarify ${slugToTopic(slug)}, but it cannot replace source documents, product pricing pages, tax rules, lender terms, or professional advice when those details matter.`,
        "Use the result as a decision aid, then validate the assumptions that would materially change the answer.",
      ],
    },
  ];
}

function buildRelatedBlogPostSlugsByCalculator(
  posts: readonly BlogPost[],
): Record<CalculatorSlug, readonly BlogPostSlug[]> {
  const map = {} as Record<CalculatorSlug, BlogPostSlug[]>;

  for (const post of posts) {
    for (const calculatorSlug of post.relatedCalculatorSlugs) {
      if (!map[calculatorSlug]) {
        map[calculatorSlug] = [];
      }

      if (map[calculatorSlug].length < 6) {
        map[calculatorSlug].push(post.slug);
      }
    }
  }

  return map;
}

function slugToTitle(slug: string): string {
  return slug
    .split("-")
    .map((word) => {
      if (ACRONYM_WORDS.has(word)) {
        return word.toUpperCase();
      }

      if (word === "vs") {
        return "vs";
      }

      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}

function slugToTopic(slug: string): string {
  return slug.replace(/-/g, " ");
}

function toSentenceFragment(text: string): string {
  return text.charAt(0).toLowerCase() + text.slice(1);
}

function containsAny(value: string, terms: readonly string[]): boolean {
  return terms.some((term) => value.includes(term));
}
