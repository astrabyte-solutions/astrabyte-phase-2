import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { isAdminAuthenticated } from "@/lib/auth";

export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {
  if (!(await isAdminAuthenticated())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { id } = await params;
  const body = await request.json();
  const blog = await prisma.blog.update({
    where: { id },
    data: {
      title: body.title,
      slug: body.slug,
      category: body.category,
      content: body.content,
      featuredImage: body.featuredImage,
      seoTitle: body.seoTitle,
      seoDescription: body.seoDescription,
    },
  });
  return NextResponse.json(blog);
}

export async function DELETE(_: Request, { params }: { params: Promise<{ id: string }> }) {
  if (!(await isAdminAuthenticated())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { id } = await params;
  await prisma.blog.delete({ where: { id } });
  return NextResponse.json({ ok: true });
}
