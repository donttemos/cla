import type { CalculatorConfig } from "@/types/calculator-engine";
import { readNumber, resultField, roundTo } from "./helpers";

export const milesToKmConfig = {
  slug: "miles-to-km",
  title: "Miles to KM",
  description: "Convert miles to kilometers for distance planning.",
  inputs: [
    {
      name: "miles",
      label: "Miles",
      type: "number",
      required: true,
      min: 0,
      step: 0.01,
      unit: "mi",
      defaultValue: 1,
    },
  ],
  resultFields: [
    {
      name: "kilometers",
      label: "Kilometers",
      unit: "km",
      precision: 4,
    },
  ],
  calculate(values) {
    const miles = readNumber(values, "miles");

    return [
      resultField({
        name: "kilometers",
        label: "Kilometers",
        value: roundTo(miles * 1.609344, 4),
        unit: "km",
        precision: 4,
      }),
    ];
  },
} satisfies CalculatorConfig;
