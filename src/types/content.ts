export type CategorySlug =
  | "finance"
  | "health"
  | "date-time"
  | "math"
  | "conversion"
  | "business"
  | "ai";

export type CalculatorSlug =
  | "loan-calculator"
  | "mortgage-calculator"
  | "car-loan-calculator"
  | "interest-calculator"
  | "compound-interest-calculator"
  | "investment-calculator"
  | "roi-calculator"
  | "retirement-calculator"
  | "salary-calculator"
  | "tax-calculator"
  | "bmi-calculator"
  | "bmr-calculator"
  | "calories-calculator"
  | "body-fat-calculator"
  | "water-intake-calculator"
  | "age-calculator"
  | "days-between-dates"
  | "time-duration-calculator"
  | "week-calculator"
  | "percentage-calculator"
  | "fraction-calculator"
  | "gpa-calculator"
  | "average-calculator"
  | "kg-to-lbs"
  | "cm-to-inches"
  | "miles-to-km"
  | "celsius-to-fahrenheit"
  | "profit-calculator"
  | "revenue-calculator"
  | "break-even-calculator"
  | "cac-calculator"
  | "ltv-calculator"
  | "openai-cost-calculator"
  | "claude-token-calculator"
  | "llm-cost-calculator"
  | "gpu-training-cost-calculator"
  | "ai-pricing-calculator";

export type BlogPostSlug =
  | "what-is-bmi"
  | "bmi-chart-guide"
  | "how-mortgage-interest-works"
  | "how-to-calculate-roi"
  | "what-is-compound-interest"
  | "mortgage-vs-loan"
  | "openai-api-pricing-explained"
  | "claude-token-costs-explained"
  | "loan-payment-calculator-estimate-monthly-payments"
  | "how-to-calculate-compound-interest-formula-and-examples"
  | "break-even-calculator-units-revenue-and-fixed-costs"
  | "ai-api-cost-calculator-estimate-monthly-token-spend"
  | "token-cost-calculator-input-vs-output-tokens-explained"
  | "llm-cost-calculator-compare-models-by-usage-scenario"
  | "bmr-calculator-estimate-your-basal-metabolic-rate"
  | "calorie-calculator-estimate-daily-calorie-needs"
  | "bmi-vs-body-fat-percentage-which-number-is-more-useful"
  | "conversion-rate-calculator-measure-website-performance"
  | "roas-calculator-estimate-return-on-ad-spend"
  | "cac-calculator-how-to-calculate-customer-acquisition-cost"
  | "mortgage-payment-calculator-principal-interest-and-term"
  | "apr-vs-interest-rate-what-borrowers-should-compare"
  | "simple-interest-calculator-formula-examples-and-use-cases"
  | "openai-cost-calculator-estimate-chat-and-api-usage"
  | "claude-cost-calculator-estimate-token-based-api-spend"
  | "ai-pricing-calculator-turn-usage-cost-into-subscription-tiers"
  | "tdee-calculator-estimate-daily-energy-expenditure"
  | "body-fat-calculator-estimate-body-composition"
  | "water-intake-calculator-estimate-daily-hydration-needs"
  | "ltv-to-cac-ratio-calculator-understand-growth-efficiency"
  | "funnel-conversion-calculator-find-drop-off-between-steps"
  | "landing-page-lift-calculator-estimate-extra-conversions-needed"
  | "freelancer-hourly-rate-calculator-price-your-work-sustainably"
  | "business-runway-calculator-how-long-can-your-cash-last"
  | "burn-rate-calculator-monthly-spend-and-cash-planning"
  | "rag-cost-calculator-estimate-embedding-storage-and-query-costs"
  | "embedding-cost-calculator-price-document-indexing-workflows"
  | "ai-image-generation-cost-calculator-estimate-creative-volume"
  | "macro-calculator-estimate-protein-carbs-and-fat-targets"
  | "protein-calculator-estimate-daily-protein-needs"
  | "ideal-weight-calculator-compare-common-formulas"
  | "cpa-calculator-estimate-cost-per-acquisition"
  | "cpl-calculator-estimate-cost-per-lead"
  | "lead-value-calculator-estimate-revenue-per-lead"
  | "tax-reserve-calculator-for-freelancers-and-small-businesses"
  | "invoice-late-fee-calculator-estimate-fair-payment-penalties"
  | "subscription-burn-calculator-audit-recurring-saas-costs"
  | "ai-translation-cost-calculator-estimate-multilingual-content-spend"
  | "ai-agent-cost-calculator-tool-calls-tokens-and-runtime"
  | "cost-per-1000-ai-outputs-how-to-calculate-unit-cost"
  | "body-mass-index-formula-metric-and-imperial-examples"
  | "maintenance-calories-calculator-estimate-energy-balance"
  | "metric-vs-imperial-health-calculators-convert-inputs-correctly"
  | "pipeline-coverage-calculator-estimate-sales-pipeline-needed"
  | "churn-impact-calculator-model-revenue-lost-to-cancellations"
  | "conversion-rate-vs-click-through-rate-what-each-metric-shows"
  | "customer-ltv-calculator-estimate-lifetime-value"
  | "cac-payback-calculator-how-long-until-acquisition-pays-back"
  | "cash-conversion-cycle-calculator-inventory-receivables-payables"
  | "ai-customer-support-cost-calculator-tickets-tokens-and-savings"
  | "ai-sales-email-cost-calculator-estimate-outreach-generation-costs"
  | "ai-meeting-notes-cost-calculator-transcription-and-summary-spend"
  | "mifflin-st-jeor-vs-harris-benedict-bmr-formulas-compared"
  | "activity-level-calculator-choose-the-right-tdee-multiplier"
  | "pace-calculator-running-speed-distance-and-time"
  | "cpc-to-cpa-calculator-connect-click-cost-to-acquisition-cost"
  | "email-conversion-rate-calculator-campaign-metrics-explained"
  | "form-completion-rate-calculator-find-signup-friction"
  | "debt-to-income-ratio-calculator-borrowing-capacity-guide"
  | "savings-goal-calculator-how-much-to-save-each-month"
  | "retirement-withdrawal-calculator-safe-spending-estimates"
  | "profit-margin-calculator-gross-vs-net-margin-explained"
  | "ai-batch-processing-cost-calculator-reduce-unit-cost-with-queues"
  | "cached-token-pricing-calculator-when-prompt-caching-changes-cost"
  | "multimodal-ai-cost-calculator-text-image-and-audio-usage"
  | "ai-app-margin-calculator-turn-model-costs-into-gross-margin"
  | "calorie-deficit-calculator-estimate-weight-change-carefully"
  | "hydration-calculator-water-needs-by-weight-and-activity"
  | "body-fat-percentage-chart-men-women-and-limitations"
  | "calories-burned-walking-calculator-distance-pace-and-weight"
  | "checkout-conversion-rate-calculator-measure-purchase-drop-off"
  | "trial-to-paid-conversion-calculator-saas-funnel-guide"
  | "activation-rate-calculator-measure-first-value-moments"
  | "referral-conversion-rate-calculator-track-word-of-mouth-growth"
  | "annual-percentage-yield-calculator-apy-vs-apr-explained"
  | "loan-amortization-calculator-principal-interest-schedule"
  | "car-loan-interest-calculator-estimate-total-cost"
  | "salary-to-hourly-calculator-convert-pay-rates"
  | "investment-return-calculator-annualized-vs-total-return"
  | "tax-rate-calculator-effective-vs-marginal-tax-rate"
  | "revenue-growth-rate-calculator-monthly-and-annual-examples"
  | "break-even-analysis-calculator-fixed-variable-costs-guide"
  | "fine-tuning-cost-calculator-training-files-epochs-and-tokens"
  | "ai-evaluation-cost-calculator-test-sets-judges-and-runs"
  | "llm-routing-cost-calculator-balance-quality-latency-and-price"
  | "gpu-vs-api-cost-calculator-when-hosting-might-matter"
  | "healthy-weight-range-calculator-bmi-and-context"
  | "daily-calorie-needs-for-women-and-men-calculator-guide"
  | "water-intake-for-exercise-calculator-hydration-planning"
  | "weight-loss-percentage-calculator-track-change-safely";

