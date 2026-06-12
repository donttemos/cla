import { DEFAULT_LOCALE, type Locale } from "./locales";

export type CoreDictionary = {
  nav: {
    home: string;
    calculators: string;
    search: string;
    language: string;
  };
  footer: {
    tagline: string;
    calculators: string;
    resources: string;
    privacy: string;
    terms: string;
    copyright: string;
  };
  home: {
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    popularCalculators: string;
    popularCalculatorsDesc: string;
    allCalculators: string;
    featuredTools: string;
    recentlyUpdated: string;
    emptyState: string;
    freeLibrary: string;
    latency: string;
    calculatorsLabel: string;
    categoriesLabel: string;
    popularLabel: string;
    aboutTitle: string;
    aboutSubtitle: string;
    aboutP1: string;
    aboutP2: string;
    aboutButton: string;
    indexTitle: string;
    indexFreeTools: string;
    indexCategories: string;
    indexBlog: string;
    popularSearchesTitle: string;
  };
  search: {
    title: string;
    placeholder: string;
    submit: string;
    clear: string;
    results: string;
    resultCount: string;
    noResults: string;
  };
  calculatorWidget: {
    title: string;
    description: string;
    inputLabel: string;
    calculate: string;
    calculating: string;
    reset: string;
    result: string;
    results: string;
    error: string;
    required: string;
    copyResult: string;
    min: string;
    max: string;
    unit: string;
    configurationUnavailable: string;
    notRegisteredYet: string;
    resultCard: string;
    enterValues: string;
    pleaseFix: string;
    formulaExplanation: string;
    howItWorks: string;
    examples: string;
    whatIsThe: string;
    commonUses: string;
    aboutThe: string;
    relatedCalculators: string;
    relatedBlogPosts: string;
    calculatorWidgetTitle: string;
    calculatorWidgetDesc: string;
    whatThisShowsTitle: string;
    whatThisShowsDesc: string;
    formulaNote: string;
  };
  languageSwitcher: {
    label: string;
    changeLanguage: string;
    currentLanguage: string;
    selectLanguage: string;
    close: string;
  };
  pages: {
    calculators: {
      eyebrow: string;
      title: string;
      description: string;
      popularBadge: string;
    };
    blog: {
      eyebrow: string;
      title: string;
      description: string;
      financeGuides: string;
      healthGuides: string;
      aiCostGuides: string;
      businessConversionGuides: string;
      mathGuides: string;
      relatedCalculators: string;
    };
    category: {
      eyebrow: string;
      titleSuffix: string;
      popularBadge: string;
    };
  };
};

