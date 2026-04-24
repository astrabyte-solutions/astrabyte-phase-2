import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { isAdminAuthenticated } from "@/lib/auth";

export async function GET() {
  if (!(await isAdminAuthenticated())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const data = await prisma.blog.findMany({ orderBy: { createdAt: "desc" } });
  return NextResponse.json(data);
}

export async function POST(request: Request) {
  if (!(await isAdminAuthenticated())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const body = await request.json();
  const blog = await prisma.blog.create({
    data: {
      title: body.title,
      slug: body.slug,
      category: body.category,
      content: body.content || {},
      featuredImage: body.featuredImage || null,
      seoTitle: body.seoTitle || null,
      seoDescription: body.seoDescription || null,
    },
  });
  return NextResponse.json(blog);
}
