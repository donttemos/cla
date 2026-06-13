// Content and SEO types
import type {
  BlogPost,
  Calculator,
  Category,
  FaqItem,
} from "@/types/content";
import { cache } from "react";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n";
import type {
  ContentTranslations,
} from "@/lib/i18n/content/types";

export const SITE_NAME = "DTECALC";
export const SITE_TAGLINE = "500+ Free Online Calculators";
export const SITE_URL = "https://calcverse.donttemo.top";

import { 
  dbGetAllCategories, 
  dbGetCategoryBySlug, 
  dbGetAllCalculators, 
  dbGetCalculatorBySlug, 
  dbGetCalculatorsByCategorySlug,
  dbGetFeaturedCalculators,
  dbGetLatestCalculators,
  dbGetAllBlogPosts,
  dbGetBlogPostBySlug,
} from "./db/content-db";

const emptyTranslations: ContentTranslations = {
  categories: {},
  calculators: {},
  blogPosts: {},
};

const getContentTranslations = cache(async (locale: Locale): Promise<ContentTranslations> => {
  switch (locale) {
    case "en":
      return emptyTranslations;
    case "es":
      return (await import("@/lib/i18n/content/es")).spanishContentTranslations;
    case "id":
      return (await import("@/lib/i18n/content/id")).indonesianContentTranslations;
    case "pt-BR":
      return (await import("@/lib/i18n/content/pt-BR")).portugueseBrazilContentTranslations;
    case "zh-CN":
      return (await import("@/lib/i18n/content/zh-CN")).simplifiedChineseContentTranslations;
    case "zh-TW":
      return (await import("@/lib/i18n/content/zh-TW")).traditionalChineseContentTranslations;
    default:
      return emptyTranslations;
  }
});

function translateCategory(category: Category, translations: ContentTranslations): Category {
  const translation = translations.categories?.[category.slug];

  return translation
    ? {
        ...category,
        name: translation.name ?? category.name,
        description: translation.description ?? category.description,
      }
    : category;
}

function translateCalculator(
  calculator: Calculator,
  translations: ContentTranslations,
  locale: Locale,
): Calculator {
  const translation = translations.calculators?.[calculator.slug];
  const categoryName = (calculator as unknown as Record<string, unknown>).categoryName as string || "online";

  const localizedDefaults = buildLocalizedCalculatorDefaults(
    calculator,
    categoryName,
    locale,
  );

  return {
    ...calculator,
    name: translation?.name ?? calculator.name,
    description: translation?.description ?? calculator.description,
    contentSummary:
      translation?.contentSummary ?? localizedDefaults.contentSummary,
    whatIs: translation?.whatIs ?? localizedDefaults.whatIs,
    formulaExplanation:
      translation?.formulaExplanation ?? localizedDefaults.formulaExplanation,
    howToSteps: translation?.howToSteps ?? localizedDefaults.howToSteps,
    example: translation?.example ?? localizedDefaults.example,
    useCases: translation?.useCases ?? localizedDefaults.useCases,
    faq: translation?.faq ?? localizedDefaults.faq,
  };
}

function buildLocalizedCalculatorDefaults(
  calculator: Calculator,
  categoryName: string,
  locale: Locale,
): Pick<
  Calculator,
  "contentSummary" | "whatIs" | "formulaExplanation" | "howToSteps" | "example" | "useCases" | "faq"
> {
  const fallbackBuilder = calculatorLocaleFallbackBuilders[locale];

  return fallbackBuilder
    ? fallbackBuilder(calculator, categoryName)
    : {
        contentSummary: calculator.contentSummary,
        whatIs: calculator.whatIs,
        formulaExplanation: calculator.formulaExplanation,
        howToSteps: calculator.howToSteps,
        example: calculator.example,
        useCases: calculator.useCases,
        faq: calculator.faq,
      };
}

const calculatorLocaleFallbackBuilders: Partial<
  Record<
    Locale,
    (
      calculator: Calculator,
      categoryName: string,
    ) => Pick<
      Calculator,
      "contentSummary" | "whatIs" | "formulaExplanation" | "howToSteps" | "example" | "useCases" | "faq"
    >
  >
