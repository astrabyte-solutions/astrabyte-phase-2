"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all ${
        scrolled ? "border-[#1F1F1F] bg-[#0A0A0A]/80 backdrop-blur-xl" : "border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/assets/images/logo-main.png" alt="Astrabyte logo" width={32} height={32} className="h-8 w-8" />
          <span className="text-xl font-bold text-white">Astrabyte</span>
        </Link>
        <div className="hidden items-center gap-8 text-sm text-[#A1A1AA] md:flex">
          <Link href="/" className="hover:text-white">Home</Link>
          <Link href="/about" className="hover:text-white">About</Link>
          <Link href="/services" className="hover:text-white">Services</Link>
          <Link href="/products" className="hover:text-white">Products</Link>
          <Link href="/blog" className="hover:text-white">Blog</Link>
        </div>
        <Link href="/book-call" className="rounded-xl bg-[#623CEA] px-5 py-2.5 text-sm font-semibold text-white">
          Book a Call
        </Link>
      </nav>
    </header>
  );
}

