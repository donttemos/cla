import type { CalculatorConfig } from "@/types/calculator-engine";
import { readNumber, resultField, roundTo, validationError } from "./helpers";

export const retirementCalculatorConfig = {
  slug: "retirement-calculator",
  title: "Retirement Calculator",
  description: "Estimate retirement savings needs and projected portfolio value.",
  inputs: [
    {
      name: "currentAge",
      label: "Current Age",
      type: "number",
      required: true,
      min: 18,
      max: 100,
      step: 1,
      defaultValue: 35,
    },
    {
      name: "retirementAge",
      label: "Retirement Age",
      type: "number",
      required: true,
      min: 18,
      max: 100,
      step: 1,
      defaultValue: 65,
    },
    {
      name: "currentSavings",
      label: "Current Retirement Savings",
      type: "number",
      required: true,
      min: 0,
      step: 1000,
      unit: "USD",
      defaultValue: 50000,
    },
    {
      name: "monthlyContribution",
      label: "Monthly Contribution",
      type: "number",
      required: true,
      min: 0,
      step: 100,
      unit: "USD",
      defaultValue: 800,
    },
    {
      name: "annualReturnRate",
      label: "Expected Annual Return",
      type: "number",
      required: true,
      min: 0,
      max: 100,
      step: 0.1,
      unit: "%",
      defaultValue: 6,
    },
    {
      name: "desiredAnnualIncome",
      label: "Desired Annual Retirement Income",
      type: "number",
      required: true,
      min: 0,
      step: 1000,
      unit: "USD",
      defaultValue: 60000,
    },
    {
      name: "withdrawalRate",
      label: "Planned Withdrawal Rate",
      type: "number",
      required: true,
      min: 0.1,
      max: 20,
      step: 0.1,
      unit: "%",
      defaultValue: 4,
    },
  ],
  validate(values) {
    const currentAge = values.currentAge;
    const retirementAge = values.retirementAge;

    if (
      typeof currentAge === "number" &&
      typeof retirementAge === "number" &&
      retirementAge <= currentAge
    ) {
      return [
        validationError(
          "retirementAge",
          "Retirement age must be greater than current age.",
        ),
      ];
    }

    return [];
  },
  resultFields: [
    {
      name: "projectedSavings",
      label: "Projected Savings at Retirement",
      unit: "USD",
      precision: 2,
    },
    {
      name: "targetSavings",
      label: "Target Savings",
      unit: "USD",
      precision: 2,
    },
    {
      name: "retirementGap",
      label: "Retirement Gap",
      unit: "USD",
      precision: 2,
    },
    {
      name: "yearsToRetirement",
      label: "Years to Retirement",
      precision: 0,
    },
  ],
  calculate(values) {
    const currentAge = readNumber(values, "currentAge");
    const retirementAge = readNumber(values, "retirementAge");
    const currentSavings = readNumber(values, "currentSavings");
    const monthlyContribution = readNumber(values, "monthlyContribution");
    const annualReturnRate = readNumber(values, "annualReturnRate") / 100;
    const desiredAnnualIncome = readNumber(values, "desiredAnnualIncome");
    const withdrawalRate = readNumber(values, "withdrawalRate") / 100;

    const yearsToRetirement = retirementAge - currentAge;
    const months = Math.round(yearsToRetirement * 12);
    const monthlyRate = annualReturnRate / 12;

    let projectedSavings = currentSavings;
    for (let month = 0; month < months; month += 1) {
      projectedSavings = projectedSavings * (1 + monthlyRate) + monthlyContribution;
    }

    const targetSavings = withdrawalRate > 0 ? desiredAnnualIncome / withdrawalRate : 0;
    const retirementGap = targetSavings - projectedSavings;

    return [
      resultField({
        name: "projectedSavings",
        label: "Projected Savings at Retirement",
        value: roundTo(projectedSavings, 2),
        unit: "USD",
        precision: 2,
      }),
      resultField({
        name: "targetSavings",
        label: "Target Savings",
        value: roundTo(targetSavings, 2),
        unit: "USD",
        precision: 2,
      }),
      resultField({
        name: "retirementGap",
        label: "Retirement Gap",
        value: roundTo(retirementGap, 2),
        unit: "USD",
        precision: 2,
        description: retirementGap > 0 ? "Additional savings needed." : "Projected surplus.",
      }),
      resultField({
        name: "yearsToRetirement",
        label: "Years to Retirement",
        value: roundTo(yearsToRetirement, 0),
        precision: 0,
      }),
    ];
  },
} satisfies CalculatorConfig;
