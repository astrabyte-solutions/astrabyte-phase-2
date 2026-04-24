import { createPageMetadata } from "@/lib/seo";
import { redirect } from "next/navigation";

const SLUGS = [
  "ai-driven-workflow-automation",
  "bulletproof-operations-manual",
  "scaling-saas-without-headcount",
  "logistics-case-study",
  "exit-ready-business-framework",
];

export async function generateStaticParams() {
  return SLUGS.map((slug) => ({ slug }));
}

export const metadata = createPageMetadata("Case Study Detail", "AstraByte case study detail page", ["case study", "astrabyte"]);

export default async function CaseStudyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  redirect(`/blog/${slug}`);
}
