"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <motion.section
      id="hero"
      className="relative pt-40 pb-24 px-6 overflow-hidden h-[850px] flex items-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="purple-glow -top-20 -right-20" />
      <div className="purple-glow top-1/2 -left-40" />
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold mb-6 tracking-wider uppercase">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            Next-Gen Business Engineering
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-8">
            Build Custom Business Systems That <span className="text-primary">Scale Operations</span>
          </h1>

          <p className="text-xl text-secondary mb-10 leading-relaxed max-w-xl">
            Astrabyte Solutions helps businesses design and implement internal tools, automation workflows, and
            scalable platforms that replace inefficient processes and disconnected software.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <button className="bg-primary hover:scale-105 px-8 py-4 rounded-xl text-lg font-bold transition-all flex items-center justify-center gap-2">
              Book a Call{" "}
              <i className="text-sm">
                <svg
                  className="svg-inline--fa fa-arrow-right"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="arrow-right"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                  />
                </svg>
              </i>
            </button>
            <button className="border border-border hover:bg-card px-8 py-4 rounded-xl text-lg font-bold transition-all text-secondary hover:text-white">
              View Case Studies
            </button>
          </div>

          <div className="mt-12 flex items-center gap-8 grayscale opacity-50">
            <div className="flex flex-col">
              <span className="text-2xl font-bold">50+</span>
              <span className="text-xs text-secondary uppercase tracking-widest">Clients Served</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold">200+</span>
              <span className="text-xs text-secondary uppercase tracking-widest">Systems Built</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold">40%</span>
              <span className="text-xs text-secondary uppercase tracking-widest">Efficiency Boost</span>
            </div>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full group-hover:bg-primary/30 transition-all" />
          <div className="relative bg-card border border-border p-4 rounded-2xl shadow-2xl overflow-hidden">
            <img
              className="w-full h-[500px] object-cover rounded-xl"
              src="/assets/images/47e57262c6-423487fc2ee12486f581.png"
              alt="modern dashboard interface for business automation with dark glassmorphism and purple accents"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
