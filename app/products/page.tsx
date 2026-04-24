import { createPageMetadata } from "@/lib/seo";
import ProductsTemplate from "@/components/generated/ProductsTemplate";
import { getProducts } from "@/lib/cms";

export const metadata = createPageMetadata(
  "Ready Systems for Faster Operations",
  "A ready-to-use operations management system built from real client workflows to improve speed, efficiency, and ROI.",
  ["operations management system", "internal tools product", "project workflow system", "book product demo"],
  "/products"
);

export default async function ProductsPage() {
  const products = await getProducts();
  return <ProductsTemplate products={products} />;
}
