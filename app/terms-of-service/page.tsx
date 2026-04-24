import LegalTemplate from "@/components/generated/LegalTemplate";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata(
  "Terms of Service",
  "Terms governing access to Astrabyte website, services, and related deliverables.",
  ["terms of service", "service agreement", "astrabyte terms"],
  "/terms-of-service"
);

export default function TermsOfServicePage() {
  return (
    <LegalTemplate
      title="Terms of Service"
      subtitle="These terms govern use of our website, service offerings, and communication channels. By using this site, you agree to these terms."
      sections={[
        {
          title: "Use of Services",
          paragraphs: [
            "You agree to use our website and services only for lawful purposes and in a way that does not violate applicable regulations.",
            "You are responsible for ensuring all information submitted to us is accurate and up to date.",
          ],
        },
        {
          title: "Intellectual Property",
          paragraphs: [
            "All content, branding, systems, and materials on this website are owned by Astrabyte or used with permission.",
            "You may not copy, distribute, or exploit our content without prior written authorization.",
          ],
        },
        {
          title: "Service Scope and Liability",
          paragraphs: [
            "Project scope, deliverables, and timelines are defined in separate commercial agreements where applicable.",
            "To the fullest extent permitted by law, Astrabyte is not liable for indirect, consequential, or incidental damages from site or service use.",
          ],
        },
        {
          title: "Updates to Terms",
          paragraphs: [
            "We may update these terms from time to time. Continued use after changes are posted constitutes acceptance of updated terms.",
            "If you do not agree with revised terms, you should discontinue use of our services.",
          ],
        },
      ]}
    />
  );
}