const englishDictionary = {
  nav: {
    home: "Home",
    calculators: "Calculators",
    search: "Search",
    language: "Language",
  },
  footer: {
    tagline: "Fast, reliable calculators for everyday decisions.",
    calculators: "Calculators",
    resources: "Resources",
    privacy: "Privacy",
    terms: "Terms",
    copyright: "All rights reserved.",
  },
  home: {
    title: "Online calculators for clear answers",
    subtitle:
      "Explore practical calculators for finance, health, dates, percentages, and everyday conversions.",
    searchPlaceholder: "Search calculators",
    popularCalculators: "Popular calculators",
    popularCalculatorsDesc: "Start with high-demand tools for loans, mortgages, BMI, age, percentages, GPA, ROI, interest, and AI costs.",
    allCalculators: "All calculators",
    featuredTools: "Featured tools",
    recentlyUpdated: "Recently updated",
    emptyState: "No calculators are available yet.",
    freeLibrary: "Free calculator library",
    latency: "LATENCY",
    calculatorsLabel: "CALCULATORS",
    categoriesLabel: "CATEGORIES",
    popularLabel: "POPULAR",
    aboutTitle: "Free calculators with formulas,",
    aboutSubtitle: "examples, and FAQs.",
    aboutP1: "DTECALC is a free online calculator site for everyday questions about money, health, math, dates, unit conversions, business metrics, and AI token costs.",
    aboutP2: "Each calculator page is designed around a specific search intent, with a clear formula, practical example, related calculators, and helpful FAQ answers.",
    aboutButton: "About DTECALC",
    indexTitle: "Calculator index",
    indexFreeTools: "Free tools",
    indexCategories: "Categories",
    indexBlog: "Blog guides",
    popularSearchesTitle: "Popular searches",
  },
  search: {
    title: "Search calculators",
    placeholder: "Search by calculator name or topic",
    submit: "Search",
    clear: "Clear search",
    results: "Search results",
    resultCount: "{count} results",
    noResults: "No calculators matched your search.",
  },
  calculatorWidget: {
    title: "Calculator Widget",
    description: "Enter values and calculate the result instantly.",
    inputLabel: "Value",
    calculate: "Calculate",
    calculating: "Calculating...",
    reset: "Reset",
    result: "Result",
    results: "Results",
    error: "Check the highlighted fields and try again.",
    required: "This field is required.",
    copyResult: "Copy result",
    min: "Min",
    max: "Max",
    unit: "Unit",
    configurationUnavailable: "Configuration unavailable",
    notRegisteredYet: "This calculator does not have a registered engine configuration yet.",
    resultCard: "Result Card",
    enterValues: "Enter values and calculate to see the generated result fields here.",
    pleaseFix: "Please fix these fields.",
    formulaExplanation: "Formula Explanation",
    howItWorks: "How It Works",
    examples: "Examples",
    whatIsThe: "What Is the",
    commonUses: "Common Uses",
    aboutThe: "About the",
    relatedCalculators: "Related calculators",
    relatedBlogPosts: "Related blog posts",
    calculatorWidgetTitle: "Calculator Widget",
    calculatorWidgetDesc: "Use this page to review the formula, example, steps, and FAQ for the {name}. Interactive inputs are available on tools with registered calculator fields.",
    whatThisShowsTitle: "What This Calculator Shows",
    whatThisShowsDesc: "The page explains the calculation, the assumptions behind the result, and related tools you can use for comparison.",
    formulaNote: "DTECALC keeps the formula visible so you can understand how the calculator result is produced.",
  },
  languageSwitcher: {
    label: "Language",
    changeLanguage: "Change language",
    currentLanguage: "Current language",
    selectLanguage: "Select language",
    close: "Close language menu",
  },
  pages: {
    calculators: {
      eyebrow: "All calculators",
      title: "Browse the DTECALC library",
      description:
        "A growing library of finance calculators, health calculators, math calculators, conversion tools, date tools, business calculators, and AI cost calculators.",
      popularBadge: "Popular",
    },
    blog: {
      eyebrow: "Calculator blog",
      title: "Calculator guides and explainers",
      description:
        "Learn formulas, compare calculator types, and understand finance, health, math, and AI cost topics with practical examples.",
      financeGuides: "Finance Guides",
      healthGuides: "Health Guides",
      aiCostGuides: "AI Cost Guides",
      businessConversionGuides: "Business and Conversion Guides",
      mathGuides: "Math Guides",
      relatedCalculators: "Related calculators",
    },
    category: {
      eyebrow: "Category",
      titleSuffix: "Calculators",
      popularBadge: "Popular",
    },
  },
} satisfies CoreDictionary;

