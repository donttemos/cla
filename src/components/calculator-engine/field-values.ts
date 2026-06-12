import type {
  CalculatorPayload,
  DynamicCalculatorInput,
  FieldErrors,
  FieldValues,
} from "./types";

function getInputLabel(input: DynamicCalculatorInput) {
  return input.label ?? input.name;
}

function getInputDefault(input: DynamicCalculatorInput) {
  if (input.defaultValue !== undefined && input.defaultValue !== null) {
    if (input.type === "date" && input.defaultValue === "today") {
      return new Date().toISOString().slice(0, 10);
    }

    return String(input.defaultValue);
  }

  if (input.type === "select") {
    return input.options?.[0]?.value ? String(input.options[0].value) : "";
  }

  return "";
}

function isRequired(input: DynamicCalculatorInput) {
  return input.required ?? true;
}

function isValidSelectValue(input: DynamicCalculatorInput, value: string) {
  return input.options?.some((option) => String(option.value) === value) ?? true;
}

export function buildInitialValues(
  inputs: readonly DynamicCalculatorInput[],
): FieldValues {
  return Object.fromEntries(
    inputs.map((input) => [input.name, getInputDefault(input)]),
  );
}

export function validateCalculatorValues(
  inputs: readonly DynamicCalculatorInput[],
  values: FieldValues,
): FieldErrors {
  const errors: FieldErrors = {};

  for (const input of inputs) {
    const label = getInputLabel(input);
    const rawValue = values[input.name] ?? "";
    const trimmedValue = rawValue.trim();

    if (isRequired(input) && trimmedValue.length === 0) {
      errors[input.name] = `${label} is required.`;
      continue;
    }

    if (trimmedValue.length === 0) {
      continue;
    }

    if (input.type === "number") {
      const numberValue = Number(trimmedValue);

      if (!Number.isFinite(numberValue)) {
        errors[input.name] = `${label} must be a valid number.`;
        continue;
      }

      if (input.exclusiveMin !== undefined && numberValue <= input.exclusiveMin) {
        errors[input.name] = `${label} must be greater than ${input.exclusiveMin}.`;
        continue;
      }

      if (input.min !== undefined && numberValue < input.min) {
        errors[input.name] = `${label} must be at least ${input.min}.`;
        continue;
      }

      if (input.max !== undefined && numberValue > input.max) {
        errors[input.name] = `${label} must be no more than ${input.max}.`;
      }
    }

    if (input.type === "select" && !isValidSelectValue(input, trimmedValue)) {
      errors[input.name] = `Choose a valid ${label}.`;
    }
  }

  return errors;
}

export function coerceCalculatorValues(
  inputs: readonly DynamicCalculatorInput[],
  values: FieldValues,
): CalculatorPayload {
  const payload: CalculatorPayload = {};

  for (const input of inputs) {
    const rawValue = values[input.name] ?? "";

    if (input.type === "number") {
      if (rawValue === "") {
        if (input.required ?? true) {
          payload[input.name] = Number(rawValue);
        }

        continue;
      }

      payload[input.name] = Number(rawValue);
      continue;
    }

    if (rawValue !== "") {
      payload[input.name] = rawValue;
    }
  }

  return payload;
}
