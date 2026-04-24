 "use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

type BlogTemplateProps = {
  basePath?: "/blog" | "/case-studies";
};

type BlogItem = {
  id: string;
  title: string;
  slug: string;
  category: string;
  featuredImage?: string | null;
  createdAt: string;
};

type CategoryItem = { name: string; slug: string };

const PAGE_SIZE = 12;

export default function BlogTemplate({ basePath = "/blog" }: BlogTemplateProps) {
  const [items, setItems] = useState<BlogItem[]>([]);
  const [categories, setCategories] = useState<CategoryItem[]>([{ name: "All Posts", slug: "all" }]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const loaderRef = useRef<HTMLDivElement | null>(null);
  const lastRequestedKeyRef = useRef<string | null>(null);
  const loadingRef = useRef(false);

  const loadPosts = useCallback(async (nextOffset: number, categorySlug: string, append: boolean) => {
    if (loadingRef.current) return;
    const requestKey = `${categorySlug}:${nextOffset}`;
    if (append && lastRequestedKeyRef.current === requestKey) return;
    lastRequestedKeyRef.current = requestKey;
    loadingRef.current = true;
    setIsLoading(true);
    try {
      const url = `/api/blogs?category=${encodeURIComponent(categorySlug)}&limit=${PAGE_SIZE}&offset=${nextOffset}`;
      const response = await fetch(url, { cache: "no-store" });
      if (!response.ok) throw new Error("Failed to load blogs");
      const payload = await response.json();
      setCategories(payload.categories || [{ name: "All Posts", slug: "all" }]);
      setHasMore(Boolean(payload.hasMore));
      setOffset(nextOffset + (payload.items?.length || 0));
      setItems((prev) => (append ? [...prev, ...(payload.items || [])] : (payload.items || [])));
    } finally {
      loadingRef.current = false;
      setIsLoading(false);
      setIsInitialized(true);
    }
  }, []);

  useEffect(() => {
    lastRequestedKeyRef.current = null;
    void loadPosts(0, selectedCategory, false);
  }, [selectedCategory, loadPosts]);

  useEffect(() => {
    if (!loaderRef.current || !hasMore || isLoading) return;
    const currentLoader = loaderRef.current;
    const observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting) && hasMore && !isLoading) {
        void loadPosts(offset, selectedCategory, true);
      }
    }, { threshold: 0.2 });
    observer.observe(currentLoader);
    return () => observer.disconnect();
  }, [offset, selectedCategory, hasMore, isLoading, loadPosts]);

  const activeCategoryLabel = useMemo(
    () => categories.find((category) => category.slug === selectedCategory)?.name ?? "All Posts",
    [categories, selectedCategory]
  );

  return (
    <>
      
      <main id="main-content" className="pt-20">
        {/* Hero Section */}
        <section id="hero" className="relative h-[500px] flex items-center overflow-hidden">
          <div className="purple-blur -top-20 -left-20"></div>
          <div className="purple-blur bottom-0 right-0"></div>
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="max-w-7xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-surface text-xs font-medium text-primary mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                OPERATIONS INSIGHTS
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight gradient-text">
                Guides on Automation,
                <br />
                Systems, and Efficiency
              </h1>
              <p className="text-lg text-secondary max-w-xl mb-8 leading-relaxed">
                Practical playbooks for reducing manual work and improving operational performance.
              </p>
            </div>
          </div>
        </section>
        {/* Categories Section */}
        <section id="categories" className="py-12 border-y border-border bg-surfaceLight">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <h2 className="text-xl font-semibold">
                Blog Categories - {activeCategoryLabel}
              </h2>
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <button
                    key={category.slug}
                    onClick={() => {
                      setSelectedCategory(category.slug);
                      setOffset(0);
                      setHasMore(true);
                    }}
                    className={`px-5 py-2 rounded-lg text-sm font-medium transition-all ${
                      selectedCategory === category.slug
                        ? "bg-primary text-white"
                        : "bg-surface border border-border text-secondary hover:border-primary hover:text-white"
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* Blog Grid Section */}
        <section id="blog-grid" className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            {!isInitialized || items.length > 0 ? null : (
              <div className="text-center text-secondary mb-8">No blog posts found in this category.</div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {items.map((post, index) => {
                if (index === 0) {
                  return (
                    <div key={post.id} className="group col-span-1 md:col-span-2 bg-surface border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all">
                      <div className="grid md:grid-cols-2">
                        <div className="h-full min-h-[300px] relative overflow-hidden">
                          <img className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={post.featuredImage || "/assets/images/88b641cabf-14e1efdecde6f9ceb55d.png"} alt={post.title} />
                        </div>
                        <div className="p-8 flex flex-col justify-center">
                          <div className="text-primary text-xs font-bold tracking-widest uppercase mb-4">{post.category}</div>
                          <h3 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors">{post.title}</h3>
                          <div className="mt-auto flex items-center justify-between">
                            {/* <span className="text-sm text-secondary">{new Date(post.createdAt).toLocaleDateString()}</span> */}
                            <Link href={`${basePath}/${post.slug}`} className="text-primary text-sm font-semibold">Read More</Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }
                return (
                  <div key={post.id} className="group bg-surface border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all">
                    <div className="h-56 overflow-hidden">
                      <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={post.featuredImage || "/assets/images/c143f89846-9d57645c85ea395d9c1c.png"} alt={post.title} />
                    </div>
                    <div className="p-6">
                      <div className="text-primary text-xs font-bold tracking-widest uppercase mb-3">{post.category}</div>
                      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{post.title}</h3>
                      <div className="flex items-center justify-between border-t border-border pt-4">
                        {/* <span className="text-xs text-secondary">{new Date(post.createdAt).toLocaleDateString()}</span> */}
                        <Link href={`${basePath}/${post.slug}`} className="text-white text-xs font-bold hover:text-primary transition-colors">READ POST</Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div ref={loaderRef} className="h-12 mt-8 flex items-center justify-center text-sm text-secondary">
              {isLoading ? "Loading more posts..." : hasMore ? "Scroll to load more" : "You have reached the end"}
            </div>
          </div>
        </section>
        {/* Newsletter CTA */}
        <section id="cta" className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="relative bg-surface border border-border rounded-[32px] p-12 md:p-20 overflow-hidden glow-purple">
              <div className="purple-blur -top-40 -right-40"></div>
              <div className="max-w-2xl relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Build a More Efficient Operation
                </h2>
                <p className="text-xl text-secondary mb-10">
                  Get weekly insights on automation, systems design, and efficiency.
                </p>
                <form className="flex flex-col sm:flex-row gap-4">
                  <input type="email" placeholder="Enter your email" className="flex-1 bg-background border border-border rounded-xl px-6 py-4 focus:outline-none focus:border-primary transition-colors text-white" />
                  <button type="submit" className="bg-primary hover:bg-opacity-90 text-white px-8 py-4 rounded-xl font-bold transition-all">
                    Get Updates
                  </button>
                </form>
                <p className="text-sm text-secondary mt-6">
                  No spam. Just value. Unsubscribe anytime.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
    </>
  );
}
