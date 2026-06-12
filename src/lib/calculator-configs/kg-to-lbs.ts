import type { CalculatorConfig } from "@/types/calculator-engine";
import { readNumber, resultField, roundTo } from "./helpers";

export const kgToLbsConfig = {
  slug: "kg-to-lbs",
  title: "KG to LBS",
  description: "Convert kilograms to pounds instantly.",
  inputs: [
    {
      name: "kilograms",
      label: "Kilograms",
      type: "number",
      required: true,
      min: 0,
      step: 0.01,
      unit: "kg",
      defaultValue: 1,
    },
  ],
  resultFields: [
    {
      name: "pounds",
      label: "Pounds",
      unit: "lb",
      precision: 4,
    },
  ],
  calculate(values) {
    const kilograms = readNumber(values, "kilograms");

    return [
      resultField({
        name: "pounds",
        label: "Pounds",
        value: roundTo(kilograms * 2.2046226218, 4),
        unit: "lb",
        precision: 4,
      }),
    ];
  },
} satisfies CalculatorConfig;
