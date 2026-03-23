"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#now", label: "Now" },
    { href: "#skills", label: "Skills" },
    { href: "#featured", label: "Featured" },
    { href: "#projects", label: "All repos" },
  ];

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "border-b border-[var(--border-subtle)] bg-[var(--bg-deep)]/90 shadow-lg shadow-black/20 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="section-container">
        <div className="flex h-16 items-center justify-between">
          <a
            href="#about"
            className="focus-ring rounded-md text-lg font-semibold gradient-text hover:opacity-90"
          >
            Taylor Allen
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="focus-ring rounded text-sm font-medium text-[var(--text-muted)] transition hover:text-[var(--accent)]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://github.com/Daazd"
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring rounded-lg border border-[var(--border-accent)] bg-[var(--accent-dim)] px-4 py-2 text-sm font-semibold text-[var(--accent)] transition hover:bg-[var(--accent)]/20"
            >
              GitHub
            </a>
          </div>

          <button
            type="button"
            className="focus-ring rounded-md text-[var(--text-muted)] transition hover:text-[var(--accent)] md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="border-t border-[var(--border-subtle)] py-4 md:hidden">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-md py-2 text-sm font-medium text-[var(--text-muted)] hover:text-[var(--accent)]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://github.com/Daazd"
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 text-sm font-medium text-[var(--text-muted)] hover:text-[var(--accent)]"
              >
                GitHub
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
