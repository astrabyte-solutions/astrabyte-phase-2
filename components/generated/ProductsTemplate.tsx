import Link from "next/link";

type ProductItem = { name: string; slug: string; description: string };

export default function ProductsTemplate({ products = [] }: { products?: ProductItem[] }) {
  const [p1] = products;
  return (
    <>
      
      <main>
        {/* Section 1: Hero */}
        <section id="hero" className="relative pt-40 pb-24 overflow-hidden h-[700px] flex items-center">
          <div className="glow-bg -top-20 -left-20"></div>
          <div className="glow-bg top-1/2 -right-20 transform -translate-y-1/2"></div>
          <div className="max-w-7xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-surface mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-xs font-medium text-secondary uppercase tracking-widest">
                Ready Systems for Fast Teams
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Use a System That
              <br />
              <span className="text-primary">
                Already Works
              </span>
            </h1>
            <p className="text-secondary text-lg md:text-xl max-w-2xl mx-auto mb-12">
              We build custom systems for clients, and selected systems are available as ready-to-use products.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/book-call" className="bg-primary hover:bg-opacity-90 text-white px-8 py-4 rounded-xl text-lg font-semibold w-full sm:w-auto transition-all text-center">
                Book a Demo
              </Link>
              <Link href="/products/insightflow" className="bg-surface border border-border hover:bg-surfaceLight text-white px-8 py-4 rounded-xl text-lg font-semibold w-full sm:w-auto transition-all text-center">
                View Details
              </Link>
            </div>
          </div>
        </section>
        {/* Section 2: Product Detail Block */}
        <section id="products" className="py-24 bg-dark">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-4">
                Product Overview
              </h2>
              <p className="text-secondary">
                We currently offer one ready system, built from real delivery workflows.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-surface border border-border p-8 rounded-2xl hover:border-primary/50 transition-all group">
                <div className="w-12 h-12 bg-surfaceLight border border-border rounded-xl flex items-center justify-center mb-6 text-primary">
                  <i className="text-xl" data-fa-i2svg="">
                    <svg className="svg-inline--fa fa-chart-line" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chart-line" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                      <path fill="currentColor" d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V400c0 44.2 35.8 80 80 80H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z"></path>
                    </svg>
                  </i>
                </div>
                <h3 className="text-xl font-bold mb-3">
                  {p1?.name || "Operations Management System"}
                </h3>
                <p className="text-secondary text-sm leading-relaxed mb-8">
                  {p1?.description || "A ready-to-use internal system for teams that need operational clarity, faster execution, and fewer moving parts."}
                </p>
                <ul className="space-y-3 text-sm text-secondary mb-8">
                  <li>• Manage projects, tasks, and teams in one place</li>
                  <li>• Centralize meetings, notes, and operational knowledge</li>
                  <li>• Track progress and ownership with live visibility</li>
                  <li>• Run repeatable workflows without spreadsheet chaos</li>
                </ul>
                <p className="text-sm text-secondary mb-6">
                  Built for agencies, startups, and SMEs that need a ready system instead of another generic tool.
                </p>
                <div className="flex gap-3">
                  <Link href={`/products/${p1?.slug || "insightflow"}`} className="flex-1 bg-surfaceLight border border-border hover:bg-primary hover:border-primary py-3 rounded-xl text-sm font-medium transition-all text-center">
                    View Details
                  </Link>
                  <Link href="/book-call" className="flex-1 bg-primary hover:bg-opacity-90 py-3 rounded-xl text-sm font-medium transition-all text-center">
                    Book Demo
                  </Link>
                </div>
              </div>
              <div className="bg-surface border border-border p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4">Why Not Generic Tools?</h3>
                <p className="text-secondary mb-4">
                  Generic tools are built for average workflows. Your operations are not average.
                </p>
                <p className="text-secondary mb-4">
                  This product is shaped by real implementation work across service engagements, so it solves practical execution issues from day one.
                </p>
                <p className="text-secondary">
                  You get faster adoption, cleaner operations, and clearer ROI without building from scratch.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Section 3: Deployment */}
        <section id="deployment" className="py-24 relative">
          <div className="glow-bg bottom-0 left-1/2 transform -translate-x-1/2 opacity-50"></div>
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-surfaceLight border border-border rounded-3xl p-12 overflow-hidden relative">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h2 className="text-4xl font-bold mb-6">
                    Ready to Deploy Fast
                  </h2>
                  <p className="text-secondary text-lg mb-8">
                    Start with a proven system now, then customize as your operations grow.
                  </p>
                  <ul className="space-y-4 mb-10">
                    <li className="flex items-center gap-3 text-secondary">
                      <i className="text-primary" data-fa-i2svg="">
                        <svg className="svg-inline--fa fa-circle-check" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                          <path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path>
                        </svg>
                      </i>
                      <span>
                        Fast onboarding and rollout
                      </span>
                    </li>
                    <li className="flex items-center gap-3 text-secondary">
                      <i className="text-primary" data-fa-i2svg="">
                        <svg className="svg-inline--fa fa-circle-check" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                          <path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path>
                        </svg>
                      </i>
                      <span>
                        Built from real operational use cases
                      </span>
                    </li>
                    <li className="flex items-center gap-3 text-secondary">
                      <i className="text-primary" data-fa-i2svg="">
                        <svg className="svg-inline--fa fa-circle-check" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                          <path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path>
                        </svg>
                      </i>
                      <span>
                        Supports scale without rebuilding
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="relative">
                  <div className="bg-dark border border-border rounded-2xl p-6 font-mono text-sm shadow-2xl">
                    <div className="flex gap-2 mb-4">
                      <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                    </div>
                    <div className="text-secondary">
                      <p className="text-primary mb-2">
                        # Pull the container
                      </p>
                      <p className="mb-4">
                        docker pull coreos/insightflow:latest
                      </p>
                      <p className="text-primary mb-2">
                        # Run the service
                      </p>
                      <p className="mb-2">
                        docker run -d -p 8080:8080 \
                      </p>
                      <p className="mb-2">
                        --name insightflow \
                      </p>
                      <p className="mb-2">
                        -e API_KEY=sk_prod_... \
                      </p>
                      <p>
                        coreos/insightflow
                      </p>
                    </div>
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 blur-3xl -z-10"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Section 4: Call to Action */}
        <section id="cta" className="py-24">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Use a system that already works
            </h2>
            <p className="text-secondary text-lg mb-12">
              Skip building from scratch. Book a demo and see how this system fits your workflow.
            </p>
            <div className="flex justify-center">
              <Link href="/book-call" className="bg-primary hover:bg-opacity-90 text-white px-10 py-5 rounded-xl text-xl font-semibold transition-all shadow-lg shadow-primary/25">
                Book a Demo
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      {/* SEO & Schema */}
    </>
  );
}
