import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/auth";
import { revalidatePath } from "next/cache";

export default async function AdminBlogsPage() {
  await requireAdmin();
  const [blogs, categories] = await Promise.all([
    prisma.blog.findMany({ orderBy: { createdAt: "desc" } }),
    prisma.blogCategory.findMany({ orderBy: { name: "asc" } }),
  ]);

  async function createBlog(formData: FormData) {
    "use server";
    await requireAdmin();
    const contentRaw = String(formData.get("contentJson") || "{}");
    await prisma.blog.create({
      data: {
        title: String(formData.get("title") || ""),
        slug: String(formData.get("slug") || ""),
        category: String(formData.get("category") || "General"),
        featuredImage: String(formData.get("featuredImage") || ""),
        seoTitle: String(formData.get("seoTitle") || ""),
        seoDescription: String(formData.get("seoDescription") || ""),
        content: JSON.parse(contentRaw),
      },
    });
    revalidatePath("/admin-x9k2a7q/blogs");
    revalidatePath("/blog");
  }

  async function createCategory(formData: FormData) {
    "use server";
    await requireAdmin();
    const name = String(formData.get("name") || "").trim();
    if (!name) return;
    const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
    await prisma.blogCategory.create({ data: { name, slug } });
    revalidatePath("/admin-x9k2a7q/blogs");
    revalidatePath("/blog");
  }

  async function deleteCategory(formData: FormData) {
    "use server";
    await requireAdmin();
    const id = String(formData.get("id") || "");
    if (!id) return;
    await prisma.blogCategory.delete({ where: { id } });
    revalidatePath("/admin-x9k2a7q/blogs");
    revalidatePath("/blog");
  }

  async function updateBlog(formData: FormData) {
    "use server";
    await requireAdmin();
    const id = String(formData.get("id") || "");
    const contentRaw = String(formData.get("contentJson") || "{}");
    await prisma.blog.update({
      where: { id },
      data: {
        title: String(formData.get("title") || ""),
        slug: String(formData.get("slug") || ""),
        category: String(formData.get("category") || "General"),
        featuredImage: String(formData.get("featuredImage") || ""),
        seoTitle: String(formData.get("seoTitle") || ""),
        seoDescription: String(formData.get("seoDescription") || ""),
        content: JSON.parse(contentRaw),
      },
    });
    revalidatePath("/admin-x9k2a7q/blogs");
    revalidatePath("/blog");
  }

  async function deleteBlog(formData: FormData) {
    "use server";
    await requireAdmin();
    const id = String(formData.get("id") || "");
    await prisma.blog.delete({ where: { id } });
    revalidatePath("/admin-x9k2a7q/blogs");
    revalidatePath("/blog");
  }

  return (
    <main className="max-w-6xl mx-auto px-6 py-10 space-y-8">
      <h1 className="text-3xl font-bold">Manage Blogs</h1>
      <section className="p-6 border border-border rounded-xl bg-surface space-y-4">
        <h2 className="text-xl font-semibold">Manage Blog Categories</h2>
        <form action={createCategory} className="flex gap-3">
          <input name="name" placeholder="Category name" className="flex-1 bg-background border border-border rounded-lg px-3 py-2" required />
          <button className="bg-primary rounded-lg px-4 py-2">Add Category</button>
        </form>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <form key={category.id} action={deleteCategory} className="inline-flex items-center gap-2 px-3 py-1 border border-border rounded-lg">
              <input type="hidden" name="id" value={category.id} />
              <span className="text-sm">{category.name}</span>
              <button className="text-xs text-red-400">Delete</button>
            </form>
          ))}
        </div>
      </section>
      <form action={createBlog} className="grid md:grid-cols-2 gap-3 p-6 border border-border rounded-xl bg-surface">
        <input name="title" placeholder="Title" className="bg-background border border-border rounded-lg px-3 py-2" required />
        <input name="slug" placeholder="Slug" className="bg-background border border-border rounded-lg px-3 py-2" required />
        <select name="category" className="bg-background border border-border rounded-lg px-3 py-2" required>
          {categories.length === 0 ? <option value="General">General</option> : null}
          {categories.map((category) => <option key={category.id} value={category.name}>{category.name}</option>)}
        </select>
        <input name="featuredImage" placeholder="Featured image path" className="bg-background border border-border rounded-lg px-3 py-2" />
        <input name="seoTitle" placeholder="SEO title" className="bg-background border border-border rounded-lg px-3 py-2" />
        <input name="seoDescription" placeholder="SEO description" className="bg-background border border-border rounded-lg px-3 py-2" />
        <textarea
          name="contentJson"
          placeholder='Content JSON (example: {"intro":"...","problem":"...","solution":"...","steps":["a","b"]})'
          className="md:col-span-2 bg-background border border-border rounded-lg px-3 py-2 min-h-[120px]"
          defaultValue='{"intro":"","problem":"","solution":"","steps":[]}'
        />
        <button className="md:col-span-2 bg-primary rounded-lg py-2">Create Blog</button>
      </form>
      <div className="space-y-3">
        {blogs.map((blog) => (
          <details key={blog.id} className="p-4 border border-border rounded-lg bg-surface">
            <summary className="cursor-pointer font-medium">{blog.title} - {blog.slug}</summary>
            <form action={updateBlog} className="grid md:grid-cols-2 gap-3 mt-4">
              <input type="hidden" name="id" value={blog.id} />
              <input name="title" defaultValue={blog.title} className="bg-background border border-border rounded-lg px-3 py-2" required />
              <input name="slug" defaultValue={blog.slug} className="bg-background border border-border rounded-lg px-3 py-2" required />
              <select name="category" defaultValue={blog.category} className="bg-background border border-border rounded-lg px-3 py-2" required>
                {!categories.some((category) => category.name === blog.category) ? <option value={blog.category}>{blog.category}</option> : null}
                {categories.length === 0 ? <option value="General">General</option> : null}
                {categories.map((category) => <option key={category.id} value={category.name}>{category.name}</option>)}
              </select>
              <input name="featuredImage" defaultValue={blog.featuredImage || ""} className="bg-background border border-border rounded-lg px-3 py-2" />
              <input name="seoTitle" defaultValue={blog.seoTitle || ""} className="bg-background border border-border rounded-lg px-3 py-2" />
              <input name="seoDescription" defaultValue={blog.seoDescription || ""} className="bg-background border border-border rounded-lg px-3 py-2" />
              <textarea name="contentJson" defaultValue={JSON.stringify(blog.content)} className="md:col-span-2 bg-background border border-border rounded-lg px-3 py-2 min-h-[120px]" />
              <button className="bg-primary rounded-lg py-2">Update</button>
            </form>
            <form action={deleteBlog} className="mt-3">
              <input type="hidden" name="id" value={blog.id} />
              <button className="bg-red-600 rounded-lg px-4 py-2 text-sm">Delete</button>
            </form>
          </details>
        ))}
      </div>
    </main>
  );
}
