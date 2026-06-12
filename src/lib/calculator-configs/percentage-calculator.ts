import type { CalculatorConfig } from "@/types/calculator-engine";
import {
  readNumber,
  readString,
  resultField,
  roundTo,
  validationError,
} from "./helpers";

export const percentageCalculatorConfig = {
  slug: "percentage-calculator",
  title: "Percentage Calculator",
  description: "Solve percentage, percent-of, and percentage-change questions.",
  inputs: [
    {
      name: "mode",
      label: "Calculation type",
      type: "select",
      required: false,
      defaultValue: "percentOf",
      options: [
        { label: "What is X% of Y?", value: "percentOf" },
        { label: "X is what percent of Y?", value: "partOfWhole" },
        { label: "Percentage change from X to Y", value: "change" },
      ],
    },
    {
      name: "firstValue",
      label: "First value",
      type: "number",
      required: false,
      step: 0.01,
    },
    {
      name: "part",
      label: "Part",
      type: "number",
      required: false,
      step: 0.01,
    },
    {
      name: "secondValue",
      label: "Second value",
      type: "number",
      required: false,
      step: 0.01,
    },
    {
      name: "whole",
      label: "Whole",
      type: "number",
      required: false,
      step: 0.01,
    },
  ],
  validate(values) {
    const mode = getPercentageMode(values);
    const errors = [];

    if (mode === "percentOf") {
      if (values.firstValue === undefined || values.firstValue === "") {
        errors.push(validationError("firstValue", "First value is required."));
      }
      if (values.secondValue === undefined || values.secondValue === "") {
        errors.push(validationError("secondValue", "Second value is required."));
      }
    }

    if (mode === "partOfWhole") {
      if (values.part === undefined || values.part === "") {
        errors.push(validationError("part", "Part is required."));
      }
      if (values.whole === undefined || values.whole === "") {
        errors.push(validationError("whole", "Whole is required."));
      }
    }

    if (mode === "change") {
      if (values.firstValue === undefined || values.firstValue === "") {
        errors.push(validationError("firstValue", "First value is required."));
      }
      if (values.secondValue === undefined || values.secondValue === "") {
        errors.push(validationError("secondValue", "Second value is required."));
      }
    }

    return errors;
  },
  resultFields: [
    {
      name: "percentage",
      label: "Percentage",
      unit: "%",
      precision: 2,
    },
  ],
  calculate(values) {
    const mode = getPercentageMode(values);
    const firstValue = readFlexibleNumber(values, "firstValue", "part");
    const secondValue = readFlexibleNumber(values, "secondValue", "whole");

    return [
      resultField({
        name: "percentage",
        label: "Percentage",
        value: roundTo(calculatePercentage(mode, firstValue, secondValue), 2),
        unit: "%",
        precision: 2,
      }),
    ];
  },
} satisfies CalculatorConfig;

function getPercentageMode(values: Parameters<typeof readNumber>[0]): string {
  if (typeof values.mode === "string") {
    return readString(values, "mode");
  }

  if (typeof values.part === "number" || typeof values.whole === "number") {
    return "partOfWhole";
  }

  return "percentOf";
}

function calculatePercentage(
  mode: string,
  firstValue: number,
  secondValue: number,
): number {
  switch (mode) {
    case "percentOf":
      return (firstValue / 100) * secondValue;
    case "partOfWhole":
      return secondValue === 0 ? 0 : (firstValue / secondValue) * 100;
    case "change":
      return firstValue === 0 ? 0 : ((secondValue - firstValue) / firstValue) * 100;
    default:
      return 0;
  }
}

function readFlexibleNumber(
  values: Parameters<typeof readNumber>[0],
  primaryName: string,
  fallbackName: string,
): number {
  const primaryValue = values[primaryName];
  const fallbackValue = values[fallbackName];

  if (typeof primaryValue === "number") {
    return readNumber(values, primaryName);
  }

  if (typeof fallbackValue === "number") {
    return readNumber(values, fallbackName);
  }

  throw new Error(`${primaryName} or ${fallbackName} must be a number after validation.`);
}
