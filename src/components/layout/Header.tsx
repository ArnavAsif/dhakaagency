"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_ITEMS = [
  {
    title: "DEMO",
    href: "#",
    badge: "Hot",
    dropdown: [
      { name: "Web Design Agency", href: "#", current: true },
      { name: "Branding Agency", href: "#" },
      { name: "SEO Agency", href: "#" },
      { name: "Design Studio", href: "#" },
      { name: "Video Production", href: "#" },
      { name: "AI Startup", href: "#" },
      { name: "Creative Agency Classic", href: "#" },
      { name: "Marketing Agency", href: "#" },
      { name: "Corporate Agency", href: "#" },
      { name: "Startup Agency", href: "#" },
      { name: "Freelancer", href: "#" },
    ],
  },
  {
    title: "PORTFOLIO",
    href: "#",
    dropdown: [
      { name: "Card Slider", href: "#" },
      { name: "Full-width Carousel", href: "#" },
      { name: "Full-width Fashion", href: "#" },
      { name: "Shaders Slider", href: "#" },
      { name: "Portfolio Masonry", href: "#" },
      { name: "Agency Portfolio", href: "#" },
    ],
  },
  {
    title: "RTL",
    href: "#",
    dropdown: [
      { name: "Branding Agency RTL", href: "#" },
      { name: "Web Design Agency RTL", href: "#" },
      { name: "SEO Agency RTL", href: "#" },
      { name: "Creative Agency RTL", href: "#" },
    ],
  },
  {
    title: "HOME",
    href: "#",
    dropdown: [
      { name: "Home Light", href: "#", current: true },
      { name: "Home Dark", href: "#" },
    ],
  },
  {
    title: "PAGES",
    href: "#",
    dropdown: [
      { name: "About Us", href: "#" },
      { name: "Our Team", href: "#" },
      { name: "Services", href: "#" },
      { name: "Career", href: "#" },
      { name: "Case Studies / Work", href: "#" },
      { name: "FAQ", href: "#" },
      { name: "Blog Pages", href: "#" },
      { name: "Contact Us", href: "#" },
    ],
  },
  {
    title: "SHOP",
    href: "#",
  },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [offcanvasOpen, setOffcanvasOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md py-4 shadow-sm"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-10 flex items-center">
            <Image
              src="/assets/images/logo.png"
              alt="Arolax Logo"
              width={125}
              height={34}
              priority
              className="h-8 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.title}
                className="relative group"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.title)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="font-teko text-[22px] tracking-wide text-[#121212] hover:text-[#FF845D] transition-colors duration-200 flex items-center gap-1 uppercase"
                >
                  {item.title}
                  {item.dropdown && (
                    <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180 opacity-70" />
                  )}
                </Link>

                {/* Dropdown Menu */}
                {item.dropdown && (
                  <AnimatePresence>
                    {activeDropdown === item.title && (
                      <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 pt-3 z-50"
                      >
                        <div className="bg-white rounded-xl shadow-xl border border-black/5 py-3 px-2 min-w-[220px]">
                          {item.dropdown.map((sub) => (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              className={`block px-4 py-2 text-sm font-dm rounded-lg transition-colors duration-150 ${
                                sub.current
                                  ? "text-[#FF845D] bg-[#FF845D]/10 font-semibold"
                                  : "text-[#333333] hover:text-[#FF845D] hover:bg-[#F9F9F9]"
                              }`}
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* Right Actions: Search & Hamburger */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSearchOpen(true)}
              aria-label="Search"
              className="w-10 h-10 rounded-full flex items-center justify-center text-[#121212] hover:text-[#FF845D] hover:bg-black/5 transition-all cursor-pointer"
            >
              <Search className="w-5 h-5" />
            </button>

            <button
              onClick={() => setOffcanvasOpen(true)}
              aria-label="Toggle menu"
              className="w-10 h-10 rounded-full flex flex-col items-center justify-center gap-1.5 text-[#121212] hover:text-[#FF845D] hover:bg-black/5 transition-all cursor-pointer"
            >
              <span className="w-6 h-[2px] bg-current rounded-full"></span>
              <span className="w-4 h-[2px] bg-current rounded-full ml-auto mr-2"></span>
              <span className="w-6 h-[2px] bg-current rounded-full"></span>
            </button>
          </div>
        </div>
      </header>

      {/* Search Modal Overlay */}
      <AnimatePresence>
        {searchOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSearchOpen(false)}
              className="fixed inset-0 bg-black/90 backdrop-blur-md cursor-pointer"
            />

            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: -20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: -20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-2xl bg-white rounded-2xl p-8 z-10 shadow-2xl"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-teko text-3xl uppercase tracking-wider text-[#121212]">
                  Search Our Website
                </h3>
                <button
                  onClick={() => setSearchOpen(false)}
                  className="w-8 h-8 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center text-[#121212] cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="relative">
                <input
                  type="text"
                  placeholder="Type to search..."
                  autoFocus
                  className="w-full px-5 py-4 border-2 border-black/10 rounded-xl text-lg font-dm focus:outline-none focus:border-[#FF845D] transition-colors pr-12"
                />
                <button
                  aria-label="Submit search"
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#121212] hover:text-[#FF845D] cursor-pointer"
                >
                  <ArrowRight className="w-6 h-6" />
                </button>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="text-xs text-[#888888] font-dm py-1">Popular:</span>
                {["Web Design", "Development", "Branding", "UI/UX", "Mobile App"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="text-xs font-dm px-3 py-1 bg-black/5 hover:bg-[#FF845D]/10 hover:text-[#FF845D] rounded-full cursor-pointer transition-colors"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Offcanvas Sidebar Drawer */}
      <AnimatePresence>
        {offcanvasOpen && (
          <div className="fixed inset-0 z-[100] overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOffcanvasOpen(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm cursor-pointer"
            />

            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-[#121212] text-white p-8 md:p-12 z-10 overflow-y-auto flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-12">
                  <Image
                    src="/assets/images/logo.png"
                    alt="Arolax Logo"
                    width={130}
                    height={36}
                    className="h-8 w-auto brightness-0 invert object-contain"
                  />
                  <button
                    onClick={() => setOffcanvasOpen(false)}
                    aria-label="Close menu"
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white cursor-pointer transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="mb-10">
                  <h4 className="font-teko text-2xl uppercase tracking-wider text-[#FF845D] mb-3">
                    About Agency
                  </h4>
                  <p className="text-sm font-dm text-[#C1C1C1] leading-relaxed">
                    We are a full-service digital agency that builds fascinating user
                    experiences. Our team creates exceptional UI design and high-performance functionality for world-class brands.
                  </p>
                </div>

                {/* Mobile Navigation List */}
                <div className="space-y-4 mb-10 border-t border-b border-white/10 py-6">
                  {NAV_ITEMS.map((item) => (
                    <div key={item.title}>
                      <Link
                        href={item.href}
                        onClick={() => setOffcanvasOpen(false)}
                        className="font-teko text-3xl uppercase tracking-wider text-white hover:text-[#FF845D] transition-colors block"
                      >
                        {item.title}
                      </Link>
                    </div>
                  ))}
                </div>

                {/* Contact Information */}
                <div className="space-y-4 mb-8">
                  <h4 className="font-teko text-2xl uppercase tracking-wider text-[#FF845D]">
                    Get In Touch
                  </h4>
                  <p className="text-sm font-dm text-[#C1C1C1]">
                    Flat 20, Reynolds Neck, North Helenaville, FV77 8WS
                  </p>
                  <p className="text-sm font-dm text-white">
                    <a
                      href="mailto:hello@example.com"
                      className="hover:text-[#FF845D] transition-colors"
                    >
                      hello@example.com
                    </a>
                  </p>
                  <p className="text-sm font-dm text-white font-semibold">
                    +2 (578) 315-6892
                  </p>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="pt-6 border-t border-white/10 flex items-center gap-4 text-sm font-dm text-[#C1C1C1]">
                <a href="#" className="hover:text-[#FF845D] transition-colors">
                  Facebook
                </a>
                <span>•</span>
                <a href="#" className="hover:text-[#FF845D] transition-colors">
                  Twitter
                </a>
                <span>•</span>
                <a href="#" className="hover:text-[#FF845D] transition-colors">
                  Instagram
                </a>
                <span>•</span>
                <a href="#" className="hover:text-[#FF845D] transition-colors">
                  LinkedIn
                </a>
              </div>
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
