import type { BlogPostSlug } from "@/types/content";
import type { BlogPostTranslation, ContentTranslations } from "./types";

const translatedBlogSection = (
  heading: string,
  ...body: readonly string[]
) => ({
  heading,
  body,
});

const simplifiedChineseBlogPostTranslations = {
  "how-to-calculate-roi": {
    title: "如何计算 ROI",
    excerpt: "了解 ROI 公式、投资回报率的计算方法，以及 ROI 可能误导判断的场景。",
    seoTitle: "如何计算 ROI - 公式、示例和计算器",
    seoDescription: "学习用 ROI 公式、实际示例和免费 ROI 计算器计算投资回报率。",
    sections: [
      translatedBlogSection("ROI 的含义", "ROI 用收益与成本的关系衡量投资表现。它适合快速比较项目，但不能单独说明现金流、风险或回收周期。"),
      translatedBlogSection("ROI 公式", "常用公式是 ROI =（收益 - 成本）/ 成本 x 100。输入越清晰，计算出的百分比越有解释价值。"),
      translatedBlogSection("示例", "如果投入 2,000 美元并获得 2,800 美元回报，ROI 为 40%。比较方案时仍要同时查看时间、费用和风险。"),
    ],
  },
  "what-is-compound-interest": {
    title: "什么是复利",
    excerpt: "了解复利、复利频率，以及时间为什么会改变储蓄增长。",
    seoTitle: "什么是复利？公式和示例",
    seoDescription: "了解复利的含义、公式如何运作，以及如何估算储蓄增长。",
    sections: [
      translatedBlogSection("复利定义", "复利会把已赚取的利息加入本金，使之后的利息也能继续产生利息。"),
      translatedBlogSection("复利公式", "常见公式是 A = P(1 + r/n)^(nt)。本金、利率、计息频率和时间都会改变最终余额。"),
      translatedBlogSection("为什么重要", "复利的效果通常随时间放大。它适合做储蓄和投资规划，但利率、费用和税务会影响实际结果。"),
    ],
  },
  "mortgage-vs-loan": {
    title: "房贷与贷款的区别",
    excerpt: "比较房贷和一般贷款，包括抵押品、期限、还款和利息。",
    seoTitle: "房贷 vs 贷款 - 关键区别和计算器",
    seoDescription: "了解房贷和贷款的区别，并用免费计算器比较还款额。",
    sections: [
      translatedBlogSection("简短区别", "房贷通常以房产作抵押，一般贷款可能用于更多目的，抵押和审批要求也可能不同。"),
      translatedBlogSection("还款和期限差异", "房贷期限往往更长，还款结构更接近摊销贷款；短期贷款的月供、利息和费用可能更集中。"),
      translatedBlogSection("该用哪个计算器", "比较住房融资时用房贷计算器；比较个人、汽车或一般债务时，用对应贷款计算器会更贴近实际。"),
    ],
  },
  "what-is-bmi": {
    title: "什么是 BMI",
    excerpt: "了解身体质量指数的含义、计算方式，以及什么时候适合使用。",
    seoTitle: "什么是 BMI？身体质量指数说明",
    seoDescription: "了解 BMI、BMI 公式、常见 BMI 范围，以及如何负责任地使用 BMI 计算器。",
    sections: [
      translatedBlogSection("BMI 衡量什么", "BMI 用身高和体重给出筛查数字，帮助粗略判断体重区间，但不能直接测量体脂。"),
      translatedBlogSection("BMI 公式", "公制公式是 BMI = 体重(kg) / 身高(m)^2。英制输入通常需要换算系数。"),
      translatedBlogSection("BMI 的限制", "运动员、儿童、孕期人群和老年人需要更多背景。BMI 结果不应被当作医学诊断。"),
    ],
  },
  "bmi-chart-guide": {
    title: "BMI 图表指南",
    excerpt: "阅读 BMI 分类、健康 BMI 范围，以及如何解读 BMI 图表的简明指南。",
    seoTitle: "BMI 图表指南 - 分类和健康 BMI 范围",
    seoDescription: "用这份 BMI 图表指南理解 BMI 分类、健康 BMI 范围和计算器结果。",
    sections: [
      translatedBlogSection("BMI 分类", "常见成人分类包括偏瘦、健康范围、超重和肥胖。分类只是筛查参考。"),
      translatedBlogSection("健康 BMI 范围", "许多成人参考范围为 18.5 到 24.9，但个人健康状况、体型和年龄会改变解读。"),
      translatedBlogSection("如何使用 BMI 图表", "先计算 BMI，再对照图表查看区间。若结果与身体状况不符，应结合其他指标或专业建议。"),
    ],
  },
  "openai-api-pricing-explained": {
    title: "OpenAI API 定价说明",
    excerpt: "了解基于 token 的 OpenAI API 定价，以及使用量如何影响成本。",
    seoTitle: "OpenAI API 定价说明 - Token 成本指南",
    seoDescription: "了解 OpenAI API 定价、token 计数方式，以及如何估算 API 使用成本。",
    sections: [
      translatedBlogSection("API 定价如何运作", "OpenAI API 成本通常取决于模型、输入 token、输出 token 和请求量。"),
      translatedBlogSection("为什么 token 重要", "token 是计费和上下文长度的基础单位。长提示词、长回答和重复请求都会增加支出。"),
      translatedBlogSection("如何估算成本", "先估算每次请求的输入/输出 token，再乘以请求量和模型费率。发布预算前应核对官方价格。"),
    ],
  },
  "how-mortgage-interest-works": {
    title: "房贷利息如何运作",
    excerpt: "了解房贷利息、摊销和月供计算。",
    seoTitle: "房贷利息如何运作 - 简明指南",
    seoDescription: "了解房贷利息如何影响月供、总贷款成本和摊销计划。",
    sections: [
      translatedBlogSection("房贷利息基础", "房贷利息按未还本金和利率计算。利率、贷款额和期限共同决定每月还款。"),
      translatedBlogSection("摊销", "摊销会让每期还款在本金和利息之间分配。早期通常利息占比更高，后期本金占比提高。"),
      translatedBlogSection("使用计算器", "计算器可以比较不同利率、期限和首付方案，但税费、保险和费用也应纳入住房成本。"),
    ],
  },
  "claude-token-costs-explained": {
    title: "Claude Token 成本说明",
    excerpt: "了解 Claude 在提示词、生成结果和 AI 产品中的 token 定价方式。",
    seoTitle: "Claude Token 成本说明 - AI 定价指南",
    seoDescription: "了解 Claude token 成本、输入和输出定价，以及如何估算 AI 工作负载支出。",
    sections: [
      translatedBlogSection("Token 成本基础", "Claude 成本通常按输入 token 和输出 token 分别估算，不同模型费率可能不同。"),
      translatedBlogSection("成本控制", "控制提示词长度、输出长度、重试次数和模型选择，可以让预算更可预测。"),
      translatedBlogSection("上线前估算", "在发布 AI 功能前，应按真实请求量建模，并核对 Anthropic/Claude 官方价格。"),
    ],
  },
  "loan-payment-calculator-estimate-monthly-payments": {
    title: "贷款还款计算器：估算每月还款",
    excerpt: "了解如何用本金、利率和期限估算每月贷款还款，以及哪些因素会改变实际金额。",
    seoTitle: "贷款还款计算器 - 估算每月还款",
    seoDescription: "了解如何用贷款金额、利率和还款期限估算月供，并查看实用示例和借款注意事项。",
    sections: [
      translatedBlogSection("每月贷款还款包含什么", "月供通常包含本金和利息，有些贷款还可能包含费用、保险或其他附加成本。"),
      translatedBlogSection("如何估算还款", "输入贷款金额、利率和期限即可估算摊销还款。更长期限可能降低月供，但增加总利息。"),
      translatedBlogSection("估算何时会不同", "实际结果会受费用、提前还款、利率变化和贷款合同影响。签约前应核对贷款文件。"),
    ],
  },
  "how-to-calculate-compound-interest-formula-and-examples": {
    title: "如何计算复利：公式和示例",
    excerpt: "了解复利公式、计息频率如何影响增长，以及如何用现实预期解读计算器结果。",
    seoTitle: "如何计算复利 - 公式和示例",
    seoDescription: "学习复利公式，查看实际示例，并了解利率、时间和计息频率如何影响储蓄或投资增长。",
    sections: [
      translatedBlogSection("复利意味着什么", "复利会让利息加入余额继续增长，因此时间越长，增长曲线可能越明显。"),
      translatedBlogSection("标准公式", "A = P(1 + r/n)^(nt) 可用于估算终值，其中 n 表示每年计息次数。"),
      translatedBlogSection("示例和重要限制", "计算器适合比较方案，但市场收益、手续费、税费和提前取款会改变实际结果。"),
    ],
  },
  "break-even-calculator-units-revenue-and-fixed-costs": {
    title: "盈亏平衡计算器：销量、收入和固定成本",
    excerpt: "了解盈亏平衡计算如何运作、哪些输入最重要，以及利润率假设为何会快速改变答案。",
    seoTitle: "盈亏平衡计算器 - 销量、收入和固定成本",
    seoDescription: "学习如何用固定成本、售价和可变成本计算盈亏平衡销量和收入，并了解商业规划注意事项。",
    sections: [
      translatedBlogSection("盈亏平衡的含义", "盈亏平衡点表示收入刚好覆盖固定和可变成本，利润约为零的销售水平。"),
      translatedBlogSection("计算器使用的输入", "关键输入包括固定成本、单价和单位可变成本。贡献毛利越高，所需销量通常越低。"),
      translatedBlogSection("谨慎使用结果", "结果依赖成本和价格假设。折扣、退货、税费和产能限制都可能影响实际盈亏。"),
    ],
  },
  "ai-api-cost-calculator-estimate-monthly-token-spend": {
    title: "AI API 成本计算器：估算每月 token 支出",
    excerpt: "学习如何在账单超预期前，根据请求量、token 用量和模型定价估算每月 AI API 成本。",
    seoTitle: "AI API 成本计算器 - 估算每月 token 支出",
    seoDescription: "结合请求量、输入 token、输出 token 和供应商价格估算每月 AI API 成本，并了解预算注意事项。",
    sections: [
      translatedBlogSection("为什么 AI API 成本难预测", "请求量、提示词长度、输出长度、重试和模型选择都会让 AI API 成本波动。"),
      translatedBlogSection("如何估算每月 token 支出", "按典型请求估算输入和输出 token，再乘以月请求量和当前模型费率。"),
      translatedBlogSection("发布或预算前的定价注意事项", "AI 价格和模型名称可能变化。公开成本建议前必须核对官方定价。"),
    ],
  },
  "token-cost-calculator-input-vs-output-tokens-explained": {
    title: "Token 成本计算器：输入与输出 token 说明",
    excerpt: "了解输入 token 和输出 token 的区别、为什么分开定价，以及这如何影响 AI 成本估算。",
    seoTitle: "Token 成本计算器 - 输入与输出 token 说明",
    seoDescription: "了解输入 token 和输出 token 如何影响 AI API 定价、为什么输出可能更贵，以及如何准确估算支出。",
    sections: [
      translatedBlogSection("输入和输出 token 的含义", "输入 token 来自提示词、上下文和用户内容；输出 token 来自模型生成的回答。"),
      translatedBlogSection("为什么输出长度会推高账单", "许多模型对输出 token 采用不同费率。长回答和多轮生成会显著增加成本。"),
      translatedBlogSection("如何负责任地使用 token 估算", "估算应包含平均值和高峰场景，并用真实日志校正，而不是只看单次请求。"),
    ],
  },
  "llm-cost-calculator-compare-models-by-usage-scenario": {
    title: "LLM 成本计算器：按使用场景比较模型",
    excerpt: "按模型和使用模式比较 LLM 成本，为聊天、摘要、编码或文档流程选择合适模型。",
    seoTitle: "LLM 成本计算器 - 按使用场景比较模型",
    seoDescription: "用 LLM 成本计算器按场景、token 数量、输入输出比例和预计月用量比较模型定价。",
    sections: [
      translatedBlogSection("模型成本取决于工作负载", "聊天、摘要、代码和文档问答的 token 结构不同，不能只用单一请求价格比较。"),
      translatedBlogSection("比较场景，而不只是费率", "同时比较输入/输出比例、请求量、质量需求和延迟要求，才能选出合适模型。"),
      translatedBlogSection("检查定价和运营细节", "正式预算前应核对供应商价格、速率限制、缓存、重试和监控成本。"),
    ],
  },
  "bmr-calculator-estimate-your-basal-metabolic-rate": {
    title: "BMR 计算器：估算基础代谢率",
    excerpt: "了解基础代谢率的含义、BMR 计算器如何估算，以及如何把该数字作为实用起点。",
    seoTitle: "BMR 计算器 - 估算基础代谢率",
    seoDescription: "用 BMR 计算器估算静息基础热量需求。了解影响 BMR 的因素，以及为什么结果只是估算而非医疗建议。",
    sections: [
      translatedBlogSection("BMR 衡量什么", "BMR 估算身体在静息状态下维持基本功能所需的能量。"),
      translatedBlogSection("如何使用估算值", "BMR 常作为计算 TDEE 或热量目标的基础，再结合活动水平调整。"),
      translatedBlogSection("限制和健康注意事项", "公式无法评估病史、药物、孕期或临床营养需求。结果应作为教育参考。"),
    ],
  },
  "calorie-calculator-estimate-daily-calorie-needs": {
    title: "热量计算器：估算每日热量需求",
    excerpt: "了解热量计算器如何估算每日能量需求，以及如何解读结果而不把它当作精确目标。",
    seoTitle: "热量计算器 - 估算每日热量需求",
    seoDescription: "用热量计算器估算每日热量需求，并了解活动水平、目标和个体差异如何影响结果。",
    sections: [
      translatedBlogSection("热量计算器估算什么", "计算器通常用 BMR、活动水平和目标估算每日能量需求。"),
      translatedBlogSection("活动水平很重要", "久坐、轻度活动和高强度训练会显著改变 TDEE，因此活动输入应尽量真实。"),
      translatedBlogSection("结合背景使用结果", "体重趋势、睡眠、压力、健康状况和饮食质量都会影响实际效果。"),
    ],
  },
  "bmi-vs-body-fat-percentage-which-number-is-more-useful": {
    title: "BMI 与体脂率：哪个数字更有用？",
    excerpt: "比较 BMI 和体脂率，了解每个数字能说明什么、不能说明什么，以及为什么背景很重要。",
    seoTitle: "BMI vs 体脂率 - 哪个数字更有用？",
    seoDescription: "了解 BMI 和体脂率的区别，包括优势、限制，以及为什么两者都不应单独使用。",
    sections: [
      translatedBlogSection("BMI 能告诉你什么", "BMI 快速比较身高和体重，适合筛查体重区间，但不能区分肌肉和脂肪。"),
      translatedBlogSection("体脂率补充了什么", "体脂率更接近身体组成，但测量方法、设备和操作会影响准确性。"),
      translatedBlogSection("应该使用哪个数字", "两者都应结合健康背景、趋势和专业建议使用，而不是单独判断健康状态。"),
    ],
  },
  "conversion-rate-calculator-measure-website-performance": {
    title: "转化率计算器：不靠猜测衡量网站表现",
    excerpt: "用转化率计算器查看网站把访客转为线索、注册或客户的效率。",
    seoTitle: "转化率计算器 - 衡量网站表现",
    seoDescription: "学习如何计算转化率、什么算转化，以及如何用该数字评估网站表现。",
    sections: [
      translatedBlogSection("转化率真正说明什么", "转化率显示访问者完成目标动作的比例，例如提交表单、注册或购买。"),
      translatedBlogSection("实用计算方法", "用完成转化的人数除以合适的访问或会话基数，再乘以 100。分母选择很关键。"),
      translatedBlogSection("创始人和营销人员如何使用结果", "用它比较渠道、页面和实验，但也要查看流量质量、样本量和收入结果。"),
    ],
  },
  "roas-calculator-estimate-return-on-ad-spend": {
    title: "ROAS 计算器：扩量前估算广告支出回报",
    excerpt: "用 ROAS 计算器估算每花 1 美元广告费带来多少收入。",
    seoTitle: "ROAS 计算器 - 估算广告支出回报",
    seoDescription: "学习如何计算 ROAS、何时使用它，以及如何解读广告表现而不依赖模糊渠道摘要。",
    sections: [
      translatedBlogSection("为什么 ROAS 影响日常营销决策", "ROAS 帮助判断广告收入是否覆盖投放支出，是渠道扩量前的基础指标。"),
      translatedBlogSection("这个数字背后的简单公式", "ROAS = 广告带来的收入 / 广告支出。输入口径必须一致。"),
      translatedBlogSection("如何解读 ROAS 而不过度理解", "高 ROAS 不一定代表利润高，还要考虑毛利、归因、退款、CAC 和长期 LTV。"),
    ],
  },
  "cac-calculator-how-to-calculate-customer-acquisition-cost": {
    title: "CAC 计算器：清晰计算获客成本",
    excerpt: "用 CAC 计算器了解通过销售和营销获得每位新客户的真实成本。",
    seoTitle: "CAC 计算器 - 如何计算获客成本",
    seoDescription: "学习如何计算获客成本、应包含哪些费用，以及如何在增长规划中使用 CAC。",
    sections: [
      translatedBlogSection("CAC 帮你理解什么", "CAC 展示获取一个新客户平均需要多少销售和营销支出。"),
      translatedBlogSection("用正确输入计算 CAC", "将获客相关支出除以新增客户数，并明确是否包含人员、工具、代理和广告成本。"),
      translatedBlogSection("如何在增长规划中使用 CAC", "把 CAC 与 LTV、回收期和毛利一起看，避免只追求低成本获客。"),
    ],
  },
  "mortgage-payment-calculator-principal-interest-and-term": {
    title: "房贷还款计算器：本金、利息和期限",
    excerpt: "了解在税费、保险和其他住房成本之前，本金、利率和贷款期限如何塑造月供。",
    seoTitle: "房贷还款计算器 - 本金、利息和期限",
    seoDescription: "了解如何用本金、利率和期限计算房贷月供，并注意税费、保险、费用和利率变化。",
    sections: [
      translatedBlogSection("房贷还款估算包含什么", "基础估算通常包含本金和利息，完整住房预算还应加入税费、保险和可能的 HOA 费用。"),
      translatedBlogSection("本金、利率和期限如何改变月供", "贷款额越高、利率越高通常月供越高；期限越长可能降低月供但增加总利息。"),
      translatedBlogSection("比较贷款前的重要注意事项", "不同贷款报价可能包含点数、费用和可变利率。比较前应统一口径。"),
    ],
  },
  "apr-vs-interest-rate-what-borrowers-should-compare": {
    title: "APR 与利率：借款人应比较什么",
    excerpt: "APR 和利率都描述借款成本，但它们不是同一个数字。了解各自何时重要。",
    seoTitle: "APR vs 利率 - 借款人应比较什么",
    seoDescription: "比较贷款和房贷中的 APR 与利率，了解各自包含什么、为什么 APR 往往更高，以及借款人应检查什么。",
    sections: [
      translatedBlogSection("利率显示借款成本", "利率表示借款本金的利息成本，直接影响月供和利息支出。"),
      translatedBlogSection("APR 加入部分贷款成本", "APR 通常把某些费用计入年化成本，因此常高于名义利率。"),
      translatedBlogSection("APR 何时可能误导", "如果提前还款、费用口径不同或贷款期限不同，APR 比较可能不完全反映真实选择。"),
    ],
  },
  "simple-interest-calculator-formula-examples-and-use-cases": {
    title: "单利计算器：公式、示例和使用场景",
    excerpt: "用单利公式估算本金在一段时间内产生的利息，并查看简单示例和实际注意事项。",
    seoTitle: "单利计算器 - 公式、示例和使用场景",
    seoDescription: "学习单利公式、查看示例，并了解单利估算何时适用于贷款、储蓄和短期规划。",
    sections: [
      translatedBlogSection("单利公式", "单利通常按本金 x 利率 x 时间计算，不会把已产生的利息加入本金继续计息。"),
      translatedBlogSection("常见使用场景", "单利适合短期借款、基础储蓄示例和教育用途，但许多金融产品使用复利或摊销。"),
      translatedBlogSection("限制和财务注意事项", "费用、税费、罚金和还款安排会改变真实成本。应以合同或账户信息为准。"),
    ],
  },
  "openai-cost-calculator-estimate-chat-and-api-usage": {
    title: "OpenAI 成本计算器：估算聊天和 API 使用量",
    excerpt: "学习如何在发布 AI 功能前，根据 token、模型选择和预计使用量估算 OpenAI API 成本。",
    seoTitle: "OpenAI 成本计算器 - 估算聊天和 API 使用量",
    seoDescription: "通过映射 token 使用量、模型选择和流量假设，估算 OpenAI API 的实际月支出场景。",
    sections: [
      translatedBlogSection("为什么 OpenAI 成本需要使用模型", "OpenAI 成本取决于请求量、模型、输入 token、输出 token 和产品使用模式。"),
      translatedBlogSection("最重要的输入", "关键输入包括平均提示词长度、回答长度、月请求量、重试率和所选模型费率。"),
      translatedBlogSection("发布前的定价注意事项", "模型价格和可用性可能变化。公开估算或定价文案前应核对官方 OpenAI 价格。"),
    ],
  },
  "claude-cost-calculator-estimate-token-based-api-spend": {
    title: "Claude 成本计算器：估算基于 token 的 API 支出",
    excerpt: "通过建模输入 token、输出 token、模型选择和真实产品使用模式来估算 Claude API 支出。",
    seoTitle: "Claude 成本计算器 - 估算基于 token 的 API 支出",
    seoDescription: "使用 token 数量、模型选择、请求频率和月使用假设计算 Claude API 估算成本。",
    sections: [
      translatedBlogSection("Claude API 成本通常如何估算", "Claude 成本通常按输入 token、输出 token、模型费率和请求量组合计算。"),
      translatedBlogSection("围绕真实工作流建立估算", "应按用户会话、后台任务、重试和峰值使用来估算，而不是只看理想请求。"),
      translatedBlogSection("发布前的定价注意事项", "Claude 模型价格、名称和政策可能变化。成本说明发布前需要核对官方价格。"),
    ],
  },
  "ai-pricing-calculator-turn-usage-cost-into-subscription-tiers": {
    title: "AI 定价计算器：把使用成本转为订阅档位",
    excerpt: "了解如何用利润率、使用限制和升级路径，把 AI 使用成本转换成可执行的订阅档位。",
    seoTitle: "AI 定价计算器 - 订阅档位规划",
    seoDescription: "通过估算每位用户成本、利润率、使用限制和套餐阈值，把 AI 模型使用成本转为订阅定价档位。",
    sections: [
      translatedBlogSection("从 API 支出到产品定价", "AI 产品定价需要把模型成本、基础设施成本和客户使用行为转成每个套餐的单位经济。"),
      translatedBlogSection("按使用行为设计档位", "免费、标准和企业档位应有清晰限制，避免高用量客户压低毛利。"),
      translatedBlogSection("发布前的定价注意事项", "不要承诺固定 ROI 或保证盈利。定价文案应基于已核实的成本和使用假设。"),
    ],
  },
  "tdee-calculator-estimate-daily-energy-expenditure": {
    title: "TDEE 计算器：估算每日总能量消耗",
    excerpt: "了解 TDEE 计算器如何根据代谢、活动水平和生活方式背景估算每日热量需求。",
    seoTitle: "TDEE 计算器指南 - 估算每日总能量消耗",
    seoDescription: "了解 TDEE 计算器如何估算每日热量需求、哪些因素影响结果，以及为什么该数字应作为实用估算。",
    sections: [
      translatedBlogSection("TDEE 的含义", "TDEE 表示每日总能量消耗，通常由 BMR 加上活动消耗估算。"),
      translatedBlogSection("为什么活动水平重要", "工作、训练、步数和生活习惯都会改变能量消耗，活动等级选错会影响结果。"),
      translatedBlogSection("如何使用估算值", "把 TDEE 当作起点，并根据几周内的体重和状态趋势调整。"),
    ],
  },
  "body-fat-calculator-estimate-body-composition": {
    title: "体脂计算器：估算身体组成",
    excerpt: "了解体脂率估算能显示什么、基于测量的计算器何时有用，以及需要记住哪些限制。",
    seoTitle: "体脂计算器指南 - 估算身体组成",
    seoDescription: "了解体脂计算器如何根据测量数据估算身体组成、为什么结果会变化，以及如何安全解读。",
    sections: [
      translatedBlogSection("体脂率估算什么", "体脂率估算脂肪量占体重的比例，比 BMI 更接近身体组成信息。"),
      translatedBlogSection("测量准确性", "腰围、颈围、皮褶或设备读数都会受方法和操作影响，结果应看趋势。"),
      translatedBlogSection("安全解读结果", "体脂估算不能诊断健康状况。若结果涉及医疗或饮食调整，应咨询专业人士。"),
    ],
  },
  "water-intake-calculator-estimate-daily-hydration-needs": {
    title: "饮水量计算器：估算每日补水需求",
    excerpt: "了解饮水量计算器如何估算每日补水需求，以及活动、气候和健康背景何时会改变目标。",
    seoTitle: "饮水量计算器指南 - 估算每日补水需求",
    seoDescription: "了解每日饮水量估算如何计算、哪些因素影响补水需求，以及什么时候需要额外谨慎。",
    sections: [
      translatedBlogSection("饮水量估算显示什么", "计算器通常用体重、活动和环境因素给出每日液体摄入起点。"),
      translatedBlogSection("会改变补水需求的因素", "运动、炎热天气、海拔、湿度、饮食和出汗率都会改变需要。"),
      translatedBlogSection("日常如何使用结果", "把结果当作范围，而不是硬性目标。某些疾病或药物会改变安全饮水量。"),
    ],
  },
  "ltv-to-cac-ratio-calculator-understand-growth-efficiency": {
    title: "LTV/CAC 比率计算器：理解增长效率",
    excerpt: "用 LTV/CAC 比率计算器判断获客支出是否由客户预期创造的价值支撑。",
    seoTitle: "LTV/CAC 比率计算器 - 理解增长效率",
    seoDescription: "了解创始人和运营人员如何用 LTV/CAC 比率评估获客效率，而不套用单一基准。",
    sections: [
      translatedBlogSection("LTV/CAC 比率显示什么", "该比率比较客户生命周期价值 LTV 与获客成本 CAC，用于判断增长是否具备经济性。"),
      translatedBlogSection("如何使用计算器", "输入 LTV 和 CAC，或用收入、毛利、留存和获客支出估算两者后再比较。"),
      translatedBlogSection("运营人员如何解读结果", "高比率未必总是好，可能意味着投资不足；低比率则可能提示获客或留存问题。"),
    ],
  },
  "funnel-conversion-calculator-find-drop-off-between-steps": {
    title: "漏斗转化计算器：查找步骤间流失",
    excerpt: "用漏斗转化计算器识别用户在哪一步离开流程，并优先处理最可能影响结果的环节。",
    seoTitle: "漏斗转化计算器 - 查找步骤流失",
    seoDescription: "计算漏斗步骤之间的转化率，了解客户在哪里流失，帮助团队优先改进。",
    sections: [
      translatedBlogSection("为什么漏斗流失重要", "漏斗流失显示用户从一个步骤进入下一个步骤时的损失，帮助定位瓶颈。"),
      translatedBlogSection("如何计算步骤转化", "用下一步人数除以上一步人数，并对每个步骤重复计算。"),
      translatedBlogSection("如何优先修复", "优先查看流量大、流失高且对收入或激活影响大的步骤。"),
    ],
  },
  "landing-page-lift-calculator-estimate-extra-conversions-needed": {
    title: "落地页提升计算器：估算所需额外转化",
    excerpt: "用落地页提升计算器估算达到目标提升需要增加多少转化。",
    seoTitle: "落地页提升计算器 - 估算额外转化",
    seoDescription: "估算达到落地页提升目标所需的额外转化数量，让活动规划更具体。",
    sections: [
      translatedBlogSection("落地页提升的含义", "提升通常表示转化率、转化数或收入相对基准的改善。"),
      translatedBlogSection("计算器如何帮助", "输入当前访问量、当前转化率和目标提升，即可估算额外转化需求。"),
      translatedBlogSection("如何负责任地使用提升", "结果应结合样本量、测试周期和流量质量，避免把短期波动当作真实提升。"),
    ],
  },
  "freelancer-hourly-rate-calculator-price-your-work-sustainably": {
    title: "自由职业时薪计算器：可持续地为工作定价",
    excerpt: "了解自由职业者如何估算能覆盖税费、开支、非计费时间和长期财务需求的时薪。",
    seoTitle: "自由职业时薪计算器 - 可持续地为工作定价",
    seoDescription: "基于收入目标、可计费小时、税费、开支和缓冲估算可持续自由职业定价。",
    sections: [
      translatedBlogSection("为什么时薪不只等于薪资目标", "自由职业定价还要覆盖税费、工具、保险、休假、销售和管理时间。"),
      translatedBlogSection("如何现实估算可计费时间", "不要把全部工作小时都当成可计费小时；沟通、获客和维护也会占用时间。"),
      translatedBlogSection("定价前的财务注意事项", "结果是规划估算。税务规则、合同风险和现金流缓冲需要单独确认。"),
    ],
  },
  "business-runway-calculator-how-long-can-your-cash-last": {
    title: "企业 runway 计算器：现金还能撑多久？",
    excerpt: "了解企业 runway 如何计算，以及创始人如何用它规划招聘、支出、融资和现金保护。",
    seoTitle: "企业 Runway 计算器 - 现金还能撑多久？",
    seoDescription: "根据现金余额和月 burn 估算企业 runway，并了解创始人和运营人员如何用 runway 规划支出决策。",
    sections: [
      translatedBlogSection("企业 runway 衡量什么", "Runway 估算在当前 burn rate 下现金还能支持业务运行多久。"),
      translatedBlogSection("为什么净 burn 比单纯支出更重要", "净 burn 会扣除收入，更能反映现金余额实际下降速度。"),
      translatedBlogSection("创始人和运营人员的规划注意事项", "Runway 估算应结合融资计划、应收账款、季节性支出和不可预见成本。"),
    ],
  },
  "burn-rate-calculator-monthly-spend-and-cash-planning": {
    title: "Burn Rate 计算器：月支出和现金规划",
    excerpt: "学习计算总 burn 和净 burn，帮助团队更有纪律地理解每月现金使用并规划运营决策。",
    seoTitle: "Burn Rate 计算器 - 月支出和现金规划",
    seoDescription: "为创业公司和企业现金规划计算总 burn 和净 burn，了解月支出、现金使用和关键财务注意事项。",
    sections: [
      translatedBlogSection("Burn Rate 告诉你什么", "Burn rate 显示企业每月消耗现金的速度，是 runway 和融资规划的基础。"),
      translatedBlogSection("总 burn vs 净 burn", "总 burn 看总支出，净 burn 看收入抵消后的现金消耗。两者用途不同。"),
      translatedBlogSection("现金决策的财务注意事项", "应结合收款时间、一次性支出、债务和融资不确定性，而不是只看一个月数据。"),
    ],
  },
  "rag-cost-calculator-estimate-embedding-storage-and-query-costs": {
    title: "RAG 成本计算器：估算 embedding、存储和查询成本",
    excerpt: "了解如何估算 RAG 工作流的真实成本，从文档 embedding、向量存储到检索查询和模型调用。",
    seoTitle: "RAG 成本计算器 - Embedding、存储和查询成本",
    seoDescription: "在扩展 AI 知识工作流前，估算 RAG 在 embedding、向量数据库存储、检索和生成方面的成本。",
    sections: [
      translatedBlogSection("什么驱动 RAG 成本", "RAG 成本来自文档切分、embedding、向量数据库、检索查询、生成 token 和重建索引。"),
      translatedBlogSection("如何估算 RAG 工作流", "按文档 token、chunk 数、查询量、模型选择和更新频率建模。"),
      translatedBlogSection("发布前的定价注意事项", "供应商价格、数据库计费和模型费率会变化。公开预算前应核对官方价格。"),
    ],
  },
  "embedding-cost-calculator-price-document-indexing-workflows": {
    title: "Embedding 成本计算器：为文档索引工作流定价",
    excerpt: "估算为 AI 搜索、RAG 流水线、支持机器人和内部知识工具嵌入文档的成本。",
    seoTitle: "Embedding 成本计算器 - 文档索引工作流定价",
    seoDescription: "根据 token 数量、chunk 大小、模型费率和重新索引频率计算文档 embedding 成本。",
    sections: [
      translatedBlogSection("为什么 embedding 成本重要", "大规模文档索引会产生初始 embedding 成本，并在内容更新时继续产生重新索引成本。"),
      translatedBlogSection("实用估算的输入", "关键输入包括文档数量、平均 token、chunk 大小、模型费率和更新频率。"),
      translatedBlogSection("验证价格和工作流假设", "估算前应确认供应商价格、重复内容、失败重试和向量存储费用。"),
    ],
  },
  "ai-image-generation-cost-calculator-estimate-creative-volume": {
    title: "AI 图像生成成本计算器：估算创意产量",
    excerpt: "通过估算图片数量、质量设置、修改次数和活动级创意需求来规划 AI 图像生成预算。",
    seoTitle: "AI 图像生成成本计算器 - 估算创意产量",
    seoDescription: "使用数量和修改假设，估算活动、产品视觉、社交内容和创意测试的 AI 图像生成成本。",
    sections: [
      translatedBlogSection("什么影响 AI 图像生成成本", "成本通常受图片数量、尺寸、质量、模型、重试和人工审核影响。"),
      translatedBlogSection("估算活动和工作流产量", "按活动、渠道和版本数量估算总图像量，并包含修改和废弃作品。"),
      translatedBlogSection("图像模型的定价注意事项", "图像模型价格和规格可能变化。发布成本建议前应核对官方定价。"),
    ],
  },
  "macro-calculator-estimate-protein-carbs-and-fat-targets": {
    title: "宏量营养计算器：估算蛋白质、碳水和脂肪目标",
    excerpt: "了解宏量营养计算器如何根据热量目标和营养偏好估算每日蛋白质、碳水和脂肪目标。",
    seoTitle: "宏量营养计算器指南 - 蛋白质、碳水和脂肪目标",
    seoDescription: "了解宏量营养计算器如何估算每日蛋白质、碳水和脂肪目标、哪些输入重要，以及为什么结果是营养估算。",
    sections: [
      translatedBlogSection("宏量营养计算器估算什么", "它把每日热量分配到蛋白质、碳水和脂肪，形成饮食规划起点。"),
      translatedBlogSection("会改变目标的输入", "热量目标、体重、活动水平、训练目标和饮食偏好都会改变比例。"),
      translatedBlogSection("如何安全使用数字", "结果不是医疗营养处方。特殊健康状况、孕期或饮食障碍风险需要专业指导。"),
    ],
  },
  "protein-calculator-estimate-daily-protein-needs": {
    title: "蛋白质计算器：估算每日蛋白质需求",
    excerpt: "了解蛋白质计算器如何使用体重、活动水平和健身目标估算每日蛋白质需求。",
    seoTitle: "蛋白质计算器指南 - 估算每日蛋白质需求",
    seoDescription: "了解每日蛋白质需求如何估算、为什么活动和目标重要，以及何时应请专业人士复核结果。",
    sections: [
      translatedBlogSection("蛋白质需求如何估算", "常见估算会按体重和目标给出每日蛋白质范围。"),
      translatedBlogSection("为什么活动和目标重要", "力量训练、减脂、耐力运动和恢复需求可能提高蛋白质目标。"),
      translatedBlogSection("什么时候要谨慎", "肾脏疾病、临床营养需求或医疗限制应先咨询专业人员。"),
    ],
  },
  "ideal-weight-calculator-compare-common-formulas": {
    title: "理想体重计算器：比较常见公式",
    excerpt: "了解理想体重计算器如何比较常见公式，以及为什么结果应结合背景解读。",
    seoTitle: "理想体重计算器指南 - 比较常见公式",
    seoDescription: "比较常见理想体重公式，了解它们能说明什么、不能说明什么，以及为什么计算器结果只是估算。",
    sections: [
      translatedBlogSection("理想体重公式做什么", "公式通常用身高、性别或体型假设估算参考体重范围。"),
      translatedBlogSection("为什么公式可能不一致", "不同公式来源和假设不同，对肌肉量、骨架和年龄考虑有限。"),
      translatedBlogSection("把结果当作背景，而不是诊断", "理想体重不是医学结论，应结合健康指标、身体组成和专业建议。"),
    ],
  },
  "cpa-calculator-estimate-cost-per-acquisition": {
    title: "CPA 计算器：估算每次获客成本",
    excerpt: "估算获取每位客户的花费，帮助更有信心地比较渠道、活动和单位经济。",
    seoTitle: "CPA 计算器 - 估算每次获客成本",
    seoDescription: "用 CPA 计算器根据活动支出和新客户估算每次获客成本，再评估渠道效率和回收适配度。",
    sections: [
      translatedBlogSection("CPA 告诉你什么", "CPA 表示获得一次目标结果或客户所需的平均成本。"),
      translatedBlogSection("如何使用计算", "用活动支出除以获取数量，并明确获取事件是线索、注册还是客户。"),
      translatedBlogSection("运营人员如何解读结果", "低 CPA 未必代表高质量，应与转化率、收入、LTV 和回收期一起看。"),
    ],
  },
  "cpl-calculator-estimate-cost-per-lead": {
    title: "CPL 计算器：估算每条线索成本",
    excerpt: "计算每条线索成本，了解活动在潜在客户进入销售漏斗前的生成效率。",
    seoTitle: "CPL 计算器 - 估算每条线索成本",
    seoDescription: "根据营销支出和线索量估算 CPL，并比较活动效率，同时避免假设所有线索价值相同。",
    sections: [
      translatedBlogSection("CPL 衡量什么", "CPL 显示产生一条线索的平均营销成本。"),
      translatedBlogSection("何时使用 CPL 计算器", "适合比较活动、渠道和名单质量，但需要明确什么才算合格线索。"),
      translatedBlogSection("如何根据 CPL 行动", "结合线索质量、后续转化率和销售价值，决定是否优化或扩大投放。"),
    ],
  },
  "lead-value-calculator-estimate-revenue-per-lead": {
    title: "线索价值计算器：估算每条线索收入",
    excerpt: "估算每条线索的平均收入，按业务价值而不只是数量或获客成本评估线索来源。",
    seoTitle: "线索价值计算器 - 估算每条线索收入",
    seoDescription: "用线索价值计算器根据转化率和客户价值估算每条线索收入，帮助更清晰地比较营销渠道。",
    sections: [
      translatedBlogSection("为什么线索价值重要", "线索价值帮助判断每条线索可能带来的收入，而不仅是线索数量。"),
      translatedBlogSection("估算如何运作", "通常用客户价值乘以线索到客户的转化率，得到平均每条线索价值。"),
      translatedBlogSection("将线索价值与 CPL 一起使用", "当线索价值高于 CPL 且回收周期合理时，渠道更可能值得投入。"),
    ],
  },
  "tax-reserve-calculator-for-freelancers-and-small-businesses": {
    title: "自由职业者和小企业税款储备计算器",
    excerpt: "估算应为税款预留多少收入，避免自由职业或小企业现金流在报税时意外承压。",
    seoTitle: "自由职业者和小企业税款储备计算器",
    seoDescription: "了解自由职业者、创始人和小企业经营者如何根据收入、支出和预计义务估算实用税款储备。",
    sections: [
      translatedBlogSection("为什么税款储备重要", "预留税款可以减少报税或预缴税时的现金流压力。"),
      translatedBlogSection("如何估算储备", "按收入、可扣除支出、税率假设和所在地规则估算应预留比例。"),
      translatedBlogSection("重要注意事项", "税务规则因地区和身份不同而变化。重大决策应咨询合格税务专业人士。"),
    ],
  },
  "invoice-late-fee-calculator-estimate-fair-payment-penalties": {
    title: "发票滞纳金计算器：估算公平付款罚金",
    excerpt: "计算合理的发票滞纳金，并了解运营人员如何鼓励按时付款而不产生不公平或不可执行的罚金。",
    seoTitle: "发票滞纳金计算器 - 估算公平付款罚金",
    seoDescription: "使用固定费用、百分比收费或月费率估算发票滞纳金，同时考虑公平性、合同和法律限制。",
    sections: [
      translatedBlogSection("为什么滞纳金需要结构", "清晰的滞纳金规则能减少争议，并帮助客户理解逾期成本。"),
      translatedBlogSection("常见滞纳金计算方式", "常见方式包括固定费用、发票金额百分比或按月利率累计。"),
      translatedBlogSection("法律和客户注意事项", "滞纳金应符合合同和当地法律，并保持合理、透明和可执行。"),
    ],
  },
  "subscription-burn-calculator-audit-recurring-saas-costs": {
    title: "订阅 Burn 计算器：审计 recurring SaaS 成本",
    excerpt: "估算 recurring 订阅 burn，识别可能重复、闲置或与当前运营重点不匹配的 SaaS 成本。",
    seoTitle: "订阅 Burn 计算器 - 审计 recurring SaaS 成本",
    seoDescription: "了解创始人和运营人员如何计算每月和年度 SaaS 订阅 burn、发现浪费并提高 recurring 成本可见性。",
    sections: [
      translatedBlogSection("为什么订阅 burn 容易被忽略", "小额 SaaS 订阅分散在团队中，累计后可能形成明显固定成本。"),
      translatedBlogSection("如何审计 recurring 成本", "列出工具、席位、使用率、合同期限和所有者，找出重复或未使用支出。"),
      translatedBlogSection("运营人员的财务注意事项", "削减订阅前应确认业务依赖、迁移成本、合同取消条款和数据保留需求。"),
    ],
  },
  "ai-translation-cost-calculator-estimate-multilingual-content-spend": {
    title: "AI 翻译成本计算器：估算多语言内容支出",
    excerpt: "了解如何根据源文本字数、目标语言、token 用量、审校时间和供应商价格估算 AI 翻译成本。",
    seoTitle: "AI 翻译成本计算器 - 估算多语言内容支出",
    seoDescription: "使用 token、语言数量、审校时间和模型定价估算多语言内容的 AI 翻译成本。",
    sections: [
      translatedBlogSection("什么驱动 AI 翻译成本", "源文本长度、目标语言数量、模型选择、质量要求和人工审校都会影响成本。"),
      translatedBlogSection("如何估算多语言支出", "估算源 token、输出 token、语言数量和审校时间，再乘以对应费率。"),
      translatedBlogSection("发布前的定价注意事项", "AI 定价和模型能力会变化。公开成本指南前应核对官方价格和质量假设。"),
    ],
  },
  "ai-agent-cost-calculator-tool-calls-tokens-and-runtime": {
    title: "AI Agent 成本计算器：工具调用、token 和运行时",
    excerpt: "通过组合提示词 token、输出 token、工具调用、重试、运行时和基础设施使用量来估算 AI agent 成本。",
    seoTitle: "AI Agent 成本计算器 - 工具调用、token 和运行时",
    seoDescription: "学习如何根据模型 token、工具调用、重试、运行时和基础设施价格计算 AI agent 成本，用于预算规划。",
    sections: [
      translatedBlogSection("为什么 AI agent 成本更难预测", "Agent 可能多轮推理、调用工具、重试和等待外部系统，因此成本波动更大。"),
      translatedBlogSection("Agent 成本估算的核心输入", "输入包括 token、工具调用次数、运行时、并发、失败率和基础设施费用。"),
      translatedBlogSection("发布前的定价注意事项", "应核对模型和工具价格，并把重试、超时和监控纳入预算。"),
    ],
  },
  "cost-per-1000-ai-outputs-how-to-calculate-unit-cost": {
    title: "每 1,000 个 AI 输出成本：如何计算单位成本",
    excerpt: "学习通过 token、重试、审校和基础设施衡量每 1,000 个生成输出的成本，理解 AI 单位经济。",
    seoTitle: "每 1,000 个 AI 输出成本 - 计算 AI 单位成本",
    seoDescription: "使用 token 用量、重试、审校成本和基础设施支出计算每 1,000 个 AI 输出成本，用于 AI 产品定价。",
    sections: [
      translatedBlogSection("为什么每 1,000 个输出成本重要", "该指标把复杂使用量转成可比较单位，适合产品定价和毛利规划。"),
      translatedBlogSection("如何计算单位成本", "汇总生成、重试、审校和基础设施成本，再除以输出数量并换算到 1,000 个。"),
      translatedBlogSection("发布前的定价注意事项", "输出定义、质量门槛和供应商价格必须明确，否则单位成本会失真。"),
    ],
  },
  "body-mass-index-formula-metric-and-imperial-examples": {
    title: "身体质量指数公式：公制和英制示例",
    excerpt: "学习如何用公制和英制单位计算 BMI，并了解简单示例和实际限制。",
    seoTitle: "BMI 公式 - 公制和英制示例",
    seoDescription: "了解身体质量指数公式、如何用公制或英制输入计算 BMI，以及为什么 BMI 应被视为估算。",
    sections: [
      translatedBlogSection("BMI 衡量什么", "BMI 用体重和身高估算体重区间，是筛查工具而不是体脂测量。"),
      translatedBlogSection("公制和英制公式", "公制为 kg / m^2；英制通常为 lb / in^2 x 703。单位必须匹配。"),
      translatedBlogSection("如何使用结果", "用结果查看大致区间，并结合身体组成、年龄和健康背景谨慎解读。"),
    ],
  },
  "maintenance-calories-calculator-estimate-energy-balance": {
    title: "维持热量计算器：估算能量平衡",
    excerpt: "维持热量根据体型、活动和日常习惯估算身体维持体重稳定可能需要的能量。",
    seoTitle: "维持热量计算器 - 估算能量平衡",
    seoDescription: "了解维持热量的含义、热量计算器如何估算能量平衡，以及为什么结果应根据真实趋势调整。",
    sections: [
      translatedBlogSection("维持热量的含义", "维持热量是理论上让体重保持相对稳定的每日能量摄入。"),
      translatedBlogSection("为什么估算会变化", "BMR、活动量、饮食记录误差、睡眠和体重变化都会影响能量平衡。"),
      translatedBlogSection("随时间安全调整", "观察几周趋势后小幅调整，比根据一天体重变化立刻大幅改变更稳妥。"),
    ],
  },
  "metric-vs-imperial-health-calculators-convert-inputs-correctly": {
    title: "公制 vs 英制健康计算器：正确转换输入",
    excerpt: "健康计算器结果依赖准确单位。了解公制和英制输入的差异，并避免常见换算错误。",
    seoTitle: "公制 vs 英制健康计算器换算",
    seoDescription: "了解如何正确转换身高、体重、距离和能量输入，避免健康计算器中的常见单位错误。",
    sections: [
      translatedBlogSection("为什么单位重要", "BMI、BMR、TDEE 和距离估算都依赖正确单位，混用单位会直接导致错误结果。"),
      translatedBlogSection("常见换算", "常见换算包括 kg/lbs、cm/in、miles/km 和摄氏/华氏。输入前应确认标签。"),
      translatedBlogSection("解读换算后的结果", "换算只能保证单位一致，不能消除公式本身和个人差异带来的估算误差。"),
    ],
  },
  "pipeline-coverage-calculator-estimate-sales-pipeline-needed": {
    title: "销售管道覆盖率计算器：估算需要多少 pipeline",
    excerpt: "用 pipeline 覆盖率估算当前销售管道是否足以支撑收入目标。",
    seoTitle: "Pipeline 覆盖率计算器 - 估算所需销售管道",
    seoDescription: "学习如何用交易金额、赢单率和销售假设估算收入目标所需的销售 pipeline 覆盖率。",
    sections: [
      translatedBlogSection("为什么 pipeline 覆盖率重要", "覆盖率显示目标收入与现有机会金额之间的关系，帮助判断销售风险。"),
      translatedBlogSection("如何思考输入", "关键输入包括收入目标、平均合同额、赢单率、销售周期和机会阶段质量。"),
      translatedBlogSection("如何处理结果", "覆盖率不足时可增加 pipeline、提高赢单率、调整目标或重新评估预测质量。"),
    ],
  },
  "churn-impact-calculator-model-revenue-lost-to-cancellations": {
    title: "流失影响计算器：建模取消带来的收入损失",
    excerpt: "估算客户流失如何影响 recurring revenue，看清取消在时间维度上的真实成本。",
    seoTitle: "流失影响计算器 - 建模取消带来的收入损失",
    seoDescription: "用流失影响计算器估算取消造成的 recurring revenue 损失，并理解留存风险。",
    sections: [
      translatedBlogSection("流失不只是取消数量", "不同客户的合同额和续费周期不同，收入影响可能远大于取消数量本身。"),
      translatedBlogSection("清晰建模收入影响", "用流失客户数、平均收入、合同期限和留存假设估算未来收入损失。"),
      translatedBlogSection("用结果聚焦留存工作", "把高价值客户、关键流失阶段和可预防原因作为优先改进点。"),
    ],
  },
  "conversion-rate-vs-click-through-rate-what-each-metric-shows": {
    title: "转化率 vs 点击率：每个指标显示什么",
    excerpt: "了解 CTR 和转化率的区别，以及何时用它们改进营销表现。",
    seoTitle: "转化率 vs 点击率 - 每个指标显示什么",
    seoDescription: "比较转化率和点击率，了解每个指标衡量什么，以及运营人员如何结合使用。",
    sections: [
      translatedBlogSection("CTR 衡量对优惠或信息的响应", "CTR 显示有多少人点击广告、邮件或链接，反映信息吸引力。"),
      translatedBlogSection("转化率衡量后续完成", "转化率显示点击或访问后有多少人完成目标动作。"),
      translatedBlogSection("一起使用两个指标", "高 CTR 低转化可能说明落地页或报价问题；低 CTR 高转化可能说明触达需要优化。"),
    ],
  },
  "customer-ltv-calculator-estimate-lifetime-value": {
    title: "客户 LTV 计算器：估算生命周期价值",
    excerpt: "了解客户生命周期价值如何连接收入、留存和毛利，帮助将获客成本与长期价值比较。",
    seoTitle: "客户 LTV 计算器 - 估算生命周期价值",
    seoDescription: "用客户 LTV 计算器根据收入、毛利和留存假设估算生命周期价值，用于商业规划。",
    sections: [
      translatedBlogSection("客户 LTV 衡量什么", "LTV 估算客户在关系周期内可能贡献的经济价值。"),
      translatedBlogSection("简单 LTV 公式", "常见估算用平均收入、毛利率和客户寿命组合计算。"),
      translatedBlogSection("将 LTV 与 CAC 一起使用", "LTV 只有与 CAC、回收期和留存质量一起看才更有决策价值。"),
    ],
  },
  "cac-payback-calculator-how-long-until-acquisition-pays-back": {
    title: "CAC 回收期计算器：多久收回获客成本？",
    excerpt: "估算客户毛利可能需要多少个月才能覆盖获客成本。",
    seoTitle: "CAC 回收期计算器 - 收回获客成本所需月份",
    seoDescription: "了解 CAC 回收期如何连接获客成本、月收入和毛利，支持更清晰的增长规划。",
    sections: [
      translatedBlogSection("CAC 回收期的含义", "CAC 回收期估算用客户毛利收回获客成本需要多久。"),
      translatedBlogSection("如何估算回收期", "通常用 CAC 除以每月客户收入乘毛利率后的金额。"),
      translatedBlogSection("常见解读错误", "短回收期不一定代表健康增长，还要看留存、扩张收入和渠道容量。"),
    ],
  },
  "cash-conversion-cycle-calculator-inventory-receivables-payables": {
    title: "现金转换周期计算器：库存、应收和应付",
    excerpt: "了解从支付供应商、持有库存、收回应收款到确认收入之间，现金可能被占用多久。",
    seoTitle: "现金转换周期计算器 - 库存和应收账款",
    seoDescription: "了解现金转换周期如何运作，以及库存、应收账款和应付账款如何影响营运资本时间。",
    sections: [
      translatedBlogSection("现金转换周期显示什么", "它估算现金在采购、库存、销售和收款流程中被占用的时间。"),
      translatedBlogSection("核心计算逻辑", "通常结合库存周转天数、应收账款天数和应付账款天数计算。"),
      translatedBlogSection("谨慎使用结果", "行业模式、季节性、付款条款和会计口径会影响可比性。"),
    ],
  },
  "ai-customer-support-cost-calculator-tickets-tokens-and-savings": {
    title: "AI 客服成本计算器：工单、token 和节省",
    excerpt: "通过连接工单量、提示词大小、模型选择和人工审核假设来估算支持自动化成本。",
    seoTitle: "AI 客服成本计算器 - 工单和 token",
    seoDescription: "根据工单、token、模型定价和审核假设估算 AI 客服成本。发布前请核对官方模型价格。",
    sections: [
      translatedBlogSection("什么驱动 AI 客服成本", "工单量、上下文长度、回答长度、模型选择、升级和人工审核都会影响成本。"),
      translatedBlogSection("估算单位成本", "按每张工单的 token、模型费率和审核时间估算，再扩展到月工单量。"),
      translatedBlogSection("必须验证定价", "AI 模型价格经常变化。公开节省或成本声明前应核对官方价格。"),
    ],
  },
  "ai-sales-email-cost-calculator-estimate-outreach-generation-costs": {
    title: "AI 销售邮件成本计算器：估算外联生成成本",
    excerpt: "计算在名单、提示词和模型选择下，生成个性化销售邮件的大致 AI 成本。",
    seoTitle: "AI 销售邮件成本计算器 - 外联生成成本",
    seoDescription: "使用收件人数量、token、模型定价和个性化深度估算 AI 销售邮件生成成本。写作前请核对官方价格。",
    sections: [
      translatedBlogSection("为什么外联成本会变化", "个性化程度、名单规模、提示词长度、生成次数和模型选择都会影响成本。"),
      translatedBlogSection("基本计算", "估算每封邮件的输入和输出 token，再乘以收件人数量和模型费率。"),
      translatedBlogSection("发布前验证价格", "供应商价格和模型能力可能变化，成本指南应引用最新官方价格。"),
    ],
  },
  "ai-meeting-notes-cost-calculator-transcription-and-summary-spend": {
    title: "AI 会议纪要成本计算器：转录和摘要支出",
    excerpt: "通过组合转录分钟数、摘要 token、模型定价和会议量来估算 AI 会议纪要成本。",
    seoTitle: "AI 会议纪要成本计算器 - 转录和摘要",
    seoDescription: "根据会议分钟、转录、摘要和基于 token 的模型定价计算 AI 会议纪要成本。写作前请核对官方价格。",
    sections: [
      translatedBlogSection("会议纪要成本包含什么", "成本可能包括音频转录、摘要生成、行动项提取、存储和人工审核。"),
      translatedBlogSection("估算每月支出", "按会议分钟、每次摘要 token、会议数量和模型费率估算月成本。"),
      translatedBlogSection("保持价格最新", "转录和 LLM 价格可能变化，公开估算前应核对官方价格。"),
    ],
  },
  "mifflin-st-jeor-vs-harris-benedict-bmr-formulas-compared": {
    title: "Mifflin-St Jeor vs Harris-Benedict：BMR 公式比较",
    excerpt: "比较两个常见 BMR 方程、各自使用场景，以及为什么计算器结果应被视为估算。",
    seoTitle: "Mifflin-St Jeor vs Harris-Benedict BMR 公式",
    seoDescription: "了解 Mifflin-St Jeor 和 Harris-Benedict BMR 公式如何比较、哪些因素影响估算，以及如何负责任地使用 BMR 结果。",
    sections: [
      translatedBlogSection("BMR 公式估算什么", "BMR 公式根据身体指标估算静息能量需求。"),
      translatedBlogSection("两个方程如何不同", "Mifflin-St Jeor 和 Harris-Benedict 使用不同系数，因此相同输入可能得到不同结果。"),
      translatedBlogSection("如何使用结果", "把 BMR 当作热量规划起点，并根据 TDEE、趋势和健康背景调整。"),
    ],
  },
  "activity-level-calculator-choose-the-right-tdee-multiplier": {
    title: "活动水平计算器：选择合适的 TDEE 倍数",
    excerpt: "了解活动倍数如何运作、为什么人们常高估活动量，以及如何选择实用的 TDEE 起点。",
    seoTitle: "活动水平计算器和 TDEE 倍数指南",
    seoDescription: "为久坐、轻度活动、中度活动和高活动日常选择 TDEE 活动倍数，同时了解热量估算限制。",
    sections: [
      translatedBlogSection("TDEE 倍数做什么", "活动倍数把 BMR 转换为包含日常活动的 TDEE 估算。"),
      translatedBlogSection("选择活动水平", "根据真实工作、步数、训练频率和强度选择，避免把偶尔运动当作高活动。"),
      translatedBlogSection("限制和注意事项", "倍数只是粗略估算，应通过体重和能量状态趋势校正。"),
    ],
  },
  "pace-calculator-running-speed-distance-and-time": {
    title: "配速计算器：跑步速度、距离和时间",
    excerpt: "了解跑步配速、速度、距离和完赛时间估算，用于训练计划和比赛日规划。",
    seoTitle: "跑步速度、距离和时间配速计算器",
    seoDescription: "了解跑步配速计算器如何连接速度、距离和时间，并获得训练估算和安全解读提示。",
    sections: [
      translatedBlogSection("跑步配速的含义", "配速通常表示每公里或每英里所需时间，是跑步训练和比赛计划的常用指标。"),
      translatedBlogSection("一起使用距离和时间", "输入任意两个变量通常可估算第三个，例如距离和时间可得到配速。"),
      translatedBlogSection("训练注意事项", "天气、地形、疲劳和健康状态会影响实际表现。不要只按计算结果安排强度。"),
    ],
  },
  "cpc-to-cpa-calculator-connect-click-cost-to-acquisition-cost": {
    title: "CPC 到 CPA 计算器：连接点击成本与获客成本",
    excerpt: "了解每次点击成本如何转化为获客成本，帮助判断流量质量而不只盯广告支出。",
    seoTitle: "CPC 到 CPA 计算器 - 点击成本到获客成本",
    seoDescription: "用 CPC 到 CPA 计算器连接广告点击成本、转化率和获客成本，做出更清晰的活动决策。",
    sections: [
      translatedBlogSection("为什么只看 CPC 可能误导", "低 CPC 如果转化差，最终 CPA 仍可能很高。"),
      translatedBlogSection("CPC 如何变成 CPA", "CPA 通常等于 CPC 除以转化率。转化率越低，获客成本越高。"),
      translatedBlogSection("扩量花费前使用它", "先模拟不同 CPC 和转化率，再决定是否扩大预算或优化落地页。"),
    ],
  },
  "email-conversion-rate-calculator-campaign-metrics-explained": {
    title: "邮件转化率计算器：活动指标说明",
    excerpt: "衡量有多少邮件收件人完成你关心的动作，例如预约演示、开始试用或完成购买。",
    seoTitle: "邮件转化率计算器 - 活动指标说明",
    seoDescription: "计算邮件转化率，并了解活动动作如何与发送、打开、点击和业务目标比较。",
    sections: [
      translatedBlogSection("邮件转化率衡量什么", "它衡量收件人在邮件活动后完成目标动作的比例。"),
      translatedBlogSection("选择正确分母", "可用发送量、送达量、打开量或点击量作分母；选择不同会改变解释。"),
      translatedBlogSection("结合背景解读结果", "应同时查看名单质量、邮件内容、点击率、样本量和最终收入。"),
    ],
  },
  "form-completion-rate-calculator-find-signup-friction": {
    title: "表单完成率计算器：发现注册摩擦",
    excerpt: "计算开始填写表单后有多少人完成，并用结果发现注册或线索捕获中的流失点。",
    seoTitle: "表单完成率计算器 - 发现注册摩擦",
    seoDescription: "用表单完成率计算器衡量注册摩擦，并比较已开始表单与已提交表单。",
    sections: [
      translatedBlogSection("完成率显示什么", "完成率显示开始表单的人中，有多少最终提交。"),
      translatedBlogSection("常见流失原因", "字段过多、错误提示不清、加载慢、信任不足或移动端体验差都可能造成流失。"),
      translatedBlogSection("运营化使用指标", "按设备、渠道和步骤拆分完成率，优先优化影响最大的摩擦点。"),
    ],
  },
  "debt-to-income-ratio-calculator-borrowing-capacity-guide": {
    title: "债务收入比计算器：借款能力指南",
    excerpt: "了解债务收入比如何计算、为什么贷款机构会审查它，以及它如何帮助比较借款场景。",
    seoTitle: "债务收入比计算器 - 借款能力指南",
    seoDescription: "了解债务收入比、每月债务还款如何与收入比较，以及计算器如何支持借款估算。",
    sections: [
      translatedBlogSection("债务收入比衡量什么", "DTI 比较每月债务还款与月收入，用于粗略评估借款压力。"),
      translatedBlogSection("如何估算比率", "将每月债务还款合计除以月收入，再乘以 100。"),
      translatedBlogSection("用 DTI 比较借款场景", "改变贷款金额、利率或期限可查看 DTI 变化，但贷款审批还会看信用和资产等因素。"),
    ],
  },
  "savings-goal-calculator-how-much-to-save-each-month": {
    title: "储蓄目标计算器：每月应存多少",
    excerpt: "通过比较目标金额、时间线、起始余额和预期利息，估算每月储蓄目标。",
    seoTitle: "储蓄目标计算器 - 每月应存多少",
    seoDescription: "了解如何用目标金额、时间线、起始余额和利息假设估算每月储蓄额。",
    sections: [
      translatedBlogSection("从目标和时间线开始", "先确定目标金额和可用月份，再估算每月需要存入多少。"),
      translatedBlogSection("加入起始余额和利息", "已有余额和利息可降低月存款需求，但利率变化、税费和提款会影响结果。"),
      translatedBlogSection("比较每月储蓄场景", "调整时间线、月存款或起始余额，可以找到更现实的计划。"),
    ],
  },
  "retirement-withdrawal-calculator-safe-spending-estimates": {
    title: "退休提款计算器：安全支出估算",
    excerpt: "了解退休提款估算如何运作、哪些假设重要，以及为什么应谨慎复核支出预测。",
    seoTitle: "退休提款计算器 - 安全支出估算",
    seoDescription: "了解退休提款估算如何使用投资组合余额、支出率、时间跨度、通胀和收益假设。",
    sections: [
      translatedBlogSection("提款估算显示什么", "它估算在给定支出模式下，退休余额可能维持多久。"),
      translatedBlogSection("需要复核的关键假设", "收益率、通胀、税费、医疗成本和市场顺序风险都会改变结果。"),
      translatedBlogSection("用估算支持规划对话", "将结果用于比较场景，而不是当作安全支出的承诺或个性化投资建议。"),
    ],
  },
  "profit-margin-calculator-gross-vs-net-margin-explained": {
    title: "利润率计算器：毛利率与净利率说明",
    excerpt: "比较毛利率和净利率，学习公式，并了解利润率计算器如何帮助解读业务表现。",
    seoTitle: "利润率计算器 - 毛利率与净利率说明",
    seoDescription: "了解毛利率、净利率、常见公式，以及计算器如何支持业务表现分析。",
    sections: [
      translatedBlogSection("毛利率 vs 净利率", "毛利率关注直接成本后的利润，净利率包含更广泛费用后的最终利润。"),
      translatedBlogSection("常见利润率公式", "毛利率 = 毛利润 / 收入 x 100；净利率 = 净利润 / 收入 x 100。"),
      translatedBlogSection("如何解读利润率结果", "利润率适合按时期、产品或业务模型比较，但现金流、债务和行业背景也重要。"),
    ],
  },
  "ai-batch-processing-cost-calculator-reduce-unit-cost-with-queues": {
    title: "AI 批处理成本计算器：用队列降低单位成本",
    excerpt: "了解排队批量工作负载如何通过偏离实时推理假设来改变 AI 成本规划。",
    seoTitle: "基于队列工作负载的 AI 批处理成本计算器",
    seoDescription: "估算 AI 批处理成本，比较排队工作负载与实时使用，并在核对当前供应商价格后规划模型支出。",
    sections: [
      translatedBlogSection("为什么批处理改变 AI 成本规划", "非紧急任务可排队、分组并按计划处理，可能改善吞吐和成本控制。"),
      translatedBlogSection("构建队列前要估算什么", "需要估算任务数、输入/输出 token、模型、延迟窗口、重试和并发。"),
      translatedBlogSection("发布估算前验证定价", "批处理折扣和条款可能变化。公开成本建议前必须核对官方价格。"),
    ],
  },
  "cached-token-pricing-calculator-when-prompt-caching-changes-cost": {
    title: "缓存 token 定价计算器：提示词缓存何时改变成本",
    excerpt: "了解当许多请求复用重复上下文时，提示词缓存如何影响 AI token 成本。",
    seoTitle: "用于提示词缓存成本的缓存 token 定价计算器",
    seoDescription: "建模缓存 token 定价、重复提示词和 AI 使用成本，同时在发布估算前检查当前供应商价格。",
    sections: [
      translatedBlogSection("缓存 token 在哪里重要", "当系统提示、文档、策略或 schema 被多次复用时，缓存输入可能改变计费。"),
      translatedBlogSection("影响估算的输入", "总输入 token、缓存 token、输出 token、请求量、命中率和模型价格都会影响结果。"),
      translatedBlogSection("避免夸大缓存收益", "缓存不保证节省。只有重复上下文符合规则且命中率足够高时，成本才可能下降。"),
    ],
  },
  "multimodal-ai-cost-calculator-text-image-and-audio-usage": {
    title: "多模态 AI 成本计算器：文本、图像和音频使用",
    excerpt: "通过更清晰的使用模式和定价输入假设，规划跨文本、图像和音频工作负载的多模态 AI 成本。",
    seoTitle: "文本、图像和音频多模态 AI 成本计算器",
    seoDescription: "估算文本、图像和音频使用下的多模态 AI 成本，并在发布指南前验证当前供应商价格。",
    sections: [
      translatedBlogSection("为什么多模态 AI 成本需要单独建模", "文本、图像、音频和视觉分析可能使用不同计费单位，不能都压平成 token。"),
      translatedBlogSection("把使用量拆成成本驱动因素", "分别估算文本 token、图像数量/质量、音频分钟和峰值使用。"),
      translatedBlogSection("负责任地发布成本指南", "多模态模型价格变化快。估算应表述为规划支持，而不是固定报价。"),
    ],
  },
  "ai-app-margin-calculator-turn-model-costs-into-gross-margin": {
    title: "AI 应用利润率计算器：把模型成本转成毛利率",
    excerpt: "通过连接 token 成本、定价套餐和客户使用行为，把 AI 模型使用转化为毛利率规划。",
    seoTitle: "用于模型成本和毛利率的 AI 应用利润率计算器",
    seoDescription: "根据模型成本、使用量和定价套餐估算 AI 应用毛利率，并在发布前核对当前供应商价格。",
    sections: [
      translatedBlogSection("为什么模型成本属于利润率规划", "重度用户、长提示词、后台任务和高价模型会直接影响 AI 应用毛利。"),
      translatedBlogSection("实用利润率模型的输入", "输入包括活跃用户、请求数、token、模型价格、基础设施成本和套餐收入。"),
      translatedBlogSection("发布定价文案前要验证的声明", "避免保证盈利、保证节省或固定 ROI。应说明模型可帮助理解成本暴露。"),
    ],
  },
  "calorie-deficit-calculator-estimate-weight-change-carefully": {
    title: "热量缺口计算器：谨慎估算体重变化",
    excerpt: "了解热量缺口估算如何运作、为什么体重变化不是完全线性的，以及如何负责任地使用热量计算器。",
    seoTitle: "热量缺口计算器 - 谨慎估算体重变化",
    seoDescription: "了解热量缺口估算、维持热量、活动假设和安全教育性注意事项，再规划体重变化场景。",
    sections: [
      translatedBlogSection("热量缺口估算什么", "热量缺口表示估计摄入低于估计消耗，是体重变化规划的场景模型。"),
      translatedBlogSection("为什么体重变化不是线性的", "身体会适应，水分、训练、睡眠和周期变化也会影响短期体重。"),
      translatedBlogSection("负责任地使用结果", "结果不是诊断或营养处方。医疗敏感或快速变化时应咨询专业人士。"),
    ],
  },
  "hydration-calculator-water-needs-by-weight-and-activity": {
    title: "补水计算器：按体重和活动估算饮水需求",
    excerpt: "根据体重、活动和气候估算每日饮水需求，同时理解补水目标为何因人而异。",
    seoTitle: "补水计算器 - 按体重和活动估算饮水需求",
    seoDescription: "使用体重、活动水平、运动和气候因素估算饮水需求，并了解实用补水注意事项。",
    sections: [
      translatedBlogSection("补水计算器考虑什么", "常见输入包括体重、日常活动、运动时长和环境条件。"),
      translatedBlogSection("活动和气候很重要", "长时间运动、炎热和潮湿环境通常会增加液体需求。"),
      translatedBlogSection("教育性注意事项", "补水估算不是医疗建议。某些健康状况或药物会改变安全摄入范围。"),
    ],
  },
  "body-fat-percentage-chart-men-women-and-limitations": {
    title: "体脂率图表：男性、女性和限制",
    excerpt: "了解体脂率范围、为什么男女图表不同，以及为什么应谨慎解读计算器结果。",
    seoTitle: "男性和女性体脂率图表",
    seoDescription: "了解体脂率图表如何使用、哪些因素影响估算，以及身体组成计算器的重要限制。",
    sections: [
      translatedBlogSection("体脂率的含义", "体脂率表示脂肪占体重的比例，用于补充 BMI 等粗略指标。"),
      translatedBlogSection("为什么估算会变化", "性别、年龄、测量方法、设备和水分状态都会影响体脂率估算。"),
      translatedBlogSection("体脂图表的限制", "图表只是参考范围，不能诊断健康，也不应单独决定饮食或训练。"),
    ],
  },
  "calories-burned-walking-calculator-distance-pace-and-weight": {
    title: "步行消耗热量计算器：距离、配速和体重",
    excerpt: "通过组合距离、配速、体重和活动假设估算步行消耗热量。",
    seoTitle: "步行消耗热量计算器 - 距离、配速、体重",
    seoDescription: "根据距离、配速、体重和路线条件估算步行消耗热量，同时理解健身估算限制。",
    sections: [
      translatedBlogSection("步行热量估算如何运作", "估算通常结合体重、距离、速度和活动强度计算。"),
      translatedBlogSection("距离和配速输入", "同样距离下，速度、坡度和地形会改变消耗；长距离通常消耗更多。"),
      translatedBlogSection("谨慎使用估算", "设备和公式都可能有误差。结果适合规划，不是精确能量测量。"),
    ],
  },
  "checkout-conversion-rate-calculator-measure-purchase-drop-off": {
    title: "结账转化率计算器：衡量购买流失",
    excerpt: "学习如何计算结账转化率、发现购买流失模式，并将该指标用于电商规划。",
    seoTitle: "结账转化率计算器：衡量购买流失",
    seoDescription: "用结账转化率了解到达结账页后有多少购物者完成购买，比较漏斗步骤并规划运营改进。",
    sections: [
      translatedBlogSection("结账转化率衡量什么", "它显示进入结账流程的购物者中，有多少最终完成购买。"),
      translatedBlogSection("如何计算", "用完成购买数除以到达结账的人数，再乘以 100。"),
      translatedBlogSection("如何使用结果", "结合支付失败、运费、表单摩擦和设备差异定位改进点。"),
    ],
  },
  "trial-to-paid-conversion-calculator-saas-funnel-guide": {
    title: "试用转付费转化计算器：SaaS 漏斗指南",
    excerpt: "计算试用转付费转化率，并用它评估 SaaS onboarding、定价准备度和客户资格。",
    seoTitle: "SaaS 漏斗规划的试用转付费转化计算器",
    seoDescription: "了解 SaaS 团队如何计算试用转付费转化率、解读漏斗移动，并将指标用于 onboarding 和收入规划。",
    sections: [
      translatedBlogSection("试用转付费转化显示什么", "它衡量试用用户中有多少最终成为付费客户。"),
      translatedBlogSection("如何计算试用转化", "用转为付费的客户数除以试用开始数，并明确统计窗口。"),
      translatedBlogSection("SaaS 团队如何应用", "用于评估 onboarding、产品价值呈现、定价和销售跟进质量。"),
    ],
  },
  "activation-rate-calculator-measure-first-value-moments": {
    title: "激活率计算器：衡量首次价值时刻",
    excerpt: "用激活率衡量有多少用户在 onboarding 或早期产品使用中达到有意义的首次价值时刻。",
    seoTitle: "激活率计算器：衡量首次价值时刻",
    seoDescription: "计算激活率、定义首次价值事件，并用该指标评估 onboarding 质量和早期产品参与度。",
    sections: [
      translatedBlogSection("激活率的含义", "激活率显示新用户中有多少完成代表首次价值的关键动作。"),
      translatedBlogSection("如何计算激活率", "用完成激活事件的用户数除以符合条件的新用户数。"),
      translatedBlogSection("如何使用激活数据", "比较不同渠道、流程和实验，优先减少早期摩擦。"),
    ],
  },
  "referral-conversion-rate-calculator-track-word-of-mouth-growth": {
    title: "推荐转化率计算器：跟踪口碑增长",
    excerpt: "计算推荐转化率，了解被推荐潜在客户如何从邀请、链接或推荐进入完成动作。",
    seoTitle: "口碑规划的推荐转化率计算器",
    seoDescription: "学习如何计算推荐转化率、评估推荐漏斗表现，并用更清晰的指标规划口碑项目。",
    sections: [
      translatedBlogSection("推荐转化率跟踪什么", "它衡量被推荐的人中有多少完成注册、购买或其他目标动作。"),
      translatedBlogSection("如何计算", "用完成目标动作的推荐人数除以被邀请或点击推荐链接的人数。"),
      translatedBlogSection("如何使用推荐转化率", "结合推荐来源、奖励机制和客户质量，优化口碑增长计划。"),
    ],
  },
  "annual-percentage-yield-calculator-apy-vs-apr-explained": {
    title: "APY 与 APR 说明",
    excerpt: "了解 APY 和 APR 的区别、为什么复利会改变结果，以及如何更谨慎地比较利率。",
    seoTitle: "APY vs APR 说明 - 比较年化收益率和利率",
    seoDescription: "了解 APY 和 APR 的区别、复利如何影响收益，以及何时使用利息和复利计算器。",
    sections: [
      translatedBlogSection("APY 的含义", "APY 反映包含复利影响后的年化收益，更适合比较储蓄收益。"),
      translatedBlogSection("APR 有何不同", "APR 通常描述借款年化成本或名义利率，可能不包含复利收益效果。"),
      translatedBlogSection("谨慎比较利率", "比较前应确认费用、复利频率、期限和产品类型是否一致。"),
    ],
  },
  "loan-amortization-calculator-principal-interest-schedule": {
    title: "贷款摊销说明",
    excerpt: "了解贷款摊销如何在还款计划中把每期付款分为本金和利息。",
    seoTitle: "贷款摊销计算器 - 本金和利息计划",
    seoDescription: "了解摊销如何运作、为什么早期还款包含更多利息，以及如何估算贷款还清计划。",
    sections: [
      translatedBlogSection("摊销的含义", "摊销把贷款余额按固定或计划还款逐步还清。"),
      translatedBlogSection("本金和利息计划", "早期付款通常利息占比更高，随着余额下降，本金占比提高。"),
      translatedBlogSection("负责任地使用估算", "实际计划可能受费用、提前还款、浮动利率和贷款条款影响。"),
    ],
  },
  "car-loan-interest-calculator-estimate-total-cost": {
    title: "汽车贷款利息和总成本",
    excerpt: "了解汽车贷款利息、期限、首付和费用如何影响车辆融资总成本。",
    seoTitle: "汽车贷款利息计算器 - 估算车贷总成本",
    seoDescription: "通过教育性车贷计算示例估算汽车贷款利息、月供和总融资成本。",
    sections: [
      translatedBlogSection("什么驱动汽车贷款利息", "车辆价格、首付、贷款期限、利率、税费和附加产品都会影响融资金额和利息。"),
      translatedBlogSection("月供 vs 总成本", "较长期限可能降低月供，但通常提高总利息和总成本。"),
      translatedBlogSection("如何比较场景", "比较不同首付、期限和利率，并关注总支付金额而不只是月供。"),
    ],
  },
  "salary-to-hourly-calculator-convert-pay-rates": {
    title: "年薪转时薪换算",
    excerpt: "将年薪换算为时薪，并了解工作小时、无薪时间和发薪频率如何影响估算。",
    seoTitle: "年薪转时薪计算器 - 换算年度薪资",
    seoDescription: "学习如何把年薪换算为时薪、比较薪资，并考虑工作小时和日程假设。",
    sections: [
      translatedBlogSection("基本年薪转时薪公式", "用年薪除以每年工作小时，可估算等效时薪。"),
      translatedBlogSection("税前薪资 vs 到手收入", "换算通常使用税前收入；税费、福利和扣款会改变到手金额。"),
      translatedBlogSection("比较薪资", "比较 offer 时应统一工作小时、假期、福利、奖金和通勤成本。"),
    ],
  },
  "investment-return-calculator-annualized-vs-total-return": {
    title: "投资回报计算器：年化回报 vs 总回报",
    excerpt: "了解年化回报和总回报的区别，以及每种估算如何支持投资表现比较。",
    seoTitle: "投资回报计算器 - 年化回报 vs 总回报",
    seoDescription: "了解年化回报、总回报、时间跨度影响，以及投资回报计算器如何支持教育性表现比较。",
    sections: [
      translatedBlogSection("总回报显示什么", "总回报显示整个持有期间的整体收益或损失。"),
      translatedBlogSection("为什么年化回报重要", "年化回报把不同期限的表现转换为更可比较的年度速度。"),
      translatedBlogSection("一起使用两个指标", "总回报说明结果规模，年化回报说明效率；两者都应结合风险和费用。"),
    ],
  },
  "tax-rate-calculator-effective-vs-marginal-tax-rate": {
    title: "税率计算器：有效税率 vs 边际税率",
    excerpt: "比较有效税率和边际税率，让所得税和规划示例中的计算器结果更容易解读。",
    seoTitle: "税率计算器 - 有效税率 vs 边际税率",
    seoDescription: "了解有效税率和边际税率的区别、为什么两者都重要，以及税务计算器如何支持教育性估算。",
    sections: [
      translatedBlogSection("有效税率的含义", "有效税率表示总税额占收入的平均比例。"),
      translatedBlogSection("边际税率的含义", "边际税率表示额外一部分收入可能适用的税率。"),
      translatedBlogSection("如何使用两个税率", "有效税率适合看整体负担，边际税率适合评估额外收入或扣除影响。"),
    ],
  },
  "revenue-growth-rate-calculator-monthly-and-annual-examples": {
    title: "收入增长率计算器：月度和年度示例",
    excerpt: "了解月度和年度比较的收入增长率公式，以及常见解读错误。",
    seoTitle: "收入增长率计算器 - 月度和年度示例",
    seoDescription: "学习如何计算收入增长率、比较月度和年度示例，并谨慎解读业务增长估算。",
    sections: [
      translatedBlogSection("收入增长率公式", "增长率通常为（新收入 - 旧收入）/ 旧收入 x 100。"),
      translatedBlogSection("月度 vs 年度比较", "月度增长更敏感，年度增长更稳定；比较时应统一时间范围。"),
      translatedBlogSection("谨慎解读增长", "季节性、一次性收入、价格变化和客户结构都会影响增长率。"),
    ],
  },
  "break-even-analysis-calculator-fixed-variable-costs-guide": {
    title: "盈亏平衡分析计算器：固定和可变成本指南",
    excerpt: "了解固定成本、可变成本、价格和贡献毛利如何塑造商业规划中的盈亏平衡分析。",
    seoTitle: "盈亏平衡分析计算器 - 固定和可变成本指南",
    seoDescription: "了解盈亏平衡分析、固定成本、可变成本、贡献毛利和教育性商业规划计算器示例。",
    sections: [
      translatedBlogSection("盈亏平衡分析显示什么", "它显示需要销售多少单位或收入才能覆盖成本。"),
      translatedBlogSection("固定成本和可变成本", "固定成本不随销量直接变化，可变成本通常随每单位销售增加。"),
      translatedBlogSection("使用盈亏平衡结果", "用结果测试价格、成本和销量场景，但要考虑产能、折扣和现金流。"),
    ],
  },
  "fine-tuning-cost-calculator-training-files-epochs-and-tokens": {
    title: "微调成本计算器：训练文件、epoch 和 token",
    excerpt: "通过建模训练文件大小、token 数、epoch 和验证运行来估算微调成本。",
    seoTitle: "微调成本计算器 - 训练 token、epoch 和文件",
    seoDescription: "了解如何根据训练文件、epoch、token 数和供应商定价假设估算 AI 微调成本。",
    sections: [
      translatedBlogSection("什么驱动微调成本", "训练 token、epoch 数、验证运行、模型选择和失败重试都会影响成本。"),
      translatedBlogSection("模型训练文件和 epoch", "文件越大、epoch 越多，训练 token 总量通常越高。"),
      translatedBlogSection("发布前验证定价", "微调价格、支持模型和训练规则可能变化，发布估算前应核对官方价格。"),
    ],
  },
  "ai-evaluation-cost-calculator-test-sets-judges-and-runs": {
    title: "AI 评估成本计算器：测试集、judge 和运行次数",
    excerpt: "通过估算测试集大小、judge 模型使用、重复运行和审查流程来规划 AI 评估成本。",
    seoTitle: "AI 评估成本计算器 - 测试集、judge 和运行次数",
    seoDescription: "根据测试用例、judge 模型、重复运行和人工或自动审查模式估算 AI 评估成本。",
    sections: [
      translatedBlogSection("为什么评估有自己的成本模型", "评估会产生 judge 调用、重复运行、人工审查和日志处理成本。"),
      translatedBlogSection("测试集、judge 和重复运行", "测试用例越多、运行越频繁、judge 模型越贵，评估成本越高。"),
      translatedBlogSection("发布前验证定价", "模型价格和评估方法会变化。公开成本前应核对当前官方价格。"),
    ],
  },
  "llm-routing-cost-calculator-balance-quality-latency-and-price": {
    title: "LLM 路由成本计算器：平衡质量、延迟和价格",
    excerpt: "通过建模流量组合、模型档位、fallback 路径、延迟需求和 token 用量估算路由后的 LLM 工作负载。",
    seoTitle: "LLM 路由成本计算器 - 质量、延迟和价格",
    seoDescription: "了解如何跨模型档位、fallback 策略、请求量和 token 用量估算 LLM 路由成本。",
    sections: [
      translatedBlogSection("LLM 路由如何改变成本", "路由会把不同请求分配给不同模型，成本取决于流量混合和 fallback。"),
      translatedBlogSection("质量、延迟和价格权衡", "低价模型可降低成本，但可能影响质量；高价模型可用于复杂或高风险请求。"),
      translatedBlogSection("发布前验证定价", "模型价格、延迟和可用性会变化。成本模型应定期更新。"),
    ],
  },
  "gpu-vs-api-cost-calculator-when-hosting-might-matter": {
    title: "GPU vs API 成本计算器：何时托管可能重要",
    excerpt: "使用工作负载规模、利用率、基础设施和运维假设，比较 AI API 使用与自托管 GPU 场景。",
    seoTitle: "GPU vs API 成本计算器 - 比较托管和 AI API 成本",
    seoDescription: "通过比较 API 使用、GPU 利用率、基础设施成本和运维开销，估算 GPU 托管何时可能重要。",
    sections: [
      translatedBlogSection("比较 API 和托管 GPU 成本", "API 更易启动，自托管 GPU 可能在高利用率和稳定负载下更有竞争力。"),
      translatedBlogSection("何时托管可能重要", "当请求量大、延迟要求特殊、数据控制严格或模型固定时，GPU 托管值得评估。"),
      translatedBlogSection("发布前验证定价", "GPU 价格、云费用、人员成本和 API 价格都会变化，应按当前数据比较。"),
    ],
  },
  "healthy-weight-range-calculator-bmi-and-context": {
    title: "健康体重范围计算器：BMI 和背景",
    excerpt: "了解 BMI 如何估算健康体重范围、为什么背景重要，以及何时应谨慎对待计算器结果。",
    seoTitle: "健康体重范围计算器：BMI 和背景指南",
    seoDescription: "使用 BMI、身高、体重和身体组成背景，将健康体重范围计算器结果理解为教育性估算而非医疗建议。",
    sections: [
      translatedBlogSection("健康体重范围估算什么", "它通常根据身高和 BMI 范围估算可能的体重区间。"),
      translatedBlogSection("结合身体背景使用 BMI", "肌肉量、年龄、孕期、疾病和个人健康目标都会影响解释。"),
      translatedBlogSection("教育性注意事项", "健康体重范围不是医学诊断。担心体重或健康时应寻求专业建议。"),
    ],
  },
  "daily-calorie-needs-for-women-and-men-calculator-guide": {
    title: "女性和男性每日热量需求：计算器指南",
    excerpt: "了解热量计算器如何根据 BMR、活动水平、年龄、身高、体重和性别估算每日需求。",
    seoTitle: "女性和男性每日热量需求计算器指南",
    seoDescription: "了解如何使用 BMR、活动倍数和实用教育性注意事项估算女性和男性每日热量需求。",
    sections: [
      translatedBlogSection("每日热量需求如何估算", "计算器通常先估算 BMR，再根据活动水平转换为 TDEE。"),
      translatedBlogSection("为什么结果因人而异", "年龄、性别、身高、体重、活动、肌肉量和健康状况都会影响需求。"),
      translatedBlogSection("谨慎使用该数字", "结果是规划起点，不是固定处方。应根据趋势和健康背景调整。"),
    ],
  },
  "water-intake-for-exercise-calculator-hydration-planning": {
    title: "运动饮水量计算器：补水规划",
    excerpt: "了解运动、体重、天气和距离如何影响活动前、中、后的补水规划。",
    seoTitle: "运动饮水量计算器和补水指南",
    seoDescription: "结合饮水量估算、活动背景、体重和距离规划运动补水，同时避免一刀切的医疗声明。",
    sections: [
      translatedBlogSection("运动补水规划包含什么", "规划通常考虑运动时长、强度、体重、出汗率和环境条件。"),
      translatedBlogSection("会改变液体需求的因素", "炎热、潮湿、长距离、海拔和高强度训练都会提高补水需求。"),
      translatedBlogSection("实用注意事项", "补水过少或过多都可能有风险。医疗状况或长时间运动应结合专业建议。"),
    ],
  },
  "weight-loss-percentage-calculator-track-change-safely": {
    title: "减重百分比计算器：安全跟踪变化",
    excerpt: "学习如何计算减重百分比、解读进展趋势，并避免过度解读短期体重波动。",
    seoTitle: "减重百分比计算器：安全跟踪进展",
    seoDescription: "根据起始体重和当前体重计算减重百分比，了解趋势限制，并用教育性注意事项更安全地跟踪。",
    sections: [
      translatedBlogSection("减重百分比如何运作", "用起始体重与当前体重的差值除以起始体重，再乘以 100。"),
      translatedBlogSection("为什么趋势比一次称重更重要", "水分、饮食、训练和周期变化会影响短期读数，趋势更有参考价值。"),
      translatedBlogSection("安全和解读", "结果不应鼓励快速或极端减重。若体重变化异常或涉及健康问题，应咨询专业人士。"),
    ],
  },
} satisfies Record<BlogPostSlug, BlogPostTranslation>;

