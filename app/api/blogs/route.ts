import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category") || "all";
  const limit = Number(searchParams.get("limit") || "12");
  const offset = Number(searchParams.get("offset") || "0");

  const selectedCategory = category === "all"
    ? null
    : await prisma.blogCategory.findUnique({ where: { slug: category } });
  const where = selectedCategory ? { category: selectedCategory.name } : {};

  const [items, total, categories] = await Promise.all([
    prisma.blog.findMany({
      where,
      orderBy: { createdAt: "desc" },
      skip: offset,
      take: limit,
    }),
    prisma.blog.count({ where }),
    prisma.blogCategory.findMany({ orderBy: { name: "asc" } }),
  ]);

  return NextResponse.json({
    items,
    total,
    hasMore: offset + items.length < total,
    categories: [{ name: "All Posts", slug: "all" }, ...categories.map((c) => ({ name: c.name, slug: c.slug }))],
  });
}
