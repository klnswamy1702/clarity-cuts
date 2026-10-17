'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Showreel', href: '#showreel' },
  { label: 'Video Edits', href: '#portfolio' },
  { label: 'AI Photo Lab', href: '#photo-lab' },
  { label: 'Workflow', href: '#workflow' },
  { label: 'Services', href: '#services' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#09090B]/80 backdrop-blur-xl border-b border-white/[0.06]'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <div className="relative flex items-center gap-2">
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ background: '#06B6D4', boxShadow: '0 0 8px #06B6D4' }}
              />
              <span className="font-display font-black text-lg tracking-tight text-white">
                CLARITY CUTS
              </span>
            </div>
            <span
              className="hidden sm:inline text-[10px] font-mono tracking-widest px-2 py-0.5 rounded border"
              style={{
                color: '#8B5CF6',
                borderColor: 'rgba(139,92,246,0.3)',
                background: 'rgba(139,92,246,0.08)',
              }}
            >
              by Charan
            </span>
          </div>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => scrollTo(link.href)}
                  className="text-sm text-zinc-400 hover:text-white transition-colors font-medium tracking-wide"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => scrollTo('#contact')}
              className="relative px-5 py-2 text-sm font-semibold rounded-lg overflow-hidden group"
              style={{
                background: 'linear-gradient(135deg, #06B6D4 0%, #8B5CF6 100%)',
                boxShadow: '0 0 20px rgba(6,182,212,0.3)',
              }}
            >
              <span className="relative z-10 text-white">Book a Cut</span>
              <span
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: 'linear-gradient(135deg, #0891B2 0%, #7C3AED 100%)' }}
              />
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-[#09090B]/95 backdrop-blur-2xl pt-20 px-6 flex flex-col gap-6"
            >
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="text-left text-2xl font-display font-bold text-white/80 hover:text-white py-2 border-b border-white/[0.06]"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.button
                onClick={() => scrollTo('#contact')}
                className="mt-4 px-6 py-3 rounded-xl text-white font-semibold text-lg"
                style={{ background: 'linear-gradient(135deg, #06B6D4 0%, #8B5CF6 100%)' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
              >
                Book a Cut
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
