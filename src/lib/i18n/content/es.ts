import type { BlogPostSlug, CalculatorSlug, CategorySlug } from "@/types/content";

type SeoTranslation = {
  readonly name: string;
  readonly description: string;
  readonly seoTitle: string;
  readonly seoDescription: string;
};

type BlogPostTranslation = {
  readonly title: string;
  readonly excerpt: string;
  readonly seoTitle: string;
  readonly seoDescription: string;
  readonly sections?: readonly {
    readonly heading: string;
    readonly body: readonly string[];
  }[];
};

export const spanishContentTranslations = {
  categories: {
    finance: {
      name: "Finanzas",
      description: "Planifica prestamos, hipotecas, inversiones, impuestos, salario y decisiones financieras a largo plazo.",
      seoTitle: "Calculadoras financieras - Herramientas gratis de dinero e inversion",
      seoDescription: "Usa calculadoras financieras gratis para prestamos, hipotecas, interes compuesto, ROI, salario, impuestos y jubilacion.",
    },
    health: {
      name: "Salud",
      description: "Estima metricas de salud cotidianas como BMI, BMR, calorias, grasa corporal e hidratacion.",
      seoTitle: "Calculadoras de salud - BMI, BMR, calorias y mas",
      seoDescription: "Calcula BMI, BMR, calorias diarias, grasa corporal e ingesta de agua con herramientas de salud gratis.",
    },
    "date-time": {
      name: "Fecha y hora",
      description: "Trabaja con edades, duraciones, semanas y diferencias entre fechas de forma rapida y precisa.",
      seoTitle: "Calculadoras de fecha y hora - Edad, duracion y semanas",
      seoDescription: "Encuentra edades, dias entre fechas, duraciones y numeros de semana con calculadoras gratis de fecha y hora.",
    },
    math: {
      name: "Matematicas",
      description: "Resuelve calculos comunes de porcentajes, fracciones, GPA y promedios.",
      seoTitle: "Calculadoras matematicas - Porcentaje, fraccion, GPA y promedio",
      seoDescription: "Usa calculadoras matematicas gratis para porcentajes, fracciones, GPA, promedios y comprobaciones diarias.",
    },
    conversion: {
      name: "Conversion",
      description: "Convierte unidades comunes de peso, longitud, distancia y temperatura.",
      seoTitle: "Calculadoras de conversion de unidades - Peso, longitud, distancia y temperatura",
      seoDescription: "Convierte kg a lbs, cm a pulgadas, millas a km y Celsius a Fahrenheit con herramientas gratis.",
    },
    business: {
      name: "Negocio",
      description: "Calcula beneficio, ingresos, punto de equilibrio, CAC y LTV para planificacion empresarial.",
      seoTitle: "Calculadoras de negocio - Beneficio, ingresos, CAC y LTV",
      seoDescription: "Estima beneficio, ingresos, punto de equilibrio, coste de adquisicion de clientes y valor de vida con calculadoras gratis.",
    },
    ai: {
      name: "IA",
      description: "Estima costes de tokens, gasto de API, precios de IA y presupuestos de entrenamiento con GPU.",
      seoTitle: "Calculadoras de costes de IA - Tokens, API, LLM y GPU",
      seoDescription: "Estima costes de OpenAI, uso de tokens de Claude, gasto LLM, coste de entrenamiento GPU y precios de productos de IA.",
    },
  },
  calculators: {
    "loan-calculator": {
      name: "Calculadora de prestamos",
      description: "Estima pagos mensuales, interes total y coste de liquidacion de un prestamo.",
      seoTitle: "Calculadora de prestamos - Calculadora online gratis",
      seoDescription: "Estima pagos mensuales, interes total y coste de liquidacion de un prestamo.",
    },
    "mortgage-calculator": {
      name: "Calculadora de hipotecas",
      description: "Calcula pagos de vivienda con principal, interes, impuestos y seguro.",
      seoTitle: "Calculadora de hipotecas - Calculadora online gratis",
      seoDescription: "Calcula pagos de vivienda con principal, interes, impuestos y seguro.",
    },
    "car-loan-calculator": {
      name: "Calculadora de prestamo de coche",
      description: "Estima pagos mensuales de auto, interes total y coste antes de comprar un coche.",
      seoTitle: "Calculadora de prestamo de coche - Calculadora online gratis",
      seoDescription: "Estima pagos mensuales de auto, interes total y coste antes de comprar un coche.",
    },
    "interest-calculator": {
      name: "Calculadora de interes",
      description: "Calcula interes simple, interes compuesto y crecimiento total con el tiempo.",
      seoTitle: "Calculadora de interes - Calculadora online gratis",
      seoDescription: "Calcula interes simple, interes compuesto y crecimiento total con el tiempo.",
    },
    "compound-interest-calculator": {
      name: "Calculadora de interes compuesto",
      description: "Proyecta el crecimiento del ahorro desde principal, aportes, tasa y tiempo.",
      seoTitle: "Calculadora de interes compuesto - Calculadora online gratis",
      seoDescription: "Proyecta el crecimiento del ahorro desde principal, aportes, tasa y tiempo.",
    },
    "investment-calculator": {
      name: "Calculadora de inversion",
      description: "Pronostica el valor de una inversion con aportes, rendimiento y horizonte.",
      seoTitle: "Calculadora de inversion - Calculadora online gratis",
      seoDescription: "Pronostica el valor de una inversion con aportes, rendimiento y horizonte.",
    },
    "roi-calculator": {
      name: "Calculadora de ROI",
      description: "Mide el retorno de inversion como porcentaje del coste original.",
      seoTitle: "Calculadora de ROI - Calculadora online gratis",
      seoDescription: "Mide el retorno de inversion como porcentaje del coste original.",
    },
    "retirement-calculator": {
      name: "Calculadora de jubilacion",
      description: "Estima necesidades de ahorro para jubilacion y valor proyectado de cartera.",
      seoTitle: "Calculadora de jubilacion - Calculadora online gratis",
      seoDescription: "Estima necesidades de ahorro para jubilacion y valor proyectado de cartera.",
    },
    "salary-calculator": {
      name: "Calculadora de salario",
      description: "Convierte salario, pago por hora y periodos de pago para planificar ingresos.",
      seoTitle: "Calculadora de salario - Calculadora online gratis",
      seoDescription: "Convierte salario, pago por hora y periodos de pago para planificar ingresos.",
    },
    "tax-calculator": {
      name: "Calculadora de impuestos",
      description: "Estima impuesto sobre la renta, tasa efectiva e ingresos despues de impuestos.",
      seoTitle: "Calculadora de impuestos - Calculadora online gratis",
      seoDescription: "Estima impuesto sobre la renta, tasa efectiva e ingresos despues de impuestos.",
    },
    "bmi-calculator": {
      name: "Calculadora de BMI",
      description: "Calcula el indice de masa corporal desde altura y peso.",
      seoTitle: "Calculadora de BMI - Calculadora online gratis",
      seoDescription: "Calcula BMI desde altura y peso, revisa la formula, categorias y rango saludable de BMI.",
    },
    "bmr-calculator": {
      name: "Calculadora de BMR",
      description: "Estima la tasa metabolica basal desde edad, altura, peso y sexo.",
      seoTitle: "Calculadora de BMR - Calculadora online gratis",
      seoDescription: "Estima la tasa metabolica basal desde edad, altura, peso y sexo.",
    },
    "calories-calculator": {
      name: "Calculadora de calorias",
      description: "Estima necesidades diarias de calorias para mantenimiento, perdida o ganancia.",
      seoTitle: "Calculadora de calorias - Calculadora online gratis",
      seoDescription: "Estima necesidades diarias de calorias para mantenimiento, perdida o ganancia.",
    },
    "body-fat-calculator": {
      name: "Calculadora de grasa corporal",
      description: "Estima el porcentaje de grasa corporal usando medidas habituales.",
      seoTitle: "Calculadora de grasa corporal - Calculadora online gratis",
      seoDescription: "Estima el porcentaje de grasa corporal usando medidas habituales.",
    },
    "water-intake-calculator": {
      name: "Calculadora de ingesta de agua",
      description: "Estima la ingesta diaria de agua segun peso corporal y actividad.",
      seoTitle: "Calculadora de ingesta de agua - Calculadora online gratis",
      seoDescription: "Estima la ingesta diaria de agua segun peso corporal y actividad.",
    },
    "age-calculator": {
      name: "Calculadora de edad",
      description: "Calcula la edad exacta en anos, meses y dias.",
      seoTitle: "Calculadora de edad - Calculadora online gratis",
      seoDescription: "Calcula la edad exacta en anos, meses y dias.",
    },
    "days-between-dates": {
      name: "Dias entre fechas",
      description: "Cuenta el numero de dias entre dos fechas del calendario.",
      seoTitle: "Dias entre fechas - Calculadora online gratis",
      seoDescription: "Cuenta el numero de dias entre dos fechas del calendario.",
    },
    "time-duration-calculator": {
      name: "Calculadora de duracion",
      description: "Calcula el tiempo transcurrido entre dos horas o marcas temporales.",
      seoTitle: "Calculadora de duracion - Calculadora online gratis",
      seoDescription: "Calcula el tiempo transcurrido entre dos horas o marcas temporales.",
    },
    "week-calculator": {
      name: "Calculadora de semanas",
      description: "Encuentra numeros de semana, rangos de fechas y desplazamientos semanales.",
      seoTitle: "Calculadora de semanas - Calculadora online gratis",
      seoDescription: "Encuentra numeros de semana, rangos de fechas y desplazamientos semanales.",
    },
    "percentage-calculator": {
      name: "Calculadora de porcentajes",
      description: "Resuelve aumentos, descuentos y preguntas de parte sobre total.",
      seoTitle: "Calculadora de porcentajes - Calculadora online gratis",
      seoDescription: "Resuelve aumentos, descuentos y preguntas de parte sobre total.",
    },
    "fraction-calculator": {
      name: "Calculadora de fracciones",
      description: "Suma, resta, multiplica, divide y simplifica fracciones.",
      seoTitle: "Calculadora de fracciones - Calculadora online gratis",
      seoDescription: "Suma, resta, multiplica, divide y simplifica fracciones.",
    },
    "gpa-calculator": {
      name: "Calculadora de GPA",
      description: "Calcula el promedio GPA desde cursos, creditos y calificaciones.",
      seoTitle: "Calculadora de GPA - Calculadora online gratis",
      seoDescription: "Calcula el promedio GPA desde cursos, creditos y calificaciones.",
    },
    "average-calculator": {
      name: "Calculadora de promedio",
      description: "Encuentra la media aritmetica de una lista de numeros.",
      seoTitle: "Calculadora de promedio - Calculadora online gratis",
      seoDescription: "Encuentra la media aritmetica de una lista de numeros.",
    },
    "kg-to-lbs": {
      name: "KG a LBS",
      description: "Convierte kilogramos a libras al instante.",
      seoTitle: "KG a LBS - Calculadora online gratis",
      seoDescription: "Convierte kilogramos a libras al instante.",
    },
    "cm-to-inches": {
      name: "CM a pulgadas",
      description: "Convierte centimetros a pulgadas para medidas y dimensiones.",
      seoTitle: "CM a pulgadas - Calculadora online gratis",
      seoDescription: "Convierte centimetros a pulgadas para medidas y dimensiones.",
    },
    "miles-to-km": {
      name: "Millas a KM",
      description: "Convierte millas a kilometros para planificar distancias.",
      seoTitle: "Millas a KM - Calculadora online gratis",
      seoDescription: "Convierte millas a kilometros para planificar distancias.",
    },
    "celsius-to-fahrenheit": {
      name: "Celsius a Fahrenheit",
      description: "Convierte temperaturas Celsius a Fahrenheit.",
      seoTitle: "Celsius a Fahrenheit - Calculadora online gratis",
      seoDescription: "Convierte temperaturas Celsius a Fahrenheit.",
    },
    "profit-calculator": {
      name: "Calculadora de beneficio",
      description: "Calcula el beneficio desde ingresos y costes.",
      seoTitle: "Calculadora de beneficio - Calculadora online gratis",
      seoDescription: "Calcula el beneficio desde ingresos y costes.",
    },
    "revenue-calculator": {
      name: "Calculadora de ingresos",
      description: "Estima ingresos desde precio, cantidad y volumen de ventas.",
      seoTitle: "Calculadora de ingresos - Calculadora online gratis",
      seoDescription: "Estima ingresos desde precio, cantidad y volumen de ventas.",
    },
    "break-even-calculator": {
      name: "Calculadora de punto de equilibrio",
      description: "Encuentra el volumen de ventas necesario para cubrir costes fijos y variables.",
      seoTitle: "Calculadora de punto de equilibrio - Calculadora online gratis",
      seoDescription: "Encuentra el volumen de ventas necesario para cubrir costes fijos y variables.",
    },
    "cac-calculator": {
      name: "Calculadora de CAC",
      description: "Calcula el coste de adquisicion de clientes desde gasto de ventas y marketing.",
      seoTitle: "Calculadora de CAC - Calculadora online gratis",
      seoDescription: "Calcula el coste de adquisicion de clientes desde gasto de ventas y marketing.",
    },
    "ltv-calculator": {
      name: "Calculadora de LTV",
      description: "Estima el valor de vida del cliente desde ingresos, margen y retencion.",
      seoTitle: "Calculadora de LTV - Calculadora online gratis",
      seoDescription: "Estima el valor de vida del cliente desde ingresos, margen y retencion.",
    },
    "openai-cost-calculator": {
      name: "Calculadora de coste de OpenAI",
      description: "Estima coste de API de OpenAI desde tokens, precios de modelo y volumen de uso.",
      seoTitle: "Calculadora de coste de OpenAI - Calculadora online gratis",
      seoDescription: "Estima coste de API de OpenAI desde tokens, precios de modelo y volumen de uso.",
    },
    "claude-token-calculator": {
      name: "Calculadora de tokens de Claude",
      description: "Estima uso y coste de tokens de Claude para prompts y respuestas.",
      seoTitle: "Calculadora de tokens de Claude - Calculadora online gratis",
      seoDescription: "Estima uso y coste de tokens de Claude para prompts y respuestas.",
    },
    "llm-cost-calculator": {
      name: "Calculadora de coste LLM",
      description: "Compara costes de grandes modelos de lenguaje entre precios de tokens y cargas de trabajo.",
      seoTitle: "Calculadora de coste LLM - Calculadora online gratis",
      seoDescription: "Compara costes de grandes modelos de lenguaje entre precios de tokens y cargas de trabajo.",
    },
    "gpu-training-cost-calculator": {
      name: "Calculadora de coste de entrenamiento GPU",
      description: "Estima coste de entrenamiento GPU desde precio de hardware, duracion y utilizacion.",
      seoTitle: "Calculadora de coste de entrenamiento GPU - Calculadora online gratis",
      seoDescription: "Estima coste de entrenamiento GPU desde precio de hardware, duracion y utilizacion.",
    },
    "ai-pricing-calculator": {
      name: "Calculadora de precios de IA",
      description: "Planifica precios de productos de IA desde coste de uso, margen y volumen de clientes.",
      seoTitle: "Calculadora de precios de IA - Calculadora online gratis",
      seoDescription: "Planifica precios de productos de IA desde coste de uso, margen y volumen de clientes.",
    },
  },
  blogPosts: {
    "how-to-calculate-roi": {
      title: "Como calcular el ROI",
      excerpt: "Aprende la formula de ROI, como calcular el retorno de inversion y cuando el ROI puede ser enganoso.",
      seoTitle: "Como calcular el ROI - Formula, ejemplos y calculadora",
      seoDescription: "Aprende a calcular ROI con la formula, ejemplos practicos y una calculadora gratis.",
      sections: [
        {
          heading: "Que significa ROI",
          body: [
            "El retorno de inversion compara la ganancia de una inversion con el coste original. El resultado suele mostrarse como porcentaje para comparar mejor inversiones con importes distintos.",
            "El ROI es popular porque es sencillo. Una empresa puede usarlo para una campana de marketing, un propietario para mejoras de una vivienda y un inversor para comparar oportunidades.",
          ],
        },
        {
          heading: "Formula de ROI",
          body: [
            "La formula basica es ROI = (gain - cost) / cost x 100. Si el resultado es positivo, la inversion devolvio mas de lo que costo. Si es negativo, perdio valor frente al gasto original.",
            "Un buen calculo de ROI debe usar entradas coherentes. Incluye costes directos, excluye costes no relacionados y compara los periodos con cuidado.",
          ],
        },
        {
          heading: "Ejemplo",
          body: [
            "Si gastas $2,000 en una campana y obtienes $2,800 de ganancia neta, el ROI es (2,800 - 2,000) / 2,000 x 100, o 40%. Usa la calculadora de ROI para probar ganancias, costes y escenarios.",
          ],
        },
      ],
    },
    "what-is-compound-interest": {
      title: "Que es el interes compuesto",
      excerpt: "Entiende el interes compuesto, la frecuencia de capitalizacion y por que el tiempo cambia el crecimiento del ahorro.",
      seoTitle: "Que es el interes compuesto - Formula y ejemplos",
      seoDescription: "Aprende que es el interes compuesto, como funciona la formula y como estimar el crecimiento del ahorro.",
      sections: [
        {
          heading: "Definicion de interes compuesto",
          body: [
            "El interes compuesto significa que el interes ganado se suma al saldo, de modo que el interes futuro se calcula sobre el principal original y el interes anterior.",
            "Es diferente del interes simple, donde el interes se calcula solo sobre el principal original.",
          ],
        },
        {
          heading: "Formula de interes compuesto",
          body: [
            "Una formula comun es A = P(1 + r/n)^(nt). P es principal, r es la tasa anual, n son los periodos de capitalizacion por ano y t es el tiempo en anos.",
            "Una capitalizacion mas frecuente puede aumentar el saldo final, pero el tiempo y la tasa suelen tener el mayor impacto.",
          ],
        },
        {
          heading: "Por que importa",
          body: [
            "El interes compuesto importa en ahorro, inversion y deuda. Puede ayudar a que una inversion crezca, pero tambien puede encarecer saldos impagados con el tiempo.",
          ],
        },
      ],
    },
    "mortgage-vs-loan": {
      title: "Hipoteca vs prestamo",
      excerpt: "Compara hipotecas y prestamos generales, incluidos garantia, plazos, pagos e interes.",
      seoTitle: "Hipoteca vs prestamo - Diferencias clave y calculadoras",
      seoDescription: "Entiende la diferencia entre una hipoteca y un prestamo, y compara pagos con calculadoras gratis.",
      sections: [
        {
          heading: "La diferencia corta",
          body: [
            "Una hipoteca es un tipo concreto de prestamo usado para comprar bienes inmuebles. La propiedad suele servir como garantia. Prestamo es un termino mas amplio que incluye prestamos personales, de auto, estudiantiles, de negocio e hipotecas.",
          ],
        },
        {
          heading: "Diferencias de pago y plazo",
          body: [
            "Las hipotecas suelen tener plazos largos, como 15 o 30 anos. Otros prestamos pueden usar plazos mas cortos, comisiones distintas y reglas de aprobacion distintas.",
            "Como los plazos y tasas varian, las comparaciones de pago mensual deben usar una calculadora y no solo comparar el importe prestado.",
          ],
        },
        {
          heading: "Que calculadora usar",
          body: [
            "Usa la calculadora de hipotecas para prestamos de vivienda con costes asociados a la propiedad. Usa la calculadora de prestamos para prestamos a plazos generales y la de auto para financiar vehiculos.",
          ],
        },
      ],
    },
    "what-is-bmi": {
      title: "Que es el BMI",
      excerpt: "Aprende que significa el indice de masa corporal, como se calcula y cuando usarlo.",
      seoTitle: "Que es el BMI - Indice de masa corporal explicado",
      seoDescription: "Entiende el BMI, la formula de BMI, rangos comunes y como usar una calculadora de BMI con responsabilidad.",
      sections: [
        {
          heading: "Que mide el BMI",
          body: [
            "El Body Mass Index es un calculo de peso respecto a altura. No mide grasa corporal directamente, pero puede servir como herramienta sencilla de cribado en adultos.",
          ],
        },
        {
          heading: "Formula de BMI",
          body: [
            "La formula metrica de BMI es peso en kilogramos dividido por altura en metros al cuadrado. La version imperial multiplica el peso en libras por 703 y divide por altura en pulgadas al cuadrado.",
          ],
        },
        {
          heading: "Limites del BMI",
          body: [
            "El BMI no debe usarse como diagnostico. Masa muscular, edad, embarazo y contexto individual de salud pueden cambiar la interpretacion de una puntuacion BMI.",
          ],
        },
      ],
    },
    "bmi-chart-guide": {
      title: "Guia de tabla BMI",
      excerpt: "Lee una guia simple de categorias BMI, rango saludable y como interpretar tablas BMI.",
      seoTitle: "Guia de tabla BMI - Categorias y rango saludable",
      seoDescription: "Usa esta guia de tabla BMI para entender categorias, rango saludable y resultados de calculadora.",
      sections: [
        {
          heading: "Categorias BMI",
          body: [
            "Las categorias adultas comunes son bajo peso por debajo de 18.5, rango saludable de 18.5 a 24.9, sobrepeso de 25.0 a 29.9 y obesidad en 30.0 o mas.",
          ],
        },
        {
          heading: "Rango BMI saludable",
          body: [
            "El rango BMI saludable suele indicarse como 18.5 a 24.9 para adultos. Es una referencia poblacional de cribado, no un diagnostico medico personal.",
          ],
        },
        {
          heading: "Como usar una tabla BMI",
          body: [
            "Busca la fila de altura, cruzala con la columna de peso y compara el resultado con la categoria BMI. Una calculadora es mas rapida cuando quieres un numero exacto.",
          ],
        },
      ],
    },
    "openai-api-pricing-explained": {
      title: "Precios de la API de OpenAI explicados",
      excerpt: "Entiende los precios de OpenAI API basados en tokens y como el uso afecta al coste.",
      seoTitle: "Precios de OpenAI API explicados - Guia de coste por token",
      seoDescription: "Aprende como funcionan los precios de OpenAI API, como se cuentan los tokens y como estimar costes de uso.",
      sections: [
        {
          heading: "Como funcionan los precios de API",
          body: [
            "Los precios de OpenAI API suelen basarse en tokens procesados. Los tokens de entrada y salida pueden tener precios distintos, asi que una estimacion debe incluir tamano de prompt y respuesta.",
          ],
        },
        {
          heading: "Por que importan los tokens",
          body: [
            "Los tokens son piezas de texto. Prompts largos, salidas largas, contexto repetido y mucho volumen de solicitudes pueden aumentar la factura total.",
          ],
        },
        {
          heading: "Como estimar el coste",
          body: [
            "Usa una calculadora de coste de IA para multiplicar el volumen de tokens por las tarifas del modelo. Compara escenarios con prompts mas cortos, limites de salida mas bajos o modelos distintos antes de lanzar una carga.",
            "Los precios de modelos de OpenAI pueden cambiar, asi que verifica las tarifas actuales en la pagina oficial de precios antes de escribir, publicar o actualizar ejemplos de coste.",
          ],
        },
      ],
    },
    "how-mortgage-interest-works": {
      title: "Como funciona el interes hipotecario",
      excerpt: "Entiende el interes hipotecario, la amortizacion y los calculos de pago mensual.",
      seoTitle: "Como funciona el interes hipotecario - Guia simple",
      seoDescription: "Aprende como el interes hipotecario afecta pagos mensuales, coste total y calendarios de amortizacion.",
      sections: [
        {
          heading: "Bases del interes hipotecario",
          body: [
            "El interes hipotecario es el coste de pedir dinero para comprar una vivienda. La mayoria de hipotecas fijas son amortizadas, lo que significa que cada pago cubre interes y principal.",
          ],
        },
        {
          heading: "Amortizacion",
          body: [
            "Los primeros pagos suelen incluir mas interes porque el saldo del prestamo es mayor. Los pagos posteriores destinan mas dinero al principal.",
          ],
        },
        {
          heading: "Uso de la calculadora",
          body: [
            "Una calculadora de hipotecas ayuda a estimar principal e interes. Anade impuestos, seguro y comisiones para acercarte al pago mensual real de vivienda.",
          ],
        },
      ],
    },
    "claude-token-costs-explained": {
      title: "Costes de tokens de Claude explicados",
      excerpt: "Aprende como funcionan los precios de tokens de Claude para prompts, completions y productos de IA.",
      seoTitle: "Costes de tokens de Claude explicados - Guia de precios de IA",
      seoDescription: "Entiende costes de tokens de Claude, precios de entrada y salida, y como estimar gasto para cargas de IA.",
      sections: [
        {
          heading: "Bases del coste por token",
          body: [
            "Los costes de tokens de Claude se basan en el texto procesado por el modelo. Los tokens de entrada y salida pueden tener precios distintos, y ventanas de contexto grandes pueden aumentar el coste si se repiten a menudo.",
          ],
        },
        {
          heading: "Controles de coste",
          body: [
            "Prompts mas cortos, limites de salida ajustados, contexto reutilizable y eleccion de modelo pueden cambiar el perfil de coste total.",
          ],
        },
        {
          heading: "Estima antes de lanzar",
          body: [
            "Usa una calculadora de coste LLM para modelar volumen esperado de solicitudes, tamano de prompt, tamano de completion y tarifa de modelo antes de llegar a uso de produccion.",
            "Los precios de modelos Claude pueden cambiar, asi que verifica las tarifas actuales en la pagina oficial del proveedor antes de escribir, publicar o actualizar ejemplos de coste.",
          ],
        },
      ],
    },
    "loan-payment-calculator-estimate-monthly-payments": {
      title: "Calculadora de pago de prestamo: estima pagos mensuales",
      excerpt: "Aprende como se estiman los pagos mensuales con principal, tasa y plazo, y que puede cambiar el importe final.",
      seoTitle: "Calculadora de pago de prestamo - Estima pagos mensuales",
      seoDescription: "Entiende como estimar pagos mensuales con importe, tasa de interes y plazo, con ejemplos y cautelas practicas.",
      sections: [
        {
          heading: "Que incluye un pago mensual de prestamo",
          body: [
            "Un pago mensual suele basarse en tres entradas: importe prestado, tasa de interes y plazo de devolucion. En prestamos a plazos, el pago esta disenado para devolver interes y principal con el tiempo.",
            "Los primeros pagos suelen incluir mas interes, mientras que los posteriores se desplazan mas hacia principal. Dos prestamos con el mismo saldo pueden tener pagos distintos si cambia la tasa o el plazo.",
          ],
        },
        {
          heading: "Como estimar tu pago",
          body: [
            "Una calculadora de pago usa una formula de amortizacion para estimar un pago mensual fijo. Introduce importe, tasa anual y numero de meses, y compara escenarios.",
            "La estimacion sirve para presupuestar, pero puede no coincidir exactamente con la informacion final del prestamista. Comisiones, impuestos, seguros y promociones pueden aumentar el coste real.",
          ],
        },
        {
          heading: "Cuando la estimacion puede diferir",
          body: [
            "El resultado solo es tan preciso como sus supuestos. Tasas variables, pagos extra, cargos por mora y refinanciaciones pueden afectar al calendario real.",
            "Para hipotecas, prestamos de auto y personales, compara la estimacion con el contrato oficial. La calculadora es una herramienta de planificacion, no asesoramiento financiero o legal.",
          ],
        },
      ],
    },
    "how-to-calculate-compound-interest-formula-and-examples": {
      title: "Como calcular interes compuesto: formula y ejemplos",
      excerpt: "Entiende la formula de interes compuesto, como la frecuencia afecta al crecimiento y como leer resultados con expectativas realistas.",
      seoTitle: "Como calcular interes compuesto - Formula y ejemplos",
      seoDescription: "Aprende la formula de interes compuesto, mira ejemplos y entiende como tasa, tiempo y frecuencia afectan al crecimiento.",
      sections: [
        {
          heading: "Que significa interes compuesto",
          body: [
            "El interes compuesto significa ganar interes sobre el importe original y sobre el interes ya anadido en periodos anteriores. Con el tiempo, puede producir crecimiento mas rapido que el interes simple.",
            "El efecto se vuelve mas fuerte cuando el dinero permanece invertido mas tiempo o cuando el interes se anade mas a menudo, por ejemplo mensual en vez de anual.",
          ],
        },
        {
          heading: "La formula estandar",
          body: [
            "Una formula comun es A = P(1 + r/n)^(nt). P es principal, r es la tasa anual, n es el numero de periodos de capitalizacion por ano y t es tiempo en anos. A representa el saldo final.",
            "Si tambien haces aportes regulares, una formula basica puede no bastar. Una calculadora puede combinar crecimiento compuesto con depositos recurrentes para una estimacion mas util.",
          ],
        },
        {
          heading: "Ejemplos y limites importantes",
          body: [
            "Una tasa mas alta o un periodo mas largo puede crear una gran diferencia en el valor final aunque el importe inicial sea el mismo. Pequenos cambios en supuestos pueden afectar mucho las proyecciones a largo plazo.",
            "Las calculadoras de interes compuesto ayudan a educar y planificar, pero no garantizan resultados de inversion. Rendimientos reales, impuestos, inflacion y comisiones pueden reducir el crecimiento real.",
          ],
        },
      ],
    },
    "break-even-calculator-units-revenue-and-fixed-costs": {
      title: "Calculadora de punto de equilibrio: unidades, ingresos y costes fijos",
      excerpt: "Ve como funcionan los calculos de equilibrio, que entradas importan mas y por que los supuestos de margen cambian rapido la respuesta.",
      seoTitle: "Calculadora de punto de equilibrio - Unidades, ingresos y costes fijos",
      seoDescription: "Aprende a calcular unidades e ingresos de equilibrio con costes fijos, precio de venta y costes variables.",
      sections: [
        {
          heading: "Que significa punto de equilibrio",
          body: [
            "El punto de equilibrio es el nivel de ventas donde los ingresos totales igualan los costes totales. En ese punto la empresa no obtiene beneficio, pero tampoco opera con perdida.",
            "Suele expresarse como unidades vendidas o como ingresos necesarios. Ayuda a revisar precios, control de costes y planificacion de corto plazo.",
          ],
        },
        {
          heading: "Entradas de la calculadora",
          body: [
            "Una calculadora de equilibrio usa costes fijos, precio de venta por unidad y coste variable por unidad. La idea central es el margen de contribucion: cuanto aporta cada unidad a cubrir costes fijos tras pagar costes variables.",
            "Si el margen de contribucion es pequeno, el volumen de ventas requerido sube rapido. Cambios modestos en precio o coste pueden mover mucho el punto de equilibrio.",
          ],
        },
        {
          heading: "Como usar el resultado",
          body: [
            "El calculo es util para probar escenarios, comparar precios o estimar ventas minimas antes de lanzar un producto o entrar en un mercado.",
            "El modelo es simplificado. Puede no incluir impuestos, descuentos, estacionalidad, perdidas de inventario o varias lineas de producto, asi que tratelo como una estimacion y no como una prevision completa.",
          ],
        },
      ],
    },
    "ai-api-cost-calculator-estimate-monthly-token-spend": {
      title: "Calculadora de coste de API de IA: estima gasto mensual en tokens",
      excerpt: "Aprende a estimar costes mensuales de API de IA desde volumen de solicitudes, tokens y precios de modelo antes de una sorpresa.",
      seoTitle: "Calculadora de coste de API de IA - Estima gasto mensual en tokens",
      seoDescription: "Estima costes mensuales de API de IA combinando volumen, tokens de entrada, tokens de salida y precios del proveedor.",
      sections: [
        {
          heading: "Por que los costes de API IA son dificiles",
          body: [
            "El precio de una API de IA suele depender de tokens, no solo del numero de solicitudes. Una app de chat, bot de soporte o flujo de documentos puede encarecerse si los prompts son largos, las respuestas extensas o el uso crece deprisa.",
            "La calculadora convierte supuestos de producto en una estimacion mensual combinando solicitudes esperadas, tokens medios de entrada, tokens medios de salida y precio del modelo.",
          ],
        },
        {
          heading: "Como estimar gasto mensual",
          body: [
            "Empieza con acciones de usuario por mes y estima tokens de entrada y salida por accion. Multiplica esos tokens por las tarifas de entrada y salida del modelo elegido, y suma los resultados.",
            "Para produccion, mide prompts reales en vez de depender solo de intuiciones. Logs de prototipos, staging o beta temprana suelen mostrar mejor el uso real de tokens.",
          ],
        },
        {
          heading: "Cautelas de precios",
          body: [
            "Las tarifas, nombres de modelos y reglas pueden cambiar por region, modo batch, cache, longitud de contexto o condiciones de cuenta. Verifica siempre precios oficiales antes de publicar cifras o aprobar presupuesto.",
            "Usa la calculadora para comparar escenarios, detectar impulsores de coste y decidir si conviene recortar prompts, enrutar modelos o limitar uso.",
          ],
        },
      ],
    },
    "token-cost-calculator-input-vs-output-tokens-explained": {
      title: "Calculadora de coste de tokens: entrada vs salida explicado",
      excerpt: "Entiende la diferencia entre tokens de entrada y salida, por que se cobran aparte y como afecta a costes de IA.",
      seoTitle: "Calculadora de coste de tokens - Entrada vs salida explicado",
      seoDescription: "Aprende como los tokens de entrada y salida afectan a precios de API de IA y a estimaciones de gasto.",
      sections: [
        {
          heading: "Tokens de entrada y salida",
          body: [
            "Los tokens de entrada son lo que envias al modelo: instrucciones, mensajes, ejemplos, contexto recuperado e historial. Los tokens de salida son el texto que genera el modelo.",
            "Una calculadora separa ambos porque muchos proveedores los cobran a precios distintos. En muchos casos, los tokens generados cuestan mas que los tokens del prompt.",
          ],
        },
        {
          heading: "Por que la salida puede dominar",
          body: [
            "Respuestas largas, JSON estructurado, resumenes, codigo y razonamientos de varios pasos pueden aumentar los tokens de salida. Incluso con prompts cortos, respuestas largas repetidas elevan el coste mensual.",
            "Mide ambos lados del intercambio. Un flujo con 1000 tokens de entrada y 200 de salida tiene un perfil muy distinto a uno con 200 de entrada y 1000 de salida.",
          ],
        },
        {
          heading: "Usar estimaciones con responsabilidad",
          body: [
            "Los conteos cambian por tokenizer, idioma, formato y estructura del prompt. Trata la estimacion como orientativa salvo que use el mismo proveedor y familia de modelo prevista.",
            "Verifica tarifas oficiales y revisa si aplican cache de prompts, precios batch o lecturas cacheadas a tu carga de trabajo.",
          ],
        },
      ],
    },
    "llm-cost-calculator-compare-models-by-usage-scenario": {
      title: "Calculadora de coste LLM: compara modelos por escenario de uso",
      excerpt: "Compara costes LLM entre modelos y patrones de uso para elegir el modelo adecuado para chat, resumen, codigo o documentos.",
      seoTitle: "Calculadora de coste LLM - Compara modelos por escenario de uso",
      seoDescription: "Usa una calculadora de coste LLM para comparar precios por escenario, volumen de tokens y uso mensual esperado.",
      sections: [
        {
          heading: "El coste depende del flujo",
          body: [
            "El modelo mas barato sobre el papel no siempre es el mas barato en un flujo real. Chat de soporte, resumen de documentos, asistencia de codigo y extraccion de datos pueden usar longitudes y calidades muy distintas.",
            "Una calculadora LLM ayuda a comparar modelos por escenario, no solo por precio publicado por token.",
          ],
        },
        {
          heading: "Compara escenarios",
          body: [
            "Crea estimaciones separadas para chat corto, busqueda con contexto largo, resumen, salida de codigo, clasificacion o batch. Para cada caso, usa volumen mensual y tokens medios realistas.",
            "Asi se ve que modelo escala mejor y donde un modelo menor, prompt mas corto, contexto cacheado o routing podria reducir gasto.",
          ],
        },
        {
          heading: "Revisa precio y operacion",
          body: [
            "Los precios publicados pueden cambiar y los proveedores pueden cobrar distinto entrada, salida, cache, batch, fine-tuning o funciones premium.",
            "El coste no es el unico factor. Latencia, precision, ventana de contexto, fiabilidad, manejo de datos e integracion tambien deben influir en la eleccion.",
          ],
        },
      ],
    },
    "bmr-calculator-estimate-your-basal-metabolic-rate": {
      title: "Calculadora de BMR: estima tu tasa metabolica basal",
      excerpt: "Aprende que significa la tasa metabolica basal, como la estiman las calculadoras BMR y como usarla como punto de partida.",
      seoTitle: "Calculadora de BMR - Estima tu tasa metabolica basal",
      seoDescription: "Usa una calculadora BMR para estimar necesidades caloricas en reposo y entender sus limites.",
      sections: [
        {
          heading: "Que mide BMR",
          body: [
            "La tasa metabolica basal, o BMR, estima cuantas calorias usa el cuerpo en reposo para funciones basicas como respiracion, circulacion y regulacion de temperatura.",
            "Una calculadora BMR suele usar edad, sexo, altura y peso. Sirve para orientarse, pero no mide directamente el metabolismo.",
          ],
        },
        {
          heading: "Como usar la estimacion",
          body: [
            "BMR ayuda a separar necesidades basales de necesidades diarias totales. Movimiento, ejercicio, trabajo, sueno y otros habitos se suman a ese numero.",
            "Para la mayoria, BMR funciona mejor como punto de partida al comparar objetivos caloricos, niveles de actividad o planes de nutricion.",
          ],
        },
        {
          heading: "Limites de salud",
          body: [
            "Los resultados son estimaciones y pueden diferir de mediciones de laboratorio. Masa muscular, medicacion, condiciones de salud, cambios recientes de peso y hormonas pueden afectar el gasto real.",
            "Esta informacion es educativa, no consejo medico. Si hay embarazo, enfermedad, trastornos alimentarios o cambios grandes de peso, conviene consultar a un profesional cualificado.",
          ],
        },
      ],
    },
    "calorie-calculator-estimate-daily-calorie-needs": {
      title: "Calculadora de calorias: estima necesidades diarias",
      excerpt: "Entiende como las calculadoras de calorias estiman energia diaria y como interpretar el resultado sin tratarlo como exacto.",
      seoTitle: "Calculadora de calorias - Estima necesidades diarias",
      seoDescription: "Estima calorias diarias y aprende como actividad, objetivos y diferencias personales afectan el resultado.",
      sections: [
        {
          heading: "Que estima una calculadora de calorias",
          body: [
            "Una calculadora de calorias estima el gasto energetico diario total, o TDEE. Es el numero aproximado de calorias que el cuerpo puede usar en un dia contando reposo y actividad.",
            "La mayoria combina una estimacion BMR con un multiplicador de actividad. El resultado ayuda a planificar, pero no debe tratarse como medicion perfecta.",
          ],
        },
        {
          heading: "Importa el nivel de actividad",
          body: [
            "Pequenas diferencias de rutina cambian necesidades caloricas. Caminar, estar de pie, entrenar, trabajar y recuperarse influyen en la energia usada.",
            "Si el resultado parece alto o bajo, revisa el nivel elegido. Muchas personas empiezan de forma conservadora y ajustan segun tendencias reales.",
          ],
        },
        {
          heading: "Usar resultados con contexto",
          body: [
            "Las estimaciones no sustituyen orientacion individual. Peso, apetito, entrenamiento, sueno, estres, medicacion y salud pueden cambiar lo adecuado.",
            "Usa el numero como referencia junto con habitos constantes, senales del cuerpo y apoyo profesional cuando haga falta.",
          ],
        },
      ],
    },
    "bmi-vs-body-fat-percentage-which-number-is-more-useful": {
      title: "BMI vs porcentaje de grasa corporal: que numero es mas util",
      excerpt: "Compara BMI y grasa corporal, aprende que puede y no puede decir cada numero, y por que importa el contexto.",
      seoTitle: "BMI vs porcentaje de grasa corporal - Que numero es mas util",
      seoDescription: "Aprende diferencias entre BMI y porcentaje de grasa corporal, fortalezas, limites y cautelas.",
      sections: [
        {
          heading: "Que dice el BMI",
          body: [
            "El BMI compara peso con altura y clasifica el resultado en categorias amplias. Es simple, rapido y muy usado en cribado poblacional.",
            "Pero no distingue grasa, musculo, hueso o liquidos. En una persona concreta puede ocultar contexto importante.",
          ],
        },
        {
          heading: "Que aporta la grasa corporal",
          body: [
            "El porcentaje de grasa corporal estima que parte del peso procede de masa grasa. Puede dar mas detalle que BMI, sobre todo con mayor masa muscular o cambios de composicion.",
            "La desventaja es que depende mucho del metodo. Basculas, formulas con cinta, pliegues y herramientas clinicas pueden dar resultados distintos.",
          ],
        },
        {
          heading: "Que numero usar",
          body: [
            "BMI y grasa corporal pueden ser utiles, pero ninguno debe usarse solo para juzgar salud. Tendencias, cintura, forma fisica, analiticas, sintomas e historial pueden importar mas.",
            "Son estimaciones educativas, no diagnosticos. Si hay dudas de salud o necesitas consejo personal, un profesional puede interpretar los numeros con contexto.",
          ],
        },
      ],
    },
    "conversion-rate-calculator-measure-website-performance": {
      title: "Calculadora de tasa de conversion: mide rendimiento web sin adivinar",
      excerpt: "Usa una calculadora de conversion para ver como tu web convierte visitantes en leads, registros o clientes.",
      seoTitle: "Calculadora de tasa de conversion - Mide rendimiento web",
      seoDescription: "Aprende a calcular tasa de conversion, que cuenta como conversion y como evaluar rendimiento web.",
      sections: [
        {
          heading: "Que muestra la tasa de conversion",
          body: [
            "La tasa de conversion indica con que frecuencia los visitantes completan una accion definida: compra, demo, registro, suscripcion u otro paso importante.",
            "Da una lectura util de calidad del trafico, claridad de la pagina y friccion del embudo. Ayuda a decidir si mas trafico creara resultados o solo mas ruido.",
          ],
        },
        {
          heading: "Formula practica",
          body: [
            "La formula basica es conversiones divididas por visitantes totales, multiplicado por 100. Si 40 de 1000 visitantes convierten, la tasa es 4%.",
            "Lo importante es mantener constante el denominador y el evento. Mezclar sesiones con usuarios o cambiar la definicion debilita la comparacion.",
          ],
        },
        {
          heading: "Como usar el resultado",
          body: [
            "Compara paginas, canales, campanas o periodos. Una tasa mas alta puede indicar mejor intencion, mensaje u oferta, pero debe leerse junto a volumen y calidad de ingresos.",
            "Tratalo como senal de decision, no como trofeo. Una mejora pequena importa con mucho trafico; una mejora grande en muestra pequena puede no bastar para concluir.",
          ],
        },
      ],
    },
    "roas-calculator-estimate-return-on-ad-spend": {
      title: "Calculadora de ROAS: estima retorno de publicidad antes de escalar",
      excerpt: "Usa una calculadora ROAS para estimar cuantos ingresos genera tu publicidad por cada unidad gastada.",
      seoTitle: "Calculadora de ROAS - Estima retorno de gasto publicitario",
      seoDescription: "Aprende a calcular ROAS, cuando usarlo y como interpretar rendimiento de anuncios con cuidado.",
      sections: [
        {
          heading: "Por que importa ROAS",
          body: [
            "ROAS mide ingresos generados por anuncios en relacion con el gasto publicitario. Permite comparar campanas, canales y presupuestos con una lente comun.",
            "Es util para asignar presupuesto al decidir si pausar, mejorar o escalar una campana. Es una metrica de eficiencia, no una imagen completa del negocio.",
          ],
        },
        {
          heading: "Formula simple",
          body: [
            "ROAS se calcula como ingresos atribuidos a anuncios divididos por gasto publicitario. Si gastas 1000 y generas 4000 de ingresos, el ROAS es 4x.",
            "Define con cuidado que ingresos atribuyes y que costes incluyes. ROAS no siempre incluye margen, devoluciones, descuentos, herramientas o coste de equipo.",
          ],
        },
        {
          heading: "Antes de escalar",
          body: [
            "Compara ROAS con margen bruto, valor del cliente y flujo de caja. Una campana puede tener ROAS alto y aun asi no ser rentable si el margen es bajo.",
            "Usa la calculadora para explorar escenarios, pero valida con datos reales de atribucion, cohortes y calidad de clientes.",
          ],
        },
      ],
    },
    "cac-calculator-how-to-calculate-customer-acquisition-cost": {
      title: "Calculadora de CAC: como calcular claramente el coste de adquisicion",
      excerpt: "Usa una calculadora CAC para entender que cuesta realmente adquirir cada cliente nuevo en ventas y marketing.",
      seoTitle: "Calculadora de CAC - Como calcular coste de adquisicion",
      seoDescription: "Aprende a calcular CAC, que gastos incluir y como usarlo en planificacion de crecimiento.",
      sections: [
        {
          heading: "Que es CAC",
          body: [
            "CAC, coste de adquisicion de cliente, estima cuanto gastas para conseguir cada cliente nuevo. Normalmente combina gasto de ventas y marketing dividido por clientes adquiridos.",
            "Sirve para entender eficiencia de crecimiento, pero el resultado depende mucho de que costes y clientes incluyas.",
          ],
        },
        {
          heading: "Que gastos incluir",
          body: [
            "Incluye publicidad, herramientas, agencias, salarios relacionados, comisiones y contenido cuando forman parte del esfuerzo de adquisicion. Excluir costes importantes puede hacer que CAC parezca demasiado bueno.",
            "Separa canales o periodos cuando tengan comportamientos distintos. CAC mezclado puede ocultar campanas rentables y campanas problematicas.",
          ],
        },
        {
          heading: "Usar CAC en planificacion",
          body: [
            "CAC gana valor cuando se compara con payback, margen bruto y LTV. Solo indica coste por cliente; en contexto ayuda a juzgar sostenibilidad.",
            "La calculadora permite modelar cambios de canal, precios o contratacion. No predice crecimiento por si sola, pero hace visibles los tradeoffs antes de comprometer presupuesto.",
          ],
        },
      ],
    },
    "mortgage-payment-calculator-principal-interest-and-term": {
      title: "Calculadora de pago hipotecario: principal, interes y plazo",
      excerpt: "Aprende como principal, tasa y plazo hipotecario forman un pago mensual antes de impuestos, seguros y otros costes.",
      seoTitle: "Calculadora de pago hipotecario - Principal, interes y plazo",
      seoDescription: "Entiende como se calculan pagos hipotecarios y que cautelas aplicar por impuestos, seguros, comisiones y cambios de tasa.",
      sections: [
        {
          heading: "Que incluye una estimacion hipotecaria",
          body: [
            "Una estimacion basica suele centrarse en principal e interes. Principal es el importe prestado; interes es el coste cobrado por el prestamista.",
            "El pago real tambien puede incluir impuestos, seguro de vivienda, seguro hipotecario, cuotas HOA y ajustes de escrow. La calculadora ayuda a planificar, pero no sustituye una oferta del prestamista.",
          ],
        },
        {
          heading: "Como cambian principal, tasa y plazo",
          body: [
            "Un saldo mayor sube el pago porque se devuelve mas principal. Una tasa mas alta tambien sube el pago porque mas dinero va al coste de endeudamiento.",
            "Un plazo mas largo, como 30 anos frente a 15, puede bajar el pago mensual pero normalmente aumenta el interes total de la vida del prestamo.",
          ],
        },
        {
          heading: "Cautelas al comparar",
          body: [
            "En hipotecas fijas, principal e interes son mas previsibles. En hipotecas variables, el pago puede cambiar tras el periodo fijo, asi que revisa limites y reglas de reajuste.",
            "Compara tasa, APR, comisiones, puntos, costes de cierre y el tiempo que esperas mantener el prestamo.",
          ],
        },
      ],
    },
    "apr-vs-interest-rate-what-borrowers-should-compare": {
      title: "APR vs tasa de interes: que deben comparar los prestatarios",
      excerpt: "APR y tasa de interes describen coste de endeudamiento, pero no son el mismo numero. Aprende cuando importa cada uno.",
      seoTitle: "APR vs tasa de interes - Que comparar al pedir prestado",
      seoDescription: "Compara APR y tasa de interes en prestamos e hipotecas y entiende que incluye cada numero.",
      sections: [
        {
          heading: "La tasa de interes",
          body: [
            "La tasa de interes es el porcentaje cobrado sobre el principal del prestamo. Es la tasa usada directamente para calcular parte del interes en muchos pagos.",
            "Una tasa menor puede reducir pago mensual e interes total, pero no muestra todos los costes necesarios para obtener el prestamo.",
          ],
        },
        {
          heading: "APR anade ciertos costes",
          body: [
            "APR significa tasa anual equivalente o porcentaje anual. Refleja la tasa de interes mas ciertos cargos, como puntos, apertura o intermediacion segun el tipo de prestamo.",
            "Como incluye mas que la tasa nominal, a menudo es mas alto. Puede ayudar a comparar ofertas similares con distintos costes iniciales.",
          ],
        },
        {
          heading: "Cuando APR puede confundir",
          body: [
            "APR es mas util al comparar prestamos fijos similares con plazos similares. En prestamos variables puede ser mas dificil porque futuros cambios de tasa no siempre quedan reflejados.",
            "No elijas solo por APR. Revisa pago mensual, efectivo al cierre, pagos anticipados, tipo de tasa, plazo y cuanto tiempo mantendras el prestamo.",
          ],
        },
      ],
    },
    "simple-interest-calculator-formula-examples-and-use-cases": {
      title: "Calculadora de interes simple: formula, ejemplos y usos",
      excerpt: "Usa la formula de interes simple para estimar interes sobre un principal con ejemplos claros y cautelas.",
      seoTitle: "Calculadora de interes simple - Formula, ejemplos y usos",
      seoDescription: "Aprende la formula de interes simple, mira ejemplos y entiende cuando estas estimaciones son utiles.",
      sections: [
        {
          heading: "Formula de interes simple",
          body: [
            "La formula basica es Interes = principal x tasa x tiempo. El principal es el importe inicial, la tasa suele ser anual y el tiempo se mide en anos salvo que se indique otra cosa.",
            "Por ejemplo, $1,000 al 5% simple durante 2 anos genera $100 de interes, porque 1,000 x 0.05 x 2 = 100.",
          ],
        },
        {
          heading: "Usos comunes",
          body: [
            "El interes simple sirve para estimar prestamos cortos, notas, recargos por mora o ahorros donde el interes no se suma al saldo.",
            "Tambien ayuda a comparar el efecto de cambiar una entrada a la vez, como principal, tasa o tiempo.",
          ],
        },
        {
          heading: "Limites financieros",
          body: [
            "El interes simple no incluye interes sobre interes previo. Si el interes capitaliza diaria, mensual o anualmente, una calculadora de interes compuesto dara otro resultado.",
            "Los costes reales pueden depender de pagos, comisiones, amortizacion, prepago y disclosures del prestamista. Usa el resultado como estimacion, no como consejo legal, fiscal o financiero.",
          ],
        },
      ],
    },
    "openai-cost-calculator-estimate-chat-and-api-usage": {
      title: "Calculadora de coste de OpenAI: estima uso de chat y API",
      excerpt: "Aprende a estimar costes de OpenAI API desde tokens, modelo y uso esperado antes de lanzar una funcion de IA.",
      seoTitle: "Calculadora de coste de OpenAI - Estima uso de chat y API",
      seoDescription: "Estima costes de OpenAI API mapeando uso de tokens, seleccion de modelo y supuestos de trafico.",
      sections: [
        {
          heading: "Por que OpenAI necesita modelo de uso",
          body: [
            "El gasto de OpenAI API depende de mas que usuarios. Modelo, longitud de prompt, longitud de respuesta, reintentos y trabajos en segundo plano pueden cambiar la factura.",
            "Una calculadora ayuda a convertir supuestos de producto en estimaciones mensuales antes de comprometer un lanzamiento.",
          ],
        },
        {
          heading: "Entradas clave",
          body: [
            "Empieza con solicitudes por usuario, tokens medios de entrada, tokens medios de salida y modelo usado por flujo. Separa chat, resumen, extraccion y automatizacion si se comportan distinto.",
            "En productos de volumen alto, incluye margen para reintentos, system prompts, tool calls y picos de uso.",
          ],
        },
        {
          heading: "Cautelas de precios",
          body: [
            "Las tarifas cambian y el precio por modelo puede variar segun entrada, salida, tokens cacheados, batch o endpoints especiales.",
            "Antes de publicar estimaciones o numeros de cara al cliente, verifica las paginas oficiales de precios de OpenAI y actualiza supuestos.",
          ],
        },
      ],
    },
    "claude-cost-calculator-estimate-token-based-api-spend": {
      title: "Calculadora de coste de Claude: estima gasto API por tokens",
      excerpt: "Estima gasto de Claude API modelando tokens de entrada, salida, modelo y patrones reales de uso.",
      seoTitle: "Calculadora de coste de Claude - Estima gasto API por tokens",
      seoDescription: "Calcula costes estimados de Claude API con volumen de tokens, modelo, frecuencia y uso mensual.",
      sections: [
        {
          heading: "Como estimar costes de Claude",
          body: [
            "El precio de Claude API suele modelarse por tokens, con supuestos separados para entrada y salida. Prompts largos, documentos y respuestas detalladas pueden elevar el coste rapido.",
            "La calculadora da a producto, finanzas e ingenieria una forma compartida de probar escenarios antes de escalar en produccion.",
          ],
        },
        {
          heading: "Estima flujos reales",
          body: [
            "Calcula cada flujo por separado: soporte, analisis de documentos, ayuda de codigo, clasificacion o automatizacion interna pueden tener perfiles de tokens distintos.",
            "Entradas utiles incluyen solicitudes mensuales, tamano medio de prompt, tamano medio de respuesta, modelo, crecimiento esperado y margen para fallos o repeticiones.",
          ],
        },
        {
          heading: "Cautelas de precios",
          body: [
            "Los precios y reglas de Claude pueden cambiar, y algunas funciones pueden tener estructuras distintas segun ventana de contexto, endpoint o condiciones.",
            "Verifica siempre precios actuales en paginas oficiales de Anthropic antes de publicar estimaciones, presupuestos o supuestos de suscripcion.",
          ],
        },
      ],
    },
    "ai-pricing-calculator-turn-usage-cost-into-subscription-tiers": {
      title: "Calculadora de precios de IA: convierte costes en planes",
      excerpt: "Aprende a convertir costes de uso de IA en niveles de suscripcion con margenes, limites y rutas de mejora.",
      seoTitle: "Calculadora de precios de IA - Planificacion de niveles de suscripcion",
      seoDescription: "Convierte costes de modelos IA en precios de suscripcion estimando coste por usuario, margen y limites.",
      sections: [
        {
          heading: "De gasto API a precios",
          body: [
            "Las funciones IA crean costes variables que crecen con el uso. Una calculadora de precios traduce tokens, solicitudes y modelos en planes de suscripcion con margenes sanos.",
            "El objetivo no es solo cubrir API, sino tambien infraestructura, soporte, pagos y desarrollo de producto.",
          ],
        },
        {
          heading: "Disenar niveles por comportamiento",
          body: [
            "Estima coste por usuario activo, uso esperado por plan y margen objetivo. Luego define limites como mensajes, documentos, creditos, asientos o automatizaciones mensuales.",
            "Buenos niveles dejan claro cuando mejorar de plan y reducen el riesgo de que usuarios intensivos consuman mas recursos de los que soporta el precio.",
          ],
        },
        {
          heading: "Antes de publicar precios",
          body: [
            "Las tarifas de IA cambian y cada modelo puede cobrar entrada, salida, cache, batch o funciones premium de forma distinta.",
            "Antes de cerrar planes, verifica precios oficiales y prueba margenes contra clientes de uso alto.",
          ],
        },
      ],
    },
    "tdee-calculator-estimate-daily-energy-expenditure": {
      title: "Calculadora TDEE: estima gasto energetico diario",
      excerpt: "Aprende como una calculadora TDEE estima calorias diarias desde metabolismo, actividad y contexto de vida.",
      seoTitle: "Guia de calculadora TDEE - Estima gasto energetico diario",
      seoDescription: "Entiende como se estiman calorias diarias, que afecta al resultado y por que es una estimacion practica.",
      sections: [
        {
          heading: "Que significa TDEE",
          body: [
            "El gasto energetico diario total, o TDEE, estima cuantas calorias usa el cuerpo en un dia tipico. Empieza con BMR y ajusta por movimiento, ejercicio y actividad.",
            "Puede ayudar a planificar mantenimiento, perdida o ganancia de peso, pero no es diagnostico medico ni garantia exacta.",
          ],
        },
        {
          heading: "Por que importa la actividad",
          body: [
            "La misma edad, altura, peso y sexo pueden producir necesidades distintas segun actividad. Un trabajo de escritorio con ejercicio ligero no equivale a entrenar mucho o trabajar fisicamente.",
            "Elige el nivel que represente tu semana normal, no tu mejor o peor dia, para una estimacion mas util.",
          ],
        },
        {
          heading: "Como usarlo",
          body: [
            "Usa el resultado como punto inicial y comparalo durante semanas con peso, energia, hambre y rendimiento.",
            "Condiciones de salud, embarazo, medicacion, trastornos alimentarios y objetivos atleticos pueden requerir guia profesional. Es una estimacion educativa, no consejo medico.",
          ],
        },
      ],
    },
    "body-fat-calculator-estimate-body-composition": {
      title: "Calculadora de grasa corporal: estima composicion corporal",
      excerpt: "Aprende que muestran las estimaciones de grasa corporal, donde son utiles y que limites considerar.",
      seoTitle: "Guia de calculadora de grasa corporal - Estima composicion corporal",
      seoDescription: "Aprende como se estima la composicion corporal desde medidas y como interpretar resultados con seguridad.",
      sections: [
        {
          heading: "Que estima la grasa corporal",
          body: [
            "El porcentaje de grasa corporal estima que parte del peso procede de grasa frente a masa magra, agua, hueso y otros tejidos. Aporta contexto que peso o BMI no dan por si solos.",
            "Las calculadoras online suelen usar medidas corporales, por lo que el resultado es aproximado y no una medicion directa de laboratorio.",
          ],
        },
        {
          heading: "Precision de medidas",
          body: [
            "Pequenos cambios en colocacion de la cinta, postura, hidratacion o comidas recientes pueden afectar el resultado. Para seguimiento, mide en condiciones parecidas y mira tendencias.",
            "Distintas formulas tambien pueden variar, especialmente segun edad, sexo, forma corporal y poblaciones atleticas.",
          ],
        },
        {
          heading: "Interpretar con seguridad",
          body: [
            "La estimacion puede apoyar seguimiento fitness o bienestar, pero no debe usarse sola para juzgar salud. Fuerza, energia, analiticas, historia clinica y funcion diaria tambien importan.",
            "Es contenido educativo y no diagnostico. Si hay dudas de salud, consulta a un profesional cualificado.",
          ],
        },
      ],
    },
    "water-intake-calculator-estimate-daily-hydration-needs": {
      title: "Calculadora de ingesta de agua: estima hidratacion diaria",
      excerpt: "Aprende como se estiman necesidades diarias de hidratacion y cuando actividad, clima o salud cambian el objetivo.",
      seoTitle: "Guia de calculadora de ingesta de agua - Estima hidratacion diaria",
      seoDescription: "Entiende como se calculan objetivos de agua diaria y que factores afectan las necesidades.",
      sections: [
        {
          heading: "Que muestra la estimacion",
          body: [
            "Una calculadora de agua ofrece un punto de partida para necesidades diarias de liquidos, a menudo segun peso y actividad. Puede ayudar a crear un habito sencillo.",
            "El resultado es una estimacion, no una regla estricta. Parte del liquido tambien llega de alimentos y otras bebidas, no solo agua.",
          ],
        },
        {
          heading: "Factores que cambian necesidades",
          body: [
            "Ejercicio, calor, sudor, altitud y trabajo exterior pueden aumentar necesidades. A veces tambien hacen falta electrolitos cuando las perdidas son altas.",
            "En cambio, algunas condiciones renales, cardiacas, hepaticas o medicaciones requieren limitar liquidos; una calculadora general no encaja con todos.",
          ],
        },
        {
          heading: "Uso diario",
          body: [
            "Usa la cifra como base y ajusta por sed, color de orina, actividad y sensaciones. Reparte la ingesta durante el dia en vez de beber todo de golpe.",
            "La calculadora es educativa, no consejo medico. Si hay sintomas, restricciones de liquidos o enfermedad, pide orientacion profesional.",
          ],
        },
      ],
    },
    "ltv-to-cac-ratio-calculator-understand-growth-efficiency": {
      title: "Calculadora de ratio LTV a CAC: entiende eficiencia de crecimiento",
      excerpt: "Usa un ratio LTV a CAC para ver si el gasto de adquisicion esta respaldado por el valor esperado de clientes.",
      seoTitle: "Calculadora de ratio LTV a CAC - Entiende eficiencia de crecimiento",
      seoDescription: "Aprende como fundadores y operadores usan LTV a CAC para evaluar adquisicion sin benchmarks universales.",
      sections: [
        {
          heading: "Que compara LTV a CAC",
          body: [
            "El ratio LTV a CAC compara el valor esperado de un cliente con el coste de adquirirlo. Ayuda a ver si el crecimiento tiene soporte economico.",
            "Un ratio aislado no cuenta toda la historia. Margen, retencion, payback y calidad de clientes tambien importan.",
          ],
        },
        {
          heading: "Entradas que importan",
          body: [
            "LTV suele depender de ingresos medios, margen bruto y duracion o retencion del cliente. CAC depende del gasto de ventas y marketing dividido por nuevos clientes.",
            "Usa periodos y cohortes coherentes. Mezclar clientes antiguos con campanas nuevas puede crear una lectura enganosa.",
          ],
        },
        {
          heading: "Como interpretar",
          body: [
            "Un ratio mas alto puede indicar adquisicion eficiente, pero tambien puede significar que inviertes poco en crecimiento o que LTV esta sobreestimado.",
            "Usa el resultado para comparar canales y escenarios, no como benchmark universal. Cada negocio tiene ciclos, margenes y riesgos distintos.",
          ],
        },
      ],
    },
    "funnel-conversion-calculator-find-drop-off-between-steps": {
      title: "Calculadora de conversion de embudo: encuentra caidas entre pasos",
      excerpt: "Identifica donde los usuarios abandonan un proceso y prioriza los pasos con mas impacto probable.",
      seoTitle: "Calculadora de conversion de embudo - Encuentra caidas por paso",
      seoDescription: "Calcula tasas de conversion entre pasos del embudo y entiende donde abandonan los clientes.",
      sections: [
        {
          heading: "Que mide un embudo",
          body: [
            "Un embudo muestra cuantas personas avanzan de un paso al siguiente: visita, registro, prueba, demo, compra u otra accion.",
            "La conversion por paso revela donde se pierde mas impulso y donde una mejora podria tener mas impacto.",
          ],
        },
        {
          heading: "Calcular caidas",
          body: [
            "Divide usuarios que completan un paso entre usuarios que llegaron al paso anterior. Repite el calculo para cada tramo del flujo.",
            "Mantener definiciones consistentes es clave. Cambios en tracking, ventanas de tiempo o eventos pueden hacer que los periodos no sean comparables.",
          ],
        },
        {
          heading: "Priorizar mejoras",
          body: [
            "Una gran caida no siempre es el primer arreglo: revisa volumen, valor economico y dificultad de cambiar esa parte.",
            "La calculadora senala donde mirar. Despues conviene revisar grabaciones, errores, mensajes, velocidad y ajuste entre promesa y experiencia.",
          ],
        },
      ],
    },
    "landing-page-lift-calculator-estimate-extra-conversions-needed": {
      title: "Calculadora de mejora de landing page: estima conversiones extra necesarias",
      excerpt: "Estima cuantas conversiones adicionales necesitas para alcanzar una mejora objetivo en una landing page.",
      seoTitle: "Calculadora de mejora de landing page - Estima conversiones extra",
      seoDescription: "Calcula conversiones adicionales necesarias para objetivos de mejora en paginas de aterrizaje.",
      sections: [
        {
          heading: "Que significa lift",
          body: [
            "Lift de landing page es la mejora relativa o absoluta en conversiones tras un cambio. Puede venir de mejor mensaje, oferta, velocidad, prueba social o formulario.",
            "La calculadora estima cuantas conversiones adicionales hacen falta para alcanzar un objetivo de mejora.",
          ],
        },
        {
          heading: "Entradas basicas",
          body: [
            "Necesitas visitantes actuales, conversiones actuales y objetivo de tasa o lift. A partir de eso puedes calcular conversiones extra necesarias.",
            "Distingue puntos porcentuales de porcentaje relativo. Subir de 4% a 5% es +1 punto porcentual, pero tambien un 25% de mejora relativa.",
          ],
        },
        {
          heading: "Leer el resultado",
          body: [
            "Una meta puede parecer pequena en porcentaje pero grande en volumen si el trafico es alto. En muestras pequenas, una diferencia aparente puede deberse al azar.",
            "Usa la estimacion para planificar experimentos y expectativas, no como garantia de que un diseno concreto generara ese resultado.",
          ],
        },
      ],
    },
    "freelancer-hourly-rate-calculator-price-your-work-sustainably": {
      title: "Calculadora de tarifa horaria freelance: pon precio sostenible",
      excerpt: "Aprende a estimar una tarifa que cubra impuestos, gastos, tiempo no facturable y necesidades de largo plazo.",
      seoTitle: "Calculadora de tarifa freelance - Precio sostenible",
      seoDescription: "Estima tarifa horaria freelance considerando impuestos, gastos, horas facturables y objetivos.",
      sections: [
        {
          heading: "Por que la tarifa no es solo salario",
          body: [
            "Una tarifa freelance debe cubrir mas que horas trabajadas. Incluye impuestos, seguros, herramientas, vacaciones, administracion, ventas y tiempo no facturable.",
            "Si solo divides un salario deseado por horas totales del ano, probablemente subestimas la tarifa necesaria para sostener el negocio.",
          ],
        },
        {
          heading: "Entradas de la calculadora",
          body: [
            "Empieza con ingresos netos deseados, gastos anuales, impuestos estimados y horas facturables realistas. Las horas facturables suelen ser muchas menos que las horas trabajadas.",
            "Tambien conviene dejar margen para periodos sin proyectos, formacion, propuestas y revisiones no cobradas.",
          ],
        },
        {
          heading: "Usar la tarifa",
          body: [
            "La cifra resultante es un punto de partida para precios por hora, paquetes o proyectos. Puede ajustarse por especialidad, riesgo, urgencia y valor para el cliente.",
            "No sustituye asesoramiento fiscal o legal. Revisa normas locales, contratos y obligaciones antes de fijar precios definitivos.",
          ],
        },
      ],
    },
    "business-runway-calculator-how-long-can-your-cash-last": {
      title: "Calculadora de runway empresarial: cuanto dura tu efectivo",
      excerpt: "Entiende como se calcula el runway y como planificar contratacion, gasto, financiacion y conservacion de caja.",
      seoTitle: "Calculadora de runway empresarial - Cuanto dura tu efectivo",
      seoDescription: "Calcula runway empresarial y usa el resultado para planificar gasto, contratacion y financiacion.",
      sections: [
        {
          heading: "Que es runway",
          body: [
            "Runway indica cuantos meses puede operar una empresa con el efectivo disponible al ritmo actual de gasto. Es una metrica basica de supervivencia y planificacion.",
            "Ayuda a decidir contratacion, recortes, financiacion y prioridades antes de que la caja sea urgente.",
          ],
        },
        {
          heading: "Como calcularlo",
          body: [
            "Una version simple divide efectivo disponible por burn rate neto mensual. Si hay ingresos, el burn neto resta ingresos al gasto mensual.",
            "Usa promedios recientes y separa gastos puntuales de gasto recurrente. Un solo mes anomalo puede distorsionar la estimacion.",
          ],
        },
        {
          heading: "Planificar con cautela",
          body: [
            "Runway no es una promesa. Ingresos, cobros, pagos, impuestos, contrataciones y gastos inesperados pueden cambiarlo rapido.",
            "Prueba escenarios conservadores y revisa el calculo con frecuencia, especialmente antes de comprometer contrataciones o contratos largos.",
          ],
        },
      ],
    },
    "burn-rate-calculator-monthly-spend-and-cash-planning": {
      title: "Calculadora de burn rate: gasto mensual y planificacion de caja",
      excerpt: "Aprende a calcular burn rate bruto y neto para entender uso mensual de caja y tomar decisiones con disciplina.",
      seoTitle: "Calculadora de burn rate - Gasto mensual y caja",
      seoDescription: "Calcula burn rate mensual, compara gasto bruto y neto, y mejora la planificacion de caja.",
      sections: [
        {
          heading: "Burn bruto y neto",
          body: [
            "Burn rate bruto mide el gasto mensual total de caja. Burn neto mide cuanto disminuye la caja tras considerar ingresos cobrados.",
            "Ambos son utiles: el bruto muestra estructura de costes y el neto muestra cuanto runway se consume.",
          ],
        },
        {
          heading: "Entradas practicas",
          body: [
            "Incluye salarios, herramientas, infraestructura, alquiler, marketing, servicios profesionales y otros pagos recurrentes. Separa gastos puntuales cuando no representen el ritmo normal.",
            "Para negocios con ingresos variables, usa varios meses para evitar conclusiones basadas en un periodo excepcional.",
          ],
        },
        {
          heading: "Usarlo para decisiones",
          body: [
            "El burn ayuda a decidir si contratar, reducir gasto, subir precios o buscar financiacion. Tambien muestra si el crecimiento esta comprando aprendizaje o solo consumiendo caja.",
            "La calculadora no sustituye contabilidad ni gestion de tesoreria. Revisa saldos reales, cuentas por cobrar y compromisos futuros.",
          ],
        },
      ],
    },
    "rag-cost-calculator-estimate-embedding-storage-and-query-costs": {
      title: "Calculadora de coste RAG: estima embeddings, almacenamiento y consultas",
      excerpt: "Aprende a estimar el coste real de un flujo RAG, desde embeddings y almacenamiento vectorial hasta consultas y llamadas de modelo.",
      seoTitle: "Calculadora de coste RAG - Embeddings, almacenamiento y consultas",
      seoDescription: "Estima costes de flujos RAG con embeddings, almacenamiento, recuperacion y llamadas LLM.",
      sections: [
        {
          heading: "Costes de un flujo RAG",
          body: [
            "Un flujo RAG no solo llama a un LLM. Tambien genera embeddings, almacena vectores, recupera contexto y usa prompts mas largos en cada consulta.",
            "La calculadora ayuda a separar coste de indexacion, almacenamiento, busqueda y generacion para ver donde se concentra el gasto.",
          ],
        },
        {
          heading: "Indexacion y consultas",
          body: [
            "La indexacion depende de documentos, chunks, tokens por chunk y precio de embeddings. Las consultas dependen de volumen, contexto recuperado, modelo y tokens de salida.",
            "Un corpus grande con pocas consultas tiene perfil distinto a un corpus pequeno con uso intenso diario.",
          ],
        },
        {
          heading: "Cautelas operativas",
          body: [
            "Precios de embeddings, bases vectoriales y modelos pueden cambiar. Tambien importan reindexaciones, duplicados, retencion, regiones y logs.",
            "Usa estimaciones reales de documentos y consultas antes de comprometer arquitectura o precios de producto.",
          ],
        },
      ],
    },
    "embedding-cost-calculator-price-document-indexing-workflows": {
      title: "Calculadora de coste de embeddings: pon precio a indexacion de documentos",
      excerpt: "Estima el coste de incrustar documentos para busqueda IA, pipelines RAG, bots de soporte y herramientas internas.",
      seoTitle: "Calculadora de coste de embeddings - Indexacion de documentos",
      seoDescription: "Estima costes de embeddings para indexar documentos en busqueda IA y flujos RAG.",
      sections: [
        {
          heading: "Que cuesta indexar documentos",
          body: [
            "Los embeddings convierten texto en vectores para busqueda semantica, RAG o herramientas internas. El coste depende de tokens procesados, modelo de embedding y reindexaciones.",
            "La calculadora permite estimar el gasto inicial de indexar y el gasto continuo de actualizar documentos.",
          ],
        },
        {
          heading: "Chunks y volumen",
          body: [
            "Documentos largos suelen dividirse en chunks. El numero de chunks, tokens por chunk y metadatos afectan tanto coste como calidad de recuperacion.",
            "No mires solo precio por token. Tambien considera almacenamiento vectorial, duplicados, limpieza de datos y frecuencia de actualizacion.",
          ],
        },
        {
          heading: "Antes de presupuestar",
          body: [
            "Prueba con una muestra real de documentos para estimar tokens y numero de chunks. Archivos PDF, tablas y texto repetido pueden cambiar mucho el conteo.",
            "Verifica precios oficiales y terminos de almacenamiento antes de publicar estimaciones o fijar precios a clientes.",
          ],
        },
      ],
    },
    "ai-image-generation-cost-calculator-estimate-creative-volume": {
      title: "Calculadora de coste de imagenes IA: estima volumen creativo",
      excerpt: "Planifica presupuestos de imagenes IA estimando volumen, calidad, revisiones y necesidades creativas de campana.",
      seoTitle: "Calculadora de coste de imagenes IA - Estima volumen creativo",
      seoDescription: "Estima costes de generacion de imagenes IA por volumen, calidad y revisiones.",
      sections: [
        {
          heading: "Que impulsa el coste",
          body: [
            "El coste de imagenes IA depende de volumen, modelo, tamano, calidad, revisiones y variantes. Una campana pequena puede crecer rapido si cada idea requiere muchas iteraciones.",
            "La calculadora convierte necesidades creativas en un presupuesto aproximado por lote, campana o mes.",
          ],
        },
        {
          heading: "Estimar volumen creativo",
          body: [
            "Cuenta imagenes finales, variantes por imagen, pruebas descartadas y regeneraciones esperadas. Tambien separa formatos para anuncios, redes, producto o landing pages.",
            "El flujo real incluye prompts, seleccion, retoque, aprobaciones y a veces herramientas adicionales que no siempre estan en el precio del modelo.",
          ],
        },
        {
          heading: "Cautelas de uso",
          body: [
            "Precios y reglas pueden cambiar por proveedor, calidad, resolucion, derechos comerciales o funciones premium.",
            "Usa la estimacion para presupuestar y comparar opciones, pero verifica precios oficiales y politicas de uso antes de producir a escala.",
          ],
        },
      ],
    },
    "macro-calculator-estimate-protein-carbs-and-fat-targets": {
      title: "Calculadora de macros: estima objetivos de proteina, carbohidratos y grasa",
      excerpt: "Aprende como se estiman objetivos diarios de proteina, carbohidratos y grasa segun calorias y preferencias.",
      seoTitle: "Guia de calculadora de macros - Proteina, carbohidratos y grasa",
      seoDescription: "Estima macros diarios segun calorias, proteina, carbohidratos, grasa y objetivos nutricionales.",
      sections: [
        {
          heading: "Que son macros",
          body: [
            "Macros son proteina, carbohidratos y grasa. Una calculadora reparte calorias diarias entre esos nutrientes segun objetivo, preferencia y punto de partida.",
            "El resultado ayuda a planificar comidas, pero no define por si solo la calidad de la dieta.",
          ],
        },
        {
          heading: "Entradas principales",
          body: [
            "Normalmente se parte de calorias objetivo y se asigna proteina por peso corporal o meta. El resto se reparte entre carbohidratos y grasa.",
            "Actividad, saciedad, entrenamiento, salud y cultura alimentaria pueden cambiar que reparto resulta sostenible.",
          ],
        },
        {
          heading: "Usar con cuidado",
          body: [
            "Los objetivos de macros son estimaciones educativas. Ajusta segun energia, digestion, rendimiento, hambre y progreso real.",
            "Si hay condiciones medicas, embarazo, trastornos alimentarios o dietas terapeuticas, busca orientacion profesional.",
          ],
        },
      ],
    },
    "protein-calculator-estimate-daily-protein-needs": {
      title: "Calculadora de proteina: estima necesidades diarias",
      excerpt: "Ve como se estiman necesidades de proteina usando peso corporal, actividad y objetivos de fitness.",
      seoTitle: "Guia de calculadora de proteina - Estima necesidades diarias",
      seoDescription: "Estima proteina diaria segun peso, actividad y objetivos de salud o entrenamiento.",
      sections: [
        {
          heading: "Que estima la proteina diaria",
          body: [
            "Una calculadora de proteina estima gramos diarios segun peso corporal, actividad y objetivo. Puede ayudar en fuerza, recuperacion, saciedad o mantenimiento de masa magra.",
            "No todas las personas necesitan el mismo rango; contexto, salud y preferencias importan.",
          ],
        },
        {
          heading: "Peso, actividad y objetivo",
          body: [
            "Personas sedentarias, deportistas, adultos mayores o quienes buscan cambiar composicion corporal pueden usar puntos de partida distintos.",
            "La cifra debe encajar con calorias totales y comidas reales. Un objetivo teorico que no puedes sostener tiene poco valor.",
          ],
        },
        {
          heading: "Cautelas de salud",
          body: [
            "La proteina no sustituye una dieta completa. Tambien importan fibra, micronutrientes, hidratacion y fuentes alimentarias.",
            "Quienes tengan enfermedad renal, condiciones medicas o necesidades clinicas deben consultar a un profesional antes de usar objetivos altos.",
          ],
        },
      ],
    },
    "ideal-weight-calculator-compare-common-formulas": {
      title: "Calculadora de peso ideal: compara formulas comunes",
      excerpt: "Entiende como se comparan formulas de peso ideal y por que los resultados deben interpretarse con contexto.",
      seoTitle: "Guia de calculadora de peso ideal - Compara formulas comunes",
      seoDescription: "Compara formulas de peso ideal y aprende a interpretar estimaciones con cautela.",
      sections: [
        {
          heading: "Que significa peso ideal",
          body: [
            "Las formulas de peso ideal estiman rangos a partir de altura y, a veces, sexo. Son referencias historicas, no una definicion personal de salud.",
            "Pueden ser utiles para comparar metodos, pero no miden composicion corporal, fuerza, historial medico ni bienestar.",
          ],
        },
        {
          heading: "Por que las formulas difieren",
          body: [
            "Formulas como Devine, Robinson, Miller o Hamwi usan supuestos distintos. Por eso pueden dar resultados diferentes para la misma persona.",
            "La diferencia entre formulas muestra que el numero es una aproximacion, no una verdad exacta.",
          ],
        },
        {
          heading: "Interpretar el resultado",
          body: [
            "Usa el resultado como contexto junto con BMI, grasa corporal, medidas, energia y objetivos personales.",
            "No lo uses para diagnostico ni decisiones extremas. Si hay dudas de salud o peso, consulta a un profesional cualificado.",
          ],
        },
      ],
    },
    "cpa-calculator-estimate-cost-per-acquisition": {
      title: "Calculadora de CPA: estima coste por adquisicion",
      excerpt: "Estima cuanto gastas para adquirir cada cliente y compara canales, campanas y economia unitaria.",
      seoTitle: "Calculadora de CPA - Estima coste por adquisicion",
      seoDescription: "Calcula coste por adquisicion para evaluar campanas, canales y eficiencia de crecimiento.",
      sections: [
        {
          heading: "Que mide CPA",
          body: [
            "CPA mide cuanto cuesta lograr una adquisicion definida: cliente, registro, prueba, lead cualificado u otra accion.",
            "A diferencia de CPC, conecta gasto con resultados, no solo con trafico.",
          ],
        },
        {
          heading: "Formula y entradas",
          body: [
            "La formula simple es coste de campana dividido por adquisiciones. Define con claridad que cuenta como adquisicion y que costes incluyes.",
            "Comisiones, herramientas, creatividad y trabajo interno pueden cambiar la lectura si se incluyen o excluyen.",
          ],
        },
        {
          heading: "Usar CPA en campanas",
          body: [
            "Compara CPA con margen, LTV o valor del lead para decidir si una campana puede escalar.",
            "Un CPA bajo no siempre es bueno si la calidad es baja; revisa tambien conversion posterior y retencion.",
          ],
        },
      ],
    },
    "cpl-calculator-estimate-cost-per-lead": {
      title: "Calculadora de CPL: estima coste por lead",
      excerpt: "Calcula coste por lead para entender la eficiencia de campanas antes de que los leads avancen en el embudo.",
      seoTitle: "Calculadora de CPL - Estima coste por lead",
      seoDescription: "Calcula coste por lead y compara fuentes antes de evaluar conversiones posteriores.",
      sections: [
        {
          heading: "Que es CPL",
          body: [
            "CPL, coste por lead, divide el gasto de marketing entre leads generados. Es util para comparar canales de captacion.",
            "No mide por si solo calidad del lead ni probabilidad de venta.",
          ],
        },
        {
          heading: "Calculo basico",
          body: [
            "Usa gasto total de campana dividido por numero de leads. Mantener el mismo periodo y definicion evita comparaciones debiles.",
            "Decide si incluyes solo gasto publicitario o tambien herramientas, contenido, agencias y equipo.",
          ],
        },
        {
          heading: "Interpretar calidad",
          body: [
            "Un CPL bajo puede atraer leads poco cualificados. Un CPL alto puede ser aceptable si esos leads cierran mejor o tienen mas valor.",
            "Combina CPL con tasa de conversion a cliente, CAC y revenue para evaluar el embudo completo.",
          ],
        },
      ],
    },
    "lead-value-calculator-estimate-revenue-per-lead": {
      title: "Calculadora de valor de lead: estima ingresos por lead",
      excerpt: "Estima ingresos medios por lead para evaluar fuentes por valor de negocio, no solo volumen o coste.",
      seoTitle: "Calculadora de valor de lead - Estima ingresos por lead",
      seoDescription: "Calcula valor medio de lead y compara fuentes por ingresos esperados.",
      sections: [
        {
          heading: "Que es valor por lead",
          body: [
            "El valor por lead estima ingresos esperados por cada lead captado. Ayuda a decidir cuanto puedes gastar para conseguir leads.",
            "Suele conectar tasa de cierre, valor medio de cliente y margen o ingresos esperados.",
          ],
        },
        {
          heading: "Como estimarlo",
          body: [
            "Una forma simple multiplica tasa de conversion de lead a cliente por valor medio de cliente. Para mayor precision, usa margen bruto o LTV.",
            "Separa segmentos si tienen calidades distintas. Leads de canales diferentes pueden cerrar a ritmos y valores distintos.",
          ],
        },
        {
          heading: "Uso en presupuesto",
          body: [
            "Compara valor por lead con CPL para ver si la adquisicion puede ser sostenible.",
            "La estimacion depende de datos historicos y puede cambiar por precio, ventas, estacionalidad o calidad del trafico.",
          ],
        },
      ],
    },
    "tax-reserve-calculator-for-freelancers-and-small-businesses": {
      title: "Calculadora de reserva fiscal para freelancers y pequenos negocios",
      excerpt: "Estima cuanto ingreso apartar para impuestos y evitar sorpresas de caja al presentar la declaracion.",
      seoTitle: "Calculadora de reserva fiscal para freelancers y pequenos negocios",
      seoDescription: "Estima reservas de impuestos para freelancers y pequenos negocios con supuestos claros.",
      sections: [
        {
          heading: "Por que reservar impuestos",
          body: [
            "Freelancers y pequenas empresas a menudo reciben ingresos sin retencion suficiente. Reservar una parte ayuda a evitar sorpresas al pagar impuestos.",
            "La calculadora estima una reserva basada en ingresos, gastos deducibles y tasa esperada.",
          ],
        },
        {
          heading: "Entradas importantes",
          body: [
            "Usa ingresos netos esperados, gastos de negocio, impuestos locales o estatales y pagos estimados ya realizados.",
            "Las reglas cambian por pais, region, tipo de entidad y situacion personal, asi que los supuestos deben revisarse.",
          ],
        },
        {
          heading: "Cautelas",
          body: [
            "Una reserva es planificacion de caja, no asesoramiento fiscal. El importe real puede variar por deducciones, creditos, fechas y normas.",
            "Consulta a un profesional fiscal para obligaciones concretas, especialmente si cambian ingresos, ubicacion o estructura legal.",
          ],
        },
      ],
    },
    "invoice-late-fee-calculator-estimate-fair-payment-penalties": {
      title: "Calculadora de recargo por factura vencida: estima penalizaciones justas",
      excerpt: "Calcula recargos razonables por facturas vencidas y entiende como fomentar pagos puntuales sin penalizaciones injustas.",
      seoTitle: "Calculadora de recargo por factura vencida - Penalizaciones justas",
      seoDescription: "Estima recargos de pago tardio y entiende cautelas operativas y contractuales.",
      sections: [
        {
          heading: "Para que sirve un recargo",
          body: [
            "Un recargo por pago tardio compensa el coste de cobrar tarde y anima a pagar a tiempo. Debe estar claro en el contrato o factura.",
            "La calculadora estima una penalizacion segun saldo, dias de retraso y tasa o cargo fijo.",
          ],
        },
        {
          heading: "Formas de calcular",
          body: [
            "Algunas empresas usan porcentaje mensual, otras cargo fijo o combinacion. La formula debe ser facil de explicar al cliente.",
            "Evita aplicar recargos no acordados o que incumplan normas locales. La claridad previa reduce disputas.",
          ],
        },
        {
          heading: "Cautelas legales y comerciales",
          body: [
            "Las normas sobre intereses de demora varian por jurisdiccion y tipo de cliente. Un resultado de calculadora no sustituye asesoramiento legal.",
            "Tambien considera relacion comercial, historial del cliente y coste de cobranza antes de aplicar penalizaciones.",
          ],
        },
      ],
    },
    "subscription-burn-calculator-audit-recurring-saas-costs": {
      title: "Calculadora de burn de suscripciones: audita costes SaaS recurrentes",
      excerpt: "Estima gasto recurrente en suscripciones e identifica costes SaaS duplicados, sin uso o desalineados.",
      seoTitle: "Calculadora de burn de suscripciones - Audita costes SaaS",
      seoDescription: "Audita costes SaaS recurrentes y detecta gasto duplicado, infrautilizado o no prioritario.",
      sections: [
        {
          heading: "Que es burn de suscripciones",
          body: [
            "El burn de suscripciones suma costes recurrentes de software, herramientas y servicios. Muchas empresas acumulan gasto mensual sin revisarlo.",
            "Auditarlo ayuda a detectar duplicados, licencias infrautilizadas y planes que ya no encajan.",
          ],
        },
        {
          heading: "Entradas utiles",
          body: [
            "Registra coste mensual o anual prorrateado, numero de asientos, propietario, fecha de renovacion y uso real.",
            "Separar herramientas criticas de experimentos o compras de equipo facilita priorizar recortes.",
          ],
        },
        {
          heading: "Como actuar",
          body: [
            "La calculadora muestra el gasto, pero la decision requiere contexto: productividad, seguridad, contratos y coste de migrar.",
            "Revisa antes de renovaciones y asigna responsables para evitar que suscripciones pequenas se acumulen.",
          ],
        },
      ],
    },
    "ai-translation-cost-calculator-estimate-multilingual-content-spend": {
      title: "Calculadora de coste de traduccion IA: estima gasto multilingue",
      excerpt: "Aprende a estimar costes de traduccion IA desde palabras fuente, idiomas destino, tokens, revision y proveedor.",
      seoTitle: "Calculadora de coste de traduccion IA - Estima gasto multilingue",
      seoDescription: "Estima costes de traduccion IA por palabras, idiomas, tokens y revision humana.",
      sections: [
        {
          heading: "Que impulsa el coste de traduccion IA",
          body: [
            "El coste depende de volumen de texto, idiomas, modelo, longitud de contexto, revisiones humanas y controles de calidad.",
            "Una calculadora ayuda a estimar coste por lote, idioma o mes antes de localizar mucho contenido.",
          ],
        },
        {
          heading: "Tokens y revision",
          body: [
            "Traduccion con IA usa tokens de entrada y salida. Si agregas glosarios, contexto o instrucciones, el prompt crece.",
            "La revision humana puede ser necesaria para tono, terminos legales, producto o mercados sensibles, y debe presupuestarse aparte.",
          ],
        },
        {
          heading: "Cautelas",
          body: [
            "Precios de modelos cambian y los idiomas pueden variar en longitud de tokens. Mantener consistencia terminologica tambien requiere proceso.",
            "Usa muestras reales y verifica tarifas oficiales antes de publicar presupuestos o comprometer plazos.",
          ],
        },
      ],
    },
    "ai-agent-cost-calculator-tool-calls-tokens-and-runtime": {
      title: "Calculadora de coste de agentes IA: herramientas, tokens y runtime",
      excerpt: "Estima costes de agentes IA combinando prompts, salidas, llamadas de herramientas, reintentos, runtime e infraestructura.",
      seoTitle: "Calculadora de coste de agentes IA - Herramientas, tokens y runtime",
      seoDescription: "Modela costes de agentes IA con tokens, herramientas, reintentos y tiempo de ejecucion.",
      sections: [
        {
          heading: "Costes de un agente IA",
          body: [
            "Un agente puede consumir tokens, hacer tool calls, ejecutar pasos repetidos y mantener contexto. El coste no siempre se parece al de una sola llamada de chat.",
            "La calculadora separa solicitudes, tokens, herramientas y runtime para estimar mejor cargas autonomas.",
          ],
        },
        {
          heading: "Entradas a modelar",
          body: [
            "Incluye pasos medios por tarea, tokens por paso, llamadas a herramientas, errores, reintentos y duracion de ejecucion.",
            "Los casos raros importan: tareas largas o bucles pueden dominar el coste si no hay limites operativos.",
          ],
        },
        {
          heading: "Control y seguridad",
          body: [
            "Usa presupuestos, limites de pasos, timeouts y logging para evitar gasto inesperado.",
            "Verifica precios de modelos y herramientas externas, y trata la estimacion como escenario, no garantia.",
          ],
        },
      ],
    },
    "cost-per-1000-ai-outputs-how-to-calculate-unit-cost": {
      title: "Coste por 1,000 salidas IA: como calcular coste unitario",
      excerpt: "Aprende a calcular economia unitaria de IA midiendo coste por 1,000 salidas generadas entre tokens, reintentos, revision e infraestructura.",
      seoTitle: "Coste por 1,000 salidas IA - Calcula coste unitario",
      seoDescription: "Calcula coste unitario de IA por 1,000 salidas considerando tokens, reintentos y revision.",
      sections: [
        {
          heading: "Por que calcular coste unitario",
          body: [
            "Coste por 1000 salidas convierte gasto de IA en una unidad facil de comparar. Sirve para emails, respuestas, resumenes, imagenes o documentos generados.",
            "Ayuda a pasar de precios por token a economia de producto.",
          ],
        },
        {
          heading: "Formula basica",
          body: [
            "Suma coste de entrada, salida, herramientas, almacenamiento y revision si aplica. Divide por salidas generadas y multiplica por 1000.",
            "Usa salidas exitosas como denominador si fallos y reintentos son relevantes; de lo contrario el coste real por resultado queda subestimado.",
          ],
        },
        {
          heading: "Interpretar la unidad",
          body: [
            "El coste unitario cambia con longitud, modelo, calidad requerida y volumen. No asumas que una muestra pequena representa todo el producto.",
            "Recalcula cuando cambien prompts, modelos, precios o comportamiento de usuarios.",
          ],
        },
      ],
    },
    "body-mass-index-formula-metric-and-imperial-examples": {
      title: "Formula de indice de masa corporal: ejemplos metricos e imperiales",
      excerpt: "Aprende como se calcula BMI en unidades metricas e imperiales, con ejemplos simples y limites practicos.",
      seoTitle: "Formula de BMI - Ejemplos metricos e imperiales",
      seoDescription: "Aprende formulas BMI metricas e imperiales y como interpretar resultados con cautela.",
      sections: [
        {
          heading: "Formula BMI metrica",
          body: [
            "En unidades metricas, BMI = peso en kg / altura en metros al cuadrado. Por ejemplo, 70 kg y 1.75 m dan 70 / (1.75 x 1.75) = 22.9.",
            "La formula compara peso con altura, no mide grasa corporal directamente.",
          ],
        },
        {
          heading: "Formula imperial",
          body: [
            "En libras y pulgadas, BMI = peso en lb x 703 / altura en pulgadas al cuadrado. El factor 703 ajusta las unidades.",
            "Usar unidades correctas evita errores grandes. Convierte altura y peso antes de comparar resultados.",
          ],
        },
        {
          heading: "Limites del BMI",
          body: [
            "BMI es util para cribado general, pero no distingue musculo, grasa, hueso o distribucion de peso.",
            "Atletas, adultos mayores, ninos, embarazadas y personas con condiciones medicas necesitan mas contexto que un unico numero.",
          ],
        },
      ],
    },
    "maintenance-calories-calculator-estimate-energy-balance": {
      title: "Calculadora de calorias de mantenimiento: estima equilibrio energetico",
      excerpt: "Las calorias de mantenimiento estiman la energia necesaria para mantener peso segun tamano, actividad y rutina.",
      seoTitle: "Calculadora de calorias de mantenimiento - Estima equilibrio energetico",
      seoDescription: "Estima calorias de mantenimiento y entiende como cuerpo, actividad y rutina afectan el equilibrio.",
      sections: [
        {
          heading: "Que son calorias de mantenimiento",
          body: [
            "Las calorias de mantenimiento estiman la energia necesaria para mantener peso estable. Suelen basarse en BMR y actividad diaria.",
            "Es un punto de partida, no una medicion exacta del metabolismo.",
          ],
        },
        {
          heading: "Como se estiman",
          body: [
            "La calculadora combina edad, sexo, altura, peso y nivel de actividad para aproximar TDEE.",
            "Despues se compara con tendencias reales: si el peso sube o baja de forma sostenida, la estimacion puede necesitar ajuste.",
          ],
        },
        {
          heading: "Usar con contexto",
          body: [
            "Sueno, estres, entrenamiento, medicacion y precision al registrar comida pueden afectar el equilibrio energetico.",
            "Para objetivos clinicos, embarazo, enfermedad o historial de trastornos alimentarios, busca guia profesional.",
          ],
        },
      ],
    },
    "metric-vs-imperial-health-calculators-convert-inputs-correctly": {
      title: "Calculadoras de salud metricas vs imperiales: convierte entradas correctamente",
      excerpt: "Los resultados dependen de unidades precisas. Aprende diferencias entre entradas metricas e imperiales y evita errores.",
      seoTitle: "Conversiones metricas vs imperiales en calculadoras de salud",
      seoDescription: "Aprende a convertir unidades de salud metricas e imperiales para evitar resultados incorrectos.",
      sections: [
        {
          heading: "Por que importan las unidades",
          body: [
            "Las calculadoras de salud dependen de unidades correctas. Confundir kg con lb o cm con pulgadas puede producir resultados muy equivocados.",
            "BMI, BMR, calorias y agua usan formulas sensibles a altura, peso y edad.",
          ],
        },
        {
          heading: "Conversiones comunes",
          body: [
            "Kilogramos a libras usa kg x 2.20462. Centimetros a pulgadas usa cm / 2.54. Mantener precision razonable evita errores acumulados.",
            "Introduce los datos en el sistema que pide la calculadora o convierte antes de calcular.",
          ],
        },
        {
          heading: "Comprobaciones practicas",
          body: [
            "Si un resultado parece extremo, revisa unidades, decimales y formato de altura. 1.75 m no es lo mismo que 175 pulgadas.",
            "Las conversiones ayudan a estimar, pero los resultados de salud siguen siendo educativos y no diagnosticos.",
          ],
        },
      ],
    },
    "pipeline-coverage-calculator-estimate-sales-pipeline-needed": {
      title: "Calculadora de cobertura de pipeline: estima el pipeline de ventas necesario",
      excerpt: "Usa cobertura de pipeline para estimar si tu pipeline actual basta para sostener un objetivo de ingresos.",
      seoTitle: "Calculadora de cobertura de pipeline - Estima pipeline de ventas",
      seoDescription: "Calcula cobertura de pipeline y compara oportunidades con objetivos de ingresos.",
      sections: [
        {
          heading: "Que es cobertura de pipeline",
          body: [
            "La cobertura de pipeline compara oportunidades abiertas con objetivo de ventas. Ayuda a ver si hay suficiente cartera para alcanzar la cuota.",
            "Se expresa a menudo como multiplo, por ejemplo 3x de pipeline frente al objetivo.",
          ],
        },
        {
          heading: "Entradas principales",
          body: [
            "Necesitas objetivo de ingresos, tasa de cierre esperada y valor de oportunidades. Cuanto menor sea la tasa de cierre, mas pipeline hace falta.",
            "Separa etapas o segmentos si tienen probabilidades distintas. Un pipeline temprano no vale igual que oportunidades cercanas al cierre.",
          ],
        },
        {
          heading: "Usar el resultado",
          body: [
            "La cobertura no garantiza ingresos. Calidad de oportunidades, ciclo de venta, estacionalidad y capacidad del equipo importan.",
            "Usa la estimacion para planificar prospeccion, priorizar deals y detectar gaps antes del fin de periodo.",
          ],
        },
      ],
    },
    "churn-impact-calculator-model-revenue-lost-to-cancellations": {
      title: "Calculadora de impacto de churn: modela ingresos perdidos por cancelaciones",
      excerpt: "Estima como la perdida de clientes afecta ingresos recurrentes y muestra el coste real de cancelaciones.",
      seoTitle: "Calculadora de impacto de churn - Modela ingresos perdidos",
      seoDescription: "Modela impacto de churn sobre ingresos recurrentes y planifica retencion.",
      sections: [
        {
          heading: "Que mide el impacto de churn",
          body: [
            "Churn muestra clientes o ingresos perdidos por cancelaciones. Su impacto real depende de cuanto revenue se pierde y si se reemplaza con nuevas ventas.",
            "Una calculadora ayuda a traducir porcentaje de churn en dinero perdido.",
          ],
        },
        {
          heading: "Clientes vs ingresos",
          body: [
            "Churn de clientes cuenta logos perdidos. Churn de ingresos mide MRR o ARR perdido, y puede diferir si cancelan clientes grandes o pequenos.",
            "Para SaaS, el churn neto tambien considera expansiones y contracciones de clientes existentes.",
          ],
        },
        {
          heading: "Como usarlo",
          body: [
            "Modela escenarios de churn menor, mejor retencion o expansion para ver efectos sobre crecimiento.",
            "No mires churn aislado. Segmento, cohortes, producto, soporte y cambios de precio pueden explicar la tendencia.",
          ],
        },
      ],
    },
    "conversion-rate-vs-click-through-rate-what-each-metric-shows": {
      title: "Tasa de conversion vs CTR: que muestra cada metrica",
      excerpt: "Entiende diferencia entre CTR y tasa de conversion, y cuando cada metrica ayuda a mejorar marketing.",
      seoTitle: "Tasa de conversion vs CTR - Que muestra cada metrica",
      seoDescription: "Compara CTR y tasa de conversion para interpretar rendimiento de campanas y embudos.",
      sections: [
        {
          heading: "CTR y conversion no miden lo mismo",
          body: [
            "CTR mide cuantas personas hacen clic tras ver un enlace, anuncio o email. La tasa de conversion mide cuantas completan la accion final deseada.",
            "Un CTR alto puede traer trafico, pero no garantiza leads, compras o ingresos.",
          ],
        },
        {
          heading: "Cuando usar cada metrica",
          body: [
            "CTR ayuda a evaluar creatividad, asunto, posicion o llamada a la accion. Conversion evalua la experiencia posterior y la calidad del trafico.",
            "Juntas muestran si el problema esta antes o despues del clic.",
          ],
        },
        {
          heading: "Interpretacion practica",
          body: [
            "No optimices solo clics si atraen personas que no convierten. Tampoco culpes a la landing si el anuncio promete algo distinto.",
            "Usa ambas metricas con volumen, coste y calidad de resultados para tomar mejores decisiones.",
          ],
        },
      ],
    },
    "customer-ltv-calculator-estimate-lifetime-value": {
      title: "Calculadora de LTV de cliente: estima valor de vida",
      excerpt: "Aprende como el valor de vida conecta ingresos, retencion y margen bruto para compararlo con CAC.",
      seoTitle: "Calculadora de LTV de cliente - Estima valor de vida",
      seoDescription: "Calcula LTV conectando ingresos, margen, retencion y vida del cliente.",
      sections: [
        {
          heading: "Que estima LTV",
          body: [
            "LTV estima el valor economico que un cliente genera durante su relacion con el negocio. Puede basarse en ingresos, margen y duracion.",
            "Ayuda a decidir cuanto invertir en adquisicion, retencion y soporte.",
          ],
        },
        {
          heading: "Entradas comunes",
          body: [
            "Usa ingresos medios por cliente, margen bruto y vida esperada o tasa de retencion. En suscripciones, MRR y churn son entradas frecuentes.",
            "Las cohortes importan: clientes nuevos pueden comportarse distinto a clientes antiguos.",
          ],
        },
        {
          heading: "Cautelas",
          body: [
            "LTV es sensible a supuestos de retencion y margen. Pequenos cambios pueden inflar mucho el resultado.",
            "Comparalo con CAC y payback, y actualizalo con datos reales a medida que el negocio madura.",
          ],
        },
      ],
    },
    "cac-payback-calculator-how-long-until-acquisition-pays-back": {
      title: "Calculadora de payback de CAC: cuanto tarda en recuperarse la adquisicion",
      excerpt: "Estima cuantos meses puede tardar el beneficio bruto de cliente en recuperar el coste de adquisicion.",
      seoTitle: "Calculadora de payback de CAC - Meses para recuperar adquisicion",
      seoDescription: "Calcula meses necesarios para recuperar CAC con beneficio bruto y supuestos de ingresos.",
      sections: [
        {
          heading: "Que es payback de CAC",
          body: [
            "El payback de CAC estima cuantos meses tarda el margen bruto de un cliente en recuperar el coste de adquirirlo.",
            "Es util para entender presion de caja y velocidad de recuperacion del gasto comercial.",
          ],
        },
        {
          heading: "Como calcularlo",
          body: [
            "Divide CAC por margen bruto mensual por cliente. Si CAC es 600 y margen mensual es 100, el payback aproximado es 6 meses.",
            "Usa margen, no solo ingresos, porque el coste de servir al cliente reduce lo que recuperas.",
          ],
        },
        {
          heading: "Interpretar el plazo",
          body: [
            "Un payback corto suele dar mas flexibilidad para reinvertir. Uno largo puede ser aceptable si retencion y financiacion lo soportan.",
            "El resultado depende de churn, descuentos, expansion y calidad de cohortes, asi que revisalo con datos reales.",
          ],
        },
      ],
    },
    "cash-conversion-cycle-calculator-inventory-receivables-payables": {
      title: "Calculadora de ciclo de conversion de caja: inventario, cobros y pagos",
      excerpt: "Entiende cuanto tiempo puede quedar atada la caja entre pagar proveedores, mantener inventario y cobrar.",
      seoTitle: "Calculadora de ciclo de conversion de caja - Inventario y cobros",
      seoDescription: "Calcula ciclo de conversion de caja usando inventario, cuentas por cobrar y por pagar.",
      sections: [
        {
          heading: "Que mide el ciclo de caja",
          body: [
            "El ciclo de conversion de caja estima cuanto tiempo queda atada la caja entre pagar proveedores, mantener inventario y cobrar a clientes.",
            "Un ciclo mas largo puede aumentar necesidad de capital de trabajo aunque el negocio sea rentable.",
          ],
        },
        {
          heading: "Componentes principales",
          body: [
            "Suele combinar dias de inventario, dias de cuentas por cobrar y dias de cuentas por pagar.",
            "Inventario mas lento o cobros tardios alargan el ciclo; mejores plazos de proveedores pueden acortarlo.",
          ],
        },
        {
          heading: "Uso operativo",
          body: [
            "La calculadora ayuda a comparar escenarios de compras, cobros y pagos. Puede mostrar donde liberar caja.",
            "No sustituye estados financieros ni gestion de tesoreria. Estacionalidad, credito, devoluciones e inventario obsoleto pueden cambiar la lectura.",
          ],
        },
      ],
    },
    "ai-customer-support-cost-calculator-tickets-tokens-and-savings": {
      title: "Calculadora de coste de soporte IA: tickets, tokens y ahorro",
      excerpt: "Estima costes de automatizacion de soporte conectando volumen de tickets, prompt, modelo y revision humana.",
      seoTitle: "Calculadora de coste de soporte IA - Tickets y tokens",
      seoDescription: "Estima costes de soporte IA con tickets, tokens, modelos y supuestos de ahorro.",
      sections: [
        {
          heading: "Que impulsa el coste del soporte con IA",
          body: [
            "El coste del soporte con IA suele depender del volumen de tickets, la longitud media del prompt, el contexto recuperado, la longitud de la respuesta, el precio del modelo y si la conversacion necesita varios turnos.",
            "Costes pequenos por ticket pueden volverse relevantes con mucho volumen, sobre todo cuando el flujo incluye busqueda, clasificacion, resumen y escalado a una persona.",
          ],
        },
        {
          heading: "Estima el coste unitario",
          body: [
            "Empieza con los tokens medios de entrada y salida por ticket, multiplicalos por el precio del modelo y escala el resultado por el volumen mensual de tickets. Anade costes relacionados como embeddings, almacenamiento, observabilidad y revision humana cuando correspondan.",
            "Compara escenarios antes de elegir modelo. Un modelo mas barato que necesita mas reintentos o escalados puede no reducir el coste operativo total.",
          ],
        },
        {
          heading: "Verifica siempre los precios",
          body: [
            "Los precios de modelos de IA cambian con frecuencia. Antes de publicar o actualizar el articulo, confirma los precios actuales en las paginas oficiales del proveedor.",
            "La calculadora sirve para estimaciones y planificacion de escenarios, no como una garantia de ahorro.",
          ],
        },
      ],
    },
    "ai-sales-email-cost-calculator-estimate-outreach-generation-costs": {
      title: "Calculadora de coste de emails de ventas IA: estima outreach",
      excerpt: "Calcula el coste aproximado de generar emails de ventas personalizados entre listas, prompts y modelos.",
      seoTitle: "Calculadora de coste de emails de ventas IA - Outreach",
      seoDescription: "Estima coste de generar emails de ventas con IA usando volumen, prompts y modelos.",
      sections: [
        {
          heading: "Por que varia el coste de outreach",
          body: [
            "El coste de emails de ventas generados con IA depende de cuanto contexto usa cada mensaje. Reescribir una plantilla corta cuesta menos que un email muy personalizado con investigacion de cuenta y varias versiones.",
            "El tamano de la lista, la longitud del prompt, la longitud de salida, los reintentos y las comprobaciones de calidad influyen en la estimacion mensual final.",
          ],
        },
        {
          heading: "Calculo basico",
          body: [
            "Estima los tokens por destinatario, multiplicalos por el numero de destinatarios y aplica el precio actual del modelo para tokens de entrada y salida. Si generas varias variantes, multiplica por el numero de variantes.",
            "Para planificacion operativa, incluye costes del flujo como enriquecimiento, procesamiento en CRM, tiempo de revision y herramientas de entregabilidad.",
          ],
        },
        {
          heading: "Comprueba precios antes de publicar",
          body: [
            "Los precios de proveedor cambian a menudo, y las tarifas de entrada, salida, cache o batch pueden ser diferentes. Revisa siempre las paginas oficiales de precios del modelo al redactar este articulo.",
            "La estimacion ayuda a comparar escenarios. No debe presentarse como garantia de conversiones o ingresos.",
          ],
        },
      ],
    },
    "ai-meeting-notes-cost-calculator-transcription-and-summary-spend": {
      title: "Calculadora de coste de notas de reunion IA: transcripcion y resumen",
      excerpt: "Estima el coste de notas de reunion IA combinando minutos de transcripcion, tokens de resumen, modelo y volumen.",
      seoTitle: "Calculadora de coste de notas de reunion IA - Transcripcion y resumen",
      seoDescription: "Calcula costes de notas de reunion IA con transcripcion, resumen y volumen mensual.",
      sections: [
        {
          heading: "Que incluye el coste de notas de reuniones",
          body: [
            "Los flujos de notas con IA suelen incluir transcripcion de audio, limpieza, generacion de resumen, extraccion de tareas y a veces formato para CRM o gestion de proyectos.",
            "El coste puede estimarse por reunion o por mes combinando minutos, longitud de transcripcion, longitud de resumen y modelo elegido.",
          ],
        },
        {
          heading: "Estima el gasto mensual",
          body: [
            "Empieza con reuniones por mes y duracion media. Anade el coste de transcripcion si se factura por minuto de audio, y despues estima el coste de tokens para resumen y extraccion de seguimiento.",
            "Reuniones largas, transcripciones con muchas voces y multiples formatos de salida pueden aumentar tanto el uso de tokens como el tiempo de revision.",
          ],
        },
        {
          heading: "Mantener precios actualizados",
          body: [
            "Los precios de IA cambian rapido, y algunos proveedores cobran distinto audio, texto, entrada cacheada y procesamiento batch. Comprueba precios oficiales antes de publicar o refrescar el articulo.",
            "Usa los resultados como orientacion presupuestaria. Las necesidades de privacidad, retencion y cumplimiento pueden cambiar el coste real de produccion.",
          ],
        },
      ],
    },
    "mifflin-st-jeor-vs-harris-benedict-bmr-formulas-compared": {
      title: "Mifflin-St Jeor vs Harris-Benedict: formulas BMR comparadas",
      excerpt: "Compara dos ecuaciones BMR comunes, cuando se usan y por que los resultados son estimaciones.",
      seoTitle: "Mifflin-St Jeor vs Harris-Benedict - Formulas BMR",
      seoDescription: "Compara formulas BMR comunes y entiende limites de calculadoras metabolicas.",
      sections: [
        {
          heading: "Que estiman estas formulas",
          body: [
            "Mifflin-St Jeor y Harris-Benedict estiman la tasa metabolica basal, es decir, la energia que el cuerpo usa en reposo. Ambas usan altura, peso, edad y sexo, pero fueron desarrolladas con datos y coeficientes distintos.",
            "La BMR no es tu gasto diario total. Para llegar a TDEE se multiplica por un nivel de actividad, y ese multiplicador suele generar tanta variacion como la formula elegida.",
          ],
        },
        {
          heading: "Diferencias practicas",
          body: [
            "Mifflin-St Jeor se usa a menudo como punto de partida moderno para adultos, mientras que Harris-Benedict sigue apareciendo en muchas calculadoras y referencias historicas.",
            "Las diferencias pueden ser pequenas para algunas personas y mayores para otras. Trata cualquier resultado como una estimacion, no como una medicion directa de metabolismo.",
          ],
        },
        {
          heading: "Como usar la comparacion",
          body: [
            "Compara ambas cifras para entender el rango probable y despues revisa el progreso real durante varias semanas. Cambios de peso, energia, hambre y rendimiento aportan contexto que una formula no ve.",
            "Si tienes embarazo, enfermedad, medicacion relevante, historial de trastornos alimentarios o necesidades clinicas, consulta con un profesional antes de tomar decisiones fuertes sobre calorias.",
          ],
        },
      ],
    },
    "activity-level-calculator-choose-the-right-tdee-multiplier": {
      title: "Calculadora de nivel de actividad: elige el multiplicador TDEE correcto",
      excerpt: "Aprende como funcionan multiplicadores de actividad, por que se sobreestima la actividad y como elegir un punto de partida.",
      seoTitle: "Calculadora de nivel de actividad y guia de multiplicador TDEE",
      seoDescription: "Elige multiplicadores TDEE con mas criterio usando actividad semanal y cautelas practicas.",
      sections: [
        {
          heading: "Que representa el multiplicador TDEE",
          body: [
            "El multiplicador de actividad convierte la BMR en gasto energetico diario total. Intenta cubrir movimiento diario, ejercicio, trabajo fisico y parte de la variacion individual.",
            "Elegir el nivel correcto importa porque un pequeno cambio en el multiplicador puede mover la estimacion diaria cientos de calorias.",
          ],
        },
        {
          heading: "Como escoger un nivel",
          body: [
            "Se honesto con tu rutina media, no con tu mejor semana. Si entrenas tres dias pero trabajas sentado y caminas poco, un nivel moderado puede sobreestimar tu gasto.",
            "Cuando dudes entre dos niveles, empieza con el mas conservador y ajusta segun datos reales de peso, energia y adherencia durante dos a cuatro semanas.",
          ],
        },
        {
          heading: "Limitaciones del metodo",
          body: [
            "Los multiplicadores son aproximaciones amplias. No capturan diferencias de NEAT, precision de pulseras, intensidad real del entrenamiento ni cambios metabolicos por dieta prolongada.",
            "Usa el resultado como punto de partida flexible. Si hay condiciones medicas o objetivos deportivos exigentes, conviene personalizarlo con ayuda profesional.",
          ],
        },
      ],
    },
    "pace-calculator-running-speed-distance-and-time": {
      title: "Calculadora de ritmo: velocidad, distancia y tiempo de carrera",
      excerpt: "Entiende ritmo, velocidad, distancia y tiempo final para planes de entrenamiento y dias de carrera.",
      seoTitle: "Calculadora de ritmo para correr - Velocidad, distancia y tiempo",
      seoDescription: "Calcula ritmo de carrera, velocidad, distancia y tiempo final con estimaciones educativas.",
      sections: [
        {
          heading: "Como se relacionan ritmo, distancia y tiempo",
          body: [
            "El ritmo expresa cuanto tardas en recorrer una unidad de distancia, por ejemplo minutos por kilometro o por milla. La velocidad expresa distancia por hora, y el tiempo total une ambos conceptos.",
            "Si conoces dos valores, puedes calcular el tercero. Esta relacion ayuda a planificar carreras, entrenamientos por intervalos y objetivos realistas.",
          ],
        },
        {
          heading: "Usos practicos para corredores",
          body: [
            "Usa el ritmo objetivo para repartir esfuerzos en una carrera, estimar pasos intermedios o comparar entrenamientos de distintas distancias.",
            "Tambien puedes convertir entre kilometros y millas para entender planes de entrenamiento, marcas y referencias de otros paises.",
          ],
        },
        {
          heading: "Evita sobreinterpretar una cifra",
          body: [
            "El ritmo cambia con desnivel, temperatura, viento, superficie, fatiga y estado de forma. Un entrenamiento lento puede ser exactamente lo correcto dentro de un plan.",
            "Para objetivos importantes, combina la calculadora con sensaciones, frecuencia cardiaca, historial de lesiones y progresion gradual.",
          ],
        },
      ],
    },
    "cpc-to-cpa-calculator-connect-click-cost-to-acquisition-cost": {
      title: "Calculadora CPC a CPA: conecta coste de clic con adquisicion",
      excerpt: "Ve como el coste por clic se traduce en CAC para juzgar calidad del trafico, no solo gasto publicitario.",
      seoTitle: "Calculadora CPC a CPA - Coste de clic a adquisicion",
      seoDescription: "Convierte CPC en CPA usando tasa de conversion y costes de campana.",
      sections: [
        {
          heading: "De CPC a CPA",
          body: [
            "El CPC mide cuanto pagas por cada clic. El CPA mide cuanto pagas por cada adquisicion, como un registro, compra o lead cualificado.",
            "La conexion principal es la tasa de conversion: CPA = CPC dividido por tasa de conversion. Si la conversion baja, el CPA sube aunque el CPC no cambie.",
          ],
        },
        {
          heading: "Que debes introducir",
          body: [
            "Usa un CPC que represente el periodo y canal que estas evaluando, junto con una tasa de conversion medida con el mismo denominador de clics.",
            "Evita mezclar clics de anuncios con sesiones del sitio si tu analitica no los atribuye igual. La consistencia del denominador hace que la comparacion sea util.",
          ],
        },
        {
          heading: "Como interpretar el resultado",
          body: [
            "Compara el CPA con margen, LTV o valor esperado del cliente. Un CPA bajo puede seguir siendo malo si atrae clientes de baja calidad.",
            "Prueba escenarios cambiando CPC y conversion para ver si conviene optimizar pujas, creatividad, landing page o cualificacion.",
          ],
        },
      ],
    },
    "email-conversion-rate-calculator-campaign-metrics-explained": {
      title: "Calculadora de conversion de email: metricas de campana explicadas",
      excerpt: "Mide cuantos destinatarios realizan la accion deseada, desde reservar demo hasta iniciar prueba o comprar.",
      seoTitle: "Calculadora de conversion de email - Metricas de campana",
      seoDescription: "Calcula tasa de conversion de email y entiende metricas de campanas.",
      sections: [
        {
          heading: "Que mide la conversion de email",
          body: [
            "La tasa de conversion de email muestra que porcentaje de destinatarios, aperturas o clics completa una accion objetivo, segun el denominador que elijas.",
            "La accion puede ser comprar, registrarse, reservar una demo, descargar un recurso o cualquier evento que represente valor para la campana.",
          ],
        },
        {
          heading: "Elige un denominador consistente",
          body: [
            "Para comparar campanas, define si usaras enviados, entregados, aperturas o clics. Cada opcion responde una pregunta distinta.",
            "La conversion sobre clics aisla mejor la pagina de destino, mientras que la conversion sobre entregados refleja el rendimiento completo del email.",
          ],
        },
        {
          heading: "Mejora la lectura de resultados",
          body: [
            "Segmenta por lista, asunto, oferta, dispositivo y fuente cuando haya volumen suficiente. Los promedios pueden ocultar problemas concretos.",
            "Ten cuidado con muestras pequenas, cambios de privacidad en aperturas y ventanas de atribucion. La tendencia suele ser mas fiable que una sola campana aislada.",
          ],
        },
      ],
    },
    "form-completion-rate-calculator-find-signup-friction": {
      title: "Calculadora de finalizacion de formularios: encuentra friccion de registro",
      excerpt: "Calcula cuantas personas terminan un formulario tras iniciarlo y detecta donde se pierde impulso.",
      seoTitle: "Calculadora de finalizacion de formularios - Encuentra friccion",
      seoDescription: "Mide finalizacion de formularios para detectar friccion en registros o captacion de leads.",
      sections: [
        {
          heading: "Que mide la tasa de finalizacion",
          body: [
            "La tasa de finalizacion de formulario compara cuantas personas empiezan un formulario con cuantas lo envian correctamente.",
            "Es util para detectar friccion en registros, solicitudes de demo, checkout, encuestas y formularios internos.",
          ],
        },
        {
          heading: "Donde aparece la friccion",
          body: [
            "Campos innecesarios, validaciones confusas, errores poco claros, carga lenta y requisitos de cuenta pueden reducir la finalizacion.",
            "Tambien importa la calidad del trafico. Personas poco cualificadas abandonaran mas aunque el formulario sea correcto.",
          ],
        },
        {
          heading: "Como actuar con el resultado",
          body: [
            "Compara la tasa por dispositivo, fuente de trafico y paso del formulario. Si el abandono se concentra en un campo, revisa texto, formato y necesidad real.",
            "No optimices solo por volumen. Un formulario mas corto puede aumentar envios pero bajar calidad si elimina datos necesarios para seguimiento.",
          ],
        },
      ],
    },
    "debt-to-income-ratio-calculator-borrowing-capacity-guide": {
      title: "Calculadora de deuda sobre ingresos: guia de capacidad de endeudamiento",
      excerpt: "Aprende como se calcula la relacion deuda-ingresos, por que la revisan prestamistas y como comparar escenarios.",
      seoTitle: "Calculadora de deuda sobre ingresos - Guia de capacidad",
      seoDescription: "Calcula relacion deuda-ingresos y entiende como influye en capacidad de endeudamiento.",
      sections: [
        {
          heading: "Que es la relacion deuda-ingresos",
          body: [
            "La relacion deuda-ingresos compara pagos mensuales de deuda con ingresos mensuales brutos. Los prestamistas la usan para estimar capacidad de pago y riesgo.",
            "Suele incluir pagos de hipoteca o alquiler, prestamos, tarjetas, coche y otras deudas recurrentes. Los gastos variables normales no siempre entran en la formula.",
          ],
        },
        {
          heading: "Como calcularla",
          body: [
            "Suma tus pagos mensuales de deuda y dividelo por tus ingresos mensuales brutos. Multiplica por 100 para obtener un porcentaje.",
            "Usa cifras actuales y verificables. Si tus ingresos cambian por comisiones, trabajo independiente o temporadas, calcula varios escenarios.",
          ],
        },
        {
          heading: "Como interpretar el rango",
          body: [
            "Una relacion menor suele dejar mas margen para emergencias y aprobacion de credito. Una relacion alta puede limitar opciones o encarecer el prestamo.",
            "Las reglas varian por pais, entidad y producto. Esta calculadora orienta, pero no sustituye una evaluacion formal de prestamo.",
          ],
        },
      ],
    },
    "savings-goal-calculator-how-much-to-save-each-month": {
      title: "Calculadora de meta de ahorro: cuanto ahorrar cada mes",
      excerpt: "Estima objetivos mensuales comparando importe objetivo, plazo, saldo inicial e interes esperado.",
      seoTitle: "Calculadora de meta de ahorro - Cuanto ahorrar cada mes",
      seoDescription: "Calcula ahorro mensual necesario para alcanzar una meta con plazo e interes.",
      sections: [
        {
          heading: "Define el objetivo de ahorro",
          body: [
            "Un objetivo claro necesita importe final, fecha objetivo, saldo inicial y, si corresponde, rendimiento esperado. Sin fecha, es dificil convertir el deseo en ahorro mensual.",
            "Ejemplos comunes son fondo de emergencia, entrada de vivienda, vacaciones, impuestos, estudios o compra importante.",
          ],
        },
        {
          heading: "Calculo mensual",
          body: [
            "Resta el saldo inicial del objetivo y divide por los meses disponibles. Si esperas intereses o rendimiento, el aporte necesario puede bajar, aunque tambien aumenta la incertidumbre.",
            "Para objetivos cercanos o esenciales, conviene usar supuestos conservadores y cuentas de bajo riesgo.",
          ],
        },
        {
          heading: "Ajusta si el numero no encaja",
          body: [
            "Si el ahorro mensual requerido es demasiado alto, puedes ampliar la fecha, reducir el objetivo, aumentar ingresos o separar el objetivo en hitos.",
            "Revisa el plan cuando cambien ingresos, gastos o prioridades. Automatizar transferencias ayuda a que el objetivo no dependa solo de fuerza de voluntad.",
          ],
        },
      ],
    },
    "retirement-withdrawal-calculator-safe-spending-estimates": {
      title: "Calculadora de retiros de jubilacion: estimaciones de gasto seguro",
      excerpt: "Entiende como funcionan estimaciones de retiro, que supuestos importan y por que revisar proyecciones.",
      seoTitle: "Calculadora de retiros de jubilacion - Estimaciones de gasto seguro",
      seoDescription: "Estima retiros de jubilacion y revisa supuestos de gasto, cartera y horizonte.",
      sections: [
        {
          heading: "Que estima una retirada de jubilacion",
          body: [
            "Una calculadora de retirada estima cuanto podrias gastar de una cartera durante la jubilacion segun saldo inicial, rentabilidad, inflacion y horizonte temporal.",
            "No predice el futuro. Los resultados dependen mucho del orden de rendimientos, impuestos, comisiones y cambios de gasto.",
          ],
        },
        {
          heading: "Tasa segura no significa garantizada",
          body: [
            "Reglas como el 4% son puntos de partida historicos, no promesas. Mercados, esperanza de vida y asignacion de activos pueden cambiar la sostenibilidad.",
            "Un plan flexible que ajusta gasto tras anos buenos o malos suele ser mas realista que una retirada fija ignorando el contexto.",
          ],
        },
        {
          heading: "Factores que debes anadir",
          body: [
            "Incluye pensiones, seguridad social, impuestos, seguros medicos, vivienda, cuidados de larga duracion y reservas de efectivo.",
            "Para decisiones irreversibles, revisa el plan con un asesor cualificado y considera escenarios pesimistas, no solo promedios.",
          ],
        },
      ],
    },
    "profit-margin-calculator-gross-vs-net-margin-explained": {
      title: "Calculadora de margen de beneficio: margen bruto vs neto explicado",
      excerpt: "Compara margen bruto y neto, aprende formulas y ve como las calculadoras ayudan a interpretar rendimiento.",
      seoTitle: "Calculadora de margen de beneficio - Bruto vs neto explicado",
      seoDescription: "Calcula margen bruto y neto para interpretar rentabilidad empresarial.",
      sections: [
        {
          heading: "Margen bruto frente a margen neto",
          body: [
            "El margen bruto compara beneficio bruto con ingresos y se centra en costes directos de producir o entregar el producto.",
            "El margen neto compara beneficio final con ingresos despues de gastos operativos, intereses, impuestos y otros costes.",
          ],
        },
        {
          heading: "Por que ambos importan",
          body: [
            "Un margen bruto sano muestra que el producto puede generar valor antes de gastos generales. Un margen neto sano muestra que el negocio completo puede retener beneficio.",
            "Si el margen bruto es bajo, el problema puede estar en precio o coste directo. Si el margen bruto es alto pero el neto bajo, revisa gastos operativos y escala.",
          ],
        },
        {
          heading: "Usa definiciones consistentes",
          body: [
            "Asegurate de clasificar costes de la misma forma en cada periodo. Mover gastos entre COGS y operacion cambia la lectura de los margenes.",
            "Compara con negocios similares solo cuando las definiciones contables y el modelo de ingresos sean razonablemente parecidos.",
          ],
        },
      ],
    },
    "ai-batch-processing-cost-calculator-reduce-unit-cost-with-queues": {
      title: "Calculadora de coste de procesamiento batch IA: reduce coste unitario con colas",
      excerpt: "Aprende como cargas batch en cola pueden cambiar la planificacion de costes de IA frente a inferencia en tiempo real.",
      seoTitle: "Calculadora de coste batch IA para cargas con cola",
      seoDescription: "Estima costes de procesamiento batch IA y compara cargas en cola con uso en tiempo real.",
      sections: [
        {
          heading: "Que es el procesamiento batch",
          body: [
            "El procesamiento batch agrupa solicitudes para ejecutarlas de forma diferida, normalmente cuando no necesitas respuesta inmediata.",
            "Algunos proveedores ofrecen tarifas mas bajas para batch, pero a cambio aceptas latencia mayor y gestion de cola.",
          ],
        },
        {
          heading: "Como cambia el coste unitario",
          body: [
            "Compara el precio normal por tokens con la tarifa batch para el mismo volumen de entrada y salida. Incluye reintentos, validacion y almacenamiento temporal.",
            "El ahorro real depende de que el trabajo pueda esperar y de que tu sistema maneje estados pendientes, errores parciales y reconciliacion.",
          ],
        },
        {
          heading: "Cuando conviene usarlo",
          body: [
            "Batch encaja bien para enriquecimiento de datos, clasificacion masiva, resumen de archivos, evaluaciones offline y tareas internas no urgentes.",
            "No suele encajar para chat interactivo, soporte en vivo o experiencias donde la latencia afecta conversion o satisfaccion.",
          ],
        },
      ],
    },
    "cached-token-pricing-calculator-when-prompt-caching-changes-cost": {
      title: "Calculadora de precio de tokens cacheados: cuando el cache de prompt cambia coste",
      excerpt: "Entiende como el cache de prompts afecta costes de tokens cuando se repite contexto en muchas solicitudes.",
      seoTitle: "Calculadora de precio de tokens cacheados para costes de prompt caching",
      seoDescription: "Modela precios de tokens cacheados, prompts repetidos y costes de IA.",
      sections: [
        {
          heading: "Que cambia el prompt caching",
          body: [
            "El prompt caching puede reducir el coste cuando reutilizas partes grandes y estables del prompt, como instrucciones del sistema, contexto fijo o documentos repetidos.",
            "Los tokens cacheados pueden tener una tarifa distinta a los tokens de entrada normales, segun proveedor y modelo.",
          ],
        },
        {
          heading: "Como estimar el ahorro",
          body: [
            "Separa tokens estables de tokens variables. Aplica precio de cache a la parte reutilizada y precio normal a la parte nueva, despues suma salida y otros costes.",
            "El beneficio aumenta cuando el mismo contexto se reutiliza muchas veces. Si cada solicitud es unica, el caching puede aportar poco.",
          ],
        },
        {
          heading: "Caveats operativos",
          body: [
            "Revisa reglas oficiales sobre TTL, tamano minimo, invalidacion y modelos compatibles. Un pequeno cambio en el prompt puede impedir que se use la cache.",
            "No presentes el ahorro como automatico. Debe validarse con metricas reales de aciertos de cache y facturacion.",
          ],
        },
      ],
    },
    "multimodal-ai-cost-calculator-text-image-and-audio-usage": {
      title: "Calculadora de coste de IA multimodal: texto, imagen y audio",
      excerpt: "Planifica costes multimodales entre texto, imagen y audio con supuestos claros de uso y precios.",
      seoTitle: "Calculadora de coste de IA multimodal para texto, imagen y audio",
      seoDescription: "Estima costes de IA multimodal por texto, imagen y audio verificando precios actuales.",
      sections: [
        {
          heading: "Costes multimodales",
          body: [
            "Las aplicaciones multimodales combinan texto, imagen, audio o video. Cada modalidad puede tener una unidad de facturacion distinta.",
            "Un flujo que parece simple puede incluir transcripcion, vision, generacion de texto, embeddings y almacenamiento de archivos.",
          ],
        },
        {
          heading: "Construye una estimacion completa",
          body: [
            "Divide el flujo en pasos: entrada de audio o imagen, procesamiento, tokens de texto, salidas generadas y revisiones. Estima el volumen mensual para cada paso.",
            "Usa precios oficiales para cada modalidad y modelo. No asumas que una imagen o minuto de audio equivale directamente a una cantidad fija de tokens si el proveedor no lo define asi.",
          ],
        },
        {
          heading: "Interpretacion responsable",
          body: [
            "La calidad, latencia y coste pueden variar mucho entre modelos. Un modelo mas caro puede reducir pasos manuales, pero tambien puede aumentar gasto si se usa sin controles.",
            "Incluye limites de subida, privacidad, retencion y cumplimiento en la decision, especialmente con datos sensibles.",
          ],
        },
      ],
    },
    "ai-app-margin-calculator-turn-model-costs-into-gross-margin": {
      title: "Calculadora de margen de app IA: convierte costes de modelo en margen bruto",
      excerpt: "Traduce uso de modelos IA en planificacion de margen conectando tokens, precios y comportamiento de clientes.",
      seoTitle: "Calculadora de margen de app IA para costes de modelo y margen bruto",
      seoDescription: "Estima margen bruto de apps IA desde costes de modelo, uso y planes de precio.",
      sections: [
        {
          heading: "Del coste de modelo al margen",
          body: [
            "Una app de IA necesita convertir el coste por uso en margen bruto. Para eso compara ingresos por cliente o accion con costes de modelo, infraestructura y soporte directo.",
            "El coste de tokens es importante, pero no siempre es el unico coste variable. Retrieval, almacenamiento, colas, observabilidad y revision humana tambien pueden contar.",
          ],
        },
        {
          heading: "Calcula margen por unidad",
          body: [
            "Estima ingreso por usuario, sesion, documento o tarea. Resta costes variables asociados y divide el beneficio bruto por el ingreso para obtener margen bruto.",
            "Prueba escenarios de usuarios ligeros, medios y pesados. Los promedios pueden ocultar clientes que consumen mas de lo que pagan.",
          ],
        },
        {
          heading: "Controla el riesgo de precios",
          body: [
            "Los precios de modelos, patrones de uso y mix de planes pueden cambiar. Revisa margenes con datos de produccion y no solo con supuestos de lanzamiento.",
            "Define limites de uso, cache, routing o precios por volumen si un segmento amenaza la sostenibilidad del producto.",
          ],
        },
      ],
    },
    "calorie-deficit-calculator-estimate-weight-change-carefully": {
      title: "Calculadora de deficit calorico: estima cambio de peso con cuidado",
      excerpt: "Aprende como funcionan estimaciones de deficit, por que el cambio de peso no es lineal y como usar calculadoras responsablemente.",
      seoTitle: "Calculadora de deficit calorico - Estima cambio de peso con cuidado",
      seoDescription: "Entiende deficits caloricos, calorias de mantenimiento y cautelas seguras.",
      sections: [
        {
          heading: "Que es un deficit calorico",
          body: [
            "Un deficit calorico significa consumir menos energia de la que gastas. Con el tiempo puede contribuir a perder peso, pero la relacion no es perfectamente lineal.",
            "El gasto cambia con actividad, adaptacion, cambios de peso, retencion de agua y precision de registro.",
          ],
        },
        {
          heading: "Usa estimaciones prudentes",
          body: [
            "Empieza con un deficit moderado y observa tendencias durante varias semanas. Cambios diarios de peso pueden reflejar agua, sal, ciclo menstrual o digestion.",
            "Deficits agresivos pueden afectar hambre, energia, entrenamiento y adherencia. Para muchas personas, la constancia pesa mas que la rapidez.",
          ],
        },
        {
          heading: "Cuidados importantes",
          body: [
            "No uses esta calculadora para diagnosticar, tratar o imponer restricciones extremas. Si tienes historial de trastornos alimentarios, embarazo, enfermedad o medicacion relevante, busca orientacion profesional.",
            "Combina la cifra con proteina adecuada, micronutrientes, descanso y senales del cuerpo, no solo con una meta matematica.",
          ],
        },
      ],
    },
    "hydration-calculator-water-needs-by-weight-and-activity": {
      title: "Calculadora de hidratacion: agua por peso y actividad",
      excerpt: "Estima necesidades diarias de agua desde peso, actividad y clima, entendiendo por que varian por persona.",
      seoTitle: "Calculadora de hidratacion - Agua por peso y actividad",
      seoDescription: "Estima ingesta de agua usando peso, actividad, ejercicio y clima.",
      sections: [
        {
          heading: "Que influye en la hidratacion",
          body: [
            "Las necesidades de agua dependen de peso corporal, actividad, temperatura, sudoracion, dieta, altitud y estado de salud.",
            "No toda el agua viene de vasos. Comida, cafe, te y otras bebidas tambien contribuyen, aunque algunas situaciones requieren mas atencion.",
          ],
        },
        {
          heading: "Ajusta por actividad y calor",
          body: [
            "Ejercicio, calor y humedad aumentan perdidas por sudor. En sesiones largas tambien puede importar reponer sodio, no solo agua.",
            "Usa el resultado como punto de partida y ajusta segun sed, color de orina, peso antes y despues de entrenar y tolerancia digestiva.",
          ],
        },
        {
          heading: "Evita extremos",
          body: [
            "Beber demasiado rapido o en exceso puede ser peligroso, especialmente durante eventos largos si no se equilibran electrolitos.",
            "Personas con enfermedad renal, cardiaca, embarazo o indicaciones medicas deben seguir recomendaciones profesionales antes que reglas generales.",
          ],
        },
      ],
    },
    "body-fat-percentage-chart-men-women-and-limitations": {
      title: "Tabla de porcentaje de grasa corporal: hombres, mujeres y limites",
      excerpt: "Entiende rangos de grasa corporal, por que las tablas difieren y por que interpretar calculos con cautela.",
      seoTitle: "Tabla de porcentaje de grasa corporal para hombres y mujeres",
      seoDescription: "Aprende como se usan tablas de grasa corporal y que limita estas estimaciones.",
      sections: [
        {
          heading: "Que muestra una tabla de grasa corporal",
          body: [
            "Una tabla de porcentaje de grasa corporal agrupa rangos aproximados para hombres y mujeres. Ayuda a contextualizar una medicion, pero no define por si sola la salud.",
            "Edad, masa muscular, distribucion de grasa, genetica y metodo de medicion cambian la interpretacion.",
          ],
        },
        {
          heading: "Metodos y margen de error",
          body: [
            "Basculas de bioimpedancia, plicometros, medidas corporales, DEXA y estimaciones visuales no dan el mismo resultado. Cada metodo tiene errores propios.",
            "Para seguimiento, usa el mismo metodo en condiciones parecidas y mira la tendencia mas que una cifra aislada.",
          ],
        },
        {
          heading: "Usa el contexto",
          body: [
            "Un porcentaje bajo no siempre es mejor. Rendimiento, energia, ciclo menstrual, fuerza, analisis clinicos y bienestar importan.",
            "Si buscas cambios importantes de composicion corporal, combina datos con apoyo profesional, especialmente en adolescentes, embarazo o antecedentes de trastornos alimentarios.",
          ],
        },
      ],
    },
    "calories-burned-walking-calculator-distance-pace-and-weight": {
      title: "Calculadora de calorias caminando: distancia, ritmo y peso",
      excerpt: "Estima calorias quemadas caminando combinando distancia, ritmo, peso corporal y supuestos de actividad.",
      seoTitle: "Calculadora de calorias caminando - Distancia, ritmo y peso",
      seoDescription: "Estima calorias quemadas al caminar desde distancia, ritmo, peso y condiciones.",
      sections: [
        {
          heading: "Que determina las calorias al caminar",
          body: [
            "Las calorias quemadas al caminar dependen sobre todo de distancia, peso corporal, ritmo, pendiente y eficiencia individual.",
            "A igual distancia, una persona con mas peso suele gastar mas energia. A igual tiempo, caminar mas rapido o con pendiente aumenta el gasto.",
          ],
        },
        {
          heading: "Como usar la estimacion",
          body: [
            "Introduce distancia o tiempo, ritmo aproximado y peso. Trata el resultado como una media razonable, no como medicion exacta.",
            "Pulseras y cintas tambien estiman con errores. Comparar tendencias puede ser mas util que perseguir una cifra perfecta.",
          ],
        },
        {
          heading: "Para planificar habitos",
          body: [
            "Caminar ayuda a aumentar actividad diaria con bajo coste de recuperacion. Puede combinarse con fuerza, movilidad y descanso.",
            "Si usas calorias caminadas para ajustar comida, evita compensaciones exactas. El apetito y el gasto real pueden variar de un dia a otro.",
          ],
        },
      ],
    },
    "checkout-conversion-rate-calculator-measure-purchase-drop-off": {
      title: "Calculadora de conversion de checkout: mide abandono de compra",
      excerpt: "Aprende a calcular conversion de checkout, detectar abandono y usar la metrica en ecommerce.",
      seoTitle: "Calculadora de conversion de checkout - Mide abandono de compra",
      seoDescription: "Mide cuantos compradores completan la compra tras llegar al checkout.",
      sections: [
        {
          heading: "Que mide la conversion de checkout",
          body: [
            "La tasa de conversion de checkout compara compradores que inician el checkout con quienes completan la compra.",
            "Es una metrica enfocada en friccion de compra, distinta de la conversion general del sitio desde visita hasta pedido.",
          ],
        },
        {
          heading: "Causas comunes de abandono",
          body: [
            "Costes inesperados, falta de metodos de pago, obligar a crear cuenta, errores de formulario, lentitud y dudas sobre envio o devoluciones pueden reducir la conversion.",
            "Tambien influyen trafico poco cualificado, comparacion de precios y compras aplazadas.",
          ],
        },
        {
          heading: "Como analizarla",
          body: [
            "Mide por paso, dispositivo, pais, metodo de pago y fuente de trafico. Un promedio global puede ocultar un problema muy localizado.",
            "Antes de cambiar muchas cosas, confirma que el tracking de inicio y compra usa la misma ventana y excluye pruebas internas.",
          ],
        },
      ],
    },
    "trial-to-paid-conversion-calculator-saas-funnel-guide": {
      title: "Calculadora trial-to-paid: guia de embudo SaaS",
      excerpt: "Calcula conversion de prueba a pago y evalua onboarding SaaS, preparacion de precios y cualificacion.",
      seoTitle: "Calculadora trial-to-paid para planificacion de embudo SaaS",
      seoDescription: "Calcula conversion de prueba a pago y evalua movimiento del embudo SaaS.",
      sections: [
        {
          heading: "Que mide trial a pago",
          body: [
            "La conversion de prueba a pago muestra que porcentaje de usuarios en trial se convierte en clientes de pago.",
            "Es clave para SaaS porque conecta adquisicion, activacion, valor percibido y estrategia de precios.",
          ],
        },
        {
          heading: "Define la cohorte correctamente",
          body: [
            "Usa una cohorte clara de trials iniciados y una ventana de conversion definida, por ejemplo 14, 30 o 45 dias.",
            "No mezcles pruebas gratuitas, freemium y demos asistidas si tienen comportamientos y denominadores diferentes.",
          ],
        },
        {
          heading: "Mejora con diagnostico",
          body: [
            "Segmenta por fuente, perfil de cliente, uso de funciones, invitaciones de equipo y momento de activacion. La conversion suele depender de llegar pronto al primer valor.",
            "Una tasa alta no siempre basta si atrae planes pequenos o clientes con alta cancelacion. Revisa tambien retencion y expansion.",
          ],
        },
      ],
    },
    "activation-rate-calculator-measure-first-value-moments": {
      title: "Calculadora de tasa de activacion: mide momentos de primer valor",
      excerpt: "Usa tasa de activacion para medir cuantos usuarios alcanzan un primer momento de valor durante onboarding o uso temprano.",
      seoTitle: "Calculadora de tasa de activacion - Mide primeros momentos de valor",
      seoDescription: "Calcula activacion, define eventos de primer valor y evalua onboarding.",
      sections: [
        {
          heading: "Que es la activacion",
          body: [
            "La activacion mide cuantas personas alcanzan un primer momento de valor despues de registrarse o empezar a usar un producto.",
            "Ese momento debe ser especifico: crear un proyecto, importar datos, invitar a un companero, completar una configuracion o generar el primer resultado util.",
          ],
        },
        {
          heading: "Elige un evento fiable",
          body: [
            "Un buen evento de activacion predice retencion o pago, no solo movimiento superficial. Abrir una pantalla puede ser demasiado debil si no demuestra valor.",
            "Define el denominador y la ventana temporal. Por ejemplo, usuarios nuevos que completan el evento dentro de siete dias.",
          ],
        },
        {
          heading: "Como interpretar cambios",
          body: [
            "Segmenta por canal, plan, dispositivo, rol y pais. Las mejoras de onboarding pueden ayudar a unos segmentos y perjudicar a otros.",
            "Valida la metrica con comportamiento posterior. Si sube la activacion pero no mejora retencion, quizas el evento no representa valor real.",
          ],
        },
      ],
    },
    "referral-conversion-rate-calculator-track-word-of-mouth-growth": {
      title: "Calculadora de conversion de referidos: sigue crecimiento boca a boca",
      excerpt: "Calcula conversion de referidos para entender como prospectos recomendados avanzan desde invitacion hasta accion.",
      seoTitle: "Calculadora de conversion de referidos para crecimiento boca a boca",
      seoDescription: "Calcula conversion de referidos y evalua el embudo de recomendaciones.",
      sections: [
        {
          heading: "Que mide la conversion de referidos",
          body: [
            "La conversion de referidos muestra que porcentaje de invitaciones, clics o usuarios recomendados completa la accion objetivo.",
            "Puede medir registros, compras, activaciones o clientes de pago, segun el diseno del programa.",
          ],
        },
        {
          heading: "Separa las etapas",
          body: [
            "Distingue invitaciones enviadas, invitaciones abiertas, clics, registros y conversiones finales. Cada paso tiene fricciones distintas.",
            "Usar solo una tasa global puede ocultar si el problema esta en el mensaje, el incentivo, la landing o el producto.",
          ],
        },
        {
          heading: "Calidad y abuso",
          body: [
            "No optimices solo el volumen. Referidos con baja retencion, incentivos caros o actividad fraudulenta pueden reducir el valor real.",
            "Incluye reglas claras, deduplicacion y seguimiento por cohorte para comparar referidos con otros canales de adquisicion.",
          ],
        },
      ],
    },
    "annual-percentage-yield-calculator-apy-vs-apr-explained": {
      title: "APY vs APR explicado",
      excerpt: "Aprende como difieren APY y APR, por que la capitalizacion cambia el resultado y como comparar tasas.",
      seoTitle: "APY vs APR explicado - Compara rendimiento y tasa anual",
      seoDescription: "Entiende diferencias entre APY y APR y como la capitalizacion afecta el rendimiento.",
      sections: [
        {
          heading: "APY frente a APR",
          body: [
            "APR expresa una tasa anual simple, normalmente sin reflejar el efecto de capitalizacion. APY muestra el rendimiento anual efectivo cuando los intereses se reinvierten.",
            "Por eso dos productos con la misma APR pueden tener distinto APY si capitalizan con distinta frecuencia.",
          ],
        },
        {
          heading: "Por que importa la capitalizacion",
          body: [
            "Cuanto mas frecuente es la capitalizacion, mayor puede ser el APY para una misma tasa nominal. La diferencia suele ser pequena a tasas bajas, pero crece con tasas altas o plazos largos.",
            "Para comparar cuentas de ahorro o inversiones de bajo riesgo, APY suele ser mas util que APR porque refleja el rendimiento efectivo.",
          ],
        },
        {
          heading: "Limitaciones y comisiones",
          body: [
            "APY no siempre incluye comisiones, impuestos, penalizaciones o requisitos de saldo. Lee las condiciones antes de decidir.",
            "Para deudas, la lectura puede cambiar: APR ayuda a comparar coste del credito, pero pagos, comisiones y calendario tambien importan.",
          ],
        },
      ],
    },
    "loan-amortization-calculator-principal-interest-schedule": {
      title: "Amortizacion de prestamos explicada",
      excerpt: "Entiende como la amortizacion separa cada pago entre principal e interes durante el calendario de devolucion.",
      seoTitle: "Calculadora de amortizacion de prestamo - Calendario de principal e interes",
      seoDescription: "Aprende como funciona la amortizacion y por que los pagos iniciales incluyen mas interes.",
      sections: [
        {
          heading: "Que es la amortizacion",
          body: [
            "La amortizacion divide cada pago de prestamo entre interes y principal. Al inicio suele haber mas interes; con el tiempo aumenta la parte que reduce principal.",
            "Un calendario muestra saldo restante, interes pagado y principal pagado en cada periodo.",
          ],
        },
        {
          heading: "Como leer el calendario",
          body: [
            "Revisa pago mensual, interes total, fecha de liquidacion y saldo despues de cada pago. Esto ayuda a entender el coste real del prestamo.",
            "Pagos extra al principal pueden reducir interes total y acortar el plazo, pero algunas entidades aplican reglas o penalizaciones.",
          ],
        },
        {
          heading: "Supuestos importantes",
          body: [
            "La calculadora normalmente asume tasa fija, pagos puntuales y calendario regular. Prestamos variables, comisiones, seguros o impuestos pueden cambiar el resultado.",
            "Confirma siempre condiciones oficiales del contrato antes de tomar decisiones de refinanciacion o prepago.",
          ],
        },
      ],
    },
    "car-loan-interest-calculator-estimate-total-cost": {
      title: "Interes y coste total de prestamo de coche",
      excerpt: "Aprende como interes, plazo, entrada y comisiones afectan al coste total de financiar un vehiculo.",
      seoTitle: "Calculadora de interes de coche - Estima coste total de auto",
      seoDescription: "Estima interes de auto, pagos mensuales y coste total de financiacion.",
      sections: [
        {
          heading: "Mas que el pago mensual",
          body: [
            "Un prestamo de coche puede parecer asequible por el pago mensual, pero el coste total depende de precio, entrada, tasa, plazo, impuestos, comisiones y valor de intercambio.",
            "Plazos mas largos reducen la cuota pero suelen aumentar el interes total y el riesgo de deber mas que el valor del coche.",
          ],
        },
        {
          heading: "Calcula el interes total",
          body: [
            "Compara el importe financiado con la suma de todos los pagos. La diferencia muestra el interes aproximado, antes de posibles comisiones adicionales.",
            "Prueba escenarios con mayor entrada, menor plazo o mejor tasa para ver que palanca reduce mas el coste.",
          ],
        },
        {
          heading: "Antes de firmar",
          body: [
            "Revisa APR, comisiones, seguros opcionales, penalizaciones por prepago y coste total financiado. No mires solo la cuota anunciada.",
            "Si el presupuesto es ajustado, incluye combustible, mantenimiento, seguro, matricula e imprevistos para evitar sobreendeudamiento.",
          ],
        },
      ],
    },
    "salary-to-hourly-calculator-convert-pay-rates": {
      title: "Conversion de salario a pago por hora",
      excerpt: "Convierte salario anual a pago por hora y entiende como horas, tiempo no pagado y frecuencia afectan la estimacion.",
      seoTitle: "Calculadora de salario a hora - Convierte tasas anuales",
      seoDescription: "Aprende a convertir salario anual a tarifa horaria y comparar pagos.",
      sections: [
        {
          heading: "Convertir salario a tarifa horaria",
          body: [
            "Para convertir salario anual a tarifa horaria, divide el salario por las horas trabajadas al ano. Una base comun es semanas trabajadas multiplicadas por horas semanales.",
            "La cifra cambia mucho si incluyes vacaciones pagadas, horas extra, bonos o trabajo no remunerado fuera de horario.",
          ],
        },
        {
          heading: "Comparar ofertas",
          body: [
            "Usa la tarifa horaria para comparar empleo asalariado, contrato, tiempo parcial y freelance. Anade beneficios, impuestos y estabilidad para una comparacion justa.",
            "Una tarifa freelance debe cubrir tiempo no facturable, seguro, herramientas, vacaciones y captacion de clientes.",
          ],
        },
        {
          heading: "Caveats laborales",
          body: [
            "Las reglas sobre horas extra, salario minimo y beneficios varian por pais y jurisdiccion. La calculadora no sustituye asesoramiento laboral o fiscal.",
            "Para decisiones importantes, calcula varios escenarios con horas reales, no solo con la jornada ideal del contrato.",
          ],
        },
      ],
    },
    "investment-return-calculator-annualized-vs-total-return": {
      title: "Calculadora de retorno de inversion: anualizado vs total",
      excerpt: "Aprende la diferencia entre retorno anualizado y total, y como cada estimacion ayuda a comparar rendimiento.",
      seoTitle: "Calculadora de retorno de inversion - Anualizado vs total",
      seoDescription: "Entiende retorno anualizado, retorno total y efectos del horizonte temporal.",
      sections: [
        {
          heading: "Retorno total y anualizado",
          body: [
            "El retorno total mide cuanto crecio o bajo una inversion durante todo el periodo. El retorno anualizado convierte ese resultado en una tasa media por ano.",
            "El anualizado facilita comparar inversiones con duraciones distintas, pero no muestra la volatilidad del camino.",
          ],
        },
        {
          heading: "Cuando usar cada uno",
          body: [
            "Usa retorno total para entender el cambio acumulado de capital. Usa retorno anualizado para comparar estrategias, fondos o periodos de distinta longitud.",
            "Si hubo aportes o retiros, una simple formula inicial-final puede ser insuficiente. Puede hacer falta rendimiento ponderado por dinero o por tiempo.",
          ],
        },
        {
          heading: "No ignores riesgo y costes",
          body: [
            "Comisiones, impuestos, inflacion y tipo de cambio pueden reducir el rendimiento neto. Una cifra bruta puede parecer mejor de lo que realmente fue.",
            "Compara retorno junto con riesgo, plazo, liquidez y objetivo financiero. Rendimientos pasados no garantizan resultados futuros.",
          ],
        },
      ],
    },
    "tax-rate-calculator-effective-vs-marginal-tax-rate": {
      title: "Calculadora de tasa fiscal: efectiva vs marginal",
      excerpt: "Compara tasas fiscales efectiva y marginal para interpretar mejor resultados de impuestos e ingresos.",
      seoTitle: "Calculadora de tasa fiscal - Efectiva vs marginal",
      seoDescription: "Aprende diferencias entre tasa efectiva y marginal y por que ambas importan.",
      sections: [
        {
          heading: "Tasa efectiva frente a marginal",
          body: [
            "La tasa marginal es el impuesto que se aplica al ultimo tramo de ingreso. La tasa efectiva es el impuesto total dividido por el ingreso total.",
            "En sistemas progresivos, la tasa marginal suele ser mayor que la efectiva porque no todo el ingreso se grava al tramo mas alto.",
          ],
        },
        {
          heading: "Por que se confunden",
          body: [
            "Subir de tramo no significa que todo tu ingreso anterior se grave a la nueva tasa. Normalmente solo la parte adicional cae en el tramo superior.",
            "La tasa efectiva ayuda a entender carga total, mientras que la marginal ayuda a evaluar ingresos extra, deducciones o decisiones de trabajo.",
          ],
        },
        {
          heading: "Usa datos locales",
          body: [
            "Las reglas fiscales dependen de pais, region, estado civil, deducciones, creditos y tipo de ingreso. Una calculadora generica solo puede orientar.",
            "Verifica tablas oficiales o consulta a un profesional antes de planificar pagos, retenciones o decisiones fiscales relevantes.",
          ],
        },
      ],
    },
    "revenue-growth-rate-calculator-monthly-and-annual-examples": {
      title: "Calculadora de crecimiento de ingresos: ejemplos mensuales y anuales",
      excerpt: "Entiende formulas de crecimiento de ingresos para comparaciones mensuales y anuales, incluidos errores comunes.",
      seoTitle: "Calculadora de crecimiento de ingresos - Ejemplos mensuales y anuales",
      seoDescription: "Aprende a calcular crecimiento de ingresos y comparar periodos con cuidado.",
      sections: [
        {
          heading: "Que mide el crecimiento de ingresos",
          body: [
            "La tasa de crecimiento compara ingresos de un periodo con otro. Puede medirse mensual, trimestral, anual o interanual.",
            "La formula basica es ingresos nuevos menos ingresos anteriores, dividido por ingresos anteriores.",
          ],
        },
        {
          heading: "Mensual frente a anual",
          body: [
            "El crecimiento mensual muestra cambios recientes y es util para negocios jovenes. El anual suaviza estacionalidad y ofrece una vista mas estable.",
            "No anualices un solo mes sin contexto. Un pico puntual puede dar una tasa anualizada poco realista.",
          ],
        },
        {
          heading: "Mejora la comparacion",
          body: [
            "Usa ingresos reconocidos de forma consistente: MRR, ARR, ventas netas o facturacion, segun el negocio. Mezclar definiciones debilita la metrica.",
            "Segmenta por producto, canal, pais o cohorte para entender de donde viene el crecimiento y si es sostenible.",
          ],
        },
      ],
    },
    "break-even-analysis-calculator-fixed-variable-costs-guide": {
      title: "Calculadora de analisis de equilibrio: guia de costes fijos y variables",
      excerpt: "Aprende como costes fijos, variables, precio y margen de contribucion forman el analisis de equilibrio.",
      seoTitle: "Calculadora de analisis de equilibrio - Costes fijos y variables",
      seoDescription: "Entiende analisis de equilibrio, costes fijos, variables y margen de contribucion.",
      sections: [
        {
          heading: "Que es el punto de equilibrio",
          body: [
            "El punto de equilibrio es el nivel de ventas donde ingresos y costes totales se igualan. Por debajo hay perdida; por encima empieza el beneficio.",
            "Depende de precio unitario, coste variable unitario y costes fijos.",
          ],
        },
        {
          heading: "Formula basica",
          body: [
            "Divide los costes fijos por el margen de contribucion por unidad. El margen de contribucion es precio menos coste variable unitario.",
            "Si vendes varios productos, usa un mix de ventas realista. Cambios en el mix pueden mover el punto de equilibrio.",
          ],
        },
        {
          heading: "Usos y limites",
          body: [
            "El analisis ayuda a fijar precios, planificar lanzamientos y evaluar volumen minimo necesario. Tambien muestra que costes tienen mas impacto.",
            "No asumas que precio, costes y demanda se mantienen constantes. Descuentos, capacidad, devoluciones y costes escalonados pueden cambiar el resultado.",
          ],
        },
      ],
    },
    "fine-tuning-cost-calculator-training-files-epochs-and-tokens": {
      title: "Calculadora de coste de fine-tuning: archivos, epocas y tokens",
      excerpt: "Estima costes de fine-tuning modelando tamano de archivos, tokens, epocas y ejecuciones de validacion.",
      seoTitle: "Calculadora de coste de fine-tuning - Tokens, epocas y archivos",
      seoDescription: "Estima costes de fine-tuning IA desde archivos, epocas, tokens y precios.",
      sections: [
        {
          heading: "Que impulsa el coste de fine-tuning",
          body: [
            "El coste de fine-tuning suele depender de tokens de entrenamiento, numero de epocas, modelo base y posible coste de inferencia del modelo ajustado.",
            "Preparacion de datos, evaluacion, almacenamiento y revisiones humanas tambien pueden formar parte del coste real del proyecto.",
          ],
        },
        {
          heading: "Calcula tokens de entrenamiento",
          body: [
            "Estima tokens en tus archivos de entrenamiento y multiplicalos por las epocas previstas. Mas epocas no siempre significan mejor resultado y pueden aumentar sobreajuste.",
            "Separa costes de entrenamiento de costes de uso posterior. Un modelo ajustado barato de entrenar puede ser caro si se consulta a gran escala.",
          ],
        },
        {
          heading: "Verificacion y calidad",
          body: [
            "Comprueba limites de formato, tamano, modelos compatibles y precios oficiales antes de publicar. Las plataformas cambian requisitos y tarifas.",
            "Reserva presupuesto para evaluacion. Sin un conjunto de prueba, es dificil saber si el fine-tuning mejoro realmente frente a prompting o retrieval.",
          ],
        },
      ],
    },
    "ai-evaluation-cost-calculator-test-sets-judges-and-runs": {
      title: "Calculadora de coste de evaluacion IA: tests, jueces y ejecuciones",
      excerpt: "Planifica costes de evaluacion IA estimando tamano de test, uso de juez, repeticiones y revision.",
      seoTitle: "Calculadora de coste de evaluacion IA - Tests, jueces y ejecuciones",
      seoDescription: "Estima costes de evaluacion IA con casos de prueba, modelos juez y ejecuciones repetidas.",
      sections: [
        {
          heading: "Que cuesta evaluar IA",
          body: [
            "La evaluacion de IA puede incluir ejecutar un conjunto de pruebas, generar respuestas, usar jueces automaticos, revisar muestras manualmente y almacenar resultados.",
            "El coste crece con numero de casos, modelos comparados, repeticiones por caso y longitud de prompts y respuestas.",
          ],
        },
        {
          heading: "Disena una estimacion",
          body: [
            "Multiplica casos de prueba por ejecuciones, modelos y tokens estimados. Si usas un juez LLM, anade sus tokens de entrada y salida por evaluacion.",
            "Incluye tambien tiempo humano para revisar fallos, etiquetar ejemplos y mantener criterios de calidad.",
          ],
        },
        {
          heading: "No solo mires coste",
          body: [
            "Una evaluacion demasiado pequena puede ahorrar dinero pero no detectar regresiones importantes. Una demasiado grande puede ser lenta y cara sin aportar mas confianza.",
            "Empieza con casos representativos, automatiza lo repetible y reserva revision humana para decisiones sensibles o ambiguas.",
          ],
        },
      ],
    },
    "llm-routing-cost-calculator-balance-quality-latency-and-price": {
      title: "Calculadora de coste de routing LLM: equilibra calidad, latencia y precio",
      excerpt: "Estima cargas LLM enrutadas modelando mezcla de trafico, niveles de modelo, fallback, latencia y tokens.",
      seoTitle: "Calculadora de routing LLM - Calidad, latencia y precio",
      seoDescription: "Estima costes de routing LLM entre niveles de modelo, fallback, volumen y tokens.",
      sections: [
        {
          heading: "Que es el routing de LLM",
          body: [
            "El routing envia distintas solicitudes a distintos modelos segun complejidad, riesgo, latencia o coste esperado.",
            "La idea es no usar siempre el modelo mas caro si un modelo ligero puede resolver parte del trabajo con calidad suficiente.",
          ],
        },
        {
          heading: "Como estimar ahorro",
          body: [
            "Define porcentajes de trafico por ruta, tokens medios y precio de cada modelo. Compara el coste combinado con un escenario donde todo va al mismo modelo.",
            "Incluye reintentos, escalados a modelos mejores y evaluacion de calidad. Si muchas solicitudes fallan y se repiten, el ahorro puede desaparecer.",
          ],
        },
        {
          heading: "Equilibrio con calidad",
          body: [
            "El routing debe medirse con resultados reales, no solo con precio. Latencia, consistencia, seguridad y satisfaccion del usuario tambien importan.",
            "Usa politicas claras para tareas sensibles y monitoriza cambios de mix de trafico, porque pueden alterar coste y calidad con el tiempo.",
          ],
        },
      ],
    },
    "gpu-vs-api-cost-calculator-when-hosting-might-matter": {
      title: "Calculadora GPU vs API: cuando puede importar el hosting",
      excerpt: "Compara uso de API de IA con escenarios de GPU propia usando volumen, utilizacion, infraestructura y operaciones.",
      seoTitle: "Calculadora GPU vs API - Compara hosting y costes de API IA",
      seoDescription: "Estima cuando el hosting GPU puede importar comparando API, utilizacion y operaciones.",
      sections: [
        {
          heading: "API frente a hosting propio",
          body: [
            "Usar una API evita gran parte de la operacion de infraestructura, mientras que alojar modelos requiere GPU, despliegue, escalado, monitorizacion y mantenimiento.",
            "El hosting puede tener sentido con volumen alto, requisitos de control o modelos especializados, pero no siempre reduce el coste total.",
          ],
        },
        {
          heading: "Costes que comparar",
          body: [
            "Compara coste por solicitud o por token de la API con coste de GPU, utilizacion, personal, almacenamiento, red, observabilidad y tiempo de inactividad.",
            "La utilizacion es critica. Una GPU cara infrautilizada puede costar mas que una API flexible.",
          ],
        },
        {
          heading: "Decisiones no solo financieras",
          body: [
            "Privacidad, latencia, residencia de datos, personalizacion y dependencia de proveedor pueden justificar una opcion aunque no sea la mas barata.",
            "Prueba con cargas reales antes de migrar. Benchmarks pequenos pueden no reflejar colas, picos, fallos y coste operativo continuo.",
          ],
        },
      ],
    },
    "healthy-weight-range-calculator-bmi-and-context": {
      title: "Calculadora de rango de peso saludable: BMI y contexto",
      excerpt: "Aprende como BMI estima un rango saludable, por que importa el contexto y cuando tratar resultados con cautela.",
      seoTitle: "Calculadora de rango de peso saludable - Guia BMI y contexto",
      seoDescription: "Usa BMI, altura, peso y composicion corporal para entender rangos saludables como estimaciones educativas.",
      sections: [
        {
          heading: "Que aporta el BMI",
          body: [
            "El BMI relaciona peso y altura para ubicar a una persona en rangos poblacionales. Es facil de calcular y util para cribado general.",
            "No mide directamente grasa corporal, masa muscular, distribucion de grasa ni salud metabolica.",
          ],
        },
        {
          heading: "Rango saludable con contexto",
          body: [
            "Un rango de peso basado en BMI puede orientar, pero debe interpretarse junto con edad, sexo, composicion corporal, historial medico y objetivos personales.",
            "Atletas, personas mayores, embarazadas y personas con mucha o poca masa muscular pueden recibir una clasificacion poco representativa.",
          ],
        },
        {
          heading: "Uso prudente",
          body: [
            "No uses el resultado como juicio personal ni diagnostico. Observa tambien energia, fuerza, analisis clinicos, presion arterial, habitos y bienestar.",
            "Para cambios de peso importantes o dudas medicas, consulta con un profesional de salud.",
          ],
        },
      ],
    },
    "daily-calorie-needs-for-women-and-men-calculator-guide": {
      title: "Necesidades diarias de calorias para mujeres y hombres: guia de calculadora",
      excerpt: "Entiende como se estiman necesidades diarias desde BMR, actividad, edad, altura, peso y sexo.",
      seoTitle: "Guia de calculadora de calorias diarias para mujeres y hombres",
      seoDescription: "Aprende como se estiman calorias diarias con BMR, multiplicadores de actividad y cautelas.",
      sections: [
        {
          heading: "Como se estiman calorias diarias",
          body: [
            "Las necesidades caloricas diarias suelen partir de BMR y se ajustan por actividad para estimar TDEE.",
            "Edad, altura, peso, sexo, masa muscular, actividad y objetivos influyen en la cifra.",
          ],
        },
        {
          heading: "Diferencias entre mujeres y hombres",
          body: [
            "Las formulas suelen usar coeficientes distintos por sexo porque reflejan promedios de composicion corporal y metabolismo. Aun asi, hay mucha variacion individual.",
            "El ciclo menstrual, embarazo, lactancia, menopausia, entrenamiento y cambios de peso pueden modificar necesidades reales.",
          ],
        },
        {
          heading: "Ajusta con datos reales",
          body: [
            "Usa la calculadora como punto de partida y observa tendencia de peso, hambre, energia y rendimiento durante varias semanas.",
            "Evita restricciones extremas. Si tienes una condicion medica, embarazo, lactancia o historial de trastornos alimentarios, busca orientacion profesional.",
          ],
        },
      ],
    },
    "water-intake-for-exercise-calculator-hydration-planning": {
      title: "Calculadora de agua para ejercicio: planificacion de hidratacion",
      excerpt: "Aprende como ejercicio, peso, clima y distancia influyen en la hidratacion antes, durante y despues.",
      seoTitle: "Calculadora de agua para ejercicio y guia de hidratacion",
      seoDescription: "Planifica hidratacion para ejercicio con estimaciones de agua, actividad, peso y distancia.",
      sections: [
        {
          heading: "Planificar hidratacion para ejercicio",
          body: [
            "Durante el ejercicio pierdes agua y electrolitos por sudor. La cantidad depende de duracion, intensidad, calor, humedad, ropa y tasa de sudor individual.",
            "Un plan basico puede estimar cuanto beber antes, durante y despues, pero debe ajustarse a tolerancia y condiciones reales.",
          ],
        },
        {
          heading: "Usa peso y duracion como guia",
          body: [
            "Pesarte antes y despues de entrenar puede aproximar perdida de liquido. Una bajada grande sugiere que necesitas beber mas o reponer mejor.",
            "En sesiones largas, el sodio y otros electrolitos pueden ser tan importantes como el agua, especialmente con mucho sudor.",
          ],
        },
        {
          heading: "Seguridad primero",
          body: [
            "Beber en exceso sin electrolitos puede causar problemas. No fuerces grandes cantidades si hay nauseas, hinchazon o malestar.",
            "Personas con condiciones renales, cardiacas o recomendaciones medicas especificas deben seguir indicaciones profesionales.",
          ],
        },
      ],
    },
    "weight-loss-percentage-calculator-track-change-safely": {
      title: "Calculadora de porcentaje de perdida de peso: sigue el cambio con seguridad",
      excerpt: "Aprende a calcular porcentaje de perdida de peso, interpretar tendencias y evitar leer de mas cambios breves.",
      seoTitle: "Calculadora de porcentaje de perdida de peso - Sigue progreso con seguridad",
      seoDescription: "Calcula porcentaje de perdida de peso desde peso inicial y actual, con cautelas de interpretacion.",
      sections: [
        {
          heading: "Que mide el porcentaje de perdida",
          body: [
            "El porcentaje de perdida de peso compara el cambio con el peso inicial. Permite comparar avances entre personas o periodos con pesos iniciales distintos.",
            "La formula es peso perdido dividido por peso inicial, multiplicado por 100.",
          ],
        },
        {
          heading: "Seguimiento sin obsesion",
          body: [
            "Usa promedios semanales o mensuales para reducir ruido de agua, sal, digestion y ciclo menstrual. El peso diario puede fluctuar aunque la tendencia vaya bien.",
            "Tambien registra fuerza, energia, medidas, ropa, adherencia y bienestar. El peso no cuenta toda la historia.",
          ],
        },
        {
          heading: "Cambios seguros",
          body: [
            "Perdidas muy rapidas pueden aumentar riesgo de fatiga, deficit nutricional, perdida muscular o rebote. La velocidad adecuada depende del contexto.",
            "Si hay enfermedad, embarazo, medicacion, bajo peso o historial de trastornos alimentarios, consulta con un profesional antes de perseguir objetivos de perdida.",
          ],
        },
      ],
    },
  },
} satisfies {
  readonly categories: Record<CategorySlug, SeoTranslation>;
  readonly calculators: Record<CalculatorSlug, SeoTranslation>;
  readonly blogPosts: Record<BlogPostSlug, BlogPostTranslation>;
};
