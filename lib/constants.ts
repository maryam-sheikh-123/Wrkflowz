export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "About", href: "/about" },
  { label: "Process", href: "/process" },
  { label: "Contact", href: "/contact" },
];

export const marqueeItems = [
  { name: "NEXT.JS", color: "#000000" },
  { name: "REACT", color: "#0EA5C6" },
  { name: "NODE.JS", color: "#339933" },
  { name: "TYPESCRIPT", color: "#3178C6" },
  { name: "TAILWIND", color: "#06B6D4" },
  { name: "FIGMA", color: "#F24E1E" },
  { name: "FLUTTER", color: "#54C5F8" },
  { name: "SUPABASE", color: "#3ECF8E" },
  { name: "AWS", color: "#FF9900" },
  { name: "MONGODB", color: "#47A248" },
  { name: "SHOPIFY", color: "#96BF48" },
  { name: "POSTGRESQL", color: "#336791" },
];

export const services = [
  {
    id: "web",
    slug: "workflow-automation",
    href: "/services/workflow-automation",
    title: "Workflow Automation",
    icon: "Globe",
    color: "#5A42FF",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    description:
      "Automate repetitive business flows with smart no-code and custom logic pipelines.",
    tags: ["Zapier", "Make", "n8n"],
    includes: ["Workflow mapping", "Automation setup", "Error handling logic"],
    outcomes: ["Reduce manual workload by 40-70%", "Speed up task completion across teams", "Improve process consistency"],
    idealFor: ["Operations teams", "Client onboarding flows", "Back-office processes"],
  },
  {
    id: "mobile",
    slug: "ai-agents",
    href: "/services/ai-agents",
    title: "AI Agents",
    icon: "Smartphone",
    color: "#059669",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    description:
      "Deploy AI assistants for support, lead qualification, and internal operations.",
    tags: ["OpenAI", "RAG", "Prompt Flows"],
    includes: ["Agent design", "Knowledge integration", "Guardrails and testing"],
    outcomes: ["24/7 automated responses", "Better lead qualification quality", "Faster internal support resolution"],
    idealFor: ["Sales and support teams", "Knowledge-heavy businesses", "Growth-stage startups"],
  },
  {
    id: "design",
    slug: "crm-sales-automation",
    href: "/services/crm-sales-automation",
    title: "CRM & Sales Automation",
    icon: "Paintbrush",
    color: "#7C3AED",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    description: "Connect forms, pipelines, and follow-ups to close deals faster.",
    tags: ["HubSpot", "Pipedrive", "Airtable"],
    includes: ["Lead routing", "Follow-up automations", "Pipeline reporting"],
    outcomes: ["Higher lead-to-close conversion", "Zero missed follow-up opportunities", "Cleaner CRM data health"],
    idealFor: ["Sales teams", "Agencies", "B2B service companies"],
  },
  {
    id: "ecommerce",
    slug: "e-commerce-automation",
    href: "/services/e-commerce-automation",
    title: "E-Commerce Automation",
    icon: "ShoppingBag",
    color: "#EA580C",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800",
    description: "Automate order updates, inventory sync, and customer communication.",
    tags: ["Shopify", "WooCommerce", "Klaviyo"],
    includes: ["Order workflows", "Inventory automation", "Abandoned cart flows"],
    outcomes: ["Fewer fulfillment mistakes", "Higher customer retention", "Improved repeat purchase rate"],
    idealFor: ["Online stores", "D2C brands", "Multi-channel sellers"],
  },
  {
    id: "backend",
    slug: "integrations-apis",
    href: "/services/integrations-apis",
    title: "Integrations & APIs",
    icon: "Server",
    color: "#0891B2",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800",
    description: "Connect your tools so data flows automatically across your stack.",
    tags: ["REST API", "Webhooks", "PostgreSQL"],
    includes: ["Custom connectors", "Webhook orchestration", "Sync monitoring"],
    outcomes: ["One connected data system", "Reduced platform silos", "Reliable cross-tool synchronization"],
    idealFor: ["Product teams", "Data-sensitive workflows", "Fast-scaling businesses"],
  },
  {
    id: "custom",
    slug: "custom-automation-systems",
    href: "/services/custom-automation-systems",
    title: "Custom Automation Systems",
    icon: "Code2",
    color: "#E11D48",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    description: "Build custom internal tools to automate unique team workflows.",
    tags: ["Dashboards", "Cloud", "Automation"],
    includes: ["Ops dashboards", "Approval systems", "Automated reporting"],
    outcomes: ["Purpose-built internal tooling", "Faster decision-making cycles", "Scalable operations infrastructure"],
    idealFor: ["Teams with custom workflows", "Ops-heavy companies", "Founder-led scaling teams"],
  },
];

