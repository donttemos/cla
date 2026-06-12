import type { CalculatorConfig } from "@/types/calculator-engine";
import { readNumber, resultField, roundTo } from "./helpers";

export const breakEvenCalculatorConfig = {
  slug: "break-even-calculator",
  title: "Break Even Calculator",
  description: "Find the sales volume needed to cover fixed and variable costs.",
  inputs: [
    {
      name: "fixedCosts",
      label: "Total Fixed Costs",
      type: "number",
      required: true,
      min: 0,
      step: 100,
      unit: "USD",
      defaultValue: 10000,
    },
    {
      name: "pricePerUnit",
      label: "Price per Unit",
      type: "number",
      required: true,
      min: 0.01,
      step: 1,
      unit: "USD",
      defaultValue: 50,
    },
    {
      name: "variableCostPerUnit",
      label: "Variable Cost per Unit",
      type: "number",
      required: true,
      min: 0,
      step: 1,
      unit: "USD",
      defaultValue: 20,
    },
  ],
  resultFields: [
    {
      name: "breakEvenUnits",
      label: "Break-Even Point (Units)",
      precision: 0,
    },
    {
      name: "breakEvenRevenue",
      label: "Break-Even Revenue",
      unit: "USD",
      precision: 2,
    },
    {
      name: "contributionMargin",
      label: "Contribution Margin per Unit",
      unit: "USD",
      precision: 2,
    },
  ],
  calculate(values) {
    const fixedCosts = readNumber(values, "fixedCosts");
    const pricePerUnit = readNumber(values, "pricePerUnit");
    const variableCostPerUnit = readNumber(values, "variableCostPerUnit");

    const contributionMargin = pricePerUnit - variableCostPerUnit;
    let breakEvenUnits = 0;
    
    if (contributionMargin > 0) {
      breakEvenUnits = fixedCosts / contributionMargin;
    }

    const breakEvenRevenue = breakEvenUnits * pricePerUnit;

    return [
      resultField({
        name: "breakEvenUnits",
        label: "Break-Even Point (Units)",
        value: Math.ceil(breakEvenUnits), // Cannot sell a fraction of a unit realistically to break even
        precision: 0,
      }),
      resultField({
        name: "breakEvenRevenue",
        label: "Break-Even Revenue",
        value: roundTo(breakEvenRevenue, 2),
        unit: "USD",
        precision: 2,
      }),
      resultField({
        name: "contributionMargin",
        label: "Contribution Margin",
        value: roundTo(contributionMargin, 2),
        unit: "USD",
        precision: 2,
      }),
    ];
  },
} satisfies CalculatorConfig;
