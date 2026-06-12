import type { CalculatorConfig } from "@/types/calculator-engine";
import { readNumber, readString, resultField, roundTo } from "./helpers";

const claudeModelRates: Record<string, { input: number; output: number }> = {
  "claude-opus-4-8": { input: 5, output: 25 },
  "claude-sonnet-4-6": { input: 3, output: 15 },
  "claude-haiku-4-5": { input: 1, output: 5 },
};

const batchDiscounts: Record<string, number> = {
  standard: 1,
  batch: 0.5,
};

const inferenceMultipliers: Record<string, number> = {
  global: 1,
  "us-only": 1.1,
};

export const claudeTokenCalculatorConfig = {
  slug: "claude-token-calculator",
  title: "Claude Token Calculator",
  description: "Estimate Claude API cost from prompt tokens, completion tokens, model pricing, and request volume.",
  inputs: [
    {
      name: "model",
      label: "Claude model",
      type: "select",
      required: true,
      defaultValue: "claude-sonnet-4-6",
      options: [
        { label: "Claude Sonnet 4.6", value: "claude-sonnet-4-6" },
        { label: "Claude Opus 4.8", value: "claude-opus-4-8" },
        { label: "Claude Haiku 4.5", value: "claude-haiku-4-5" },
      ],
    },
    {
      name: "promptTokens",
      label: "Prompt tokens per request",
      type: "number",
      required: true,
      min: 0,
      step: 100,
      unit: "tokens",
      defaultValue: 20000,
    },
    {
      name: "completionTokens",
      label: "Completion tokens per request",
      type: "number",
      required: true,
      min: 0,
      step: 100,
      unit: "tokens",
      defaultValue: 4000,
    },
    {
      name: "requestsPerMonth",
      label: "Requests per month",
      type: "number",
      required: true,
      min: 1,
      step: 100,
      defaultValue: 1000,
    },
    {
      name: "processingMode",
      label: "Processing mode",
      type: "select",
      required: true,
      defaultValue: "standard",
      options: [
        { label: "Standard API", value: "standard" },
        { label: "Batch API", value: "batch" },
      ],
    },
    {
      name: "inferenceRegion",
      label: "Inference region",
      type: "select",
      required: true,
      defaultValue: "global",
      options: [
        { label: "Global routing", value: "global" },
        { label: "US-only inference", value: "us-only" },
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
      name: "monthlyCost",
      label: "Monthly cost",
      unit: "USD",
      precision: 2,
    },
    {
      name: "monthlyInputTokens",
      label: "Monthly input tokens",
      unit: "tokens",
      precision: 0,
    },
    {
      name: "monthlyOutputTokens",
      label: "Monthly output tokens",
      unit: "tokens",
      precision: 0,
    },
  ],
  calculate(values) {
    const model = readString(values, "model");
    const promptTokens = readNumber(values, "promptTokens");
    const completionTokens = readNumber(values, "completionTokens");
    const requestsPerMonth = readNumber(values, "requestsPerMonth");
    const processingMode = readString(values, "processingMode");
    const inferenceRegion = readString(values, "inferenceRegion");

    const rate = claudeModelRates[model] ?? claudeModelRates["claude-sonnet-4-6"];
    const processingMultiplier = batchDiscounts[processingMode] ?? 1;
    const regionMultiplier = inferenceMultipliers[inferenceRegion] ?? 1;
    const totalMultiplier = processingMultiplier * regionMultiplier;

    const inputCostPerRequest = (promptTokens / 1_000_000) * rate.input * totalMultiplier;
    const outputCostPerRequest = (completionTokens / 1_000_000) * rate.output * totalMultiplier;
    const costPerRequest = inputCostPerRequest + outputCostPerRequest;
    const monthlyCost = costPerRequest * requestsPerMonth;

    return [
      resultField({
        name: "costPerRequest",
        label: "Cost per request",
        value: roundTo(costPerRequest, 4),
        unit: "USD",
        precision: 4,
      }),
      resultField({
        name: "monthlyCost",
        label: "Monthly cost",
        value: roundTo(monthlyCost, 2),
        unit: "USD",
        precision: 2,
      }),
      resultField({
        name: "monthlyInputTokens",
        label: "Monthly input tokens",
        value: roundTo(promptTokens * requestsPerMonth, 0),
        unit: "tokens",
        precision: 0,
      }),
      resultField({
        name: "monthlyOutputTokens",
        label: "Monthly output tokens",
        value: roundTo(completionTokens * requestsPerMonth, 0),
        unit: "tokens",
        precision: 0,
      }),
    ];
  },
} satisfies CalculatorConfig;
