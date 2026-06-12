import type { CalculatorConfig } from "@/types/calculator-engine";
import { readNumber, resultField, roundTo } from "./helpers";

export const roiCalculatorConfig = {
  slug: "roi-calculator",
  title: "ROI Calculator",
  description: "Measure return on investment as a percentage of the original cost.",
  inputs: [
    {
      name: "amountInvested",
      label: "Amount Invested (Cost)",
      type: "number",
      required: true,
      min: 0.01,
      step: 100,
      unit: "USD",
      defaultValue: 10000,
    },
    {
      name: "amountReturned",
      label: "Amount Returned (Gain)",
      type: "number",
      required: true,
      min: 0,
      step: 100,
      unit: "USD",
      defaultValue: 12500,
    },
  ],
  resultFields: [
    {
      name: "roi",
      label: "Return on Investment (ROI)",
      unit: "%",
      precision: 2,
    },
    {
      name: "investmentGain",
      label: "Investment Gain / Loss",
      unit: "USD",
      precision: 2,
    },
  ],
  calculate(values) {
    const cost = readNumber(values, "amountInvested");
    const gain = readNumber(values, "amountReturned");

    const investmentGain = gain - cost;
    const roi = (investmentGain / cost) * 100;

    return [
      resultField({
        name: "roi",
        label: "Return on Investment (ROI)",
        value: roundTo(roi, 2),
        unit: "%",
        precision: 2,
      }),
      resultField({
        name: "investmentGain",
        label: "Investment Gain / Loss",
        value: roundTo(investmentGain, 2),
        unit: "USD",
        precision: 2,
      }),
    ];
  },
} satisfies CalculatorConfig;