export interface SeoFields {
  readonly seoTitle: string;
  readonly seoDescription: string;
}

export interface Category extends SeoFields {
  readonly id: CategorySlug;
  readonly name: string;
  readonly slug: CategorySlug;
  readonly description: string;
  readonly icon: string;
}

export interface VersionHistoryItem {
  readonly version: string;
  readonly date: string;
  readonly changes: string;
}

export interface Calculator extends SeoFields {
  readonly id: CalculatorSlug;
  readonly categorySlug: CategorySlug;
  readonly name: string;
  readonly slug: CalculatorSlug;
  readonly description: string;
  readonly formula: string;
  readonly contentSummary: string;
  readonly whatIs: string;
  readonly formulaExplanation: string;
  readonly howToSteps: readonly string[];
  readonly example: string;
  readonly useCases: readonly string[];
  readonly faq: readonly FaqItem[];
  readonly featured: boolean;
  readonly relatedCalculatorSlugs: readonly CalculatorSlug[];
  readonly relatedBlogPostSlugs: readonly BlogPostSlug[];
  readonly lastUpdated?: string;
  readonly reviewedBy?: string;
  readonly calculationMethod?: string;
  readonly versionHistory?: readonly VersionHistoryItem[];
}

export interface FaqItem {
  readonly question: string;
  readonly answer: string;
}

export interface BlogPost extends SeoFields {
  readonly id: BlogPostSlug;
  readonly title: string;
  readonly slug: BlogPostSlug;
  readonly excerpt: string;
  readonly published: boolean;
  readonly categorySlug?: CategorySlug;
  readonly relatedCalculatorSlugs: readonly CalculatorSlug[];
  readonly sections?: readonly BlogPostSection[];
  readonly content?: string;
}

export interface BlogPostSection {
  readonly heading: string;
  readonly body: readonly string[];
}

export interface CalculatorViewSnapshot {
  readonly calculatorSlug: CalculatorSlug;
  readonly views: number;
  readonly date: string;
}
