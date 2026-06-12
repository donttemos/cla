import { describe, expect, it } from "vitest";
import { calculate } from "./index";
import { getCalculatorConfigBySlug } from "../calculator-configs";

describe("configuration-driven calculator engine", () => {
  it("calculates exact age from an age calculator config", async () => {
    await expect(
      calculate(getRequiredConfig("age-calculator"), {
        birthdate: "2000-01-15",
        asOfDate: "2026-05-31",
      }),
    ).resolves.toMatchObject({
      ok: true,
      values: {
        years: 26,
        months: 4,
        days: 16,
      },
    });
  });

  it("calculates BMI from a BMI calculator config", async () => {
    await expect(
      calculate(getRequiredConfig("bmi-calculator"), {
        weightKg: 70,
        heightCm: 175,
      }),
    ).resolves.toMatchObject({
      ok: true,
      values: {
        bmi: 22.86,
        category: "Normal weight",
      },
    });
  });

  it("calculates loan payment and total interest from a loan calculator config", async () => {
    await expect(
      calculate(getRequiredConfig("loan-calculator"), {
        principal: 200000,
        annualInterestRate: 6,
        termYears: 30,
      }),
    ).resolves.toMatchObject({
      ok: true,
      values: {
        monthlyPayment: 1199.1,
        totalInterest: 231676.38,
      },
    });
  });

  it("calculates percentage from a percentage calculator config", async () => {
    await expect(
      calculate(getRequiredConfig("percentage-calculator"), {
        part: 25,
        whole: 200,
      }),
    ).resolves.toMatchObject({
      ok: true,
      values: {
        percentage: 12.5,
      },
    });
  });

  it("returns validation errors for missing percentage values in the default mode", async () => {
    await expect(
      calculate(getRequiredConfig("percentage-calculator"), {
        mode: "percentOf",
      }),
    ).resolves.toMatchObject({
      ok: false,
      errors: [
        {
          field: "firstValue",
          message: expect.stringMatching(/required/i),
        },
        {
          field: "secondValue",
          message: expect.stringMatching(/required/i),
        },
      ],
    });
  });

  it("calculates zero-interest loans", async () => {
    await expect(
      calculate(getRequiredConfig("loan-calculator"), {
        principal: 12000,
        annualInterestRate: 0,
        termYears: 1,
      }),
    ).resolves.toMatchObject({
      ok: true,
      values: {
        monthlyPayment: 1000,
        totalInterest: 0,
      },
    });
  });

  it("rejects impossible calendar dates", async () => {
    await expect(
      calculate(getRequiredConfig("age-calculator"), {
        birthdate: "2026-02-31",
        asOfDate: "2026-05-31",
      }),
    ).resolves.toMatchObject({
      ok: false,
      errors: [
        {
          field: "birthdate",
          message: expect.stringMatching(/valid date/i),
        },
      ],
    });
  });

  it("converts Celsius to Fahrenheit from a conversion config", async () => {
    await expect(
      calculate(getRequiredConfig("celsius-to-fahrenheit"), {
        celsius: 100,
      }),
    ).resolves.toMatchObject({
      ok: true,
      values: {
        fahrenheit: 212,
      },
    });
  });

  it("returns validation errors instead of calculating with invalid input", async () => {
    await expect(
      calculate(getRequiredConfig("bmi-calculator"), {
        weightKg: 70,
        heightCm: 0,
      }),
    ).resolves.toMatchObject({
      ok: false,
      errors: [
        {
          field: "heightCm",
          message: expect.stringMatching(/greater than 0/i),
        },
      ],
    });
  });

  it("projects compound growth with recurring contributions", async () => {
    await expect(
      calculate(getRequiredConfig("compound-interest-calculator"), {
        principal: 1000,
        monthlyContribution: 100,
        annualInterestRate: 12,
        years: 1,
        compoundFrequency: "12",
      }),
    ).resolves.toMatchObject({
      ok: true,
      values: {
        finalBalance: 2395.08,
        totalContributions: 2200,
        interestEarned: 195.08,
      },
    });
  });

  it("converts hourly pay into annual, monthly, and paycheck amounts", async () => {
    await expect(
      calculate(getRequiredConfig("salary-calculator"), {
        hourlyRate: 30,
        hoursPerWeek: 40,
        weeksPerYear: 52,
        payFrequency: "biweekly",
      }),
    ).resolves.toMatchObject({
      ok: true,
      values: {
        annualSalary: 62400,
        monthlyPay: 5200,
        paycheckAmount: 2400,
        dailyEquivalent: 240,
      },
    });
  });

  it("calculates BMR from body metrics", async () => {
    await expect(
      calculate(getRequiredConfig("bmr-calculator"), {
        age: 30,
        sex: "male",
        weightKg: 70,
        heightCm: 175,
      }),
    ).resolves.toMatchObject({
      ok: true,
      values: {
        bmr: 1649,
      },
    });
  });

  it("averages a list of values while ignoring empty optional fields", async () => {
    await expect(
      calculate(getRequiredConfig("average-calculator"), {
        value1: 10,
        value2: 20,
        value3: 30,
      }),
    ).resolves.toMatchObject({
      ok: true,
      values: {
        average: 20,
        sum: 60,
        count: 3,
      },
    });
  });

  it("calculates Claude API token costs from model rates and volume", async () => {
    await expect(
      calculate(getRequiredConfig("claude-token-calculator"), {
        model: "claude-sonnet-4-6",
        promptTokens: 20000,
        completionTokens: 4000,
        requestsPerMonth: 1000,
        processingMode: "standard",
        inferenceRegion: "global",
      }),
    ).resolves.toMatchObject({
      ok: true,
      values: {
        costPerRequest: 0.12,
        monthlyCost: 120,
        monthlyInputTokens: 20000000,
        monthlyOutputTokens: 4000000,
      },
    });
  });
});

function getRequiredConfig(slug: string) {
  const config = getCalculatorConfigBySlug(slug);

  if (!config) {
    throw new Error(`Missing calculator config for ${slug}`);
  }

  return config;
}
