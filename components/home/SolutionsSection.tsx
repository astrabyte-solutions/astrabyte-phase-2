"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const solutions = [
  "Custom Development tailored to your operations",
  "Workflow Automation across your existing stack",
  "Internal Tools for complete team visibility",
];

export default function SolutionsSection() {
  return (
    <section className="bg-[#0A0A0A] px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto grid max-w-7xl gap-10 rounded-3xl border border-[#1F1F1F] bg-[#111111] p-8 lg:grid-cols-2 lg:p-14"
      >
        <div>
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            How We Solve It: <span className="text-[#623CEA]">Systems Engineering</span>
          </h2>
          <p className="text-[#A1A1AA]">
            We replace fragmented tools and manual handoffs with one reliable operating system.
          </p>
        </div>
        <ul className="space-y-4">
          {solutions.map((item) => (
            <li key={item} className="flex items-start gap-3 rounded-xl border border-[#1F1F1F] bg-[#141414] p-4">
              <CheckCircle2 className="mt-0.5 h-5 w-5 text-[#623CEA]" />
              <span className="text-[#E4E4E7]">{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}

