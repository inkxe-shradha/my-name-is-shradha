"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Link as ScrollLink } from "react-scroll";
import { Moon, Sun, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

const NAV_LINKS = [
  { name: "Home", to: "home" },
  { name: "About", to: "about" },
  { name: "Skills", to: "skills" },
  { name: "AI Journey", to: "ai-career" },
  { name: "Projects", to: "projects" },
  { name: "Contact", to: "contact-us-form" },
];

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled 
          ? "bg-bg-primary/90 backdrop-blur-xl border-border shadow-md py-4" 
          : "bg-bg-primary/40 backdrop-blur-md border-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
        <Link href="/" className="relative z-10 bg-white/10 dark:bg-black/20 p-2 rounded-xl backdrop-blur-sm border border-white/20 dark:border-white/10 shadow-sm hover:bg-white/20 dark:hover:bg-black/40 transition-colors">
          <Image
            src="/SSP-full.png"
            alt="Shradha Suman Praharaj"
            width={150}
            height={50}
            className="w-auto h-8 sm:h-10"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <ScrollLink
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="relative text-sm font-medium text-text-primary hover:text-brand-primary cursor-pointer transition-colors group"
                  activeClass="text-brand-primary"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-primary transition-all group-hover:w-full" />
                </ScrollLink>
              </li>
            ))}
            <li>
              <Link href="/blog" className="relative text-sm font-medium text-text-primary hover:text-brand-primary transition-colors group">
                Blog
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-primary transition-all group-hover:w-full" />
              </Link>
            </li>
          </ul>

          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full hover:bg-bg-secondary transition-colors text-text-primary"
              aria-label="Toggle dark mode"
            >
              {theme === "dark" ? <Sun className="w-5 h-5 animate-pulse" /> : <Moon className="w-5 h-5 animate-pulse" />}
            </button>
          )}
        </nav>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden relative z-10">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full hover:bg-bg-secondary transition-colors text-text-primary"
            >
              {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          )}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-full hover:bg-bg-secondary transition-colors text-text-primary"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-bg-primary border-b border-border shadow-lg py-4 md:hidden"
          >
            <ul className="flex flex-col items-center gap-4">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <ScrollLink
                    to={link.to}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg font-medium text-text-primary hover:text-brand-primary cursor-pointer"
                  >
                    {link.name}
                  </ScrollLink>
                </li>
              ))}
              <li>
                <Link href="/blog" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-text-primary hover:text-brand-primary">
                  Blog
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
