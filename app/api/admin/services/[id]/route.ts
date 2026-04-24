import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { isAdminAuthenticated } from "@/lib/auth";

export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {
  if (!(await isAdminAuthenticated())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { id } = await params;
  const body = await request.json();
  const service = await prisma.service.update({
    where: { id },
    data: {
      name: body.name,
      slug: body.slug,
      heroTitle: body.heroTitle,
      heroSubtitle: body.heroSubtitle,
      problems: body.problems || [],
      solutions: body.solutions || [],
      processSteps: body.processSteps || [],
      benefits: body.benefits || [],
    },
  });
  return NextResponse.json(service);
}

export async function DELETE(_: Request, { params }: { params: Promise<{ id: string }> }) {
  if (!(await isAdminAuthenticated())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { id } = await params;
  await prisma.service.delete({ where: { id } });
  return NextResponse.json({ ok: true });
}
