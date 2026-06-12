import type { CalculatorConfig } from "@/types/calculator-engine";
import { readNumber, resultField, roundTo } from "./helpers";

export const mortgageCalculatorConfig = {
  slug: "mortgage-calculator",
  title: "Mortgage Calculator",
  description: "Calculate home loan payments with principal, interest, taxes, and insurance.",
  inputs: [
    {
      name: "homePrice",
      label: "Home price",
      type: "number",
      required: true,
      min: 0,
      step: 1000,
      unit: "USD",
      defaultValue: 350000,
    },
    {
      name: "downPayment",
      label: "Down payment",
      type: "number",
      required: true,
      min: 0,
      step: 1000,
      unit: "USD",
      defaultValue: 70000,
    },
    {
      name: "interestRate",
      label: "Interest rate",
      type: "number",
      required: true,
      min: 0,
      max: 100,
      step: 0.1,
      unit: "%",
      defaultValue: 6.5,
    },
    {
      name: "termYears",
      label: "Loan term",
      type: "number",
      required: true,
      min: 1,
      max: 100,
      step: 1,
      unit: "years",
      defaultValue: 30,
    },
    {
      name: "propertyTax",
      label: "Annual property tax",
      type: "number",
      required: true,
      min: 0,
      step: 100,
      unit: "USD/yr",
      defaultValue: 3000,
    },
    {
      name: "homeInsurance",
      label: "Annual home insurance",
      type: "number",
      required: true,
      min: 0,
      step: 100,
      unit: "USD/yr",
      defaultValue: 1200,
    },
  ],
  resultFields: [
    {
      name: "monthlyPayment",
      label: "Total Monthly Payment",
      unit: "USD",
      precision: 2,
    },
    {
      name: "principalAndInterest",
      label: "Principal & Interest",
      unit: "USD",
      precision: 2,
    },
    {
      name: "monthlyTaxAndInsurance",
      label: "Taxes & Insurance (Monthly)",
      unit: "USD",
      precision: 2,
    },
    {
      name: "totalInterest",
      label: "Total Interest Paid",
      unit: "USD",
      precision: 2,
    },
  ],
  calculate(values) {
    const homePrice = readNumber(values, "homePrice");
    const downPayment = readNumber(values, "downPayment");
    const annualInterestRate = readNumber(values, "interestRate");
    const termYears = readNumber(values, "termYears");
    const propertyTax = readNumber(values, "propertyTax");
    const homeInsurance = readNumber(values, "homeInsurance");

    const principal = Math.max(0, homePrice - downPayment);
    const months = termYears * 12;
    const monthlyRate = annualInterestRate / 100 / 12;

    let principalAndInterest = 0;
    if (principal > 0) {
      principalAndInterest =
        monthlyRate === 0
          ? principal / months
          : (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months));
    }

    const monthlyTaxAndInsurance = (propertyTax + homeInsurance) / 12;
    const totalMonthlyPayment = principalAndInterest + monthlyTaxAndInsurance;
    const totalInterest = (principalAndInterest * months) - principal;

    return [
      resultField({
        name: "monthlyPayment",
        label: "Total Monthly Payment",
        value: roundTo(totalMonthlyPayment, 2),
        unit: "USD",
        precision: 2,
      }),
      resultField({
        name: "principalAndInterest",
        label: "Principal & Interest",
        value: roundTo(principalAndInterest, 2),
        unit: "USD",
        precision: 2,
      }),
      resultField({
        name: "monthlyTaxAndInsurance",
        label: "Taxes & Insurance (Monthly)",
        value: roundTo(monthlyTaxAndInsurance, 2),
        unit: "USD",
        precision: 2,
      }),
      resultField({
        name: "totalInterest",
        label: "Total Interest Paid",
        value: roundTo(Math.max(0, totalInterest), 2),
        unit: "USD",
        precision: 2,
      }),
    ];
  },
} satisfies CalculatorConfig;
