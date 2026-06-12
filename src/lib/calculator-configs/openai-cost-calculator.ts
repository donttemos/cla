import type { CalculatorConfig } from "@/types/calculator-engine";
import { resultField } from "./helpers";

// Sample rates per 1k tokens in USD
const rates: Record<string, { input: number; output: number }> = {
  "gpt-4o": { input: 0.005, output: 0.015 },
  "gpt-4o-mini": { input: 0.00015, output: 0.0006 },
  "claude-3-5-sonnet": { input: 0.003, output: 0.015 },
};

export const openaiCostCalculatorConfig = {
  slug: "openai-cost-calculator",
  title: "AI Token & Cost Estimator",
  description: "Paste your prompt to accurately count tokens and estimate the API cost using real models.",
  inputs: [
    {
      name: "model",
      label: "AI Model",
      type: "select",
      required: true,
      defaultValue: "gpt-4o",
      options: [
        { label: "GPT-4o", value: "gpt-4o" },
        { label: "GPT-4o mini", value: "gpt-4o-mini" },
        { label: "Claude 3.5 Sonnet (Approx)", value: "claude-3-5-sonnet" },
      ],
    },
    {
      name: "prompt",
      label: "Your Prompt / Text",
      type: "textarea",
      required: true,
      placeholder: "Paste the text you want to send to the AI here...",
      description: "We will use the Suyu API to count the exact tokens for your text.",
    },
    {
      name: "expectedOutputTokens",
      label: "Expected Output Tokens (Estimate)",
      type: "number",
      required: true,
      min: 0,
      step: 10,
      defaultValue: 500,
      description: "How long do you expect the AI's answer to be?",
    },
  ],
  resultFields: [
    {
      name: "inputTokens",
      label: "Actual Input Tokens",
      precision: 0,
    },
    {
      name: "inputCost",
      label: "Input Cost",
      unit: "USD",
      precision: 5,
    },
    {
      name: "outputCost",
      label: "Estimated Output Cost",
      unit: "USD",
      precision: 5,
    },
    {
      name: "totalCost",
      label: "Total Estimated Cost",
      unit: "USD",
      precision: 5,
    },
  ],
  async calculate(values) {
    const model = values["model"] as string;
    const prompt = values["prompt"] as string;
    const expectedOutputTokens = Number(values["expectedOutputTokens"]) || 0;

    let inputTokens = 0;

    if (prompt) {
      try {
        // We use an absolute URL if running on the server, but since this runs in the browser
        // as part of the dynamic calculator widget, we can use a relative URL.
        const res = await fetch("/api/estimate-tokens", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text: prompt, model: model.startsWith("gpt") ? model : "gpt-4o" }),
        });

        if (res.ok) {
          const data = await res.json();
          inputTokens = data.tokens;
        }
      } catch (err) {
        console.error("Failed to estimate tokens", err);
      }
    }

    const rate = rates[model] || rates["gpt-4o"];
    
    // Cost per token is rate / 1000
    const inputCost = (inputTokens / 1000) * rate.input;
    const outputCost = (expectedOutputTokens / 1000) * rate.output;
    const totalCost = inputCost + outputCost;

    return [
      resultField({
        name: "inputTokens",
        label: "Actual Input Tokens",
        value: inputTokens,
        precision: 0,
        description: "Calculated via real API call",
      }),
      resultField({
        name: "inputCost",
        label: "Input Cost",
        value: inputCost,
        unit: "USD",
        precision: 5,
      }),
      resultField({
        name: "outputCost",
        label: "Estimated Output Cost",
        value: outputCost,
        unit: "USD",
        precision: 5,
      }),
      resultField({
        name: "totalCost",
        label: "Total Estimated Cost",
        value: totalCost,
        unit: "USD",
        precision: 5,
      }),
    ];
  },
} satisfies CalculatorConfig;
