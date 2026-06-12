import type { CalculatorConfig } from "@/types/calculator-engine";
import { readNumber, resultField, roundTo } from "./helpers";

export const profitCalculatorConfig = {
  slug: "profit-calculator",
  title: "Profit Calculator",
  description: "Calculate profit and profit margin from revenue and costs.",
  inputs: [
    {
      name: "revenue",
      label: "Total Revenue",
      type: "number",
      required: true,
      min: 0,
      step: 100,
      unit: "USD",
      defaultValue: 50000,
    },
    {
      name: "cost",
      label: "Total Costs",
      type: "number",
      required: true,
      min: 0,
      step: 100,
      unit: "USD",
      defaultValue: 35000,
    },
  ],
  resultFields: [
    {
      name: "grossProfit",
      label: "Gross Profit",
      unit: "USD",
      precision: 2,
    },
    {
      name: "profitMargin",
      label: "Profit Margin",
      unit: "%",
      precision: 2,
    },
  ],
  calculate(values) {
    const revenue = readNumber(values, "revenue");
    const cost = readNumber(values, "cost");

    const profit = revenue - cost;
    const margin = revenue > 0 ? (profit / revenue) * 100 : 0;

    return [
      resultField({
        name: "grossProfit",
        label: "Gross Profit",
        value: roundTo(profit, 2),
        unit: "USD",
        precision: 2,
      }),
      resultField({
        name: "profitMargin",
        label: "Profit Margin",
        value: roundTo(margin, 2),
        unit: "%",
        precision: 2,
      }),
    ];
  },
} satisfies CalculatorConfig;
