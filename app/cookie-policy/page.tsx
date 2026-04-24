import LegalTemplate from "@/components/generated/LegalTemplate";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata(
  "Cookie Policy",
  "How Astrabyte uses cookies and similar technologies on this website.",
  ["cookie policy", "tracking technologies", "astrabyte cookies"],
  "/cookie-policy"
);

export default function CookiePolicyPage() {
  return (
    <LegalTemplate
      title="Cookie Policy"
      subtitle="This policy explains what cookies are, how we use them, and your choices regarding cookie preferences."
      sections={[
        {
          title: "What Cookies Are",
          paragraphs: [
            "Cookies are small text files stored on your device to help websites function and remember user preferences.",
            "We may also use similar technologies like local storage or tracking pixels for analytics and performance.",
          ],
        },
        {
          title: "How We Use Cookies",
          paragraphs: [
            "We use essential cookies required for security, form flows, and core site functionality.",
            "We may use analytics cookies to understand traffic patterns, improve performance, and optimize user journeys.",
          ],
        },
        {
          title: "Managing Cookie Preferences",
          paragraphs: [
            "You can control cookies through your browser settings, including blocking or deleting stored cookies.",
            "Disabling certain cookies may affect site functionality and user experience.",
          ],
        },
        {
          title: "Policy Updates",
          paragraphs: [
            "We may revise this cookie policy periodically to reflect legal, technical, or operational changes.",
            "Please review this page regularly for the most current information.",
          ],
        },
      ]}
    />
  );
}
