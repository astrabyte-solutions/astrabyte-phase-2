import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import "@/styles/pages/common.css";
import { defaultMetadata, organizationSchema } from "@/lib/seo";
import GlobalHeader from "@/components/GlobalHeader";
import GlobalFooter from "@/components/GlobalFooter";
import SectionAnimator from "@/components/SectionAnimator";
import ClarityInit from "@/components/ClarityInit";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={`${inter.variable} font-sans bg-[#0A0A0A] text-white`}>
        <ClarityInit />
        <SectionAnimator />
        <GlobalHeader />
        {children}
        <GlobalFooter />
      </body>
    </html>
  );
}
