import type { CalculatorConfig } from "@/types/calculator-engine";
import { readNumber, resultField, roundTo, validationError } from "./helpers";

export const ltvCalculatorConfig = {
  slug: "ltv-calculator",
  title: "LTV Calculator",
  description: "Estimate customer lifetime value from revenue, margin, and retention.",
  inputs: [
    {
      name: "averageRevenuePerUser",
      label: "Average Monthly Revenue per User",
      type: "number",
      required: true,
      min: 0,
      step: 1,
      unit: "USD",
      defaultValue: 50,
    },
    {
      name: "grossMargin",
      label: "Gross Margin",
      type: "number",
      required: true,
      min: 0,
      max: 100,
      step: 0.1,
      unit: "%",
      defaultValue: 80,
    },
    {
      name: "monthlyChurnRate",
      label: "Monthly Churn Rate",
      type: "number",
      required: true,
      min: 0,
      max: 100,
      step: 0.1,
      unit: "%",
      defaultValue: 5,
    },
    {
      name: "customerAcquisitionCost",
      label: "Customer Acquisition Cost",
      type: "number",
      required: true,
      min: 0,
      step: 1,
      unit: "USD",
      defaultValue: 200,
    },
  ],
  validate(values) {
    if (values.monthlyChurnRate === 0) {
      return [
        validationError(
          "monthlyChurnRate",
          "Monthly churn rate must be greater than 0 to estimate lifetime.",
        ),
      ];
    }

    return [];
  },
  resultFields: [
    {
      name: "customerLifetimeValue",
      label: "Customer Lifetime Value",
      unit: "USD",
      precision: 2,
    },
    {
      name: "averageCustomerLifetime",
      label: "Average Customer Lifetime",
      unit: "months",
      precision: 1,
    },
    {
      name: "ltvToCacRatio",
      label: "LTV:CAC Ratio",
      precision: 2,
    },
    {
      name: "monthlyGrossProfit",
      label: "Monthly Gross Profit per User",
      unit: "USD",
      precision: 2,
    },
  ],
  calculate(values) {
    const averageRevenuePerUser = readNumber(values, "averageRevenuePerUser");
    const grossMargin = readNumber(values, "grossMargin") / 100;
    const monthlyChurnRate = readNumber(values, "monthlyChurnRate") / 100;
    const customerAcquisitionCost = readNumber(values, "customerAcquisitionCost");

    const monthlyGrossProfit = averageRevenuePerUser * grossMargin;
    const averageCustomerLifetime = 1 / monthlyChurnRate;
    const customerLifetimeValue = monthlyGrossProfit * averageCustomerLifetime;
    const ltvToCacRatio =
      customerAcquisitionCost > 0 ? customerLifetimeValue / customerAcquisitionCost : 0;

    return [
      resultField({
        name: "customerLifetimeValue",
        label: "Customer Lifetime Value",
        value: roundTo(customerLifetimeValue, 2),
        unit: "USD",
        precision: 2,
      }),
      resultField({
        name: "averageCustomerLifetime",
        label: "Average Customer Lifetime",
        value: roundTo(averageCustomerLifetime, 1),
        unit: "months",
        precision: 1,
      }),
      resultField({
        name: "ltvToCacRatio",
        label: "LTV:CAC Ratio",
        value: roundTo(ltvToCacRatio, 2),
        precision: 2,
      }),
      resultField({
        name: "monthlyGrossProfit",
        label: "Monthly Gross Profit per User",
        value: roundTo(monthlyGrossProfit, 2),
        unit: "USD",
        precision: 2,
      }),
    ];
  },
} satisfies CalculatorConfig;
