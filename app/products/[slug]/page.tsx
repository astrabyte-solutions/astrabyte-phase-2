import { breadcrumbSchema, createPageMetadata } from "@/lib/seo";
import ProductDetailTemplate from "@/components/generated/ProductDetailTemplate";
import { getProductBySlug, getProducts } from "@/lib/cms";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  const productName = product?.name ?? "Product";
  return createPageMetadata(
    `${productName} | All-in-One Project & Workflow System`,
    "Manage projects, tasks, meetings, and documentation in one centralized workflow system.",
    ["product", "project workflow system", productName.toLowerCase()],
    `/products/${slug}`
  );
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) notFound();
  const productName = product.name;

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: productName,
    description: "All-in-one project and workflow system for operational efficiency.",
    brand: "Astrabyte Solutions",
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: "100",
      availability: "https://schema.org/InStock",
      url: `https://astrabytesolutions.com/products/${slug}`,
    },
  };

  const breadcrumbs = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: productName, path: `/products/${slug}` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <ProductDetailTemplate product={product} />
    </>
  );
}
