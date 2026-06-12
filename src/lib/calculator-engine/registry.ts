import type {
  CalculatorConfig,
  CalculatorEngineResult,
  CalculatorInputValues,
  CalculatorResultField,
} from "@/types/calculator-engine";
import {
  calculatorConfigs,
  getCalculatorConfigBySlug,
} from "@/lib/calculator-configs";
import { validateCalculatorInputs } from "./validation";

export function getAllCalculatorConfigs(): readonly CalculatorConfig[] {
  return calculatorConfigs;
}

export async function calculateBySlug(
  slug: string,
  values: Readonly<CalculatorInputValues>,
): Promise<CalculatorEngineResult> {
  const config = getCalculatorConfigBySlug(slug);

  if (!config) {
    return {
      ok: false,
      slug,
      fields: [],
      errors: [
        {
          inputName: "_form",
          field: "_form",
          message: "Calculator configuration was not found.",
        },
      ],
    };
  }

  return calculate(config, values);
}

export async function calculate(
  config: CalculatorConfig,
  values: Readonly<CalculatorInputValues>,
): Promise<CalculatorEngineResult> {
  const errors = validateCalculatorInputs(config.inputs, values);
  const customErrors = config.validate ? config.validate(values) : [];
  const allErrors = [...errors, ...customErrors];

  if (allErrors.length > 0) {
    return {
      ok: false,
      slug: config.slug,
      fields: [],
      errors: allErrors,
    };
  }

  const fields = await config.calculate(values);

  return {
    ok: true,
    slug: config.slug,
    values: resultFieldsToValues(fields),
    fields,
  };
}

function resultFieldsToValues(
  fields: readonly CalculatorResultField[],
): Readonly<Record<string, string | number>> {
  return Object.fromEntries(fields.map((field) => [field.name, field.value]));
}
