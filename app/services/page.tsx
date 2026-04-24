import { createPageMetadata } from "@/lib/seo";
import ServicesTemplate from "@/components/generated/ServicesTemplate";
import { getServices } from "@/lib/cms";

export const metadata = createPageMetadata(
  "Systems That Remove Operational Bottlenecks",
  "AI automation, custom development, SaaS product development, and operations optimization for high-growth teams.",
  ["AI automation services", "custom development partner", "SaaS product development", "operations optimization"],
  "/services"
);

export default async function ServicesPage() {
  const services = await getServices();
  return <ServicesTemplate services={services} />;
}