> = {
  es: (calculator, categoryName) => ({
    contentSummary: `${calculator.name} ayuda a los usuarios de DTECALC a ${calculator.description.charAt(0).toLowerCase()}${calculator.description.slice(1)}`,
    whatIs: `${calculator.name} es una calculadora gratuita de ${categoryName.toLowerCase()} para quienes necesitan resolver una pregunta numerica comun de forma rapida y clara. Combina el widget, la formula, un ejemplo, casos de uso y preguntas frecuentes para que la pagina sirva tanto para respuestas rapidas como para entender mejor el resultado.`,
    formulaExplanation: `La formula principal de esta herramienta es: ${calculator.formula}. Usa esta explicacion para entender que entrada cambia el resultado, por que sube o baja la salida y que supuestos pueden afectar el calculo.`,
    howToSteps: [
      "Introduce los valores requeridos en los campos de la calculadora.",
      "Comprueba que las unidades, fechas, tasas o cantidades coincidan con tu caso.",
      "Revisa el resultado junto con la explicacion de la formula.",
      `Compara calculadoras relacionadas cuando tu pregunta abarque ${categoryName.toLowerCase()} u otros temas conectados.`,
    ],
    example: `Por ejemplo, usa ${calculator.name} para probar un escenario realista antes de cambiar importe, tasa, periodo o medida. Comparar dos o tres escenarios suele ser mas util que confiar en un solo resultado.`,
    useCases: [
      `Estimar un resultado de ${categoryName.toLowerCase()} antes de tomar una decision.`,
      "Comparar dos escenarios con entradas diferentes.",
      "Entender la formula detras del resultado en lugar de tratarlo como una caja negra.",
    ],
    faq: buildLocalizedFaq(
      calculator.name,
      categoryName.toLowerCase(),
      "es",
    ),
  }),
  "pt-BR": (calculator, categoryName) => ({
    contentSummary: `${calculator.name} ajuda os usuarios da DTECALC a ${calculator.description.charAt(0).toLowerCase()}${calculator.description.slice(1)}`,
    whatIs: `${calculator.name} e uma calculadora gratuita de ${categoryName.toLowerCase()} para quem precisa resolver uma pergunta numerica comum com rapidez e clareza. A pagina combina widget, formula, exemplo, casos de uso e perguntas frequentes para servir tanto para respostas rapidas quanto para melhor entendimento do resultado.`,
    formulaExplanation: `A formula principal desta ferramenta e: ${calculator.formula}. Use esta explicacao para entender qual entrada altera o resultado, por que a saida sobe ou desce e quais premissas podem afetar o calculo.`,
    howToSteps: [
      "Informe os valores necessarios nos campos da calculadora.",
      "Confira se unidades, datas, taxas ou valores correspondem ao seu caso.",
      "Revise o resultado junto com a explicacao da formula.",
      `Compare calculadoras relacionadas quando a sua pergunta envolver ${categoryName.toLowerCase()} ou temas proximos.`,
    ],
    example: `Por exemplo, use ${calculator.name} para testar um cenario realista antes de alterar valor, taxa, periodo ou medida. Comparar dois ou tres cenarios costuma ser mais util do que confiar em um unico resultado.`,
    useCases: [
      `Estimar um resultado de ${categoryName.toLowerCase()} antes de tomar uma decisao.`,
      "Comparar dois cenarios com entradas diferentes.",
      "Entender a formula por tras do resultado em vez de tratar a saida como uma caixa-preta.",
    ],
    faq: buildLocalizedFaq(
      calculator.name,
      categoryName.toLowerCase(),
      "pt-BR",
    ),
  }),
  id: (calculator, categoryName) => ({
    contentSummary: `${calculator.name} membantu pengguna DTECALC untuk ${calculator.description.charAt(0).toLowerCase()}${calculator.description.slice(1)}`,
    whatIs: `${calculator.name} adalah kalkulator ${categoryName.toLowerCase()} gratis untuk orang yang membutuhkan cara cepat dan jelas untuk menjawab pertanyaan angka yang umum. Halaman ini menggabungkan widget kalkulator, rumus, contoh, penggunaan umum, dan FAQ agar bermanfaat untuk jawaban cepat maupun pemahaman yang lebih baik.`,
    formulaExplanation: `Rumus utama alat ini adalah: ${calculator.formula}. Gunakan penjelasan ini untuk memahami input mana yang mengubah hasil, mengapa output naik atau turun, dan asumsi apa yang dapat memengaruhi perhitungan.`,
    howToSteps: [
      "Masukkan nilai yang diperlukan ke dalam kolom kalkulator.",
      "Pastikan satuan, tanggal, tarif, atau jumlah sesuai dengan situasi Anda.",
      "Tinjau hasil bersama penjelasan rumus.",
      `Bandingkan kalkulator terkait saat pertanyaan Anda melibatkan ${categoryName.toLowerCase()} atau topik lain yang berhubungan.`,
    ],
    example: `Sebagai contoh, gunakan ${calculator.name} untuk menguji satu skenario yang realistis sebelum mengubah jumlah, tarif, periode, atau ukuran. Membandingkan dua atau tiga skenario biasanya lebih berguna daripada hanya mengandalkan satu hasil.`,
    useCases: [
      `Memperkirakan hasil ${categoryName.toLowerCase()} sebelum mengambil keputusan.`,
      "Membandingkan dua skenario dengan input yang berbeda.",
      "Memahami rumus di balik hasil alih-alih memperlakukan output sebagai kotak hitam.",
    ],
    faq: buildLocalizedFaq(
      calculator.name,
      categoryName.toLowerCase(),
      "id",
    ),
  }),
  "zh-CN": (calculator, categoryName) => ({
    contentSummary: `${calculator.name}可以帮助 DTECALC 用户${calculator.description}`,
    whatIs: `${calculator.name}是一款免费的${categoryName}工具，适合需要快速、清晰地解决常见数字问题的用户。本页同时提供计算器组件、公式、示例、应用场景和常见问题，既适合快速得到答案，也有助于理解结果背后的逻辑。`,
    formulaExplanation: `这个工具的核心公式是：${calculator.formula}。你可以结合本节理解哪个输入会改变结果、为什么结果会上下波动，以及哪些前提条件可能影响计算。`,
    howToSteps: [
      "在计算器字段中输入所需数值。",
      "确认单位、日期、利率或金额与实际场景一致。",
      "结合公式说明查看计算结果。",
      `当你的问题同时涉及${categoryName}或相关主题时，可以继续比较相关计算器。`,
    ],
    example: `例如，你可以先用${calculator.name}测试一组贴近现实的输入，再修改金额、利率、时间或单位进行对比。与只看单一结果相比，比较两到三个场景通常更有参考价值。`,
    useCases: [
      `在做决定前先估算一个${categoryName}结果。`,
      "比较两种不同输入条件下的结果差异。",
      "理解结果背后的公式，而不是把输出当成黑盒。",
    ],
    faq: buildLocalizedFaq(calculator.name, categoryName, "zh-CN"),
  }),
  "zh-TW": (calculator, categoryName) => ({
    contentSummary: `${calculator.name}可以幫助 DTECALC 使用者${calculator.description}`,
    whatIs: `${calculator.name}是一款免費的${categoryName}工具，適合需要快速、清楚地處理常見數字問題的使用者。本頁同時提供計算器元件、公式、範例、使用情境與常見問題，既能幫助你快速得到答案，也能理解結果背後的邏輯。`,
    formulaExplanation: `這個工具的核心公式是：${calculator.formula}。你可以透過本節了解哪個輸入會改變結果、為什麼輸出會上升或下降，以及哪些前提假設可能影響計算。`,
    howToSteps: [
      "在計算器欄位中輸入所需數值。",
      "確認單位、日期、利率或金額與實際情境一致。",
      "搭配公式說明一起查看結果。",
      `當你的問題同時涉及${categoryName}或相近主題時，可以繼續比較相關計算器。`,
    ],
    example: `例如，你可以先用${calculator.name}測試一組貼近現實的輸入，再修改金額、利率、時間或單位進行比較。相較於只看單一結果，比較兩到三個情境通常更有參考價值。`,
    useCases: [
      `在做決定前先估算一個${categoryName}結果。`,
      "比較兩組不同輸入條件下的結果差異。",
      "理解結果背後的公式，而不是把輸出當成黑盒。",
    ],
    faq: buildLocalizedFaq(calculator.name, categoryName, "zh-TW"),
  }),
};

