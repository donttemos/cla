import { describe, expect, it } from "vitest";
import {
  getCalculatorBySlugAndLocale,
  getCategoryBySlugAndLocale,
} from "./content";

describe("localized content translations", () => {
  it("returns Simplified Chinese category and calculator content", () => {
    expect(getCategoryBySlugAndLocale("finance", "zh-CN")?.name).toBe("财务");
    const calculator = getCalculatorBySlugAndLocale("loan-calculator", "zh-CN");

    expect(calculator?.name).toBe("贷款计算器");
    expect(calculator?.whatIs).toContain("贷款计算器用于估算固定还款贷款的每月还款额和总利息");
    expect(calculator?.faq[0]?.question).toBe("贷款计算器是免费的吗？");
  });

  it("returns Traditional Chinese category and calculator content", () => {
    expect(getCategoryBySlugAndLocale("finance", "zh-TW")?.name).toBe("財務");
    const calculator = getCalculatorBySlugAndLocale("loan-calculator", "zh-TW");

    expect(calculator?.name).toBe("貸款計算器");
    expect(calculator?.whatIs).toContain("貸款計算器是一款免費的財務工具");
    expect(calculator?.faq[0]?.question).toBe("貸款計算器是免費的嗎？");
  });

  it("localizes generic calculator detail fallbacks for Spanish", () => {
    const calculator = getCalculatorBySlugAndLocale("average-calculator", "es");

    expect(calculator?.name).toBe("Calculadora de promedio");
    expect(calculator?.whatIs).toContain("es una calculadora gratuita de matematicas");
    expect(calculator?.howToSteps[0]).toBe(
      "Introduce los valores requeridos en los campos de la calculadora.",
    );
    expect(calculator?.faq[0]?.question).toBe("¿Calculadora de promedio es gratis?");
  });
});
