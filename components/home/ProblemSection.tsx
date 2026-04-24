"use client";

import { Link2Off, Hand, EyeOff } from "lucide-react";
import { motion } from "framer-motion";

const problemCards = [
  {
    title: "Disconnected Tools",
    description: "Data silos between platforms lead to errors and wasted time syncing information manually.",
    icon: Link2Off,
    iconClass: "text-red-400",
    bgClass: "bg-red-500/10",
  },
  {
    title: "Manual Processes",
    description: "Repetitive tasks drain your team's energy and block high-value strategic work.",
    icon: Hand,
    iconClass: "text-orange-400",
    bgClass: "bg-orange-500/10",
  },
  {
    title: "Poor Visibility",
    description: "Without centralized visibility, KPI and operational decisions become delayed and reactive.",
    icon: EyeOff,
    iconClass: "text-[#623CEA]",
    bgClass: "bg-[#623CEA]/10",
  },
];

export default function ProblemSection() {
  return (
    <section className="bg-[#080808] px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto max-w-7xl"
      >
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-5xl">
            Stop Losing Profit to <span className="text-[#623CEA]">Inefficiency</span>
          </h2>
          <p className="mx-auto max-w-2xl text-[#A1A1AA]">
            Disconnected tools and manual processes are the silent killers of growing businesses.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {problemCards.map((card) => {
            const Icon = card.icon;
            return (
              <article
                key={card.title}
                className="rounded-2xl border border-[#1F1F1F] bg-[#111111] p-8 transition hover:border-[#623CEA]/50"
              >
                <div className={`mb-6 flex h-12 w-12 items-center justify-center rounded-xl ${card.bgClass} ${card.iconClass}`}>
                  <Icon size={20} />
                </div>
                <h3 className="mb-3 text-xl font-bold text-white">{card.title}</h3>
                <p className="text-sm leading-relaxed text-[#A1A1AA]">{card.description}</p>
              </article>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
