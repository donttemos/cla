import type { CalculatorConfig } from "@/types/calculator-engine";
import { readNumber, resultField, roundTo } from "./helpers";

export const revenueCalculatorConfig = {
  slug: "revenue-calculator",
  title: "Revenue Calculator",
  description: "Estimate revenue from price, quantity, and sales volume.",
  inputs: [
    {
      name: "unitPrice",
      label: "Unit Price",
      type: "number",
      required: true,
      min: 0,
      step: 1,
      unit: "USD",
      defaultValue: 49,
    },
    {
      name: "unitsSold",
      label: "Units Sold",
      type: "number",
      required: true,
      min: 0,
      step: 1,
      defaultValue: 1000,
    },
    {
      name: "discountRate",
      label: "Average Discount",
      type: "number",
      required: true,
      min: 0,
      max: 100,
      step: 0.1,
      unit: "%",
      defaultValue: 0,
    },
    {
      name: "refundRate",
      label: "Refund Rate",
      type: "number",
      required: true,
      min: 0,
      max: 100,
      step: 0.1,
      unit: "%",
      defaultValue: 0,
    },
  ],
  resultFields: [
    {
      name: "grossRevenue",
      label: "Gross Revenue",
      unit: "USD",
      precision: 2,
    },
    {
      name: "netRevenue",
      label: "Net Revenue",
      unit: "USD",
      precision: 2,
    },
    {
      name: "revenueLost",
      label: "Revenue Lost to Discounts and Refunds",
      unit: "USD",
      precision: 2,
    },
  ],
  calculate(values) {
    const unitPrice = readNumber(values, "unitPrice");
    const unitsSold = readNumber(values, "unitsSold");
    const discountRate = readNumber(values, "discountRate") / 100;
    const refundRate = readNumber(values, "refundRate") / 100;

    const grossRevenue = unitPrice * unitsSold;
    const revenueAfterDiscount = grossRevenue * (1 - discountRate);
    const netRevenue = revenueAfterDiscount * (1 - refundRate);
    const revenueLost = grossRevenue - netRevenue;

    return [
      resultField({
        name: "grossRevenue",
        label: "Gross Revenue",
        value: roundTo(grossRevenue, 2),
        unit: "USD",
        precision: 2,
      }),
      resultField({
        name: "netRevenue",
        label: "Net Revenue",
        value: roundTo(netRevenue, 2),
        unit: "USD",
        precision: 2,
      }),
      resultField({
        name: "revenueLost",
        label: "Revenue Lost to Discounts and Refunds",
        value: roundTo(revenueLost, 2),
        unit: "USD",
        precision: 2,
      }),
    ];
  },
} satisfies CalculatorConfig;
