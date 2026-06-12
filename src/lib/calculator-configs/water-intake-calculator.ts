import type { CalculatorConfig } from "@/types/calculator-engine";
import { readNumber, readString, resultField, roundTo } from "./helpers";

export const waterIntakeCalculatorConfig = {
  slug: "water-intake-calculator",
  title: "Water Intake Calculator",
  description: "Estimate daily water intake based on body weight and activity.",
  inputs: [
    {
      name: "weightKg",
      label: "Weight",
      type: "number",
      required: true,
      min: 20,
      max: 300,
      step: 0.1,
      unit: "kg",
      defaultValue: 70,
    },
    {
      name: "activityMinutes",
      label: "Activity",
      type: "number",
      required: true,
      min: 0,
      max: 480,
      step: 5,
      unit: "min/day",
      defaultValue: 30,
    },
    {
      name: "climate",
      label: "Climate",
      type: "select",
      required: true,
      defaultValue: "temperate",
      options: [
        { label: "Temperate", value: "temperate" },
        { label: "Hot or humid", value: "hot" },
      ],
    },
  ],
  resultFields: [
    {
      name: "liters",
      label: "Daily Water",
      unit: "L/day",
      precision: 2,
      description: "Estimated daily fluid target.",
    },
    {
      name: "cups",
      label: "Cups",
      unit: "cups/day",
      precision: 1,
      description: "Approximate 240 ml cups per day.",
    },
  ],
  calculate(values) {
    const weightKg = readNumber(values, "weightKg");
    const activityMinutes = readNumber(values, "activityMinutes");
    const climate = readString(values, "climate");
    const baseLiters = weightKg * 0.035;
    const activityLiters = (activityMinutes / 30) * 0.35;
    const climateLiters = climate === "hot" ? 0.5 : 0;
    const liters = roundTo(baseLiters + activityLiters + climateLiters, 2);

    return [
      resultField({
        name: "liters",
        label: "Daily Water",
        value: liters,
        unit: "L/day",
        precision: 2,
      }),
      resultField({
        name: "cups",
        label: "Cups",
        value: roundTo(liters / 0.24, 1),
        unit: "cups/day",
        precision: 1,
      }),
    ];
  },
} satisfies CalculatorConfig;
