import type { CalculatorConfig } from "@/types/calculator-engine";
import { readString, resultField } from "./helpers";

export const weekCalculatorConfig = {
  slug: "week-calculator",
  title: "Week Calculator",
  description: "Find week numbers, date ranges, and week offsets.",
  inputs: [
    {
      name: "date",
      label: "Date",
      type: "date",
      required: true,
      defaultValue: "today",
    },
  ],
  resultFields: [
    {
      name: "isoWeek",
      label: "ISO Week",
      precision: 0,
      description: "ISO-8601 week number for the selected date.",
    },
    {
      name: "isoWeekYear",
      label: "Week Year",
      precision: 0,
      description: "ISO week-numbering year.",
    },
    {
      name: "weekStart",
      label: "Week Starts",
      description: "Monday at the start of the ISO week.",
    },
    {
      name: "weekEnd",
      label: "Week Ends",
      description: "Sunday at the end of the ISO week.",
    },
  ],
  calculate(values) {
    const date = parseDateOnly(readString(values, "date"));
    const isoWeekInfo = getIsoWeekInfo(date);
    const weekStart = addDays(date, 1 - getIsoDay(date));
    const weekEnd = addDays(weekStart, 6);

    return [
      resultField({
        name: "isoWeek",
        label: "ISO Week",
        value: isoWeekInfo.week,
        precision: 0,
      }),
      resultField({
        name: "isoWeekYear",
        label: "Week Year",
        value: isoWeekInfo.year,
        precision: 0,
      }),
      resultField({
        name: "weekStart",
        label: "Week Starts",
        value: formatDateOnly(weekStart),
      }),
      resultField({
        name: "weekEnd",
        label: "Week Ends",
        value: formatDateOnly(weekEnd),
      }),
    ];
  },
} satisfies CalculatorConfig;

function getIsoWeekInfo(date: Date): { readonly week: number; readonly year: number } {
  const target = new Date(date.getTime());
  target.setUTCDate(target.getUTCDate() + 4 - getIsoDay(target));
  const yearStart = new Date(Date.UTC(target.getUTCFullYear(), 0, 1));
  const week = Math.ceil(((target.getTime() - yearStart.getTime()) / 86400000 + 1) / 7);

  return { week, year: target.getUTCFullYear() };
}

function getIsoDay(date: Date): number {
  const day = date.getUTCDay();
  return day === 0 ? 7 : day;
}

function addDays(date: Date, days: number): Date {
  const nextDate = new Date(date.getTime());
  nextDate.setUTCDate(nextDate.getUTCDate() + days);
  return nextDate;
}

function parseDateOnly(value: string): Date {
  return new Date(`${value}T00:00:00.000Z`);
}

function formatDateOnly(date: Date): string {
  return date.toISOString().slice(0, 10);
}