const spanishDictionary = {
  nav: {
    home: "Inicio",
    calculators: "Calculadoras",
    search: "Buscar",
    language: "Idioma",
  },
  footer: {
    tagline: "Calculadoras rapidas y fiables para decisiones cotidianas.",
    calculators: "Calculadoras",
    resources: "Recursos",
    privacy: "Privacidad",
    terms: "Terminos",
    copyright: "Todos los derechos reservados.",
  },
  home: {
    title: "Calculadoras en linea para respuestas claras",
    subtitle:
      "Explora calculadoras practicas para finanzas, salud, fechas, porcentajes y conversiones diarias.",
    searchPlaceholder: "Buscar calculadoras",
    popularCalculators: "Calculadoras populares",
    popularCalculatorsDesc: "Comienza con herramientas de alta demanda para prestamos, hipotecas, IMC, edad, porcentajes, GPA, ROI, intereses y costos de IA.",
    allCalculators: "Todas las calculadoras",
    featuredTools: "Herramientas destacadas",
    recentlyUpdated: "Actualizadas recientemente",
    emptyState: "Todavia no hay calculadoras disponibles.",
    freeLibrary: "Biblioteca de calculadoras gratis",
    latency: "LATENCIA",
    calculatorsLabel: "CALCULADORAS",
    categoriesLabel: "CATEGORIAS",
    popularLabel: "POPULAR",
    aboutTitle: "Calculadoras gratis con formulas,",
    aboutSubtitle: "ejemplos y FAQs.",
    aboutP1: "DTECALC es un sitio de calculadoras gratuitas para preguntas diarias sobre dinero, salud, matematicas, fechas, conversiones, metricas empresariales y costos de IA.",
    aboutP2: "Cada pagina de calculadora esta diseñada en torno a una intencion de busqueda especifica, con una formula clara, ejemplos practicos, calculadoras relacionadas y respuestas FAQ utiles.",
    aboutButton: "Acerca de DTECALC",
    indexTitle: "Indice de calculadoras",
    indexFreeTools: "Herramientas gratis",
    indexCategories: "Categorias",
    indexBlog: "Guias de blog",
    popularSearchesTitle: "Busquedas populares",
  },
  search: {
    title: "Buscar calculadoras",
    placeholder: "Busca por nombre de calculadora o tema",
    submit: "Buscar",
    clear: "Limpiar busqueda",
    results: "Resultados de busqueda",
    resultCount: "{count} resultados",
    noResults: "Ninguna calculadora coincide con tu busqueda.",
  },
  calculatorWidget: {
    title: "Widget de Calculadora",
    description: "Introduce valores y calcula el resultado al instante.",
    inputLabel: "Valor",
    calculate: "Calcular",
    calculating: "Calculando...",
    reset: "Restablecer",
    result: "Resultado",
    results: "Resultados",
    error: "Revisa los campos resaltados e intentalo de nuevo.",
    required: "Este campo es obligatorio.",
    copyResult: "Copiar resultado",
    min: "Min",
    max: "Max",
    unit: "Unidad",
    configurationUnavailable: "Configuracion no disponible",
    notRegisteredYet: "Esta calculadora aun no tiene una configuracion de motor registrada.",
    resultCard: "Tarjeta de Resultados",
    enterValues: "Introduce valores y calcula para ver los campos de resultados generados aqui.",
    pleaseFix: "Por favor, corrige estos campos.",
    formulaExplanation: "Explicacion de la Formula",
    howItWorks: "Como Funciona",
    examples: "Ejemplos",
    whatIsThe: "¿Que es el",
    commonUses: "Usos Comunes",
    aboutThe: "Acerca del",
    relatedCalculators: "Calculadoras relacionadas",
    relatedBlogPosts: "Guias de blog relacionadas",
    calculatorWidgetTitle: "Widget de Calculadora",
    calculatorWidgetDesc: "Utiliza esta pagina para revisar la formula, ejemplos, pasos y preguntas frecuentes sobre {name}. Los controles interactivos estaran disponibles pronto.",
    whatThisShowsTitle: "Lo Que Muestra Esta Calculadora",
    whatThisShowsDesc: "La pagina explica el calculo, las suposiciones detras del resultado y las herramientas relacionadas que puedes usar para comparar.",
    formulaNote: "DTECALC mantiene la formula visible para que puedas entender como se produce el resultado de la calculadora.",
  },
  languageSwitcher: {
    label: "Idioma",
    changeLanguage: "Cambiar idioma",
    currentLanguage: "Idioma actual",
    selectLanguage: "Seleccionar idioma",
    close: "Cerrar menu de idioma",
  },
  pages: {
    calculators: {
      eyebrow: "Todas las calculadoras",
      title: "Explora la biblioteca de DTECALC",
      description:
        "Una biblioteca en crecimiento con calculadoras financieras, de salud, matematicas, conversiones, fechas, negocios y costos de IA.",
      popularBadge: "Popular",
    },
    blog: {
      eyebrow: "Blog de calculadoras",
      title: "Guias y explicaciones de calculadoras",
      description:
        "Aprende formulas, compara tipos de calculadoras y entiende temas de finanzas, salud, matematicas y costos de IA con ejemplos practicos.",
      financeGuides: "Guias de finanzas",
      healthGuides: "Guias de salud",
      aiCostGuides: "Guias de costos de IA",
      businessConversionGuides: "Guias de negocios y conversiones",
      mathGuides: "Guias de matematicas",
      relatedCalculators: "Calculadoras relacionadas",
    },
    category: {
      eyebrow: "Categoria",
      titleSuffix: "Calculadoras",
      popularBadge: "Popular",
    },
  },
} satisfies CoreDictionary;

