import type { CalculatorConfig } from "@/types/calculator-engine";
import { readNumber, resultField, validationError } from "./helpers";

export const timeDurationCalculatorConfig = {
  slug: "time-duration-calculator",
  title: "Time Duration Calculator",
  description: "Calculate elapsed time between two times or timestamps.",
  inputs: [
    {
      name: "startHour",
      label: "Start Hour",
      type: "number",
      required: true,
      min: 0,
      max: 23,
      step: 1,
      defaultValue: 9,
    },
    {
      name: "startMinute",
      label: "Start Minute",
      type: "number",
      required: true,
      min: 0,
      max: 59,
      step: 1,
      defaultValue: 0,
    },
    {
      name: "endHour",
      label: "End Hour",
      type: "number",
      required: true,
      min: 0,
      max: 23,
      step: 1,
      defaultValue: 17,
    },
    {
      name: "endMinute",
      label: "End Minute",
      type: "number",
      required: true,
      min: 0,
      max: 59,
      step: 1,
      defaultValue: 0,
    },
    {
      name: "endDayOffset",
      label: "End Day",
      type: "select",
      required: true,
      defaultValue: "0",
      options: [
        { label: "Same day", value: "0" },
        { label: "Next day", value: "1" },
      ],
    },
  ],
  validate(values) {
    const errors = [];
    const checkedInputs = ["startHour", "startMinute", "endHour", "endMinute"] as const;

    for (const inputName of checkedInputs) {
      const value = values[inputName];

      if (typeof value === "number" && !Number.isInteger(value)) {
        errors.push(validationError(inputName, "Time values must be whole numbers."));
      }
    }

    return errors;
  },
  resultFields: [
    {
      name: "hours",
      label: "Hours",
      precision: 2,
      description: "Elapsed duration in decimal hours.",
    },
    {
      name: "minutes",
      label: "Minutes",
      precision: 0,
      description: "Elapsed duration in total minutes.",
    },
    {
      name: "formatted",
      label: "Duration",
      description: "Elapsed duration as hours and minutes.",
    },
  ],
  calculate(values) {
    const startTotalMinutes =
      readNumber(values, "startHour") * 60 + readNumber(values, "startMinute");
    const endTotalMinutes =
      readNumber(values, "endHour") * 60 +
      readNumber(values, "endMinute") +
      getEndDayOffset(values) * 24 * 60;
    const durationMinutes = Math.max(0, endTotalMinutes - startTotalMinutes);
    const hours = Math.floor(durationMinutes / 60);
    const minutes = durationMinutes % 60;

    return [
      resultField({
        name: "hours",
        label: "Hours",
        value: Math.round((durationMinutes / 60) * 100) / 100,
        precision: 2,
      }),
      resultField({
        name: "minutes",
        label: "Minutes",
        value: durationMinutes,
        precision: 0,
      }),
      resultField({
        name: "formatted",
        label: "Duration",
        value: `${hours} hr ${minutes} min`,
      }),
    ];
  },
} satisfies CalculatorConfig;

function getEndDayOffset(values: Parameters<typeof readNumber>[0]): number {
  return values.endDayOffset === "1" ? 1 : 0;
}
