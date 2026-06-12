import { describe, expect, it } from "vitest";
import {
  buildInitialValues,
  coerceCalculatorValues,
  validateCalculatorValues,
} from "./field-values";

const inputs = [
  {
    name: "principal",
    label: "Loan amount",
    type: "number",
    required: true,
    min: 100,
    max: 1000000,
  },
  {
    name: "startDate",
    label: "Start date",
    type: "date",
    required: true,
  },
  {
    name: "frequency",
    label: "Frequency",
    type: "select",
    required: true,
    options: [
      { label: "Monthly", value: "monthly" },
      { label: "Yearly", value: "yearly" },
    ],
  },
] as const;

describe("calculator field values", () => {
  it("builds initial values from defaults and select options", () => {
    expect(buildInitialValues(inputs)).toEqual({
      principal: "",
      startDate: "",
      frequency: "monthly",
    });
  });

  it("resolves today as a dynamic date default", () => {
    const today = new Date().toISOString().slice(0, 10);

    expect(
      buildInitialValues([
        {
          name: "asOfDate",
          label: "Age on",
          type: "date",
          defaultValue: "today",
        },
      ]),
    ).toEqual({
      asOfDate: today,
    });
  });

  it("validates required, number bounds, and select options", () => {
    expect(
      validateCalculatorValues(inputs, {
        principal: "50",
        startDate: "",
        frequency: "weekly",
      }),
    ).toEqual({
      principal: "Loan amount must be at least 100.",
      startDate: "Start date is required.",
      frequency: "Choose a valid Frequency.",
    });
  });

  it("coerces number fields and preserves date/select values", () => {
    expect(
      coerceCalculatorValues(inputs, {
        principal: "1250.50",
        startDate: "2026-05-31",
        frequency: "yearly",
      }),
    ).toEqual({
      principal: 1250.5,
      startDate: "2026-05-31",
      frequency: "yearly",
    });
  });

  it("preserves blank optional number fields as missing values", () => {
    expect(
      coerceCalculatorValues(
        [
          {
            name: "discount",
            label: "Discount",
            type: "number",
            required: false,
          },
        ],
        {
          discount: "",
        },
      ),
    ).toEqual({});
  });
});
