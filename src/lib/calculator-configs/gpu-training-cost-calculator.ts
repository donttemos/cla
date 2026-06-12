import type { CalculatorConfig } from "@/types/calculator-engine";
import { readNumber, readString, resultField, roundTo } from "./helpers";

const pricingMultipliers: Record<string, number> = {
  "on-demand": 1,
  reserved: 0.7,
  spot: 0.4,
};

export const gpuTrainingCostCalculatorConfig = {
  slug: "gpu-training-cost-calculator",
  title: "GPU Training Cost Calculator",
  description: "Estimate model training cost from GPU count, hourly rate, training duration, and pricing mode.",
  inputs: [
    {
      name: "gpuHourlyRate",
      label: "GPU hourly rate",
      type: "number",
      required: true,
      min: 0,
      step: 0.01,
      unit: "USD",
      defaultValue: 2.5,
    },
    {
      name: "gpuCount",
      label: "GPU count",
      type: "number",
      required: true,
      min: 1,
      step: 1,
      defaultValue: 8,
    },
    {
      name: "trainingHours",
      label: "Training duration",
      type: "number",
      required: true,
      min: 0,
      step: 0.5,
      unit: "hours",
      defaultValue: 72,
    },
    {
      name: "epochs",
      label: "Training epochs",
      type: "number",
      required: true,
      min: 1,
      step: 1,
      defaultValue: 3,
    },
    {
      name: "utilizationPercent",
      label: "Billable utilization",
      type: "number",
      required: true,
      min: 0,
      max: 100,
      step: 1,
      unit: "%",
      defaultValue: 90,
    },
    {
      name: "pricingMode",
      label: "Pricing mode",
      type: "select",
      required: true,
      defaultValue: "on-demand",
      options: [
        { label: "On-demand", value: "on-demand" },
        { label: "Reserved capacity", value: "reserved" },
        { label: "Spot or preemptible", value: "spot" },
      ],
    },
  ],
  resultFields: [
    {
      name: "totalTrainingCost",
      label: "Total training cost",
      unit: "USD",
      precision: 2,
    },
    {
      name: "billableGpuHours",
      label: "Billable GPU-hours",
      unit: "GPU-hours",
      precision: 1,
    },
    {
      name: "costPerEpoch",
      label: "Cost per epoch",
      unit: "USD",
      precision: 2,
    },
    {
      name: "effectiveHourlyRate",
      label: "Effective hourly rate",
      unit: "USD/GPU-hour",
      precision: 2,
    },
  ],
  calculate(values) {
    const gpuHourlyRate = readNumber(values, "gpuHourlyRate");
    const gpuCount = readNumber(values, "gpuCount");
    const trainingHours = readNumber(values, "trainingHours");
    const epochs = readNumber(values, "epochs");
    const utilizationPercent = readNumber(values, "utilizationPercent");
    const pricingMode = readString(values, "pricingMode");

    const pricingMultiplier = pricingMultipliers[pricingMode] ?? 1;
    const effectiveHourlyRate = gpuHourlyRate * pricingMultiplier;
    const billableGpuHours = gpuCount * trainingHours * (utilizationPercent / 100);
    const totalTrainingCost = billableGpuHours * effectiveHourlyRate;
    const costPerEpoch = totalTrainingCost / epochs;

    return [
      resultField({
        name: "totalTrainingCost",
        label: "Total training cost",
        value: roundTo(totalTrainingCost, 2),
        unit: "USD",
        precision: 2,
      }),
      resultField({
        name: "billableGpuHours",
        label: "Billable GPU-hours",
        value: roundTo(billableGpuHours, 1),
        unit: "GPU-hours",
        precision: 1,
      }),
      resultField({
        name: "costPerEpoch",
        label: "Cost per epoch",
        value: roundTo(costPerEpoch, 2),
        unit: "USD",
        precision: 2,
      }),
      resultField({
        name: "effectiveHourlyRate",
        label: "Effective hourly rate",
        value: roundTo(effectiveHourlyRate, 2),
        unit: "USD/GPU-hour",
        precision: 2,
      }),
    ];
  },
} satisfies CalculatorConfig;
