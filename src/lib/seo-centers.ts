import type { ComparisonPage, FormulaPage, ExamplePage } from "@/types/seo-centers";

export const comparisons: readonly ComparisonPage[] = [
  {
    slug: "simple-interest-vs-compound-interest",
    title: "Simple Interest vs Compound Interest",
    excerpt: "Understand the fundamental difference between simple and compound interest and how compounding accelerates growth.",
    description: "A detailed comparison of simple interest vs compound interest. Learn which formula applies to your loans, savings, and investments.",
    seoTitle: "Simple Interest vs Compound Interest - Key Differences",
    seoDescription: "Compare simple vs compound interest formulas, applications, and examples. Understand how your money grows or debt accumulates.",
    differences: [
      { aspect: "Base Calculation", a: "Calculated only on the principal amount.", b: "Calculated on the principal amount plus previously accumulated interest." },
      { aspect: "Growth Rate", a: "Linear, constant growth.", b: "Exponential, accelerating growth." },
      { aspect: "Common Uses", a: "Short-term personal loans, auto loans.", b: "Mortgages, savings accounts, credit cards, investments." },
      { aspect: "Long-term Impact", a: "Lower total interest paid/earned.", b: "Significantly higher total interest paid/earned." }
    ],
    conclusion: "Compound interest is the most powerful force in finance. While simple interest is easier to calculate and favors the borrower, compound interest drives long-term wealth creation for investors. Always check which method your bank or lender uses.",
    relatedCalculators: ["interest-calculator", "compound-interest-calculator", "loan-calculator"]
  },
  {
    slug: "apr-vs-interest-rate",
    title: "APR vs Interest Rate",
    excerpt: "Learn why APR is usually higher than the interest rate and which number you should look at when borrowing money.",
    description: "Compare APR and Interest Rate. Understand the true cost of borrowing and how fees affect your loan.",
    seoTitle: "APR vs Interest Rate - What's the Difference?",
    seoDescription: "Compare APR vs Interest Rate. Learn which number to use when evaluating mortgages, car loans, and credit cards.",
    differences: [
      { aspect: "Definition", a: "Annual Percentage Rate (APR) includes the interest rate PLUS broker fees, discount points, and some closing costs.", b: "The cost you pay each year to borrow the money, expressed as a percentage, excluding fees." },
      { aspect: "Value", a: "Usually higher than the nominal interest rate.", b: "Usually lower than the APR." },
      { aspect: "Purpose", a: "Provides a more complete picture of the total cost of the loan.", b: "Used to calculate your actual monthly payment." },
      { aspect: "Best Used For", a: "Comparing different loan offers from different lenders.", b: "Calculating your monthly cash flow requirement." }
    ],
    conclusion: "When comparing loans, always compare the APRs, not just the interest rates. A loan with a lower interest rate but high fees might actually cost you more over time than a loan with a slightly higher interest rate but no fees.",
    relatedCalculators: ["loan-calculator", "mortgage-calculator", "car-loan-calculator"]
  }
];

export const formulas: readonly FormulaPage[] = [
  {
    slug: "compound-interest-formula",
    title: "Compound Interest Formula",
    excerpt: "The mathematical formula behind compound interest, explained with variables and step-by-step calculation.",
    description: "Learn the exact formula used to calculate compound interest. We break down the variables including principal, rate, time, and frequency.",
    seoTitle: "Compound Interest Formula - Equation and Explanation",
    seoDescription: "Master the compound interest formula: A = P(1 + r/n)^(nt). Learn how to calculate future value with compounding frequencies.",
    formula: "A = P(1 + r/n)^(nt)",
    variables: [
      { name: "A", definition: "The future value of the investment/loan, including interest." },
      { name: "P", definition: "The principal investment amount (the initial deposit or loan amount)." },
      { name: "r", definition: "The annual interest rate (decimal)." },
      { name: "n", definition: "The number of times that interest is compounded per unit t." },
      { name: "t", definition: "The time the money is invested or borrowed for, in years." }
    ],
    explanation: [
      "The compound interest formula calculates the future value of an investment by accounting for the effect of compounding. Unlike simple interest, where interest is only earned on the initial principal, compound interest allows you to earn interest on your interest.",
      "The most critical variable is 'n', the compounding frequency. The more frequently interest compounds (e.g., daily instead of annually), the faster the balance grows. The exponent 'nt' represents the total number of compounding periods over the life of the loan or investment."
    ],
    relatedCalculators: ["compound-interest-calculator"]
  },
  {
    slug: "bmi-formula",
    title: "Body Mass Index (BMI) Formula",
    excerpt: "The standard metric and imperial formulas for calculating Body Mass Index.",
    description: "Discover the standard formulas for calculating BMI using both metric (kg/m²) and imperial (lbs/in²) units.",
    seoTitle: "BMI Formula - How to Calculate Body Mass Index",
    seoDescription: "Learn the mathematical formula for Body Mass Index (BMI). Includes both metric and imperial calculation methods.",
    formula: "Metric: BMI = kg / m² | Imperial: BMI = (lbs / in²) × 703",
    variables: [
      { name: "kg", definition: "Weight in kilograms." },
      { name: "m²", definition: "Height in meters, squared." },
      { name: "lbs", definition: "Weight in pounds." },
      { name: "in²", definition: "Height in inches, squared." },
      { name: "703", definition: "The standard conversion factor used in the imperial formula." }
    ],
    explanation: [
      "Body Mass Index (BMI) is a simple mathematical calculation used to categorize human body weight based on height. It is widely used by health professionals as a general screening tool.",
      "In the metric system, you simply divide weight in kilograms by height in meters squared. For the imperial system, because pounds and inches don't scale the same way as kilograms and meters, a conversion factor of 703 must be applied after dividing weight by height squared."
    ],
    relatedCalculators: ["bmi-calculator", "bmr-calculator", "body-fat-calculator"]
  }
];

