import { EfficiencyChart, OutcomeChart } from "@/components/charts/HomeCharts";
import Link from "next/link";

export default function HomeTemplate() {
  return (
    <>
      {/* Header */}
      
      <main>
        {/* Hero Section */}
        <section id="hero" className="relative pt-24 pb-24 px-6 overflow-hidden min-h-[850px] flex items-center">
          <div className="purple-glow -top-20 -right-20"></div>
          <div className="purple-glow top-1/2 -left-40"></div>
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold mb-6 tracking-wider uppercase">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Built for Teams Scaling Fast
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-8">
                Scale Faster.
                <span className="text-primary">
                  <br />Operate Smarter.
                </span>
              </h1>
              <p className="text-xl text-secondary mb-10 leading-relaxed max-w-xl">
                We design AI systems, software, and operations that remove bottlenecks and increase revenue capacity.
              </p>
              <ul className="mb-10 space-y-3 text-sm text-secondary">
                <li className="flex items-center gap-2">✔ Automate repetitive workflows in weeks, not quarters</li>
                <li className="flex items-center gap-2">✔ Build custom systems your team actually uses</li>
                <li className="flex items-center gap-2">✔ Turn messy operations into measurable growth</li>
                <li className="flex items-center gap-2">✔ Ship secure systems that scale cleanly</li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/book-call" className="bg-primary hover:scale-105 px-8 py-4 rounded-xl text-lg font-bold transition-all flex items-center justify-center gap-2">
                  Book a Strategy Call
                  <i className="text-sm" data-fa-i2svg="">
                    <svg className="svg-inline--fa fa-arrow-right" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg="">
                      <path fill="currentColor" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path>
                    </svg>
                  </i>
                </Link>
                <Link href="/services" className="border border-border hover:bg-card px-8 py-4 rounded-xl text-lg font-bold transition-all text-secondary hover:text-white">
                  View Services
                </Link>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full group-hover:bg-primary/30 transition-all"></div>
              <div className="relative bg-card border border-border p-4 rounded-2xl shadow-2xl overflow-hidden">
                <img className="w-full h-auto max-h-[500px] object-contain rounded-xl" src="/assets/images/47e57262c6-423487fc2ee12486f581.png" alt="modern dashboard interface for business automation with dark glassmorphism and purple accents" />
              </div>
              <div className="mt-10 flex items-center gap-8 grayscale opacity-50">
                <div className="flex flex-col">
                  <span className="text-2xl font-bold">
                    50+
                  </span>
                  <span className="text-xs text-secondary uppercase tracking-widest">
                    Founders & Teams
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold">
                    200+
                  </span>
                  <span className="text-xs text-secondary uppercase tracking-widest">
                    Workflows Shipped
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold">
                    40%
                  </span>
                  <span className="text-xs text-secondary uppercase tracking-widest">
                    Ops Lift Potential
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="solutions" className="py-20 px-6 bg-[#080808]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
                End-to-End Execution for <br />
                <span className="text-primary">
                  High-Growth Operations
                </span>
              </h2>
              <p className="text-secondary max-w-2xl mx-auto">
                Four focused capabilities for startup founders, agencies, and SMEs.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-surface border border-border p-8 rounded-2xl hover:border-primary/50 transition-colors group">
                <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center mb-6 text-red-500">
                  <i className="text-xl" data-fa-i2svg="">
                    <svg className="svg-inline--fa fa-link-slash" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="link-slash" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg="">
                      <path fill="currentColor" d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L489.3 358.2l90.5-90.5c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114l-96 96-31.9-25C430.9 239.6 420.1 175.1 377 132c-52.2-52.3-134.5-56.2-191.3-11.7L38.8 5.1zM239 162c30.1-14.9 67.7-9.9 92.8 15.3c20 20 27.5 48.3 21.7 74.5L239 162zM116.6 187.9L60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5l61.8-61.8-50.6-39.9zM220.9 270c-2.1 39.8 12.2 80.1 42.2 110c38.9 38.9 94.4 51 143.6 36.3L220.9 270z"></path>
                    </svg>
                  </i>
                </div>
                <h3 className="text-xl font-bold mb-4">
                  AI & Automation
                </h3>
                <p className="text-secondary text-sm leading-relaxed">
                  Replace manual tasks with AI-driven workflows that cut delays and lower overhead.
                </p>
              </div>
              <div className="bg-surface border border-border p-8 rounded-2xl hover:border-primary/50 transition-colors group">
                <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-6 text-orange-500">
                  <i className="text-xl" data-fa-i2svg="">
                    <svg className="svg-inline--fa fa-hand-pointer" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="hand-pointer" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg="">
                      <path fill="currentColor" d="M128 40c0-22.1 17.9-40 40-40s40 17.9 40 40V188.2c8.5-7.6 19.7-12.2 32-12.2c20.6 0 38.2 13 45 31.2c8.8-9.3 21.2-15.2 35-15.2c25.3 0 46 19.5 47.9 44.3c8.5-7.7 19.8-12.3 32.1-12.3c26.5 0 48 21.5 48 48v48 16 48c0 70.7-57.3 128-128 128l-16 0H240l-.1 0h-5.2c-5 0-9.9-.3-14.7-1c-55.3-5.6-106.2-34-140-79L8 336c-13.3-17.7-9.7-42.7 8-56s42.7-9.7 56 8l56 74.7V40zM240 304c0-8.8-7.2-16-16-16s-16 7.2-16 16v96c0 8.8 7.2 16 16 16s16-7.2 16-16V304zm48-16c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16s16-7.2 16-16V304c0-8.8-7.2-16-16-16zm80 16c0-8.8-7.2-16-16-16s-16 7.2-16 16v96c0 8.8 7.2 16 16 16s16-7.2 16-16V304z"></path>
                    </svg>
                  </i>
                </div>
                <h3 className="text-xl font-bold mb-4">
                  Custom Development
                </h3>
                <p className="text-secondary text-sm leading-relaxed">
                  Build internal tools and platforms tailored to your exact workflow.
                </p>
              </div>
              <div className="bg-surface border border-border p-8 rounded-2xl hover:border-primary/50 transition-colors group">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary">
                  <i className="text-xl" data-fa-i2svg="">
                    <svg className="svg-inline--fa fa-eye-slash" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="eye-slash" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg="">
                      <path fill="currentColor" d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"></path>
                    </svg>
                  </i>
                </div>
                <h3 className="text-xl font-bold mb-4">
                  SaaS Product Development
                </h3>
                <p className="text-secondary text-sm leading-relaxed">
                  Launch scalable SaaS products with strong UX and fast iteration cycles.
                </p>
              </div>
            </div>
            <div className="mt-20 bg-surface border border-border rounded-3xl overflow-hidden">
              <div className="grid lg:grid-cols-2">
                <div className="p-12 lg:p-20">
                  <h2 className="text-3xl font-bold mb-8">
                    Why Teams Choose
                    <br />Astrabyte Solutions
                  </h2>
                  <ul className="space-y-6">
                    <li className="flex gap-4">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center mt-1">
                        <i className="text-[10px] text-white" data-fa-i2svg="">
                          <svg className="svg-inline--fa fa-check" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg="">
                            <path fill="currentColor" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path>
                          </svg>
                        </i>
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">
                          Senior Execution Only
                        </h4>
                        <p className="text-sm text-secondary">
                          No bloated handoffs. Direct ownership from strategy to launch.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center mt-1">
                        <i className="text-[10px] text-white" data-fa-i2svg="">
                          <svg className="svg-inline--fa fa-check" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg="">
                            <path fill="currentColor" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path>
                          </svg>
                        </i>
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">
                          Business-First Build
                        </h4>
                        <p className="text-sm text-secondary">
                          Every feature maps to outcomes, not vanity scope.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center mt-1">
                        <i className="text-[10px] text-white" data-fa-i2svg="">
                          <svg className="svg-inline--fa fa-check" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg="">
                            <path fill="currentColor" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path>
                          </svg>
                        </i>
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">
                          Built to Scale
                        </h4>
                        <p className="text-sm text-secondary">
                          Architecture designed for growth, not temporary fixes.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="bg-primary/5 p-12 flex items-center justify-center">
                  <div className="w-full h-full max-h-[400px]">
                    <EfficiencyChart />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Problem & Core Positioning */}
        <section id="solutions" className="py-24 px-6 bg-dark">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-20 mb-32 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  Trusted by Founders and Operators
                </h2>
                <p className="text-lg text-secondary leading-relaxed mb-8">
                  We partner with startup teams, agencies, and SMEs building serious companies.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="p-4 rounded-xl bg-card border border-border">
                    <div className="text-primary text-2xl font-bold mb-1">
                      40%
                    </div>
                    <div className="text-xs text-secondary uppercase tracking-widest">
                      Execution Speedup
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-card border border-border">
                    <div className="text-primary text-2xl font-bold mb-1">
                      $12k+
                    </div>
                    <div className="text-xs text-secondary uppercase tracking-widest">
                      Revenue Capacity Focus
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-card border border-border p-8 rounded-2xl">
                <h2 className="text-3xl font-bold mb-6">
                  How It Works
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-white">
                    <i className="text-primary" data-fa-i2svg="">
                      <svg className="svg-inline--fa fa-circle-check" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                        <path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path>
                      </svg>
                    </i>
                    Step 1 - Audit systems, workflows, and blockers
                  </li>
                  <li className="flex items-center gap-3 text-white">
                    <i className="text-primary" data-fa-i2svg="">
                      <svg className="svg-inline--fa fa-circle-check" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                        <path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path>
                      </svg>
                    </i>
                    Step 2 - Prioritize high-impact wins with clear ROI
                  </li>
                  <li className="flex items-center gap-3 text-white">
                    <i className="text-primary" data-fa-i2svg="">
                      <svg className="svg-inline--fa fa-circle-check" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                        <path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path>
                      </svg>
                    </i>
                    Step 3 - Build and deploy in rapid execution cycles
                  </li>
                  <li className="flex items-center gap-3 text-white">
                    <i className="text-primary" data-fa-i2svg="">
                      <svg className="svg-inline--fa fa-circle-check" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                        <path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path>
                      </svg>
                    </i>
                    Step 4 - Optimize continuously using live data
                  </li>
                </ul>
              </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div id="sol-1" className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all group">
                <i className="text-3xl text-primary mb-6" data-fa-i2svg="">
                  <svg className="svg-inline--fa fa-microchip" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="microchip" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                    <path fill="currentColor" d="M176 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64c-35.3 0-64 28.7-64 64H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H64v56H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H64v56H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H64c0 35.3 28.7 64 64 64v40c0 13.3 10.7 24 24 24s24-10.7 24-24V448h56v40c0 13.3 10.7 24 24 24s24-10.7 24-24V448h56v40c0 13.3 10.7 24 24 24s24-10.7 24-24V448c35.3 0 64-28.7 64-64h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H448V280h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H448V176h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H448c0-35.3-28.7-64-64-64V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H280V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H176V24zM160 128H352c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32zm192 32H160V352H352V160z"></path>
                  </svg>
                </i>
                <h3 className="text-xl font-bold mb-4">
                  AI & Automation
                </h3>
                <p className="text-secondary text-sm leading-relaxed">
                  Replace repetitive tasks with AI workflows and API automation.
                </p>
              </div>
              <div id="sol-2" className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all group">
                <i className="text-3xl text-primary mb-6" data-fa-i2svg="">
                  <svg className="svg-inline--fa fa-bolt" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bolt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg="">
                    <path fill="currentColor" d="M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288H175.5L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H272.5L349.4 44.6z"></path>
                  </svg>
                </i>
                <h3 className="text-xl font-bold mb-4">
                  Custom Development
                </h3>
                <p className="text-secondary text-sm leading-relaxed">
                  Build custom software that matches your operating model.
                </p>
              </div>
              <div id="sol-3" className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all group">
                <i className="text-3xl text-primary mb-6" data-fa-i2svg="">
                  <svg className="svg-inline--fa fa-hammer" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="hammer" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg="">
                    <path fill="currentColor" d="M413.5 237.5c-28.2 4.8-58.2-3.6-80-25.4l-38.1-38.1C280.4 159 272 138.8 272 117.6V105.5L192.3 62c-5.3-2.9-8.6-8.6-8.3-14.7s3.9-11.5 9.5-14l47.2-21C259.1 4.2 279 0 299.2 0h18.1c36.7 0 72 14 98.7 39.1l44.6 42c24.2 22.8 33.2 55.7 26.6 86L503 183l8-8c9.4-9.4 24.6-9.4 33.9 0l24 24c9.4 9.4 9.4 24.6 0 33.9l-88 88c-9.4 9.4-24.6 9.4-33.9 0l-24-24c-9.4-9.4-9.4-24.6 0-33.9l8-8-17.5-17.5zM27.4 377.1L260.9 182.6c3.5 4.9 7.5 9.6 11.8 14l38.1 38.1c6 6 12.4 11.2 19.2 15.7L134.9 484.6c-14.5 17.4-36 27.4-58.6 27.4C34.1 512 0 477.8 0 435.7c0-22.6 10.1-44.1 27.4-58.6z"></path>
                  </svg>
                </i>
                <h3 className="text-xl font-bold mb-4">
                  SaaS Product Development
                </h3>
                <p className="text-secondary text-sm leading-relaxed">
                  Ship SaaS products with scalable architecture and clean UX.
                </p>
              </div>
              <div id="sol-4" className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all group">
                <i className="text-3xl text-primary mb-6" data-fa-i2svg="">
                  <svg className="svg-inline--fa fa-rocket" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="rocket" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                    <path fill="currentColor" d="M156.6 384.9L125.7 354c-8.5-8.5-11.5-20.8-7.7-32.2c3-8.9 7-20.5 11.8-33.8L24 288c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7 .2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3l82.3 0c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8c13.4 72.9 9.3 194.8-111.4 276.7c-3.5 2.4-7.3 4.8-11.3 7.2v82.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1 .2s-12.1-12.2-12.1-20.9V380.8c-14.1 4.9-26.4 8.9-35.7 11.9c-11.2 3.6-23.4 .5-31.8-7.8zM384 168a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"></path>
                  </svg>
                </i>
                <h3 className="text-xl font-bold mb-4">
                  Operations Optimization
                </h3>
                <p className="text-secondary text-sm leading-relaxed">
                  Redesign workflows and reporting to increase team throughput.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="trusted-by" className="py-16 px-6 border-y border-border bg-cardLight/20">
          <div className="max-w-7xl mx-auto">
            <p className="text-center text-xs text-secondary uppercase tracking-[0.25em] mb-8">
              Trusted by teams at
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {[
                "MAKETRONICS",
                "JUSTSPORTSBLOGS",
                "ELGC",
                "ELGC PROPERTIES",
                "SURENDERA PULSES",
                "AGRIKING AGROTECH",
                "THE IDENTIPEDIA",
                "MTTV INDIA",
                "ABU DHABI MUAY THAI",
                "FEMMETIMES"
              ].map((name) => (
                <div
                  key={name}
                  className="rounded-xl border border-border/70 bg-surface/40 px-4 py-5 text-center text-lg md:text-xl font-semibold text-white/85 tracking-wide"
                >
                  {name}
                </div>
              ))}
            </div>
            <p className="text-center text-secondary uppercase tracking-[0.2em] mt-8">
              MANY MORE ...
            </p>
          </div>
        </section>
        {/* Process Section */}
        <section id="process" className="py-24 px-6 bg-cardLight/30 border-y border-border relative">
          <div className="purple-glow bottom-0 right-0 opacity-50"></div>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-bold mb-4">
                Execution Framework
              </h2>
              <p className="text-secondary max-w-2xl mx-auto">
                A clear four-step system for predictable, high-impact delivery.
              </p>
            </div>
            <div className="grid lg:grid-cols-4 gap-8">
              <div className="relative text-center">
                <div className="text-primary font-bold text-6xl opacity-10 mb-4">
                  01
                </div>
                <h4 className="text-lg font-bold mb-3">
                  Discover
                </h4>
                <p className="text-secondary text-sm leading-relaxed">
                  Audit systems, workflows, and bottlenecks.
                </p>
              </div>
              <div className="relative text-center">
                <div className="text-primary font-bold text-6xl opacity-10 mb-4">
                  02
                </div>
                <h4 className="text-lg font-bold mb-3">
                  Prioritize
                </h4>
                <p className="text-secondary text-sm leading-relaxed">
                  Rank opportunities by ROI and urgency.
                </p>
              </div>
              <div className="relative text-center">
                <div className="text-primary font-bold text-6xl opacity-10 mb-4">
                  03
                </div>
                <h4 className="text-lg font-bold mb-3">
                  Deliver
                </h4>
                <p className="text-secondary text-sm leading-relaxed">
                  Build, integrate, and deploy with speed.
                </p>
              </div>
              <div className="relative text-center">
                <div className="text-primary font-bold text-6xl opacity-10 mb-4">
                  04
                </div>
                <h4 className="text-lg font-bold mb-3">
                  Scale
                </h4>
                <p className="text-secondary text-sm leading-relaxed">
                  Measure, refine, and compound outcomes.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Outcomes & Charts */}
        <section id="outcomes" className="py-24 px-6 bg-dark">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-8">
                  Why High-Growth Teams Pick Us
                </h2>
                <div className="space-y-8">
                  <div className="flex gap-6">
                    <div className="w-12 h-12 shrink-0 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                      <i data-fa-i2svg="">
                        <svg className="svg-inline--fa fa-dollar-sign" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="dollar-sign" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg="">
                          <path fill="currentColor" d="M160 0c17.7 0 32 14.3 32 32V67.7c1.6 .2 3.1 .4 4.7 .7c.4 .1 .7 .1 1.1 .2l48 8.8c17.4 3.2 28.9 19.9 25.7 37.2s-19.9 28.9-37.2 25.7l-47.5-8.7c-31.3-4.6-58.9-1.5-78.3 6.2s-27.2 18.3-29 28.1c-2 10.7-.5 16.7 1.2 20.4c1.8 3.9 5.5 8.3 12.8 13.2c16.3 10.7 41.3 17.7 73.7 26.3l2.9 .8c28.6 7.6 63.6 16.8 89.6 33.8c14.2 9.3 27.6 21.9 35.9 39.5c8.5 17.9 10.3 37.9 6.4 59.2c-6.9 38-33.1 63.4-65.6 76.7c-13.7 5.6-28.6 9.2-44.4 11V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V445.1c-.4-.1-.9-.1-1.3-.2l-.2 0 0 0c-24.4-3.8-64.5-14.3-91.5-26.3c-16.1-7.2-23.4-26.1-16.2-42.2s26.1-23.4 42.2-16.2c20.9 9.3 55.3 18.5 75.2 21.6c31.9 4.7 58.2 2 76-5.3c16.9-6.9 24.6-16.9 26.8-28.9c1.9-10.6 .4-16.7-1.3-20.4c-1.9-4-5.6-8.4-13-13.3c-16.4-10.7-41.5-17.7-74-26.3l-2.8-.7 0 0C119.4 279.3 84.4 270 58.4 253c-14.2-9.3-27.5-22-35.8-39.6c-8.4-17.9-10.1-37.9-6.1-59.2C23.7 116 52.3 91.2 84.8 78.3c13.3-5.3 27.9-8.9 43.2-11V32c0-17.7 14.3-32 32-32z"></path>
                        </svg>
                      </i>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">
                        Outcome-Driven Scope
                      </h4>
                      <p className="text-secondary text-sm">
                        Every sprint is tied to operational or revenue impact.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-12 h-12 shrink-0 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                      <i data-fa-i2svg="">
                        <svg className="svg-inline--fa fa-users" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="users" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg="">
                          <path fill="currentColor" d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z"></path>
                        </svg>
                      </i>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">
                        Predictable Delivery
                      </h4>
                      <p className="text-secondary text-sm">
                        Clear milestones, tight communication, and fast iteration.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-12 h-12 shrink-0 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                      <i data-fa-i2svg="">
                        <svg className="svg-inline--fa fa-eye" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="eye" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg="">
                          <path fill="currentColor" d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"></path>
                        </svg>
                      </i>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">
                        Long-Term Architecture
                      </h4>
                      <p className="text-secondary text-sm">
                        Systems designed for maintainability, security, and scale.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-card border border-border p-8 rounded-2xl h-[450px]">
                <OutcomeChart />
              </div>
            </div>
          </div>
        </section>
        {/* FAQ & Final CTA */}
        <section id="faq" className="py-24 px-6 bg-dark border-t border-border">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-20">
              <div>
                <h2 className="text-4xl font-bold mb-12">
                  Results You Can Expect
                </h2>
                <div className="space-y-6">
                  <div className="p-6 rounded-xl bg-card border border-border">
                    <h4 className="font-bold mb-2">✔ Faster execution across teams</h4>
                    <p className="text-secondary text-sm">
                      Remove bottlenecks that slow launches and client delivery.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-card border border-border">
                    <h4 className="font-bold mb-2">✔ Lower operating overhead</h4>
                    <p className="text-secondary text-sm">
                      Replace manual work with robust automation and clean systems.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-card border border-border">
                    <h4 className="font-bold mb-2">✔ Better decisions with live data</h4>
                    <p className="text-secondary text-sm">
                      Centralized dashboards give leadership real-time visibility.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center text-center p-12 rounded-3xl bg-primary/5 border border-primary/20 relative overflow-hidden">
                <div className="purple-glow opacity-30"></div>
                <h2 className="text-4xl font-bold mb-6">
                  Ready to Remove Growth Bottlenecks?
                </h2>
                <p className="text-secondary mb-10 max-w-md">
                  Book a high-impact strategy call and get a clear execution roadmap.
                </p>
                <Link href="/book-call" className="bg-primary hover:scale-105 px-10 py-5 rounded-xl text-xl font-bold transition-all shadow-[0_0_30px_rgba(98,60,234,0.3)]">
                  Book a Strategy Call
                </Link>
                <p className="mt-6 text-xs text-secondary uppercase tracking-widest">
                  Premium delivery for founders, agencies, and SMEs.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
    </>
  );
}
