import Link from "next/link";

type ProductDetailData = {
  name: string;
  description: string;
  pricing: string;
  cta: string;
  features: unknown;
  useCases: unknown;
};

export default function ProductDetailTemplate({ product }: { product?: ProductDetailData }) {
  const useCases = (product?.useCases as string[] | undefined) || ["Agencies", "Startups", "Operations-heavy teams"];
  return (
    <>
      
      <main>
        {/* SECTION 1: HERO */}
        <section id="hero" className="relative pt-40 pb-20 px-6 overflow-hidden min-h-[800px] flex items-center">
          <div className="glow-effect top-[-10%] left-[-10%]"></div>
          <div className="glow-effect bottom-[-10%] right-[-10%]"></div>
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div id="hero-content">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-surface mb-6">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                <span className="text-xs font-medium text-textSecondary uppercase tracking-widest">
                  All-in-One Operations Management System
                </span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
                Run Operations in
                <span className="text-primary"> One System</span>
              </h1>
              <p className="text-xl text-textSecondary mb-8 max-w-lg">
                Manage projects, tasks, meetings, documentation, and collaboration in one clean workspace built for speed and operational clarity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/book-call" className="bg-primary hover:bg-opacity-90 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all text-center">
                  Book Demo
                </Link>
                <Link href="/products" className="border border-border bg-surface hover:bg-surfaceAlt text-white px-8 py-4 rounded-xl font-bold text-lg transition-all text-center">
                  Back to Products
                </Link>
              </div>
            </div>
            <div id="hero-image" className="relative">
              <div className="rounded-2xl border border-border overflow-hidden bg-surface shadow-2xl">
                <img className="w-full h-auto object-cover" src="/assets/images/9c566d4c7b-5b79694d51df72cb3518.png" alt="SaaS dashboard showing project timeline, task management and team analytics in dark mode with purple accents" />
              </div>
            </div>
          </div>
        </section>
        {/* SECTION 2: PROBLEM & SOLUTION */}
        <section id="solution" className="py-24 px-6 bg-surface">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-20">
              <div id="problem-card" className="p-10 rounded-2xl border border-border bg-background relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <i className="text-8xl" data-fa-i2svg="">
                    <svg className="svg-inline--fa fa-triangle-exclamation" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="triangle-exclamation" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                      <path fill="currentColor" d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"></path>
                    </svg>
                  </i>
                </div>
                <h2 className="text-3xl font-bold mb-4">
                  Problem
                </h2>
                <p className="text-textSecondary text-lg mb-6 leading-relaxed">
                  Too many tools, scattered information, and unclear ownership slow teams down every day.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-red-400">
                    <i data-fa-i2svg="">
                      <svg className="svg-inline--fa fa-circle-xmark" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-xmark" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                        <path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"></path>
                      </svg>
                    </i>
                    <span>
                      Too many tools
                    </span>
                  </li>
                  <li className="flex items-center gap-3 text-red-400">
                    <i data-fa-i2svg="">
                      <svg className="svg-inline--fa fa-circle-xmark" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-xmark" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                        <path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"></path>
                      </svg>
                    </i>
                    <span>
                      No central system
                    </span>
                  </li>
                  <li className="flex items-center gap-3 text-red-400">
                    <i data-fa-i2svg="">
                      <svg className="svg-inline--fa fa-circle-xmark" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-xmark" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                        <path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"></path>
                      </svg>
                    </i>
                    <span>
                      Team confusion
                    </span>
                  </li>
                  <li className="flex items-center gap-3 text-red-400">
                    <i data-fa-i2svg="">
                      <svg className="svg-inline--fa fa-circle-xmark" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-xmark" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                        <path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"></path>
                      </svg>
                    </i>
                    <span>
                      Scattered information
                    </span>
                  </li>
                </ul>
              </div>
              <div id="solution-card" className="p-10 rounded-2xl border border-primary/30 bg-primary/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <i className="text-8xl text-primary" data-fa-i2svg="">
                    <svg className="svg-inline--fa fa-rocket" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="rocket" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                      <path fill="currentColor" d="M156.6 384.9L125.7 354c-8.5-8.5-11.5-20.8-7.7-32.2c3-8.9 7-20.5 11.8-33.8L24 288c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7 .2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3l82.3 0c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8c13.4 72.9 9.3 194.8-111.4 276.7c-3.5 2.4-7.3 4.8-11.3 7.2v82.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1 .2s-12.1-12.2-12.1-20.9V380.8c-14.1 4.9-26.4 8.9-35.7 11.9c-11.2 3.6-23.4 .5-31.8-7.8zM384 168a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"></path>
                    </svg>
                  </i>
                </div>
                <h2 className="text-3xl font-bold mb-4">
                  Solution
                </h2>
                <p className="text-textSecondary text-lg mb-6 leading-relaxed">
                  One system to manage everything with less friction and better execution.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-primary">
                    <i data-fa-i2svg="">
                      <svg className="svg-inline--fa fa-circle-check" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                        <path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path>
                      </svg>
                    </i>
                    <span>
                      Manage projects end-to-end
                    </span>
                  </li>
                  <li className="flex items-center gap-3 text-primary">
                    <i data-fa-i2svg="">
                      <svg className="svg-inline--fa fa-circle-check" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                        <path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path>
                      </svg>
                    </i>
                    <span>
                      Assign and track tasks
                    </span>
                  </li>
                  <li className="flex items-center gap-3 text-primary">
                    <i data-fa-i2svg="">
                      <svg className="svg-inline--fa fa-circle-check" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                        <path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path>
                      </svg>
                    </i>
                    <span>
                      Conduct and log meetings
                    </span>
                  </li>
                  <li className="flex items-center gap-3 text-primary">
                    <i data-fa-i2svg="">
                      <svg className="svg-inline--fa fa-circle-check" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                        <path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path>
                      </svg>
                    </i>
                    <span>
                      Store internal documentation (wiki)
                    </span>
                  </li>
                  <li className="flex items-center gap-3 text-primary">
                    <i data-fa-i2svg="">
                      <svg className="svg-inline--fa fa-circle-check" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                        <path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path>
                      </svg>
                    </i>
                    <span>
                      Collaborate with your team
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* SECTION 3: FEATURES */}
        <section id="features" className="py-24 px-6 relative">
          <div className="glow-effect top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                Who It Is For
              </h2>
              <p className="text-textSecondary max-w-2xl mx-auto">
                Built for teams that need operational clarity and fast execution.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div id="feat-projects" className="p-8 rounded-2xl border border-border bg-surface hover:border-primary/50 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-background border border-border flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                  <i className="text-primary text-xl" data-fa-i2svg="">
                    <svg className="svg-inline--fa fa-diagram-project" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="diagram-project" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg="">
                      <path fill="currentColor" d="M0 80C0 53.5 21.5 32 48 32h96c26.5 0 48 21.5 48 48V96H384V80c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H432c-26.5 0-48-21.5-48-48V160H192v16c0 1.7-.1 3.4-.3 5L272 288h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H272c-26.5 0-48-21.5-48-48V336c0-1.7 .1-3.4 .3-5L144 224H48c-26.5 0-48-21.5-48-48V80z"></path>
                    </svg>
                  </i>
                </div>
                <h3 className="text-xl font-bold mb-3">
                  {useCases[0] || "Agencies"}
                </h3>
                <p className="text-textSecondary text-sm">
                  Managing multiple client projects with one shared execution system.
                </p>
              </div>
              <div id="feat-tasks" className="p-8 rounded-2xl border border-border bg-surface hover:border-primary/50 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-background border border-border flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                  <i className="text-primary text-xl" data-fa-i2svg="">
                    <svg className="svg-inline--fa fa-list-check" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="list-check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                      <path fill="currentColor" d="M152.1 38.2c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 113C-2.3 103.6-2.3 88.4 7 79s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zm0 160c9.9 8.9 10.7 24 1.8 33.9l-72 80c-4.4 4.9-10.6 7.8-17.2 7.9s-12.9-2.4-17.6-7L7 273c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l22.1 22.1 55.1-61.2c8.9-9.9 24-10.7 33.9-1.8zM224 96c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H256c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H256c-17.7 0-32-14.3-32-32zM160 416c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H192c-17.7 0-32-14.3-32-32zM48 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path>
                    </svg>
                  </i>
                </div>
                <h3 className="text-xl font-bold mb-3">
                  {useCases[1] || "Startups"}
                </h3>
                <p className="text-textSecondary text-sm">
                  Running lean teams that need speed without operational confusion.
                </p>
              </div>
              <div id="feat-wiki" className="p-8 rounded-2xl border border-border bg-surface hover:border-primary/50 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-background border border-border flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                  <i className="text-primary text-xl" data-fa-i2svg="">
                    <svg className="svg-inline--fa fa-book-open" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="book-open" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg="">
                      <path fill="currentColor" d="M249.6 471.5c10.8 3.8 22.4-4.1 22.4-15.5V78.6c0-4.2-1.6-8.4-5-11C247.4 52 202.4 32 144 32C93.5 32 46.3 45.3 18.1 56.1C6.8 60.5 0 71.7 0 83.8V454.1c0 11.9 12.8 20.2 24.1 16.5C55.6 460.1 105.5 448 144 448c33.9 0 79 14 105.6 23.5zm76.8 0C353 462 398.1 448 432 448c38.5 0 88.4 12.1 119.9 22.6c11.3 3.8 24.1-4.6 24.1-16.5V83.8c0-12.1-6.8-23.3-18.1-27.6C529.7 45.3 482.5 32 432 32c-58.4 0-103.4 20-123 35.6c-3.3 2.6-5 6.8-5 11V456c0 11.4 11.7 19.3 22.4 15.5z"></path>
                    </svg>
                  </i>
                </div>
                <h3 className="text-xl font-bold mb-3">
                  {useCases[2] || "Operations-heavy teams"}
                </h3>
                <p className="text-textSecondary text-sm">
                  Coordinating people, process, and delivery from one place.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* SECTION 4: PRICING */}
        {/* <section id="pricing" className="py-24 px-6 bg-surfaceAlt"> */}
          {/* <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                Pricing
              </h2>
              <p className="text-textSecondary">
                {product?.pricing || "Starting at $100/month."}
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div id="price-starter" className="p-8 rounded-2xl border border-border bg-background flex flex-col">
                <h3 className="text-xl font-bold mb-2">
                  Starter
                </h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-bold">
                    $49
                  </span>
                  <span className="text-textSecondary">
                    /month
                  </span>
                </div>
                <ul className="space-y-4 mb-8 flex-grow">
                  <li className="flex items-center gap-3 text-sm">
                    <i className="text-primary" data-fa-i2svg="">
                      <svg className="svg-inline--fa fa-check" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg="">
                        <path fill="currentColor" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path>
                      </svg>
                    </i>
                    5 Team Members
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <i className="text-primary" data-fa-i2svg="">
                      <svg className="svg-inline--fa fa-check" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg="">
                        <path fill="currentColor" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path>
                      </svg>
                    </i>
                    Unlimited Projects
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <i className="text-primary" data-fa-i2svg="">
                      <svg className="svg-inline--fa fa-check" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg="">
                        <path fill="currentColor" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path>
                      </svg>
                    </i>
                    50GB Storage
                  </li>
                </ul>
                <button className="w-full py-3 rounded-xl border border-border font-semibold hover:bg-surface transition-all">
                  Get Started
                </button>
              </div>
              <div id="price-pro" className="p-8 rounded-2xl border-2 border-primary bg-background flex flex-col relative scale-105 shadow-2xl shadow-primary/10">
                <div className="absolute top-0 right-8 -translate-y-1/2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                  MOST POPULAR
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Pro
                </h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-bold">
                    $99
                  </span>
                  <span className="text-textSecondary">
                    /month
                  </span>
                </div>
                <ul className="space-y-4 mb-8 flex-grow">
                  <li className="flex items-center gap-3 text-sm">
                    <i className="text-primary" data-fa-i2svg="">
                      <svg className="svg-inline--fa fa-check" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg="">
                        <path fill="currentColor" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path>
                      </svg>
                    </i>
                    20 Team Members
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <i className="text-primary" data-fa-i2svg="">
                      <svg className="svg-inline--fa fa-check" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg="">
                        <path fill="currentColor" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path>
                      </svg>
                    </i>
                    Advanced Analytics
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <i className="text-primary" data-fa-i2svg="">
                      <svg className="svg-inline--fa fa-check" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg="">
                        <path fill="currentColor" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path>
                      </svg>
                    </i>
                    200GB Storage
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <i className="text-primary" data-fa-i2svg="">
                      <svg className="svg-inline--fa fa-check" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg="">
                        <path fill="currentColor" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path>
                      </svg>
                    </i>
                    Priority Support
                  </li>
                </ul>
                <button className="w-full py-3 rounded-xl bg-primary text-white font-semibold hover:bg-opacity-90 transition-all">
                  {product?.cta || "Book a Call"}
                </button>
              </div>
              <div id="price-enterprise" className="p-8 rounded-2xl border border-border bg-background flex flex-col">
                <h3 className="text-xl font-bold mb-2">
                  Enterprise
                </h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-bold">
                    $149
                  </span>
                  <span className="text-textSecondary">
                    /month
                  </span>
                </div>
                <ul className="space-y-4 mb-8 flex-grow">
                  <li className="flex items-center gap-3 text-sm">
                    <i className="text-primary" data-fa-i2svg="">
                      <svg className="svg-inline--fa fa-check" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg="">
                        <path fill="currentColor" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path>
                      </svg>
                    </i>
                    Unlimited Members
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <i className="text-primary" data-fa-i2svg="">
                      <svg className="svg-inline--fa fa-check" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg="">
                        <path fill="currentColor" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path>
                      </svg>
                    </i>
                    Custom Branding
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <i className="text-primary" data-fa-i2svg="">
                      <svg className="svg-inline--fa fa-check" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg="">
                        <path fill="currentColor" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path>
                      </svg>
                    </i>
                    1TB Storage
                  </li>
                  <li className="flex items-center gap-3 text-sm">
                    <i className="text-primary" data-fa-i2svg="">
                      <svg className="svg-inline--fa fa-check" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg="">
                        <path fill="currentColor" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path>
                      </svg>
                    </i>
                    Dedicated Manager
                  </li>
                </ul>
                <button className="w-full py-3 rounded-xl border border-border font-semibold hover:bg-surface transition-all">
                  Contact Sales
                </button>
              </div>
            </div>
          </div> */}
        {/* </section> */}
        {/* SECTION 5: FAQ & DEPLOYMENT */}
        <section id="faq" className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-20">
              <div id="faq-content">
                <h2 className="text-4xl font-bold mb-10">
                  Use Cases
                </h2>
                <div className="space-y-4">
                  <div className="p-6 rounded-xl border border-border bg-surface">
                    <h4 className="font-bold mb-2">
                      Managing client projects
                    </h4>
                    <p className="text-textSecondary text-sm">
                      Keep timelines, ownership, and status centralized for every client engagement.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl border border-border bg-surface">
                    <h4 className="font-bold mb-2">
                      Internal team coordination
                    </h4>
                    <p className="text-textSecondary text-sm">
                      Align teams on priorities, tasks, and meetings without switching across tools.
                    </p>
                  </div>
                  <div className="p-6 rounded-xl border border-border bg-surface">
                    <h4 className="font-bold mb-2">
                      Company wiki and meeting tracking
                    </h4>
                    <p className="text-textSecondary text-sm">
                      Preserve decisions, SOPs, and knowledge so execution does not depend on memory.
                    </p>
                  </div>
                </div>
              </div>
              <div id="deployment-stats" className="flex flex-col justify-center">
                <div className="p-10 rounded-2xl border border-border bg-surfaceAlt relative overflow-hidden">
                  <h3 className="text-2xl font-bold mb-6">
                  Deployment & Pricing
                  </h3>
                  <ul className="space-y-3 text-textSecondary text-sm mb-6">
                    <li>- Self-hosted on your server</li>
                    <li>- Secure with full control</li>
                    <li>- Docker-based setup</li>
                    <li>- Setup support provided</li>
                  </ul>
                  <div className="p-4 rounded-xl border border-border bg-background mb-6">
                    <p className="text-sm text-textSecondary">Starting at</p>
                    <p className="text-2xl font-bold">$100/month</p>
                    <p className="text-sm text-textSecondary">One-time setup available</p>
                    <p className="text-sm text-textSecondary mt-1">Custom pricing based on team size</p>
                  </div>
                  <h4 className="font-bold mb-2">Why this instead of generic tools?</h4>
                  <ul className="space-y-2 text-textSecondary text-sm">
                    <li>- Built from real workflows</li>
                    <li>- No unnecessary complexity</li>
                    <li>- Customizable for your operations</li>
                  </ul>
                  <div className="mt-8 flex items-center gap-4 p-4 rounded-xl border border-border bg-background">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <i className="text-primary" data-fa-i2svg="">
                        <svg className="svg-inline--fa fa-docker" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="docker" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg="">
                          <path fill="currentColor" d="M349.9 236.3h-66.1v-59.4h66.1v59.4zm0-204.3h-66.1v60.7h66.1V32zm78.2 144.8H362v59.4h66.1v-59.4zm-156.3-72.1h-66.1v60.1h66.1v-60.1zm78.1 0h-66.1v60.1h66.1v-60.1zm276.8 100c-14.4-9.7-47.6-13.2-73.1-8.4-3.3-24-16.7-44.9-41.1-63.7l-14-9.3-9.3 14c-18.4 27.8-23.4 73.6-3.7 103.8-8.7 4.7-25.8 11.1-48.4 10.7H2.4c-8.7 50.8 5.8 116.8 44 162.1 37.1 43.9 92.7 66.2 165.4 66.2 157.4 0 273.9-72.5 328.4-204.2 21.4.4 67.6.1 91.3-45.2 1.5-2.5 6.6-13.2 8.5-17.1l-13.3-8.9zm-511.1-27.9h-66v59.4h66.1v-59.4zm78.1 0h-66.1v59.4h66.1v-59.4zm78.1 0h-66.1v59.4h66.1v-59.4zm-78.1-72.1h-66.1v60.1h66.1v-60.1z"></path>
                        </svg>
                      </i>
                    </div>
                    <div>
                      <p className="text-sm font-bold">Docker-based deployment</p>
                      <p className="text-xs text-textSecondary">
                        We deploy and support setup for your team
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="how-it-works" className="py-24 px-6 bg-surface">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-10 text-center">How It Works</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="p-6 rounded-xl border border-border bg-background"><p className="text-primary font-bold mb-2">Step 1</p><p>Book demo</p></div>
              <div className="p-6 rounded-xl border border-border bg-background"><p className="text-primary font-bold mb-2">Step 2</p><p>We understand your workflow</p></div>
              <div className="p-6 rounded-xl border border-border bg-background"><p className="text-primary font-bold mb-2">Step 3</p><p>We deploy system</p></div>
              <div className="p-6 rounded-xl border border-border bg-background"><p className="text-primary font-bold mb-2">Step 4</p><p>You start using</p></div>
            </div>
          </div>
        </section>
        <section id="final-cta" className="py-24 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Start running your operations in one system</h2>
            <Link href="/book-call" className="bg-primary hover:bg-opacity-90 text-white px-10 py-5 rounded-xl text-xl font-semibold transition-all shadow-lg shadow-primary/25">
              Book a Demo
            </Link>
          </div>
        </section>
      </main>
      
    </>
  );
}
