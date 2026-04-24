"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";
export function Stagger({ children, className }: { children: ReactNode; className?: string }) { return <motion.div className={className} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} variants={{ show: { transition: { staggerChildren: 0.08 } } }}>{children}</motion.div>; }
export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) { return <motion.div className={className} variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }} transition={{ duration: 0.35, ease: "easeOut" }} whileHover={{ y: -4 }}>{children}</motion.div>; }
