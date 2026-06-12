import type { CalculatorConfig } from "@/types/calculator-engine";
import { readNumber, resultField, roundTo } from "./helpers";

export const investmentCalculatorConfig = {
  slug: "investment-calculator",
  title: "Investment Calculator",
  description: "Forecast investment value using contributions, return rate, and investment horizon.",
  inputs: [
    {
      name: "initialInvestment",
      label: "Initial Investment",
      type: "number",
      required: true,
      min: 0,
      step: 100,
      unit: "USD",
      defaultValue: 10000,
    },
    {
      name: "monthlyContribution",
      label: "Monthly Contribution",
      type: "number",
      required: true,
      min: 0,
      step: 50,
      unit: "USD",
      defaultValue: 500,
    },
    {
      name: "annualReturnRate",
      label: "Expected Annual Return",
      type: "number",
      required: true,
      min: -100,
      max: 100,
      step: 0.1,
      unit: "%",
      defaultValue: 7,
    },
    {
      name: "years",
      label: "Investment Horizon",
      type: "number",
      required: true,
      min: 0.1,
      max: 100,
      step: 1,
      unit: "years",
      defaultValue: 15,
    },
  ],
  resultFields: [
    {
      name: "futureValue",
      label: "Future Value",
      unit: "USD",
      precision: 2,
    },
    {
      name: "totalInvested",
      label: "Total Invested",
      unit: "USD",
      precision: 2,
    },
    {
      name: "investmentGain",
      label: "Investment Gain / Loss",
      unit: "USD",
      precision: 2,
    },
    {
      name: "annualizedReturn",
      label: "Annualized Return on Contributions",
      unit: "%",
      precision: 2,
    },
  ],
  calculate(values) {
    const initialInvestment = readNumber(values, "initialInvestment");
    const monthlyContribution = readNumber(values, "monthlyContribution");
    const annualReturnRate = readNumber(values, "annualReturnRate") / 100;
    const years = readNumber(values, "years");

    const months = Math.round(years * 12);
    const monthlyRate = annualReturnRate / 12;

    let futureValue = initialInvestment;
    for (let month = 0; month < months; month += 1) {
      futureValue = futureValue * (1 + monthlyRate) + monthlyContribution;
    }

    const totalInvested = initialInvestment + monthlyContribution * months;
    const investmentGain = futureValue - totalInvested;
    const annualizedReturn =
      totalInvested > 0 ? ((futureValue / totalInvested) ** (1 / years) - 1) * 100 : 0;

    return [
      resultField({
        name: "futureValue",
        label: "Future Value",
        value: roundTo(futureValue, 2),
        unit: "USD",
        precision: 2,
      }),
      resultField({
        name: "totalInvested",
        label: "Total Invested",
        value: roundTo(totalInvested, 2),
        unit: "USD",
        precision: 2,
      }),
      resultField({
        name: "investmentGain",
        label: "Investment Gain / Loss",
        value: roundTo(investmentGain, 2),
        unit: "USD",
        precision: 2,
      }),
      resultField({
        name: "annualizedReturn",
        label: "Annualized Return on Contributions",
        value: roundTo(annualizedReturn, 2),
        unit: "%",
        precision: 2,
      }),
    ];
  },
} satisfies CalculatorConfig;
