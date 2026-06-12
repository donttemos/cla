"use client";

import { FormEvent, useId, useMemo, useState } from "react";
import { getCalculatorConfigBySlug } from "@/lib/calculator-configs";
import { calculate } from "@/lib/calculator-engine";
import { DEFAULT_LOCALE, formatNumber, getDictionary, type Locale } from "@/lib/i18n";
import type { CoreDictionary } from "@/lib/i18n/dictionaries";
import {
  buildInitialValues,
  coerceCalculatorValues,
  validateCalculatorValues,
} from "./field-values";
import type {
  DynamicCalculatorConfig,
  DynamicCalculatorInput,
  DynamicCalculatorResultField,
  FieldErrors,
  FieldValues,
} from "./types";

export type DynamicCalculatorProps = {
  config?: DynamicCalculatorConfig;
  locale?: Locale;
  slug?: string;
};

function getInputLabel(input: DynamicCalculatorInput) {
  return input.label ?? input.name;
}

function getInputHint(input: DynamicCalculatorInput, dictionary: CoreDictionary["calculatorWidget"]) {
  if (input.description) {
    return input.description;
  }

  if (input.type === "number") {
    const bounds = [
      input.min !== undefined ? `${dictionary.min} ${input.min}` : null,
      input.max !== undefined ? `${dictionary.max} ${input.max}` : null,
      input.unit ? `${dictionary.unit} ${input.unit}` : null,
    ].filter(Boolean);

    return bounds.length > 0 ? bounds.join(" / ") : undefined;
  }

  return undefined;
}

function formatResultValue(field: DynamicCalculatorResultField, locale: Locale) {
  const value = field.value;

  if (typeof value === "number") {
    return formatNumber(value, locale, {
      maximumFractionDigits: field.precision ?? 4,
      minimumFractionDigits: field.precision,
    });
  }

  return value;
}

