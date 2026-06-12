import type { CalculatorConfig } from "@/types/calculator-engine";
import { readNumber, readString, resultField, roundTo } from "./helpers";

const standardDeductions: Record<string, number> = {
  single: 16100,
  marriedJoint: 32200,
  headOfHousehold: 24150,
};

const federalBrackets: Record<string, readonly { limit: number; rate: number }[]> = {
  single: [
    { limit: 12400, rate: 0.1 },
    { limit: 50400, rate: 0.12 },
    { limit: 105700, rate: 0.22 },
    { limit: 201775, rate: 0.24 },
    { limit: 256225, rate: 0.32 },
    { limit: 640600, rate: 0.35 },
    { limit: Number.POSITIVE_INFINITY, rate: 0.37 },
  ],
  marriedJoint: [
    { limit: 24800, rate: 0.1 },
    { limit: 100800, rate: 0.12 },
    { limit: 211400, rate: 0.22 },
    { limit: 403550, rate: 0.24 },
    { limit: 512450, rate: 0.32 },
    { limit: 768700, rate: 0.35 },
    { limit: Number.POSITIVE_INFINITY, rate: 0.37 },
  ],
  headOfHousehold: [
    { limit: 17700, rate: 0.1 },
    { limit: 67450, rate: 0.12 },
    { limit: 105700, rate: 0.22 },
    { limit: 201750, rate: 0.24 },
    { limit: 256200, rate: 0.32 },
    { limit: 640600, rate: 0.35 },
    { limit: Number.POSITIVE_INFINITY, rate: 0.37 },
  ],
};

export const taxCalculatorConfig = {
  slug: "tax-calculator",
  title: "Tax Calculator",
  description: "Estimate 2026 U.S. federal income tax liability, effective tax rate, and after-tax income.",
  inputs: [
    {
      name: "filingStatus",
      label: "Filing Status",
      type: "select",
      required: true,
      defaultValue: "single",
      options: [
        { label: "Single", value: "single" },
        { label: "Married Filing Jointly", value: "marriedJoint" },
        { label: "Head of Household", value: "headOfHousehold" },
      ],
    },
    {
      name: "grossIncome",
      label: "Gross Income",
      type: "number",
      required: true,
      min: 0,
      step: 1000,
      unit: "USD",
      defaultValue: 85000,
    },
    {
      name: "deductions",
      label: "Additional Deductions",
      type: "number",
      required: true,
      min: 0,
      step: 500,
      unit: "USD",
      defaultValue: 0,
    },
    {
      name: "taxCredits",
      label: "Tax Credits",
      type: "number",
      required: true,
      min: 0,
      step: 100,
      unit: "USD",
      defaultValue: 0,
    },
  ],
  resultFields: [
    {
      name: "taxableIncome",
      label: "Taxable Income",
      unit: "USD",
      precision: 2,
    },
    {
      name: "estimatedTax",
      label: "Estimated Federal Tax",
      unit: "USD",
      precision: 2,
    },
    {
      name: "afterTaxIncome",
      label: "After-Tax Income",
      unit: "USD",
      precision: 2,
    },
    {
      name: "effectiveTaxRate",
      label: "Effective Tax Rate",
      unit: "%",
      precision: 2,
    },
  ],
  calculate(values) {
    const filingStatus = readString(values, "filingStatus");
    const grossIncome = readNumber(values, "grossIncome");
    const deductions = readNumber(values, "deductions");
    const taxCredits = readNumber(values, "taxCredits");

    const standardDeduction = standardDeductions[filingStatus] ?? standardDeductions.single;
    const taxableIncome = Math.max(0, grossIncome - standardDeduction - deductions);
    const taxBeforeCredits = calculateProgressiveTax(
      taxableIncome,
      federalBrackets[filingStatus] ?? federalBrackets.single,
    );
    const estimatedTax = Math.max(0, taxBeforeCredits - taxCredits);
    const afterTaxIncome = grossIncome - estimatedTax;
    const effectiveTaxRate = grossIncome > 0 ? (estimatedTax / grossIncome) * 100 : 0;

    return [
      resultField({
        name: "taxableIncome",
        label: "Taxable Income",
        value: roundTo(taxableIncome, 2),
        unit: "USD",
        precision: 2,
      }),
      resultField({
        name: "estimatedTax",
        label: "Estimated Federal Tax",
        value: roundTo(estimatedTax, 2),
        unit: "USD",
        precision: 2,
      }),
      resultField({
        name: "afterTaxIncome",
        label: "After-Tax Income",
        value: roundTo(afterTaxIncome, 2),
        unit: "USD",
        precision: 2,
      }),
      resultField({
        name: "effectiveTaxRate",
        label: "Effective Tax Rate",
        value: roundTo(effectiveTaxRate, 2),
        unit: "%",
        precision: 2,
      }),
    ];
  },
} satisfies CalculatorConfig;

function calculateProgressiveTax(
  taxableIncome: number,
  brackets: readonly { limit: number; rate: number }[],
): number {
  let tax = 0;
  let previousLimit = 0;

  for (const bracket of brackets) {
    const taxableAtRate = Math.max(0, Math.min(taxableIncome, bracket.limit) - previousLimit);
    tax += taxableAtRate * bracket.rate;

    if (taxableIncome <= bracket.limit) {
      break;
    }

    previousLimit = bracket.limit;
  }

  return tax;
}
