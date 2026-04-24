import Link from "next/link";

type ServiceItem = {
  name: string;
  slug: string;
  heroTitle: string;
  heroSubtitle: string;
  processSteps: unknown;
  benefits: unknown;
};

export default function ServicesTemplate({ services = [] }: { services?: ServiceItem[] }) {
  const [service1, service2, service3, service4] = services;
  const processSteps = (service1?.processSteps as string[] | undefined) || ["Audit", "Design", "Build", "Automate & Scale"];
  const benefits = (service1?.benefits as string[] | undefined) || ["Reduce Operational Cost", "Increase Team Efficiency", "Scale Operations"];
  return (
    <>
      
      <main id="main-content">
        {/* Hero Section */}
        <section id="hero" className="relative pt-40 pb-24 px-6 overflow-hidden">
          <div className="glow-effect top-0 left-1/4"></div>
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-border bg-brand-card mb-6">
              <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse"></span>
              <span className="text-xs font-medium text-brand-secondary uppercase tracking-widest">
                Built for High-Growth Teams
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight max-w-4xl mx-auto leading-tight">
              Systems That
              <span className="text-brand-accent"> Remove Operational Bottlenecks</span>
            </h1>
            <p className="text-xl text-brand-secondary max-w-2xl mx-auto mb-12">
              From automation to custom platforms, we build what your team needs to execute faster, reduce manual load, and scale without chaos.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/book-call" className="w-full sm:w-auto bg-brand-accent text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform text-center">
                Book a Strategy Call
              </Link>
              <Link href="/blog" className="w-full sm:w-auto border border-brand-border bg-brand-card text-brand-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-cardHover transition-colors text-center">
                View Service Playbooks
              </Link>
            </div>
          </div>
        </section>
        {/* Core Solutions Grid */}
        <section id="solutions" className="py-24 px-6 relative">
          <div className="glow-effect bottom-0 right-0"></div>
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Core Services
              </h2>
              <div className="h-1 w-20 bg-brand-accent rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Card 1 */}
              <div id="service-1" className="service-card group p-8 rounded-2xl bg-brand-card border border-brand-border transition-all">
                <div className="w-12 h-12 rounded-xl bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center mb-6 group-hover:bg-brand-accent transition-colors">
                  <i className="text-brand-accent group-hover:text-white text-xl" data-fa-i2svg="">
                    <svg className="svg-inline--fa fa-layer-group" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="layer-group" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg="">
                      <path fill="currentColor" d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"></path>
                    </svg>
                  </i>
                </div>
                <h3 className="text-xl font-bold mb-3">
                  {service1?.name || "AI & Automation"}
                </h3>
                <p className="text-brand-secondary text-sm leading-relaxed mb-8">
                  {service1?.heroSubtitle || "For teams stuck in repetitive tasks and manual follow-ups. We design AI-powered workflows that connect tools, trigger actions in real time, and remove execution drag."}
                </p>
                <Link href={`/services/${service1?.slug || "operations-optimization"}`} className="inline-flex items-center gap-2 text-brand-accent font-semibold text-sm hover:gap-3 transition-all">
                  Learn More
                  <i data-fa-i2svg="">
                    <svg className="svg-inline--fa fa-arrow-right" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg="">
                      <path fill="currentColor" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path>
                    </svg>
                  </i>
                </Link>
              </div>
              {/* Card 2 */}
              <div id="service-2" className="service-card group p-8 rounded-2xl bg-brand-card border border-brand-border transition-all">
                <div className="w-12 h-12 rounded-xl bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center mb-6 group-hover:bg-brand-accent transition-colors">
                  <i className="text-brand-accent group-hover:text-white text-xl" data-fa-i2svg="">
                    <svg className="svg-inline--fa fa-robot" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="robot" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg="">
                      <path fill="currentColor" d="M320 0c17.7 0 32 14.3 32 32V96H472c39.8 0 72 32.2 72 72V440c0 39.8-32.2 72-72 72H168c-39.8 0-72-32.2-72-72V168c0-39.8 32.2-72 72-72H288V32c0-17.7 14.3-32 32-32zM208 384c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H208zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H304zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H400zM264 256a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm152 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80zM48 224H64V416H48c-26.5 0-48-21.5-48-48V272c0-26.5 21.5-48 48-48zm544 0c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H576V224h16z"></path>
                    </svg>
                  </i>
                </div>
                <h3 className="text-xl font-bold mb-3">
                  {service2?.name || "Custom Development"}
                </h3>
                <p className="text-brand-secondary text-sm leading-relaxed mb-8">
                  {service2?.heroSubtitle || "For teams outgrowing generic tools. We build internal software tailored to your workflow so your team works faster with better visibility."}
                </p>
                <Link href={`/services/${service2?.slug || "ai-automation"}`} className="inline-flex items-center gap-2 text-brand-accent font-semibold text-sm hover:gap-3 transition-all">
                  Learn More
                  <i data-fa-i2svg="">
                    <svg className="svg-inline--fa fa-arrow-right" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg="">
                      <path fill="currentColor" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path>
                    </svg>
                  </i>
                </Link>
              </div>
              {/* Card 3 */}
              <div id="service-3" className="service-card group p-8 rounded-2xl bg-brand-card border border-brand-border transition-all">
                <div className="w-12 h-12 rounded-xl bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center mb-6 group-hover:bg-brand-accent transition-colors">
                  <i className="text-brand-accent group-hover:text-white text-xl" data-fa-i2svg="">
                    <svg className="svg-inline--fa fa-gears" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="gears" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg="">
                      <path fill="currentColor" d="M308.5 135.3c7.1-6.3 9.9-16.2 6.2-25c-2.3-5.3-4.8-10.5-7.6-15.5L304 89.4c-3-5-6.3-9.9-9.8-14.6c-5.7-7.6-15.7-10.1-24.7-7.1l-28.2 9.3c-10.7-8.8-23-16-36.2-20.9L199 27.1c-1.9-9.3-9.1-16.7-18.5-17.8C173.9 8.4 167.2 8 160.4 8h-.7c-6.8 0-13.5 .4-20.1 1.2c-9.4 1.1-16.6 8.6-18.5 17.8L115 56.1c-13.3 5-25.5 12.1-36.2 20.9L50.5 67.8c-9-3-19-.5-24.7 7.1c-3.5 4.7-6.8 9.6-9.9 14.6l-3 5.3c-2.8 5-5.3 10.2-7.6 15.6c-3.7 8.7-.9 18.6 6.2 25l22.2 19.8C32.6 161.9 32 168.9 32 176s.6 14.1 1.7 20.9L11.5 216.7c-7.1 6.3-9.9 16.2-6.2 25c2.3 5.3 4.8 10.5 7.6 15.6l3 5.2c3 5.1 6.3 9.9 9.9 14.6c5.7 7.6 15.7 10.1 24.7 7.1l28.2-9.3c10.7 8.8 23 16 36.2 20.9l6.1 29.1c1.9 9.3 9.1 16.7 18.5 17.8c6.7 .8 13.5 1.2 20.4 1.2s13.7-.4 20.4-1.2c9.4-1.1 16.6-8.6 18.5-17.8l6.1-29.1c13.3-5 25.5-12.1 36.2-20.9l28.2 9.3c9 3 19 .5 24.7-7.1c3.5-4.7 6.8-9.5 9.8-14.6l3.1-5.4c2.8-5 5.3-10.2 7.6-15.5c3.7-8.7 .9-18.6-6.2-25l-22.2-19.8c1.1-6.8 1.7-13.8 1.7-20.9s-.6-14.1-1.7-20.9l22.2-19.8zM112 176a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM504.7 500.5c6.3 7.1 16.2 9.9 25 6.2c5.3-2.3 10.5-4.8 15.5-7.6l5.4-3.1c5-3 9.9-6.3 14.6-9.8c7.6-5.7 10.1-15.7 7.1-24.7l-9.3-28.2c8.8-10.7 16-23 20.9-36.2l29.1-6.1c9.3-1.9 16.7-9.1 17.8-18.5c.8-6.7 1.2-13.5 1.2-20.4s-.4-13.7-1.2-20.4c-1.1-9.4-8.6-16.6-17.8-18.5L583.9 307c-5-13.3-12.1-25.5-20.9-36.2l9.3-28.2c3-9 .5-19-7.1-24.7c-4.7-3.5-9.6-6.8-14.6-9.9l-5.3-3c-5-2.8-10.2-5.3-15.6-7.6c-8.7-3.7-18.6-.9-25 6.2l-19.8 22.2c-6.8-1.1-13.8-1.7-20.9-1.7s-14.1 .6-20.9 1.7l-19.8-22.2c-6.3-7.1-16.2-9.9-25-6.2c-5.3 2.3-10.5 4.8-15.6 7.6l-5.2 3c-5.1 3-9.9 6.3-14.6 9.9c-7.6 5.7-10.1 15.7-7.1 24.7l9.3 28.2c-8.8 10.7-16 23-20.9 36.2L315.1 313c-9.3 1.9-16.7 9.1-17.8 18.5c-.8 6.7-1.2 13.5-1.2 20.4s.4 13.7 1.2 20.4c1.1 9.4 8.6 16.6 17.8 18.5l29.1 6.1c5 13.3 12.1 25.5 20.9 36.2l-9.3 28.2c-3 9-.5 19 7.1 24.7c4.7 3.5 9.5 6.8 14.6 9.8l5.4 3.1c5 2.8 10.2 5.3 15.5 7.6c8.7 3.7 18.6 .9 25-6.2l19.8-22.2c6.8 1.1 13.8 1.7 20.9 1.7s14.1-.6 20.9-1.7l19.8 22.2zM464 304a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path>
                    </svg>
                  </i>
                </div>
                <h3 className="text-xl font-bold mb-3">
                  {service3?.name || "SaaS Product Development"}
                </h3>
                <p className="text-brand-secondary text-sm leading-relaxed mb-8">
                  {service3?.heroSubtitle || "For founders building or scaling SaaS. We ship products with strong architecture and clean UX to accelerate release cycles."}
                </p>
                <Link href={`/services/${service3?.slug || "custom-development"}`} className="inline-flex items-center gap-2 text-brand-accent font-semibold text-sm hover:gap-3 transition-all">
                  Learn More
                  <i data-fa-i2svg="">
                    <svg className="svg-inline--fa fa-arrow-right" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg="">
                      <path fill="currentColor" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path>
                    </svg>
                  </i>
                </Link>
              </div>
              {/* Card 4 */}
              <div id="service-4" className="service-card group p-8 rounded-2xl bg-brand-card border border-brand-border transition-all">
                <div className="w-12 h-12 rounded-xl bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center mb-6 group-hover:bg-brand-accent transition-colors">
                  <i className="text-brand-accent group-hover:text-white text-xl" data-fa-i2svg="">
                    <svg className="svg-inline--fa fa-code" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="code" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg="">
                      <path fill="currentColor" d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"></path>
                    </svg>
                  </i>
                </div>
                <h3 className="text-xl font-bold mb-3">
                  {service4?.name || "Operations Optimization"}
                </h3>
                <p className="text-brand-secondary text-sm leading-relaxed mb-8">
                  {service4?.heroSubtitle || "For teams with fragmented handoffs and unclear ownership. We redesign workflows and reporting for speed, clarity, and predictable delivery."}
                </p>
                <Link href={`/services/${service4?.slug || "saas-product-development"}`} className="inline-flex items-center gap-2 text-brand-accent font-semibold text-sm hover:gap-3 transition-all">
                  Learn More
                  <i data-fa-i2svg="">
                    <svg className="svg-inline--fa fa-arrow-right" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg="">
                      <path fill="currentColor" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path>
                    </svg>
                  </i>
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* Achievements & Process */}
        <section id="achievements" className="py-24 px-6 bg-brand-card/30 border-y border-brand-border">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div id="outcomes">
              <h2 className="text-3xl md:text-4xl font-bold mb-12">
                Why Custom Systems Beat Generic Tools
              </h2>
              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center shrink-0 border border-green-500/20">
                    <i className="text-green-500" data-fa-i2svg="">
                      <svg className="svg-inline--fa fa-chart-line" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chart-line" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                        <path fill="currentColor" d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V400c0 44.2 35.8 80 80 80H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z"></path>
                      </svg>
                    </i>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">
                      Better Fit, Faster Adoption
                    </h4>
                    <p className="text-brand-secondary">
                      Generic tools force your process to adapt. Custom systems match how your team already operates.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-5">
                  <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0 border border-blue-500/20">
                    <i className="text-blue-500" data-fa-i2svg="">
                      <svg className="svg-inline--fa fa-bolt" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bolt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg="">
                        <path fill="currentColor" d="M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288H175.5L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H272.5L349.4 44.6z"></path>
                      </svg>
                    </i>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">
                      Cleaner Execution
                    </h4>
                    <p className="text-brand-secondary">
                      Remove workarounds, duplicate effort, and manual patchwork that slow delivery.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-5">
                  <div className="w-10 h-10 rounded-full bg-brand-accent/10 flex items-center justify-center shrink-0 border border-brand-accent/20">
                    <i className="text-brand-accent" data-fa-i2svg="">
                      <svg className="svg-inline--fa fa-expand" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="expand" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg="">
                        <path fill="currentColor" d="M32 32C14.3 32 0 46.3 0 64v96c0 17.7 14.3 32 32 32s32-14.3 32-32V96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H64V352zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h64v64c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32H320zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32V352z"></path>
                      </svg>
                    </i>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">
                      Stronger Long-Term Economics
                    </h4>
                    <p className="text-brand-secondary">
                      Fewer bottlenecks, higher throughput, and systems that scale with your growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div id="process" className="relative">
              <h2 className="text-3xl md:text-4xl font-bold mb-12">
                Our Approach
              </h2>
              <div className="grid grid-cols-1 gap-6">
                <div className="flex items-center gap-6 p-4 rounded-xl border border-brand-border bg-brand-card">
                  <span className="text-4xl font-black text-brand-border">
                    01
                  </span>
                  <div>
                    <h5 className="font-bold">
                      {processSteps[0] || "Audit"}
                    </h5>
                    <p className="text-brand-secondary text-sm">
                      Identify bottlenecks, delays, and manual failure points.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-6 p-4 rounded-xl border border-brand-border bg-brand-card">
                  <span className="text-4xl font-black text-brand-border">
                    02
                  </span>
                  <div>
                    <h5 className="font-bold">
                      {processSteps[1] || "Prioritize"}
                    </h5>
                    <p className="text-brand-secondary text-sm">
                      Focus on the highest-impact operational wins first.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-6 p-4 rounded-xl border border-brand-border bg-brand-card">
                  <span className="text-4xl font-black text-brand-border">
                    03
                  </span>
                  <div>
                    <h5 className="font-bold">
                      {processSteps[2] || "Build"}
                    </h5>
                    <p className="text-brand-secondary text-sm">
                      Build and integrate systems around your real workflows.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-6 p-4 rounded-xl border border-brand-border bg-brand-card">
                  <span className="text-4xl font-black text-brand-border">
                    04
                  </span>
                  <div>
                    <h5 className="font-bold">
                      {processSteps[3] || "Optimize"}
                    </h5>
                    <p className="text-brand-secondary text-sm">
                      Measure performance and improve continuously.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Final CTA */}
        <section id="cta" className="py-32 px-6 relative overflow-hidden">
          <div className="glow-effect top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl"></div>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              Need Systems Built for How You Operate?
            </h2>
            <p className="text-xl text-brand-secondary mb-12 max-w-2xl mx-auto">
              Book a strategy call to identify bottlenecks, prioritize high-ROI improvements, and define a clear execution roadmap.
            </p>
            <div id="cta-container" className="p-1 rounded-2xl bg-gradient-to-r from-brand-accent to-purple-400 inline-block">
              <Link href="/book-call" className="bg-brand-bg hover:bg-transparent text-white px-12 py-5 rounded-[14px] font-bold text-xl transition-all flex items-center gap-3">
                Book a Call
                <i data-fa-i2svg="">
                  <svg className="svg-inline--fa fa-calendar-check" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="calendar-check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg="">
                    <path fill="currentColor" d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zM329 305c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-95 95-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L329 305z"></path>
                  </svg>
                </i>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
    </>
  );
}
