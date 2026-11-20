import React from 'react';
import { ArrowUp, Linkedin, Github, Mail, Phone } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#050B18] border-t border-white/10 text-[#A7B1C2] py-12 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Brand Identity */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 font-bold text-xs tracking-wider">
            AA
          </div>
          <div>
            <div className="text-sm font-bold text-white">
              {PERSONAL_INFO.name}
            </div>
            <div className="text-xs text-gray-400">
              Informatics Engineering Graduate • IT Solutions &amp; CS
            </div>
          </div>
        </div>

        {/* Center: Social Icons */}
        <div className="flex items-center gap-3">
          <a
            href={PERSONAL_INFO.contacts.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-blue-400 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
          </a>
          <a
            href={PERSONAL_INFO.contacts.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-blue-400 transition-colors"
            aria-label="GitHub"
          >
            <Github size={16} />
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.contacts.email}`}
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-blue-400 transition-colors"
            aria-label="Email"
          >
            <Mail size={16} />
          </a>
          <a
            href={PERSONAL_INFO.contacts.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-emerald-400 transition-colors"
            aria-label="WhatsApp"
          >
            <Phone size={16} />
          </a>
        </div>

        {/* Right: Copyright & Back to Top */}
        <div className="flex items-center gap-4">
          <div className="text-xs text-gray-400 text-center md:text-right">
            © {new Date().getFullYear()} {PERSONAL_INFO.shortName}. All rights reserved.
          </div>
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-full bg-blue-600/20 hover:bg-blue-600 border border-blue-500/40 text-blue-300 hover:text-white transition-all hover:scale-105"
            aria-label="Back to Top"
          >
            <ArrowUp size={16} />
          </button>
        </div>

      </div>
    </footer>
  );
};
