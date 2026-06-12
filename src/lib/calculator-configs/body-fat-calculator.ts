import type { CalculatorConfig } from "@/types/calculator-engine";
import {
  readNumber,
  readString,
  resultField,
  roundTo,
  validationError,
} from "./helpers";

export const bodyFatCalculatorConfig = {
  slug: "body-fat-calculator",
  title: "Body Fat Calculator",
  description: "Estimate body fat percentage using common body measurements.",
  inputs: [
    {
      name: "sex",
      label: "Sex",
      type: "select",
      required: true,
      defaultValue: "male",
      options: [
        { label: "Male", value: "male" },
        { label: "Female", value: "female" },
      ],
    },
    {
      name: "heightCm",
      label: "Height",
      type: "number",
      required: true,
      min: 100,
      max: 250,
      step: 0.1,
      unit: "cm",
      defaultValue: 175,
    },
    {
      name: "waistCm",
      label: "Waist",
      type: "number",
      required: true,
      min: 30,
      max: 200,
      step: 0.1,
      unit: "cm",
      defaultValue: 85,
    },
    {
      name: "neckCm",
      label: "Neck",
      type: "number",
      required: true,
      min: 20,
      max: 80,
      step: 0.1,
      unit: "cm",
      defaultValue: 38,
    },
    {
      name: "hipCm",
      label: "Hip",
      type: "number",
      required: false,
      min: 30,
      max: 220,
      step: 0.1,
      unit: "cm",
      defaultValue: 95,
      description: "Required for female estimates.",
    },
  ],
  validate(values) {
    const errors = [];
    const sex = typeof values.sex === "string" ? values.sex : "male";
    const waistCm = typeof values.waistCm === "number" ? values.waistCm : 0;
    const neckCm = typeof values.neckCm === "number" ? values.neckCm : 0;
    const hipCm = typeof values.hipCm === "number" ? values.hipCm : undefined;

    if (sex === "male" && waistCm <= neckCm) {
      errors.push(validationError("waistCm", "Waist must be greater than neck for this estimate."));
    }

    if (sex === "female") {
      if (hipCm === undefined) {
        errors.push(validationError("hipCm", "Hip measurement is required for female estimates."));
      } else if (waistCm + hipCm <= neckCm) {
        errors.push(validationError("waistCm", "Waist plus hip must be greater than neck for this estimate."));
      }
    }

    return errors;
  },
  resultFields: [
    {
      name: "bodyFatPercentage",
      label: "Body Fat",
      unit: "%",
      precision: 1,
      description: "Measurement-based estimate using the U.S. Navy method.",
    },
    {
      name: "category",
      label: "Category",
      description: "General adult body fat category.",
    },
  ],
  calculate(values) {
    const sex = readString(values, "sex");
    const heightCm = readNumber(values, "heightCm");
    const waistCm = readNumber(values, "waistCm");
    const neckCm = readNumber(values, "neckCm");
    const bodyFatPercentage =
      sex === "female"
        ? calculateFemaleBodyFat(heightCm, waistCm, neckCm, readNumber(values, "hipCm"))
        : calculateMaleBodyFat(heightCm, waistCm, neckCm);
    const roundedBodyFatPercentage = roundTo(bodyFatPercentage, 1);

    return [
      resultField({
        name: "bodyFatPercentage",
        label: "Body Fat",
        value: roundedBodyFatPercentage,
        unit: "%",
        precision: 1,
      }),
      resultField({
        name: "category",
        label: "Category",
        value: getBodyFatCategory(sex, roundedBodyFatPercentage),
      }),
    ];
  },
} satisfies CalculatorConfig;

function calculateMaleBodyFat(
  heightCm: number,
  waistCm: number,
  neckCm: number,
): number {
  const heightInches = cmToInches(heightCm);
  const waistInches = cmToInches(waistCm);
  const neckInches = cmToInches(neckCm);

  return 495 / (1.0324 - 0.19077 * log10(waistInches - neckInches) + 0.15456 * log10(heightInches)) - 450;
}

function calculateFemaleBodyFat(
  heightCm: number,
  waistCm: number,
  neckCm: number,
  hipCm: number,
): number {
  const heightInches = cmToInches(heightCm);
  const waistInches = cmToInches(waistCm);
  const neckInches = cmToInches(neckCm);
  const hipInches = cmToInches(hipCm);

  return 495 / (1.29579 - 0.35004 * log10(waistInches + hipInches - neckInches) + 0.221 * log10(heightInches)) - 450;
}

function getBodyFatCategory(sex: string, bodyFatPercentage: number): string {
  if (sex === "female") {
    if (bodyFatPercentage < 14) {
      return "Essential fat";
    }

    if (bodyFatPercentage < 21) {
      return "Athletic";
    }

    if (bodyFatPercentage < 25) {
      return "Fitness";
    }

    if (bodyFatPercentage < 32) {
      return "Average";
    }

    return "Above average";
  }

  if (bodyFatPercentage < 6) {
    return "Essential fat";
  }

  if (bodyFatPercentage < 14) {
    return "Athletic";
  }

  if (bodyFatPercentage < 18) {
    return "Fitness";
  }

  if (bodyFatPercentage < 25) {
    return "Average";
  }

  return "Above average";
}

function log10(value: number): number {
  return Math.log(value) / Math.LN10;
}

function cmToInches(value: number): number {
  return value / 2.54;
}
