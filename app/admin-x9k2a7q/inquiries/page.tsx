import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/auth";

export default async function AdminInquiriesPage() {
  await requireAdmin();
  const inquiries = await prisma.inquiry.findMany({ orderBy: { createdAt: "desc" } });

  return (
    <main className="max-w-6xl mx-auto px-6 py-10 space-y-8">
      <h1 className="text-3xl font-bold">Inquiries</h1>
      <div className="space-y-3">
        {inquiries.map((inq) => (
          <div key={inq.id} className="p-4 border border-border rounded-lg bg-surface">
            <div className="font-semibold">{inq.name} ({inq.email})</div>
            <div className="text-sm text-secondary">{inq.company || "-"} | {inq.phone || "-"}</div>
            <div className="text-sm mt-2">{inq.message}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
