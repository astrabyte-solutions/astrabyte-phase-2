export type Service = { slug: string; title: string; summary: string; body: string; faqs: { question: string; answer: string }[] };
export type Product = { slug: string; title: string; summary: string; description: string; image: string; category: string };
export type BlogPost = { slug: string; title: string; excerpt: string; content: string; date: string; author: string };

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/blog", label: "Blog" },
];

export const SERVICES: Service[] = [
  { slug: "internal-tool-development", title: "Internal Tool Development", summary: "Custom dashboards and software for internal operations.", body: "We build role-based platforms connecting CRM, finance, and delivery workflows.", faqs: [{ question: "How long does delivery take?", answer: "Most projects launch in 4-8 weeks." }, { question: "Can you migrate spreadsheet workflows?", answer: "Yes. We migrate and harden existing processes." }] },
  { slug: "workflow-automation", title: "Workflow Automation", summary: "Automate repetitive tasks across your stack.", body: "We connect apps through event-driven automations with retry and observability.", faqs: [{ question: "Do you work with no-code tools?", answer: "Yes, where they are the best fit." }, { question: "How do you monitor jobs?", answer: "We ship logs, alerts, and fallback flows." }] },
  { slug: "platform-and-app-development", title: "Platform and App Development", summary: "Scalable SaaS and internal platforms.", body: "We engineer robust systems with long-term maintainability and performance.", faqs: [{ question: "Can this scale to enterprise?", answer: "Yes, architecture supports incremental scale." }, { question: "Do you support post-launch?", answer: "Yes, through optimization retainers." }] },
  { slug: "business-system-setup", title: "Business System Setup", summary: "Complete operating system setup for modern teams.", body: "We define your workflow architecture, system roles, and reporting visibility in one implementation.", faqs: [{ question: "Can this work with our existing tools?", answer: "Yes, we integrate current tools first and replace selectively when needed." }, { question: "Do you provide onboarding?", answer: "Yes, every setup includes team onboarding and handover documentation." }] },
];

export const PRODUCTS: Product[] = [
  { slug: "insightflow", title: "InsightFlow", summary: "Unified BI dashboard", description: "Consolidate metrics from your business systems into a single decision layer.", image: "https://images.unsplash.com/photo-1551281044-8b0f3f8f0f5f", category: "Analytics" },
  { slug: "autoops", title: "AutoOps", summary: "Operations automation engine", description: "Automate onboarding, billing, and operations workflows with reliability.", image: "https://images.unsplash.com/photo-1518770660439-4636190af475", category: "Automation" },
  { slug: "securegate", title: "SecureGate", summary: "Centralized access control", description: "Manage roles and access policies for internal systems from one command center.", image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3", category: "Security" },
];

export const BLOG_POSTS: BlogPost[] = [
  { slug: "build-systems-not-stacks", title: "Build Systems, Not Stacks", excerpt: "How growing teams reduce software sprawl.", content: "Tool sprawl slows execution. Strong operating systems align process, data, and ownership.", date: "2026-03-01", author: "AstraByte Editorial" },
  { slug: "automation-roi-playbook", title: "Automation ROI Playbook", excerpt: "A framework to prioritize high-impact automations.", content: "Start with repetitive high-volume operations and score by cost of delay and implementation effort.", date: "2026-03-14", author: "AstraByte Engineering" },
];