const portugueseBrazilDictionary = {
  nav: {
    home: "Inicio",
    calculators: "Calculadoras",
    search: "Buscar",
    language: "Idioma",
  },
  footer: {
    tagline: "Calculadoras rapidas e confiaveis para decisoes do dia a dia.",
    calculators: "Calculadoras",
    resources: "Recursos",
    privacy: "Privacidade",
    terms: "Termos",
    copyright: "Todos os direitos reservados.",
  },
  home: {
    title: "Calculadoras online para respostas claras",
    subtitle:
      "Explore calculadoras praticas para financas, saude, datas, porcentagens e conversoes do dia a dia.",
    searchPlaceholder: "Buscar calculadoras",
    popularCalculators: "Calculadoras populares",
    popularCalculatorsDesc: "Comece com ferramentas de alta demanda para emprestimos, hipotecas, IMC, idade, porcentagens, GPA, ROI, juros e custos de IA.",
    allCalculators: "Todas as calculadoras",
    featuredTools: "Ferramentas em destaque",
    recentlyUpdated: "Atualizadas recentemente",
    emptyState: "Ainda nao ha calculadoras disponiveis.",
    freeLibrary: "Biblioteca de calculadoras gratis",
    latency: "LATENCIA",
    calculatorsLabel: "CALCULADORAS",
    categoriesLabel: "CATEGORIAS",
    popularLabel: "POPULAR",
    aboutTitle: "Calculadoras gratis com formulas,",
    aboutSubtitle: "exemplos e FAQs.",
    aboutP1: "DTECALC é um site de calculadoras online gratuitas para questões do dia a dia sobre dinheiro, saúde, matemática, datas, conversões de unidades, métricas de negócios e custos de tokens de IA.",
    aboutP2: "Cada página de calculadora é projetada em torno de uma intenção de pesquisa específica, com uma fórmula clara, exemplo prático, calculadoras relacionadas e respostas úteis a perguntas frequentes.",
    aboutButton: "Sobre DTECALC",
    indexTitle: "Índice de calculadoras",
    indexFreeTools: "Ferramentas gratis",
    indexCategories: "Categorias",
    indexBlog: "Guias de blog",
    popularSearchesTitle: "Buscas populares",
  },
  search: {
    title: "Buscar calculadoras",
    placeholder: "Busque por nome da calculadora ou assunto",
    submit: "Buscar",
    clear: "Limpar busca",
    results: "Resultados da busca",
    resultCount: "{count} resultados",
    noResults: "Nenhuma calculadora corresponde a sua busca.",
  },
  calculatorWidget: {
    title: "Widget da Calculadora",
    description: "Informe os valores e calcule o resultado instantaneamente.",
    inputLabel: "Valor",
    calculate: "Calcular",
    calculating: "Calculando...",
    reset: "Redefinir",
    result: "Resultado",
    results: "Resultados",
    error: "Revise os campos destacados e tente novamente.",
    required: "Este campo e obrigatorio.",
    copyResult: "Copiar resultado",
    min: "Min",
    max: "Max",
    unit: "Unid",
    configurationUnavailable: "Configuracao indisponivel",
    notRegisteredYet: "Esta calculadora ainda não possui uma configuração de motor registrada.",
    resultCard: "Cartao de Resultados",
    enterValues: "Insira os valores e calcule para ver os campos de resultados gerados aqui.",
    pleaseFix: "Por favor, corrija estes campos.",
    formulaExplanation: "Explicacao da Formula",
    howItWorks: "Como Funciona",
    examples: "Exemplos",
    whatIsThe: "O Que E O",
    commonUses: "Usos Comuns",
    aboutThe: "Sobre O",
    relatedCalculators: "Calculadoras relacionadas",
    relatedBlogPosts: "Posts de blog relacionados",
    calculatorWidgetTitle: "Widget da Calculadora",
    calculatorWidgetDesc: "Use esta pagina para rever a formula, exemplo, etapas e perguntas frequentes para {name}. As entradas interativas estao disponiveis em ferramentas com campos de calculadora registrados.",
    whatThisShowsTitle: "O Que Esta Calculadora Mostra",
    whatThisShowsDesc: "A pagina explica o calculo, as suposicoes por tras do resultado e as ferramentas relacionadas que voce pode usar para comparacao.",
    formulaNote: "A DTECALC mantém a fórmula visível para que você possa entender como o resultado da calculadora é produzido.",
  },
  languageSwitcher: {
    label: "Idioma",
    changeLanguage: "Alterar idioma",
    currentLanguage: "Idioma atual",
    selectLanguage: "Selecionar idioma",
    close: "Fechar menu de idioma",
  },
  pages: {
    calculators: {
      eyebrow: "Todas as calculadoras",
      title: "Explore a biblioteca da DTECALC",
      description:
        "Uma biblioteca em expansao com calculadoras de financas, saude, matematica, conversoes, datas, negocios e custos de IA.",
      popularBadge: "Popular",
    },
    blog: {
      eyebrow: "Blog de calculadoras",
      title: "Guias e explicacoes de calculadoras",
      description:
        "Aprenda formulas, compare tipos de calculadoras e entenda financas, saude, matematica e custos de IA com exemplos praticos.",
      financeGuides: "Guias de financas",
      healthGuides: "Guias de saude",
      aiCostGuides: "Guias de custos de IA",
      businessConversionGuides: "Guias de negocios e conversoes",
      mathGuides: "Guias de matematica",
      relatedCalculators: "Calculadoras relacionadas",
    },
    category: {
      eyebrow: "Categoria",
      titleSuffix: "Calculadoras",
      popularBadge: "Popular",
    },
  },
} satisfies CoreDictionary;

