import { notFound } from "next/navigation";
import { breadcrumbSchema, createPageMetadata } from "@/lib/seo";
import ServiceBusinessSetupTemplate from "@/components/generated/ServiceBusinessSetupTemplate";
import { getServiceBySlug, getServices } from "@/lib/cms";

export async function generateStaticParams() {
  const services = await getServices();
  return services.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  const label = service?.name ?? "Service";
  return createPageMetadata(
    `${label} Services`,
    "Manual processes are slowing growth. We build automated systems tailored to your workflows.",
    ["services", "business systems", "automation", label.toLowerCase()],
    `/services/${slug}`
  );
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  if (!service) notFound();
  const label = service.name;
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${label} Service`,
    provider: {
      "@type": "Organization",
      name: "Astrabyte Solutions",
      url: "https://astrabytesolutions.com",
    },
    areaServed: "Global",
    serviceType: label,
    url: `https://astrabytesolutions.com/services/${slug}`,
    description: "System-based service that reduces manual work and improves operational efficiency.",
  };
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: label, path: `/services/${slug}` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <ServiceBusinessSetupTemplate service={service} />
    </>
  );
}
