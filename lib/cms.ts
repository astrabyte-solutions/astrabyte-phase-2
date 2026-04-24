import { prisma } from "@/lib/prisma";

export async function getServices() {
  return prisma.service.findMany({ orderBy: { createdAt: "asc" } });
}

export async function getServiceBySlug(slug: string) {
  return prisma.service.findUnique({ where: { slug } });
}

export async function getProducts() {
  return prisma.product.findMany({ orderBy: { createdAt: "asc" } });
}

export async function getProductBySlug(slug: string) {
  return prisma.product.findUnique({ where: { slug } });
}

export async function getBlogs() {
  return prisma.blog.findMany({ orderBy: { createdAt: "desc" } });
}

export async function getBlogBySlug(slug: string) {
  return prisma.blog.findUnique({ where: { slug } });
}
