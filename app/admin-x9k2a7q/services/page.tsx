import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/auth";
import { revalidatePath } from "next/cache";

export default async function AdminServicesPage() {
  await requireAdmin();
  const services = await prisma.service.findMany({ orderBy: { createdAt: "desc" } });

  async function createService(formData: FormData) {
    "use server";
    await requireAdmin();
    await prisma.service.create({
      data: {
        name: String(formData.get("name") || ""),
        slug: String(formData.get("slug") || ""),
        heroTitle: String(formData.get("heroTitle") || ""),
        heroSubtitle: String(formData.get("heroSubtitle") || ""),
        problems: String(formData.get("problems") || "").split(",").map((x) => x.trim()).filter(Boolean),
        solutions: String(formData.get("solutions") || "").split(",").map((x) => x.trim()).filter(Boolean),
        processSteps: String(formData.get("processSteps") || "").split(",").map((x) => x.trim()).filter(Boolean),
        benefits: String(formData.get("benefits") || "").split(",").map((x) => x.trim()).filter(Boolean),
      },
    });
    revalidatePath("/admin-x9k2a7q/services");
    revalidatePath("/services");
  }

  async function updateService(formData: FormData) {
    "use server";
    await requireAdmin();
    const id = String(formData.get("id") || "");
    const slug = String(formData.get("slug") || "");
    await prisma.service.update({
      where: { id },
      data: {
        name: String(formData.get("name") || ""),
        slug,
        heroTitle: String(formData.get("heroTitle") || ""),
        heroSubtitle: String(formData.get("heroSubtitle") || ""),
        problems: String(formData.get("problems") || "").split(",").map((x) => x.trim()).filter(Boolean),
        solutions: String(formData.get("solutions") || "").split(",").map((x) => x.trim()).filter(Boolean),
        processSteps: String(formData.get("processSteps") || "").split(",").map((x) => x.trim()).filter(Boolean),
        benefits: String(formData.get("benefits") || "").split(",").map((x) => x.trim()).filter(Boolean),
      },
    });
    revalidatePath("/admin-x9k2a7q/services");
    revalidatePath("/services");
    revalidatePath(`/services/${slug}`);
  }

  async function deleteService(formData: FormData) {
    "use server";
    await requireAdmin();
    const id = String(formData.get("id") || "");
    await prisma.service.delete({ where: { id } });
    revalidatePath("/admin-x9k2a7q/services");
    revalidatePath("/services");
  }

  return (
    <main className="max-w-6xl mx-auto px-6 py-10 space-y-8">
      <h1 className="text-3xl font-bold">Manage Services</h1>
      <form action={createService} className="grid md:grid-cols-2 gap-3 p-6 border border-border rounded-xl bg-surface">
        <input name="name" placeholder="Service name" className="bg-background border border-border rounded-lg px-3 py-2" required />
        <input name="slug" placeholder="Slug" className="bg-background border border-border rounded-lg px-3 py-2" required />
        <input name="heroTitle" placeholder="Hero title" className="bg-background border border-border rounded-lg px-3 py-2" required />
        <input name="heroSubtitle" placeholder="Hero subtitle" className="bg-background border border-border rounded-lg px-3 py-2" required />
        <input name="problems" placeholder="Problems (comma separated)" className="bg-background border border-border rounded-lg px-3 py-2" />
        <input name="solutions" placeholder="Solutions (comma separated)" className="bg-background border border-border rounded-lg px-3 py-2" />
        <input name="processSteps" placeholder="Process steps (comma separated)" className="bg-background border border-border rounded-lg px-3 py-2" />
        <input name="benefits" placeholder="Benefits (comma separated)" className="bg-background border border-border rounded-lg px-3 py-2" />
        <button className="md:col-span-2 bg-primary rounded-lg py-2">Create Service</button>
      </form>
      <div className="space-y-3">
        {services.map((service) => (
          <details key={service.id} className="p-4 border border-border rounded-lg bg-surface">
            <summary className="cursor-pointer font-medium">{service.name} - {service.slug}</summary>
            <form action={updateService} className="grid md:grid-cols-2 gap-3 mt-4">
              <input type="hidden" name="id" value={service.id} />
              <input name="name" defaultValue={service.name} className="bg-background border border-border rounded-lg px-3 py-2" required />
              <input name="slug" defaultValue={service.slug} className="bg-background border border-border rounded-lg px-3 py-2" required />
              <input name="heroTitle" defaultValue={service.heroTitle} className="bg-background border border-border rounded-lg px-3 py-2" required />
              <input name="heroSubtitle" defaultValue={service.heroSubtitle} className="bg-background border border-border rounded-lg px-3 py-2" required />
              <input name="problems" defaultValue={(service.problems as string[]).join(", ")} className="bg-background border border-border rounded-lg px-3 py-2" />
              <input name="solutions" defaultValue={(service.solutions as string[]).join(", ")} className="bg-background border border-border rounded-lg px-3 py-2" />
              <input name="processSteps" defaultValue={(service.processSteps as string[]).join(", ")} className="bg-background border border-border rounded-lg px-3 py-2" />
              <input name="benefits" defaultValue={(service.benefits as string[]).join(", ")} className="bg-background border border-border rounded-lg px-3 py-2" />
              <button className="bg-primary rounded-lg py-2">Update</button>
            </form>
            <form action={deleteService} className="mt-3">
              <input type="hidden" name="id" value={service.id} />
              <button className="bg-red-600 rounded-lg px-4 py-2 text-sm">Delete</button>
            </form>
          </details>
        ))}
      </div>
    </main>
  );
}