const indonesianDictionary = {
  nav: {
    home: "Beranda",
    calculators: "Kalkulator",
    search: "Cari",
    language: "Bahasa",
  },
  footer: {
    tagline: "Kalkulator cepat dan andal untuk keputusan sehari-hari.",
    calculators: "Kalkulator",
    resources: "Sumber daya",
    privacy: "Privasi",
    terms: "Ketentuan",
    copyright: "Hak cipta dilindungi.",
  },
  home: {
    title: "Kalkulator online untuk jawaban yang jelas",
    subtitle:
      "Jelajahi kalkulator praktis untuk keuangan, kesehatan, tanggal, persentase, dan konversi harian.",
    searchPlaceholder: "Cari kalkulator",
    popularCalculators: "Kalkulator populer",
    popularCalculatorsDesc: "Mulai dengan alat dengan permintaan tinggi untuk pinjaman, hipotek, BMI, usia, persentase, IPK, ROI, bunga, dan biaya AI.",
    allCalculators: "Semua kalkulator",
    featuredTools: "Alat unggulan",
    recentlyUpdated: "Baru diperbarui",
    emptyState: "Belum ada kalkulator yang tersedia.",
    freeLibrary: "Pustaka kalkulator gratis",
    latency: "LATENSI",
    calculatorsLabel: "KALKULATOR",
    categoriesLabel: "KATEGORI",
    popularLabel: "POPULER",
    aboutTitle: "Kalkulator gratis dengan rumus,",
    aboutSubtitle: "contoh, dan FAQ.",
    aboutP1: "DTECALC adalah situs kalkulator online gratis untuk pertanyaan sehari-hari tentang uang, kesehatan, matematika, tanggal, konversi unit, metrik bisnis, dan biaya token AI.",
    aboutP2: "Setiap halaman kalkulator dirancang seputar tujuan pencarian tertentu, dengan rumus yang jelas, contoh praktis, kalkulator terkait, dan jawaban FAQ yang bermanfaat.",
    aboutButton: "Tentang DTECALC",
    indexTitle: "Indeks kalkulator",
    indexFreeTools: "Alat gratis",
    indexCategories: "Kategori",
    indexBlog: "Panduan blog",
    popularSearchesTitle: "Pencarian populer",
  },
  search: {
    title: "Cari kalkulator",
    placeholder: "Cari berdasarkan nama kalkulator atau topik",
    submit: "Cari",
    clear: "Bersihkan pencarian",
    results: "Hasil pencarian",
    resultCount: "{count} hasil",
    noResults: "Tidak ada kalkulator yang cocok dengan pencarian Anda.",
  },
  calculatorWidget: {
    title: "Widget Kalkulator",
    description: "Masukkan nilai dan hitung hasilnya secara instan.",
    inputLabel: "Nilai",
    calculate: "Hitung",
    calculating: "Menghitung...",
    reset: "Atur ulang",
    result: "Hasil",
    results: "Hasil",
    error: "Periksa kolom yang ditandai lalu coba lagi.",
    required: "Kolom ini wajib diisi.",
    copyResult: "Salin hasil",
    min: "Min",
    max: "Max",
    unit: "Unit",
    configurationUnavailable: "Konfigurasi tidak tersedia",
    notRegisteredYet: "Kalkulator ini belum memiliki konfigurasi mesin terdaftar.",
    resultCard: "Kartu Hasil",
    enterValues: "Masukkan nilai dan hitung untuk melihat bidang hasil yang dihasilkan di sini.",
    pleaseFix: "Harap perbaiki bidang ini.",
    formulaExplanation: "Penjelasan Rumus",
    howItWorks: "Cara Kerjanya",
    examples: "Contoh",
    whatIsThe: "Apa Itu",
    commonUses: "Penggunaan Umum",
    aboutThe: "Tentang",
    relatedCalculators: "Kalkulator terkait",
    relatedBlogPosts: "Postingan blog terkait",
    calculatorWidgetTitle: "Widget Kalkulator",
    calculatorWidgetDesc: "Gunakan halaman ini untuk meninjau rumus, contoh, langkah, dan FAQ untuk {name}. Input interaktif tersedia pada alat dengan bidang kalkulator yang terdaftar.",
    whatThisShowsTitle: "Apa yang Ditunjukkan Kalkulator Ini",
    whatThisShowsDesc: "Halaman ini menjelaskan perhitungan, asumsi di balik hasil, dan alat terkait yang dapat Anda gunakan untuk perbandingan.",
    formulaNote: "DTECALC menjaga agar rumus tetap terlihat sehingga Anda dapat memahami bagaimana hasil kalkulator dihasilkan.",
  },
  languageSwitcher: {
    label: "Bahasa",
    changeLanguage: "Ubah bahasa",
    currentLanguage: "Bahasa saat ini",
    selectLanguage: "Pilih bahasa",
    close: "Tutup menu bahasa",
  },
  pages: {
    calculators: {
      eyebrow: "Semua kalkulator",
      title: "Jelajahi pustaka DTECALC",
      description:
        "Pustaka yang terus berkembang dengan kalkulator keuangan, kesehatan, matematika, konversi, tanggal, bisnis, dan biaya AI.",
      popularBadge: "Populer",
    },
    blog: {
      eyebrow: "Blog kalkulator",
      title: "Panduan dan penjelasan kalkulator",
      description:
        "Pelajari rumus, bandingkan jenis kalkulator, dan pahami topik keuangan, kesehatan, matematika, serta biaya AI dengan contoh praktis.",
      financeGuides: "Panduan keuangan",
      healthGuides: "Panduan kesehatan",
      aiCostGuides: "Panduan biaya AI",
      businessConversionGuides: "Panduan bisnis dan konversi",
      mathGuides: "Panduan matematika",
      relatedCalculators: "Kalkulator terkait",
    },
    category: {
      eyebrow: "Kategori",
      titleSuffix: "Kalkulator",
      popularBadge: "Populer",
    },
  },
} satisfies CoreDictionary;

