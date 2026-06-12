import type { CalculatorConfig } from "@/types/calculator-engine";
import { readNumber, resultField, roundTo, validationError } from "./helpers";

export const aiPricingCalculatorConfig = {
  slug: "ai-pricing-calculator",
  title: "AI Pricing Calculator",
  description: "Plan AI product pricing from per-user costs, gross margin target, fees, and customer volume.",
  inputs: [
    {
      name: "modelCostPerUser",
      label: "Model cost per user",
      type: "number",
      required: true,
      min: 0,
      step: 0.01,
      unit: "USD",
      defaultValue: 4,
    },
    {
      name: "toolingCostPerUser",
      label: "Tooling cost per user",
      type: "number",
      required: true,
      min: 0,
      step: 0.01,
      unit: "USD",
      defaultValue: 1.5,
    },
    {
      name: "supportCostPerUser",
      label: "Support and infra cost per user",
      type: "number",
      required: true,
      min: 0,
      step: 0.01,
      unit: "USD",
      defaultValue: 2,
    },
    {
      name: "targetGrossMargin",
      label: "Target gross margin",
      type: "number",
      required: true,
      min: 0,
      max: 95,
      step: 1,
      unit: "%",
      defaultValue: 70,
    },
    {
      name: "paymentFeePercent",
      label: "Payment fee",
      type: "number",
      required: true,
      min: 0,
      max: 20,
      step: 0.1,
      unit: "%",
      defaultValue: 3,
    },
    {
      name: "activeUsers",
      label: "Active paying users",
      type: "number",
      required: true,
      min: 1,
      step: 10,
      defaultValue: 1000,
    },
  ],
  resultFields: [
    {
      name: "recommendedPrice",
      label: "Recommended price per user",
      unit: "USD",
      precision: 2,
    },
    {
      name: "monthlyRevenue",
      label: "Monthly revenue",
      unit: "USD",
      precision: 2,
    },
    {
      name: "monthlyCost",
      label: "Monthly cost",
      unit: "USD",
      precision: 2,
    },
    {
      name: "grossProfit",
      label: "Gross profit",
      unit: "USD",
      precision: 2,
    },
    {
      name: "effectiveGrossMargin",
      label: "Effective gross margin",
      unit: "%",
      precision: 2,
    },
  ],
  validate(values) {
    const targetGrossMargin = values["targetGrossMargin"];
    const paymentFeePercent = values["paymentFeePercent"];

    if (
      typeof targetGrossMargin !== "number" ||
      typeof paymentFeePercent !== "number"
    ) {
      return [];
    }

    const retainedShare = 1 - targetGrossMargin / 100 - paymentFeePercent / 100;

    return retainedShare > 0
      ? []
      : [
          validationError(
            "targetGrossMargin",
            "Target gross margin plus payment fee must be less than 100%.",
          ),
        ];
  },
  calculate(values) {
    const modelCostPerUser = readNumber(values, "modelCostPerUser");
    const toolingCostPerUser = readNumber(values, "toolingCostPerUser");
    const supportCostPerUser = readNumber(values, "supportCostPerUser");
    const targetGrossMargin = readNumber(values, "targetGrossMargin");
    const paymentFeePercent = readNumber(values, "paymentFeePercent");
    const activeUsers = readNumber(values, "activeUsers");

    const costPerUser = modelCostPerUser + toolingCostPerUser + supportCostPerUser;
    const retainedShare = 1 - targetGrossMargin / 100 - paymentFeePercent / 100;
    const recommendedPrice = costPerUser / retainedShare;
    const monthlyRevenue = recommendedPrice * activeUsers;
    const monthlyPaymentFees = monthlyRevenue * (paymentFeePercent / 100);
    const monthlyCost = costPerUser * activeUsers + monthlyPaymentFees;
    const grossProfit = monthlyRevenue - monthlyCost;
    const effectiveGrossMargin = monthlyRevenue > 0 ? (grossProfit / monthlyRevenue) * 100 : 0;

    return [
      resultField({
        name: "recommendedPrice",
        label: "Recommended price per user",
        value: roundTo(recommendedPrice, 2),
        unit: "USD",
        precision: 2,
      }),
      resultField({
        name: "monthlyRevenue",
        label: "Monthly revenue",
        value: roundTo(monthlyRevenue, 2),
        unit: "USD",
        precision: 2,
      }),
      resultField({
        name: "monthlyCost",
        label: "Monthly cost",
        value: roundTo(monthlyCost, 2),
        unit: "USD",
        precision: 2,
      }),
      resultField({
        name: "grossProfit",
        label: "Gross profit",
        value: roundTo(grossProfit, 2),
        unit: "USD",
        precision: 2,
      }),
      resultField({
        name: "effectiveGrossMargin",
        label: "Effective gross margin",
        value: roundTo(effectiveGrossMargin, 2),
        unit: "%",
        precision: 2,
      }),
    ];
  },
} satisfies CalculatorConfig;
