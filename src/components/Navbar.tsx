"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "#process", label: "How it works" },
  { href: "#work", label: "Our work" },
  { href: "#pricing", label: "See pricing" },
  { href: "/book", label: "Book a call" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-sm border-b border-gray-100" : "bg-white"}`}>
        <nav className="max-w-5xl mx-auto px-6 h-[68px] flex items-center justify-between">
          <Link href="/" className="font-display font-bold text-xl tracking-tight">Scalify</Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-10 text-[15px] text-gray-500">
            {links.map(l => (
              <Link key={l.href} href={l.href} className="hover:text-black transition-colors duration-200">{l.label}</Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Link href="#pricing" className="hidden md:block border border-[#7C3AED] text-[#7C3AED] hover:bg-[#7C3AED] hover:text-white transition-all duration-200 px-5 py-2 rounded-full text-sm font-medium">
              Order now
            </Link>
            {/* Hamburger */}
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5 group">
              <motion.span animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 6 : 0 }} className="block w-5 h-0.5 bg-gray-800 origin-center transition-all" />
              <motion.span animate={{ opacity: menuOpen ? 0 : 1 }} className="block w-5 h-0.5 bg-gray-800" />
              <motion.span animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -6 : 0 }} className="block w-5 h-0.5 bg-gray-800 origin-center transition-all" />
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden overflow-hidden border-t border-gray-100 bg-white"
            >
              <div className="flex flex-col px-6 py-4 gap-4">
                {links.map(l => (
                  <Link key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
                    className="text-[16px] text-gray-600 hover:text-black transition-colors py-1">
                    {l.label}
                  </Link>
                ))}
                <Link href="#pricing" onClick={() => setMenuOpen(false)}
                  className="bg-[#7C3AED] text-white text-center py-3 rounded-full text-sm font-semibold mt-2">
                  Order now
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}