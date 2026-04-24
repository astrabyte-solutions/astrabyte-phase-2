import { createPageMetadata } from "@/lib/seo";
import BookCallTemplate from "@/components/generated/BookCallTemplate";

export const metadata = createPageMetadata(
  "Let's Build Your System",
  "Book a strategy call to identify system gaps, automation opportunities, and a practical delivery roadmap.",
  ["book strategy call", "automation consultation", "business systems roadmap"],
  "/book-call"
);

export default function BookCallPage() {
  return <BookCallTemplate />;
}
