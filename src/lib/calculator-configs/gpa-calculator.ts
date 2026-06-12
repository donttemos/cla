import type { CalculatorConfig } from "@/types/calculator-engine";
import { readNumber, resultField, roundTo } from "./helpers";

const gradeOptions = [
  { label: "None / Skip", value: "-1" },
  { label: "A+ (4.33)", value: "4.33" },
  { label: "A (4.00)", value: "4.0" },
  { label: "A- (3.67)", value: "3.67" },
  { label: "B+ (3.33)", value: "3.33" },
  { label: "B (3.00)", value: "3.0" },
  { label: "B- (2.67)", value: "2.67" },
  { label: "C+ (2.33)", value: "2.33" },
  { label: "C (2.00)", value: "2.0" },
  { label: "C- (1.67)", value: "1.67" },
  { label: "D+ (1.33)", value: "1.33" },
  { label: "D (1.00)", value: "1.0" },
  { label: "F (0.00)", value: "0.0" },
];

export const gpaCalculatorConfig = {
  slug: "gpa-calculator",
  title: "GPA Calculator",
  description: "Calculate grade point average from courses, credits, and grades.",
  inputs: [
    { name: "grade1", label: "Course 1 Grade", type: "select", options: gradeOptions, defaultValue: "4.0" },
    { name: "credits1", label: "Course 1 Credits", type: "number", min: 0, step: 0.5, defaultValue: 3 },
    
    { name: "grade2", label: "Course 2 Grade", type: "select", options: gradeOptions, defaultValue: "3.0" },
    { name: "credits2", label: "Course 2 Credits", type: "number", min: 0, step: 0.5, defaultValue: 4 },
    
    { name: "grade3", label: "Course 3 Grade", type: "select", options: gradeOptions, defaultValue: "-1" },
    { name: "credits3", label: "Course 3 Credits", type: "number", min: 0, step: 0.5, defaultValue: 0 },
    
    { name: "grade4", label: "Course 4 Grade", type: "select", options: gradeOptions, defaultValue: "-1" },
    { name: "credits4", label: "Course 4 Credits", type: "number", min: 0, step: 0.5, defaultValue: 0 },
    
    { name: "grade5", label: "Course 5 Grade", type: "select", options: gradeOptions, defaultValue: "-1" },
    { name: "credits5", label: "Course 5 Credits", type: "number", min: 0, step: 0.5, defaultValue: 0 },
  ],
  resultFields: [
    {
      name: "gpa",
      label: "Semester GPA",
      precision: 2,
    },
    {
      name: "totalCredits",
      label: "Total Credits",
      precision: 1,
    },
    {
      name: "totalPoints",
      label: "Total Grade Points",
      precision: 2,
    },
  ],
  calculate(values) {
    let totalCredits = 0;
    let totalPoints = 0;

    for (let i = 1; i <= 5; i++) {
      const gradeStr = values[`grade${i}`];
      const grade = typeof gradeStr === "string" ? Number(gradeStr) : -1;
      const credits = readNumber(values, `credits${i}`);

      if (grade >= 0 && credits > 0) {
        totalCredits += credits;
        totalPoints += grade * credits;
      }
    }

    const gpa = totalCredits > 0 ? totalPoints / totalCredits : 0;

    return [
      resultField({
        name: "gpa",
        label: "Semester GPA",
        value: roundTo(gpa, 2),
        precision: 2,
      }),
      resultField({
        name: "totalCredits",
        label: "Total Credits",
        value: totalCredits,
        precision: 1,
      }),
      resultField({
        name: "totalPoints",
        label: "Total Grade Points",
        value: roundTo(totalPoints, 2),
        precision: 2,
      }),
    ];
  },
} satisfies CalculatorConfig;