export const simplifiedChineseContentTranslations = {
  categories: {
    finance: {
      name: "财务",
      description: "规划贷款、房贷、投资、税务、薪资和长期财务决策。",
      seoTitle: "财务计算器 - 免费资金与投资工具",
      seoDescription:
        "使用免费的财务计算器估算贷款、房贷、复利、ROI、薪资、税务和退休计划。",
    },
    health: {
      name: "健康",
      description: "估算 BMI、BMR、热量、体脂和饮水量等日常健康指标。",
      seoTitle: "健康计算器 - BMI、BMR、热量等工具",
      seoDescription:
        "使用免费健康工具计算 BMI、BMR、每日热量、体脂率和饮水量。",
    },
    "date-time": {
      name: "日期与时间",
      description: "快速准确地处理年龄、时长、周数和日期差。",
      seoTitle: "日期与时间计算器 - 年龄、时长和周数工具",
      seoDescription:
        "用免费的日期与时间计算器查询年龄、日期间隔、时间跨度和周数。",
    },
    math: {
      name: "数学",
      description: "解决百分比、分数、GPA 和平均值等常见计算。",
      seoTitle: "数学计算器 - 百分比、分数、GPA 和平均值",
      seoDescription:
        "使用免费数学计算器处理百分比、分数、GPA、平均值和日常算术检查。",
    },
    conversion: {
      name: "单位换算",
      description: "换算重量、长度、距离和温度等常用单位。",
      seoTitle: "单位换算计算器 - 重量、长度、距离和温度",
      seoDescription:
        "用免费工具换算 kg 到 lbs、cm 到英寸、英里到 km，以及摄氏到华氏。",
    },
    business: {
      name: "商业",
      description: "计算利润、收入、盈亏平衡点、CAC 和 LTV，辅助商业规划。",
      seoTitle: "商业计算器 - 利润、收入、CAC 和 LTV",
      seoDescription:
        "用免费商业计算器估算利润、收入、盈亏平衡点、获客成本和客户生命周期价值。",
    },
    ai: {
      name: "AI",
      description: "估算模型 token 成本、API 支出、AI 定价和 GPU 训练预算。",
      seoTitle: "AI 成本计算器 - Token、API、LLM 和 GPU 工具",
      seoDescription:
        "估算 OpenAI 成本、Claude token 用量、LLM 支出、GPU 训练成本和 AI 产品定价。",
    },
  },
  calculators: {
    "loan-calculator": {
      name: "贷款计算器",
      description: "估算每月还款额、总利息和贷款还清成本。",
      seoTitle: "贷款计算器 - 免费在线计算器",
      seoDescription: "估算贷款的每月还款额、总利息和还清成本。",
      contentSummary: "贷款计算器帮助 DTECALC 用户估算每月贷款还款、总利息和还清成本。",
      whatIs: "贷款计算器用于估算固定还款贷款的每月还款额和总利息。在申请个人贷款、学生贷款、商业贷款或任何分期债务之前，它非常有用，因为它展示了本金、利率和期限如何共同影响成本。",
      formula: "每月还款额 = [本金 x 月利率 x (1 + 月利率)^总月份] / [(1 + 月利率)^总月份 - 1]",
      formulaExplanation: "贷款还款公式根据还款期限分摊贷款余额，同时计算每月利息。较高的利率或较长的期限会改变成本结构：较长的期限通常会降低每月还款额，但会增加支付的总利息。",
      howToSteps: [
        "在计算器字段中输入所需的贷款金额。",
        "检查年利率和还款期限是否符合您的实际情况。",
        "结合公式说明查看计算出的月供结果。",
        "比较不同期限和利率下的总利息支出，做出更明智的借贷决策。"
      ],
      example: "例如，如果您以 7% 的年利率借款 20,000 美元，期限为五年，计算器将估算出每月还款额和总利息，以便您可以将其与较短期限或较低利率的方案进行比较。",
      useCases: [
        "在做出借贷决策前快速估算分期还款额。",
        "对比不同贷款方案的利息总额。",
        "了解还款公式背后的逻辑，而不是仅仅看一个数字。"
      ],
      faq: [
        {
          question: "贷款计算器是免费的吗？",
          answer: "是的。贷款计算器是 DTECALC 免费计算器库的一部分。"
        },
        {
          question: "我需要提供哪些信息？",
          answer: "输入贷款本金、年利率和贷款期限，然后查看详细的还款分析。"
        },
        {
          question: "支持手机访问吗？",
          answer: "支持。DTECALC 计算器针对桌面、平板和手机浏览器进行了优化。"
        }
      ]
    },
    "mortgage-calculator": {
      name: "房贷计算器",
      description: "根据本金、利息、税费和保险计算住房贷款还款额。",
      seoTitle: "房贷计算器 - 免费在线计算器",
      seoDescription: "根据本金、利息、税费和保险计算住房贷款还款额。",
      contentSummary: "房贷计算器帮助用户根据房价、首付、利率等因素估算每月的住房贷款支出。",
      whatIs: "房贷计算器使用房价、首付、利率、贷款期限以及可选的税费和保险成本来估算每月还款额。它帮助购房者在正式申请房贷之前对比不同方案的负担能力。",
      formula: "月供 = 贷款总额 x 月利率 / (1 - (1 + 月利率)^-总月份)",
      formulaExplanation: "核心房贷公式与分期贷款使用的摊销还款公式相同。房贷页面通常还会加入物业税、房屋保险、PMI 和管理费（HOA），使估算的住房支出更接近真实的每月总成本。",
      howToSteps: [
        "输入房屋总价和您的首付比例或金额。",
        "输入预期的贷款年利率和还款年限。",
        "根据需要添加每年的税费和保险预估。",
        "查看包含本金、利息、税费及保险在内的每月总还款额。"
      ],
      example: "对于一个总价 35 万美元、首付 20%、贷款期限 30 年且利率固定的房屋，计算器会先估算本金和利息，然后您可以叠加税费和保险进行综合计算。",
      faq: [
        {
          question: "房贷计算器包含物业税吗？",
          answer: "支持。您可以手动输入预计的年度物业税，计算器会将其分摊到每月还款中。"
        },
        {
          question: "什么是 PMI？",
          answer: "PMI 是私人抵押贷款保险，如果您的首付低于 20%，通常需要支付这笔费用。我们的计算器允许您在详细估算中考虑这类额外成本。"
        }
      ]
    },
    "car-loan-calculator": {
      name: "汽车贷款计算器",
      description: "购车前估算每月车贷还款、总利息和融资成本。",
      seoTitle: "汽车贷款计算器 - 免费在线计算器",
      seoDescription: "购车前估算每月车贷还款、总利息和融资成本。",
    },
    "interest-calculator": {
      name: "利息计算器",
      description: "计算单利、复利和一段时间内的总增长。",
      seoTitle: "利息计算器 - 免费在线计算器",
      seoDescription: "计算单利、复利和一段时间内的总增长。",
    },
    "compound-interest-calculator": {
      name: "复利计算器",
      description: "根据本金、追加投入、利率和时间预测储蓄增长。",
      seoTitle: "复利计算器 - 免费在线计算器",
      seoDescription: "根据本金、追加投入、利率和时间预测储蓄增长。",
    },
    "investment-calculator": {
      name: "投资计算器",
      description: "用投入、收益率和投资周期预测投资价值。",
      seoTitle: "投资计算器 - 免费在线计算器",
      seoDescription: "用投入、收益率和投资周期预测投资价值。",
    },
    "roi-calculator": {
      name: "ROI 计算器",
      description: "以原始成本的百分比衡量投资回报率。",
      seoTitle: "ROI 计算器 - 免费在线计算器",
      seoDescription: "以原始成本的百分比衡量投资回报率。",
    },
    "retirement-calculator": {
      name: "退休计算器",
      description: "估算退休储蓄需求和预计投资组合价值。",
      seoTitle: "退休计算器 - 免费在线计算器",
      seoDescription: "估算退休储蓄需求和预计投资组合价值。",
    },
    "salary-calculator": {
      name: "薪资计算器",
      description: "换算薪资、时薪和发薪周期，帮助规划收入。",
      seoTitle: "薪资计算器 - 免费在线计算器",
      seoDescription: "换算薪资、时薪和发薪周期，帮助规划收入。",
    },
    "tax-calculator": {
      name: "税务计算器",
      description: "估算所得税、有效税率和税后收入。",
      seoTitle: "税务计算器 - 免费在线计算器",
      seoDescription: "估算所得税、有效税率和税后收入。",
    },
    "bmi-calculator": {
      name: "BMI 计算器",
      description: "根据身高和体重计算身体质量指数。",
      seoTitle: "BMI 计算器 - 免费在线计算器",
      seoDescription: "根据身高和体重计算 BMI，并查看公式、分类和健康范围。",
    },
    "bmr-calculator": {
      name: "BMR 计算器",
      description: "根据年龄、身高、体重和性别估算基础代谢率。",
      seoTitle: "BMR 计算器 - 免费在线计算器",
      seoDescription: "根据年龄、身高、体重和性别估算基础代谢率。",
    },
    "calories-calculator": {
      name: "热量计算器",
      description: "估算维持、减脂或增重所需的每日热量。",
      seoTitle: "热量计算器 - 免费在线计算器",
      seoDescription: "估算维持、减脂或增重所需的每日热量。",
    },
    "body-fat-calculator": {
      name: "体脂计算器",
      description: "使用常见身体测量数据估算体脂率。",
      seoTitle: "体脂计算器 - 免费在线计算器",
      seoDescription: "使用常见身体测量数据估算体脂率。",
    },
    "water-intake-calculator": {
      name: "饮水量计算器",
      description: "根据体重和活动量估算每日饮水量。",
      seoTitle: "饮水量计算器 - 免费在线计算器",
      seoDescription: "根据体重和活动量估算每日饮水量。",
    },
    "age-calculator": {
      name: "年龄计算器",
      description: "计算精确到年、月、日的年龄。",
      seoTitle: "年龄计算器 - 免费在线计算器",
      seoDescription: "计算精确到年、月、日的年龄。",
    },
    "days-between-dates": {
      name: "日期间隔计算器",
      description: "计算两个日历日期之间的天数。",
      seoTitle: "日期间隔计算器 - 免费在线计算器",
      seoDescription: "计算两个日历日期之间的天数。",
    },
    "time-duration-calculator": {
      name: "时间跨度计算器",
      description: "计算两个时间或时间戳之间经过的时长。",
      seoTitle: "时间跨度计算器 - 免费在线计算器",
      seoDescription: "计算两个时间或时间戳之间经过的时长。",
    },
    "week-calculator": {
      name: "周数计算器",
      description: "查找周数、日期范围和按周偏移。",
      seoTitle: "周数计算器 - 免费在线计算器",
      seoDescription: "查找周数、日期范围和按周偏移。",
    },
    "percentage-calculator": {
      name: "百分比计算器",
      description: "解决涨幅、折扣和部分占整体的问题。",
      seoTitle: "百分比计算器 - 免费在线计算器",
      seoDescription: "解决涨幅、折扣和部分占整体的问题。",
    },
    "fraction-calculator": {
      name: "分数计算器",
      description: "对分数进行加、减、乘、除和化简。",
      seoTitle: "分数计算器 - 免费在线计算器",
      seoDescription: "对分数进行加、减、乘、除和化简。",
    },
    "gpa-calculator": {
      name: "GPA 计算器",
      description: "根据课程、学分和成绩计算平均绩点。",
      seoTitle: "GPA 计算器 - 免费在线计算器",
      seoDescription: "根据课程、学分和成绩计算平均绩点。",
    },
    "average-calculator": {
      name: "平均值计算器",
      description: "求一组数字的算术平均值。",
      seoTitle: "平均值计算器 - 免费在线计算器",
      seoDescription: "求一组数字的算术平均值。",
    },
    "kg-to-lbs": {
      name: "千克转磅",
      description: "快速将千克换算为磅。",
      seoTitle: "千克转磅 - 免费在线计算器",
      seoDescription: "快速将千克换算为磅。",
    },
    "cm-to-inches": {
      name: "厘米转英寸",
      description: "将厘米换算为英寸，用于测量和尺寸。",
      seoTitle: "厘米转英寸 - 免费在线计算器",
      seoDescription: "将厘米换算为英寸，用于测量和尺寸。",
    },
    "miles-to-km": {
      name: "英里转公里",
      description: "将英里换算为公里，方便距离规划。",
      seoTitle: "英里转公里 - 免费在线计算器",
      seoDescription: "将英里换算为公里，方便距离规划。",
    },
    "celsius-to-fahrenheit": {
      name: "摄氏转华氏",
      description: "将摄氏温度换算为华氏温度。",
      seoTitle: "摄氏转华氏 - 免费在线计算器",
      seoDescription: "将摄氏温度换算为华氏温度。",
    },
    "profit-calculator": {
      name: "利润计算器",
      description: "根据收入和成本计算利润。",
      seoTitle: "利润计算器 - 免费在线计算器",
      seoDescription: "根据收入和成本计算利润。",
    },
    "revenue-calculator": {
      name: "收入计算器",
      description: "根据价格、数量和销量估算收入。",
      seoTitle: "收入计算器 - 免费在线计算器",
      seoDescription: "根据价格、数量和销量估算收入。",
    },
    "break-even-calculator": {
      name: "盈亏平衡计算器",
      description: "找出覆盖固定和可变成本所需的销售量。",
      seoTitle: "盈亏平衡计算器 - 免费在线计算器",
      seoDescription: "找出覆盖固定和可变成本所需的销售量。",
    },
    "cac-calculator": {
      name: "CAC 计算器",
      description: "根据销售和营销支出计算获客成本。",
      seoTitle: "CAC 计算器 - 免费在线计算器",
      seoDescription: "根据销售和营销支出计算获客成本。",
    },
    "ltv-calculator": {
      name: "LTV 计算器",
      description: "根据收入、毛利和留存估算客户生命周期价值。",
      seoTitle: "LTV 计算器 - 免费在线计算器",
      seoDescription: "根据收入、毛利和留存估算客户生命周期价值。",
    },
    "openai-cost-calculator": {
      name: "OpenAI 成本计算器",
      description: "根据 token、模型价格和使用量估算 OpenAI API 成本。",
      seoTitle: "OpenAI 成本计算器 - 免费在线计算器",
      seoDescription: "根据 token、模型价格和使用量估算 OpenAI API 成本。",
    },
    "claude-token-calculator": {
      name: "Claude Token 计算器",
      description: "估算 Claude 提示词和响应的 token 用量与成本。",
      seoTitle: "Claude Token 计算器 - 免费在线计算器",
      seoDescription: "估算 Claude 提示词和响应的 token 用量与成本。",
    },
    "llm-cost-calculator": {
      name: "LLM 成本计算器",
      description: "按 token 价格和工作负载比较大语言模型成本。",
      seoTitle: "LLM 成本计算器 - 免费在线计算器",
      seoDescription: "按 token 价格和工作负载比较大语言模型成本。",
    },
    "gpu-training-cost-calculator": {
      name: "GPU 训练成本计算器",
      description: "根据硬件价格、运行时长和利用率估算 GPU 训练成本。",
      seoTitle: "GPU 训练成本计算器 - 免费在线计算器",
      seoDescription: "根据硬件价格、运行时长和利用率估算 GPU 训练成本。",
    },
    "ai-pricing-calculator": {
      name: "AI 定价计算器",
      description: "根据使用成本、利润率和客户量规划 AI 产品定价。",
      seoTitle: "AI 定价计算器 - 免费在线计算器",
      seoDescription: "根据使用成本、利润率和客户量规划 AI 产品定价。",
    },
  },
  blogPosts: simplifiedChineseBlogPostTranslations,
} satisfies ContentTranslations;
