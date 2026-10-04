// Single source of truth for the public site and its build-time search metadata.
export const site = {
  name: 'AURYVETH',
  url: 'https://auryveth.github.io',
  tagline: 'Human-governed Digital Life under a frozen constitutional architecture.',
  description: 'AURYVETH is building governed Digital Life under a frozen ecosystem Constitution: persistent digital beings with distinct identity and continuity, scoped authority, evidence-before-promotion, and separated Blackboard, Node, Organism, Research and Protocol domains.'
  founder: 'Jeremiah Wong Zhi Qi',
  github: 'https://github.com/auryveth',
  logo: '/assets/logos/Auryveth_Logo_Horizontal_Corporate.svg',
  socialImage: '/assets/social/Auryveth_OpenGraph_1200x630.jpg'
  // No addresses, registration identifiers, emails or product claims until publicly verified.
} as const;

export const pages = {
  "home": {
    "title": "AURYVETH — Human-Authorized Digital Life Ecosystem",
    "description": "AURYVETH is building a human-authorized Digital Life ecosystem, beginning with Blackboard: coordination infrastructure for humans, digital workers and future Digital Life Organisms.",
    "path": "/",
    "nav": "home"
  },
  "about": {
    "title": "About AURYVETH — Governed Digital Life Organisms",
    "description": "Meet AURYVETH and its founder, Jeremiah Wong Zhi Qi. AURYVETH is building Blackboard first, alongside governed Digital Life research and the foundations for future business and personal ecosystems.",
    "path": "/about/",
    "nav": "about"
  },
  "blackboard": {
    "title": "AURYVETH Blackboard — Governed Coordination for Digital Work",
    "description": "AURYVETH Blackboard is the company’s first product: a governed coordination layer for humans, digital workers and future Digital Life Organisms.",
    "path": "/blackboard/",
    "nav": "blackboard"
  },
  "organisms": {
    "title": "Digital Business Organisms — AURYVETH",
    "description": "AURYVETH Business Organisms are governed Digital Life specializations with distinct identity and continuity, scoped authority, revocable trust and evidence-gated capability growth.",
    "path": "/organisms/",
    "nav": "organisms"
  },
  "research": {
    "title": "Digital Organism Research — AURYVETH",
    "description": "AURYVETH Research explores persistent cognition, authenticated continuity, consequence-driven learning, Research-gated self-change, specialization and governed evolution.",
    "path": "/research/",
    "nav": "research"
  },
  "roadmap": {
    "title": "AURYVETH Roadmap — Blackboard to Digital Life Ecosystem",
    "description": "AURYVETH’s capability-gated roadmap begins with Blackboard, expands into governed Digital Life Organisms, and later connects companies, personal services and physical interfaces.",
    "path": "/roadmap/",
    "nav": "roadmap"
  },
  "constitution": {
    "title": "Ecosystem Constitution v0.1 — AURYVETH",
    "description": "Read AURYVETH Ecosystem Constitution Version 0.1: the frozen laws for human benefit, authority, identity, continuity, safety, evidence, evolution and domain separation.",
    "path": "/constitution/",
    "nav": "constitution"
  },
  "investors": {
    "title": "Investors & Strategic Partners — AURYVETH",
    "description": "AURYVETH’s investor thesis begins with Blackboard as coordination infrastructure, then expands into governed digital workforces and a broader Digital Life ecosystem.",
    "path": "/investors/",
    "nav": "investors"
  },
  "pilot": {
    "title": "Founding Partner Pilot — AURYVETH",
    "description": "Explore the Auryveth founding partner pilot model for bounded business automation and evidence-driven autonomy.",
    "path": "/pilot/",
    "nav": "pilot"
  },
  "privacy": {
    "title": "Privacy — AURYVETH",
    "description": "Auryveth privacy information for the current website release.",
    "path": "/privacy/",
    "nav": "privacy"
  }
} as const;

// Every entry below must have a real, prerendered public page. The build audit compares
// this registry to the generated HTML and sitemap; never add speculative URLs.
export const knowledgePages = {
  'digital-organism': { title: 'What Is a Digital Organism? — AURYVETH', description: 'AURYVETH’s definition of a persistent digital being with distinct identity and authenticated continuity, designed to build, learn and evolve under explicit governance.' },
  'business-organism': { title: 'What Is a Business Organism? — AURYVETH', description: 'AURYVETH’s definition of a persistent Digital Life Organism specialized for business context, with distinct identity, continuity and separately governed authority.' },
  'governed-autonomy': { title: 'What Is Governed Autonomy? — AURYVETH', description: 'Why capability, intelligence and trust do not self-create permission: AURYVETH’s model of scoped, revocable and evidence-bearing operational authority.' },
  'organism-vs-agent': { title: 'Business Organism vs. AI Agent — AURYVETH', description: 'How AURYVETH distinguishes its persistent business-organism architecture from task-oriented AI agent systems, without claiming current autonomy.' },
  'authority-levels': { title: 'How a Business Organism Earns Authority — AURYVETH', description: 'Explore AURYVETH’s proposed progression from observing and preparing work to explicitly approved, bounded execution.' },
  'internal-proving-ground': { title: 'Why AURYVETH Tests Its Organisms Internally First', description: 'AURYVETH’s planned internal proving ground: prepare real work, review outcomes, measure reliability and earn narrowly scoped authority.' }
} as const;

export const indexedPaths = [
  '/', '/blackboard/', '/organisms/', '/research/', '/roadmap/', '/constitution/',
  '/investors/', '/about/', '/pilot/', '/privacy/',
  '/knowledge/', '/knowledge/digital-organism/', '/knowledge/business-organism/', '/knowledge/governed-autonomy/',
  '/knowledge/organism-vs-agent/', '/knowledge/authority-levels/', '/knowledge/internal-proving-ground/'
] as const;
