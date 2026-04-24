export default function ServicePlatformAppTemplate() {
  return (
    <>
      
      <main id="main-content">
        {/* Section 1: Hero */}
        <section id="hero" className="relative pt-40 pb-20 overflow-hidden h-[800px] flex items-center">
          <div className="absolute top-[-10%] left-[50%] translate-x-[-50%] w-[800px] h-[600px] purple-gradient-bg pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-card text-xs font-medium text-primary">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Custom Web App Development Company
              </div>
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight tracking-tighter">
                Manual Operations
                <span className="gradient-text">
                  Need Better Systems
                </span>
              </h1>
              <p className="text-xl text-secondary max-w-lg leading-relaxed">
                Build scalable web applications tailored to your business. High-performance solutions engineered for the modern web.
              </p>
              <div className="flex items-center gap-4">
                <button className="bg-primary hover:bg-opacity-90 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all glow-purple">
                  Book a Call
                </button>
                <button className="border border-border hover:bg-card text-white px-8 py-4 rounded-xl font-bold text-lg transition-all">
                  View Portfolio
                </button>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="bg-card border border-border rounded-2xl p-4 glow-purple">
                <img className="w-full h-[400px] object-cover rounded-xl" src="/assets/images/98094726b9-1ec4feb4c79dce635c09.png" alt="modern SaaS dashboard interface with dark mode aesthetic showing data visualizations and clean UI components" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-cardLight border border-border p-6 rounded-2xl w-64">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <i data-fa-i2svg="">
                      <svg className="svg-inline--fa fa-chart-line" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chart-line" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                        <path fill="currentColor" d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V400c0 44.2 35.8 80 80 80H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z"></path>
                      </svg>
                    </i>
                  </div>
                  <div>
                    <div className="text-xs text-secondary">
                      Uptime
                    </div>
                    <div className="font-bold text-white">
                      99.99%
                    </div>
                  </div>
                </div>
                <div className="h-1 bg-border rounded-full overflow-hidden">
                  <div className="w-[90%] h-full bg-primary"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section 2: What We Build */}
        <section id="solutions" className="py-24 bg-dark">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl font-bold">
                Solution Architecture
              </h2>
              <p className="text-secondary max-w-2xl mx-auto text-lg">
                We specialize in engineering complex digital products that solve real-world problems.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div id="card-saas" className="p-8 bg-card border border-border rounded-2xl hover:border-primary/50 transition-all group">
                <div className="w-14 h-14 bg-cardLight rounded-xl flex items-center justify-center mb-6 border border-border group-hover:bg-primary/10 transition-colors">
                  <i className="text-2xl text-primary" data-fa-i2svg="">
                    <svg className="svg-inline--fa fa-layer-group" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="layer-group" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg="">
                      <path fill="currentColor" d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"></path>
                    </svg>
                  </i>
                </div>
                <h3 className="text-xl font-bold mb-4">
                  SaaS Platforms
                </h3>
                <p className="text-secondary leading-relaxed mb-6">
                  Multi-tenant architectures with secure subscription management and scalable cloud infrastructure.
                </p>
                <a href="/products" className="text-primary font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn more
                  <i className="text-sm" data-fa-i2svg="">
                    <svg className="svg-inline--fa fa-arrow-right" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg="">
                      <path fill="currentColor" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path>
                    </svg>
                  </i>
                </a>
              </div>
              <div id="card-dashboards" className="p-8 bg-card border border-border rounded-2xl hover:border-primary/50 transition-all group">
                <div className="w-14 h-14 bg-cardLight rounded-xl flex items-center justify-center mb-6 border border-border group-hover:bg-primary/10 transition-colors">
                  <i className="text-2xl text-primary" data-fa-i2svg="">
                    <svg className="svg-inline--fa fa-gauge-high" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="gauge-high" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                      <path fill="currentColor" d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM288 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM256 416c35.3 0 64-28.7 64-64c0-17.4-6.9-33.1-18.1-44.6L366 161.7c5.3-12.1-.2-26.3-12.3-31.6s-26.3 .2-31.6 12.3L257.9 288c-.6 0-1.3 0-1.9 0c-35.3 0-64 28.7-64 64s28.7 64 64 64zM176 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM96 288a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm352-32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"></path>
                    </svg>
                  </i>
                </div>
                <h3 className="text-xl font-bold mb-4">
                  Enterprise Dashboards
                </h3>
                <p className="text-secondary leading-relaxed mb-6">
                  Real-time data visualization tools designed for informed decision making and operational efficiency.
                </p>
                <a href="/products" className="text-primary font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn more
                  <i className="text-sm" data-fa-i2svg="">
                    <svg className="svg-inline--fa fa-arrow-right" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg="">
                      <path fill="currentColor" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path>
                    </svg>
                  </i>
                </a>
              </div>
              <div id="card-apps" className="p-8 bg-card border border-border rounded-2xl hover:border-primary/50 transition-all group">
                <div className="w-14 h-14 bg-cardLight rounded-xl flex items-center justify-center mb-6 border border-border group-hover:bg-primary/10 transition-colors">
                  <i className="text-2xl text-primary" data-fa-i2svg="">
                    <svg className="svg-inline--fa fa-laptop-code" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="laptop-code" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg="">
                      <path fill="currentColor" d="M64 96c0-35.3 28.7-64 64-64H512c35.3 0 64 28.7 64 64V352H512V96H128V352H64V96zM0 403.2C0 392.6 8.6 384 19.2 384H620.8c10.6 0 19.2 8.6 19.2 19.2c0 42.4-34.4 76.8-76.8 76.8H76.8C34.4 480 0 445.6 0 403.2zM281 209l-31 31 31 31c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-48-48c-9.4-9.4-9.4-24.6 0-33.9l48-48c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM393 175l48 48c9.4 9.4 9.4 24.6 0 33.9l-48 48c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l31-31-31-31c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z"></path>
                    </svg>
                  </i>
                </div>
                <h3 className="text-xl font-bold mb-4">
                  Custom Web Apps
                </h3>
                <p className="text-secondary leading-relaxed mb-6">
                  Tailor-made web applications built from the ground up to match your unique business workflows.
                </p>
                <a href="/products" className="text-primary font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn more
                  <i className="text-sm" data-fa-i2svg="">
                    <svg className="svg-inline--fa fa-arrow-right" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg="">
                      <path fill="currentColor" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path>
                    </svg>
                  </i>
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* Section 3: Tech Stack & Process */}
        <section id="tech-stack" className="py-24 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-8">
                  Modern Tech Stack
                </h2>
                <p className="text-secondary text-lg mb-12 leading-relaxed">
                  We leverage the most advanced frameworks to ensure your application is fast, secure, and future-proof.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-4 bg-card border border-border rounded-xl">
                    <i className="text-2xl text-[#61DAFB]" data-fa-i2svg="">
                      <svg className="svg-inline--fa fa-react" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="react" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                        <path fill="currentColor" d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"></path>
                      </svg>
                    </i>
                    <span className="font-medium">
                      React / Next.js
                    </span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-card border border-border rounded-xl">
                    <i className="text-2xl text-[#339933]" data-fa-i2svg="">
                      <svg className="svg-inline--fa fa-node-js" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="node-js" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg="">
                        <path fill="currentColor" d="M224 508c-6.7 0-13.5-1.8-19.4-5.2l-61.7-36.5c-9.2-5.2-4.7-7-1.7-8 12.3-4.3 14.8-5.2 27.9-12.7 1.4-.8 3.2-.5 4.6.4l47.4 28.1c1.7 1 4.1 1 5.7 0l184.7-106.6c1.7-1 2.8-3 2.8-5V149.3c0-2.1-1.1-4-2.9-5.1L226.8 37.7c-1.7-1-4-1-5.7 0L36.6 144.3c-1.8 1-2.9 3-2.9 5.1v213.1c0 2 1.1 4 2.9 4.9l50.6 29.2c27.5 13.7 44.3-2.4 44.3-18.7V167.5c0-3 2.4-5.3 5.4-5.3h23.4c2.9 0 5.4 2.3 5.4 5.3V378c0 36.6-20 57.6-54.7 57.6-10.7 0-19.1 0-42.5-11.6l-48.4-27.9C8.1 389.2.7 376.3.7 362.4V149.3c0-13.8 7.4-26.8 19.4-33.7L204.6 9c11.7-6.6 27.2-6.6 38.8 0l184.7 106.7c12 6.9 19.4 19.8 19.4 33.7v213.1c0 13.8-7.4 26.7-19.4 33.7L243.4 502.8c-5.9 3.4-12.6 5.2-19.4 5.2zm149.1-210.1c0-39.9-27-50.5-83.7-58-57.4-7.6-63.2-11.5-63.2-24.9 0-11.1 4.9-25.9 47.4-25.9 37.9 0 51.9 8.2 57.7 33.8.5 2.4 2.7 4.2 5.2 4.2h24c1.5 0 2.9-.6 3.9-1.7s1.5-2.6 1.4-4.1c-3.7-44.1-33-64.6-92.2-64.6-52.7 0-84.1 22.2-84.1 59.5 0 40.4 31.3 51.6 81.8 56.6 60.5 5.9 65.2 14.8 65.2 26.7 0 20.6-16.6 29.4-55.5 29.4-48.9 0-59.6-12.3-63.2-36.6-.4-2.6-2.6-4.5-5.3-4.5h-23.9c-3 0-5.3 2.4-5.3 5.3 0 31.1 16.9 68.2 97.8 68.2 58.4-.1 92-23.2 92-63.4z"></path>
                      </svg>
                    </i>
                    <span className="font-medium">
                      Node.js
                    </span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-card border border-border rounded-xl">
                    <i className="text-2xl text-[#336791]" data-fa-i2svg="">
                      <svg className="svg-inline--fa fa-database" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="database" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg="">
                        <path fill="currentColor" d="M448 80v48c0 44.2-100.3 80-224 80S0 172.2 0 128V80C0 35.8 100.3 0 224 0S448 35.8 448 80zM393.2 214.7c20.8-7.4 39.9-16.9 54.8-28.6V288c0 44.2-100.3 80-224 80S0 332.2 0 288V186.1c14.9 11.8 34 21.2 54.8 28.6C99.7 230.7 159.5 240 224 240s124.3-9.3 169.2-25.3zM0 346.1c14.9 11.8 34 21.2 54.8 28.6C99.7 390.7 159.5 400 224 400s124.3-9.3 169.2-25.3c20.8-7.4 39.9-16.9 54.8-28.6V432c0 44.2-100.3 80-224 80S0 476.2 0 432V346.1z"></path>
                      </svg>
                    </i>
                    <span className="font-medium">
                      PostgreSQL
                    </span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-card border border-border rounded-xl">
                    <i className="text-2xl text-[#FF9900]" data-fa-i2svg="">
                      <svg className="svg-inline--fa fa-aws" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="aws" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg="">
                        <path fill="currentColor" d="M180.41 203.01c-.72 22.65 10.6 32.68 10.88 39.05a8.164 8.164 0 0 1-4.1 6.27l-12.8 8.96a10.66 10.66 0 0 1-5.63 1.92c-.43-.02-8.19 1.83-20.48-25.61a78.608 78.608 0 0 1-62.61 29.45c-16.28.89-60.4-9.24-58.13-56.21-1.59-38.28 34.06-62.06 70.93-60.05 7.1.02 21.6.37 46.99 6.27v-15.62c2.69-26.46-14.7-46.99-44.81-43.91-2.4.01-19.4-.5-45.84 10.11-7.36 3.38-8.3 2.82-10.75 2.82-7.41 0-4.36-21.48-2.94-24.2 5.21-6.4 35.86-18.35 65.94-18.18a76.857 76.857 0 0 1 55.69 17.28 70.285 70.285 0 0 1 17.67 52.36l-.01 69.29zM93.99 235.4c32.43-.47 46.16-19.97 49.29-30.47 2.46-10.05 2.05-16.41 2.05-27.4-9.67-2.32-23.59-4.85-39.56-4.87-15.15-1.14-42.82 5.63-41.74 32.26-1.24 16.79 11.12 31.4 29.96 30.48zm170.92 23.05c-7.86.72-11.52-4.86-12.68-10.37l-49.8-164.65c-.97-2.78-1.61-5.65-1.92-8.58a4.61 4.61 0 0 1 3.86-5.25c.24-.04-2.13 0 22.25 0 8.78-.88 11.64 6.03 12.55 10.37l35.72 140.83 33.16-140.83c.53-3.22 2.94-11.07 12.8-10.24h17.16c2.17-.18 11.11-.5 12.68 10.37l33.42 142.63L420.98 80.1c.48-2.18 2.72-11.37 12.68-10.37h19.72c.85-.13 6.15-.81 5.25 8.58-.43 1.85 3.41-10.66-52.75 169.9-1.15 5.51-4.82 11.09-12.68 10.37h-18.69c-10.94 1.15-12.51-9.66-12.68-10.75L328.67 110.7l-32.78 136.99c-.16 1.09-1.73 11.9-12.68 10.75h-18.3zm273.48 5.63c-5.88.01-33.92-.3-57.36-12.29a12.802 12.802 0 0 1-7.81-11.91v-10.75c0-8.45 6.2-6.9 8.83-5.89 10.04 4.06 16.48 7.14 28.81 9.6 36.65 7.53 52.77-2.3 56.72-4.48 13.15-7.81 14.19-25.68 5.25-34.95-10.48-8.79-15.48-9.12-53.13-21-4.64-1.29-43.7-13.61-43.79-52.36-.61-28.24 25.05-56.18 69.52-55.95 12.67-.01 46.43 4.13 55.57 15.62 1.35 2.09 2.02 4.55 1.92 7.04v10.11c0 4.44-1.62 6.66-4.87 6.66-7.71-.86-21.39-11.17-49.16-10.75-6.89-.36-39.89.91-38.41 24.97-.43 18.96 26.61 26.07 29.7 26.89 36.46 10.97 48.65 12.79 63.12 29.58 17.14 22.25 7.9 48.3 4.35 55.44-19.08 37.49-68.42 34.44-69.26 34.42zm40.2 104.86c-70.03 51.72-171.69 79.25-258.49 79.25A469.127 469.127 0 0 1 2.83 327.46c-6.53-5.89-.77-13.96 7.17-9.47a637.37 637.37 0 0 0 316.88 84.12 630.22 630.22 0 0 0 241.59-49.55c11.78-5 21.77 7.8 10.12 16.38zm29.19-33.29c-8.96-11.52-59.28-5.38-81.81-2.69-6.79.77-7.94-5.12-1.79-9.47 40.07-28.17 105.88-20.1 113.44-10.63 7.55 9.47-2.05 75.41-39.56 106.91-5.76 4.87-11.27 2.3-8.71-4.1 8.44-21.25 27.39-68.49 18.43-80.02z"></path>
                      </svg>
                    </i>
                    <span className="font-medium">
                      AWS / Cloud
                    </span>
                  </div>
                </div>
              </div>
              <div className="bg-card border border-border rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-8">
                  Our Process
                </h3>
                <div className="space-y-8 relative">
                  <div className="absolute left-4 top-2 bottom-2 w-px bg-border"></div>
                  <div className="relative pl-12">
                    <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-xs font-bold">
                      1
                    </div>
                    <h4 className="font-bold mb-1">
                      Discovery & Strategy
                    </h4>
                    <p className="text-sm text-secondary">
                      Understanding your goals and defining the roadmap.
                    </p>
                  </div>
                  <div className="relative pl-12">
                    <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-card border border-border flex items-center justify-center text-xs font-bold">
                      2
                    </div>
                    <h4 className="font-bold mb-1">
                      UI/UX Design
                    </h4>
                    <p className="text-sm text-secondary">
                      Prototyping intuitive interfaces for your users.
                    </p>
                  </div>
                  <div className="relative pl-12">
                    <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-card border border-border flex items-center justify-center text-xs font-bold">
                      3
                    </div>
                    <h4 className="font-bold mb-1">
                      Agile Development
                    </h4>
                    <p className="text-sm text-secondary">
                      Sprint-based coding with regular updates.
                    </p>
                  </div>
                  <div className="relative pl-12">
                    <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-card border border-border flex items-center justify-center text-xs font-bold">
                      4
                    </div>
                    <h4 className="font-bold mb-1">
                      Deployment & Growth
                    </h4>
                    <p className="text-sm text-secondary">
                      Launching and scaling your product globally.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section 4: Pricing */}
        <section id="pricing" className="py-24 bg-dark">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                Project Investment
              </h2>
              <p className="text-secondary text-lg">
                High-ticket solutions for high-growth companies.
              </p>
            </div>
            <div className="max-w-3xl mx-auto bg-card border border-border rounded-2xl p-10 glow-purple relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-primary px-6 py-1 text-xs font-bold uppercase tracking-widest rounded-bl-xl">
                Bespoke Development
              </div>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold mb-4">
                    Enterprise-Grade Applications
                  </h3>
                  <p className="text-secondary mb-8 leading-relaxed">
                    Our projects typically start at ₹80K+ depending on complexity, features, and integration requirements.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3 text-sm">
                      <i className="text-primary" data-fa-i2svg="">
                        <svg className="svg-inline--fa fa-check" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg="">
                          <path fill="currentColor" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path>
                        </svg>
                      </i>
                      Dedicated Development Team
                    </li>
                    <li className="flex items-center gap-3 text-sm">
                      <i className="text-primary" data-fa-i2svg="">
                        <svg className="svg-inline--fa fa-check" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg="">
                          <path fill="currentColor" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path>
                        </svg>
                      </i>
                      Custom Architecture Design
                    </li>
                    <li className="flex items-center gap-3 text-sm">
                      <i className="text-primary" data-fa-i2svg="">
                        <svg className="svg-inline--fa fa-check" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg="">
                          <path fill="currentColor" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path>
                        </svg>
                      </i>
                      Post-launch Support
                    </li>
                  </ul>
                </div>
                <div className="bg-cardLight p-8 rounded-xl border border-border text-center">
                  <div className="text-secondary text-sm mb-2">
                    Investment starts from
                  </div>
                  <div className="text-5xl font-bold mb-6">
                    ₹80,000
                    <span className="text-lg text-secondary font-normal">
                      +
                    </span>
                  </div>
                  <button className="w-full bg-primary hover:bg-opacity-90 text-white py-4 rounded-xl font-bold transition-all">
                    Get a Quote
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section 5: CTA */}
        <section id="cta" className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-gradient-to-br from-primary/20 to-card border border-primary/30 rounded-3xl p-16 text-center relative overflow-hidden">
              <div className="absolute top-[-100px] left-[-100px] w-64 h-64 bg-primary/20 blur-[100px] rounded-full"></div>
              <div className="absolute bottom-[-100px] right-[-100px] w-64 h-64 bg-primary/20 blur-[100px] rounded-full"></div>
              <h2 className="text-5xl font-bold mb-6 relative z-10">
                Start Your Platform Project
                <br />
                <span className="gradient-text">
                  extraordinary?
                </span>
              </h2>
              <p className="text-secondary text-xl mb-12 max-w-2xl mx-auto relative z-10">
                Schedule a discovery call today and let's discuss how we can bring your platform vision to life.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
                <button className="bg-primary hover:bg-opacity-90 text-white px-10 py-5 rounded-2xl font-bold text-xl transition-all glow-purple">
                  Book a Call
                </button>
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    <img src="/assets/images/avatar-2.jpg" className="w-10 h-10 rounded-full border-2 border-card" alt="User" />
                    <img src="/assets/images/avatar-5.jpg" className="w-10 h-10 rounded-full border-2 border-card" alt="User" />
                    <img src="/assets/images/avatar-8.jpg" className="w-10 h-10 rounded-full border-2 border-card" alt="User" />
                  </div>
                  <div className="text-sm text-secondary">
                    Joined by 200+ founders
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