export const industries = [
  {
    name: "Startups",
    color: "#5A42FF",
    desc: "MVPs and growth-ready products for early momentum.",
    challenges: ["Fast iteration", "MVP strategy", "Lean engineering"],
    projects: "18+",
  },
  {
    name: "SaaS Companies",
    color: "#7C3AED",
    desc: "Subscription products focused on retention and product velocity.",
    challenges: ["Feature rollout", "Billing workflows", "Product analytics"],
    projects: "14+",
  },
  {
    name: "E-Commerce",
    color: "#EA580C",
    desc: "Storefronts and funnels designed for repeat conversion.",
    challenges: ["Checkout UX", "Catalog scale", "Integrations"],
    projects: "12+",
  },
  {
    name: "Agencies",
    color: "#059669",
    desc: "Reliable white-label engineering and design support.",
    challenges: ["Delivery speed", "Client expectations", "Capacity support"],
    projects: "16+",
  },
  {
    name: "Enterprises",
    color: "#0891B2",
    desc: "Stable systems and modernization for large teams.",
    challenges: ["Legacy systems", "Compliance", "Cross-team workflows"],
    projects: "11+",
  },
  {
    name: "Founders",
    color: "#E11D48",
    desc: "Product strategy and execution support for solo builders.",
    challenges: ["Roadmapping", "Budget-efficient build", "Launch support"],
    projects: "20+",
  },
];

export const stats = [
  { label: "Projects Delivered", value: 50, suffix: "+", color: "#5A42FF" },
  { label: "Happy Clients", value: 30, suffix: "+", color: "#7C3AED" },
  { label: "Years Experience", value: 3, suffix: "+", color: "#059669" },
  { label: "Satisfaction Rate", value: 99, suffix: "%", color: "#EA580C" },
];

export const processSteps = [
  {
    step: "01",
    title: "Discovery",
    color: "#5A42FF",
    timeline: "~3 days",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
    description:
      "We align on goals, users, constraints, and success criteria before we build.",
    deliverables: ["Project brief", "Scope map", "Technical direction"],
  },
  {
    step: "02",
    title: "Design",
    color: "#7C3AED",
    timeline: "~7 days",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&q=80&w=800",
    description:
      "Product flows and visual system get shaped into a clean, conversion-ready experience.",
    deliverables: ["Wireframes", "UI kit", "Interactive prototype"],
  },
  {
    step: "03",
    title: "Build",
    color: "#059669",
    timeline: "~14 days",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
    description:
      "Agile implementation with weekly demos, QA loops, and measurable progress.",
    deliverables: ["Working product", "QA reports", "Deployment-ready code"],
  },
  {
    step: "04",
    title: "Launch",
    color: "#EA580C",
    timeline: "~3 days",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800",
    description:
      "We ship production, monitor reliability, and optimize for post-launch growth.",
    deliverables: ["Production deployment", "Monitoring setup", "Launch checklist"],
  },
];

export const testimonials = [
  {
    quote:
      "They move fast, communicate clearly, and deliver production-ready code every sprint.",
    name: "Ayesha Khan",
    company: "FlowOrbit",
    initial: "A",
    color: "#5A42FF",
  },
  {
    quote:
      "wrkflowz turned our manual process into an AI automation system our team depends on daily.",
    name: "Ravi Menon",
    company: "PulseDesk",
    initial: "R",
    color: "#7C3AED",
  },
  {
    quote:
      "The team feels like an extension of our company, not an external vendor.",
    name: "Mina Saeed",
    company: "CartPilot",
    initial: "M",
    color: "#059669",
  },
];

export const socialLinks = [
  { label: "GitHub", href: "https://github.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com" },
  { label: "Twitter", href: "https://x.com" },
  { label: "Instagram", href: "https://www.instagram.com" },
];
