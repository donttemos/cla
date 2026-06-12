import type { CalculatorConfig } from "@/types/calculator-engine";
import { resultField } from "./helpers";

export const daysBetweenDatesConfig = {
  slug: "days-between-dates",
  title: "Days Between Dates",
  description: "Count the number of days between two calendar dates.",
  inputs: [
    {
      name: "startDate",
      label: "Start Date",
      type: "date",
      required: true,
      defaultValue: "today",
    },
    {
      name: "endDate",
      label: "End Date",
      type: "date",
      required: true,
      // Default to 30 days from now approximately, but 'today' is a safe fallback
      defaultValue: "today",
    },
    {
      name: "includeEndDay",
      label: "Include end day in calculation?",
      type: "select",
      required: true,
      defaultValue: "0",
      options: [
        { label: "No (Standard difference)", value: "0" },
        { label: "Yes (Add 1 day)", value: "1" },
      ],
    },
  ],
  resultFields: [
    {
      name: "days",
      label: "Total Days",
      precision: 0,
    },
    {
      name: "weeks",
      label: "Approximate Weeks",
      precision: 1,
    },
  ],
  calculate(values) {
    const startDateStr = values["startDate"] as string;
    const endDateStr = values["endDate"] as string;
    const includeEndDay = values["includeEndDay"] === "1";

    if (!startDateStr || !endDateStr) {
      return [
        resultField({ name: "days", label: "Total Days", value: 0, precision: 0 }),
        resultField({ name: "weeks", label: "Weeks", value: 0, precision: 1 }),
      ];
    }

    const start = new Date(startDateStr);
    const end = new Date(endDateStr);
    
    // Calculate difference in milliseconds
    const diffTime = end.getTime() - start.getTime();
    
    // Convert to days
    let diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    if (includeEndDay && diffDays >= 0) {
      diffDays += 1;
    } else if (includeEndDay && diffDays < 0) {
      diffDays -= 1;
    }

    const weeks = diffDays / 7;

    return [
      resultField({
        name: "days",
        label: "Total Days",
        value: diffDays,
        precision: 0,
      }),
      resultField({
        name: "weeks",
        label: "Approximate Weeks",
        value: Math.round(weeks * 10) / 10,
        precision: 1,
      }),
    ];
  },
} satisfies CalculatorConfig;