const simplifiedChineseDictionary = {
  nav: {
    home: "首页",
    calculators: "计算器",
    search: "搜索",
    language: "语言",
  },
  footer: {
    tagline: "快速可靠的计算器，帮助你处理日常决策。",
    calculators: "计算器",
    resources: "资源",
    privacy: "隐私",
    terms: "条款",
    copyright: "版权所有。",
  },
  home: {
    title: "在线计算器，给出清晰答案",
    subtitle:
      "探索适用于财务、健康、日期、百分比和日常单位换算的实用计算器。",
    searchPlaceholder: "搜索计算器",
    popularCalculators: "热门计算器",
    popularCalculatorsDesc: "从高频使用的工具开始，包括贷款、房贷、BMI、年龄、百分比、GPA、ROI、利息以及大模型 AI 成本计算器。",
    allCalculators: "全部计算器",
    featuredTools: "精选工具",
    recentlyUpdated: "最近更新",
    emptyState: "暂无可用计算器。",
    freeLibrary: "免费在线计算器库",
    latency: "延迟",
    calculatorsLabel: "计算器总数",
    categoriesLabel: "全部分类",
    popularLabel: "热门",
    aboutTitle: "免费计算器，提供公式、",
    aboutSubtitle: "示例以及常见问题解答。",
    aboutP1: "DTECALC 是一个免费的在线计算器网站，致力于解答关于金钱、健康、数学、日期、单位换算、商业指标以及 AI Token 成本等日常问题。",
    aboutP2: "每一个计算器页面都围绕特定的搜索意图而设计，配备清晰的公式原理、实际示例、相关计算器推荐，以及详尽的常见问题解答。",
    aboutButton: "关于 DTECALC",
    indexTitle: "计算器索引",
    indexFreeTools: "免费工具",
    indexCategories: "分类体系",
    indexBlog: "博客指南",
    popularSearchesTitle: "热门搜索",
  },
  search: {
    title: "搜索计算器",
    placeholder: "按计算器名称或主题搜索",
    submit: "搜索",
    clear: "清除搜索",
    results: "搜索结果",
    resultCount: "{count} 个结果",
    noResults: "没有匹配你搜索的计算器。",
  },
  calculatorWidget: {
    title: "计算器组件",
    description: "输入数值，即刻计算结果。",
    inputLabel: "数值",
    calculate: "计算",
    calculating: "计算中...",
    reset: "重置",
    result: "结果",
    results: "结果",
    error: "请检查标记的字段后重试。",
    required: "此字段为必填项。",
    copyResult: "复制结果",
    min: "最小",
    max: "最大",
    unit: "单位",
    configurationUnavailable: "计算器配置不可用",
    notRegisteredYet: "此计算器尚未注册交互计算引擎配置。",
    resultCard: "计算结果",
    enterValues: "在左侧输入数值点击计算后，结果将显示在这里。",
    pleaseFix: "请修正以下错误：",
    formulaExplanation: "公式原理",
    howItWorks: "计算步骤",
    examples: "实际示例",
    whatIsThe: "什么是",
    commonUses: "常见应用场景",
    aboutThe: "关于",
    relatedCalculators: "相关计算器",
    relatedBlogPosts: "相关深度指南",
    calculatorWidgetTitle: "计算器组件",
    calculatorWidgetDesc: "你可以在此页面查看 {name} 的公式、示例、步骤和常见问题。具有交互式输入框的计算器即将上线。",
    whatThisShowsTitle: "此计算器显示的内容",
    whatThisShowsDesc: "本页解释了计算逻辑、结果背后的假设以及可供你比较的相关工具。",
    formulaNote: "DTECALC 会始终展示公式，方便你了解计算器结果是如何得出的。",
  },
  languageSwitcher: {
    label: "语言",
    changeLanguage: "更改语言",
    currentLanguage: "当前语言",
    selectLanguage: "选择语言",
    close: "关闭语言菜单",
  },
  pages: {
    calculators: {
      eyebrow: "全部计算器",
      title: "浏览 DTECALC 工具库",
      description:
        "不断扩充的工具库，涵盖财务、健康、数学、单位换算、日期、商业和 AI 成本计算器。",
      popularBadge: "热门",
    },
    blog: {
      eyebrow: "计算器博客",
      title: "计算器指南与公式说明",
      description:
        "通过实用示例学习公式、比较计算器类型，并理解财务、健康、数学和 AI 成本主题。",
      financeGuides: "财务指南",
      healthGuides: "健康指南",
      aiCostGuides: "AI 成本指南",
      businessConversionGuides: "商业与换算指南",
      mathGuides: "数学指南",
      relatedCalculators: "相关计算器",
    },
    category: {
      eyebrow: "分类",
      titleSuffix: "计算器",
      popularBadge: "热门",
    },
  },
} satisfies CoreDictionary;

