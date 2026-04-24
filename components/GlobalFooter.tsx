import Image from "next/image";
import Link from "next/link";

export default function GlobalFooter() {
  return (
    <footer className="border-t border-[#1F1F1F] bg-[#0A0A0A] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center mb-6">
              <Image src="/assets/images/logo-main.png" alt="Astrabyte logo" width={40} height={40} className="w-10 h-10" />
            </div>
            <p className="text-[#A1A1AA] text-sm leading-relaxed">
              Building the future of internal tools and business automation.
            </p>
         
          </div>
          <div>
            <h4 className="font-bold mb-6 text-white">Services</h4>
            <ul className="space-y-4 text-sm text-[#A1A1AA]">
              <li><Link href="/services/operations-optimization" className="hover:text-white transition-colors">Operations Optimization</Link></li>
              <li><Link href="/services/ai-automation" className="hover:text-white transition-colors">AI &amp; Automation</Link></li>
              <li><Link href="/services/custom-development" className="hover:text-white transition-colors">Custom Development</Link></li>
              <li><Link href="/services/saas-product-development" className="hover:text-white transition-colors">SaaS Product Development</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-4 text-sm text-[#A1A1AA]">
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/products" className="hover:text-white transition-colors">Products</Link></li>
              <li><Link href="/book-call" className="hover:text-white transition-colors">Book Call</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 text-white">Legal</h4>
            <ul className="space-y-4 text-sm text-[#A1A1AA]">
              <li><Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-[#1F1F1F] text-xs text-[#A1A1AA] gap-4">
          <p>© 2024 ASTRABYTE. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="https://www.instagram.com/astrabytesolutions" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Instagram</a>
            <a href="https://www.linkedin.com/company/astra-byte-solutions" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="https://x.com/astrabytesol" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">X</a>
            <a href="https://www.facebook.com/astrabytesolutions" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

