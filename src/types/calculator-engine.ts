export type CalculatorInputValue = string | number | boolean;

export type CalculatorInputValues = Partial<Record<string, CalculatorInputValue>>;

export type CalculatorInputType = "number" | "date" | "select" | "text" | "textarea";

export interface CalculatorInputOption {
  readonly label: string;
  readonly value: string | number;
}

interface BaseCalculatorInput {
  readonly name: string;
  readonly label: string;
  readonly type: CalculatorInputType;
  readonly required?: boolean;
  readonly description?: string;
  readonly placeholder?: string;
  readonly options?: readonly CalculatorInputOption[];
}

export interface NumberCalculatorInput extends BaseCalculatorInput {
  readonly type: "number";
  readonly min?: number;
  readonly exclusiveMin?: number;
  readonly max?: number;
  readonly step?: number;
  readonly unit?: string;
  readonly defaultValue?: number;
}

export interface DateCalculatorInput extends BaseCalculatorInput {
  readonly type: "date";
  readonly min?: string;
  readonly max?: string;
  readonly defaultValue?: string | "today";
}

export interface SelectCalculatorInput extends BaseCalculatorInput {
  readonly type: "select";
  readonly options: readonly CalculatorInputOption[];
  readonly defaultValue?: string;
}

export interface TextCalculatorInput extends BaseCalculatorInput {
  readonly type: "text";
  readonly maxLength?: number;
  readonly defaultValue?: string;
}

export interface TextareaCalculatorInput extends BaseCalculatorInput {
  readonly type: "textarea";
  readonly maxLength?: number;
  readonly rows?: number;
  readonly defaultValue?: string;
}

export type CalculatorInputDefinition =
  | NumberCalculatorInput
  | DateCalculatorInput
  | SelectCalculatorInput
  | TextCalculatorInput
  | TextareaCalculatorInput;

export interface CalculatorResultField {
  readonly name: string;
  readonly label: string;
  readonly value: string | number;
  readonly unit?: string;
  readonly prefix?: string;
  readonly suffix?: string;
  readonly precision?: number;
  readonly description?: string;
}

export interface CalculatorValidationError {
  readonly inputName: string;
  readonly field: string;
  readonly message: string;
}

export interface CalculatorSuccessResult {
  readonly ok: true;
  readonly slug: string;
  readonly values: Readonly<Record<string, string | number>>;
  readonly fields: readonly CalculatorResultField[];
}

export interface CalculatorFailureResult {
  readonly ok: false;
  readonly slug: string;
  readonly fields: readonly [];
  readonly errors: readonly CalculatorValidationError[];
}

export type CalculatorEngineResult =
  | CalculatorSuccessResult
  | CalculatorFailureResult;

export type CalculatorInput = CalculatorInputDefinition;
export type CalculatorResult = CalculatorEngineResult;

export interface CalculatorConfig {
  readonly slug: string;
  readonly title: string;
  readonly description?: string;
  readonly inputs: readonly CalculatorInputDefinition[];
  readonly resultFields: readonly Omit<CalculatorResultField, "value">[];
  readonly validate?: (
    input: Readonly<CalculatorInputValues>,
  ) => readonly CalculatorValidationError[];
  readonly calculate: (
    input: Readonly<CalculatorInputValues>,
  ) => readonly CalculatorResultField[] | Promise<readonly CalculatorResultField[]>;
}
