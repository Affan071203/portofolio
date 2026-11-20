import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Headphones, Briefcase, Sparkles, Check } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

const ICONS_MAP: Record<string, React.ReactNode> = {
  Terminal: <Terminal size={22} className="text-blue-400" />,
  Headphones: <Headphones size={22} className="text-emerald-400" />,
  Briefcase: <Briefcase size={22} className="text-amber-400" />,
  Sparkles: <Sparkles size={22} className="text-purple-400" />
};

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="relative py-24 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-semibold tracking-wider uppercase mb-3">
            <span>Capabilities &amp; Stack</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Skills &amp; Expertise
          </h2>
          <p className="text-base sm:text-lg text-[#A7B1C2] leading-relaxed">
            A comprehensive matrix combining IT technical support, customer-focused communication, and business development proficiency.
          </p>
        </div>

        {/* 4 Grouped Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-[#0D1B35]/70 backdrop-blur-xl border border-white/10 hover:border-blue-500/30 transition-all hover:-translate-y-1 group"
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-6 pb-6 border-t border-white/5 border-b">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {ICONS_MAP[category.iconName] || <Sparkles size={22} className="text-blue-400" />}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white tracking-wide">
                    {category.title}
                  </h3>
                  <p className="text-xs text-[#A7B1C2] mt-0.5">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Skills Chips Matrix */}
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium transition-all ${
                      skill.highlight
                        ? 'bg-blue-600/15 text-blue-200 border border-blue-500/40 shadow-sm'
                        : 'bg-white/5 text-gray-300 border border-white/5 hover:border-white/20'
                    }`}
                  >
                    <Check size={12} className={skill.highlight ? 'text-blue-400' : 'text-gray-500'} />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

