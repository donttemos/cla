import type { CalculatorConfig } from "@/types/calculator-engine";
import { readNumber, readString, resultField, roundTo } from "./helpers";

export const compoundInterestCalculatorConfig = {
  slug: "compound-interest-calculator",
  title: "Compound Interest Calculator",
  description: "Project savings growth from principal, contributions, interest rate, and time.",
  inputs: [
    {
      name: "principal",
      label: "Starting Balance",
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
      defaultValue: 250,
    },
    {
      name: "annualInterestRate",
      label: "Annual Interest Rate",
      type: "number",
      required: true,
      min: 0,
      max: 100,
      step: 0.1,
      unit: "%",
      defaultValue: 6,
    },
    {
      name: "years",
      label: "Time Period",
      type: "number",
      required: true,
      min: 0.1,
      max: 100,
      step: 1,
      unit: "years",
      defaultValue: 20,
    },
    {
      name: "compoundFrequency",
      label: "Compound Frequency",
      type: "select",
      required: true,
      defaultValue: "12",
      options: [
        { label: "Annually", value: "1" },
        { label: "Quarterly", value: "4" },
        { label: "Monthly", value: "12" },
        { label: "Daily", value: "365" },
      ],
    },
  ],
  resultFields: [
    {
      name: "finalBalance",
      label: "Final Balance",
      unit: "USD",
      precision: 2,
    },
    {
      name: "totalContributions",
      label: "Total Contributions",
      unit: "USD",
      precision: 2,
    },
    {
      name: "interestEarned",
      label: "Interest Earned",
      unit: "USD",
      precision: 2,
    },
  ],
  calculate(values) {
    const principal = readNumber(values, "principal");
    const monthlyContribution = readNumber(values, "monthlyContribution");
    const annualInterestRate = readNumber(values, "annualInterestRate") / 100;
    const years = readNumber(values, "years");
    const compoundFrequency = Number(readString(values, "compoundFrequency"));

    const months = Math.round(years * 12);
    const effectiveAnnualRate =
      compoundFrequency > 0
        ? (1 + annualInterestRate / compoundFrequency) ** compoundFrequency - 1
        : annualInterestRate;
    const monthlyRate = (1 + effectiveAnnualRate) ** (1 / 12) - 1;

    let finalBalance = principal;
    for (let month = 0; month < months; month += 1) {
      finalBalance = finalBalance * (1 + monthlyRate) + monthlyContribution;
    }

    const totalContributions = principal + monthlyContribution * months;
    const interestEarned = finalBalance - totalContributions;

    return [
      resultField({
        name: "finalBalance",
        label: "Final Balance",
        value: roundTo(finalBalance, 2),
        unit: "USD",
        precision: 2,
      }),
      resultField({
        name: "totalContributions",
        label: "Total Contributions",
        value: roundTo(totalContributions, 2),
        unit: "USD",
        precision: 2,
      }),
      resultField({
        name: "interestEarned",
        label: "Interest Earned",
        value: roundTo(interestEarned, 2),
        unit: "USD",
        precision: 2,
      }),
    ];
  },
} satisfies CalculatorConfig;
