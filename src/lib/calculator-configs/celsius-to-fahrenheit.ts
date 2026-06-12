import type { CalculatorConfig } from "@/types/calculator-engine";
import { readNumber, resultField, roundTo } from "./helpers";

export const celsiusToFahrenheitConfig = {
  slug: "celsius-to-fahrenheit",
  title: "Celsius to Fahrenheit",
  description: "Convert Celsius temperatures to Fahrenheit.",
  inputs: [
    {
      name: "celsius",
      label: "Celsius",
      type: "number",
      required: true,
      min: -273.15,
      step: 0.1,
      unit: "C",
    },
  ],
  resultFields: [
    {
      name: "fahrenheit",
      label: "Fahrenheit",
      unit: "F",
      precision: 1,
    },
  ],
  calculate(values) {
    const celsius = readNumber(values, "celsius");

    return [
      resultField({
        name: "fahrenheit",
        label: "Fahrenheit",
        value: roundTo((celsius * 9) / 5 + 32, 1),
        unit: "F",
        precision: 1,
      }),
    ];
  },
} satisfies CalculatorConfig;
