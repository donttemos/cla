import type { CalculatorConfig } from "@/types/calculator-engine";
import { readNumber, readString, resultField, roundTo } from "./helpers";

const processingMultipliers: Record<string, number> = {
  standard: 1,
  discounted: 0.5,
};

export const llmCostCalculatorConfig = {
  slug: "llm-cost-calculator",
  title: "LLM Cost Calculator",
  description: "Compare large language model costs from token volume, request volume, and editable per-million-token rates.",
  inputs: [
    {
      name: "inputTokensPerRequest",
      label: "Input tokens per request",
      type: "number",
      required: true,
      min: 0,
      step: 100,
      unit: "tokens",
      defaultValue: 12000,
    },
    {
      name: "outputTokensPerRequest",
      label: "Output tokens per request",
      type: "number",
      required: true,
      min: 0,
      step: 100,
      unit: "tokens",
      defaultValue: 3000,
    },
    {
      name: "requestsPerDay",
      label: "Requests per day",
      type: "number",
      required: true,
      min: 0,
      step: 100,
      defaultValue: 500,
    },
    {
      name: "daysPerMonth",
      label: "Billable days per month",
      type: "number",
      required: true,
      min: 1,
      max: 31,
      step: 1,
      defaultValue: 30,
    },
    {
      name: "inputRatePerMillion",
      label: "Input rate per 1M tokens",
      type: "number",
      required: true,
      min: 0,
      step: 0.01,
      unit: "USD",
      defaultValue: 3,
    },
    {
      name: "outputRatePerMillion",
      label: "Output rate per 1M tokens",
      type: "number",
      required: true,
      min: 0,
      step: 0.01,
      unit: "USD",
      defaultValue: 15,
    },
    {
      name: "processingMode",
      label: "Processing mode",
      type: "select",
      required: true,
      defaultValue: "standard",
      options: [
        { label: "Standard pricing", value: "standard" },
        { label: "Discounted batch pricing", value: "discounted" },
      ],
    },
  ],
  resultFields: [
    {
      name: "costPerRequest",
      label: "Cost per request",
      unit: "USD",
      precision: 4,
    },
    {
      name: "dailyCost",
      label: "Daily cost",
      unit: "USD",
      precision: 2,
    },
    {
      name: "monthlyCost",
      label: "Monthly cost",
      unit: "USD",
      precision: 2,
    },
    {
      name: "monthlyTokens",
      label: "Monthly tokens",
      unit: "tokens",
      precision: 0,
    },
  ],
  calculate(values) {
    const inputTokensPerRequest = readNumber(values, "inputTokensPerRequest");
    const outputTokensPerRequest = readNumber(values, "outputTokensPerRequest");
    const requestsPerDay = readNumber(values, "requestsPerDay");
    const daysPerMonth = readNumber(values, "daysPerMonth");
    const inputRatePerMillion = readNumber(values, "inputRatePerMillion");
    const outputRatePerMillion = readNumber(values, "outputRatePerMillion");
    const processingMode = readString(values, "processingMode");

    const multiplier = processingMultipliers[processingMode] ?? 1;
    const inputCostPerRequest = (inputTokensPerRequest / 1_000_000) * inputRatePerMillion;
    const outputCostPerRequest = (outputTokensPerRequest / 1_000_000) * outputRatePerMillion;
    const costPerRequest = (inputCostPerRequest + outputCostPerRequest) * multiplier;
    const dailyCost = costPerRequest * requestsPerDay;
    const monthlyCost = dailyCost * daysPerMonth;
    const monthlyTokens =
      (inputTokensPerRequest + outputTokensPerRequest) * requestsPerDay * daysPerMonth;

    return [
      resultField({
        name: "costPerRequest",
        label: "Cost per request",
        value: roundTo(costPerRequest, 4),
        unit: "USD",
        precision: 4,
      }),
      resultField({
        name: "dailyCost",
        label: "Daily cost",
        value: roundTo(dailyCost, 2),
        unit: "USD",
        precision: 2,
      }),
      resultField({
        name: "monthlyCost",
        label: "Monthly cost",
        value: roundTo(monthlyCost, 2),
        unit: "USD",
        precision: 2,
      }),
      resultField({
        name: "monthlyTokens",
        label: "Monthly tokens",
        value: roundTo(monthlyTokens, 0),
        unit: "tokens",
        precision: 0,
      }),
    ];
  },
} satisfies CalculatorConfig;
