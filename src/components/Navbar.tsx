import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavProps {
  activeSection: string;
}

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export const Navbar: React.FC<NavProps> = ({ activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Floating Centered Pill Navbar */}
      <header className="fixed top-5 left-0 right-0 z-50 flex justify-center items-center px-4 pointer-events-none">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={`pointer-events-auto flex items-center justify-between sm:justify-center gap-1 sm:gap-2 px-3 sm:px-5 py-2.5 rounded-full transition-all duration-300 ${
            scrolled
              ? 'bg-[#0D1B35]/85 backdrop-blur-xl border border-blue-500/25 shadow-xl shadow-black/40 ring-1 ring-white/10'
              : 'bg-[#0D1B35]/70 backdrop-blur-md border border-white/10 shadow-lg shadow-black/20'
          }`}
        >
          {/* Logo / Monogram */}
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-2 group mr-2 sm:mr-3 focus:outline-none"
            aria-label="Affan Agung Prabowo Home"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 p-[1px] flex items-center justify-center shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-[#050B18] rounded-full flex items-center justify-center">
                <span className="text-white font-extrabold text-xs tracking-wider">AA</span>
              </div>
            </div>
            <span className="hidden md:inline font-bold text-white text-sm tracking-tight group-hover:text-blue-400 transition-colors">
              {PERSONAL_INFO.shortName}
              <span className="text-blue-500">.</span>
            </span>
          </button>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main Navigation">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-colors duration-200 focus:outline-none ${
                    isActive ? 'text-white' : 'text-[#A7B1C2] hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full shadow-md shadow-blue-600/30"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Download CV Quick Action (Desktop) */}
          <a
            href={PERSONAL_INFO.cvPdf}
            download="Affan_Agung_Prabowo_CV.pdf"
            className="hidden lg:flex items-center gap-1.5 ml-2 px-3 py-1.5 rounded-full text-xs font-semibold text-blue-300 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 transition-all hover:scale-105"
          >
            <span>CV</span>
            <ArrowUpRight size={13} />
          </a>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-full text-gray-300 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </motion.div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-4 right-4 z-50 md:hidden bg-[#0D1B35]/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-4 shadow-2xl shadow-black/60"
          >
            <div className="flex flex-col gap-2">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                      isActive
                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                        : 'text-gray-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <div className="w-2 h-2 rounded-full bg-white" />}
                  </button>
                );
              })}
              <div className="pt-2 mt-1 border-t border-white/10">
                <a
                  href={PERSONAL_INFO.cvPdf}
                  download="Affan_Agung_Prabowo_CV.pdf"
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-semibold bg-blue-500/20 text-blue-300 border border-blue-500/30"
                >
                  <span>Download Curriculum Vitae</span>
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

