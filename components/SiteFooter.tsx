import Image from "next/image";
import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-[#1F1F1F] bg-[#111111] py-16">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="mb-4 flex items-center gap-2">
            <Image src="/assets/images/logo-main.png" alt="Astrabyte logo" width={32} height={32} className="h-8 w-8" />
            <span className="text-xl font-bold text-white">Astrabyte</span>
          </div>
          <p className="max-w-sm text-[#A1A1AA]">
            We engineer business systems that replace fragmented tools with scalable operations.
          </p>
        </div>
        <div>
          <h4 className="mb-4 font-semibold text-white">Links</h4>
          <div className="space-y-2 text-sm text-[#A1A1AA]">
            <Link className="block hover:text-white" href="/">Home</Link>
            <Link className="block hover:text-white" href="/about">About</Link>
            <Link className="block hover:text-white" href="/blog">Blog</Link>
          </div>
        </div>
        <div>
          <h4 className="mb-4 font-semibold text-white">Contact</h4>
          <div className="space-y-2 text-sm text-[#A1A1AA]">
            <Link className="block hover:text-white" href="/services">Services</Link>
            <Link className="block hover:text-white" href="/products">Products</Link>
            <Link className="block hover:text-white" href="/book-call">Book a Call</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

