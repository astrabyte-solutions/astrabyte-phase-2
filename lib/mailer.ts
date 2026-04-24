import nodemailer from "nodemailer";
import fs from "node:fs/promises";
import path from "node:path";

type InquiryMailInput = {
  name: string;
  email: string;
  phone?: string | null;
  company?: string | null;
  message: string;
};

function createTransport() {
  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !port || !user || !pass) return null;

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });
}

async function buildInquiryEmailTemplate(input: InquiryMailInput, meetingLink: string) {
  const templatePath = path.join(process.cwd(), "email-template.html");
  const logoUrl = `${process.env.NEXT_PUBLIC_SITE_URL || "https://astrabytesolutions.com"}/assets/images/logo-main.png`;
  const now = new Date();

  const dateLabel = now.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
  const timeLabel = now.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true });

  let html = await fs.readFile(templatePath, "utf8");
  html = html
    .replace(/{{name}}/g, input.name || "-")
    .replace(/{{company}}/g, input.company || "-")
    .replace(/{{email}}/g, input.email || "-")
    .replace(/{{phone}}/g, input.phone || "-")
    .replace(">October 24, 2024<", `>${dateLabel}<`)
    .replace(">10:30 AM EST<", `>${timeLabel}<`)
    .replace('href="#" class="block w-full bg-brand hover:bg-[#7352f0] text-white text-center py-4 rounded-lg font-bold transition-all shadow-lg shadow-brand/20">', `href="${meetingLink}" class="block w-full bg-brand hover:bg-[#7352f0] text-white text-center py-4 rounded-lg font-bold transition-all shadow-lg shadow-brand/20">`)
    .replace(
      /<a href="#" class="text-secondary hover:text-white transition-colors"><i data-fa-i2svg="">[\s\S]*?fa-linkedin-in[\s\S]*?<\/a>/,
      '<a href="https://www.linkedin.com/company/astra-byte-solutions" target="_blank" rel="noreferrer" class="text-secondary hover:text-white transition-colors"><i class="fa-brands fa-linkedin-in"></i></a>'
    )
    .replace(
      /<a href="#" class="text-secondary hover:text-white transition-colors"><i data-fa-i2svg="">[\s\S]*?fa-x-twitter[\s\S]*?<\/a>/,
      '<a href="https://x.com/astrabytesol" target="_blank" rel="noreferrer" class="text-secondary hover:text-white transition-colors"><i class="fa-brands fa-x-twitter"></i></a>'
    )
    .replace(
      /<a href="#" class="text-secondary hover:text-white transition-colors"><i data-fa-i2svg="">[\s\S]*?fa-github[\s\S]*?<\/a>/,
      '<a href="https://www.instagram.com/astrabytesolutions" target="_blank" rel="noreferrer" class="text-secondary hover:text-white transition-colors"><i class="fa-brands fa-instagram"></i></a>'
    )
    .replace("Reply to this email", "Contact support")
    .replace('href="mailto:rohit@astrabytesolutions.com"', 'href="mailto:info@astrabytesolutions.com"')
    .replace(
      /<div class="w-12 h-12 bg-brand rounded-xl flex items-center justify-center mb-2">[\s\S]*?<\/div>/,
      `<div class="mb-2"><img src="${logoUrl}" alt="Astrabyte Solutions" style="height:48px;width:auto;display:block;margin:0 auto;" /></div>`
    );

  return html;
}

export async function sendInquiryEmails(input: InquiryMailInput) {
  const transporter = createTransport();
  if (!transporter) return;

  const from = process.env.MAIL_FROM || process.env.SMTP_USER || "no-reply@astrabytesolutions.com";
  const meetingLink = process.env.MEETING_LINK || "https://meet.google.com/xxx-xxxx";
  const html = await buildInquiryEmailTemplate(input, meetingLink);

  await transporter.sendMail({
    from,
    to: input.email,
    subject: "Call Confirmed - Astrabyte",
    html,
  });

  const adminHtml = `
    <div style="font-family:Inter,Arial,sans-serif;background:#0A0A0A;color:#FFFFFF;padding:20px;border:1px solid #1F1F1F;border-radius:12px;">
      <h2 style="margin:0 0 12px;color:#623CEA;">New Inquiry Received</h2>
      <p style="margin:6px 0;"><strong>Name:</strong> ${input.name}</p>
      <p style="margin:6px 0;"><strong>Email:</strong> ${input.email}</p>
      <p style="margin:6px 0;"><strong>Phone:</strong> ${input.phone || "-"}</p>
      <p style="margin:6px 0;"><strong>Company:</strong> ${input.company || "-"}</p>
      <p style="margin:12px 0 6px;"><strong>Message:</strong></p>
      <p style="white-space:pre-wrap;margin:0;">${input.message}</p>
    </div>
  `;

  await transporter.sendMail({
    from,
    to: process.env.SMTP_USER,
    subject: `New Inquiry from ${input.name}`,
    html: adminHtml,
  });
}
