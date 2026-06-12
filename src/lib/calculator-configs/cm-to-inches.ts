import type { CalculatorConfig } from "@/types/calculator-engine";
import { readNumber, resultField, roundTo } from "./helpers";

export const cmToInchesConfig = {
  slug: "cm-to-inches",
  title: "CM to Inches",
  description: "Convert centimeters to inches for measurements and dimensions.",
  inputs: [
    {
      name: "centimeters",
      label: "Centimeters",
      type: "number",
      required: true,
      min: 0,
      step: 0.01,
      unit: "cm",
      defaultValue: 1,
    },
  ],
  resultFields: [
    {
      name: "inches",
      label: "Inches",
      unit: "in",
      precision: 4,
    },
  ],
  calculate(values) {
    const centimeters = readNumber(values, "centimeters");

    return [
      resultField({
        name: "inches",
        label: "Inches",
        value: roundTo(centimeters / 2.54, 4),
        unit: "in",
        precision: 4,
      }),
    ];
  },
} satisfies CalculatorConfig;
