import type {
  CalculatorConfig,
  CalculatorEngineResult,
  CalculatorInputDefinition,
  CalculatorResultField,
} from "@/types/calculator-engine";

export type DynamicCalculatorConfig = CalculatorConfig;
export type DynamicCalculatorInput = CalculatorInputDefinition;
export type DynamicCalculatorResult = CalculatorEngineResult;
export type DynamicCalculatorResultField = CalculatorResultField;

export type FieldValues = Record<string, string>;
export type FieldErrors = Record<string, string>;
export type CalculatorPayload = Record<string, number | string>;
