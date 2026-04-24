import { redirect } from "next/navigation";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata("Case Studies", "AstraByte case studies", ["case studies", "astrabyte"]);

export default function CaseStudiesPage() {
  redirect("/blog");
}

