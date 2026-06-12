import type { CalculatorConfig } from "@/types/calculator-engine";
import { readNumber, resultField, roundTo } from "./helpers";

export const carLoanCalculatorConfig = {
  slug: "car-loan-calculator",
  title: "Car Loan Calculator",
  description: "Estimate monthly auto loan payments, total interest, and payoff cost before buying a car.",
  inputs: [
    {
      name: "carPrice",
      label: "Vehicle price",
      type: "number",
      required: true,
      min: 0,
      step: 500,
      unit: "USD",
      defaultValue: 25000,
    },
    {
      name: "downPayment",
      label: "Down payment",
      type: "number",
      required: true,
      min: 0,
      step: 500,
      unit: "USD",
      defaultValue: 5000,
    },
    {
      name: "tradeInValue",
      label: "Trade-in value",
      type: "number",
      required: true,
      min: 0,
      step: 500,
      unit: "USD",
      defaultValue: 0,
    },
    {
      name: "interestRate",
      label: "Interest rate",
      type: "number",
      required: true,
      min: 0,
      max: 50,
      step: 0.1,
      unit: "%",
      defaultValue: 5.5,
    },
    {
      name: "termMonths",
      label: "Loan term",
      type: "number",
      required: true,
      min: 1,
      max: 120,
      step: 1,
      unit: "months",
      defaultValue: 60,
    },
  ],
  resultFields: [
    {
      name: "monthlyPayment",
      label: "Monthly Payment",
      unit: "USD",
      precision: 2,
    },
    {
      name: "loanAmount",
      label: "Total Loan Amount",
      unit: "USD",
      precision: 2,
    },
    {
      name: "totalInterest",
      label: "Total Interest Paid",
      unit: "USD",
      precision: 2,
    },
    {
      name: "totalCost",
      label: "Total Cost of Vehicle",
      unit: "USD",
      precision: 2,
    },
  ],
  calculate(values) {
    const carPrice = readNumber(values, "carPrice");
    const downPayment = readNumber(values, "downPayment");
    const tradeInValue = readNumber(values, "tradeInValue");
    const annualInterestRate = readNumber(values, "interestRate");
    const termMonths = readNumber(values, "termMonths");

    const loanAmount = Math.max(0, carPrice - downPayment - tradeInValue);
    const monthlyRate = annualInterestRate / 100 / 12;

    let monthlyPayment = 0;
    if (loanAmount > 0) {
      monthlyPayment =
        monthlyRate === 0
          ? loanAmount / termMonths
          : (loanAmount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -termMonths));
    }

    const totalPaymentForLoan = monthlyPayment * termMonths;
    const totalInterest = Math.max(0, totalPaymentForLoan - loanAmount);
    const totalCost = carPrice + totalInterest;

    return [
      resultField({
        name: "monthlyPayment",
        label: "Monthly Payment",
        value: roundTo(monthlyPayment, 2),
        unit: "USD",
        precision: 2,
      }),
      resultField({
        name: "loanAmount",
        label: "Total Loan Amount",
        value: roundTo(loanAmount, 2),
        unit: "USD",
        precision: 2,
      }),
      resultField({
        name: "totalInterest",
        label: "Total Interest Paid",
        value: roundTo(totalInterest, 2),
        unit: "USD",
        precision: 2,
      }),
      resultField({
        name: "totalCost",
        label: "Total Cost (with interest)",
        value: roundTo(totalCost, 2),
        unit: "USD",
        precision: 2,
      }),
    ];
  },
} satisfies CalculatorConfig;
