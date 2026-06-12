import type { CalculatorConfig } from "@/types/calculator-engine";
import { readNumber, resultField, roundTo } from "./helpers";

export const cacCalculatorConfig = {
  slug: "cac-calculator",
  title: "CAC Calculator",
  description: "Calculate customer acquisition cost from sales and marketing spend.",
  inputs: [
    {
      name: "marketingSpend",
      label: "Marketing Spend",
      type: "number",
      required: true,
      min: 0,
      step: 100,
      unit: "USD",
      defaultValue: 10000,
    },
    {
      name: "salesSpend",
      label: "Sales Spend",
      type: "number",
      required: true,
      min: 0,
      step: 100,
      unit: "USD",
      defaultValue: 5000,
    },
    {
      name: "newCustomers",
      label: "New Customers",
      type: "number",
      required: true,
      exclusiveMin: 0,
      step: 1,
      defaultValue: 150,
    },
    {
      name: "averageRevenuePerCustomer",
      label: "Average Revenue per Customer",
      type: "number",
      required: true,
      min: 0,
      step: 10,
      unit: "USD",
      defaultValue: 300,
    },
  ],
  resultFields: [
    {
      name: "customerAcquisitionCost",
      label: "Customer Acquisition Cost",
      unit: "USD",
      precision: 2,
    },
    {
      name: "totalAcquisitionSpend",
      label: "Total Acquisition Spend",
      unit: "USD",
      precision: 2,
    },
    {
      name: "paybackCustomers",
      label: "Revenue-to-CAC Ratio",
      precision: 2,
    },
  ],
  calculate(values) {
    const marketingSpend = readNumber(values, "marketingSpend");
    const salesSpend = readNumber(values, "salesSpend");
    const newCustomers = readNumber(values, "newCustomers");
    const averageRevenuePerCustomer = readNumber(values, "averageRevenuePerCustomer");

    const totalAcquisitionSpend = marketingSpend + salesSpend;
    const customerAcquisitionCost = totalAcquisitionSpend / newCustomers;
    const paybackCustomers =
      customerAcquisitionCost > 0
        ? averageRevenuePerCustomer / customerAcquisitionCost
        : 0;

    return [
      resultField({
        name: "customerAcquisitionCost",
        label: "Customer Acquisition Cost",
        value: roundTo(customerAcquisitionCost, 2),
        unit: "USD",
        precision: 2,
      }),
      resultField({
        name: "totalAcquisitionSpend",
        label: "Total Acquisition Spend",
        value: roundTo(totalAcquisitionSpend, 2),
        unit: "USD",
        precision: 2,
      }),
      resultField({
        name: "paybackCustomers",
        label: "Revenue-to-CAC Ratio",
        value: roundTo(paybackCustomers, 2),
        precision: 2,
      }),
    ];
  },
} satisfies CalculatorConfig;
