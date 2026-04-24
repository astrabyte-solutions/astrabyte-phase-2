import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { isAdminAuthenticated } from "@/lib/auth";

export async function GET() {
  if (!(await isAdminAuthenticated())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const data = await prisma.service.findMany({ orderBy: { createdAt: "desc" } });
  return NextResponse.json(data);
}

export async function POST(request: Request) {
  if (!(await isAdminAuthenticated())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const body = await request.json();
  const service = await prisma.service.create({
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