function buildLocalizedFaq(
  calculatorName: string,
  categoryName: string,
  locale: Exclude<Locale, "en">,
): readonly FaqItem[] {
  switch (locale) {
    case "es":
      return [
        {
          question: `¿${calculatorName} es gratis?`,
          answer: `Si. ${calculatorName} forma parte de la biblioteca gratuita de calculadoras de DTECALC.`,
        },
        {
          question: `¿Que informacion necesito para ${calculatorName}?`,
          answer: `Introduce los datos solicitados en la pagina y revisa la formula, el ejemplo y las calculadoras relacionadas de ${categoryName}.`,
        },
        {
          question: `¿Puedo usar ${calculatorName} en movil?`,
          answer: "Si. Las calculadoras de DTECALC estan pensadas para navegadores de escritorio, tablet y movil.",
        },
      ];
    case "pt-BR":
      return [
        {
          question: `${calculatorName} e gratis?`,
          answer: `Sim. ${calculatorName} faz parte da biblioteca gratuita de calculadoras da DTECALC.`,
        },
        {
          question: `Que informacoes preciso para usar ${calculatorName}?`,
          answer: `Informe os dados pedidos na pagina e revise a formula, o exemplo e as calculadoras relacionadas de ${categoryName}.`,
        },
        {
          question: `Posso usar ${calculatorName} no celular?`,
          answer: "Sim. As calculadoras da DTECALC foram pensadas para navegadores em desktop, tablet e celular.",
        },
      ];
    case "id":
      return [
        {
          question: `Apakah ${calculatorName} gratis digunakan?`,
          answer: `Ya. ${calculatorName} adalah bagian dari pustaka kalkulator gratis DTECALC.`,
        },
        {
          question: `Informasi apa yang saya perlukan untuk ${calculatorName}?`,
          answer: `Masukkan input yang diminta di halaman, lalu tinjau rumus, contoh, dan kalkulator ${categoryName} terkait.`,
        },
        {
          question: `Apakah ${calculatorName} bisa digunakan di ponsel?`,
          answer: "Ya. Kalkulator DTECALC dirancang untuk browser desktop, tablet, dan ponsel.",
        },
      ];
    case "zh-CN":
      return [
        {
          question: `${calculatorName}是免费的吗？`,
          answer: `是的。${calculatorName}属于 DTECALC 免费计算器工具库的一部分。`,
        },
        {
          question: `使用${calculatorName}需要准备哪些信息？`,
          answer: `输入页面要求的数值后，你还可以继续查看公式说明、示例以及相关${categoryName}工具。`,
        },
        {
          question: `${calculatorName}可以在手机上使用吗？`,
          answer: "可以。DTECALC 计算器已针对桌面、平板和手机浏览器进行了适配。",
        },
      ];
    case "zh-TW":
      return [
        {
          question: `${calculatorName}是免費的嗎？`,
          answer: `是的。${calculatorName}屬於 DTECALC 免費計算器工具庫的一部分。`,
        },
        {
          question: `使用${calculatorName}需要準備哪些資訊？`,
          answer: `輸入頁面要求的數值後，你也可以繼續查看公式說明、範例以及相關${categoryName}工具。`,
        },
        {
          question: `${calculatorName}可以在手機上使用嗎？`,
          answer: "可以。DTECALC 計算器已針對桌面、平板與手機瀏覽器做過適配。",
        },
      ];
  }
}

