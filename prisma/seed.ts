import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const connectionString = process.env.DATABASE_URL || "";
const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

async function main() {
  const adminPasswordHash = await bcrypt.hash("admin12345", 10);

  await prisma.user.upsert({
    where: { email: "admin@astrabytesolutions.com" },
    update: {},
    create: {
      email: "admin@astrabytesolutions.com",
      name: "Astrabyte Admin",
      passwordHash: adminPasswordHash,
      role: "admin",
    },
  });

  const services = [
    {
      name: "Operations Optimization",
      slug: "operations-optimization",
      heroTitle: "Optimize Operations with System Thinking",
      heroSubtitle: "We redesign workflows and operating systems to improve efficiency, reduce dependency on individuals, and drive predictable execution.",
      problems: ["Team inefficiency", "No clear workflows", "Dependency on people"],
      solutions: ["Business efficiency design", "Process redesign", "System thinking implementation"],
      processSteps: ["Audit", "Design", "Build", "Deploy"],
      benefits: ["Increase business efficiency", "Standardize workflows", "Reduce operational risk", "Run a system-driven business"],
    },
    {
      name: "AI & Automation",
      slug: "ai-automation",
      heroTitle: "Automate Repetitive Work. Scale With Accuracy.",
      heroSubtitle: "We build AI automation systems that remove manual workload, reduce errors, and free your team for higher-value execution.",
      problems: ["Manual repetitive work", "Time waste across handoffs", "Frequent human errors"],
      solutions: ["Workflow automation", "AI integrations", "API connections"],
      processSteps: ["Audit", "Design", "Build", "Deploy"],
      benefits: ["Save hours weekly", "Reduce operational cost", "Improve execution accuracy"],
    },
    {
      name: "Custom Development",
      slug: "custom-development",
      heroTitle: "Custom Systems Built for Your Exact Workflow",
      heroSubtitle: "We build dashboards, internal tools, and web apps that remove operational friction and improve execution speed.",
      problems: ["Excel chaos", "Disconnected tools", "Manual tracking"],
      solutions: ["Dashboards", "Internal tools", "Web apps"],
      processSteps: ["Audit", "Design", "Build", "Deploy"],
      benefits: ["Save hours weekly", "Reduce operational overhead", "Improve accuracy", "Scale execution with clarity"],
    },
    {
      name: "SaaS Product Development",
      slug: "saas-product-development",
      heroTitle: "From Idea to MVP, Built to Scale",
      heroSubtitle: "We build SaaS products with strong product thinking, scalable architecture, and fast execution from day one.",
      problems: ["Idea stuck", "No tech team", "Slow execution"],
      solutions: ["MVP development", "Scalable architecture", "Product thinking"],
      processSteps: ["Audit", "Design", "Build", "Deploy"],
      benefits: ["Launch fast", "Scale later with confidence", "Ship with clear product direction", "Reduce rework and technical debt"],
    },
  ] as const;

  await prisma.service.deleteMany({
    where: {
      slug: {
        in: ["business-system-setup", "workflow-automation", "internal-tool-development", "platform-and-app-development"],
      },
    },
  });

  for (const service of services) {
    await prisma.service.upsert({
      where: { slug: service.slug },
      update: service,
      create: service,
    });
  }

  const products = [
    {
      name: "InsightFlow",
      slug: "insightflow",
      description: "Dashboard system that turns operational data into decision-ready visibility.",
      features: ["Project Management", "Task Tracking", "Meeting Notes", "Workflow Reporting"],
      useCases: ["Agencies", "Startups", "Operations Teams"],
      pricing: "Starting at $100/month",
      cta: "Request Demo",
    },
    {
      name: "AutoOps",
      slug: "autoops",
      description: "Automation tool to execute repetitive operations across your stack.",
      features: ["No-code workflows", "API connectors", "Automated routing", "Ops alerts"],
      useCases: ["SMEs", "Support teams", "Back-office operations"],
      pricing: "Starting at $100/month",
      cta: "Request Demo",
    },
    {
      name: "SecureGate",
      slug: "securegate",
      description: "Internal access and workflow governance platform for operations teams.",
      features: ["Role access", "Activity tracking", "Approval workflows", "Policy templates"],
      useCases: ["Enterprise teams", "Compliance-heavy workflows", "Internal operations"],
      pricing: "Starting at $100/month",
      cta: "Request Demo",
    },
  ] as const;

  for (const product of products) {
    await prisma.product.upsert({
      where: { slug: product.slug },
      update: product,
      create: product,
    });
  }

  const blogs = [
    {
      title: "How to Automate Business Operations",
      slug: "ai-driven-workflow-automation",
      category: "Automation",
      featuredImage: "/assets/images/88b641cabf-14e1efdecde6f9ceb55d.png",
      seoTitle: "How to Automate Business Operations",
      seoDescription: "A practical framework to automate repetitive workflows and reduce operational overhead.",
      content: {
        intro: "Automation starts with identifying high-friction manual work.",
        problem: "Disconnected tools and repetitive execution slow teams down.",
        explanation: "System-first architecture aligns data, ownership, and execution.",
        solution: "Build workflows with APIs, events, and automated handoffs.",
        steps: ["Audit current flow", "Design automation map", "Implement core workflows", "Optimize with metrics"],
        cta: "Book a strategy call to design your automation roadmap.",
      },
    },
    {
      title: "Best Internal Tools for Startups",
      slug: "bulletproof-operations-manual",
      category: "Systems",
      featuredImage: "/assets/images/c143f89846-9d57645c85ea395d9c1c.png",
      seoTitle: "Best Internal Tools for Startups",
      seoDescription: "Key internal systems startups need to reduce manual work and scale operations.",
      content: {
        intro: "Startups need systems that support speed without adding complexity.",
        problem: "Tool sprawl creates process debt early.",
        explanation: "Internal systems reduce handoffs and preserve execution quality.",
        solution: "Use dashboards, task systems, and automation-first operations.",
        steps: ["Define core workflows", "Pick source of truth", "Automate repetitive actions", "Measure operational KPIs"],
        cta: "Request a systems audit for your startup.",
      },
    },
    {
      title: "Reduce Operational Cost with Automation",
      slug: "scaling-saas-without-headcount",
      category: "Efficiency",
      featuredImage: "/assets/images/a3e207a767-9dc8e5a734ab144705d4.png",
      seoTitle: "Reduce Operational Cost with Automation",
      seoDescription: "How to cut operational costs by automating repetitive workflows and improving process visibility.",
      content: {
        intro: "Most operational costs hide in repetitive manual work.",
        problem: "Teams spend high-value time on low-value execution.",
        explanation: "Automation redirects effort to strategic activities.",
        solution: "Prioritize high-frequency bottlenecks and automate in phases.",
        steps: ["Calculate manual effort", "Select top bottlenecks", "Automate and monitor", "Iterate for ROI"],
        cta: "Book a call to identify your highest ROI automations.",
      },
    },
    {
      title: "Build Systems, Not Stacks",
      slug: "build-systems-not-stacks",
      category: "Systems",
      featuredImage: "/assets/images/2c7df75143-f8fa93d68b6772cf7ba3.png",
      seoTitle: "Build Systems, Not Stacks",
      seoDescription: "How to design a system-first operation instead of growing tool sprawl.",
      content: {
        intro: "System design beats tool accumulation.",
        problem: "Stack sprawl creates process fragility.",
        solution: "Map workflows first, then select tools.",
        steps: ["Map process", "Define ownership", "Consolidate tools"],
      },
    },
    {
      title: "Automation ROI Playbook",
      slug: "automation-roi-playbook",
      category: "Automation",
      featuredImage: "/assets/images/eb75de1da1-e6766cee251805c746ef.png",
      seoTitle: "Automation ROI Playbook",
      seoDescription: "A practical model to prioritize and measure automation outcomes.",
      content: {
        intro: "Measure ROI before scaling automations.",
        problem: "Teams automate too late or too broadly.",
        solution: "Prioritize by frequency, effort, and business impact.",
        steps: ["Baseline effort", "Prioritize candidates", "Measure outcomes"],
      },
    },
    {
      title: "Workflow Mapping for Operations Teams",
      slug: "logistics-case-study",
      category: "Case Studies",
      featuredImage: "/assets/images/a3e207a767-9dc8e5a734ab144705d4.png",
      seoTitle: "Workflow Mapping for Operations Teams",
      seoDescription: "A case-style workflow mapping approach for operations teams.",
      content: { intro: "Map before automating.", problem: "No process visibility.", solution: "Process mapping + automation blueprint", steps: ["Capture", "Diagnose", "Automate"] },
    },
    {
      title: "Build Systems That Scale with You",
      slug: "exit-ready-business-framework",
      category: "Systems",
      featuredImage: "/assets/images/c143f89846-9d57645c85ea395d9c1c.png",
      seoTitle: "Build Systems That Scale with You",
      seoDescription: "Design operational systems that scale with your team and revenue.",
      content: { intro: "Scalability requires structure.", problem: "Growth amplifies process debt.", solution: "Build repeatable operational systems.", steps: ["Define", "Document", "Automate"] },
    },
  ] as const;

  for (const blog of blogs) {
    await prisma.blog.upsert({
      where: { slug: blog.slug },
      update: blog,
      create: blog,
    });
  }

  const uniqueCategories = Array.from(new Set(blogs.map((b) => b.category)));
  for (const category of uniqueCategories) {
    const slug = category.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
    await prisma.blogCategory.upsert({
      where: { slug },
      update: { name: category },
      create: { name: category, slug },
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
