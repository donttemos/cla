import type { CalculatorConfig } from "@/types/calculator-engine";
import { readNumber, resultField, roundTo } from "./helpers";

export const loanCalculatorConfig = {
  slug: "loan-calculator",
  title: "Loan Calculator",
  description: "Estimate monthly loan payments, total interest, and payoff costs.",
  inputs: [
    {
      name: "principal",
      label: "Loan amount",
      type: "number",
      required: true,
      min: 1,
      step: 100,
      unit: "USD",
    },
    {
      name: "annualInterestRate",
      label: "Annual interest rate",
      type: "number",
      required: true,
      min: 0,
      max: 100,
      step: 0.01,
      unit: "%",
    },
    {
      name: "termYears",
      label: "Loan term",
      type: "number",
      required: true,
      min: 0.1,
      max: 100,
      step: 0.1,
      unit: "years",
    },
  ],
  resultFields: [
    {
      name: "monthlyPayment",
      label: "Monthly payment",
      unit: "USD",
      precision: 2,
    },
    {
      name: "totalPayment",
      label: "Total payment",
      unit: "USD",
      precision: 2,
    },
    {
      name: "totalInterest",
      label: "Total interest",
      unit: "USD",
      precision: 2,
    },
  ],
  calculate(values) {
    const principal = readNumber(values, "principal");
    const annualInterestRate = readNumber(values, "annualInterestRate");
    const termYears = readNumber(values, "termYears");
    const months = termYears * 12;
    const monthlyRate = annualInterestRate / 100 / 12;
    const monthlyPayment =
      monthlyRate === 0
        ? principal / months
        : (principal * monthlyRate) / (1 - (1 + monthlyRate) ** -months);
    const totalPayment = monthlyPayment * months;

    return [
      resultField({
        name: "monthlyPayment",
        label: "Monthly payment",
        value: roundTo(monthlyPayment, 2),
        unit: "USD",
        precision: 2,
      }),
      resultField({
        name: "totalPayment",
        label: "Total payment",
        value: roundTo(totalPayment, 2),
        unit: "USD",
        precision: 2,
      }),
      resultField({
        name: "totalInterest",
        label: "Total interest",
        value: roundTo(totalPayment - principal, 2),
        unit: "USD",
        precision: 2,
      }),
    ];
  },
} satisfies CalculatorConfig;
