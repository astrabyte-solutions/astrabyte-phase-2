import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/auth";
import { revalidatePath } from "next/cache";

export default async function AdminProductsPage() {
  await requireAdmin();
  const products = await prisma.product.findMany({ orderBy: { createdAt: "desc" } });

  async function createProduct(formData: FormData) {
    "use server";
    await requireAdmin();
    await prisma.product.create({
      data: {
        name: String(formData.get("name") || ""),
        slug: String(formData.get("slug") || ""),
        description: String(formData.get("description") || ""),
        features: String(formData.get("features") || "").split(",").map((x) => x.trim()).filter(Boolean),
        useCases: String(formData.get("useCases") || "").split(",").map((x) => x.trim()).filter(Boolean),
        pricing: String(formData.get("pricing") || ""),
        cta: String(formData.get("cta") || ""),
      },
    });
    revalidatePath("/admin-x9k2a7q/products");
    revalidatePath("/products");
  }

  async function updateProduct(formData: FormData) {
    "use server";
    await requireAdmin();
    const id = String(formData.get("id") || "");
    const slug = String(formData.get("slug") || "");
    await prisma.product.update({
      where: { id },
      data: {
        name: String(formData.get("name") || ""),
        slug,
        description: String(formData.get("description") || ""),
        features: String(formData.get("features") || "").split(",").map((x) => x.trim()).filter(Boolean),
        useCases: String(formData.get("useCases") || "").split(",").map((x) => x.trim()).filter(Boolean),
        pricing: String(formData.get("pricing") || ""),
        cta: String(formData.get("cta") || ""),
      },
    });
    revalidatePath("/admin-x9k2a7q/products");
    revalidatePath("/products");
    revalidatePath(`/products/${slug}`);
  }

  async function deleteProduct(formData: FormData) {
    "use server";
    await requireAdmin();
    const id = String(formData.get("id") || "");
    await prisma.product.delete({ where: { id } });
    revalidatePath("/admin-x9k2a7q/products");
    revalidatePath("/products");
  }

  return (
    <main className="max-w-6xl mx-auto px-6 py-10 space-y-8">
      <h1 className="text-3xl font-bold">Manage Products</h1>
      <form action={createProduct} className="grid md:grid-cols-2 gap-3 p-6 border border-border rounded-xl bg-surface">
        <input name="name" placeholder="Product name" className="bg-background border border-border rounded-lg px-3 py-2" required />
        <input name="slug" placeholder="Slug" className="bg-background border border-border rounded-lg px-3 py-2" required />
        <input name="description" placeholder="Description" className="bg-background border border-border rounded-lg px-3 py-2" required />
        <input name="features" placeholder="Features (comma separated)" className="bg-background border border-border rounded-lg px-3 py-2" />
        <input name="useCases" placeholder="Use cases (comma separated)" className="bg-background border border-border rounded-lg px-3 py-2" />
        <input name="pricing" placeholder="Pricing" className="bg-background border border-border rounded-lg px-3 py-2" />
        <input name="cta" placeholder="CTA text" className="bg-background border border-border rounded-lg px-3 py-2" />
        <button className="md:col-span-2 bg-primary rounded-lg py-2">Create Product</button>
      </form>
      <div className="space-y-3">
        {products.map((product) => (
          <details key={product.id} className="p-4 border border-border rounded-lg bg-surface">
            <summary className="cursor-pointer font-medium">{product.name} - {product.slug}</summary>
            <form action={updateProduct} className="grid md:grid-cols-2 gap-3 mt-4">
              <input type="hidden" name="id" value={product.id} />
              <input name="name" defaultValue={product.name} className="bg-background border border-border rounded-lg px-3 py-2" required />
              <input name="slug" defaultValue={product.slug} className="bg-background border border-border rounded-lg px-3 py-2" required />
              <input name="description" defaultValue={product.description} className="bg-background border border-border rounded-lg px-3 py-2" required />
              <input name="features" defaultValue={(product.features as string[]).join(", ")} className="bg-background border border-border rounded-lg px-3 py-2" />
              <input name="useCases" defaultValue={(product.useCases as string[]).join(", ")} className="bg-background border border-border rounded-lg px-3 py-2" />
              <input name="pricing" defaultValue={product.pricing} className="bg-background border border-border rounded-lg px-3 py-2" />
              <input name="cta" defaultValue={product.cta} className="bg-background border border-border rounded-lg px-3 py-2" />
              <button className="bg-primary rounded-lg py-2">Update</button>
            </form>
            <form action={deleteProduct} className="mt-3">
              <input type="hidden" name="id" value={product.id} />
              <button className="bg-red-600 rounded-lg px-4 py-2 text-sm">Delete</button>
            </form>
          </details>
        ))}
      </div>
    </main>
  );
}
