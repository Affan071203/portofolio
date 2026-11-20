import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Linkedin, Github, Mail, Phone, Sparkles, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 lg:py-28 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-7xl w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-semibold tracking-wide mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>IT Professional | Customer Experience | Technology</span>
            </div>

            {/* Intro Greeting */}
            <span className="text-sm sm:text-base font-medium text-blue-400 tracking-wider uppercase mb-2">
              Hello, I'm
            </span>

            {/* Full Name */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              AFFAN AGUNG <br />
              <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300 bg-clip-text text-transparent">
                PRABOWO
              </span>
            </h1>

            {/* Core Description */}
            <p className="text-base sm:text-lg text-[#A7B1C2] max-w-2xl leading-relaxed mb-8">
              "{PERSONAL_INFO.tagline}"
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={scrollToProjects}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-semibold text-sm tracking-wide shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 group"
              >
                <span>Explore My Work</span>
                <ArrowDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
              </button>

              <a
                href={PERSONAL_INFO.cvPdf}
                download="Affan_Agung_Prabowo_CV.pdf"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#0D1B35]/80 hover:bg-[#14254A] text-white font-semibold text-sm tracking-wide border border-white/10 hover:border-blue-400/40 shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
              >
                <Download size={16} className="text-blue-400" />
                <span>Download CV</span>
              </a>
            </div>

            {/* Social Links Row */}
            <div className="flex items-center gap-3 pt-4 border-t border-white/10 w-full max-w-md">
              <span className="text-xs font-semibold tracking-wider uppercase text-gray-400 mr-2">
                Connect:
              </span>
              <a
                href={PERSONAL_INFO.contacts.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-white/5 hover:bg-blue-600/20 border border-white/5 hover:border-blue-500/40 text-gray-300 hover:text-blue-400 transition-all hover:scale-110"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={PERSONAL_INFO.contacts.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-white/5 hover:bg-blue-600/20 border border-white/5 hover:border-blue-500/40 text-gray-300 hover:text-blue-400 transition-all hover:scale-110"
                aria-label="GitHub Profile"
              >
                <Github size={18} />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.contacts.email}`}
                className="p-2.5 rounded-lg bg-white/5 hover:bg-blue-600/20 border border-white/5 hover:border-blue-500/40 text-gray-300 hover:text-blue-400 transition-all hover:scale-110"
                aria-label="Email Me"
              >
                <Mail size={18} />
              </a>
              <a
                href={PERSONAL_INFO.contacts.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-white/5 hover:bg-emerald-600/20 border border-white/5 hover:border-emerald-500/40 text-gray-300 hover:text-emerald-400 transition-all hover:scale-110"
                aria-label="WhatsApp Contact"
              >
                <Phone size={18} />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Hero Portrait Presentation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center items-center relative"
          >
            {/* Glowing Backdrop Aura */}
            <div className="absolute w-72 sm:w-96 h-72 sm:h-96 bg-blue-600/25 rounded-full blur-[80px] pointer-events-none -z-10" />
            <div className="absolute w-48 sm:w-64 h-48 sm:h-64 bg-cyan-400/20 rounded-full blur-[60px] pointer-events-none -z-10 translate-x-10 -translate-y-10" />

            {/* Portrait Frame with Floating Motion */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative p-2 rounded-3xl bg-gradient-to-b from-blue-500/30 via-white/10 to-transparent border border-white/20 shadow-2xl shadow-blue-900/30 max-w-[340px] sm:max-w-[380px] w-full"
            >
              <div className="relative rounded-2xl overflow-hidden bg-[#0A1326] aspect-[4/5]">
                <img
                  src={PERSONAL_INFO.profilePhoto}
                  alt={PERSONAL_INFO.name}
                  className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                  onError={(e) => {
                    // Fallback to avatar-square if needed
                    (e.target as HTMLImageElement).src = PERSONAL_INFO.avatarPhoto;
                  }}
                />

                {/* Subtle gradient vignette at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050B18] via-transparent to-transparent opacity-60" />

                {/* Floating badge inside portrait: Verified Credentials */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#0D1B35]/85 backdrop-blur-md border border-white/15 shadow-lg flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-blue-600/30 border border-blue-400/40 flex items-center justify-center text-blue-300">
                      <Sparkles size={16} />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white flex items-center gap-1">
                        <span>Informatics Graduate</span>
                        <CheckCircle2 size={13} className="text-emerald-400" />
                      </div>
                      <div className="text-[11px] text-gray-300">
                        Bojonegoro, Indonesia
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    Open to Work
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

