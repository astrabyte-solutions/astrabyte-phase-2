"use client";

import { useEffect } from "react";

export default function SectionAnimator() {
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("section"));
    sections.forEach((section) => {
      section.classList.add("section-animate");

      const animatableChildren = Array.from(
        section.querySelectorAll<HTMLElement>("h1, h2, h3, h4, p, li, a, button, img, form, article, details")
      ).slice(0, 24);

      animatableChildren.forEach((child, index) => {
        child.classList.add("section-animate-item");
        child.style.setProperty("--sa-delay", `${Math.min(index * 60, 600)}ms`);
      });
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("section-animate-visible");
          }
        });
      },
      { threshold: 0.12 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return null;
}

