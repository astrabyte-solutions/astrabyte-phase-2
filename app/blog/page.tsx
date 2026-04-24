import { createPageMetadata } from "@/lib/seo";
import BlogTemplate from "@/components/generated/BlogTemplate";

export const metadata = createPageMetadata(
  "Automation and Systems Insights",
  "Guides on automation, internal systems, and efficiency strategies for growing operations teams.",
  ["how to automate business operations", "best internal tools for startups", "reduce operational cost with automation"],
  "/blog"
);

export default async function BlogPage() {
  return <BlogTemplate basePath="/blog" />;
}
