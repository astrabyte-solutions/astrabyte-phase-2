import { createPageMetadata } from "@/lib/seo";
import HomeTemplate from "@/components/generated/HomeTemplate";

export const metadata = createPageMetadata(
  "Scale Faster. Operate Smarter.",
  "Astrabyte Solutions delivers AI automation, custom development, SaaS products, and operations optimization for high-growth teams.",
  ["AI automation agency", "custom SaaS development", "operations optimization", "internal systems development"],
  "/"
);

export default function HomePage() {
  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Astrabyte Solutions Home",
    description: "Scale faster with premium AI automation, custom development, and operations optimization.",
    url: "https://astrabytesolutions.com/",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }} />
      <HomeTemplate />
    </>
  );
}
