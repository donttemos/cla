import type { CategorySlug } from "@/types/content";

export function CategorySeoContent({ slug, name }: { slug: CategorySlug; name: string }) {
  const contentMap: Record<CategorySlug, { intro: string[]; guide: string[]; faq: {q: string, a: string}[] }> = {
    finance: {
      intro: [
        "Welcome to the comprehensive Finance Calculators hub. In the modern economic landscape, making informed decisions about your money is more critical than ever. Whether you are an individual looking to secure a mortgage, a student trying to understand student loan amortization, or a business owner calculating the return on investment for a new marketing campaign, having the right computational tools at your disposal empowers you to take control of your financial future.",
        "Our finance calculators are meticulously designed to handle the complex variables of compound interest, tax brackets, and loan terms. We strip away the confusing jargon and present the numbers clearly. These tools serve as an educational foundation to help you comprehend how slight changes in interest rates or payment schedules can dramatically impact the total cost of a loan or the growth of an investment over decades."
      ],
      guide: [
        "1. Identify Your Goal: Begin by determining exactly what you need to calculate. Are you forecasting savings or estimating debt?",
        "2. Gather Your Data: Collect your principal amounts, interest rates (APR vs APY), and the time horizon (term length) for your calculation.",
        "3. Use the Tool: Input your data into the respective calculator. Pay close attention to compounding frequencies, as daily versus annual compounding will yield different results.",
        "4. Analyze the Results: Look beyond the final number. Review the total interest paid or earned, and adjust your variables to run multiple scenarios."
      ],
      faq: [
        { q: "What is the difference between simple and compound interest?", a: "Simple interest is calculated solely on the principal amount. Compound interest is calculated on the principal amount plus any accumulated interest from previous periods, leading to exponential growth or debt accumulation over time." },
        { q: "How accurate are these financial estimates?", a: "Our tools use standard banking formulas to provide highly accurate mathematical deterministic estimates. However, real-world results may vary due to taxes, dynamic interest rates, and institutional fees not captured in simple inputs." },
        { q: "Can I use these tools for business accounting?", a: "While our calculators are excellent for estimation and strategic planning, they are educational tools. Always consult a certified public accountant (CPA) for official business filings and tax compliance." },
        { q: "Why does my mortgage estimate differ from my bank's quote?", a: "Banks often include property taxes, private mortgage insurance (PMI), origination fees, and escrow considerations in their quotes. Our calculators primarily calculate the core Principal and Interest (P&I) unless otherwise specified." }
      ]
    },
    health: {
      intro: [
        "Navigating your personal health and fitness journey requires understanding your body's baseline metrics. Our Health Calculators hub provides you with the mathematical foundation needed to establish realistic wellness goals. From estimating your Body Mass Index (BMI) to calculating your daily caloric maintenance needs via your Basal Metabolic Rate (BMR), these tools offer scientifically backed equations to help you optimize your health strategy.",
        "Health is highly individualized, and while formulas provide excellent reference points, they are not medical diagnoses. We utilize recognized standards from global health organizations, allowing you to track your progress, plan your nutrition, and measure your hydration needs accurately. Understanding the numbers behind your physiology is the first step toward a sustainable, healthy lifestyle."
      ],
      guide: [
        "1. Know Your Metrics: Have accurate measurements of your height, weight, age, and biological sex ready. Consistency in measurement time (e.g., morning weigh-ins) yields the best data.",
        "2. Select the Right Formula: Understand that tools like BMI provide a general screening metric, while BMR and TDEE provide specific caloric guidelines based on your activity level.",
        "3. Input and Adjust: Enter your metrics. If your activity level changes from sedentary to highly active, adjust your TDEE inputs accordingly to see how your caloric needs shift.",
        "4. Consult Professionals: Use these numbers as a baseline to discuss your diet and exercise plans with a registered dietitian or medical professional."
      ],
      faq: [
        { q: "Is BMI an accurate measure of health?", a: "BMI is a useful population screening tool but has limitations at the individual level. It does not distinguish between muscle mass and fat mass, meaning athletes may register as 'overweight' despite having low body fat." },
        { q: "What is the difference between BMR and TDEE?", a: "BMR (Basal Metabolic Rate) is the number of calories your body burns at complete rest to maintain basic life functions. TDEE (Total Daily Energy Expenditure) multiplies your BMR by an activity factor to estimate the total calories you burn in a day including exercise and movement." },
        { q: "Which BMR formula do you use?", a: "We primarily utilize the Mifflin-St Jeor equation, which is widely considered the most accurate standard formula for estimating BMR in modern populations." },
        { q: "How much water should I actually drink?", a: "While the '8 glasses a day' rule is popular, actual hydration needs depend heavily on your body weight, climate, and exercise intensity. Our water intake calculators provide a more personalized baseline." }
      ]
    },
    "date-time": {
      intro: [
        "Time is our most valuable resource, and calculating it accurately can be surprisingly complex. The Date & Time Calculators hub is designed to eliminate the mental math of counting days across leap years, navigating varying month lengths, and determining precise durations. Whether you are tracking a project deadline, calculating your exact age in days, or determining the business days between two contractual dates, our tools provide instant, error-free results.",
        "Our time engines handle the intricacies of the Gregorian calendar automatically. From simple date additions to complex duration breakdowns covering years, months, weeks, and days, these calculators ensure your scheduling and time-tracking are always precise."
      ],
      guide: [
        "1. Determine Your Goal: Are you adding time to a specific date, or finding the duration between two fixed points?",
        "2. Handle Timezones carefully: If you are calculating precise hours and minutes, ensure you account for any daylight saving time shifts or timezone differences.",
        "3. Use the Tool: Input your start and end dates. For business day calculations, ensure you identify standard weekend days.",
        "4. Interpret the Output: Read the results carefully, noting the difference between calendar days and working days, which can significantly alter project timelines."
      ],
      faq: [
        { q: "Do these calculators account for leap years?", a: "Yes, our date calculations accurately account for February 29th in leap years, ensuring that duration calculations spanning across leap years are precise." },
        { q: "How is 'one month' calculated in duration?", a: "Calculating months can vary depending on the start date (e.g., Jan 31 to Feb 28). Our tools generally map to the exact calendar date of the following month, adjusting for end-of-month boundaries." },
        { q: "Can I calculate excluding weekends?", a: "Many of our date tools, specifically business day calculators, allow you to calculate durations exclusively using Monday through Friday, ignoring standard weekends." },
        { q: "Why is calculating exact age complicated?", a: "Because months have varying numbers of days (28, 29, 30, or 31), calculating age as a combination of years, months, and days requires a specific calendar anchor, rather than just dividing total days by 365." }
      ]
    },
    math: {
      intro: [
        "The Math Calculators hub is your digital toolkit for solving academic, professional, and everyday mathematical problems. From simple arithmetic to complex fractions, percentages, and algebraic operations, we provide clear, step-by-step solutions that not only give you the answer but help you understand the process.",
        "Mathematics is the universal language of logic. Our tools are built to support students checking their homework, professionals verifying engineering ratios, and anyone needing a quick, reliable calculation. We focus on computational accuracy and educational transparency, ensuring you are never left wondering how an answer was derived."
      ],
      guide: [
        "1. Define the Problem: Clearly identify the mathematical operation you need to perform (e.g., finding a percentage decrease vs. a percentage of a whole).",
        "2. Input the Values: Enter your numerators, denominators, or base numbers. Pay attention to signs (positive/negative) if applicable.",
        "3. Review the Process: Don't just copy the final result. Look at the formula breakdown provided below the calculator to understand the steps involved.",
        "4. Apply the Logic: Use the verified result in your broader equation or real-world application, knowing the foundational math is solid."
      ],
      faq: [
        { q: "How are percentages calculated?", a: "A percentage is simply a ratio expressed as a fraction of 100. Our calculators use the standard formula: (Part / Whole) × 100." },
        { q: "Can the calculators handle complex fractions?", a: "Yes, our fraction calculators can add, subtract, multiply, and divide complex fractions, and will typically reduce the final answer to its simplest form." },
        { q: "What happens if I divide by zero?", a: "In mathematics, division by zero is undefined. Our calculation engine catches these edge cases and provides a clear error message rather than crashing or providing an incorrect output." },
        { q: "Are these tools suitable for academic use?", a: "Absolutely. They are excellent for verifying manual calculations and understanding the procedural steps, making them a great study aid for students." }
      ]
    },
    conversion: {
      intro: [
        "In an interconnected world, converting between different systems of measurement is a daily necessity. The Conversion Tools hub bridges the gap between metric and imperial systems, providing instant, highly precise translations for weight, length, temperature, volume, and more. Whether you are following an international recipe, reviewing engineering schematics, or planning a trip abroad, our converters ensure you have the right numbers.",
        "We utilize standardized international conversion factors to guarantee precision. A centimeter is always exactly 0.393701 inches, and our engines calculate to multiple decimal places to prevent compounding errors in large-scale conversions."
      ],
      guide: [
        "1. Identify the Units: Know exactly what unit you are starting with and what unit you need. Pay attention to subtle differences like US Gallons vs. UK Imperial Gallons.",
        "2. Enter the Value: Input your starting number. Our tools accept both whole numbers and decimals.",
        "3. Check the Conversion: Review the output. If the result has many decimal places, consider rounding to a practical length for your specific use case.",
        "4. Verify the Context: Ensure the converted unit makes sense in the context of your problem (e.g., using Celsius for weather versus Kelvin for scientific data)."
      ],
      faq: [
        { q: "How accurate are the conversion rates?", a: "Our conversion factors are based on internationally agreed-upon standards (such as the international yard and pound agreement of 1959), ensuring exact mathematical precision." },
        { q: "How do you convert Celsius to Fahrenheit?", a: "We use the standard formula: (°C × 9/5) + 32 = °F. This accounts for both the ratio of scale and the offset of the freezing point." },
        { q: "Why are there different types of ounces or gallons?", a: "Historical differences between US Customary units and British Imperial units mean that fluid measurements often differ across borders. Our tools specify which system is being used." },
        { q: "Is metric better than imperial?", a: "The metric system (SI) is globally standardized and base-10, making calculations simpler for science and international trade. However, imperial units remain standard in everyday life in the US and parts of the UK." }
      ]
    },
    business: {
      intro: [
        "Running a successful enterprise requires more than intuition; it demands rigorous data analysis. The Business Calculators hub provides entrepreneurs, marketers, and analysts with the formulas needed to measure profitability, assess customer value, and forecast runway. From calculating Customer Acquisition Cost (CAC) to determining break-even points, these tools translate raw data into actionable business intelligence.",
        "We understand that business metrics drive strategy. Our calculators use standard corporate finance and SaaS metrics methodologies, helping you benchmark your performance against industry standards and make informed decisions about pricing, hiring, and ad spend."
      ],
      guide: [
        "1. Gather Your Financials: Collect accurate data on your revenue, fixed costs, variable costs, and marketing spend over a specific period.",
        "2. Choose the Metric: Determine if you are evaluating a specific campaign (ROI, ROAS) or overall business health (LTV:CAC ratio, Burn Rate).",
        "3. Run the Calculation: Input your data into the corresponding calculator. Ensure your timeframes match (e.g., monthly spend vs. monthly churn).",
        "4. Act on the Data: Use the output to adjust your strategy. A high CAC may require marketing optimization, while a low LTV might necessitate product improvements."
      ],
      faq: [
        { q: "What is a good LTV:CAC ratio?", a: "In many industries, particularly SaaS, a 3:1 ratio (Lifetime Value is three times the Customer Acquisition Cost) is considered healthy. A 1:1 ratio indicates you are losing money, while a 5:1 ratio might suggest you are under-investing in marketing." },
        { q: "How do I calculate profit margin?", a: "Profit margin is calculated as ((Revenue - Cost) / Revenue) × 100. It shows what percentage of sales has turned into profits." },
        { q: "What does break-even mean?", a: "The break-even point is the exact moment when total revenue equals total costs (both fixed and variable). Beyond this point, every additional unit sold generates profit." },
        { q: "How is Burn Rate calculated?", a: "Burn Rate is the rate at which a company spends its cash reserves, typically calculated monthly. Net burn rate is (Cash Balance at Start - Cash Balance at End) over a given period." }
      ]
    },
    ai: {
      intro: [
        "As artificial intelligence integrates into every sector, understanding and managing computational costs is crucial for developers and businesses. The AI Cost Calculators hub helps you project the financial impact of utilizing Large Language Models (LLMs), generating AI imagery, and provisioning GPU instances for training. By estimating token usage and API calls, you can budget your AI infrastructure effectively.",
        "Pricing structures for platforms like OpenAI, Anthropic, and cloud GPU providers change frequently and can be highly complex. Our tools break down the distinction between input tokens, output tokens, and runtime costs, giving you a clear, predictable forecast of your monthly AI expenditure before you write a line of code."
      ],
      guide: [
        "1. Estimate Your Usage: Determine your average prompt length (input tokens) and expected response length (output tokens), as well as the number of requests per day.",
        "2. Select Your Model: Different models (e.g., GPT-4o vs. Claude 3.5 Sonnet) have vastly different pricing structures. Select the model that fits your calculation.",
        "3. Calculate the Spend: Use our API calculators to multiply your expected token usage by the per-million token rates established by the vendor.",
        "4. Budget and Scale: Use the daily or monthly cost projection to inform your product pricing, ensuring your AI features generate positive unit economics."
      ],
      faq: [
        { q: "What is a token in AI pricing?", a: "A token is a piece of a word used by LLMs to process text. In English, 1 token is roughly 4 characters or 0.75 words. Pricing is typically billed per 1,000 or 1,000,000 tokens." },
        { q: "Why are output tokens more expensive than input tokens?", a: "Generating text (inference/output) requires significantly more computational power and memory bandwidth from the GPU than simply reading and encoding text (input/context)." },
        { q: "How often do you update API pricing?", a: "We monitor major AI vendors regularly. Check the 'Last Updated' timestamp on our calculators to see the most recent pricing data applied to the engine." },
        { q: "Can I use these estimates for enterprise contracts?", a: "Our calculators reflect public, pay-as-you-go API pricing. Enterprise contracts often include volume discounts, provisioned throughput, or committed use discounts that differ from public rates." }
      ]
    }
  };

  const fallback = {
    intro: [
      `Welcome to the ${name} Calculators hub on DTECALC. Our platform provides high-precision, reliable computational tools to help you solve complex problems and make data-driven decisions within the ${name} category.`,
      `Explore our comprehensive list of calculators below. Each tool is built with a focus on mathematical accuracy, transparent methodologies, and an exceptional user experience.`
    ],
    guide: [
      "1. Browse our selection of specialized calculators.",
      "2. Select the tool that matches your specific numerical problem.",
      "3. Enter your data into the verified fields and review the deterministic output.",
      "4. Read the accompanying formula explanations to deepen your understanding."
    ],
    faq: [
      { q: `Are these ${name} calculators free to use?`, a: "Yes, all tools on the DTECALC platform are completely free to use with no account registration required." },
      { q: "How accurate are the results?", a: "Our calculation engines use high-precision floating-point arithmetic and standard formulas to ensure maximum accuracy." }
    ]
  };

  const content = contentMap[slug] || fallback;

  return (
    <div className="mt-16 space-y-16 border-t border-zinc-200 pt-16">
      
      {/* Category Introduction */}
      <section>
        <h2 className="text-3xl font-serif text-zinc-950 tracking-tight mb-6">About {name} Calculators</h2>
        <div className="space-y-4 text-lg leading-relaxed text-zinc-600 font-sans">
          {content.intro.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </section>

      {/* Usage Guide */}
      <section className="bg-zinc-50/50 p-8 sm:p-12 rounded-2xl border border-zinc-100">
        <h2 className="text-2xl font-serif text-zinc-950 tracking-tight mb-6">How to Use These Tools</h2>
        <div className="space-y-4 text-zinc-600">
          {content.guide.map((step, index) => (
            <p key={index} className="flex items-start gap-3">
              <span className="font-mono text-xs font-bold bg-zinc-200 text-zinc-700 px-2 py-1 rounded mt-0.5">
                0{index + 1}
              </span>
              <span>{step.replace(/^\d+\.\s*/, '')}</span>
            </p>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section>
        <h2 className="text-3xl font-serif text-zinc-950 tracking-tight mb-8">Frequently Asked Questions</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {content.faq.map((item, index) => (
            <article key={index} className="cv-surface p-6">
              <h3 className="text-lg font-semibold text-zinc-950 mb-3">{item.q}</h3>
              <p className="text-sm text-zinc-600 leading-relaxed">{item.a}</p>
            </article>
          ))}
        </div>
      </section>

    </div>
  );
}