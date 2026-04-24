import Link from "next/link";

export default function AboutTemplate() {
  return (
    <>
      
      <main id="main-content">
        {/* Section 1: Hero & Story */}
        <section id="hero-story" className="relative pt-40 pb-24 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] opacity-20 pointer-events-none" style={{ background: "radial-gradient(circle at 50% 0%, #623CEA 0%, transparent 70%)" }}></div>
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="max-w-7xl">
              <h1 className="text-3xl md:text-5xl font-bold leading-[1.1] mb-8 tracking-tight">
              Scale Through Better Systems
              </h1>
              <div className="grid md:grid-cols-2 gap-12 mt-16 items-start">
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold text-brand-accent">
                    Why We Exist
                  </h2>
                  <p className="text-lg text-brand-secondary leading-relaxed">
                    Most businesses do not have a talent problem. They have an operations problem.
                  </p>
                  <p className="text-lg text-brand-secondary leading-relaxed">
                    Work gets stuck in handoffs, data lives in scattered tools, and teams waste high-value time on repetitive work.
                  </p>
                  <p className="text-lg text-brand-secondary leading-relaxed">
                    We exist to fix that operating layer so execution stays fast as complexity grows.
                  </p>
                </div>
                <div className="bg-brand-card border border-brand-border p-8 rounded-2xl glow-purple">
                  <div className="flex flex-col gap-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-brand-border flex items-center justify-center flex-shrink-0">
                        <i className="text-brand-accent" data-fa-i2svg="">
                          <svg className="svg-inline--fa fa-microchip" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="microchip" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                            <path fill="currentColor" d="M176 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64c-35.3 0-64 28.7-64 64H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H64v56H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H64v56H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H64c0 35.3 28.7 64 64 64v40c0 13.3 10.7 24 24 24s24-10.7 24-24V448h56v40c0 13.3 10.7 24 24 24s24-10.7 24-24V448h56v40c0 13.3 10.7 24 24 24s24-10.7 24-24V448c35.3 0 64-28.7 64-64h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H448V280h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H448V176h40c13.3 0 24-10.7 24-24s-10.7-24-24-24H448c0-35.3-28.7-64-64-64V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H280V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H176V24zM160 128H352c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32zm192 32H160V352H352V160z"></path>
                          </svg>
                        </i>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">
                          Outcome-First Systems
                        </h4>
                        <p className="text-sm text-brand-secondary">
                          We design systems to improve throughput, visibility, and margin.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-brand-border flex items-center justify-center flex-shrink-0">
                        <i className="text-brand-accent" data-fa-i2svg="">
                          <svg className="svg-inline--fa fa-robot" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="robot" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg="">
                            <path fill="currentColor" d="M320 0c17.7 0 32 14.3 32 32V96H472c39.8 0 72 32.2 72 72V440c0 39.8-32.2 72-72 72H168c-39.8 0-72-32.2-72-72V168c0-39.8 32.2-72 72-72H288V32c0-17.7 14.3-32 32-32zM208 384c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H208zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H304zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H400zM264 256a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm152 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80zM48 224H64V416H48c-26.5 0-48-21.5-48-48V272c0-26.5 21.5-48 48-48zm544 0c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H576V224h16z"></path>
                          </svg>
                        </i>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">
                          Practical Automation
                        </h4>
                        <p className="text-sm text-brand-secondary">
                          We automate real bottlenecks, not vanity workflows.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section 2: What We Do & Philosophy */}
        <section id="philosophy-services" className="py-24 border-y border-brand-border bg-brand-cardAlt">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-4">
                What We Do
              </h2>
              <p className="text-brand-secondary max-w-2xl">
                We design and implement the systems that keep operations moving without bottlenecks.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-brand-bg border border-brand-border p-8 rounded-2xl">
                <i className="text-3xl text-brand-accent mb-6" data-fa-i2svg="">
                  <svg className="svg-inline--fa fa-layer-group" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="layer-group" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg="">
                    <path fill="currentColor" d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"></path>
                  </svg>
                </i>
                <h3 className="text-xl font-semibold mb-4">
                  Internal Systems
                </h3>
                <p className="text-brand-secondary leading-relaxed">
                  Build internal platforms and dashboards aligned to how your team actually operates.
                </p>
              </div>
              <div className="bg-brand-bg border border-brand-border p-8 rounded-2xl">
                <i className="text-3xl text-brand-accent mb-6" data-fa-i2svg="">
                  <svg className="svg-inline--fa fa-gears" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="gears" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg="">
                    <path fill="currentColor" d="M308.5 135.3c7.1-6.3 9.9-16.2 6.2-25c-2.3-5.3-4.8-10.5-7.6-15.5L304 89.4c-3-5-6.3-9.9-9.8-14.6c-5.7-7.6-15.7-10.1-24.7-7.1l-28.2 9.3c-10.7-8.8-23-16-36.2-20.9L199 27.1c-1.9-9.3-9.1-16.7-18.5-17.8C173.9 8.4 167.2 8 160.4 8h-.7c-6.8 0-13.5 .4-20.1 1.2c-9.4 1.1-16.6 8.6-18.5 17.8L115 56.1c-13.3 5-25.5 12.1-36.2 20.9L50.5 67.8c-9-3-19-.5-24.7 7.1c-3.5 4.7-6.8 9.6-9.9 14.6l-3 5.3c-2.8 5-5.3 10.2-7.6 15.6c-3.7 8.7-.9 18.6 6.2 25l22.2 19.8C32.6 161.9 32 168.9 32 176s.6 14.1 1.7 20.9L11.5 216.7c-7.1 6.3-9.9 16.2-6.2 25c2.3 5.3 4.8 10.5 7.6 15.6l3 5.2c3 5.1 6.3 9.9 9.9 14.6c5.7 7.6 15.7 10.1 24.7 7.1l28.2-9.3c10.7 8.8 23 16 36.2 20.9l6.1 29.1c1.9 9.3 9.1 16.7 18.5 17.8c6.7 .8 13.5 1.2 20.4 1.2s13.7-.4 20.4-1.2c9.4-1.1 16.6-8.6 18.5-17.8l6.1-29.1c13.3-5 25.5-12.1 36.2-20.9l28.2 9.3c9 3 19 .5 24.7-7.1c3.5-4.7 6.8-9.5 9.8-14.6l3.1-5.4c2.8-5 5.3-10.2 7.6-15.5c3.7-8.7 .9-18.6-6.2-25l-22.2-19.8c1.1-6.8 1.7-13.8 1.7-20.9s-.6-14.1-1.7-20.9l22.2-19.8zM112 176a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM504.7 500.5c6.3 7.1 16.2 9.9 25 6.2c5.3-2.3 10.5-4.8 15.5-7.6l5.4-3.1c5-3 9.9-6.3 14.6-9.8c7.6-5.7 10.1-15.7 7.1-24.7l-9.3-28.2c8.8-10.7 16-23 20.9-36.2l29.1-6.1c9.3-1.9 16.7-9.1 17.8-18.5c.8-6.7 1.2-13.5 1.2-20.4s-.4-13.7-1.2-20.4c-1.1-9.4-8.6-16.6-17.8-18.5L583.9 307c-5-13.3-12.1-25.5-20.9-36.2l9.3-28.2c3-9 .5-19-7.1-24.7c-4.7-3.5-9.6-6.8-14.6-9.9l-5.3-3c-5-2.8-10.2-5.3-15.6-7.6c-8.7-3.7-18.6-.9-25 6.2l-19.8 22.2c-6.8-1.1-13.8-1.7-20.9-1.7s-14.1 .6-20.9 1.7l-19.8-22.2c-6.3-7.1-16.2-9.9-25-6.2c-5.3 2.3-10.5 4.8-15.6 7.6l-5.2 3c-5.1 3-9.9 6.3-14.6 9.9c-7.6 5.7-10.1 15.7-7.1 24.7l9.3 28.2c-8.8 10.7-16 23-20.9 36.2L315.1 313c-9.3 1.9-16.7 9.1-17.8 18.5c-.8 6.7-1.2 13.5-1.2 20.4s.4 13.7 1.2 20.4c1.1 9.4 8.6 16.6 17.8 18.5l29.1 6.1c5 13.3 12.1 25.5 20.9 36.2l-9.3 28.2c-3 9-.5 19 7.1 24.7c4.7 3.5 9.5 6.8 14.6 9.8l5.4 3.1c5 2.8 10.2 5.3 15.5 7.6c8.7 3.7 18.6 .9 25-6.2l19.8-22.2c6.8 1.1 13.8 1.7 20.9 1.7s14.1-.6 20.9-1.7l19.8 22.2zM464 304a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path>
                  </svg>
                </i>
                <h3 className="text-xl font-semibold mb-4">
                  Workflow Automation
                </h3>
                <p className="text-brand-secondary leading-relaxed">
                  Replace repetitive manual execution with connected, reliable automation flows.
                </p>
              </div>
              <div className="bg-brand-bg border border-brand-border p-8 rounded-2xl">
                <i className="text-3xl text-brand-accent mb-6" data-fa-i2svg="">
                  <svg className="svg-inline--fa fa-network-wired" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="network-wired" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg="">
                    <path fill="currentColor" d="M256 64H384v64H256V64zM240 0c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48h48v32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96v32H80c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48H240c26.5 0 48-21.5 48-48V368c0-26.5-21.5-48-48-48H192V288H448v32H400c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48H560c26.5 0 48-21.5 48-48V368c0-26.5-21.5-48-48-48H512V288h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H352V192h48c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H240zM96 448V384H224v64H96zm320-64H544v64H416V384z"></path>
                  </svg>
                </i>
                <h3 className="text-xl font-semibold mb-4">
                  Manual-to-System Migration
                </h3>
                <p className="text-brand-secondary leading-relaxed">
                  Move from spreadsheet-heavy work to structured systems with clear ownership and reporting.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Section 3: Our Approach */}
        <section id="approach" className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-16 text-center">
              Our Approach
            </h2>
            <div className="relative">
              <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] bg-brand-border -translate-y-1/2 z-0"></div>
              <div className="grid lg:grid-cols-5 gap-8 relative z-10">
                <div className="bg-brand-bg border border-brand-border p-6 rounded-2xl">
                  <span className="text-xs font-bold text-brand-accent uppercase tracking-widest mb-4 block">
                    Step 01
                  </span>
                  <h4 className="font-bold mb-2">
                    Audit
                  </h4>
                  <p className="text-sm text-brand-secondary leading-relaxed">
                    Identify bottlenecks, delays, and system gaps.
                  </p>
                </div>
                <div className="bg-brand-bg border border-brand-border p-6 rounded-2xl">
                  <span className="text-xs font-bold text-brand-accent uppercase tracking-widest mb-4 block">
                    Step 02
                  </span>
                  <h4 className="font-bold mb-2">
                    Prioritize
                  </h4>
                  <p className="text-sm text-brand-secondary leading-relaxed">
                    Focus on high-impact changes with clear ROI.
                  </p>
                </div>
                <div className="bg-brand-bg border border-brand-border p-6 rounded-2xl">
                  <span className="text-xs font-bold text-brand-accent uppercase tracking-widest mb-4 block">
                    Step 03
                  </span>
                  <h4 className="font-bold mb-2">
                    Build
                  </h4>
                  <p className="text-sm text-brand-secondary leading-relaxed">
                    Implement tools and automation around real workflows.
                  </p>
                </div>
                <div className="bg-brand-bg border border-brand-border p-6 rounded-2xl">
                  <span className="text-xs font-bold text-brand-accent uppercase tracking-widest mb-4 block">
                    Step 04
                  </span>
                  <h4 className="font-bold mb-2">
                    Optimize
                  </h4>
                  <p className="text-sm text-brand-secondary leading-relaxed">
                    Measure performance and improve continuously.
                  </p>
                </div>
                <div className="bg-brand-bg border border-brand-border p-6 rounded-2xl">
                  <span className="text-xs font-bold text-brand-accent uppercase tracking-widest mb-4 block">
                    Step 05
                  </span>
                  <h4 className="font-bold mb-2">
                    Scale
                  </h4>
                  <p className="text-sm text-brand-secondary leading-relaxed">
                    Extend what works as operations and volume grow.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section 4: Who We Work With & Differentiation */}
        <section id="who-we-are" className="py-24 bg-brand-card">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-20">
              <div>
                <h2 className="text-3xl font-bold mb-8">
                  Who We Work With
                </h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-1.5 h-12 bg-brand-accent rounded-full"></div>
                    <div>
                      <h4 className="text-xl font-semibold mb-1">
                        Startups
                      </h4>
                      <p className="text-brand-secondary">
                        Teams scaling beyond founder-led execution.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-1.5 h-12 bg-brand-accent rounded-full"></div>
                    <div>
                      <h4 className="text-xl font-semibold mb-1">
                        Agencies
                      </h4>
                      <p className="text-brand-secondary">
                        Delivery teams reducing operational drag across clients.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-1.5 h-12 bg-brand-accent rounded-full"></div>
                    <div>
                      <h4 className="text-xl font-semibold mb-1">
                        SMEs
                      </h4>
                      <p className="text-brand-secondary">
                        Businesses modernizing operations for speed and predictability.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-brand-bg border border-brand-border p-10 rounded-3xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/10 blur-3xl"></div>
                <h2 className="text-3xl font-bold mb-8">
                  What Makes Us Different
                </h2>
                <ul className="space-y-8">
                  <li className="flex gap-4">
                    <i className="text-brand-accent mt-1" data-fa-i2svg="">
                      <svg className="svg-inline--fa fa-circle-check" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                        <path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path>
                      </svg>
                    </i>
                    <div>
                      <span className="font-bold block mb-1">
                        Outcome-Driven Scope
                      </span>
                      <p className="text-sm text-brand-secondary">
                        We prioritize work that improves operational and financial outcomes.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <i className="text-brand-accent mt-1" data-fa-i2svg="">
                      <svg className="svg-inline--fa fa-circle-check" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                        <path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path>
                      </svg>
                    </i>
                    <div>
                      <span className="font-bold block mb-1">
                        Systems Thinking
                      </span>
                      <p className="text-sm text-brand-secondary">
                        We solve across process, tools, and ownership, not code in isolation.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <i className="text-brand-accent mt-1" data-fa-i2svg="">
                      <svg className="svg-inline--fa fa-circle-check" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                        <path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path>
                      </svg>
                    </i>
                    <div>
                      <span className="font-bold block mb-1">
                        Built for Scale
                      </span>
                      <p className="text-sm text-brand-secondary">
                        Architecture is designed for growth, reliability, and maintainability.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* Section 5: Vision & CTA */}
        <section id="vision-cta" className="py-32 relative overflow-hidden">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[400px] opacity-10 pointer-events-none" style={{ background: "radial-gradient(circle at 50% 100%, #623CEA 0%, transparent 60%)" }}></div>
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <span className="text-brand-accent font-bold tracking-[0.2em] uppercase text-sm mb-6 block">
              Our Vision
            </span>
                <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Ready to remove operational bottlenecks?
            </h2>
            <p className="text-brand-secondary text-lg mb-12 max-w-2xl mx-auto">
              Get a clear roadmap to automate operations, build internal systems, and scale execution.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/book-call" className="bg-brand-accent hover:scale-105 active:scale-95 px-10 py-4 rounded-xl text-lg font-bold transition-all shadow-lg shadow-brand-accent/20">
                Book a Call
              </Link>
              <a href="/services" className="text-brand-secondary hover:text-brand-primary font-medium flex items-center gap-2 group">
                View our work
                <i className="group-hover:translate-x-1 transition-transform" data-fa-i2svg="">
                  <svg className="svg-inline--fa fa-arrow-right" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg="">
                    <path fill="currentColor" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path>
                  </svg>
                </i>
              </a>
            </div>
          </div>
        </section>
      </main>
      
    </>
  );
}
