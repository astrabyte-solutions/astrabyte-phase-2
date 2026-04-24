import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

const COOKIE_NAME = "astrabyte_admin_token";
const DEFAULT_SECRET = "astrabyte-super-secret-key";

function getJwtSecret() {
  return process.env.JWT_SECRET || DEFAULT_SECRET;
}

export async function verifyPassword(password: string, passwordHash: string) {
  return bcrypt.compare(password, passwordHash);
}

export async function loginAdmin(email: string, password: string) {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) return null;

  const valid = await verifyPassword(password, user.passwordHash);
  if (!valid) return null;

  const token = jwt.sign({ sub: user.id, email: user.email, role: user.role }, getJwtSecret(), { expiresIn: "7d" });
  return { token, user };
}

export async function setAuthCookie(token: string) {
  const store = await cookies();
  store.set(COOKIE_NAME, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
}

export async function clearAuthCookie() {
  const store = await cookies();
  store.delete(COOKIE_NAME);
}

export async function getCurrentAdmin() {
  const store = await cookies();
  const token = store.get(COOKIE_NAME)?.value;
  if (!token) return null;

  try {
    const payload = jwt.verify(token, getJwtSecret()) as { sub: string };
    return prisma.user.findUnique({ where: { id: payload.sub } });
  } catch {
    return null;
  }
}

export async function requireAdmin() {
  const user = await getCurrentAdmin();
  if (!user) {
    const adminPath = process.env.ADMIN_SECRET_PATH || "/admin-x9k2a7q";
    redirect(`${adminPath}/login`);
  }
  return user;
}

export async function isAdminAuthenticated() {
  const user = await getCurrentAdmin();
  return Boolean(user);
}
