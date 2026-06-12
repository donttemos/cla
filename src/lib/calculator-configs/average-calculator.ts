import type { CalculatorConfig } from "@/types/calculator-engine";
import { readNumber, resultField, roundTo, validationError } from "./helpers";

export const averageCalculatorConfig = {
  slug: "average-calculator",
  title: "Average Calculator",
  description: "Find the arithmetic mean of a list of numbers.",
  inputs: [
    {
      name: "value1",
      label: "Value 1",
      type: "number",
      required: true,
      step: 0.01,
      defaultValue: 10,
    },
    {
      name: "value2",
      label: "Value 2",
      type: "number",
      required: true,
      step: 0.01,
      defaultValue: 20,
    },
    {
      name: "value3",
      label: "Value 3",
      type: "number",
      required: false,
      step: 0.01,
    },
    {
      name: "value4",
      label: "Value 4",
      type: "number",
      required: false,
      step: 0.01,
    },
    {
      name: "value5",
      label: "Value 5",
      type: "number",
      required: false,
      step: 0.01,
    },
  ],
  validate(values) {
    const count = getAverageValues(values).length;

    return count > 0
      ? []
      : [validationError("value1", "Enter at least one value to average.")];
  },
  resultFields: [
    {
      name: "average",
      label: "Average",
      precision: 2,
      description: "Arithmetic mean of the entered values.",
    },
    {
      name: "sum",
      label: "Sum",
      precision: 2,
      description: "Total of the entered values.",
    },
    {
      name: "count",
      label: "Count",
      precision: 0,
      description: "Number of values included.",
    },
  ],
  calculate(values) {
    const numbers = getAverageValues(values);
    const sum = numbers.reduce((total, value) => total + value, 0);
    const average = sum / numbers.length;

    return [
      resultField({
        name: "average",
        label: "Average",
        value: roundTo(average, 2),
        precision: 2,
      }),
      resultField({
        name: "sum",
        label: "Sum",
        value: roundTo(sum, 2),
        precision: 2,
      }),
      resultField({
        name: "count",
        label: "Count",
        value: numbers.length,
        precision: 0,
      }),
    ];
  },
} satisfies CalculatorConfig;

function getAverageValues(values: Parameters<typeof readNumber>[0]): readonly number[] {
  return ["value1", "value2", "value3", "value4", "value5"]
    .map((inputName) => values[inputName])
    .filter((value): value is number => typeof value === "number");
}
