import type { CalculatorConfig } from "@/types/calculator-engine";
import { readNumber, resultField, roundTo } from "./helpers";

export const bmiCalculatorConfig = {
  slug: "bmi-calculator",
  title: "BMI Calculator",
  description: "Calculate body mass index from height and weight.",
  inputs: [
    {
      name: "heightCm",
      label: "Height",
      type: "number",
      required: true,
      exclusiveMin: 0,
      max: 300,
      step: 0.1,
      unit: "cm",
    },
    {
      name: "weightKg",
      label: "Weight",
      type: "number",
      required: true,
      min: 1,
      max: 700,
      step: 0.1,
      unit: "kg",
    },
  ],
  resultFields: [
    {
      name: "bmi",
      label: "BMI",
      precision: 1,
      description: "Body mass index using metric height and weight.",
    },
    {
      name: "category",
      label: "Category",
      description: "Standard adult BMI category.",
    },
  ],
  calculate(values) {
    const heightMeters = readNumber(values, "heightCm") / 100;
    const weightKg = readNumber(values, "weightKg");
    const bmi = roundTo(weightKg / heightMeters ** 2, 2);

    return [
      resultField({ name: "bmi", label: "BMI", value: bmi, precision: 2 }),
      resultField({ name: "category", label: "Category", value: getBmiCategory(bmi) }),
    ];
  },
} satisfies CalculatorConfig;

function getBmiCategory(bmi: number): string {
  if (bmi < 18.5) {
    return "Underweight";
  }

  if (bmi < 25) {
    return "Normal weight";
  }

  if (bmi < 30) {
    return "Overweight";
  }

  return "Obesity";
}
