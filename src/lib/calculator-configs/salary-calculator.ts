import type { CalculatorConfig } from "@/types/calculator-engine";
import { readNumber, readString, resultField, roundTo } from "./helpers";

const payPeriodsPerYear: Record<string, number> = {
  weekly: 52,
  biweekly: 26,
  semimonthly: 24,
  monthly: 12,
};

export const salaryCalculatorConfig = {
  slug: "salary-calculator",
  title: "Salary Calculator",
  description: "Convert salary, hourly pay, and pay periods for income planning.",
  inputs: [
    {
      name: "hourlyRate",
      label: "Hourly Rate",
      type: "number",
      required: true,
      min: 0,
      step: 0.5,
      unit: "USD/hr",
      defaultValue: 30,
    },
    {
      name: "hoursPerWeek",
      label: "Hours per Week",
      type: "number",
      required: true,
      min: 0,
      max: 168,
      step: 0.5,
      unit: "hours",
      defaultValue: 40,
    },
    {
      name: "weeksPerYear",
      label: "Paid Weeks per Year",
      type: "number",
      required: true,
      min: 1,
      max: 52,
      step: 1,
      unit: "weeks",
      defaultValue: 52,
    },
    {
      name: "payFrequency",
      label: "Pay Frequency",
      type: "select",
      required: true,
      defaultValue: "biweekly",
      options: [
        { label: "Weekly", value: "weekly" },
        { label: "Biweekly", value: "biweekly" },
        { label: "Semimonthly", value: "semimonthly" },
        { label: "Monthly", value: "monthly" },
      ],
    },
  ],
  resultFields: [
    {
      name: "annualSalary",
      label: "Annual Salary",
      unit: "USD",
      precision: 2,
    },
    {
      name: "monthlyPay",
      label: "Monthly Pay",
      unit: "USD",
      precision: 2,
    },
    {
      name: "paycheckAmount",
      label: "Paycheck Amount",
      unit: "USD",
      precision: 2,
    },
    {
      name: "dailyEquivalent",
      label: "Daily Equivalent",
      unit: "USD",
      precision: 2,
    },
  ],
  calculate(values) {
    const hourlyRate = readNumber(values, "hourlyRate");
    const hoursPerWeek = readNumber(values, "hoursPerWeek");
    const weeksPerYear = readNumber(values, "weeksPerYear");
    const payFrequency = readString(values, "payFrequency");

    const annualSalary = hourlyRate * hoursPerWeek * weeksPerYear;
    const monthlyPay = annualSalary / 12;
    const paycheckAmount = annualSalary / (payPeriodsPerYear[payFrequency] ?? 26);
    const dailyEquivalent = annualSalary / (weeksPerYear * 5);

    return [
      resultField({
        name: "annualSalary",
        label: "Annual Salary",
        value: roundTo(annualSalary, 2),
        unit: "USD",
        precision: 2,
      }),
      resultField({
        name: "monthlyPay",
        label: "Monthly Pay",
        value: roundTo(monthlyPay, 2),
        unit: "USD",
        precision: 2,
      }),
      resultField({
        name: "paycheckAmount",
        label: "Paycheck Amount",
        value: roundTo(paycheckAmount, 2),
        unit: "USD",
        precision: 2,
      }),
      resultField({
        name: "dailyEquivalent",
        label: "Daily Equivalent",
        value: roundTo(dailyEquivalent, 2),
        unit: "USD",
        precision: 2,
      }),
    ];
  },
} satisfies CalculatorConfig;