function translateBlogPost(post: BlogPost, translations: ContentTranslations): BlogPost {
  const translation = translations.blogPosts?.[post.slug];

  if (!translation) {
    return post;
  }

  return {
    ...post,
    ...translation,
    sections: translation.sections
      ? post.sections?.map((section, index) => ({
          ...section,
          ...translation.sections?.[index],
        }))
      : post.sections,
  };
}

export async function getAllCategories(): Promise<readonly Category[]> {
  return dbGetAllCategories();
}

export async function getAllCategoriesByLocale(locale: Locale): Promise<readonly Category[]> {
  const categories = await dbGetAllCategories();
  if (locale === DEFAULT_LOCALE) {
    return categories;
  }

  const translations = await getContentTranslations(locale);
  return categories.map((category) => translateCategory(category, translations));
}

export async function getAllCalculators(): Promise<readonly Calculator[]> {
  return dbGetAllCalculators();
}

export async function getAllCalculatorsByLocale(locale: Locale): Promise<readonly Calculator[]> {
  const calculators = await dbGetAllCalculators();
  if (locale === DEFAULT_LOCALE) {
    return calculators;
  }

  const translations = await getContentTranslations(locale);
  return calculators.map((calculator) => translateCalculator(calculator, translations, locale));
}

export async function getFeaturedCalculators(limit?: number): Promise<readonly Calculator[]> {
  return dbGetFeaturedCalculators(limit);
}

