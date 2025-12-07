"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import { ModeToggle } from "./theme-button";

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
    { href: "/posts", label: "Article" },
    { href: "/tags", label: "Tags" },
    { href: "/about", label: "About" },
    {
      href: "https://github.com/famichi-0135",
      label: "GitHub",
      external: true,
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-5 py-5 flex justify-center">
        <nav className="bg-white/70 dark:bg-neutral-900/70 backdrop-blur-xl border border-white/10 dark:border-neutral-700/30 shadow-lg shadow-black/5 dark:shadow-black/50 rounded-full px-6 md:px-8 py-3 flex items-center gap-4 md:gap-8 w-full md:w-auto max-w-4xl">
          {/* Logo */}
          <Link
            href="/"
            className="text-lg md:text-2xl font-bold tracking-tight hover:opacity-70 transition-opacity text-neutral-900 dark:text-neutral-100 whitespace-nowrap"
          >
            {/* Famichi_Blog */}
            <Image
              src="/headerlogo.png"
              width={120}
              height={50}
              alt="Picture of the author"
              className="dark:contrast-0"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            <div className="h-6 w-px bg-neutral-300/50 dark:bg-neutral-600/50" />
            <ul className="flex items-center gap-2 text-sm font-medium text-neutral-600 dark:text-neutral-400">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="px-5 py-2 rounded-full hover:bg-white/60 dark:hover:bg-neutral-700/60 hover:text-neutral-900 dark:hover:text-neutral-100 transition-all duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}{" "}
            </ul>{" "}
            <ModeToggle />
          </div>

          {/* Mobile Menu Button */}

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden ml-auto p-2 rounded-full hover:bg-white/60 dark:hover:bg-neutral-700/60 transition-all duration-200"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-neutral-900 dark:text-neutral-100"
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
          <div className="bg-white/90 dark:bg-neutral-900/90 backdrop-blur-xl border border-white/20 dark:border-neutral-700/30 shadow-lg dark:shadow-black/50 rounded-2xl p-4 mx-auto max-w-md">
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-3 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-900 dark:text-neutral-100 font-medium transition-all duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <div className="ml-4">
                <ModeToggle />
              </div>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
