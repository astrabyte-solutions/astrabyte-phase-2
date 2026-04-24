"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="bg-[#0A0A0A] px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto max-w-7xl rounded-3xl border border-[#623CEA]/30 bg-[#623CEA]/10 p-10 text-center md:p-16"
      >
        <h2 className="mb-4 text-3xl font-bold text-white md:text-5xl">Let&apos;s Build Your Business System</h2>
        <p className="mx-auto mb-8 max-w-2xl text-[#CFC7F7]">
          Ready to eliminate manual work and scale operations with custom engineering?
        </p>
        <Link
          href="/book-call"
          className="inline-flex rounded-xl bg-[#623CEA] px-8 py-4 font-semibold text-white transition hover:scale-[1.02]"
        >
          Book Your Free Audit
        </Link>
      </motion.div>
    </section>
  );
}

