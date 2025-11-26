"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show header when scrolling up, hide when scrolling down
      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "https://github.com", label: "GitHub", external: true },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-5 py-5 flex justify-center">
        <nav className="bg-white/70 backdrop-blur-xl border border-white/10 shadow-lg shadow-black/5 rounded-full px-6 md:px-8 py-3 flex items-center gap-4 md:gap-8 w-full md:w-auto max-w-4xl">
          {/* Logo */}
          <Link
            href="/"
            className="text-lg md:text-2xl font-bold tracking-tight hover:opacity-70 transition-opacity text-neutral-900 whitespace-nowrap"
          >
            Famichi_Blog
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            <div className="h-6 w-px bg-neutral-300/50" />
            <ul className="flex items-center gap-2 text-sm font-medium text-neutral-600">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="px-5 py-2 rounded-full hover:bg-white/60 hover:text-neutral-900 transition-all duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden ml-auto p-2 rounded-full hover:bg-white/60 transition-all duration-200"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-neutral-900"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-24 left-0 right-0 px-5 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="bg-white/90 backdrop-blur-xl border border-white/20 shadow-lg rounded-2xl p-4 mx-auto max-w-md">
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-3 rounded-lg hover:bg-neutral-100 text-neutral-900 font-medium transition-all duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
