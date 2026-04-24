"use client";

import { motion } from "framer-motion";
import { BarChart3, Users, DollarSign } from "lucide-react";

const stats = [
  { label: "Clients Served", value: "50+", icon: Users },
  { label: "Systems Built", value: "200+", icon: BarChart3 },
  { label: "Efficiency Gain", value: "40%", icon: DollarSign },
];

export default function StatsSection() {
  return (
    <section className="bg-[#080808] px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto max-w-7xl"
      >
        <h2 className="mb-12 text-center text-3xl font-bold text-white md:text-4xl">Measurable Outcomes</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <article key={stat.label} className="rounded-2xl border border-[#1F1F1F] bg-[#111111] p-8 text-center">
                <Icon className="mx-auto mb-4 h-8 w-8 text-[#623CEA]" />
                <p className="mb-1 text-3xl font-bold text-white">{stat.value}</p>
                <p className="text-sm uppercase tracking-widest text-[#A1A1AA]">{stat.label}</p>
              </article>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}

