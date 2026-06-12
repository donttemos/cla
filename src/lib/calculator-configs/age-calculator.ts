import type { CalculatorConfig } from "@/types/calculator-engine";
import { readString, resultField } from "./helpers";

export const ageCalculatorConfig = {
  slug: "age-calculator",
  title: "Age Calculator",
  description: "Calculate exact age in years, months, and days.",
  inputs: [
    {
      name: "birthdate",
      label: "Birthdate",
      type: "date",
      required: true,
      max: "9999-12-31",
    },
    {
      name: "asOfDate",
      label: "Age on",
      type: "date",
      required: true,
      defaultValue: "today",
    },
  ],
  resultFields: [
    {
      name: "years",
      label: "Years",
      description: "Completed years between the birthdate and selected date.",
    },
    {
      name: "months",
      label: "Months",
      description: "Remaining completed months after years.",
    },
    {
      name: "days",
      label: "Days",
      description: "Remaining days after years and months.",
    },
  ],
  calculate(values) {
    const birthdate = parseDateOnly(readString(values, "birthdate"));
    const asOfDate = parseDateOnly(readString(values, "asOfDate"));
    const age = getCalendarAge(birthdate, asOfDate);

    return [
      resultField({ name: "years", label: "Years", value: age.years }),
      resultField({ name: "months", label: "Months", value: age.months }),
      resultField({ name: "days", label: "Days", value: age.days }),
    ];
  },
} satisfies CalculatorConfig;

function getCalendarAge(
  birthdate: Date,
  asOfDate: Date,
): { readonly years: number; readonly months: number; readonly days: number } {
  if (asOfDate < birthdate) {
    return { years: 0, months: 0, days: 0 };
  }

  let years = asOfDate.getUTCFullYear() - birthdate.getUTCFullYear();
  let months = asOfDate.getUTCMonth() - birthdate.getUTCMonth();
  let days = asOfDate.getUTCDate() - birthdate.getUTCDate();

  if (days < 0) {
    months -= 1;
    days += daysInMonth(asOfDate.getUTCFullYear(), asOfDate.getUTCMonth());
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  return { years, months, days };
}

function parseDateOnly(value: string): Date {
  return new Date(`${value}T00:00:00.000Z`);
}

function daysInMonth(year: number, monthIndex: number): number {
  return new Date(Date.UTC(year, monthIndex, 0)).getUTCDate();
}
