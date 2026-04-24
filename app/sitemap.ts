import type { MetadataRoute } from "next";

const BASE_URL = "https://astrabytesolutions.com";

const serviceSlugs = [
  "custom-development",
  "ai-automation",
  "saas-product-development",
  "operations-optimization",
];

const productSlugs = ["insightflow", "autoops", "securegate"];

const blogSlugs = [
  "build-systems-not-stacks",
  "automation-roi-playbook",
  "ai-driven-workflow-automation",
  "bulletproof-operations-manual",
  "scaling-saas-without-headcount",
  "logistics-case-study",
  "exit-ready-business-framework",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/products",
    "/blog",
    "/book-call",
    "/privacy-policy",
    "/terms-of-service",
    "/cookie-policy",
  ];

  const staticEntries = staticRoutes.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const serviceEntries = serviceSlugs.map((slug) => ({
    url: `${BASE_URL}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const productEntries = productSlugs.map((slug) => ({
    url: `${BASE_URL}/products/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const blogEntries = blogSlugs.map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticEntries, ...serviceEntries, ...productEntries, ...blogEntries];
}
