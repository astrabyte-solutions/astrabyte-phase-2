import LegalTemplate from "@/components/generated/LegalTemplate";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata(
  "Privacy Policy",
  "How Astrabyte collects, uses, and protects personal information across our website and services.",
  ["privacy policy", "data protection", "astrabyte privacy"],
  "/privacy-policy"
);

export default function PrivacyPolicyPage() {
  return (
    <LegalTemplate
      title="Privacy Policy"
      subtitle="This policy explains how we collect, use, and safeguard your information when you use our website, book a call, or submit inquiries."
      sections={[
        {
          title: "Information We Collect",
          paragraphs: [
            "We collect information you provide directly, including your name, email, phone number, company, uploaded files, and any details submitted through forms.",
            "We may also collect technical usage data such as browser type, device information, and interaction logs needed to improve site performance and security.",
          ],
        },
        {
          title: "How We Use Information",
          paragraphs: [
            "We use submitted information to respond to inquiries, schedule calls, deliver requested services, and send operational updates.",
            "We may use aggregated, non-identifiable data to analyze service quality, optimize workflows, and improve user experience.",
          ],
        },
        {
          title: "Data Storage and Protection",
          paragraphs: [
            "Data is stored using secured infrastructure and access-controlled systems. We use reasonable administrative and technical safeguards to protect your data.",
            "No security system is guaranteed to be fully impenetrable, but we continuously improve our controls to reduce risk.",
          ],
        },
        {
          title: "Sharing and Retention",
          paragraphs: [
            "We do not sell personal information. Data may be shared with service providers only when required to operate our platform and communications.",
            "We retain data only as long as needed for business, legal, or compliance requirements.",
          ],
        },
      ]}
    />
  );
}
