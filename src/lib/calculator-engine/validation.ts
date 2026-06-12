import type {
  CalculatorInputDefinition,
  CalculatorInputValue,
  CalculatorInputValues,
  CalculatorValidationError,
} from "@/types/calculator-engine";

export function validateCalculatorInputs(
  inputs: readonly CalculatorInputDefinition[],
  values: Readonly<CalculatorInputValues>,
): readonly CalculatorValidationError[] {
  return inputs.flatMap((input) => validateInput(input, values[input.name]));
}

function validateInput(
  input: CalculatorInputDefinition,
  value: CalculatorInputValue | undefined,
): readonly CalculatorValidationError[] {
  if (value === undefined || value === "") {
    return input.required === false
      ? []
      : [validationError(input.name, `${input.label} is required.`)];
  }

  switch (input.type) {
    case "number":
      return validateNumberInput(input, value);
    case "date":
      return validateDateInput(input, value);
    case "select":
      return validateSelectInput(input, value);
    case "text":
    case "textarea":
      return [];
  }
}

function validateNumberInput(
  input: Extract<CalculatorInputDefinition, { readonly type: "number" }>,
  value: CalculatorInputValue,
): readonly CalculatorValidationError[] {
  if (typeof value !== "number" || !Number.isFinite(value)) {
    return [validationError(input.name, `${input.label} must be a valid number.`)];
  }

  const errors: CalculatorValidationError[] = [];

  if (typeof input.exclusiveMin === "number" && value <= input.exclusiveMin) {
    errors.push(validationError(input.name, `${input.label} must be greater than 0.`));
    return errors;
  }

  if (typeof input.min === "number" && value < input.min) {
    errors.push(validationError(input.name, `${input.label} must be at least ${input.min}.`));
  }

  if (typeof input.max === "number" && value > input.max) {
    errors.push(validationError(input.name, `${input.label} must be no more than ${input.max}.`));
  }

  return errors;
}

function validateDateInput(
  input: Extract<CalculatorInputDefinition, { readonly type: "date" }>,
  value: CalculatorInputValue,
): readonly CalculatorValidationError[] {
  if (typeof value !== "string" || !isValidDate(value)) {
    return [validationError(input.name, `${input.label} must be a valid date.`)];
  }

  const errors: CalculatorValidationError[] = [];
  const timestamp = Date.parse(value);

  if (input.min && timestamp < Date.parse(input.min)) {
    errors.push(validationError(input.name, `${input.label} must be on or after ${input.min}.`));
  }

  if (input.max && timestamp > Date.parse(input.max)) {
    errors.push(validationError(input.name, `${input.label} must be on or before ${input.max}.`));
  }

  return errors;
}

function validateSelectInput(
  input: Extract<CalculatorInputDefinition, { readonly type: "select" }>,
  value: CalculatorInputValue,
): readonly CalculatorValidationError[] {
  if (typeof value !== "string") {
    return [validationError(input.name, `${input.label} must be a valid option.`)];
  }

  return input.options.some((option) => option.value === value)
    ? []
    : [validationError(input.name, `${input.label} must be a valid option.`)];
}

function isValidDate(value: string): boolean {
  const pattern = /^\d{4}-\d{2}-\d{2}$/;

  if (!pattern.test(value)) {
    return false;
  }

  const timestamp = Date.parse(`${value}T00:00:00.000Z`);

  if (!Number.isFinite(timestamp)) {
    return false;
  }

  return new Date(timestamp).toISOString().slice(0, 10) === value;
}

function validationError(inputName: string, message: string): CalculatorValidationError {
  return { inputName, field: inputName, message };
}
