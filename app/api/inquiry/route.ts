import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { sendInquiryEmails } from "@/lib/mailer";

export async function POST(request: Request) {
  const formData = await request.formData();
  const name = String(formData.get("name") || "");
  const email = String(formData.get("email") || "");
  const phone = String(formData.get("phone") || "");
  const company = String(formData.get("company") || "");
  const message = String(formData.get("message") || "");
  const fileUrl = String(formData.get("fileUrl") || "");

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const inquiry = await prisma.inquiry.create({
    data: { name, email, phone, company, message, fileUrl: fileUrl || null },
  });

  await sendInquiryEmails({ name, email, phone, company, message });

  return NextResponse.json({ ok: true, inquiryId: inquiry.id });
}
