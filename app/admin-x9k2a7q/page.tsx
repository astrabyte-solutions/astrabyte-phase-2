import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { clearAuthCookie, requireAdmin } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function AdminDashboardPage() {
  await requireAdmin();
  const [blogs, services, products, inquiries] = await Promise.all([
    prisma.blog.count(),
    prisma.service.count(),
    prisma.product.count(),
    prisma.inquiry.count(),
  ]);

  async function logout() {
    "use server";
    await clearAuthCookie();
    redirect("/admin-x9k2a7q/login");
  }

  return (
    <main className="max-w-6xl mx-auto px-6 py-16 space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold">Admin Dashboard</h1>
        <form action={logout}><button className="px-4 py-2 rounded-lg border border-border">Logout</button></form>
      </div>
      <div className="grid md:grid-cols-4 gap-4">
        <div className="p-6 rounded-xl border border-border bg-surface">Blogs: {blogs}</div>
        <div className="p-6 rounded-xl border border-border bg-surface">Services: {services}</div>
        <div className="p-6 rounded-xl border border-border bg-surface">Products: {products}</div>
        <div className="p-6 rounded-xl border border-border bg-surface">Inquiries: {inquiries}</div>
      </div>
      <div className="flex gap-4">
        <Link href="/admin-x9k2a7q/blogs" className="px-4 py-2 bg-primary rounded-lg">Manage Blogs</Link>
        <Link href="/admin-x9k2a7q/services" className="px-4 py-2 bg-primary rounded-lg">Manage Services</Link>
        <Link href="/admin-x9k2a7q/products" className="px-4 py-2 bg-primary rounded-lg">Manage Products</Link>
        <Link href="/admin-x9k2a7q/inquiries" className="px-4 py-2 bg-primary rounded-lg">View Inquiries</Link>
      </div>
    </main>
  );
}
