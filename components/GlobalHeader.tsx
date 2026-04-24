"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CalendarCheck, Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/blog", label: "Blogs" },
];

export default function GlobalHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <nav
        className="fixed top-0 w-full z-[80] border-b border-[#1F1F1F]"
        style={{ background: scrolled ? "rgba(10,10,10,0.82)" : "rgba(10,10,10,0.72)", backdropFilter: "blur(12px)" }}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-6 py-4 flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center shrink-0">
            <Image src="/assets/images/logo-main.png" alt="Astrabyte logo" width={40} height={40} className="w-10 h-10" />
          </Link>
          <div className="hidden lg:flex flex-1 items-center justify-center gap-8 text-sm text-[#A1A1AA]">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-white transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
          <Link href="/book-call" className="hidden lg:inline-flex shrink-0 bg-[#623CEA] text-white hover:bg-opacity-90 px-6 py-3 rounded-xl text-sm font-semibold transition-all">
            <CalendarCheck size={16} className="mr-2" />
            Book a Free Call
          </Link>
          <button
            className="lg:hidden rounded-lg border border-[#1F1F1F] bg-[#111111] p-2.5 text-white"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </nav>

      <div className={`fixed inset-0 z-[200] lg:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}>
        <button
          className={`absolute inset-0 bg-black/75 transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`}
          onClick={() => setOpen(false)}
          aria-label="Close menu overlay"
        />
        <aside
          className={`absolute right-0 top-0 h-full w-[88%] max-w-sm border-l border-[#1F1F1F] p-6 transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
          style={{ backgroundColor: "#0A0A0A", boxShadow: "-24px 0 48px rgba(0,0,0,0.7)" }}
        >
          <div className="mb-10 flex items-center justify-between border-b border-[#1F1F1F] pb-5">
            <div className="flex items-center">
              <Image src="/assets/images/logo-main.png" alt="Astrabyte logo" width={36} height={36} className="w-9 h-9" />
            </div>
            <button className="rounded-lg border border-[#1F1F1F] bg-[#111111] p-2 text-white" onClick={() => setOpen(false)} aria-label="Close menu">
              <X size={20} />
            </button>
          </div>
          <div className="flex flex-col gap-6 text-lg">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="text-[#E4E4E7] hover:text-white transition-colors" onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            ))}
            <Link
              href="/book-call"
              className="mt-4 inline-flex items-center justify-center rounded-xl bg-[#623CEA] text-white px-5 py-3.5 text-base font-semibold"
              onClick={() => setOpen(false)}
            >
              <CalendarCheck size={16} className="mr-2" />
              Book a Free Call
            </Link>
          </div>
        </aside>
      </div>
    </>
  );
}

