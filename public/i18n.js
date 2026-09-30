(() => {
  'use strict';

  const STORAGE_KEY = 'auryveth-language';
  const EN = 'en';
  const ZH_CN = 'zh-CN';

  // First-party, human-reviewed Simplified Chinese copy. Exact text-node keys
  // keep translation deterministic and prevent any third-party translation
  // service from seeing visitor content or browsing activity.
  const ZH = Object.freeze({
    /* Global navigation */
    "Home": "首页",
    "Research": "研究",
    "Digital Organisms": "数字生命体",
    "The broader digital-life concept": "更广泛的数字生命概念",
    "Research direction": "研究方向",
    "Persistent cognition, learning and evolution": "持续认知、学习与进化",
    "Knowledge & definitions": "知识与定义",
    "First-party concepts and boundaries": "AURYVETH 的概念与边界",
    "Roadmap": "路线图",
    "Capability-gated development path": "以能力验证为门槛的发展路径",
    "Products": "产品",
    "Business Organisms": "商业生命体",
    "The first commercial specialization": "首个商业化专精方向",
    "Founding Pilot": "创始合作试点",
    "Bounded, evidence-driven deployment": "有边界、以证据驱动的部署",
    "About": "关于",
    "About Auryveth": "关于 Auryveth",
    "Mission, founder and operating principles": "使命、创始人与运营原则",
    "Founder Constitution": "创始人宪章",
    "Published governance principles": "公开发布的治理原则",
    "Investors & partners": "投资者与合作伙伴",
    "Company thesis and strategic context": "公司理念与战略背景",
    "Explore a pilot": "了解试点",
    "Auryveth home": "Auryveth 首页",
    "Primary navigation": "主导航",
    "Research links": "研究相关链接",
    "Product links": "产品相关链接",
    "Company links": "公司相关链接",
    "Open navigation": "打开导航",
    "Close navigation": "关闭导航",
    "Switch website language to Chinese": "将网站语言切换为中文",
    "Switch website language to English": "将网站语言切换为英文",
    "Skip to content": "跳至主要内容",
    ", and": "，以及",
    "and its": "及其",
    "Prepare work": "准备工作",
    "The": "请参阅",
    "organism-versus-agent comparison": "生命体与智能体比较",
    "authority model": "权限模型",
    ", then the": "，然后是",
    "See the": "请参阅",
    "and the": "以及",

    /* Non-DOM public copy (CSS generated labels / shared metadata) */
    "AURYVETH / INTERNAL PROVING GROUND": "AURYVETH / 内部验证场",
    "FOUNDER / AURYVETH": "创始人 / AURYVETH",
    "AURYVETH / BUILD · LEARN · EVOLVE": "AURYVETH / 构建 · 学习 · 进化",
    "AURYVETH develops governed digital life organisms: persistent systems designed to build, learn and evolve as experience accumulates, while earning bounded autonomy under explicit human authority.": "AURYVETH 开发受治理的数字生命体：这类持续运行的系统会随着经验累积而构建、学习与进化，并在明确的人类权限之下逐步获得有限自主性。",
    "en_US": "zh_CN",

    /* Page titles and descriptions */
    "AURYVETH — Governed Digital Life Organisms": "AURYVETH — 受治理的数字生命体",
    "AURYVETH develops governed digital life organisms designed to build, learn and evolve over time, with bounded autonomy under explicit human authority.": "AURYVETH 开发受治理的数字生命体，使其能够随着时间持续构建、学习与进化，并在明确的人类权限之下获得有限自主性。",
    "About AURYVETH — Governed Digital Life Organisms": "关于 AURYVETH — 受治理的数字生命体",
    "Meet AURYVETH and its founder, Jeremiah Wong Zhi Qi. AURYVETH is developing governed digital life organisms, business organisms and autonomous business systems.": "了解 AURYVETH 及其创始人 Jeremiah Wong Zhi Qi。AURYVETH 正在开发受治理的数字生命体、商业生命体与自主商业系统。",
    "Digital Business Organisms — AURYVETH": "数字商业生命体 — AURYVETH",
    "Auryveth business organisms are designed to learn operational context and earn bounded autonomy through evidence.": "Auryveth 商业生命体被设计为学习运营上下文，并通过证据逐步获得有限自主权。",
    "Digital Organism Research — AURYVETH": "数字生命体研究 — AURYVETH",
    "Auryveth Research explores persistent cognition, consequence-driven learning, specialization, coordination and governed evolution.": "Auryveth Research 探索持续认知、后果驱动学习、专业化、协作与受治理的进化。",
    "Governed Autonomy Roadmap — AURYVETH": "受治理自主性路线图 — AURYVETH",
    "Auryveth’s capability-gated roadmap progresses from a single business organism to governed inter-company coordination.": "Auryveth 以能力验证为门槛的路线图，将从单一商业生命体逐步发展到受治理的跨公司协作。",
    "Founder Constitution — AURYVETH": "创始人宪章 — AURYVETH",
    "Read Auryveth’s founding governance principles for autonomy, accountability, sovereignty and evidence.": "阅读 Auryveth 关于自主性、问责、主权与证据的创立治理原则。",
    "Investors & Strategic Partners — AURYVETH": "投资者与战略合作伙伴 — AURYVETH",
    "Auryveth’s investor thesis connects near-term business automation value with long-term persistent digital organism infrastructure.": "Auryveth 的投资逻辑将近期商业自动化价值与长期持续型数字生命体基础设施连接起来。",
    "Founding Partner Pilot — AURYVETH": "创始合作伙伴试点 — AURYVETH",
    "Explore the Auryveth founding partner pilot model for bounded business automation and evidence-driven autonomy.": "了解 Auryveth 创始合作伙伴试点模式：有边界的商业自动化与证据驱动的自主性。",
    "Privacy — AURYVETH": "隐私 — AURYVETH",
    "Auryveth privacy information for the current website release.": "Auryveth 当前网站版本的隐私信息。",
    "What Is a Digital Organism? — AURYVETH": "什么是数字生命体？— AURYVETH",
    "AURYVETH’s definition of persistent digital life designed to build, learn and evolve as experience accumulates under explicit governance.": "AURYVETH 对持续型数字生命的定义：在明确治理下，随着经验累积而构建、学习与进化。",
    "What Is a Business Organism? — AURYVETH": "什么是商业生命体？— AURYVETH",
    "AURYVETH’s definition of a persistent digital business organism, its scope, its intended continuity and its authority boundaries.": "AURYVETH 对持续型数字商业生命体、其范围、预期连续性与权限边界的定义。",
    "What Is Governed Autonomy? — AURYVETH": "什么是受治理的自主性？— AURYVETH",
    "Why better capabilities do not confer permission: AURYVETH’s definition of explicitly granted, bounded operational authority.": "为什么更强能力并不会自动获得权限：AURYVETH 对明确授予且有边界的运营权限的定义。",
    "Business Organism vs. AI Agent — AURYVETH": "商业生命体与 AI 智能体 — AURYVETH",
    "How AURYVETH distinguishes its persistent business-organism architecture from task-oriented AI agent systems, without claiming current autonomy.": "AURYVETH 如何区分持续型商业生命体架构与任务导向 AI 智能体系统，同时不声称当前已经实现自主运行。",
    "How a Business Organism Earns Authority — AURYVETH": "商业生命体如何获得权限 — AURYVETH",
    "Explore AURYVETH’s proposed progression from observing and preparing work to explicitly approved, bounded execution.": "了解 AURYVETH 提出的权限进阶路径：从观察和准备工作，到明确批准的有限执行。",
    "Why AURYVETH Tests Its Organisms Internally First": "为什么 AURYVETH 先在内部测试生命体",
    "AURYVETH’s planned internal proving ground: prepare real work, review outcomes, measure reliability and earn narrowly scoped authority.": "AURYVETH 计划中的内部验证场：准备真实工作、审核结果、衡量可靠性，并逐步获得范围有限的权限。",
    "Page not found — Auryveth": "找不到页面 — Auryveth",
    "Auryveth page not found.": "找不到所请求的 Auryveth 页面。",
    "AURYVETH — governed digital life organisms": "AURYVETH — 受治理的数字生命体",

    /* Footer */
    "We build. We learn. We evolve — toward a better future.": "我们构建。我们学习。我们进化——迈向更美好的未来。",
    "Company": "公司",
    "Constitution": "宪章",
    "Technology": "技术",
    "Knowledge & Definitions": "知识与定义",
    "Pilot Program": "试点计划",
    "Partners": "合作伙伴",
    "Investors": "投资者",
    "Business Pilots": "商业试点",
    "Founding Record": "创立记录",
    "© 2026 Auryveth. All rights reserved.": "© 2026 Auryveth。保留所有权利。",
    "Privacy": "隐私",
    "· Capability claims are separated from research goals and roadmap objectives.": "· 能力声明与研究目标及路线图目标明确区分。",

    /* 404 */
    "Page not found.": "找不到页面。",
    "The page may have moved, the address may be incomplete, or the requested content may no longer be available.": "该页面可能已移动、网址不完整，或所请求的内容已不再提供。",
    "Return to Auryveth →": "返回 Auryveth →",
    "View roadmap": "查看路线图",

    /* About */
    "Auryveth is a long-horizon technology and research company developing governed digital life organisms: persistent digital systems intended to build, learn and evolve as experience accumulates, while remaining bounded by explicit human authority.": "Auryveth 是一家着眼长期的科技与研究公司，致力于开发受治理的数字生命体：这类持续运行的数字系统会随着经验积累而构建、学习与进化，同时始终受明确的人类权限边界约束。",
    "Purpose": "使命",
    "Build intelligence that remains useful beyond a single prompt or workflow.": "构建超越单次提示或单一工作流、能够持续产生价值的智能。",
    "The long-term goal is not merely more automation. It is to develop digital organisms that can accumulate useful experience, improve their capabilities and cooperate with people and organizations without turning capability growth into uncontrolled authority.": "长期目标并不只是实现更多自动化，而是开发能够积累有用经验、提升能力并与个人及组织协作的数字生命体，同时避免让能力增长转化为不受控制的权限扩张。",
    "Founder": "创始人",
    "Founder of AURYVETH": "AURYVETH 创始人",
    "Jeremiah founded AURYVETH to explore how persistent digital organisms can support real-world business operations responsibly before expanding into broader networks of coordinated organizations and personal services.": "Jeremiah 创立 AURYVETH，是为了探索持续型数字生命体如何先以负责任的方式支持真实商业运营，再逐步扩展到更广泛的组织协作网络与个人服务。",
    "He leads AURYVETH's direction across the business-organism platform, governed autonomy, digital-organism research and the company's internal proving ground. The operating principle is simple: capabilities should be demonstrated with evidence before authority expands.": "他负责 AURYVETH 在商业生命体平台、受治理的自主性、数字生命体研究以及公司内部验证场方面的方向。运营原则很简单：在扩大权限之前，能力必须先通过证据得到证明。",
    "Build in the real world": "在真实世界中构建",
    "Measure before claiming": "先测量，再声明",
    "Earn autonomy": "以证据赢得自主权",
    "How Auryveth operates": "Auryveth 如何运作",
    "Build → learn → evolve.": "构建 → 学习 → 进化。",
    "The company applies the same build–learn–evolve cycle to its own operations.": "公司将同样的“构建—学习—进化”循环应用于自身运营。",
    "We build": "我们构建",
    "Create focused systems that test important assumptions under real operating conditions.": "构建聚焦的系统，在真实运营条件下验证关键假设。",
    "We learn": "我们学习",
    "Measure outcomes, including failures, user behavior, technical limits and unexpected consequences.": "衡量结果，包括失败、用户行为、技术限制与意外后果。",
    "We evolve": "我们进化",
    "Change the system, company process or research direction when evidence invalidates an earlier assumption.": "当证据推翻先前假设时，调整系统、公司流程或研究方向。",
    "Operating constraints": "运营约束",
    "Durable growth requires institutional memory.": "可持续增长需要组织记忆。",
    "Auryveth is designed to avoid dependence on short-term promotional claims, a single investor, a single organism, a single model provider or undocumented knowledge held by one person.": "Auryveth 的设计目标是避免依赖短期宣传性声明、单一投资者、单一生命体、单一模型供应商，或只掌握在某个人手中且未被记录的知识。",
    "Evidence before presentation": "证据先于展示",
    "Demonstrated behavior is treated as evidence only when it is supported by repeatable evaluation and relevant operating conditions.": "只有当展示出的行为得到可重复评估以及相关运营条件的支持时，才会被视为证据。",
    "Authority follows validation": "权限建立在验证之后",
    "New capabilities progress through observation, simulation or approval-gated operation before autonomous execution is considered.": "新能力必须先经过观察、模拟或审批门控运行，之后才会考虑自主执行。",
    "Organizational sovereignty": "组织主权",
    "Inter-company coordination must preserve each organization's control over its knowledge, permissions and commercial relationships.": "跨公司协作必须保留每个组织对其知识、权限与商业关系的控制权。",
    "Institutional direction": "组织长期方向",
    "Auryveth is intended to become an institution that outlasts individual products and leadership.": "Auryveth 的目标是成为一个能够超越单一产品与个别领导者而持续存在的组织。",
    "Architecture decisions, experiment records, governance, code, datasets and failures should become part of durable institutional memory that future teams can understand and improve.": "架构决策、实验记录、治理机制、代码、数据集与失败经验都应成为可长期保存的组织记忆，让未来团队能够理解并持续改进。",
    "Founder operating principles": "创始人运营原则",

    /* Constitution */
    "Founder Constitution / v0.1": "创始人宪章 / v0.1",
    "Govern the company before scale makes governance difficult.": "在规模扩大使治理变得困难之前，先建立治理。",
    "Auryveth's Founder Constitution records the principles intended to survive product changes, new employees, new investors and increasingly capable organisms.": "Auryveth 的《创始人宪章》记录了应当跨越产品变化、新员工、新投资者以及能力不断增强的生命体而持续有效的原则。",
    "Download official PDF": "下载官方 PDF",
    "Read summary": "阅读摘要",
    "Founding record:": "创立记录：",
    "Version 0.1 was adopted 23 September 2026. Future revisions should remain versioned, dated and accompanied by an explanation of what changed and why.": "0.1 版于 2026 年 9 月 23 日通过。未来修订应继续保留版本号、日期，并说明修改了什么以及为何修改。",
    "Core principles": "核心原则",
    "The constitution in operational language.": "以运营语言表达的宪章。",
    "The complete document contains twenty founding articles. These six themes summarize the architecture they impose on Auryveth.": "完整文件包含二十条创立条款。以下六个主题概括了这些条款为 Auryveth 所建立的治理架构。",
    "Human authority": "人类权限",
    "Autonomy is bounded by permissions set by people and organizations. Learning does not silently expand authority.": "自主性受个人与组织设定的权限约束。学习不会在无声中扩大权限。",
    "Accountability": "问责与可追溯性",
    "Consequential actions should preserve enough evidence to understand observation, decision, authority, outcome and learning.": "具有重要后果的行动应保留足够证据，以理解观察、决策、权限、结果与学习过程。",
    "Connecting organisms must not imply unrestricted sharing of customer data, strategy, pricing or internal state.": "连接不同生命体并不意味着可以无限制共享客户数据、战略、定价或内部状态。",
    "Evidence over appearance": "证据高于表象",
    "Measured capability is distinct from a persuasive demo, research hypothesis or long-term aspiration.": "经过测量的能力，与具有说服力的演示、研究假设或长期愿景是不同的概念。",
    "Reversibility": "可逆性",
    "Prepare, simulate, stage and review before granting authority for difficult-to-reverse actions.": "对于难以撤销的行动，在授予权限之前应先进行准备、模拟、分阶段验证与审查。",
    "Institutional resilience": "组织韧性",
    "Auryveth should become less fragile as it grows and avoid dependence on any single organism, person, investor or infrastructure path.": "Auryveth 应随着成长而变得更不脆弱，并避免依赖任何单一生命体、个人、投资者或基础设施路径。",
    "Official document": "官方文件",
    "Read the full founding record.": "阅读完整创立记录。",
    "The PDF is the archival version. The website summary exists for accessibility and discovery; it does not replace the versioned founding document.": "PDF 是归档版本。网站摘要用于提高可访问性与可发现性，并不能取代带版本号的创立文件。",
    "Open PDF →": "打开 PDF →",
    "Archival copy": "归档副本",
    "Access the complete versioned constitution.": "查看完整的版本化宪章。",
    "The page above provides the web-readable governance summary. The versioned PDF remains the archival record and is optimized for direct access without loading automatically in the background.": "以上页面提供适合网页阅读的治理摘要。带版本号的 PDF 仍是正式归档记录，并针对直接访问进行了优化，不会在后台自动加载。",
    "Open optimized PDF →": "打开优化版 PDF →",
    "6 pages · approximately 125 KB": "6 页 · 约 125 KB",

    /* Home / hero */
    "Auryveth / Governed digital life organisms": "Auryveth / 受治理的数字生命体",
    "Build digital life that": "构建能够",
    "learns, evolves and earns trust over time.": "持续学习、进化，并逐步赢得信任的数字生命。",
    "Auryveth is a technology and research company developing persistent digital organisms designed to build, learn and evolve as experience accumulates. Our first commercial specialization is the business organism: an operational system that works inside approved company context and earns bounded authority under explicit human control.": "Auryveth 是一家科技与研究公司，致力于开发能够随着经验积累而持续构建、学习与进化的数字生命体。我们的首个商业化专精方向是商业生命体：一种在经过批准的公司环境中工作，并在明确的人类控制下逐步获得有限权限的运营系统。",
    "Understand digital organisms →": "了解数字生命体 →",
    "Explore business organisms": "探索商业生命体",
    "Stage:": "阶段：",
    "early development": "早期开发",
    "First proving ground:": "首个验证场：",
    "Governance:": "治理：",
    "authority changes require explicit approval": "权限变更必须经过明确批准",
    "conceptual organism / continuously active": "概念生命体 / 持续运行",
    "Persistent digital life under human authority.": "处于人类权限之下的持续型数字生命。",
    "Its cellular-neural structure keeps growing, reorganizing and exchanging bioelectric signals. Pointer movement gently influences its living field.": "它的细胞—神经结构会持续生长、重组并交换生物电信号。指针移动会轻微影响其生命场。",
    "sensing": "感知",
    "memory": "记忆",
    "growth": "成长",
    "governance": "治理",
    "Operating thesis": "运营理念",
    "Validate internally first": "先在内部验证",
    "Auryveth serves as the first operational proving ground.": "Auryveth 将作为首个运营验证场。",
    "Autonomy is earned": "自主权需要被赢得",
    "Capability growth does not grant authority.": "能力增长并不会自动授予权限。",
    "Coordinate without compromising sovereignty": "在不牺牲主权的前提下协作",
    "Organizations retain control of their knowledge and permissions.": "各组织始终保留对自身知识与权限的控制。",
    "Core concepts": "核心概念",
    "One digital-life mission, with business as the first proving ground.": "一个数字生命使命，以商业作为首个验证场。",
    "AURYVETH separates the organism itself, its business specialization, and the authority it is allowed to exercise. That distinction lets capability grow without silently granting more real-world power.": "AURYVETH 将生命体本身、其商业专精方向以及它被允许行使的权限明确分离。这样的区分让能力可以成长，而不会在无声中获得更多现实世界权力。",
    "Digital organism": "数字生命体",
    "A persistent digital life system designed to build, learn and evolve as experience accumulates over time.": "一种持续型数字生命系统，旨在随着时间与经验累积而构建、学习与进化。",
    "Read the definition →": "阅读定义 →",
    "Business organism": "商业生命体",
    "A digital organism specialized for approved organizational context, continuing work and operational responsibility.": "一种针对已批准组织环境、持续工作与运营责任进行专精的数字生命体。",
    "See the business form →": "查看商业形态 →",
    "Governed autonomy": "受治理的自主性",
    "Capability improvement never grants authority by itself. Permissions remain explicit, bounded, auditable and separately granted.": "能力提升本身永远不会授予权限。权限始终明确、有边界、可审计，并需单独授权。",
    "Understand the boundary →": "了解权限边界 →",
    "AURYVETH / digital organism field guide": "AURYVETH / 数字生命体导览",
    "Persistent digital life": "持续型数字生命",
    "Intelligence should accumulate, not restart.": "智能应当持续积累，而不是每次重新开始。",
    "The organism is designed to preserve continuity as the organization changes, reorganize internal connections as new evidence arrives, and convert approved signals into durable operational memory under explicit authority.": "该生命体被设计为在组织发生变化时保持连续性，在新证据出现时重组内部连接，并在明确权限之下将获准信号转化为持久的运营记忆。",
    "Continuity": "连续性",
    "Organism layer": "生命体层",
    "Life cycle": "生命周期",
    "Capability": "能力",
    "current view": "当前视图",
    "One persistent organism remains at the center while its public-facing model unfolds around it.": "一个持续存在的生命体始终位于核心，其面向公众的模型则围绕它逐步展开。",
    "Sense": "感知",
    "Approved signals enter through trusted sources.": "获准信号通过可信来源进入系统。",
    "Remember": "记忆",
    "Relevant context persists across interactions.": "相关上下文会跨交互持续保留。",
    "Govern": "治理",
    "Consequential action remains inside explicit authority.": "具有重要后果的行动始终受明确权限约束。",
    "Coordinate": "协调",
    "Bounded work moves across approved systems and roles.": "有边界的工作在获准系统与角色之间流转。",
    "Reason": "推理",
    "Evidence and constraints become decision-ready context.": "证据与约束被整理为可用于决策的上下文。",
    "conceptual visualization · public architecture view": "概念可视化 · 公开架构视图",
    "scroll to reveal": "滚动以查看",
    "The first commercial system": "首个商业系统",
    "A persistent operating layer for business workflows.": "面向商业工作流的持续运营层。",
    "The target is a persistent operating layer that stays aware of approved business context, follows unfinished work across systems, learns from outcomes, and becomes useful before it becomes autonomous.": "目标是建立一个持续运营层：它能够持续掌握获准的商业上下文，跨系统跟进未完成工作，从结果中学习，并在获得自主执行能力之前就先产生实际价值。",
    "Observe": "观察",
    "Learn approved workflows, systems, roles, constraints and recurring operational patterns.": "学习获准的工作流、系统、角色、约束与重复出现的运营模式。",
    "Connect context across email, ERP, CRM, inventory, documents and open commitments.": "连接电子邮件、ERP、CRM、库存、文件以及未完成承诺之间的上下文。",
    "Prepare": "准备",
    "Build quotations, orders, follow-ups, tasks and decisions for review with supporting evidence.": "准备报价、订单、跟进、任务与决策，并附上支持性证据供审核。",
    "Execute": "执行",
    "Carry out only those actions allowed by explicit policy, thresholds and audit boundaries.": "只执行明确政策、阈值与审计边界所允许的行动。",
    "General operating example": "通用运营示例",
    "A practical model for governed autonomy across business operations.": "一个适用于商业运营的受治理自主性实践模型。",
    "Governed autonomy begins with a clearly defined operational scope. The organism accesses only approved context, prepares decision-ready work, and keeps consequential actions subject to explicit authority controls.": "受治理的自主性从清晰定义的运营范围开始。生命体只访问获准上下文，准备可供决策的工作，并让具有重要后果的行动始终受到明确权限控制。",
    "Request arrives": "请求到达",
    "A request enters the approved workflow.": "请求进入获准工作流。",
    "An email, form, message or system event becomes an approved work item.": "电子邮件、表单、消息或系统事件被转化为获准的工作事项。",
    "Operational context": "运营上下文",
    "Gather the information needed to act.": "收集执行所需的信息。",
    "The organism reads only permitted records, policies, availability, commitments and prior decisions.": "生命体只读取获准的记录、政策、可用性、承诺与历史决策。",
    "Decision preparation": "决策准备",
    "Prepare the response or transaction with evidence.": "准备回应或交易，并附上证据。",
    "Constraints, exceptions, costs, timing and supporting evidence are surfaced for review.": "将约束、例外、成本、时间与支持证据呈现出来供审核。",
    "Approve, reject or refine.": "批准、拒绝或进一步调整。",
    "No external commitment is made beyond the organism's explicitly granted authority.": "不会做出超出生命体明确授权范围的任何外部承诺。",
    "Later, if reliability is demonstrated": "之后，若可靠性得到证明",
    "Low-risk work inside approved policy, value and risk thresholds may move from preparation to bounded execution — without silently expanding authority over payments, contracts, people or other high-impact decisions.": "在获准政策、价值与风险阈值内的低风险工作，可以从“准备”阶段升级为“有限执行”——但不会在无声中扩大其对付款、合同、人员或其他高影响决策的权限。",
    "Internal validation first": "优先进行内部验证",
    "Auryveth will serve as the first operational proving ground.": "Auryveth 将作为首个运营验证场。",
    "Before external deployment, Auryveth intends to apply the same architecture to its own recurring operations. The system will be evaluated on real internal work, approval flows and operational memory before broader use is considered.": "在对外部署之前，Auryveth 计划先将同一架构应用于自身的重复性运营。系统将在真实内部工作、审批流程与运营记忆中接受评估，然后才会考虑更广泛的使用。",
    "Observe Auryveth": "观察 Auryveth",
    "Map work, decisions, documents and recurring obligations.": "梳理工作、决策、文件与重复性职责。",
    "Stage 01": "阶段 01",
    "Prepare real work": "准备真实工作",
    "Create decision-ready drafts while humans remain in control.": "在保持人类控制的前提下生成可供决策的草稿。",
    "Stage 02": "阶段 02",
    "Measure reliability": "衡量可靠性",
    "Track overrides, errors, cycle time and evidence quality.": "追踪人工改写、错误、周期时间与证据质量。",
    "Stage 03": "阶段 03",
    "Earn narrow autonomy": "赢得有限自主权",
    "Only low-risk classes of work advance beyond approval gates.": "只有低风险工作类别才能越过审批门槛。",
    "Stage 04": "阶段 04",
    "Earned autonomy": "经验证获得的自主权",
    "Capability can evolve. Authority must evolve deliberately.": "能力可以进化，权限必须审慎演进。",
    "An organism may learn faster, reason better or develop new skills without automatically receiving more power over money, systems, customers or suppliers.": "生命体可以学习得更快、推理得更好或发展新技能，但不会因此自动获得对资金、系统、客户或供应商的更多权力。",
    "Read the governing principles": "阅读治理原则",
    "Read-only context and evidence gathering.": "只读上下文与证据收集。",
    "Human control": "人类控制",
    "Recommend": "建议",
    "Proposes actions; humans decide.": "提出行动建议；由人类决定。",
    "Creates ready-to-execute work.": "创建可执行的工作内容。",
    "Approval required": "需要审批",
    "Execute with approval": "经批准后执行",
    "Acts after explicit authorization.": "在明确授权后执行。",
    "Bounded": "有限授权",
    "Bounded autonomy": "有限自主",
    "Executes pre-approved classes of work.": "执行预先批准的工作类别。",
    "Earned": "经验证获得",
    "Long-term ecosystem": "长期生态系统",
    "Independent companies. Coordinating organisms.": "独立公司，协作生命体。",
    "The network should exchange authorized capabilities, requests and commitments—not silently merge confidential company knowledge.": "网络应交换获授权的能力、请求与承诺，而不是在无声中合并各公司的机密知识。",
    "Authorized network": "授权网络",
    "Organism-to-organism coordination": "生命体之间的协作",
    "Organization A": "组织 A",
    "Needs, commitments and approved requests": "需求、承诺与获准请求",
    "Organization B": "组织 B",
    "Capabilities, availability and agreed terms": "能力、可用性与已商定条款",
    "Service Partner": "服务合作伙伴",
    "Authorized fulfillment, delivery or specialist work": "获授权的履约、交付或专业工作",
    "Customer / User": "客户 / 用户",
    "Intent, approval and permitted preferences": "意图、批准与获准偏好",
    "Commercial approach": "商业模式",
    "Start narrow. Measure value. Expand when earned.": "从小范围开始。衡量价值。以证据支持扩展。",
    "The initial model separates implementation from the recurring platform relationship, while scope and authority can grow with evidence instead of a one-size-fits-all package.": "初始模式将实施工作与持续的平台关系分开；范围与权限可根据证据逐步增长，而不是采用一刀切的方案。",
    "Founding partner pilots": "创始合作伙伴试点",
    "Work with a small number of companies on bounded workflows with measurable operational outcomes.": "与少量公司合作，在有边界的工作流中验证可衡量的运营结果。",
    "Implementation + platform": "实施 + 平台",
    "Separate integration work from the ongoing runtime, governance, support and capability relationship.": "将集成工作与持续运行、治理、支持及能力服务关系分开。",
    "Evidence before scale": "先有证据，再扩大规模",
    "Expand only after the system demonstrates useful reductions in time, errors, coordination cost or other agreed metrics.": "只有当系统证明能够有效降低时间、错误、协作成本或其他约定指标后，才扩大范围。",
    "Leadership & accountability": "领导与问责",
    "Accountability begins with clear ownership.": "问责始于明确的责任归属。",
    "AURYVETH is founded by": "AURYVETH 由",
    ". The company is being built around evidence-first capability development, explicit authority boundaries and a long-term commitment to institutional memory.": "创立。公司围绕“证据优先”的能力发展、明确的权限边界，以及对组织记忆的长期承诺而建设。",
    "About AURYVETH →": "关于 AURYVETH →",
    "Founding governance": "创立治理",
    "Governance established before scale.": "在规模扩大之前建立治理。",
    "Auryveth's Founder Constitution records the principles governing autonomy, accountability, organizational sovereignty, evidence standards and institutional direction.": "Auryveth 的《创始人宪章》记录了有关自主性、问责、组织主权、证据标准与组织长期方向的原则。",
    "Read the constitution": "阅读宪章",
    "Open PDF": "打开 PDF",
    "Investors & strategic partners": "投资者与战略合作伙伴",
    "Operational value today. Governed network potential over time.": "今天创造运营价值，未来释放受治理网络的潜力。",
    "The strategy is to establish measurable operational value in early deployments while the underlying organism architecture develops into a governed coordination platform.": "策略是在早期部署中建立可衡量的运营价值，同时让底层生命体架构逐步发展为受治理的协作平台。",
    "Prove": "验证",
    "Internal Auryveth operation and bounded SME workflow pilots.": "Auryveth 内部运营与有边界的中小企业工作流试点。",
    "Platform": "平台",
    "Reusable governance, memory, integration and organism capability layers.": "可复用的治理、记忆、集成与生命体能力层。",
    "Network": "网络",
    "Authorized organism-to-organism coordination across independent organizations.": "在独立组织之间进行获授权的生命体协作。",
    "Investor overview →": "投资者概览 →",

    /* Investors */
    "Investors & Strategic Partners": "投资者与战略合作伙伴",
    "A commercial entry point into a broader governed autonomous ecosystem.": "通往更广泛受治理自主生态系统的商业入口。",
    "Auryveth's thesis is to begin with a concrete operational problem—business workflow autonomy—and use real deployments to build the architecture, evidence and recurring revenue base required for broader organism-to-organism coordination.": "Auryveth 的核心思路是从一个具体运营问题——商业工作流自主化——开始，通过真实部署逐步建立架构、证据与持续收入基础，为更广泛的生命体之间协作做好准备。",
    "Early stage": "早期阶段",
    "Deep-tech + enterprise automation": "深科技 + 企业自动化",
    "Milestone-driven capital strategy": "里程碑驱动的资本策略",
    "Investment thesis": "投资逻辑",
    "Near-term value from business operations. Long-term leverage from persistent digital organisms.": "短期从商业运营创造价值，长期从持续型数字生命体获得杠杆效应。",
    "The commercial system is intended to create measurable value before the broader ecosystem is complete, allowing customer evidence and revenue to support deeper research while reducing dependence on external capital.": "商业系统的目标是在更广泛生态系统完成之前就创造可衡量价值，让客户证据与收入支持更深入的研究，同时降低对外部资本的依赖。",
    "Why this structure": "为何采用这种结构",
    "Three layers of compounding value.": "三层复合价值。",
    "The company can grow from implementation revenue to platform revenue to network value, while the underlying organism architecture becomes increasingly capable.": "随着底层生命体架构能力不断增强，公司可以从实施收入发展到平台收入，再进一步形成网络价值。",
    "1. Deployment": "1. 部署",
    "Integrate bounded organisms into real business workflows and prove measurable operational value.": "将有边界的生命体集成到真实商业工作流中，并证明可衡量的运营价值。",
    "2. Platform": "2. 平台",
    "Reuse governance, connectors, memory, orchestration and organism capabilities across customers instead of rebuilding every deployment.": "在不同客户之间复用治理、连接器、记忆、编排与生命体能力，而不是每次部署都从头重建。",
    "3. Network": "3. 网络",
    "Enable authorized inter-company coordination where each additional participant can increase useful connectivity without surrendering organizational control.": "实现获授权的跨公司协作，使每个新增参与者都能增加有用连接，同时无需放弃组织控制权。",
    "Business model direction": "商业模式方向",
    "Implementation + recurring platform + capability usage.": "实施服务 + 持续平台服务 + 能力使用。",
    "Public pricing has not yet been standardized. Early pilots are intended to establish the real integration, support, compute and risk costs required for a sustainable pricing model.": "公开定价尚未标准化。早期试点旨在确定构建可持续定价模型所需的真实集成、支持、计算与风险成本。",
    "Implementation": "实施",
    "Workflow mapping, system integration, permissions, data boundaries, testing and deployment.": "工作流梳理、系统集成、权限、数据边界、测试与部署。",
    "Platform subscription": "平台订阅",
    "Runtime, governance, updates, monitoring, memory, audit and ongoing capabilities.": "运行环境、治理、更新、监控、记忆、审计与持续能力。",
    "Capability / usage tier": "能力 / 使用层级",
    "Pricing can reflect operational volume, connected systems and authorized autonomy scope.": "定价可根据运营量、连接系统数量与获授权自主范围进行调整。",
    "Network services": "网络服务",
    "Future organism-to-organism coordination may support transaction, marketplace or network economics where appropriate.": "未来的生命体之间协作，在适合的情况下可能支持交易、市场平台或网络经济模式。",
    "Capital philosophy": "资本理念",
    "Raise against the next uncertainty-reducing milestone.": "围绕下一个能够降低不确定性的里程碑融资。",
    "Auryveth's constitution and operating principles favor disciplined capital allocation and evidence-backed growth.": "Auryveth 的宪章与运营原则强调有纪律的资本配置和以证据支撑的增长。",
    "Fund proof": "为验证提供资金",
    "Use capital to produce technical and commercial evidence that materially changes what the company can credibly claim.": "利用资本产生技术与商业证据，从实质上提升公司能够可信声明的能力范围。",
    "Protect runway": "保护现金跑道",
    "Keep operating costs low enough that the company can survive research delays and customer-learning cycles.": "将运营成本控制在足以让公司承受研究延迟与客户学习周期的水平。",
    "Protect mission": "保护使命",
    "Prioritize investors and partners aligned with the long-term deep-tech direction and evidence-based development strategy.": "优先选择认同长期深科技方向与证据驱动发展策略的投资者和合作伙伴。",
    "What investors should expect": "投资者应期待什么",
    "Clear separation between current capability and future ambition.": "明确区分当前能力与未来愿景。",
    "Investor materials should show what has been demonstrated, what is being built, what remains hypothetical, and what each funding milestone is intended to prove.": "投资材料应清楚展示哪些能力已经被证明、哪些正在构建、哪些仍属于假设，以及每个融资里程碑希望验证什么。",
    "Investor information channel": "投资者信息渠道",
    "A dedicated investor contact channel is being established. Governance and company principles remain available for review in the meantime.": "专门的投资者联系渠道正在建立中。在此期间，治理原则与公司原则仍可公开查阅。",
    "Review governance": "查看治理原则",
    "Founder of AURYVETH · Building the first business-organism platform and AURYVETH's internal proving ground.": "AURYVETH 创始人 · 正在构建首个商业生命体平台与 AURYVETH 内部验证场。",
    "Founder & company →": "创始人与公司 →",

    /* Knowledge: authority levels */
    "AURYVETH Knowledge / Governance model": "AURYVETH 知识 / 治理模型",
    "How could a business organism earn operational authority?": "商业生命体如何逐步获得运营权限？",
    "At AURYVETH, growing capability does not automatically grant a digital organism permission to act. The planned progression separates observing, recommending, preparing, approved execution and bounded autonomy. Advancement requires explicit authorization and evidence appropriate to the action’s risk.": "在 AURYVETH，能力增长不会自动赋予数字生命体行动权限。规划中的进阶路径将观察、建议、准备、经批准执行与有限自主明确分开。每一次权限提升都需要明确授权，并提供与行动风险相匹配的证据。",
    "Proposed operating model": "拟议运营模型",
    "Five authority levels, each with a different boundary.": "五个权限等级，每一级都有不同边界。",
    "L0 — Observe": "L0 — 观察",
    "Read only approved context. Identify open work and uncertainty without modifying business records or making commitments.": "只读取获准上下文。在不修改业务记录、不作出承诺的情况下识别未完成工作与不确定性。",
    "L1 — Recommend": "L1 — 建议",
    "Present findings, options and rationale. A human decides what happens next.": "呈现发现、选项与理由，由人类决定下一步。",
    "L2 — Prepare": "L2 — 准备",
    "Create reviewable drafts or transaction proposals. Execution remains blocked until someone with authority approves.": "创建可审核的草稿或交易提案。在有权限的人批准之前，执行始终被阻止。",
    "L3 — Execute with approval": "L3 — 经批准后执行",
    "Perform a specific approved action within declared scope, preserving who authorized it and what changed.": "在声明范围内执行具体且已批准的行动，并保留授权者与变更内容的记录。",
    "L4 — Bounded autonomy": "L4 — 有限自主",
    "Execute an explicitly approved class of low-risk actions within policy, limits and monitoring. Out-of-bounds cases return to review.": "在政策、限制与监控范围内执行明确获批的一类低风险行动。超出边界的情况必须返回审核。",
    "No automatic promotion": "不会自动升级",
    "A new skill or better model performance is not itself an access grant. Authority can also be reduced, paused or revoked.": "新技能或更好的模型表现本身并不构成权限授予。权限也可以被降低、暂停或撤销。",
    "Not a certification:": "并非认证标准：",
    "L0–L4 are AURYVETH’s proposed design labels, not an externally recognized standard or proof of current product maturity.": "L0–L4 是 AURYVETH 提出的设计标签，并非外部认可的标准，也不是当前产品成熟度的证明。",
    "What must be evaluated before changing a permission?": "变更权限前必须评估什么？",
    "For each action class, AURYVETH intends to identify permitted systems and data, who grants approval, failure consequences, audit requirements, rollback or recovery options and escalation paths.": "对于每一类行动，AURYVETH 计划明确允许访问的系统与数据、批准者、失败后果、审计要求、回滚或恢复方案以及升级处理路径。",
    "Reliability evidence should come from work comparable to the proposed scope. A persuasive demonstration, unrelated benchmark or successful draft alone is not enough.": "可靠性证据应来自与拟议范围相当的工作。仅凭有说服力的演示、无关基准测试或一次成功草稿并不足够。",
    "Where authority must stop": "权限必须止于何处",
    "Money movement, contracts, access-control changes, disclosure of confidential information and external commitments require their own explicit boundaries. The organism cannot infer permission from a related successful task.": "资金流动、合同、访问控制变更、机密信息披露以及外部承诺，都必须拥有各自明确的边界。生命体不能因为完成了相关任务就自行推断拥有权限。",
    "Inter-company coordination requires both parties’ authorization; joining a network does not merge companies’ internal knowledge or permissions.": "跨公司协作需要双方授权；加入网络并不意味着合并各公司的内部知识或权限。",
    "What does this mean in practice?": "在实践中这意味着什么？",
    "An organism might prepare a response to a request, show the underlying information and wait for approval. Later, after a defined review of accuracy and operational risk, an organization could approve a narrow recurring action. Exceptions and higher-impact decisions would remain gated.": "生命体可以先准备对请求的回应，展示其依据的信息并等待批准。之后，在完成对准确性与运营风险的明确评审后，组织可以批准某个范围狭窄的重复性行动。例外情况与高影响决策仍保持门控。",
    "This describes the intended governance framework, not a claim that AURYVETH has operationally validated all levels. Read the": "这里描述的是预期治理框架，并不表示 AURYVETH 已在运营中验证所有等级。请阅读",
    ", the": "，以及",
    "definition of governed autonomy": "受治理自主性的定义",
    ", and the": "，以及",
    "internal proving-ground plan": "内部验证场计划",

    /* Knowledge: business organism */
    "AURYVETH Knowledge / Definition": "AURYVETH 知识 / 定义",
    "What is a business organism?": "什么是商业生命体？",
    "AURYVETH uses": "AURYVETH 使用",
    "business organism": "商业生命体",
    "to describe a persistent digital system designed to understand an organization's approved operational context, prepare and coordinate work, retain continuity, and earn carefully bounded autonomy through demonstrated reliability.": "这一术语来描述一种持续型数字系统：它被设计用于理解组织获准的运营上下文、准备与协调工作、保持连续性，并通过已证明的可靠性逐步获得严格受限的自主权。",
    "Core distinction": "核心区别",
    "Persistent context rather than an isolated response.": "持续上下文，而不是孤立回应。",
    "The intended system follows open work, decisions, constraints, and outcomes across approved business tools. It starts by observing and preparing decision-ready work, rather than assuming authority to operate the company.": "预期系统会跨获准的商业工具持续跟踪未完成工作、决策、约束与结果。它从观察并准备可供决策的工作开始，而不是默认自己拥有运营公司的权限。",
    "Scope": "范围",
    "Useful before autonomous.": "先产生价值，再谈自主。",
    "Organism is AURYVETH's design term. It does not mean biological life or establish that today's prototype has achieved autonomous cognition. Early work remains human-governed and evidence-gated.": "“生命体”是 AURYVETH 的设计术语，并不意味着生物生命，也不代表当前原型已经实现自主认知。早期工作仍由人类治理，并以证据作为进阶门槛。",
    "Explore further": "进一步了解",
    "See": "请参阅",
    "roadmap": "路线图",
    "for the intended operating model.": "以了解预期运营模型。",
    "How is this different from an agent or workflow?": "这与智能体或工作流有何不同？",
    "Task automation and agents can be components of an organism, but AURYVETH’s intended distinction is a continuing operational relationship: keeping approved records of unresolved work, constraints, decisions and outcomes across cycles. “Organism” is an architectural term, not a biological or scientific status claim.": "任务自动化与智能体可以成为生命体的组成部分，但 AURYVETH 所强调的区别是一种持续运营关系：跨周期保留获准的未完成工作、约束、决策与结果记录。“生命体”是架构术语，并非生物或科学地位的声明。",
    "A useful organism must know when to seek clarification, preserve evidence of changes, and recover from interrupted work. It should not infer permission merely because it has learned to perform a task. The": "一个有用的生命体必须知道何时需要澄清、保留变更证据，并能从中断的工作中恢复。它不能仅因为学会了执行某项任务，就自行推断拥有权限。请参阅",
    "organism-versus-agent explanation": "生命体与智能体的比较说明",
    "and": "以及",
    "authority levels": "权限等级",
    "elaborate those boundaries.": "以进一步了解这些边界。",
    "The proposed first proving ground is": "拟议中的首个验证场是",
    "AURYVETH's own recurring work": "AURYVETH 自身的重复性工作",
    ". Publication of real outcomes belongs in the": "。真实结果的发布应归入",
    "research section": "研究部分",
    ", separately from design intent.": "，并与设计意图明确区分。",

    /* Knowledge: digital organism */
    "AURYVETH Knowledge / Core concept": "AURYVETH 知识 / 核心概念",
    "What is a digital organism?": "什么是数字生命体？",
    "digital organism": "数字生命体",
    "to describe a persistent digital life system designed to build, learn and evolve as experience accumulates. The goal is continuity over time: useful capability should develop from prior experience instead of restarting as an isolated task every time.": "这一术语来描述一种会随着经验积累而构建、学习与进化的持续型数字生命系统。目标是在时间维度上保持连续性：有用能力应从过去经验中发展，而不是每次都以孤立任务重新开始。",
    "This is AURYVETH's design language. It is not a claim that the system is biological life, conscious, sentient, or already a proven general autonomous intelligence.": "这是 AURYVETH 的设计语言，并不表示该系统是生物生命、具有意识或感知，也不意味着它已经是经过证明的通用自主智能。",
    "Build · learn · evolve": "构建 · 学习 · 进化",
    "Persistence matters because experience should change what comes next.": "持续性很重要，因为经验应当改变下一步会发生什么。",
    "A digital organism is intended to carry forward approved state, outcomes and developed capability while remaining inside explicit governance boundaries.": "数字生命体应当延续获准状态、结果与已发展能力，同时始终处于明确治理边界之内。",
    "Build": "构建",
    "Create durable internal structures, representations, work products or specialized capabilities that remain useful beyond one interaction.": "创建持久的内部结构、表征、工作成果或专门能力，使其价值超越单次交互。",
    "Learn": "学习",
    "Compare expectations with outcomes, retain useful evidence, and improve future behavior from accumulated experience rather than from a single prompt alone.": "比较预期与结果，保留有用证据，并从累积经验中改进未来行为，而不是只依赖单次提示。",
    "Evolve": "进化",
    "Develop better strategies, organization or specialization over time while preserving identity, recoverability and externally imposed authority limits.": "随着时间发展出更好的策略、组织方式或专业化能力，同时保持身份连续性、可恢复性与外部设定的权限限制。",
    "From organism to business organism": "从数字生命体到商业生命体",
    "The business organism is an applied specialization, not the whole mission.": "商业生命体是一种应用型专精，而不是全部使命。",
    "AURYVETH's broader research concerns persistent digital life. The first commercial proving ground applies that idea to bounded organizational work.": "AURYVETH 更广泛的研究关注持续型数字生命。首个商业验证场将这一理念应用于有边界的组织工作。",
    "The broad category: persistent digital life intended to build, learn and evolve as time and experience accumulate.": "广义类别：随着时间与经验累积而构建、学习与进化的持续型数字生命。",
    "A digital organism specialized for approved business context, operational continuity, recurring responsibilities and measurable outcomes.": "针对获准商业上下文、运营连续性、重复性责任与可衡量结果进行专精的数字生命体。",
    "The authority model around external action. Better capability does not grant additional permission unless that authority is separately approved.": "围绕外部行动建立的权限模型。能力变强并不会获得额外权限，除非该权限被单独批准。",
    "Continuity without uncontrolled power": "保持连续性，而不产生失控权力",
    "Learning and evolution are internal capabilities. Authority is an external grant.": "学习与进化属于内部能力，权限则来自外部授权。",
    "A digital organism may become more capable through accumulated experience while still remaining unable to spend money, change access, make commitments, disclose protected information or take other consequential actions unless those permissions are explicitly granted.": "数字生命体可以通过累积经验变得更有能力，但除非获得明确权限，否则仍不能花费资金、修改访问权限、作出承诺、披露受保护信息或执行其他具有重要后果的行动。",
    "What the term does not claim": "该术语并不表示什么",
    "A research direction should not be confused with evidence already demonstrated.": "研究方向不应与已经得到证明的证据混为一谈。",
    "AURYVETH separates its intended architecture from claims that require experimental or operational proof.": "AURYVETH 明确区分预期架构与需要实验或运营证据支持的能力声明。",
    "Not a biology claim": "不是生物学声明",
    "“Organism” describes persistence, development and coordinated function in AURYVETH's architecture. It does not establish biological status.": "“生命体”用于描述 AURYVETH 架构中的持续性、发展与协调功能，并不确立任何生物学地位。",
    "Not automatic autonomy": "不会自动获得自主权",
    "Self-improvement, learning or specialization does not authorize broader real-world action.": "自我改进、学习或专业化不会授权更广泛的现实世界行动。",
    "Not proof of maturity": "不是成熟度证明",
    "The definition describes the system AURYVETH is working toward. Individual capabilities still require reproducible evidence and operational validation.": "该定义描述的是 AURYVETH 正在努力实现的系统。各项具体能力仍需要可重复证据与运营验证。",
    "Explore the research direction →": "探索研究方向 →",
    "See the business specialization": "查看商业专精方向",

    /* Knowledge: governed autonomy */
    "What is governed autonomy?": "什么是受治理的自主性？",
    "Governed autonomy is AURYVETH's approach to allowing a digital organism to develop new capabilities while keeping consequential permissions explicit, bounded, observable, and separately granted by authorized people.": "受治理的自主性是 AURYVETH 的方法：允许数字生命体发展新能力，同时确保具有重要后果的权限始终明确、有边界、可观察，并由获授权人员单独授予。",
    "The distinction": "核心区别",
    "Capability growth is not authority growth.": "能力增长不等于权限增长。",
    "Better reasoning, broader context or improved task preparation does not grant permission to spend money, change access, sign commitments or interact with external parties beyond approved limits.": "更好的推理、更广的上下文或更完善的任务准备，并不会授予花费资金、修改访问权限、签署承诺或超出批准范围与外部主体互动的权限。",
    "How progression works": "如何逐步提升",
    "Observation, preparation, then measured execution.": "先观察、再准备，之后才是经过衡量的执行。",
    "An organism begins with constrained access and human review. Categories of low-risk action may advance only after defined boundaries, auditability and reliability evidence support a deliberate permission change.": "生命体从受限访问与人工审核开始。只有在明确边界、可审计性与可靠性证据支持审慎权限变更后，部分低风险行动类别才可能升级。",
    "Original governing document": "原始治理文件",
    "Read the": "阅读",
    "official PDF": "官方 PDF",
    "for AURYVETH's published principles.": "以查看 AURYVETH 已发布的治理原则。",
    "Permissions should be reviewed by action, not by a generic intelligence score.": "权限应按具体行动审核，而不是依据笼统的智能评分。",
    "An organism could prepare a business record accurately yet still lack approval to submit it, communicate externally, spend funds or change access controls. Each action class requires its own scope, accountable approver, audit trail and path for exceptions.": "生命体即使能够准确准备业务记录，也仍可能没有权限提交记录、对外沟通、使用资金或修改访问控制。每一类行动都需要自己的范围、责任审批者、审计轨迹与例外处理路径。",
    "See AURYVETH’s proposed": "查看 AURYVETH 提出的",
    "L0–L4 authority model": "L0–L4 权限模型",
    "internal testing plan": "内部测试计划",
    ". These pages describe intended operation rather than completed certification.": "。这些页面描述的是预期运行方式，而不是已完成的认证。",

    /* Knowledge index */
    "AURYVETH Knowledge / First-party explanations": "AURYVETH 知识 / 官方说明",
    "Understand the system before evaluating its autonomy.": "在评估自主性之前，先理解系统。",
    "AURYVETH's definitions and proposed operating model, written for readers evaluating the company. These pages distinguish current direction, planned validation and documented founding principles. They do not claim a deployed general autonomous product.": "以下内容面向正在评估公司的读者，说明 AURYVETH 的定义与拟议运营模型。这些页面明确区分当前方向、计划中的验证以及已有记录的创立原则，并不声称已经部署通用自主产品。",
    "Start with the definitions": "从定义开始",
    "What the terms mean in AURYVETH’s work.": "这些术语在 AURYVETH 工作中的含义。",
    "Each explanation links to related concepts and the original governance record.": "每项说明都会链接到相关概念与原始治理记录。",
    "Core definition": "核心定义",
    "The broader persistent digital-life concept: build, learn and evolve as experience accumulates under explicit governance.": "更广泛的持续型数字生命概念：在明确治理下，随着经验累积而构建、学习与进化。",
    "Definition": "定义",
    "The proposed persistent entity, approved business context and continuity across operational cycles.": "拟议中的持续型实体、获准商业上下文，以及跨运营周期的连续性。",
    "Capabilities may improve; authority remains explicit, bounded and separately granted.": "能力可以提升；权限仍保持明确、有边界并单独授予。",
    "Architecture": "架构",
    "Business organism vs. AI agent": "商业生命体与 AI 智能体的区别",
    "Why AURYVETH is designing a continuing operational system rather than defining it as an isolated task agent.": "为什么 AURYVETH 要设计持续运营系统，而不是把它定义为孤立的任务智能体。",
    "Read the comparison →": "阅读比较 →",
    "Governance": "治理",
    "How authority can be earned": "权限如何通过验证逐步获得",
    "The proposed L0–L4 levels and evidence required before a permission change.": "拟议的 L0–L4 等级，以及权限变更前所需的证据。",
    "Read the model →": "阅读模型 →",
    "Validation plan": "验证计划",
    "Why test internally first?": "为什么先在内部测试？",
    "Use the architecture at AURYVETH, measure corrections and failures, and only then consider broader scopes.": "先在 AURYVETH 内部使用该架构，衡量修正与失败，然后才考虑更广泛的范围。",
    "Read the plan →": "阅读计划 →",
    "Original source": "原始来源",
    "Founder Constitution v0.1": "创始人宪章 v0.1",
    "The public governance summary and versioned PDF. The PDF is the archival source for the founding principles.": "公开治理摘要与带版本号的 PDF。PDF 是创立原则的正式归档来源。",
    "Read the founding record →": "阅读创立记录 →",

    /* Knowledge: internal proving ground */
    "AURYVETH Knowledge / Planned validation": "AURYVETH 知识 / 计划中的验证",
    "Why AURYVETH intends to test its organisms inside AURYVETH first.": "为什么 AURYVETH 打算先在公司内部测试自己的生命体。",
    "Before asking another organization to rely on a business organism, AURYVETH plans to use the architecture for its own recurring work. Internal operation offers a way to observe failures, improve recovery and measure usefulness while keeping external customer risk out of the initial proving ground.": "在要求其他组织依赖商业生命体之前，AURYVETH 计划先将该架构用于自身重复性工作。内部运营可以在避免让外部客户承担初期验证风险的同时，观察失败、改进恢复能力并衡量实用性。",
    "Proposed sequence": "拟议流程",
    "Prove a narrow operational loop before widening the scope.": "先验证一个范围狭窄的运营闭环，再扩大范围。",
    "1. Map and observe": "1. 梳理与观察",
    "Document a real recurring task, its required information, decision owner, exceptions and existing manual process. Establish a baseline and limit data access to what is authorized.": "记录一个真实的重复性任务，包括所需信息、决策负责人、例外情况与现有人工流程。建立基准，并把数据访问限制在已授权范围内。",
    "2. Prepare work": "2. 准备工作",
    "Have the organism produce a reviewable draft or recommendation. Keep consequential execution under human control and record corrections.": "让生命体生成可审核的草稿或建议。具有重要后果的执行保持在人类控制下，并记录所有修正。",
    "3. Compare outcomes": "3. 比较结果",
    "Measure accepted and corrected work, missed exceptions, time, recovery and evidence quality against the baseline. Record failure cases as well as successes.": "依据基准衡量被接受与被修正的工作、遗漏的例外、耗时、恢复能力与证据质量，并同时记录失败案例与成功案例。",
    "4. Consider narrow authority": "4. 考虑有限权限",
    "Review whether a defined low-risk action can be approved within explicit policy and monitoring. Retain an escalation path and the ability to revoke authorization.": "评审某个已定义的低风险行动是否可以在明确政策与监控范围内获得批准，同时保留升级处理路径与撤销授权的能力。",
    "What evidence is required?": "需要哪些证据？",
    "Versioned task definitions, environment and test conditions, operator corrections, exception rates, outcome records and documented limitations. A useful experiment should also say what would count against the hypothesis.": "需要带版本的任务定义、环境与测试条件、操作人员修正、例外率、结果记录以及已记录的限制。一个有价值的实验还应明确什么结果会反驳该假设。",
    "A single polished demonstration is not a substitute for repeatable evidence over relevant work cycles.": "一次精心制作的演示不能替代在相关工作周期中获得的可重复证据。",
    "Current evidence boundary": "当前证据边界",
    "This page does not report completed deployment, customer adoption, autonomous revenue or performance results. The sequence is a planned evaluation method. Research results will be published separately when recorded and supportable.": "本页面并未报告已完成部署、客户采用、自主收入或性能结果。这里描述的是计划中的评估方法。研究结果会在完成记录且有足够证据支持后另行发布。",
    "AURYVETH intends to keep proposed architecture, experimental findings and production capability visibly distinct.": "AURYVETH 将持续明确区分拟议架构、实验发现与生产能力。",
    "Why begin with internal validation?": "为什么从内部验证开始？",
    "It places organizational memory, approval flow and recovery under direct observation. A system that cannot reliably support AURYVETH’s own approved work should not be marketed as a proven autonomous operating system for others.": "这样可以直接观察组织记忆、审批流程与恢复能力。一个无法可靠支持 AURYVETH 自身获准工作的系统，不应被宣传为已经证明能够为他人提供自主运营的系统。",
    "For the technical context, read": "如需了解技术背景，请阅读",
    "the authority model": "权限模型",
    "research direction": "研究方向",

    /* Knowledge: organism vs agent */
    "AURYVETH Knowledge / Architecture": "AURYVETH 知识 / 架构",
    "Business organism vs. AI agent: what is the difference?": "商业生命体与 AI 智能体：两者有何不同？",
    "An AI agent commonly describes a system that acts toward a task or goal using tools.": "AI 智能体通常指使用工具、围绕某项任务或目标采取行动的系统。",
    "is AURYVETH’s name for a proposed persistent digital operating entity that maintains approved context and continuity across work cycles, learns from outcomes, and operates only within explicitly granted authority.": "是 AURYVETH 对一种拟议持续型数字运营实体的称呼。它跨工作周期保持获准上下文与连续性，从结果中学习，并且只在明确授予的权限范围内运行。",
    "These are descriptive design categories, not a claim that an organism is biological life or that AURYVETH has already demonstrated autonomous cognition.": "这些是描述性的设计类别，并不表示生命体属于生物生命，也不表示 AURYVETH 已经证明了自主认知。",
    "Persistent operational continuity beyond a single task.": "超越单一任务的持续运营连续性。",
    "The difference we are designing for concerns continuity, accountability and how authority changes—not which language model is used.": "我们所设计的差异关注连续性、问责以及权限如何变化，而不是使用哪一种语言模型。",
    "Typical task-oriented agent": "典型任务导向智能体",
    "A system receives a defined objective, retrieves context, uses permitted tools and reports a result. Its memory or tools may persist, depending on the implementation; “agent” alone does not imply statelessness.": "系统接收明确目标、检索上下文、使用获准工具并报告结果。其记忆或工具是否持续存在取决于具体实现；“智能体”一词本身并不意味着无状态。",
    "Agents can be useful parts of a wider system. AURYVETH does not use the term organism as a claim that all agents lack memory or governance.": "智能体可以成为更大系统中有用的一部分。AURYVETH 使用“生命体”一词，并不是在声称所有智能体都缺乏记忆或治理。",
    "AURYVETH’s intended organism": "AURYVETH 预期的生命体",
    "The proposed entity preserves authorized operational context, unresolved work, constraints, decisions and outcome history over time. It prepares work, develops relevant capabilities and supports continuing organizational responsibilities.": "拟议实体会长期保留获授权的运营上下文、未完成工作、约束、决策与结果历史。它准备工作、发展相关能力，并支持持续性的组织责任。",
    "Any real-world execution remains separately bounded by policy and human-granted authority, even if the internal system improves.": "即使内部系统持续改进，任何现实世界执行仍然必须由政策与人类授予的权限单独约束。",
    "Illustrative scenario, not a customer case study": "示意场景，并非客户案例研究",
    "Consider a request that remains unresolved over several days.": "设想一个持续数天仍未解决的请求。",
    "Day one: receive": "第一天：接收",
    "Record the request and which information and approvals are missing. Do not invent missing facts or assume external authority.": "记录请求以及缺失的信息与批准。不要虚构缺失事实，也不要假设拥有外部权限。",
    "Later: continue": "之后：继续",
    "Revisit the same work item with permitted updates, decisions and prior commitments instead of losing the operational context.": "在保留获准更新、决策与先前承诺的情况下继续处理同一工作事项，而不是丢失运营上下文。",
    "After resolution: learn": "解决后：学习",
    "Record what happened, compare it against expectations and propose improvements. Any expanded access must pass a separate approval process.": "记录发生了什么，将结果与预期比较并提出改进。任何扩大访问范围的操作都必须经过独立审批流程。",
    "Current status:": "当前状态：",
    "This is AURYVETH’s design direction. It is not evidence of a working generalized organism, production deployment, or measured performance.": "这是 AURYVETH 的设计方向，并不能证明已经存在可运行的通用生命体、生产部署或已测量的性能结果。",
    "How this relates to AURYVETH’s research": "这与 AURYVETH 研究有何关系",
    "Persistence creates engineering questions around memory accuracy, conflicting evidence, recovery, safe delegation, and learning from consequence. AURYVETH describes these as research and implementation problems, not completed capabilities.": "持续性会带来关于记忆准确性、证据冲突、恢复、安全委派以及从后果中学习等工程问题。AURYVETH 将这些视为研究与实现问题，而不是已完成的能力。",
    "Start with the": "可以先阅读",
    "business organism definition": "商业生命体定义",
    ", see": "，再查看",
    "governed autonomy": "受治理的自主性",
    ", then read the proposed": "，然后阅读拟议的",
    "authority progression": "权限进阶模型",

    /* Business organisms */
    "Autonomous operations, introduced one trusted capability at a time.": "从一项项可信能力开始，逐步引入自主运营。",
    "Auryveth's first commercial system is the business-organism specialization of its broader digital-organism research: a persistent operational system connected to approved business context, able to learn from outcomes over time, and governed by explicit authority boundaries.": "Auryveth 的首个商业系统，是其更广泛数字生命体研究中的商业生命体专精：一个连接到获准商业上下文、能够随着时间从结果中学习，并受到明确权限边界治理的持续运营系统。",
    "In development": "开发中",
    "SME-first": "优先面向中小企业",
    "Human-governed autonomy": "由人类治理的自主性",
    "Target architecture": "目标架构",
    "One operational layer across fragmented business tools.": "在碎片化商业工具之上建立统一运营层。",
    "Email, ERP, CRM, spreadsheets, inventory, quotations, purchasing and follow-ups should become context for one persistent operating system rather than isolated automation scripts.": "电子邮件、ERP、CRM、电子表格、库存、报价、采购与跟进，应成为同一个持续运营系统的上下文，而不是彼此孤立的自动化脚本。",
    "Shared operational context": "共享运营上下文",
    "Maintain a working model of approved customers, products, inventory, suppliers, workflows, exceptions and commitments.": "维护关于获准客户、产品、库存、供应商、工作流、例外与承诺的工作模型。",
    "Task continuity": "任务连续性",
    "Operational continuity is preserved across interactions and systems. The organism tracks open work, dependencies, approvals and outcomes over time.": "在不同交互与系统之间保持运营连续性。生命体会长期跟踪未完成工作、依赖关系、审批与结果。",
    "Governed execution": "受治理的执行",
    "Every class of action is constrained by permissions, thresholds, audit trails and explicit escalation paths.": "每一类行动都受到权限、阈值、审计轨迹与明确升级路径的约束。",
    "General operating loop": "通用运营循环",
    "From incoming work to governed execution.": "从工作进入到受治理执行。",
    "Illustrative cross-industry workflow. The exact records, systems and actions change by organization; the governance pattern remains the same. This is a design objective, not a claim that every step is currently deployed.": "跨行业工作流示例。具体记录、系统与行动会因组织而异，但治理模式保持一致。这是设计目标，并不表示每一步目前都已部署。",
    "Work arrives": "工作进入",
    "Recognize the request, responsible context, deadline and permitted information sources.": "识别请求、相关上下文、截止时间与获准信息来源。",
    "Gather approved records, policies, availability, dependencies and constraints needed to proceed.": "收集继续执行所需的获准记录、政策、可用性、依赖与约束。",
    "Request authority": "请求授权",
    "Present the proposed action, relevant exceptions and supporting evidence to an authorized person.": "向获授权人员呈现拟议行动、相关例外与支持证据。",
    "Execute & learn": "执行并学习",
    "Carry out the permitted action, track the outcome, update operational state, and use feedback to improve future decisions.": "执行获准行动、追踪结果、更新运营状态，并利用反馈改进未来决策。",
    "Authority architecture": "权限架构",
    "The organism does not grant itself permission.": "生命体不会自行授予权限。",
    "Capability growth and authority growth are separate. A new skill can be evaluated in shadow mode before a manager chooses whether that skill receives execution authority.": "能力增长与权限增长是分开的。新技能可以先在影子模式中评估，再由管理者决定是否授予该技能执行权限。",
    "Policy": "政策",
    "What actions are allowed?": "允许哪些行动？",
    "Declared": "已声明",
    "Threshold": "阈值",
    "When is approval required?": "何时需要批准？",
    "Evidence": "证据",
    "What supports this decision?": "什么证据支持该决策？",
    "Auditable": "可审计",
    "Escalation": "升级处理",
    "What happens when uncertain?": "出现不确定性时怎么办？",
    "Human": "人类",
    "Pilot scope": "试点范围",
    "Validate one operating loop before expanding operational scope.": "先验证一个运营闭环，再扩大运营范围。",
    "Initial pilots should focus on workflows with measurable volume, repeatable decisions, bounded risk and clear business ownership.": "初始试点应聚焦于工作量可衡量、决策可重复、风险有边界且业务责任明确的工作流。",
    "Suitable initial workflows": "适合的初始工作流",
    "Quotations, order follow-up, stock checks, purchasing preparation, customer updates, recurring reporting and task coordination.": "报价、订单跟进、库存检查、采购准备、客户更新、周期性报告与任务协调。",
    "Human review by default": "默认由人类审核",
    "High-impact financial, contractual, pricing or customer commitments remain approval-gated until sufficient evidence exists.": "在获得足够证据之前，高影响的财务、合同、定价或客户承诺始终需要审批。",
    "Measure before expanding": "扩展前先衡量",
    "Track time saved, cycle time, error rate, exceptions, human overrides and business outcome quality.": "追踪节省时间、周期时间、错误率、例外情况、人工干预以及业务结果质量。",
    "Explore a founding pilot →": "探索创始合作试点 →",
    "AURYVETH knowledge": "AURYVETH 知识",
    "Definitions and concepts.": "定义与概念。",
    "Explore clear explanations of the terms used across AURYVETH's public research and product direction.": "了解 AURYVETH 公开研究与产品方向中所使用术语的清晰说明。",
    "Read the definitions →": "阅读定义 →",
    "Understand the architecture and its limits.": "理解架构及其边界。",
    "explain the intended design. These are proposed principles, not a performance claim.": "说明了预期设计。这些是拟议原则，并非性能声明。",

    /* Pilot */
    "Founding Partner Pilot": "创始合作伙伴试点",
    "Start with one workflow worth proving.": "从一个值得验证的工作流开始。",
    "The founding pilot program is designed for businesses willing to work closely with Auryveth on a bounded operational workflow, measure outcomes honestly and expand only when the evidence justifies it.": "创始试点计划面向愿意与 Auryveth 紧密合作的企业：从一个有边界的运营工作流开始，诚实衡量结果，并且只有在证据充分时才扩大范围。",
    "Early access concept": "早期参与计划",
    "Scope before price": "先明确范围，再讨论价格",
    "Approval-gated by default": "默认需要审批",
    "Pilot criteria": "试点条件",
    "A strong first workflow has four properties.": "一个适合作为起点的工作流应具备四个特征。",
    "Workflow selection prioritizes measurable operational value, bounded risk and clear ownership.": "工作流选择优先考虑可衡量的运营价值、有边界的风险以及明确的责任归属。",
    "Frequent": "高频",
    "It happens often enough to produce learning and measurable evidence.": "发生频率足够高，能够产生学习机会与可衡量证据。",
    "The decisions and consequences have understandable limits.": "决策与后果具有可理解的边界。",
    "Measurable": "可衡量",
    "Time, errors, cycle time or outcome quality can be compared before and after.": "可以比较前后的耗时、错误、周期时间或结果质量。",
    "Owned": "责任明确",
    "A real business owner can define acceptable behavior and approve authority changes.": "真实的业务负责人能够定义可接受行为并批准权限变更。",
    "Illustrative pilot path": "试点路径示例",
    "Progressive authority model": "渐进式权限模型",
    "Stage 1": "阶段 1",
    "Map": "梳理",
    "Understand the workflow, systems, people, rules and failure modes.": "理解工作流、系统、人员、规则与失败模式。",
    "Stage 2": "阶段 2",
    "Shadow": "影子模式",
    "Generate recommendations without affecting production work.": "在不影响生产工作的情况下生成建议。",
    "Stage 3": "阶段 3",
    "Approval-gated": "审批门控",
    "Prepare actions that a human approves before execution.": "准备行动，并在执行前由人类批准。",
    "Stage 4": "阶段 4",
    "Only qualified low-risk actions move into pre-approved execution.": "只有符合条件的低风险行动才能进入预先批准的执行范围。",
    "Founding partner interest": "创始合作伙伴意向",
    "Online pilot enquiries are not currently enabled. Submission will be activated when Auryveth's official contact channel is available.": "目前尚未开放在线试点咨询。待 Auryveth 官方联系渠道启用后，将开放提交功能。",
    "Industry": "行业",
    "Workflow": "工作流",
    "Current systems": "当前系统",
    "Prepare pilot enquiry": "准备试点咨询",
    "Online submission is not currently enabled.": "目前尚未开放在线提交。",
    "Company name": "公司名称",
    "What repetitive operational workflow would you want to improve?": "您希望改进哪一种重复性运营工作流？",
    "ERP, CRM, email, spreadsheets, etc.": "ERP、CRM、电子邮件、电子表格等",
    "Online submission is not currently enabled. No form data was submitted.": "目前尚未开放在线提交。没有任何表单数据被发送。",

    /* Privacy */
    "Current website privacy approach.": "当前网站的隐私处理方式。",
    "The current Auryveth website does not include a live enquiry backend, advertising tracker or customer account system. This notice will be updated if analytics, forms, cookies or additional third-party services are introduced.": "当前 Auryveth 网站不包含在线咨询后端、广告追踪器或客户账户系统。如果未来引入分析工具、表单、Cookie 或其他第三方服务，本通知将随之更新。",
    "Current website data collection": "当前网站数据收集",
    "This static build does not intentionally collect form submissions or store visitor profiles. The pilot form is deliberately disabled until an official endpoint is configured.": "当前静态网站不会主动收集表单提交，也不会存储访客档案。试点表单在正式端点配置完成前会保持禁用。",
    "Hosting and technical logs": "托管与技术日志",
    "The hosting platform may process standard technical, security and access logs required to operate and protect the website. Any material changes to hosting or data handling will be reflected in this notice.": "托管平台可能会处理网站运行与安全防护所需的标准技术、安全与访问日志。任何重要的托管或数据处理变更都会在本通知中体现。",
    "Future analytics": "未来的分析工具",
    "If analytics are introduced, Auryveth should prefer privacy-respecting measurement and disclose what is collected, why it is collected and how long it is retained.": "如果未来引入分析工具，Auryveth 应优先采用尊重隐私的衡量方式，并公开说明收集什么、为何收集以及保留多久。",
    "Contact data": "联系数据",
    "When a contact channel is connected, Auryveth should publish a clear purpose for collecting enquiries and define access, retention and deletion procedures.": "当联系渠道启用后，Auryveth 应明确公开收集咨询信息的用途，并定义访问、保留与删除流程。",
    "Legal scope:": "法律范围：",
    "This notice describes the current website implementation and is not a substitute for jurisdiction-specific legal review as Auryveth's services and data practices expand.": "本通知描述当前网站实现方式。随着 Auryveth 的服务与数据实践扩展，本通知不能替代针对具体司法管辖区的法律审查。",

    /* Research */
    "Auryveth Research": "Auryveth 研究",
    "Research the organism beneath the automation.": "研究自动化背后的生命体。",
    "Auryveth's commercial direction depends on a broader digital-life question: how can a persistent digital organism build, learn and evolve from accumulated experience, maintain continuity, develop useful internal models, and become more capable without silently expanding its authority?": "Auryveth 的商业方向建立在一个更广泛的数字生命问题之上：一个持续型数字生命体如何从累积经验中构建、学习与进化，保持连续性，形成有用的内部模型，并在不无声扩大权限的前提下变得更有能力？",
    "Evidence-first": "证据优先",
    "Commercially connected, scientifically distinct": "与商业相连，与科学验证明确区分",
    "Persistent cognition": "持续认知",
    "Move beyond isolated request-response behavior toward systems with durable state, memory, unresolved goals and continuity across work cycles.": "超越孤立的请求—响应行为，发展具有持久状态、记忆、未解决目标以及跨工作周期连续性的系统。",
    "Learning from consequence": "从后果中学习",
    "Study mechanisms that compare predictions with outcomes and use those differences to improve future behavior.": "研究将预测与结果进行比较，并利用差异改进未来行为的机制。",
    "Specialization & coordination": "专业化与协作",
    "Explore whether multiple specialized organisms or neural regions can develop complementary roles and integrate into larger systems.": "探索多个专门生命体或神经区域是否能够发展互补角色并整合为更大的系统。",
    "Governed evolution": "受治理的进化",
    "Separate internal adaptation from external authority so improving capability does not automatically increase real-world power.": "将内部适应与外部权限分离，使能力提升不会自动增加现实世界权力。",
    "Evidence standard": "证据标准",
    "Claims should be supported by reproducible evidence.": "能力声明应由可重复证据支持。",
    "Auryveth's constitution makes evidence an operating requirement, not a marketing preference.": "Auryveth 的宪章把证据视为运营要求，而不是营销偏好。",
    "Hypothesis": "假设",
    "State what mechanism or behavior is expected and what would count against it.": "明确预期的机制或行为，以及什么结果会反驳它。",
    "Experiment": "实验",
    "Record setup, baselines, controls, metrics, seeds, environment and reproducibility conditions.": "记录实验设置、基准、对照、指标、随机种子、环境与可重复条件。",
    "Outcome": "结果",
    "Separate observed evidence from interpretation, limitations and future claims.": "将观察到的证据与解释、限制以及未来声明分开。",
    "Research / Commercial boundary": "研究 / 商业边界",
    "Research discovers capabilities. Products turn validated capabilities into dependable systems.": "研究发现能力，产品则把经过验证的能力转化为可靠系统。",
    "A customer deadline can influence what Auryveth prioritizes, but it should never change experimental results or justify claiming a capability that has not been demonstrated.": "客户期限可以影响 Auryveth 的优先事项，但绝不能改变实验结果，也不能成为声称尚未证明能力的理由。",
    "Publication standard:": "发布标准：",
    "This page describes Auryveth's research direction. Papers, benchmarks and reproducible findings are published only when they are ready for external review.": "本页面描述 Auryveth 的研究方向。论文、基准测试与可重复研究结果只有在准备好接受外部审查时才会发布。",
    "Research questions and operating definitions": "研究问题与运营定义",
    "digital organism definition": "数字生命体定义",
    ". AURYVETH distinguishes these design commitments from experimental outcomes, which require their own reproducible records.": "。AURYVETH 将这些设计承诺与实验结果明确区分；实验结果必须拥有独立、可重复的记录。",

    /* Roadmap */
    "From one reliable business organism to a governed autonomous ecosystem.": "从一个可靠的商业生命体，发展到受治理的自主生态系统。",
    "The roadmap is capability-gated rather than date-driven. Later phases depend on evidence that earlier phases are reliable, economically useful and controllable.": "路线图以能力验证为门槛，而不是由日期驱动。后续阶段必须建立在前一阶段已被证明可靠、具有经济价值且可控的证据之上。",
    "Milestone-driven timing": "里程碑驱动的进度",
    "Evidence-gated progression": "以证据为门槛的推进",
    "Commercial + research milestones": "商业 + 研究里程碑",
    "Foundation / now": "基础阶段 / 当前",
    "Auryveth internal organism proving ground": "Auryveth 内部生命体验证场",
    "Establish the company, governance and organism architecture, then use Auryveth itself as the first operating environment. The organism should observe, prepare and increasingly handle bounded internal work before Auryveth asks customers to trust it.": "先建立公司、治理机制与生命体架构，再将 Auryveth 自身作为首个运营环境。在 Auryveth 要求客户信任该系统之前，生命体应先在内部完成观察、准备，并逐步处理有边界的工作。",
    "Phase 1": "阶段 1",
    "Single-workflow business organism": "单工作流商业生命体",
    "After internal evidence is credible, deploy one bounded workflow with a founding partner using read-only observation, recommendation, approval-gated preparation and measurable outcomes.": "当内部证据足够可信后，与创始合作伙伴部署一个有边界的工作流，采用只读观察、建议、审批门控准备以及可衡量结果。",
    "Phase 2": "阶段 2",
    "Multi-workflow company organism": "多工作流公司生命体",
    "Integrate multiple operational domains while preserving permission boundaries, auditability, escalation and measurable performance.": "整合多个运营领域，同时保持权限边界、可审计性、升级处理机制与可衡量性能。",
    "Phase 3": "阶段 3",
    "Bounded autonomous execution": "有限自主执行",
    "Allow selected low-risk classes of work to execute without per-action approval once reliability criteria and organizational policies are satisfied.": "当可靠性标准与组织政策得到满足后，允许部分低风险工作类别无需逐项审批即可执行。",
    "Phase 4": "阶段 4",
    "Inter-company organism network": "跨公司生命体网络",
    "Enable authorized capability exchange and negotiation between independent company organisms without exposing unrestricted internal knowledge.": "在不暴露无限制内部知识的情况下，实现独立公司生命体之间获授权的能力交换与协商。",
    "Phase 5": "阶段 5",
    "Personal-to-business ecosystem": "个人到商业生态系统",
    "Connect personal organisms to approved business services so requests can be fulfilled across the network with explicit payment and authority consent.": "将个人生命体连接到获准商业服务，使请求能够在网络中完成，同时保持明确的付款与权限同意。",
    "Gate logic": "门槛逻辑",
    "Each phase advances only when its evidence threshold is met.": "每个阶段只有在满足其证据阈值后才能推进。",
    "Progression should require technical, economic and governance evidence—not just feature completion.": "阶段推进应要求技术、经济与治理证据，而不仅仅是功能完成。",
    "Technical gate": "技术门槛",
    "Does the organism perform reliably under defined conditions, recover from failures and produce inspectable evidence?": "生命体是否能在已定义条件下可靠运行、从失败中恢复，并产生可检查的证据？",
    "Economic gate": "经济门槛",
    "Does it reduce cost, cycle time, errors or operational load enough to justify deployment and support?": "它是否能够充分降低成本、周期时间、错误或运营负担，从而证明部署与支持是合理的？",
    "Trust gate": "信任门槛",
    "Can customers understand, constrain, suspend and recover control of the system before authority expands?": "在权限扩大之前，客户是否能够理解、约束、暂停系统并重新取得控制？",
    "Why the roadmap is milestone-driven": "为什么路线图由里程碑驱动",
    "Deep-tech progress is uncertain. Auryveth publishes evidence-based milestones rather than fixed dates for capabilities that still require research and validation.": "深科技的发展存在不确定性。对于仍需研究与验证的能力，Auryveth 发布基于证据的里程碑，而不是固定日期。",
    "How the stages are governed": "这些阶段如何治理",
    "proposed authority levels": "拟议权限等级",
    "internal evaluation method": "内部评估方法",
    ". Roadmap stages are intentions and do not establish deployment status or completed results.": "。路线图阶段代表计划方向，并不证明部署状态或已完成结果。",

    /* Dynamic site controls and organism journey */
    "system preference": "系统偏好",
    "Reduce Auryveth motion": "减少 Auryveth 动效",
    "Enable Auryveth live motion": "启用 Auryveth 实时动效",
    "Motion: live": "动效：开启",
    "Motion: reduced": "动效：减少",
    "opening principle": "起始原则",
    "Continuity before autonomy": "先保证连续性，再谈自主性",
    "The same living operating layer remains present as experience, context and evidence accumulate.": "随着经验、上下文与证据累积，同一个持续运行层始终保持存在。",
    "One organism layer. Five coordinated functions.": "一个生命体层，五项协同功能。",
    "The organism layer senses approved inputs, remembers continuity, reasons over context, governs action boundaries, and coordinates bounded work. These functions operate together as one persistent system rather than as isolated task sessions.": "生命体层负责感知获准输入、保持连续记忆、基于上下文推理、治理行动边界，并协调有边界的工作。这些功能作为一个持续系统共同运行，而不是彼此孤立的任务会话。",
    "organism layer": "生命体层",
    "Five functions, one continuity": "五项功能，一个连续体",
    "The callouts describe public-facing responsibilities, not confidential internal implementation.": "这些标注描述面向公众的职责，而不是机密内部实现。",
    "Ingests approved signals from trusted sources.": "从可信来源接收获准信号。",
    "Preserves relevant context across interactions.": "跨交互保留相关上下文。",
    "Keeps consequential action inside explicit authority.": "让具有重要后果的行动始终处于明确权限之内。",
    "Routes bounded work across approved systems and roles.": "在获准系统与角色之间协调有边界的工作。",
    "Evaluates evidence and constraints within context.": "在上下文中评估证据与约束。",
    "Governed life cycle": "受治理的生命周期",
    "One organism. A governed life cycle.": "一个生命体，一条受治理的生命周期。",
    "A digital organism develops through continuity: it begins with a bounded purpose, accumulates approved experience, stabilizes through evidence, operates within demonstrated capability, and evolves without silently expanding its authority.": "数字生命体通过连续性发展：从有边界的目的开始，累积获准经验，通过证据逐步稳定，在已证明能力范围内运行，并在不无声扩大权限的前提下进化。",
    "public life-cycle model": "公开生命周期模型",
    "Development remains governed": "发展始终受治理",
    "Lifecycle stages describe observable progression without disclosing private architecture or research mechanics.": "生命周期阶段描述可观察的发展过程，而不会披露私有架构或研究机制。",
    "Initiate": "启动",
    "Begins with a defined purpose, scope and authority boundary.": "从明确的目的、范围与权限边界开始。",
    "Accumulates approved experience and outcome evidence.": "累积获准经验与结果证据。",
    "Stabilize": "稳定",
    "Preserves continuity while behavior becomes more reliable.": "在行为逐步变得更可靠时保持连续性。",
    "Adapts within governance as evidence supports improvement.": "在治理范围内，根据证据支持进行适应与改进。",
    "Operate": "运行",
    "Performs bounded work within demonstrated capability.": "在已证明能力范围内执行有边界的工作。",
    "Capability horizon": "能力边界",
    "Capability grows under explicit authority.": "能力在明确权限之下成长。",
    "The organism can understand approved context, retain continuity, prepare decision-ready work, coordinate bounded workflows, and improve through accumulated outcomes while consequential authority remains separately granted.": "生命体可以理解获准上下文、保持连续性、准备可供决策的工作、协调有边界的工作流，并通过累积结果持续改进；与此同时，具有重要后果的权限仍需单独授予。",
    "public capability horizon": "公开能力边界",
    "More capable does not mean more authorized": "能力更强并不代表权限更多",
    "The view intentionally describes bounded outcomes and avoids confidential mechanisms or unvalidated claims.": "该视图有意只描述有边界的结果，并避免披露机密机制或未经验证的声明。",
    "Understand approved context": "理解获准上下文",
    "Interprets organizational knowledge within explicit authority.": "在明确权限范围内理解组织知识。",
    "Retain continuity": "保持连续性",
    "Preserves context across interactions to maintain coherent progress.": "跨交互保留上下文，以维持连贯进展。",
    "Prepare decision-ready work": "准备可供决策的工作",
    "Synthesizes insights into structured, verifiable outputs.": "将信息整合为结构化、可验证的输出。",
    "Improve through outcomes": "从结果中改进",
    "Learns from results to increase effectiveness over time.": "从结果中学习，并随着时间提升有效性。",
    "Coordinate bounded workflows": "协调有边界的工作流",
    "Supports multi-step work within defined guardrails.": "在明确护栏内支持多步骤工作。",
    "continue below": "继续向下",
    "scroll to transform": "滚动以切换视图",

    /* 2026-09-30 Blackboard-first vision refresh */
    "Humans authorize. Digital Life Organisms do the work.": "人类授权，数字生命体执行工作。",
    "AURYVETH is building a human-authorized Digital Life ecosystem. Its first product, Blackboard, coordinates humans and digital workers while preserving explicit authority, evidence and organizational boundaries.": "AURYVETH 正在构建由人类授权的数字生命生态系统。首个产品 Blackboard 用于协调人类与数字工作者，同时保留明确的权限、证据与组织边界。",
    "AURYVETH — Human-Authorized Digital Life Ecosystem": "AURYVETH — 人类授权的数字生命生态系统",
    "AURYVETH is building a human-authorized Digital Life ecosystem, beginning with Blackboard: coordination infrastructure for humans, digital workers and future Digital Life Organisms.": "AURYVETH 正在构建由人类授权的数字生命生态系统，并从 Blackboard 开始：为人类、数字工作者与未来数字生命体提供协作基础设施。",
    "AURYVETH Blackboard — Governed Coordination for Digital Work": "AURYVETH Blackboard — 受治理的数字工作协作层",
    "AURYVETH Blackboard is the company’s first product: a governed coordination layer for humans, digital workers and future Digital Life Organisms.": "AURYVETH Blackboard 是公司的首个产品：面向人类、数字工作者与未来数字生命体的受治理协作层。",
    "AURYVETH Roadmap — Blackboard to Digital Life Ecosystem": "AURYVETH 路线图 — 从 Blackboard 到数字生命生态系统",
    "AURYVETH’s capability-gated roadmap begins with Blackboard, expands into governed Digital Life Organisms, and later connects companies, personal services and physical interfaces.": "AURYVETH 以能力验证为门槛的路线图从 Blackboard 开始，逐步扩展到受治理的数字生命体，并在之后连接企业、个人服务与实体交互界面。",
    "AURYVETH’s investor thesis begins with Blackboard as coordination infrastructure, then expands into governed digital workforces and a broader Digital Life ecosystem.": "AURYVETH 的投资逻辑从 Blackboard 协作基础设施开始，再扩展到受治理的数字工作团队与更广泛的数字生命生态系统。",
    "Blackboard": "Blackboard 协作黑板",
    "Governed coordination for human-authorized digital work": "面向人类授权数字工作的受治理协作",
    "Digital Life specialized for organizational work": "面向组织工作的数字生命专精",
    "Explore Blackboard": "探索 Blackboard",
    "Auryveth / Human-authorized Digital Life ecosystem": "Auryveth / 人类授权的数字生命生态系统",
    "Humans authorize.": "人类授权。",
    "Digital Life Organisms do the work.": "数字生命体执行工作。",
    "Auryveth is building toward an ecosystem where people set direction and retain consequential authority while Digital Life Organisms coordinate and perform more of the work. The first product is AURYVETH Blackboard: governed coordination infrastructure being built first to multiply our own production capacity and later support digital workforces across organizations.": "Auryveth 正在构建一个生态系统：人类设定方向并保留重要决策权限，而数字生命体负责协调并承担更多工作。首个产品是 AURYVETH Blackboard——一种受治理的协作基础设施，首先用于提升我们自身的生产能力，之后再支持跨组织的数字工作团队。",
    "Explore Blackboard →": "探索 Blackboard →",
    "Understand Digital Life": "了解数字生命",
    "First product:": "首个产品：",
    "active development": "积极开发中",
    "North star:": "长期方向：",
    "human authority + digital execution": "人类权限 + 数字执行",
    "Digital Life under explicit human authority.": "处于明确人类权限之下的数字生命。",
    "Humans authorize": "人类授权",
    "People and organizations retain consequential authority.": "个人与组织保留具有重要后果的决策权限。",
    "Digital systems do more of the work": "数字系统承担更多工作",
    "Coordination, preparation and bounded execution move to persistent digital workers.": "协调、准备与有限执行逐步交由持续型数字工作者承担。",
    "Connect without surrendering sovereignty": "连接协作而不放弃主权",
    "Each person and organization keeps control of its knowledge, permissions and commitments.": "每个人与每个组织都保留对自身知识、权限与承诺的控制。",
    "Core architecture": "核心架构",
    "Coordination first. Digital Life next. Authority stays explicit.": "先解决协作，再发展数字生命，权限始终明确。",
    "AURYVETH is separating the coordination layer, the Digital Life itself and the authority either is allowed to exercise. That separation lets capability and organizational scale grow without silently granting more real-world power.": "AURYVETH 将协作层、数字生命本身以及各自可行使的权限明确分离。这样的分离使能力与组织规模能够增长，而不会在无声中获得更多现实世界权力。",
    "The first product: a governed coordination layer where humans and digital workers share messages, tasks, evidence, identity and authorization state.": "首个产品：一个受治理的协作层，让人类与数字工作者共享消息、任务、证据、身份与授权状态。",
    "Explore the first product →": "探索首个产品 →",
    "Digital Life Organism": "数字生命体",
    "A persistent digital life system designed to accumulate experience, specialize, learn and evolve under explicit governance.": "一种持续型数字生命系统，旨在明确治理下积累经验、形成专精、学习并进化。",
    "The first product": "首个产品",
    "Blackboard gives digital workers a governed place to operate together.": "Blackboard 为数字工作者提供一个受治理的协作空间。",
    "AURYVETH is building Blackboard first because coordination is the force multiplier. Before a large digital workforce can be useful, its members need shared identity, communication, tasks, evidence, authorization boundaries and recoverable organizational state.": "AURYVETH 先构建 Blackboard，因为协作本身就是生产力倍增器。在大规模数字工作团队真正发挥价值之前，其成员需要共享身份、通信、任务、证据、权限边界以及可恢复的组织状态。",
    "Communicate": "沟通",
    "Public, team and targeted messages make intent, handoffs and blockers visible instead of leaving them trapped inside isolated sessions.": "公开、团队与定向消息让意图、交接与阻塞点变得可见，而不是被困在孤立会话中。",
    "Shared tasks, ownership and state let multiple digital workers divide work, recover context and avoid duplicating the same job.": "共享任务、所有权与状态让多个数字工作者能够分工、恢复上下文，并避免重复执行同一工作。",
    "Identity and authorization keep capability separate from permission so consequential actions remain under explicit authority.": "身份与授权将能力和权限分离，使具有重要后果的行动始终处于明确授权之下。",
    "Evidence, history and acceptance records make outcomes inspectable before greater responsibility is granted.": "证据、历史记录与验收记录让结果在获得更大责任之前可被检查。",
    "How Blackboard fits the ecosystem →": "了解 Blackboard 如何融入生态系统 →",
    "The human authorization loop": "人类授权闭环",
    "Let the ecosystem prepare and coordinate the work. Keep consequential decisions with people.": "让生态系统准备并协调工作，把重要决策保留在人类手中。",
    "The long-term model is not unrestricted automation. Digital Life Organisms can research, coordinate, negotiate and prepare actions across approved services; a human authorization boundary remains where money, contracts, rights or other consequential commitments are involved.": "长期模式并不是无限制自动化。数字生命体可以在获准服务之间进行研究、协调、协商与行动准备；当涉及资金、合同、权利或其他重大承诺时，仍保留人类授权边界。",
    "Human-authorized Digital Life workflow": "人类授权的数字生命工作流",
    "Human intent": "人类意图",
    "A person or organization states the goal.": "个人或组织提出目标。",
    "The request enters an approved Blackboard context with identity, scope and constraints.": "请求进入获准的 Blackboard 上下文，并携带身份、范围与约束。",
    "Digital coordination": "数字协作",
    "Specialized workers prepare the solution together.": "专业化数字工作者共同准备方案。",
    "Relevant digital workers gather options, costs, evidence, dependencies and proposed actions.": "相关数字工作者汇总选项、成本、证据、依赖关系与拟议行动。",
    "Authorization": "授权",
    "The responsible human reviews the decision package.": "负责的人类审核完整决策材料。",
    "Approve, reject or modify the proposed transaction before consequential authority is released.": "在释放重大行动权限前，对拟议交易进行批准、拒绝或修改。",
    "Bounded execution": "有限执行",
    "Approved work moves through the ecosystem.": "获准工作在生态系统中继续执行。",
    "Only the authorized actions proceed, with evidence and responsibility preserved across the participating systems.": "只有获得授权的行动才能继续，并在参与系统之间保留证据与责任。",
    "North star": "长期原则",
    "Maximum delegated work. Minimum delegated authority.": "最大化委派工作，最小化委派权限。",
    "The system should reduce operational burden without quietly transferring human decision rights to software.": "系统应减少运营负担，而不是在无声中把人类决策权转移给软件。",
    "What this can become": "未来可以发展成什么",
    "One coordination model, from companies to personal Digital Life.": "同一种协作模型，从企业延伸到个人数字生命。",
    "These are long-term ecosystem directions, not claims of currently deployed capability.": "这些是长期生态方向，并非对当前已部署能力的声明。",
    "Company ↔ company": "企业 ↔ 企业",
    "Linked Blackboards could exchange governed requests such as quotations. Each company’s digital workforce prepares its side, while directors retain authority over the commercial commitment.": "互联的 Blackboard 可以交换受治理的请求，例如报价。每家公司的数字工作团队准备各自部分，而董事保留对商业承诺的最终权限。",
    "Travel and personal services": "旅行与个人服务",
    "A personal Digital Life could coordinate flights, hotels, food, transport and schedules, then present a complete cost and plan for authorization before anything is purchased.": "个人数字生命可以协调航班、酒店、餐饮、交通与行程，然后在任何购买发生之前提交完整成本与方案供人类授权。",
    "Contracts and professional services": "合同与专业服务",
    "When organizations reach an agreement, their digital workers could prepare contract material while authorized legal professionals and law-firm organisms provide review before humans sign.": "当组织达成协议后，其数字工作者可以准备合同材料，并由获授权的法律专业人士与律所生命体进行审核，再由人类签署。",
    "Give people more freedom to choose what deserves their time.": "让人们拥有更多自由，选择什么值得投入自己的时间。",
    "AURYVETH is not being built to make human contribution unnecessary. The long-term goal is to move more repetitive coordination and operational burden to governed Digital Life so people can spend more of their lives on work, relationships, research, creativity and problems they actually choose to pursue.": "AURYVETH 并不是为了让人类贡献变得不再必要。长期目标是把更多重复性协调与运营负担交给受治理的数字生命，让人们能够把更多生命投入到自己真正选择的工作、关系、研究、创造与问题之中。",
    "Jeremiah founded AURYVETH around a simple long-term model: humans authorize, Digital Life Organisms do the work. Blackboard is being built first because a governed coordination layer can multiply AURYVETH’s own production capacity before the company expands into broader digital-organism, inter-company and personal ecosystems.": "Jeremiah 围绕一个简单的长期模式创立 AURYVETH：人类授权，数字生命体执行工作。Blackboard 被优先构建，因为受治理的协作层能够先倍增 AURYVETH 自身的生产能力，再逐步扩展到更广泛的数字生命体、跨企业与个人生态系统。",
    "He leads AURYVETH's direction across Blackboard, governed autonomy, Digital Life research and the company's internal proving ground. The operating principle remains simple: capabilities should be demonstrated with evidence before authority expands.": "他负责 AURYVETH 在 Blackboard、受治理自主性、数字生命研究以及公司内部验证场方面的方向。运营原则仍然简单：在扩大权限之前，能力必须先通过证据得到证明。",
    "From Blackboard to a human-authorized Digital Life ecosystem.": "从 Blackboard 走向人类授权的数字生命生态系统。",
    "The roadmap is capability-gated rather than date-driven. Blackboard comes first as the coordination foundation; later phases depend on evidence that the underlying coordination, organism and authority layers are reliable, useful and controllable.": "路线图以能力验证为门槛，而不是由日期驱动。Blackboard 首先作为协作基础；后续阶段必须建立在协作、生命体与权限层已被证明可靠、有用且可控的证据之上。",
    "Blackboard + Nodes + Organisms": "Blackboard + Nodes + Organisms",
    "Complete the governed coordination, local execution and Digital Life foundations. Blackboard is the first product because it immediately increases AURYVETH's own ability to coordinate parallel digital work while the deeper organism architecture matures.": "完成受治理协作、本地执行与数字生命基础。Blackboard 之所以成为首个产品，是因为它能够在更深层生命体架构成熟的同时，立即提升 AURYVETH 协调并行数字工作的能力。",
    "Blackboard as AURYVETH's production multiplier": "Blackboard 作为 AURYVETH 的生产力倍增器",
    "Use Blackboard inside AURYVETH for real engineering, research and operational coordination. Measure whether multiple digital workers can communicate, claim work, hand off responsibility and remain governable under shared state.": "在 AURYVETH 内部使用 Blackboard 进行真实工程、研究与运营协作，并衡量多个数字工作者是否能够沟通、认领工作、交接责任并在共享状态下保持可治理。",
    "Governed Digital Life workforce": "受治理的数字生命工作团队",
    "Move from task-oriented digital workers toward persistent role-specialized organisms operating through Blackboard and Nodes, with measurable capability and explicit human authority boundaries.": "从任务导向数字工作者逐步发展为通过 Blackboard 与 Nodes 运行的持续型角色专精生命体，并保持可衡量能力与明确的人类权限边界。",
    "Linked company Blackboards": "互联企业 Blackboard",
    "Enable organizations to cooperate through governed interfaces: requests for quotation, procurement, evidence exchange and contract preparation without surrendering unrestricted internal knowledge or decision authority.": "让组织通过受治理界面进行协作：询价、采购、证据交换与合同准备，同时不放弃对内部知识或决策权限的控制。",
    "Personal Digital Life ecosystem": "个人数字生命生态系统",
    "Connect personal Digital Life to approved businesses and services so complex goals such as travel can be planned across providers and presented back to the person for explicit authorization.": "将个人数字生命连接到获准企业与服务，使旅行等复杂目标能够跨供应商规划，并最终返回给本人进行明确授权。",
    "Embodied and ambient interfaces": "实体与环境式交互界面",
    "Extend the same persistent Digital Life through additional Nodes such as AR interfaces, robotics and other future hardware while keeping identity, memory and authority independent from any single device.": "通过 AR 界面、机器人及其他未来硬件等更多 Nodes 延伸同一个持续型数字生命，同时让身份、记忆与权限独立于任何单一设备。",
    "Coordination infrastructure first. A broader Digital Life ecosystem over time.": "先构建协作基础设施，再逐步发展更广泛的数字生命生态系统。",
    "AURYVETH's thesis is to begin with Blackboard: governed coordination infrastructure that can increase the productivity of AURYVETH itself and later other digital workforces. That foundation can support deeper Digital Life research, business-organism deployment and eventually governed organization-to-organization coordination.": "AURYVETH 的理念是从 Blackboard 开始：一种受治理的协作基础设施，先提升 AURYVETH 自身生产力，之后再支持其他数字工作团队。该基础能够支撑更深入的数字生命研究、商业生命体部署，并最终支持受治理的组织间协作。",
    "Build the coordination layer first, then compound into Digital Life infrastructure.": "先构建协作层，再逐步形成数字生命基础设施。",
    "Blackboard is intended to become useful before the complete long-term ecosystem exists. The company can validate coordination and governance internally, turn that infrastructure into a product, and use the resulting evidence and revenue base to support deeper organism, network and physical-interface research.": "Blackboard 的目标是在完整长期生态系统形成之前就产生实际价值。公司可以先在内部验证协作与治理，将这套基础设施发展为产品，再利用由此产生的证据与收入基础支持更深入的生命体、网络与实体界面研究。",
    "1. Coordination": "1. 协作",
    "Blackboard provides shared identity, messages, tasks, evidence and authorization for human-directed digital work.": "Blackboard 为人类主导的数字工作提供共享身份、消息、任务、证据与授权。",
    "2. Digital workforce": "2. 数字工作团队",
    "Nodes and Digital Life Organisms can reuse the governed coordination layer instead of each deployment becoming an isolated automation project.": "Nodes 与数字生命体可以复用受治理协作层，而不是让每次部署都变成彼此孤立的自动化项目。",
    "Linked Blackboards can enable authorized inter-company coordination where useful connectivity grows without surrendering organizational control.": "互联 Blackboard 可以实现获授权的跨企业协作，在增加有价值连接的同时不放弃组织控制权。",
    "Founder of AURYVETH · Building Blackboard first, then the governed Digital Life ecosystem around it.": "AURYVETH 创始人 · 先构建 Blackboard，再围绕它发展受治理的数字生命生态系统。",
    "AURYVETH Blackboard / First product": "AURYVETH Blackboard / 首个产品",
    "The governed coordination layer for human-authorized digital work.": "面向人类授权数字工作的受治理协作层。",
    "Blackboard is AURYVETH's first product. It is being built as shared organizational infrastructure where humans, digital workers and future Digital Life Organisms can communicate, coordinate work, preserve evidence and operate inside explicit authority boundaries.": "Blackboard 是 AURYVETH 的首个产品。它被构建为共享组织基础设施，让人类、数字工作者与未来数字生命体能够沟通、协调工作、保留证据，并在明确权限边界内运行。",
    "In active development": "积极开发中",
    "Internal proving ground first": "优先内部验证",
    "Real ecosystem integration later": "真实生态集成将在后续进行",
    "Why Blackboard comes first": "为什么先做 Blackboard",
    "Intelligence scales only when coordination scales with it.": "只有协作能力同步扩展，智能才能真正扩展。",
    "AURYVETH can add more digital workers quickly. The harder problem is making them behave like a coherent organization: knowing who is responsible, what changed, what authority exists, what evidence supports a decision and how work survives when one worker disappears.": "AURYVETH 可以快速增加更多数字工作者。更难的问题是让他们像一个连贯组织一样运作：知道谁负责、什么发生了变化、有哪些权限、什么证据支持某个决定，以及当某个工作者消失时工作如何继续。",
    "Identity": "身份",
    "Know which human, organism, node or system principal is acting without treating identity as automatic authority.": "明确当前行动者是人类、生命体、节点还是系统主体，同时不把身份本身当作自动权限。",
    "Messaging": "消息通信",
    "Make intent, discoveries, handoffs and targeted communication persistent instead of leaving them inside isolated sessions.": "让意图、发现、交接与定向通信能够持续保存，而不是留在孤立会话中。",
    "Work state": "工作状态",
    "Coordinate tasks, claims, progress, blockers and evidence so parallel workers can cooperate without blindly duplicating effort.": "协调任务、认领、进度、阻塞点与证据，让并行工作者能够协作而不是盲目重复劳动。",
    "Keep capability separate from permission and preserve human or organizational control over consequential actions.": "将能力与权限分离，并保留人类或组织对重大行动的控制。",
    "Operating model": "运行模式",
    "Humans decide the boundaries. Digital workers coordinate inside them.": "人类决定边界，数字工作者在边界内协作。",
    "Blackboard is designed to make organizational state visible enough that multiple independent digital workers can cooperate, recover from interruptions and hand off responsibility without requiring one monolithic mind.": "Blackboard 被设计为让组织状态足够可见，使多个独立数字工作者能够协作、从中断中恢复并交接责任，而不需要一个单体化的统一心智。",
    "Blackboard coordination model": "Blackboard 协作模型",
    "Goal": "目标",
    "A human or authorized system defines the objective.": "由人类或获授权系统定义目标。",
    "Scope, identity and authority enter as explicit context rather than assumptions.": "范围、身份与权限以明确上下文进入，而不是依赖默认假设。",
    "Coordination": "协作",
    "Workers communicate and claim bounded work.": "工作者沟通并认领有边界的工作。",
    "Messages, tasks and shared state make ownership and dependencies visible.": "消息、任务与共享状态让所有权与依赖关系变得可见。",
    "Results and decisions remain inspectable.": "结果与决策保持可检查。",
    "Work can be reviewed, accepted, rejected or handed to another worker with durable context.": "工作可以被审核、接受、拒绝，或携带持久上下文交接给另一个工作者。",
    "Consequential execution remains explicitly governed.": "具有重要后果的执行始终受到明确治理。",
    "Being capable of an action does not by itself grant permission to perform it.": "具备执行某项行动的能力，并不意味着自动获得执行权限。",
    "A miniature proof already exists": "一个微型验证已经出现",
    "The coordination problem appears before Digital Life is complete.": "协作问题在完整数字生命出现之前就已经存在。",
    "AURYVETH is already using parallel digital engineering workers during development. Even simple experiments reveal the same organizational needs: shared state, work claims, messages, conflict resolution, recoverable checkpoints and independent acceptance. Blackboard turns those behaviors into governed infrastructure instead of improvised coordination.": "AURYVETH 在开发过程中已经开始使用并行数字工程工作者。即使是简单实验，也暴露出相同的组织需求：共享状态、工作认领、消息通信、冲突解决、可恢复检查点与独立验收。Blackboard 将这些行为转化为受治理基础设施，而不是临时拼凑的协作方式。",
    "Long-term network": "长期网络",
    "One Blackboard can coordinate a company. Linked Blackboards can coordinate an economy.": "一个 Blackboard 可以协调一家公司，互联 Blackboard 可以协调更大的经济网络。",
    "The long-term direction is governed interoperability, not unrestricted sharing. Independent organizations should be able to cooperate while keeping control of their private knowledge, permissions, commercial relationships and human decision boundaries.": "长期方向是受治理的互操作，而不是无限制共享。独立组织应能在保持对私有知识、权限、商业关系与人类决策边界控制的同时进行协作。",
    "Requests for quotation": "询价与报价",
    "Company A can request something Company B provides. Digital workers prepare the quotation and supporting information; the responsible director authorizes the commercial commitment.": "公司 A 可以请求公司 B 提供某项能力或产品。数字工作者准备报价与支持信息，由负责的董事授权商业承诺。",
    "Contracts": "合同",
    "When organizations agree on terms, digital workers can prepare structured contract material and route it through authorized legal review before people with signing authority execute it.": "当组织就条款达成一致后，数字工作者可以准备结构化合同材料，并送交获授权的法律审核，最后由具有签署权限的人执行。",
    "Personal services": "个人服务",
    "A personal Digital Life can eventually request services across participating businesses, collect the complete plan and cost, and return to its human for authorization before purchase.": "个人数字生命最终可以向参与生态的企业请求服务，汇总完整方案与成本，并在购买前返回给其人类进行授权。",
    "Boundary of the current product": "当前产品边界",
    "Blackboard is the coordination foundation, not the whole AURYVETH vision.": "Blackboard 是协作基础，并不是 AURYVETH 的全部愿景。",
    "Nodes, Digital Life Organisms, inter-company protocol integration, personal Digital Life, AR interfaces and robotics are separate layers or later stages. Blackboard is being built first because those systems will need a governed place to communicate and cooperate.": "Nodes、数字生命体、跨企业协议集成、个人数字生命、AR 界面与机器人属于不同层或后续阶段。Blackboard 被优先构建，是因为这些系统都需要一个受治理的空间进行通信与协作。",
    "Being built now": "当前正在构建",
    "Identity, communication, work coordination, evidence, authorization, realtime collaboration and the foundations required for governed digital organizations.": "身份、通信、工作协调、证据、授权、实时协作，以及受治理数字组织所需的基础能力。",
    "Built later around it": "后续围绕它构建",
    "Persistent Digital Life workforces, real Node/Organism integration, linked-company ecosystems, personal Digital Life and additional physical or ambient interfaces.": "持续型数字生命工作团队、真实 Node/Organism 集成、互联企业生态、个人数字生命，以及更多实体或环境式交互界面。",
    "See the staged roadmap →": "查看分阶段路线图 →",
    "Explore Digital Life research": "探索数字生命研究",

    /* Accessibility labels used in page bodies */
    "Conceptual visualization of a continuously active Auryveth digital organism": "持续运行的 Auryveth 数字生命体概念可视化",
    "Auryveth operating thesis": "Auryveth 运营理念",
    "Scroll-driven overview of the Auryveth digital organism, its life cycle and public capability horizon": "通过滚动查看 Auryveth 数字生命体、生命周期与公开能力边界",
    "Organism showcase chapters": "生命体展示章节",
    "Illustrative cross-industry business workflow": "跨行业商业工作流示意",
    "Internal validation progression": "内部验证进程",
    "Conceptual illustration of governed inter-company organism coordination": "受治理的跨公司生命体协作概念示意"
  });

  const TEXT_ORIGINAL = new WeakMap();
  const ATTR_ORIGINAL = new WeakMap();
  const TRANSLATABLE_ATTRS = ['aria-label', 'title', 'placeholder', 'alt', 'content'];
  let currentLanguage = EN;
  let observer = null;
  let applying = false;

  const normalize = value => String(value ?? '').replace(/\s+/g, ' ').trim();

  function preserveWhitespace(source, replacement) {
    const leading = String(source).match(/^\s*/)?.[0] ?? '';
    const trailing = String(source).match(/\s*$/)?.[0] ?? '';
    return leading + replacement + trailing;
  }

  function translateTextNode(node, language) {
    if (!node || node.nodeType !== Node.TEXT_NODE) return;
    const parent = node.parentElement;
    if (!parent || ['SCRIPT', 'STYLE', 'NOSCRIPT'].includes(parent.tagName)) return;

    if (language === EN) {
      if (TEXT_ORIGINAL.has(node)) {
        const original = TEXT_ORIGINAL.get(node);
        if (node.nodeValue !== original) node.nodeValue = original;
      }
      return;
    }

    const source = node.nodeValue ?? '';
    const key = normalize(source);
    const translated = ZH[key];
    if (!translated) return;

    // Dynamic UI may reuse the same text node. Whenever an English source is
    // observed, update the remembered original before applying Chinese.
    TEXT_ORIGINAL.set(node, source);
    const next = preserveWhitespace(source, translated);
    if (next !== source) node.nodeValue = next;
  }

  function getAttrStore(element) {
    let store = ATTR_ORIGINAL.get(element);
    if (!store) {
      store = new Map();
      ATTR_ORIGINAL.set(element, store);
    }
    return store;
  }

  function translateAttributes(element, language) {
    if (!(element instanceof Element)) return;
    const store = getAttrStore(element);

    for (const attr of TRANSLATABLE_ATTRS) {
      if (!element.hasAttribute(attr)) continue;

      if (language === EN) {
        if (store.has(attr)) {
          const original = store.get(attr);
          if (element.getAttribute(attr) !== original) element.setAttribute(attr, original);
        }
        continue;
      }

      const source = element.getAttribute(attr) ?? '';
      const translated = ZH[normalize(source)];
      if (!translated) continue;
      store.set(attr, source);
      element.setAttribute(attr, translated);
    }
  }

  function translateSubtree(root, language) {
    if (!root) return;
    applying = true;
    try {
      if (root.nodeType === Node.TEXT_NODE) {
        translateTextNode(root, language);
        return;
      }

      if (root instanceof Element) translateAttributes(root, language);

      const walker = document.createTreeWalker(
        root,
        NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT
      );
      let node;
      while ((node = walker.nextNode())) {
        if (node.nodeType === Node.TEXT_NODE) translateTextNode(node, language);
        else translateAttributes(node, language);
      }
    } finally {
      applying = false;
    }
  }

  function updateSwitchers() {
    document.querySelectorAll('[data-language-toggle]').forEach(button => {
      const current = button.querySelector('[data-language-current]');
      const target = button.querySelector('[data-language-target]');
      const isChinese = currentLanguage === ZH_CN;

      if (current) current.textContent = isChinese ? '中文' : 'EN';
      if (target) target.textContent = isChinese ? 'EN' : '中文';
      button.setAttribute(
        'aria-label',
        isChinese ? '切换网站语言为英文' : 'Switch website language to Chinese'
      );
      button.setAttribute('aria-pressed', String(isChinese));
    });
  }

  function applyLanguage(language, { persist = false } = {}) {
    const next = language === ZH_CN ? ZH_CN : EN;
    currentLanguage = next;

    document.documentElement.lang = next;
    document.documentElement.dataset.language = next;
    translateSubtree(document.documentElement, next);
    updateSwitchers();

    if (persist) {
      try { localStorage.setItem(STORAGE_KEY, next); } catch {}
    }

    document.dispatchEvent(new CustomEvent('auryveth:languagechange', {
      detail: { language: next }
    }));
  }

  function toggleLanguage() {
    applyLanguage(currentLanguage === ZH_CN ? EN : ZH_CN, { persist: true });
  }

  function readStoredLanguage() {
    try {
      return localStorage.getItem(STORAGE_KEY) === ZH_CN ? ZH_CN : EN;
    } catch {
      return EN;
    }
  }

  function bindSwitchers() {
    document.querySelectorAll('[data-language-toggle]').forEach(button => {
      if (button.dataset.languageBound === 'true') return;
      button.dataset.languageBound = 'true';
      button.addEventListener('click', toggleLanguage);
    });
    updateSwitchers();
  }

  function startObserver() {
    observer?.disconnect();
    observer = new MutationObserver(records => {
      if (applying) return;

      // In English mode the existing application owns all dynamic copy.
      // Restoration happens only once during an explicit language change;
      // after that we must not overwrite later site.js updates.
      if (currentLanguage === EN) {
        for (const record of records) {
          if (record.type === 'childList') {
            record.addedNodes.forEach(node => {
              if (node instanceof Element) bindSwitchers();
            });
          }
        }
        return;
      }

      for (const record of records) {
        if (record.type === 'childList') {
          record.addedNodes.forEach(node => {
            if (node instanceof Element) {
              bindSwitchers();
              translateSubtree(node, currentLanguage);
            } else {
              translateTextNode(node, currentLanguage);
            }
          });
        } else if (record.type === 'characterData') {
          translateTextNode(record.target, currentLanguage);
        } else if (record.type === 'attributes') {
          translateAttributes(record.target, currentLanguage);
        }
      }
    });

    observer.observe(document.documentElement, {
      subtree: true,
      childList: true,
      characterData: true,
      attributes: true,
      attributeFilter: TRANSLATABLE_ATTRS
    });
  }

  function init() {
    bindSwitchers();
    startObserver();
    applyLanguage(readStoredLanguage());
  }

  window.AuryvethLanguage = Object.freeze({
    get language() { return currentLanguage; },
    set: language => applyLanguage(language, { persist: true }),
    toggle: toggleLanguage,
    supported: Object.freeze([EN, ZH_CN])
  });

  if (document.body) init();
  else document.addEventListener('DOMContentLoaded', init, { once: true });
})();
