import type { CalculatorConfig } from "@/types/calculator-engine";
import { readNumber, resultField } from "./helpers";

export const caloriesCalculatorConfig = {
  slug: "calories-calculator",
  title: "Calories Calculator",
  description: "Estimate daily calorie needs for maintenance, loss, or gain goals.",
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
      name: "gender",
      label: "Gender",
      type: "select",
      required: true,
      defaultValue: "male",
      options: [
        { label: "Male", value: "male" },
        { label: "Female", value: "female" },
      ],
    },
    {
      name: "weight",
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
      name: "height",
      label: "Height",
      type: "number",
      required: true,
      min: 100,
      max: 250,
      step: 1,
      unit: "cm",
      defaultValue: 175,
    },
    {
      name: "activity",
      label: "Activity Level",
      type: "select",
      required: true,
      defaultValue: "1.375",
      options: [
        { label: "Sedentary (little or no exercise)", value: "1.2" },
        { label: "Lightly active (exercise 1-3 days/week)", value: "1.375" },
        { label: "Moderately active (exercise 3-5 days/week)", value: "1.55" },
        { label: "Very active (exercise 6-7 days/week)", value: "1.725" },
        { label: "Super active (very hard exercise/physical job)", value: "1.9" },
      ],
    },
  ],
  resultFields: [
    {
      name: "maintenance",
      label: "Maintenance (Maintain weight)",
      unit: "Calories/day",
      precision: 0,
    },
    {
      name: "mildWeightLoss",
      label: "Mild Weight Loss (0.25 kg/week)",
      unit: "Calories/day",
      precision: 0,
    },
    {
      name: "weightLoss",
      label: "Weight Loss (0.5 kg/week)",
      unit: "Calories/day",
      precision: 0,
    },
    {
      name: "weightGain",
      label: "Weight Gain (0.5 kg/week)",
      unit: "Calories/day",
      precision: 0,
    },
  ],
  calculate(values) {
    const age = readNumber(values, "age");
    const weight = readNumber(values, "weight");
    const height = readNumber(values, "height");
    const gender = values["gender"] === "female" ? "female" : "male";
    
    let activityMultiplier = 1.375; // Default lightly active
    if (typeof values["activity"] === "string") {
      activityMultiplier = Number(values["activity"]);
    }

    // Mifflin-St Jeor Equation
    let bmr = 10 * weight + 6.25 * height - 5 * age;
    bmr = gender === "male" ? bmr + 5 : bmr - 161;

    const maintenance = bmr * activityMultiplier;

    return [
      resultField({
        name: "maintenance",
        label: "Maintenance (Maintain weight)",
        value: Math.round(maintenance),
        unit: "Calories/day",
        precision: 0,
      }),
      resultField({
        name: "mildWeightLoss",
        label: "Mild Weight Loss (-0.25kg/w)",
        value: Math.round(maintenance - 250),
        unit: "Calories/day",
        precision: 0,
      }),
      resultField({
        name: "weightLoss",
        label: "Weight Loss (-0.5kg/w)",
        value: Math.round(maintenance - 500),
        unit: "Calories/day",
        precision: 0,
      }),
      resultField({
        name: "weightGain",
        label: "Weight Gain (+0.5kg/w)",
        value: Math.round(maintenance + 500),
        unit: "Calories/day",
        precision: 0,
      }),
    ];
  },
} satisfies CalculatorConfig;
