import type {
  CalculatorInputValues,
  CalculatorResultField,
  CalculatorValidationError,
} from "@/types/calculator-engine";

export function readNumber(
  values: Readonly<CalculatorInputValues>,
  inputName: string,
): number {
  const value = values[inputName];

  if (typeof value !== "number") {
    throw new Error(`${inputName} must be a number after validation.`);
  }

  return value;
}

export function readString(
  values: Readonly<CalculatorInputValues>,
  inputName: string,
): string {
  const value = values[inputName];

  if (typeof value !== "string") {
    throw new Error(`${inputName} must be a string after validation.`);
  }

  return value;
}

export function resultField(
  field: CalculatorResultField,
): CalculatorResultField {
  return field;
}

export function validationError(
  inputName: string,
  message: string,
): CalculatorValidationError {
  return { inputName, field: inputName, message };
}

export function roundTo(value: number, digits: number): number {
  const factor = 10 ** digits;
  return Math.round((value + Number.EPSILON) * factor) / factor;
}
