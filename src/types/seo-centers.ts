import type { CalculatorSlug, SeoFields } from "./content";

export interface ComparisonPage extends SeoFields {
  readonly slug: string;
  readonly title: string;
  readonly excerpt: string;
  readonly description: string;
  readonly differences: readonly {
    readonly aspect: string;
    readonly a: string;
    readonly b: string;
  }[];
  readonly conclusion: string;
  readonly relatedCalculators: readonly CalculatorSlug[];
}

export interface FormulaPage extends SeoFields {
  readonly slug: string;
  readonly title: string;
  readonly excerpt: string;
  readonly description: string;
  readonly formula: string;
  readonly variables: readonly {
    readonly name: string;
    readonly definition: string;
  }[];
  readonly explanation: readonly string[];
  readonly relatedCalculators: readonly CalculatorSlug[];
}

export interface ExamplePage extends SeoFields {
  readonly slug: string;
  readonly title: string;
  readonly excerpt: string;
  readonly description: string;
  readonly scenario: string;
  readonly steps: readonly string[];
  readonly result: string;
  readonly relatedCalculators: readonly CalculatorSlug[];
}