const traditionalChineseDictionary = {
  nav: {
    home: "首頁",
    calculators: "計算器",
    search: "搜尋",
    language: "語言",
  },
  footer: {
    tagline: "快速可靠的計算器，協助你處理日常決策。",
    calculators: "計算器",
    resources: "資源",
    privacy: "隱私",
    terms: "條款",
    copyright: "版權所有。",
  },
  home: {
    title: "線上計算器，提供清楚答案",
    subtitle:
      "探索適用於財務、健康、日期、百分比和日常單位換算的實用計算器。",
    searchPlaceholder: "搜尋計算器",
    popularCalculators: "熱門計算器",
    popularCalculatorsDesc: "從高頻使用的工具開始，包含貸款、房貸、BMI、年齡、百分比、GPA、ROI、利息以及大語言模型 AI 成本計算器。",
    allCalculators: "全部計算器",
    featuredTools: "精選工具",
    recentlyUpdated: "最近更新",
    emptyState: "目前沒有可用的計算器。",
    freeLibrary: "免費線上計算器庫",
    latency: "延遲",
    calculatorsLabel: "計算器總數",
    categoriesLabel: "全部分類",
    popularLabel: "熱門",
    aboutTitle: "免費計算器，提供公式、",
    aboutSubtitle: "範例以及常見問題解答。",
    aboutP1: "DTECALC 是一個免費的線上計算器網站，致力於解答關於金錢、健康、數學、日期、單位換算、商業指標以及 AI Token 成本等日常問題。",
    aboutP2: "每一個計算器頁面都圍繞特定的搜尋意圖而設計，配備清晰的公式原理、實際範例、相關計算器推薦，以及詳盡的常見問題解答。",
    aboutButton: "關於 DTECALC",
    indexTitle: "計算器索引",
    indexFreeTools: "免費工具",
    indexCategories: "分類體系",
    indexBlog: "部落格指南",
    popularSearchesTitle: "熱門搜尋",
  },
  search: {
    title: "搜尋計算器",
    placeholder: "依計算器名稱或主題搜尋",
    submit: "搜尋",
    clear: "清除搜尋",
    results: "搜尋結果",
    resultCount: "{count} 個結果",
    noResults: "沒有符合你搜尋條件的計算器。",
  },
  calculatorWidget: {
    title: "計算器元件",
    description: "輸入數值，即可立即計算結果。",
    inputLabel: "數值",
    calculate: "計算",
    calculating: "計算中...",
    reset: "重設",
    result: "結果",
    results: "結果",
    error: "請檢查標示的欄位後再試一次。",
    required: "此欄位為必填。",
    copyResult: "複製結果",
    min: "最小",
    max: "最大",
    unit: "單位",
    configurationUnavailable: "計算器設定無法使用",
    notRegisteredYet: "此計算器尚未註冊互動計算引擎設定。",
    resultCard: "計算結果",
    enterValues: "在左側輸入數值並點擊計算後，結果將顯示在這裡。",
    pleaseFix: "請修正以下錯誤：",
    formulaExplanation: "公式原理",
    howItWorks: "計算步驟",
    examples: "實際範例",
    whatIsThe: "什麼是",
    commonUses: "常見應用場景",
    aboutThe: "關於",
    relatedCalculators: "相關計算器",
    relatedBlogPosts: "相關深度指南",
    calculatorWidgetTitle: "計算器元件",
    calculatorWidgetDesc: "你可以在此頁面查看 {name} 的公式、範例、步驟和常見問題。具有互動式輸入框的計算器即將上線。",
    whatThisShowsTitle: "此計算器顯示的內容",
    whatThisShowsDesc: "本頁解釋計算邏輯、結果背後的假設，以及可供你比較的相關工具。",
    formulaNote: "DTECALC 會始終展示公式，方便你了解計算器結果是如何得出的。",
  },
  languageSwitcher: {
    label: "語言",
    changeLanguage: "變更語言",
    currentLanguage: "目前語言",
    selectLanguage: "選擇語言",
    close: "關閉語言選單",
  },
  pages: {
    calculators: {
      eyebrow: "全部計算器",
      title: "瀏覽 DTECALC 工具庫",
      description:
        "持續擴充的工具庫，涵蓋財務、健康、數學、單位換算、日期、商業和 AI 成本計算器。",
      popularBadge: "熱門",
    },
    blog: {
      eyebrow: "計算器部落格",
      title: "計算器指南與公式說明",
      description:
        "透過實用範例學習公式、比較計算器類型，並理解財務、健康、數學和 AI 成本主題。",
      financeGuides: "財務指南",
      healthGuides: "健康指南",
      aiCostGuides: "AI 成本指南",
      businessConversionGuides: "商業與換算指南",
      mathGuides: "數學指南",
      relatedCalculators: "相關計算器",
    },
    category: {
      eyebrow: "分類",
      titleSuffix: "計算器",
      popularBadge: "熱門",
    },
  },
} satisfies CoreDictionary;

export const dictionaries = {
  en: englishDictionary,
  es: spanishDictionary,
  "pt-BR": portugueseBrazilDictionary,
  id: indonesianDictionary,
  "zh-CN": simplifiedChineseDictionary,
  "zh-TW": traditionalChineseDictionary,
} satisfies Record<Locale, CoreDictionary>;

export type Dictionary = (typeof dictionaries)[typeof DEFAULT_LOCALE];

export function getDictionary(locale: Locale): CoreDictionary {
  return dictionaries[locale] ?? dictionaries[DEFAULT_LOCALE];
}
