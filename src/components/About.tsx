import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Compass, CheckCircle, Target, BookOpen } from 'lucide-react';
import { PERSONAL_INFO, CORE_PILLARS, EDUCATION_DATA } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-semibold tracking-wider uppercase mb-3">
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            More Than Technology,{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Creating Meaningful Solutions.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#A7B1C2] leading-relaxed">
            Understanding user pain points, aligning digital systems with operational goals, and delivering reliable support across technical and business functions.
          </p>
        </div>

        {/* Narrative & Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left: Detailed Story */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 p-8 rounded-3xl bg-[#0D1B35]/70 backdrop-blur-xl border border-white/10 shadow-xl"
          >
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
              Professional Narrative
            </h3>
            <div className="space-y-4 text-sm sm:text-base text-[#A7B1C2] leading-relaxed">
              {PERSONAL_INFO.aboutDetailed.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Quick Highlights Bar */}
            <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                <div className="text-2xl font-extrabold text-blue-400">3.93</div>
                <div className="text-xs text-gray-400 font-medium">Cum Laude GPA</div>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                <div className="text-2xl font-extrabold text-cyan-400">3+</div>
                <div className="text-xs text-gray-400 font-medium">Years Active Track</div>
              </div>
              <div className="col-span-2 sm:col-span-1 p-3 rounded-xl bg-white/5 border border-white/5">
                <div className="text-2xl font-extrabold text-emerald-400">Sinta 3</div>
                <div className="text-xs text-gray-400 font-medium">Published Research</div>
              </div>
            </div>
          </motion.div>

          {/* Right: 4 Information Cards (Education, Interests, Competencies, Objective) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Card 1: Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-6 rounded-2xl bg-[#0D1B35]/70 border border-white/10 hover:border-blue-500/40 transition-all hover:-translate-y-1 group"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <GraduationCap size={20} />
              </div>
              <h4 className="text-base font-bold text-white mb-1.5">Education</h4>
              <div className="text-xs font-semibold text-blue-400 mb-2">
                {EDUCATION_DATA[0].degree}
              </div>
              <p className="text-xs text-[#A7B1C2] leading-relaxed">
                {EDUCATION_DATA[0].institution} • {EDUCATION_DATA[0].gpa}
              </p>
            </motion.div>

            {/* Card 2: Professional Interests */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 rounded-2xl bg-[#0D1B35]/70 border border-white/10 hover:border-cyan-500/40 transition-all hover:-translate-y-1 group"
            >
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Compass size={20} />
              </div>
              <h4 className="text-base font-bold text-white mb-1.5">Professional Interests</h4>
              <p className="text-xs text-[#A7B1C2] leading-relaxed">
                IT Customer Experience, Technical Support Engineering, Digital Marketing Operations, and Business Solutions Strategy.
              </p>
            </motion.div>

            {/* Card 3: Core Competencies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-6 rounded-2xl bg-[#0D1B35]/70 border border-white/10 hover:border-emerald-500/40 transition-all hover:-translate-y-1 group"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <CheckCircle size={20} />
              </div>
              <h4 className="text-base font-bold text-white mb-1.5">Core Competencies</h4>
              <p className="text-xs text-[#A7B1C2] leading-relaxed">
                Empathetic Client Communication, Rapid Incident Resolution, Workflow Mapping, and Technical Documentation.
              </p>
            </motion.div>

            {/* Card 4: Career Objective */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="p-6 rounded-2xl bg-[#0D1B35]/70 border border-white/10 hover:border-purple-500/40 transition-all hover:-translate-y-1 group"
            >
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Target size={20} />
              </div>
              <h4 className="text-base font-bold text-white mb-1.5">Career Objective</h4>
              <p className="text-xs text-[#A7B1C2] leading-relaxed">
                To contribute to high-performing organizations by blending rigorous technical knowledge with customer-oriented excellence and commercial acumen.
              </p>
            </motion.div>

          </div>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CORE_PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-gradient-to-b from-[#0D1B35]/80 to-[#050B18]/60 border border-white/10 hover:border-blue-500/30 transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-400/30 text-blue-300 flex items-center justify-center mb-4">
                <BookOpen size={18} />
              </div>
              <h4 className="text-base font-bold text-white mb-2">{pillar.title}</h4>
              <p className="text-xs sm:text-sm text-[#A7B1C2] leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

