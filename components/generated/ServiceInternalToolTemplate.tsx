export default function ServiceInternalToolTemplate() {
  return (
    <>
      
      <main id="main-content">
        {/* Section 1: Hero */}
        <section id="hero" className="relative pt-40 pb-20 px-6 overflow-hidden min-h-[800px] flex items-center">
          <div className="glow-effect top-[-100px] left-[-100px]"></div>
          <div className="glow-effect bottom-[-100px] right-[-100px]"></div>
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div className="z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-card/50 text-xs font-medium text-primary mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Internal Tools Development
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
                Manual Processes
                <span className="text-primary">
                  Are Slowing You Down
                </span>
              </h1>
              <p className="text-xl text-secondaryText mb-10 max-w-xl leading-relaxed">
                Replace multiple fragmented SaaS subscriptions with a single, custom-built system designed specifically for your unique workflow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-primary hover:scale-105 px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-[0_0_20px_rgba(98,60,234,0.3)]">
                  Book a Free Audit
                </button>
                <button className="border border-border hover:bg-card px-8 py-4 rounded-xl text-lg font-bold transition-all">
                  View Our Portfolio
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl border border-border bg-card p-4 shadow-2xl overflow-hidden">
                <img src="/assets/images/36c0486f0f-29dc5d9bf7e3fec1e87c.png" alt="a high-tech futuristic dashboard interface with dark theme, purple accents, data visualizations, clean UI design, professional SaaS look" />
              </div>
            </div>
          </div>
        </section>
        {/* Section 2: Problem & Solution */}
        <section id="problem-solution" className="py-24 px-6 bg-background relative">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              <div id="problem-card" className="p-10 rounded-2xl border border-border bg-[#111111]/50">
                <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center mb-6">
                  <i className="text-red-500 text-xl" data-fa-i2svg="">
                    <svg className="svg-inline--fa fa-triangle-exclamation" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="triangle-exclamation" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                      <path fill="currentColor" d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"></path>
                    </svg>
                  </i>
                </div>
                <h2 className="text-3xl font-bold mb-4">
                  Problems
                </h2>
                <p className="text-secondaryText mb-8">
                  Too many subscriptions, no control, and data silos everywhere.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-secondaryText">
                    <i className="text-red-500 mt-1" data-fa-i2svg="">
                      <svg className="svg-inline--fa fa-circle-xmark" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-xmark" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                        <path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"></path>
                      </svg>
                    </i>
                    <span>
                      Paying ₹2L+/month for SaaS you barely use
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-secondaryText">
                    <i className="text-red-500 mt-1" data-fa-i2svg="">
                      <svg className="svg-inline--fa fa-circle-xmark" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-xmark" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                        <path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"></path>
                      </svg>
                    </i>
                    <span>
                      Manual data entry across 5 different platforms
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-secondaryText">
                    <i className="text-red-500 mt-1" data-fa-i2svg="">
                      <svg className="svg-inline--fa fa-circle-xmark" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-xmark" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                        <path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"></path>
                      </svg>
                    </i>
                    <span>
                      No ownership of your business data
                    </span>
                  </li>
                </ul>
              </div>
              <div id="solution-card" className="p-10 rounded-2xl border border-primary/30 bg-[#141414] shadow-[0_0_40px_rgba(98,60,234,0.1)]">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-6">
                  <i className="text-primary text-xl" data-fa-i2svg="">
                    <svg className="svg-inline--fa fa-wand-magic-sparkles" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="wand-magic-sparkles" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg="">
                      <path fill="currentColor" d="M234.7 42.7L197 56.8c-3 1.1-5 4-5 7.2s2 6.1 5 7.2l37.7 14.1L248.8 123c1.1 3 4 5 7.2 5s6.1-2 7.2-5l14.1-37.7L315 71.2c3-1.1 5-4 5-7.2s-2-6.1-5-7.2L277.3 42.7 263.2 5c-1.1-3-4-5-7.2-5s-6.1 2-7.2 5L234.7 42.7zM46.1 395.4c-18.7 18.7-18.7 49.1 0 67.9l34.6 34.6c18.7 18.7 49.1 18.7 67.9 0L529.9 116.5c18.7-18.7 18.7-49.1 0-67.9L495.3 14.1c-18.7-18.7-49.1-18.7-67.9 0L46.1 395.4zM484.6 82.6l-105 105-23.3-23.3 105-105 23.3 23.3zM7.5 117.2C3 118.9 0 123.2 0 128s3 9.1 7.5 10.8L64 160l21.2 56.5c1.7 4.5 6 7.5 10.8 7.5s9.1-3 10.8-7.5L128 160l56.5-21.2c4.5-1.7 7.5-6 7.5-10.8s-3-9.1-7.5-10.8L128 96 106.8 39.5C105.1 35 100.8 32 96 32s-9.1 3-10.8 7.5L64 96 7.5 117.2zm352 256c-4.5 1.7-7.5 6-7.5 10.8s3 9.1 7.5 10.8L416 416l21.2 56.5c1.7 4.5 6 7.5 10.8 7.5s9.1-3 10.8-7.5L480 416l56.5-21.2c4.5-1.7 7.5-6 7.5-10.8s-3-9.1-7.5-10.8L480 352l-21.2-56.5c-1.7-4.5-6-7.5-10.8-7.5s-9.1 3-10.8 7.5L416 352l-56.5 21.2z"></path>
                    </svg>
                  </i>
                </div>
                <h2 className="text-3xl font-bold mb-4">
                  System-Based Solution
                </h2>
                <p className="text-secondaryText mb-8">
                  Custom tools built for your specific workflow.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <i className="text-primary mt-1" data-fa-i2svg="">
                      <svg className="svg-inline--fa fa-circle-check" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                        <path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path>
                      </svg>
                    </i>
                    <span>
                      Unified dashboard for all business metrics
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="text-primary mt-1" data-fa-i2svg="">
                      <svg className="svg-inline--fa fa-circle-check" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                        <path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path>
                      </svg>
                    </i>
                    <span>
                      Automated tasks that save 20+ hours weekly
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="text-primary mt-1" data-fa-i2svg="">
                      <svg className="svg-inline--fa fa-circle-check" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                        <path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path>
                      </svg>
                    </i>
                    <span>
                      Zero monthly per-user subscription fees
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* Section 3: Features & Analytics */}
        <section id="features" className="py-24 px-6 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                Benefits
              </h2>
              <p className="text-secondaryText max-w-2xl mx-auto">
                We build the backbone of your operations with scalable, secure, and intuitive internal systems.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div id="feature-1" className="p-8 rounded-2xl border border-border bg-card hover:border-primary/50 transition-colors group">
                <i className="text-3xl text-primary mb-6 group-hover:scale-110 transition-transform" data-fa-i2svg="">
                  <svg className="svg-inline--fa fa-chart-line" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chart-line" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                    <path fill="currentColor" d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V400c0 44.2 35.8 80 80 80H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z"></path>
                  </svg>
                </i>
                <h3 className="text-xl font-bold mb-3">
                  Custom Dashboards
                </h3>
                <p className="text-secondaryText leading-relaxed">
                  Real-time visualization of your KPIs, sales data, and operational metrics in one place.
                </p>
              </div>
              <div id="feature-2" className="p-8 rounded-2xl border border-border bg-card hover:border-primary/50 transition-colors group">
                <i className="text-3xl text-primary mb-6 group-hover:scale-110 transition-transform" data-fa-i2svg="">
                  <svg className="svg-inline--fa fa-list-check" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="list-check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                    <path fill="currentColor" d="M152.1 38.2c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 113C-2.3 103.6-2.3 88.4 7 79s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zm0 160c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 273c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zM224 96c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H256c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H256c-17.7 0-32-14.3-32-32zM160 416c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H192c-17.7 0-32-14.3-32-32zM48 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path>
                  </svg>
                </i>
                <h3 className="text-xl font-bold mb-3">
                  Task Systems
                </h3>
                <p className="text-secondaryText leading-relaxed">
                  Automated workflow management tailored to how your team actually works.
                </p>
              </div>
              <div id="feature-3" className="p-8 rounded-2xl border border-border bg-card hover:border-primary/50 transition-colors group">
                <i className="text-3xl text-primary mb-6 group-hover:scale-110 transition-transform" data-fa-i2svg="">
                  <svg className="svg-inline--fa fa-database" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="database" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg="">
                    <path fill="currentColor" d="M448 80v48c0 44.2-100.3 80-224 80S0 172.2 0 128V80C0 35.8 100.3 0 224 0S448 35.8 448 80zM393.2 214.7c20.8-7.4 39.9-16.9 54.8-28.6V288c0 44.2-100.3 80-224 80S0 332.2 0 288V186.1c14.9 11.8 34 21.2 54.8 28.6C99.7 230.7 159.5 240 224 240s124.3-9.3 169.2-25.3zM0 346.1c14.9 11.8 34 21.2 54.8 28.6C99.7 390.7 159.5 400 224 400s124.3-9.3 169.2-25.3c20.8-7.4 39.9-16.9 54.8-28.6V432c0 44.2-100.3 80-224 80S0 476.2 0 432V346.1z"></path>
                  </svg>
                </i>
                <h3 className="text-xl font-bold mb-3">
                  Data Tools
                </h3>
                <p className="text-secondaryText leading-relaxed">
                  Secure database management, inventory tracking, and CRM functionality built just for you.
                </p>
              </div>
            </div>
            {/* Interactive Chart Area */}
            <div id="efficiency-chart-container" className="rounded-2xl border border-border bg-card p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">
                Projected Efficiency Gain
              </h3>
            </div>
          </div>
        </section>
        {/* Section 4: Pricing */}
        <section id="pricing" className="py-24 px-6 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-12 bg-[#141414] rounded-2xl border border-border p-12 relative overflow-hidden">
              <div className="glow-effect top-0 left-0 opacity-30"></div>
              <div className="flex-1">
                <h2 className="text-4xl font-bold mb-4">
                  Starting from $1000+
                </h2>
                <p className="text-secondaryText text-lg mb-8">
                  No recurring fees. No per-user costs. You own the code and the data forever.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <i className="text-primary" data-fa-i2svg="">
                        <svg className="svg-inline--fa fa-shield-halved" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shield-halved" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                          <path fill="currentColor" d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0zm0 66.8V444.8C394 378 431.1 230.1 432 141.4L256 66.8l0 0z"></path>
                        </svg>
                      </i>
                    </div>
                    <div>
                      <h4 className="font-bold">
                        6 Months Support
                      </h4>
                      <p className="text-sm text-secondaryText">
                        Included with every project for peace of mind.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <i className="text-primary" data-fa-i2svg="">
                        <svg className="svg-inline--fa fa-code" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="code" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg="">
                          <path fill="currentColor" d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"></path>
                        </svg>
                      </i>
                    </div>
                    <div>
                      <h4 className="font-bold">
                        Source Code Ownership
                      </h4>
                      <p className="text-sm text-secondaryText">
                        100% intellectual property transfer to you.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-[400px] bg-[#0A0A0A] border border-border p-10 rounded-2xl text-center shadow-xl">
                <p className="text-secondaryText font-medium mb-2 uppercase tracking-widest text-xs">
                  Starting From
                </p>
                <div className="text-6xl font-bold mb-6">
                  ₹50K
                  <span className="text-xl text-secondaryText">
                    +
                  </span>
                </div>
                <p className="text-sm text-secondaryText mb-8">
                  Custom quote based on your specific complexity and requirements.
                </p>
                <button className="w-full bg-primary hover:bg-opacity-90 py-4 rounded-xl font-bold transition-all mb-4">
                  Get Custom Quote
                </button>
                <p className="text-xs text-secondaryText">
                  Avg. Delivery: 4-6 Weeks
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Section 5: CTA Final */}
        <section id="cta" className="py-24 px-6 relative overflow-hidden">
          <div className="max-w-4xl mx-auto text-center z-10 relative">
            <h2 className="text-5xl font-bold mb-8">
              Start Your Project
            </h2>
            <p className="text-xl text-secondaryText mb-12">
              Stop fighting your tools and start building a system that works for you. Book a discovery call today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button className="bg-primary text-white px-10 py-5 rounded-xl text-lg font-bold hover:scale-105 transition-all shadow-[0_0_30px_rgba(98,60,234,0.4)]">
                Book a Discovery Call
              </button>
              <button className="bg-transparent border border-border text-white px-10 py-5 rounded-xl text-lg font-bold hover:bg-card transition-all">
                Talk to an Expert
              </button>
            </div>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -z-10"></div>
        </section>
      </main>
      
    </>
  );
}
