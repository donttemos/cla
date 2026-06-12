import type { CalculatorConfig } from "@/types/calculator-engine";
import { readNumber, readString, resultField } from "./helpers";

export const bmrCalculatorConfig = {
  slug: "bmr-calculator",
  title: "BMR Calculator",
  description: "Estimate basal metabolic rate from age, height, weight, and sex.",
  inputs: [
    {
      name: "age",
      label: "Age",
      type: "number",
      required: true,
      min: 15,
      max: 120,
      step: 1,
      unit: "years",
      defaultValue: 30,
    },
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
      name: "weightKg",
      label: "Weight",
      type: "number",
      required: true,
      min: 30,
      max: 300,
      step: 0.1,
      unit: "kg",
      defaultValue: 70,
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
  ],
  resultFields: [
    {
      name: "bmr",
      label: "BMR",
      unit: "calories/day",
      precision: 0,
      description: "Estimated resting energy burn using the Mifflin-St Jeor equation.",
    },
  ],
  calculate(values) {
    const age = readNumber(values, "age");
    const weightKg = readNumber(values, "weightKg");
    const heightCm = readNumber(values, "heightCm");
    const sex = readString(values, "sex");
    const sexAdjustment = sex === "female" ? -161 : 5;
    const bmr = 10 * weightKg + 6.25 * heightCm - 5 * age + sexAdjustment;

    return [
      resultField({
        name: "bmr",
        label: "BMR",
        value: Math.round(bmr),
        unit: "calories/day",
        precision: 0,
      }),
    ];
  },
} satisfies CalculatorConfig;
