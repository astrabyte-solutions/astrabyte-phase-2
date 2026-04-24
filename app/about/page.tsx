import { createPageMetadata } from "@/lib/seo";
import AboutTemplate from "@/components/generated/AboutTemplate";

export const metadata = createPageMetadata(
  "We Build Systems That Make Growth Sustainable",
  "Astrabyte Solutions helps startups, agencies, and SMEs automate operations, build internal systems, and replace manual workflows.",
  ["about astrabyte solutions", "operations automation partner", "internal systems development"],
  "/about"
);

export default function AboutPage() {
  return <AboutTemplate />;
}
