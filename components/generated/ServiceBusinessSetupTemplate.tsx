import ServiceHeroChart from "@/components/charts/ServiceHeroChart";

type ServiceData = {
  slug?: string;
  name: string;
  heroTitle: string;
  heroSubtitle: string;
  problems: unknown;
  solutions: unknown;
  processSteps: unknown;
  benefits: unknown;
};

export default function ServiceBusinessSetupTemplate({ service }: { service?: ServiceData }) {
  const isAiAutomation = service?.slug === "ai-automation";
  const problems = (service?.problems as string[] | undefined) || [
    "Too many tools",
    "No central system",
    "High operational costs",
  ];
  const solutions = (service?.solutions as string[] | undefined) || [
    "Project Management",
    "Smart Automation",
    "Reporting Dashboards",
  ];
  const process = (service?.processSteps as string[] | undefined) || [
    "Audit",
    "Design",
    "Build",
    "Deploy",
  ];
  const benefits = (service?.benefits as string[] | undefined) || [
    "Custom CRM & Pipeline",
    "Project Management Setup",
    "Client Portal Development",
    "5+ Core Automations",
    "Team Training Session",
    "30-Day Post-Launch Support",
  ];
  return (
    <>
      
      <main>
        {/* Section 1: Hero */}
        <section id="hero" className="relative pt-40 pb-20 px-6 overflow-hidden min-h-[800px] flex items-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-glow pointer-events-none"></div>
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div id="hero-content">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                {isAiAutomation ? "AI & Automation Services" : "Internal Systems for Companies"}
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-[1.1] tracking-tight">
                {service?.heroTitle || "Manual Processes Are Slowing You Down"}
              </h1>
              <p className="text-xl text-secondary mb-10 max-w-xl leading-relaxed">
                {service?.heroSubtitle || "We replace repetitive work with automated systems tailored to your operations."}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/book-call" className="bg-primary hover:bg-opacity-90 px-8 py-4 rounded-xl font-bold text-lg text-center transition-all glow-purple">
                  Book a Call
                </a>
                <div className="flex items-center gap-4 px-6 py-4 border border-border rounded-xl bg-card">
                  
                  <span className="text-sm text-secondary font-medium">
                    Trusted by 50+ scaling startups
                  </span>
                </div>
              </div>
            </div>
            <div id="hero-visual" className="relative">
              <div className="bg-card border border-border rounded-2xl p-4 glow-purple overflow-hidden">
                <div className="flex items-center justify-between mb-4 px-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/20"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/20"></div>
                  </div>
                  <div className="text-xs text-secondary bg-dark px-3 py-1 rounded border border-border">
                    Dashboard_v2.sys
                  </div>
                </div>
                <div id="hero-chart" className="h-[400px] w-full bg-dark rounded-xl">
                  <ServiceHeroChart />
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary p-6 rounded-2xl hidden md:block">
                <div className="text-3xl font-bold">
                  40%
                </div>
                <div className="text-sm opacity-80">
                  Efficiency Increase
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section 2: Problem & Solution */}
        <section id="problem-solution" className="py-24 px-6 bg-dark">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              <div id="problem" className="p-10 rounded-2xl border border-border bg-card/50">
                <h2 className="text-3xl font-bold mb-8">
                  The Inefficiency Tax
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center flex-shrink-0">
                      <i className="text-red-500" data-fa-i2svg="">
                        <svg className="svg-inline--fa fa-toolbox" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="toolbox" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                          <path fill="currentColor" d="M176 88v40H336V88c0-4.4-3.6-8-8-8H184c-4.4 0-8 3.6-8 8zm-48 40V88c0-30.9 25.1-56 56-56H328c30.9 0 56 25.1 56 56v40h28.1c12.7 0 24.9 5.1 33.9 14.1l51.9 51.9c9 9 14.1 21.2 14.1 33.9V304H384V288c0-17.7-14.3-32-32-32s-32 14.3-32 32v16H192V288c0-17.7-14.3-32-32-32s-32 14.3-32 32v16H0V227.9c0-12.7 5.1-24.9 14.1-33.9l51.9-51.9c9-9 21.2-14.1 33.9-14.1H128zM0 416V336H128v16c0 17.7 14.3 32 32 32s32-14.3 32-32V336H320v16c0 17.7 14.3 32 32 32s32-14.3 32-32V336H512v80c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64z"></path>
                        </svg>
                      </i>
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">
                        {problems[0] || "Too many tools"}
                      </h3>
                      <p className="text-secondary">
                        Subscribed to 15+ apps that don't talk to each other.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center flex-shrink-0">
                      <i className="text-red-500" data-fa-i2svg="">
                        <svg className="svg-inline--fa fa-database" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="database" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg="">
                          <path fill="currentColor" d="M448 80v48c0 44.2-100.3 80-224 80S0 172.2 0 128V80C0 35.8 100.3 0 224 0S448 35.8 448 80zM393.2 214.7c20.8-7.4 39.9-16.9 54.8-28.6V288c0 44.2-100.3 80-224 80S0 332.2 0 288V186.1c14.9 11.8 34 21.2 54.8 28.6C99.7 230.7 159.5 240 224 240s124.3-9.3 169.2-25.3zM0 346.1c14.9 11.8 34 21.2 54.8 28.6C99.7 390.7 159.5 400 224 400s124.3-9.3 169.2-25.3c20.8-7.4 39.9-16.9 54.8-28.6V432c0 44.2-100.3 80-224 80S0 476.2 0 432V346.1z"></path>
                        </svg>
                      </i>
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">
                        {problems[1] || "No central system"}
                      </h3>
                      <p className="text-secondary">
                        Data is siloed across spreadsheets, DMs, and emails.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center flex-shrink-0">
                      <i className="text-red-500" data-fa-i2svg="">
                        <svg className="svg-inline--fa fa-money-bill-trend-up" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="money-bill-trend-up" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                          <path fill="currentColor" d="M470.7 9.4c3 3.1 5.3 6.6 6.9 10.3s2.4 7.8 2.4 12.2l0 .1v0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32V109.3L310.6 214.6c-11.8 11.8-30.8 12.6-43.5 1.7L176 138.1 84.8 216.3c-13.4 11.5-33.6 9.9-45.1-3.5s-9.9-33.6 3.5-45.1l112-96c12-10.3 29.7-10.3 41.7 0l89.5 76.7L370.7 64H352c-17.7 0-32-14.3-32-32s14.3-32 32-32h96 0c8.8 0 16.8 3.6 22.6 9.3l.1 .1zM0 304c0-26.5 21.5-48 48-48H464c26.5 0 48 21.5 48 48V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V304zM48 416v48H96c0-26.5-21.5-48-48-48zM96 304H48v48c26.5 0 48-21.5 48-48zM464 416c-26.5 0-48 21.5-48 48h48V416zM416 304c0 26.5 21.5 48 48 48V304H416zm-96 80a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z"></path>
                        </svg>
                      </i>
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">
                        {problems[2] || "High operational costs"}
                      </h3>
                      <p className="text-secondary">
                        Paying for manual labor to do tasks that should be automated.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div id="solution" className="p-10 rounded-2xl border border-primary/20 bg-primary/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl"></div>
                <h2 className="text-3xl font-bold mb-8">
                  {isAiAutomation ? "How Automation Fixes This" : "A Unified OS"}
                </h2>
                {isAiAutomation ? (
                  <p className="text-secondary mb-8">
                    We remove repetitive execution by automating workflow handoffs, connecting your tools through APIs, and adding AI where decisions or enrichment are needed.
                  </p>
                ) : null}
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <i className="text-primary" data-fa-i2svg="">
                        <svg className="svg-inline--fa fa-check" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg="">
                          <path fill="currentColor" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path>
                        </svg>
                      </i>
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">
                        {solutions[0] || "Project Management"}
                      </h3>
                      <p className="text-secondary">
                        Custom-built workflows that match how your team actually works.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <i className="text-primary" data-fa-i2svg="">
                        <svg className="svg-inline--fa fa-robot" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="robot" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg="">
                          <path fill="currentColor" d="M320 0c17.7 0 32 14.3 32 32V96H472c39.8 0 72 32.2 72 72V440c0 39.8-32.2 72-72 72H168c-39.8 0-72-32.2-72-72V168c0-39.8 32.2-72 72-72H288V32c0-17.7 14.3-32 32-32zM208 384c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H208zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H304zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H400zM264 256a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm152 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80zM48 224H64V416H48c-26.5 0-48-21.5-48-48V272c0-26.5 21.5-48 48-48zm544 0c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H576V224h16z"></path>
                        </svg>
                      </i>
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">
                        {solutions[1] || "Smart Automation"}
                      </h3>
                      <p className="text-secondary">
                        Zero-touch data sync between your core business functions.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <i className="text-primary" data-fa-i2svg="">
                        <svg className="svg-inline--fa fa-chart-line" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chart-line" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                          <path fill="currentColor" d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V400c0 44.2 35.8 80 80 80H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z"></path>
                        </svg>
                      </i>
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">
                        {solutions[2] || "Reporting Dashboards"}
                      </h3>
                      <p className="text-secondary">
                        Real-time visibility into your business health and KPIs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section 3: Process */}
        <section id="process" className="py-24 px-6 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                Process: Audit to Deploy
              </h2>
              <p className="text-secondary text-lg max-w-2xl mx-auto">
                A clear implementation flow that takes automation from idea to live execution.
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-8 relative">
              <div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-border z-0"></div>
              {process.slice(0, 4).map((step, index) => (
                <div key={step} className="relative z-10 text-center group">
                  <div className="w-16 h-16 rounded-full bg-card border border-border flex items-center justify-center mx-auto mb-6 group-hover:border-primary group-hover:text-primary transition-all duration-300">
                    <span className="text-xl font-bold">{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="font-bold mb-2">{step}</h3>
                  <p className="text-sm text-secondary">
                    {index === 0
                      ? "Mapping workflow bottlenecks and repetitive tasks."
                      : index === 1
                        ? "Designing the right automation architecture."
                        : index === 2
                          ? "Building workflows, AI logic, and API integrations."
                          : "Deploying, validating, and handing over with documentation."}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Section 4: Pricing & Who it's for */}
        <section id="pricing" className="py-24 px-6 bg-dark">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1 space-y-8">
                <div>
                  <h2 className="text-4xl font-bold mb-6">
                    Designed for Growth
                  </h2>
                  <p className="text-secondary leading-relaxed">
                    {isAiAutomation
                      ? "Built for teams that need to automate operations without increasing headcount."
                      : "We specialize in helping high-growth organizations reclaim their time and focus on what matters."}
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border">
                    <i className="text-primary" data-fa-i2svg="">
                      <svg className="svg-inline--fa fa-building-user" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="building-user" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg="">
                        <path fill="currentColor" d="M48 0C21.5 0 0 21.5 0 48V464c0 26.5 21.5 48 48 48h96V432c0-26.5 21.5-48 48-48s48 21.5 48 48v80h89.9c-6.3-10.2-9.9-22.2-9.9-35.1c0-46.9 25.8-87.8 64-109.2V271.8 48c0-26.5-21.5-48-48-48H48zM64 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V240zm112-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V240zM80 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V112zM272 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16zM576 272a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM352 477.1c0 19.3 15.6 34.9 34.9 34.9H605.1c19.3 0 34.9-15.6 34.9-34.9c0-51.4-41.7-93.1-93.1-93.1H445.1c-51.4 0-93.1 41.7-93.1 93.1z"></path>
                      </svg>
                    </i>
                    <span className="font-medium">
                      Scaling Agencies
                    </span>
                  </div>
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border">
                    <i className="text-primary" data-fa-i2svg="">
                      <svg className="svg-inline--fa fa-rocket" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="rocket" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                        <path fill="currentColor" d="M156.6 384.9L125.7 354c-8.5-8.5-11.5-20.8-7.7-32.2c3-8.9 7-20.5 11.8-33.8L24 288c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7 .2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3l82.3 0c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8c13.4 72.9 9.3 194.8-111.4 276.7c-3.5 2.4-7.3 4.8-11.3 7.2v82.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1 .2s-12.1-12.2-12.1-20.9V380.8c-14.1 4.9-26.4 8.9-35.7 11.9c-11.2 3.6-23.4 .5-31.8-7.8zM384 168a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"></path>
                      </svg>
                    </i>
                    <span className="font-medium">
                      VC-Backed Startups
                    </span>
                  </div>
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border">
                    <i className="text-primary" data-fa-i2svg="">
                      <svg className="svg-inline--fa fa-briefcase" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="briefcase" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                        <path fill="currentColor" d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z"></path>
                      </svg>
                    </i>
                    <span className="font-medium">
                      Modern SMBs
                    </span>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-2">
                <div className="bg-card border-2 border-primary p-10 rounded-2xl relative overflow-hidden glow-purple">
                  <div className="absolute top-0 right-0 px-6 py-2 bg-primary text-sm font-bold rounded-bl-xl">
                    POPULAR
                  </div>
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">
                        Full Business Systems Setup
                      </h3>
                      <p className="text-secondary">
                        Comprehensive end-to-end transformation.
                      </p>
                    </div>
                    {/* <div className="text-right">
                      <div className="text-sm text-secondary">
                        Starting from
                      </div>
                      <div className="text-4xl font-bold text-white">
                        ₹50,000
                        <span className="text-xl font-normal text-secondary">
                          +
                        </span>
                      </div>
                    </div> */}
                  </div>
                  <div className="grid md:grid-cols-2 gap-6 mb-10">
                    <ul className="space-y-4">
                      <li className="flex items-center gap-3">
                        <i className="text-primary" data-fa-i2svg="">
                          <svg className="svg-inline--fa fa-circle-check" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                            <path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path>
                          </svg>
                        </i>
                        {benefits[0] || "Custom CRM & Pipeline"}
                      </li>
                      <li className="flex items-center gap-3">
                        <i className="text-primary" data-fa-i2svg="">
                          <svg className="svg-inline--fa fa-circle-check" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                            <path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path>
                          </svg>
                        </i>
                        {benefits[1] || "Project Management Setup"}
                      </li>
                      <li className="flex items-center gap-3">
                        <i className="text-primary" data-fa-i2svg="">
                          <svg className="svg-inline--fa fa-circle-check" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                            <path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path>
                          </svg>
                        </i>
                        {benefits[2] || "Client Portal Development"}
                      </li>
                    </ul>
                    <ul className="space-y-4">
                      <li className="flex items-center gap-3">
                        <i className="text-primary" data-fa-i2svg="">
                          <svg className="svg-inline--fa fa-circle-check" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                            <path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path>
                          </svg>
                        </i>
                        {benefits[3] || "5+ Core Automations"}
                      </li>
                      <li className="flex items-center gap-3">
                        <i className="text-primary" data-fa-i2svg="">
                          <svg className="svg-inline--fa fa-circle-check" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                            <path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path>
                          </svg>
                        </i>
                        {benefits[4] || "Team Training Session"}
                      </li>
                      <li className="flex items-center gap-3">
                        <i className="text-primary" data-fa-i2svg="">
                          <svg className="svg-inline--fa fa-circle-check" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                            <path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path>
                          </svg>
                        </i>
                        {benefits[5] || "30-Day Post-Launch Support"}
                      </li>
                    </ul>
                  </div>
                  <a href="/book-call" className="block w-full bg-primary hover:bg-opacity-90 py-5 rounded-xl text-center font-bold text-xl transition-all">
                    Get Started with a Strategy Call
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section 5: FAQ & Final CTA */}
        <section id="cta" className="py-24 px-6 relative overflow-hidden">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-glow pointer-events-none opacity-50"></div>
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-20 items-start">
              <div>
                <h2 className="text-4xl font-bold mb-10">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  <details className="group bg-card border border-border rounded-xl p-6">
                    <summary className="font-bold cursor-pointer list-none flex justify-between items-center">
                      How long does a typical setup take?
                      <i className="text-secondary group-open:rotate-180 transition-transform" data-fa-i2svg="">
                        <svg className="svg-inline--fa fa-chevron-down" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                          <path fill="currentColor" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path>
                        </svg>
                      </i>
                    </summary>
                    <p className="text-secondary mt-4">
                      Depending on complexity, most projects are completed within 4 to 8 weeks from the audit phase to deployment.
                    </p>
                  </details>
                  <details className="group bg-card border border-border rounded-xl p-6">
                    <summary className="font-bold cursor-pointer list-none flex justify-between items-center">
                      Do we need to buy new software?
                      <i className="text-secondary group-open:rotate-180 transition-transform" data-fa-i2svg="">
                        <svg className="svg-inline--fa fa-chevron-down" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                          <path fill="currentColor" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path>
                        </svg>
                      </i>
                    </summary>
                    <p className="text-secondary mt-4">
                      Not necessarily. We first audit your current stack to see what can be optimized or consolidated. We only recommend new tools if they provide significant ROI.
                    </p>
                  </details>
                  <details className="group bg-card border border-border rounded-xl p-6">
                    <summary className="font-bold cursor-pointer list-none flex justify-between items-center">
                      Is there a recurring fee?
                      <i className="text-secondary group-open:rotate-180 transition-transform" data-fa-i2svg="">
                        <svg className="svg-inline--fa fa-chevron-down" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                          <path fill="currentColor" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path>
                        </svg>
                      </i>
                    </summary>
                    <p className="text-secondary mt-4">
                      We charge a one-time project fee for development. You will only pay for your own software subscriptions (e.g., Notion, Zapier, Airtable) directly to the providers.
                    </p>
                  </details>
                </div>
              </div>
              <div className="bg-card border border-border p-12 rounded-2xl text-center relative z-10">
                <h2 className="text-4xl font-bold mb-6">
                  Start Your Project
                </h2>
                <p className="text-secondary text-lg mb-10">
                  Book a 30-minute strategy call to audit your current business systems and discover your scaling potential.
                </p>
                <div className="space-y-6">
                  <a href="/book-call" className="block bg-primary hover:bg-opacity-90 py-5 rounded-xl font-bold text-xl transition-all glow-purple">
                    Book a Call
                  </a>
                  <p className="text-sm text-secondary">
                    <i className="mr-2" data-fa-i2svg="">
                      <svg className="svg-inline--fa fa-calendar-check" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="calendar-check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg="">
                        <path fill="currentColor" d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zM329 305c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-95 95-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L329 305z"></path>
                      </svg>
                    </i>
                    Next available slot: Tomorrow, 10:00 AM
                  </p>
                </div>
                <div className="mt-12 pt-12 border-t border-border grid grid-cols-3 gap-4">
                  <div>
                    <div className="text-2xl font-bold">
                      100+
                    </div>
                    <div className="text-xs text-secondary">
                      Automations Built
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">
                      ₹5M+
                    </div>
                    <div className="text-xs text-secondary">
                      Client Savings
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">
                      24/7
                    </div>
                    <div className="text-xs text-secondary">
                      System Monitoring
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
    </>
  );
}
