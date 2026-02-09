"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
];

export function Navigation() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -60% 0px" }
    );

    navItems.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="hidden lg:flex flex-col gap-1" aria-label="In-page navigation">
      {navItems.map(({ label, href }) => {
        const isActive = activeSection === href.slice(1);
        return (
          <a
            key={href}
            href={href}
            className={cn(
              "group flex items-center gap-4 py-2 transition-all duration-300",
              isActive ? "text-foreground" : "text-muted-foreground"
            )}
          >
            <span
              className={cn(
                "h-px transition-all duration-300",
                isActive
                  ? "w-16 bg-foreground"
                  : "w-8 bg-muted-foreground group-hover:w-16 group-hover:bg-foreground"
              )}
            />
            <span
              className={cn(
                "text-xs font-semibold uppercase tracking-widest transition-colors duration-300",
                isActive
                  ? "text-foreground"
                  : "text-muted-foreground group-hover:text-foreground"
              )}
            >
              {label}
            </span>
          </a>
        );
      })}
    </nav>
  );
}
