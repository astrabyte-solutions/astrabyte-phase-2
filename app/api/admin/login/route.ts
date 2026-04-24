import { NextResponse } from "next/server";
import { loginAdmin, setAuthCookie } from "@/lib/auth";

export async function POST(request: Request) {
  const body = await request.json();
  const email = String(body?.email || "");
  const password = String(body?.password || "");
  const result = await loginAdmin(email, password);
  if (!result) return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  await setAuthCookie(result.token);
  return NextResponse.json({ ok: true });
}