export const examples: readonly ExamplePage[] = [
  {
    slug: "loan-example-100000-5-percent",
    title: "Example: $100,000 Loan at 5% for 5 Years",
    excerpt: "A complete walkthrough of calculating a $100,000 loan with a 5% interest rate over a 5-year term.",
    description: "See a real-world example of calculating monthly payments and total interest for a $100,000 loan at 5% over 5 years.",
    seoTitle: "$100,000 Loan at 5% for 5 Years - Calculation Example",
    seoDescription: "Step-by-step example calculating a $100k loan at 5% APR over 5 years. View the monthly payment and total interest cost.",
    scenario: "You are taking out a $100,000 business or personal loan. The lender offers a 5% annual interest rate, and the repayment term is 5 years (60 months). You want to know your exact monthly payment and how much interest you will pay in total.",
    steps: [
      "Identify the Principal (P): $100,000",
      "Identify the Annual Rate (r): 5% or 0.05",
      "Identify the Term (n): 5 years × 12 months = 60 monthly payments",
      "Calculate the Monthly Rate (i): 0.05 / 12 = 0.004166...",
      "Apply the Amortization Formula: Payment = P × (i × (1 + i)^n) / ((1 + i)^n - 1)",
      "Calculate the Payment: 100,000 × (0.004166 × (1.004166)^60) / ((1.004166)^60 - 1)"
    ],
    result: "Your monthly payment will be $1,887.12. Over the 5-year term, you will pay a total of $13,227.40 in interest, making the total repayment amount $113,227.40.",
    relatedCalculators: ["loan-calculator", "interest-calculator", "car-loan-calculator"]
  },
  {
    slug: "bmi-example-170cm-70kg",
    title: "Example: BMI for 170cm and 70kg",
    excerpt: "Step-by-step BMI calculation for an adult who is 170 centimeters tall and weighs 70 kilograms.",
    description: "Learn how to calculate BMI with a practical example: an individual with a height of 170cm and weight of 70kg.",
    seoTitle: "BMI Example: 170cm Height, 70kg Weight",
    seoDescription: "A step-by-step Body Mass Index calculation example for 170cm and 70kg. See the math and understand the resulting category.",
    scenario: "You want to calculate the Body Mass Index (BMI) for an adult individual who is 170 centimeters (1.7 meters) tall and weighs 70 kilograms.",
    steps: [
      "Convert height from cm to meters: 170cm = 1.7m",
      "Square the height in meters: 1.7 × 1.7 = 2.89",
      "Identify the weight: 70kg",
      "Divide weight by height squared: 70 / 2.89",
      "Calculate the final result: 24.22"
    ],
    result: "The resulting BMI is 24.2. According to standard WHO categories, a BMI of 24.2 falls into the 'Normal weight' range (18.5 - 24.9).",
    relatedCalculators: ["bmi-calculator", "body-fat-calculator"]
  }
];

export function getAllComparisons() {
  return comparisons;
}

export function getComparisonBySlug(slug: string) {
  return comparisons.find((c) => c.slug === slug);
}

export function getAllFormulas() {
  return formulas;
}

export function getFormulaBySlug(slug: string) {
  return formulas.find((f) => f.slug === slug);
}

export function getAllExamples() {
  return examples;
}

export function getExampleBySlug(slug: string) {
  return examples.find((e) => e.slug === slug);
}