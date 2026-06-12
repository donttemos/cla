import type { CalculatorConfig } from "@/types/calculator-engine";
import { ageCalculatorConfig } from "./age-calculator";
import { aiPricingCalculatorConfig } from "./ai-pricing-calculator";
import { averageCalculatorConfig } from "./average-calculator";
import { bmiCalculatorConfig } from "./bmi-calculator";
import { bmrCalculatorConfig } from "./bmr-calculator";
import { bodyFatCalculatorConfig } from "./body-fat-calculator";
import { celsiusToFahrenheitConfig } from "./celsius-to-fahrenheit";
import { claudeTokenCalculatorConfig } from "./claude-token-calculator";
import { cmToInchesConfig } from "./cm-to-inches";
import { compoundInterestCalculatorConfig } from "./compound-interest-calculator";
import { loanCalculatorConfig } from "./loan-calculator";
import { percentageCalculatorConfig } from "./percentage-calculator";
import { mortgageCalculatorConfig } from "./mortgage-calculator";
import { carLoanCalculatorConfig } from "./car-loan-calculator";
import { roiCalculatorConfig } from "./roi-calculator";
import { interestCalculatorConfig } from "./interest-calculator";
import { caloriesCalculatorConfig } from "./calories-calculator";
import { cacCalculatorConfig } from "./cac-calculator";
import { daysBetweenDatesConfig } from "./days-between-dates";
import { fractionCalculatorConfig } from "./fraction-calculator";
import { gpuTrainingCostCalculatorConfig } from "./gpu-training-cost-calculator";
import { profitCalculatorConfig } from "./profit-calculator";
import { breakEvenCalculatorConfig } from "./break-even-calculator";
import { gpaCalculatorConfig } from "./gpa-calculator";
import { investmentCalculatorConfig } from "./investment-calculator";
import { kgToLbsConfig } from "./kg-to-lbs";
import { llmCostCalculatorConfig } from "./llm-cost-calculator";
import { ltvCalculatorConfig } from "./ltv-calculator";
import { milesToKmConfig } from "./miles-to-km";
import { openaiCostCalculatorConfig } from "./openai-cost-calculator";
import { retirementCalculatorConfig } from "./retirement-calculator";
import { revenueCalculatorConfig } from "./revenue-calculator";
import { salaryCalculatorConfig } from "./salary-calculator";
import { taxCalculatorConfig } from "./tax-calculator";
import { timeDurationCalculatorConfig } from "./time-duration-calculator";
import { waterIntakeCalculatorConfig } from "./water-intake-calculator";
import { weekCalculatorConfig } from "./week-calculator";

export const calculatorConfigs = [
  ageCalculatorConfig,
  aiPricingCalculatorConfig,
  averageCalculatorConfig,
  bmiCalculatorConfig,
  bmrCalculatorConfig,
  bodyFatCalculatorConfig,
  loanCalculatorConfig,
  percentageCalculatorConfig,
  claudeTokenCalculatorConfig,
  cmToInchesConfig,
  celsiusToFahrenheitConfig,
  compoundInterestCalculatorConfig,
  mortgageCalculatorConfig,
  carLoanCalculatorConfig,
  roiCalculatorConfig,
  interestCalculatorConfig,
  caloriesCalculatorConfig,
  cacCalculatorConfig,
  daysBetweenDatesConfig,
  fractionCalculatorConfig,
  gpuTrainingCostCalculatorConfig,
  profitCalculatorConfig,
  breakEvenCalculatorConfig,
  gpaCalculatorConfig,
  investmentCalculatorConfig,
  kgToLbsConfig,
  llmCostCalculatorConfig,
  ltvCalculatorConfig,
  milesToKmConfig,
  openaiCostCalculatorConfig,
  retirementCalculatorConfig,
  revenueCalculatorConfig,
  salaryCalculatorConfig,
  taxCalculatorConfig,
  timeDurationCalculatorConfig,
  waterIntakeCalculatorConfig,
  weekCalculatorConfig,
] satisfies readonly CalculatorConfig[];

const calculatorConfigBySlug = new Map<string, CalculatorConfig>(
  calculatorConfigs.map((config) => [config.slug, config]),
);

export function getCalculatorConfigBySlug(
  slug: string,
): CalculatorConfig | undefined {
  return calculatorConfigBySlug.get(slug);
}

export {
  ageCalculatorConfig,
  aiPricingCalculatorConfig,
  averageCalculatorConfig,
  bmiCalculatorConfig,
  bmrCalculatorConfig,
  bodyFatCalculatorConfig,
  celsiusToFahrenheitConfig,
  claudeTokenCalculatorConfig,
  cmToInchesConfig,
  compoundInterestCalculatorConfig,
  loanCalculatorConfig,
  percentageCalculatorConfig,
  mortgageCalculatorConfig,
  carLoanCalculatorConfig,
  roiCalculatorConfig,
  interestCalculatorConfig,
  caloriesCalculatorConfig,
  cacCalculatorConfig,
  daysBetweenDatesConfig,
  fractionCalculatorConfig,
  gpuTrainingCostCalculatorConfig,
  profitCalculatorConfig,
  breakEvenCalculatorConfig,
  gpaCalculatorConfig,
  investmentCalculatorConfig,
  kgToLbsConfig,
  llmCostCalculatorConfig,
  ltvCalculatorConfig,
  milesToKmConfig,
  openaiCostCalculatorConfig,
  retirementCalculatorConfig,
  revenueCalculatorConfig,
  salaryCalculatorConfig,
  taxCalculatorConfig,
  timeDurationCalculatorConfig,
  waterIntakeCalculatorConfig,
  weekCalculatorConfig,
};
