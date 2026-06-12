import type { CalculatorConfig } from "@/types/calculator-engine";
import { readNumber, resultField, roundTo } from "./helpers";

export const interestCalculatorConfig = {
  slug: "interest-calculator",
  title: "Interest Calculator",
  description: "Calculate simple interest, compound interest, and total growth over time.",
  inputs: [
    {
      name: "principal",
      label: "Principal Amount",
      type: "number",
      required: true,
      min: 0,
      step: 100,
      unit: "USD",
      defaultValue: 5000,
    },
    {
      name: "rate",
      label: "Annual Interest Rate",
      type: "number",
      required: true,
      min: 0,
      max: 100,
      step: 0.1,
      unit: "%",
      defaultValue: 5,
    },
    {
      name: "time",
      label: "Time Period",
      type: "number",
      required: true,
      min: 0.1,
      step: 1,
      unit: "years",
      defaultValue: 10,
    },
    {
      name: "compoundFrequency",
      label: "Compound Frequency",
      type: "select",
      required: true,
      defaultValue: "12",
      options: [
        { label: "Simple Interest (No compounding)", value: "0" },
        { label: "Annually (1/yr)", value: "1" },
        { label: "Quarterly (4/yr)", value: "4" },
        { label: "Monthly (12/yr)", value: "12" },
        { label: "Daily (365/yr)", value: "365" },
      ],
    },
  ],
  resultFields: [
    {
      name: "totalBalance",
      label: "Total Balance",
      unit: "USD",
      precision: 2,
    },
    {
      name: "totalInterest",
      label: "Total Interest Earned",
      unit: "USD",
      precision: 2,
    },
  ],
  calculate(values) {
    const principal = readNumber(values, "principal");
    const rate = readNumber(values, "rate") / 100;
    const time = readNumber(values, "time");
    
    // We expect compoundFrequency to be read as a string from select, then parsed
    let compoundFrequencyStr = values["compoundFrequency"];
    if (typeof compoundFrequencyStr !== "string" && typeof compoundFrequencyStr !== "number") {
      compoundFrequencyStr = "12";
    }
    const n = Number(compoundFrequencyStr);

    let totalBalance = 0;
    if (n === 0) {
      // Simple Interest
      totalBalance = principal * (1 + rate * time);
    } else {
      // Compound Interest
      totalBalance = principal * Math.pow(1 + rate / n, n * time);
    }

    const totalInterest = totalBalance - principal;

    return [
      resultField({
        name: "totalBalance",
        label: "Total Balance",
        value: roundTo(totalBalance, 2),
        unit: "USD",
        precision: 2,
      }),
      resultField({
        name: "totalInterest",
        label: "Total Interest Earned",
        value: roundTo(totalInterest, 2),
        unit: "USD",
        precision: 2,
      }),
    ];
  },
} satisfies CalculatorConfig;