export async function getFeaturedCalculatorsByLocale(locale: Locale, limit?: number): Promise<readonly Calculator[]> {
  const featured = (await getAllCalculatorsByLocale(locale)).filter((calculator) => calculator.featured);
  return typeof limit === "number" ? featured.slice(0, limit) : featured;
}

export async function getLatestCalculators(limit = 12): Promise<readonly Calculator[]> {
  return dbGetLatestCalculators(limit);
}

export async function getCategoryBySlug(slug: string): Promise<Category | undefined> {
  return dbGetCategoryBySlug(slug);
}

export async function getCategoryBySlugAndLocale(slug: string, locale: Locale): Promise<Category | undefined> {
  const category = await getCategoryBySlug(slug);
  if (!category) {
    return undefined;
  }

  if (locale === DEFAULT_LOCALE) {
    return category;
  }

  const translations = await getContentTranslations(locale);
  return translateCategory(category, translations);
}

export async function getCalculatorBySlug(slug: string): Promise<Calculator | undefined> {
  return dbGetCalculatorBySlug(slug);
}

export async function getCalculatorBySlugAndLocale(slug: string, locale: Locale): Promise<Calculator | undefined> {
  const calculator = await getCalculatorBySlug(slug);
  if (!calculator) {
    return undefined;
  }

  if (locale === DEFAULT_LOCALE) {
    return calculator;
  }

  const translations = await getContentTranslations(locale);
  return translateCalculator(calculator, translations, locale);
}

export async function getCalculatorsByCategorySlug(slug: string): Promise<readonly Calculator[]> {
  return dbGetCalculatorsByCategorySlug(slug);
}

export async function getCalculatorsByCategorySlugAndLocale(slug: string, locale: Locale): Promise<readonly Calculator[]> {
  const calcs = await getCalculatorsByCategorySlug(slug);
  if (locale === DEFAULT_LOCALE) {
    return calcs;
  }

  const translations = await getContentTranslations(locale);
  return calcs.map((calculator) => translateCalculator(calculator, translations, locale));
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
  return dbGetBlogPostBySlug(slug);
}

export async function getBlogPostBySlugAndLocale(slug: string, locale: Locale): Promise<BlogPost | undefined> {
  const post = await getBlogPostBySlug(slug);
  if (!post) {
    return undefined;
  }

  if (locale === DEFAULT_LOCALE) {
    return post;
  }

  const translations = await getContentTranslations(locale);
  return translateBlogPost(post, translations);
}

export async function getBlogPostsForCalculatorSlug(slug: string): Promise<readonly BlogPost[]> {
  const posts = await dbGetAllBlogPosts();
  return posts.filter((post) =>
    (post.relatedCalculatorSlugs as readonly string[]).includes(slug),
  );
}

export async function getBlogPostsByLocale(locale: Locale): Promise<readonly BlogPost[]> {
  const posts = await dbGetAllBlogPosts();
  if (locale === DEFAULT_LOCALE) {
    return posts;
  }

  const translations = await getContentTranslations(locale);
  return posts.map((post) => translateBlogPost(post, translations));
}

export async function getBlogPostsForCalculatorSlugAndLocale(slug: string, locale: Locale): Promise<readonly BlogPost[]> {
  const posts = await getBlogPostsForCalculatorSlug(slug);
  if (locale === DEFAULT_LOCALE) {
    return posts;
  }

  const translations = await getContentTranslations(locale);
  return posts.map((post) => translateBlogPost(post, translations));
}

export async function getRelatedCalculators(calculator: Calculator, limit = 4): Promise<readonly Calculator[]> {
  const explicitRelated = await Promise.all(
    calculator.relatedCalculatorSlugs.map((slug) => getCalculatorBySlug(slug))
  );
  const explicitRelatedFiltered = explicitRelated.filter((related): related is Calculator => Boolean(related));

  const categoryRelated = await getCalculatorsByCategorySlug(calculator.categorySlug);
  const filteredCategoryRelated = categoryRelated.filter((candidate) => candidate.slug !== calculator.slug);

  return [...explicitRelatedFiltered, ...filteredCategoryRelated].slice(0, limit);
}
