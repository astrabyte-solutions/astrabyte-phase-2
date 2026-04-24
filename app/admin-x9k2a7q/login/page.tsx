import { redirect } from "next/navigation";
import { getCurrentAdmin } from "@/lib/auth";
import AdminLoginForm from "./AdminLoginForm";

export default async function AdminLoginPage() {
  const existing = await getCurrentAdmin();
  if (existing) redirect("/admin-x9k2a7q");

  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <AdminLoginForm />
    </main>
  );
}
