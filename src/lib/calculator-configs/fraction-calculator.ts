import type { CalculatorConfig } from "@/types/calculator-engine";
import {
  readNumber,
  readString,
  resultField,
  roundTo,
  validationError,
} from "./helpers";

export const fractionCalculatorConfig = {
  slug: "fraction-calculator",
  title: "Fraction Calculator",
  description: "Add, subtract, multiply, divide, and simplify fractions.",
  inputs: [
    {
      name: "numeratorA",
      label: "First Numerator",
      type: "number",
      required: true,
      step: 1,
      defaultValue: 1,
    },
    {
      name: "denominatorA",
      label: "First Denominator",
      type: "number",
      required: true,
      step: 1,
      defaultValue: 2,
    },
    {
      name: "operation",
      label: "Operation",
      type: "select",
      required: true,
      defaultValue: "add",
      options: [
        { label: "Add", value: "add" },
        { label: "Subtract", value: "subtract" },
        { label: "Multiply", value: "multiply" },
        { label: "Divide", value: "divide" },
      ],
    },
    {
      name: "numeratorB",
      label: "Second Numerator",
      type: "number",
      required: true,
      step: 1,
      defaultValue: 1,
    },
    {
      name: "denominatorB",
      label: "Second Denominator",
      type: "number",
      required: true,
      step: 1,
      defaultValue: 4,
    },
  ],
  validate(values) {
    const errors = [];
    const integerInputs = [
      "numeratorA",
      "denominatorA",
      "numeratorB",
      "denominatorB",
    ] as const;

    for (const inputName of integerInputs) {
      const value = values[inputName];

      if (typeof value === "number" && !Number.isInteger(value)) {
        errors.push(validationError(inputName, "Fraction values must be whole numbers."));
      }
    }

    if (values.denominatorA === 0) {
      errors.push(validationError("denominatorA", "First denominator cannot be zero."));
    }

    if (values.denominatorB === 0) {
      errors.push(validationError("denominatorB", "Second denominator cannot be zero."));
    }

    if (values.operation === "divide" && values.numeratorB === 0) {
      errors.push(validationError("numeratorB", "Cannot divide by a zero fraction."));
    }

    return errors;
  },
  resultFields: [
    {
      name: "fraction",
      label: "Result",
      description: "Simplified fraction result.",
    },
    {
      name: "decimal",
      label: "Decimal",
      precision: 6,
      description: "Decimal form of the simplified fraction.",
    },
  ],
  calculate(values) {
    const result = calculateFraction(
      {
        numerator: readNumber(values, "numeratorA"),
        denominator: readNumber(values, "denominatorA"),
      },
      readString(values, "operation"),
      {
        numerator: readNumber(values, "numeratorB"),
        denominator: readNumber(values, "denominatorB"),
      },
    );
    const simplified = simplifyFraction(result);

    return [
      resultField({
        name: "fraction",
        label: "Result",
        value: formatFraction(simplified),
      }),
      resultField({
        name: "decimal",
        label: "Decimal",
        value: roundTo(simplified.numerator / simplified.denominator, 6),
        precision: 6,
      }),
    ];
  },
} satisfies CalculatorConfig;

interface Fraction {
  readonly numerator: number;
  readonly denominator: number;
}

function calculateFraction(
  left: Fraction,
  operation: string,
  right: Fraction,
): Fraction {
  switch (operation) {
    case "subtract":
      return {
        numerator: left.numerator * right.denominator - right.numerator * left.denominator,
        denominator: left.denominator * right.denominator,
      };
    case "multiply":
      return {
        numerator: left.numerator * right.numerator,
        denominator: left.denominator * right.denominator,
      };
    case "divide":
      return {
        numerator: left.numerator * right.denominator,
        denominator: left.denominator * right.numerator,
      };
    case "add":
    default:
      return {
        numerator: left.numerator * right.denominator + right.numerator * left.denominator,
        denominator: left.denominator * right.denominator,
      };
  }
}

function simplifyFraction(fraction: Fraction): Fraction {
  const sign = fraction.denominator < 0 ? -1 : 1;
  const numerator = fraction.numerator * sign;
  const denominator = fraction.denominator * sign;
  const divisor = greatestCommonDivisor(Math.abs(numerator), Math.abs(denominator));

  return {
    numerator: numerator / divisor,
    denominator: denominator / divisor,
  };
}

function greatestCommonDivisor(left: number, right: number): number {
  let a = left;
  let b = right;

  while (b !== 0) {
    const remainder = a % b;
    a = b;
    b = remainder;
  }

  return a || 1;
}

function formatFraction(fraction: Fraction): string {
  if (fraction.denominator === 1) {
    return String(fraction.numerator);
  }

  return `${fraction.numerator}/${fraction.denominator}`;
}
