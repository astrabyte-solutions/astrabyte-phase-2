import { breadcrumbSchema, createPageMetadata } from "@/lib/seo";
import BlogDetailTemplate from "@/components/generated/BlogDetailTemplate";
import { getBlogBySlug, getBlogs } from "@/lib/cms";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const blogs = await getBlogs();
  return blogs.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);
  const title = blog?.title ?? slug.replace(/-/g, " ");
  return createPageMetadata(
    `${title} | Blog`,
    "Actionable frameworks to automate operations, reduce costs, and scale business systems.",
    ["blog", "automation", "operations", "business systems"],
    `/blog/${slug}`
  );
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);
  if (!blog) notFound();
  const articleTitle = blog.title;
  const url = `https://astrabytesolutions.com/blog/${slug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: articleTitle,
    description: "Guides on automation, internal tools, and business systems for operational efficiency.",
    author: {
      "@type": "Organization",
      name: "Astrabyte Solutions",
    },
    publisher: {
      "@type": "Organization",
      name: "Astrabyte Solutions",
      logo: {
        "@type": "ImageObject",
        url: "https://astrabytesolutions.com/assets/images/logo-main.png",
      },
    },
    mainEntityOfPage: url,
    url,
    datePublished: "2024-01-01",
    dateModified: "2024-01-01",
  };

  const breadcrumbs = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: articleTitle, path: `/blog/${slug}` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <BlogDetailTemplate post={blog} />
    </>
  );
}
