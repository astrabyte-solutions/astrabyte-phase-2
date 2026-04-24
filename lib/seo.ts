import { Metadata } from "next";

export const SITE_URL = "https://astrabytesolutions.com";
export const SITE_NAME = "Astrabyte Solutions";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "Astrabyte Solutions | Automation & Business Systems", template: "%s | Astrabyte Solutions" },
  description: "Astrabyte Solutions builds custom systems, automation, and SaaS tools that reduce manual work and improve operational efficiency.",
  keywords: [
    "custom development",
    "workflow automation",
    "business systems",
    "internal tools",
    "saas development",
    "n8n automation",
  ],
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Astrabyte Solutions | Automation & Business Systems",
    description: "Automate operations, reduce costs, and scale with custom systems built for operations-heavy businesses.",
    images: [{ url: "/assets/images/logo-main.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Astrabyte Solutions | Automation & Business Systems",
    description: "Custom systems and automation for startups, agencies, and operations-heavy teams.",
    images: ["/assets/images/logo-main.png"],
  },
  icons: {
    icon: "/assets/images/logo-main.png",
    shortcut: "/assets/images/logo-main.png",
    apple: "/assets/images/logo-main.png",
  },
};

export function createPageMetadata(title: string, description: string, keywords: string[], path = "/"): Metadata {
  const canonical = `${SITE_URL}${path}`;
  return {
    title,
    description,
    keywords,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SITE_NAME,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/assets/images/logo-main.png`,
  sameAs: [],
};

export function breadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}