function FieldControl({
  baseId,
  input,
  value,
  error,
  onChange,
  dictionary,
}: {
  baseId: string;
  input: DynamicCalculatorInput;
  value: string;
  error?: string;
  onChange: (value: string) => void;
  dictionary: CoreDictionary["calculatorWidget"];
}) {
  const inputId = `${baseId}-${input.name}`;
  const hint = getInputHint(input, dictionary);
  const hintId = hint ? `${inputId}-hint` : undefined;
  const errorId = error ? `${inputId}-error` : undefined;
  const describedBy = [errorId, hintId].filter(Boolean).join(" ") || undefined;
  const label = getInputLabel(input);
  const fieldClassName =
    "min-h-11 w-full rounded-md border bg-white px-3 py-2 text-base text-slate-950 shadow-sm transition focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200";

  return (
    <div className="space-y-2">
      <label className="block text-sm font-semibold text-slate-800" htmlFor={inputId}>
        {label}
        {input.required ?? true ? (
          <>
            <span aria-hidden="true" className="ml-1 text-red-700">
              *
            </span>
            <span className="sr-only"> required</span>
          </>
        ) : null}
      </label>

      {input.type === "select" ? (
        <select
          aria-describedby={describedBy}
          aria-invalid={Boolean(error)}
          className={`${fieldClassName} ${error ? "border-red-500" : "border-slate-300"}`}
          id={inputId}
          name={input.name}
          required={input.required ?? true}
          value={value}
          onChange={(event) => onChange(event.target.value)}
        >
          {input.options?.map((option) => (
            <option key={String(option.value)} value={String(option.value)}>
              {option.label}
            </option>
          ))}
        </select>
      ) : input.type === "textarea" ? (
        <textarea
          aria-describedby={describedBy}
          aria-invalid={Boolean(error)}
          className={`${fieldClassName} min-h-[120px] resize-y ${error ? "border-red-500" : "border-slate-300"}`}
          id={inputId}
          name={input.name}
          required={input.required ?? true}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={input.placeholder}
          maxLength={input.maxLength}
          rows={input.rows ?? 4}
        />
      ) : (
        <input
          aria-describedby={describedBy}
          aria-invalid={Boolean(error)}
          className={`${fieldClassName} ${error ? "border-red-500" : "border-slate-300"}`}
          id={inputId}
          max={input.type === "number" || input.type === "date" ? input.max : undefined}
          min={input.type === "number" || input.type === "date" ? input.min : undefined}
          name={input.name}
          required={input.required ?? true}
          step={input.type === "number" ? (input.step ?? "any") : undefined}
          type={input.type === "date" ? "date" : input.type === "text" ? "text" : "number"}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={input.placeholder}
          maxLength={input.type === "text" ? input.maxLength : undefined}
        />
      )}

      {hint ? (
        <p className="text-sm leading-6 text-slate-500" id={hintId}>
          {hint}
        </p>
      ) : null}

      {error ? (
        <p className="text-sm font-semibold text-red-700" id={errorId} role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function DynamicCalculator({
  config: providedConfig,
  locale = DEFAULT_LOCALE,
  slug,
}: DynamicCalculatorProps) {
  const dictionary = getDictionary(locale).calculatorWidget;
  const config = providedConfig ?? (slug ? getCalculatorConfigBySlug(slug) : undefined);
  const baseId = useId();
  const [values, setValues] = useState<FieldValues>(() =>
    config ? buildInitialValues(config.inputs) : {},
  );
  const [errors, setErrors] = useState<FieldErrors>({});
  const [resultFields, setResultFields] = useState<readonly DynamicCalculatorResultField[]>([]);
  const [calculationError, setCalculationError] = useState<string | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const errorEntries = Object.entries(errors);
  const knownInputNames = useMemo(
    () => new Set(config?.inputs.map((input) => input.name) ?? []),
    [config],
  );

  if (!config) {
    return (
      <section className="cv-surface p-6">
        <p className="text-sm font-bold uppercase tracking-wide text-sky-800">
          {dictionary.title}
        </p>
        <h2 className="mt-2 text-2xl text-slate-950">{dictionary.configurationUnavailable}</h2>
        <p className="mt-3 text-sm leading-6 text-slate-600">
          {dictionary.notRegisteredYet}
        </p>
      </section>
    );
  }

  const activeConfig = config;

  function updateField(name: string, nextValue: string) {
    setValues((current) => ({ ...current, [name]: nextValue }));
    setErrors((current) => {
      if (!current[name]) {
        return current;
      }

      return Object.fromEntries(
        Object.entries(current).filter(([fieldName]) => fieldName !== name),
      );
    });
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors = validateCalculatorValues(activeConfig.inputs, values);
    setErrors(nextErrors);
    setCalculationError(null);

    if (Object.keys(nextErrors).length > 0) {
      setResultFields([]);
      return;
    }

    setIsCalculating(true);
    try {
      const calculationResult = await calculate(
        activeConfig,
        coerceCalculatorValues(activeConfig.inputs, values),
      );

      if (calculationResult.ok) {
        setResultFields(calculationResult.fields);
        return;
      }

      setResultFields([]);
      const fieldErrors: FieldErrors = {};
      const formErrors: string[] = [];

      for (const error of calculationResult.errors) {
        if (knownInputNames.has(error.inputName)) {
          fieldErrors[error.inputName] = error.message;
        } else {
          formErrors.push(error.message);
        }
      }

      setErrors(fieldErrors);
      setCalculationError(
        formErrors[0] ?? dictionary.error,
      );
    } catch (err) {
      setCalculationError(err instanceof Error ? err.message : dictionary.error);
    } finally {
      setIsCalculating(false);
    }
  }

  return (
    <section className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.8fr)]">
      <form
        aria-describedby={errorEntries.length > 0 ? `${baseId}-errors` : undefined}
        className="cv-surface p-6"
        noValidate
        onSubmit={handleSubmit}
      >
        <div className="border-b border-slate-200 pb-5">
          <p className="text-sm font-bold uppercase tracking-wide text-sky-800">
            {dictionary.title}
          </p>
          <h2 className="mt-2 text-2xl text-slate-950">{config.title}</h2>
          {config.description ? (
            <p className="mt-2 text-sm leading-6 text-slate-600">{config.description}</p>
          ) : null}
        </div>

        {errorEntries.length > 0 ? (
          <div
            className="mt-5 rounded-md border border-red-200 bg-red-50 p-4"
            id={`${baseId}-errors`}
            role="alert"
          >
            <h3 className="text-sm font-bold text-red-800">{dictionary.pleaseFix}</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-red-700">
              {errorEntries.map(([name, message]) => (
                <li key={name}>
                  <a className="underline underline-offset-2" href={`#${baseId}-${name}`}>
                    {message}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {config.inputs.map((input) => (
            <FieldControl
              key={input.name}
              baseId={baseId}
              error={errors[input.name]}
              input={input}
              value={values[input.name] ?? ""}
              onChange={(value) => updateField(input.name, value)}
              dictionary={dictionary}
            />
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <button
            className="min-h-11 rounded-md bg-sky-900 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-sky-800 focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-sky-500 disabled:opacity-50"
            type="submit"
            disabled={isCalculating}
          >
            {isCalculating ? dictionary.calculating : dictionary.calculate}
          </button>
          <button
            className="min-h-11 rounded-md border border-slate-300 bg-white px-5 py-2.5 text-sm font-bold text-slate-700 transition hover:border-sky-300 hover:text-sky-900 focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-sky-500 disabled:opacity-50"
            type="button"
            disabled={isCalculating}
            onClick={() => {
              setValues(buildInitialValues(config.inputs));
              setErrors({});
              setResultFields([]);
              setCalculationError(null);
            }}
          >
            {dictionary.reset}
          </button>
        </div>
      </form>

      <aside
        aria-live="polite"
        className="cv-surface p-6"
        role="status"
      >
        <p className="text-sm font-bold uppercase tracking-wide text-sky-800">
          {dictionary.resultCard}
        </p>
        <h2 className="mt-2 text-2xl text-slate-950">{dictionary.results}</h2>

        {calculationError ? (
          <div className="mt-5 rounded-md border border-red-200 bg-red-50 p-4 text-sm font-semibold text-red-700">
            {calculationError}
          </div>
        ) : null}

        {!calculationError && resultFields.length === 0 ? (
          <p className="mt-5 text-sm leading-7 text-slate-600">
            {dictionary.enterValues}
          </p>
        ) : null}

        {resultFields.length > 0 ? (
          <dl className="mt-5 divide-y divide-slate-200 rounded-md border border-slate-200 bg-slate-50">
            {resultFields.map((field) => (
              <div
                className="grid gap-1 px-4 py-3 sm:grid-cols-[1fr_auto] sm:items-baseline"
                key={field.name}
              >
                <dt className="text-sm font-semibold text-slate-600">{field.label}</dt>
                <dd className="text-lg font-bold text-slate-950">
                  {formatResultValue(field, locale)}
                  {field.unit ? <span className="ml-1 text-sm text-slate-500">{field.unit}</span> : null}
                </dd>
                {field.description ? (
                  <dd className="sm:col-span-2 text-sm leading-6 text-slate-500">
                    {field.description}
                  </dd>
                ) : null}
              </div>
            ))}
          </dl>
        ) : null}
      </aside>
    </section>
  );
}
