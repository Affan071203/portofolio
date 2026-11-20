import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';
import { EXPERIENCE_DATA } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="relative py-24 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-semibold tracking-wider uppercase mb-3">
            <span>Career Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Professional Experience
          </h2>
          <p className="text-base sm:text-lg text-[#A7B1C2] leading-relaxed">
            Verified track record spanning customer service operations, project management, and client-aligned technology delivery.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Glowing Line */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-blue-500 via-cyan-500 to-indigo-600 -translate-x-1/2 opacity-30" />

          <div className="space-y-12">
            {EXPERIENCE_DATA.map((item, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  } gap-6 md:gap-12`}
                >
                  {/* Timeline Center Node (Desktop) */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#050B18] border-2 border-blue-500 items-center justify-center z-20 shadow-lg shadow-blue-500/30">
                    <div className="w-3.5 h-3.5 rounded-full bg-blue-400 animate-pulse" />
                  </div>

                  {/* Experience Card */}
                  <div className="w-full md:w-1/2">
                    <div className="p-6 sm:p-8 rounded-3xl bg-[#0D1B35]/70 backdrop-blur-xl border border-white/10 hover:border-blue-500/40 transition-all hover:shadow-xl hover:shadow-blue-900/20 group">
                      
                      {/* Card Header: Role & Period */}
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                        <div>
                          <span className={`inline-block px-2.5 py-1 rounded-md text-[11px] font-bold tracking-wide uppercase mb-2 ${
                            item.badgeColor === 'emerald'
                              ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                              : item.badgeColor === 'blue'
                              ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                              : item.badgeColor === 'cyan'
                              ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                              : 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                          }`}>
                            {item.badge}
                          </span>
                          <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                            {item.role}
                          </h3>
                          <div className="text-sm font-semibold text-gray-300 flex items-center gap-1.5 mt-1">
                            <Briefcase size={14} className="text-blue-400" />
                            <span>{item.company}</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-gray-400">
                          <Calendar size={13} className="text-blue-400" />
                          <span>{item.period}</span>
                        </div>
                      </div>

                      {/* Summary */}
                      <p className="text-xs sm:text-sm text-[#A7B1C2] leading-relaxed mb-6">
                        {item.summary}
                      </p>

                      {/* Bullets: Action / Resolution / Impact */}
                      <div className="space-y-3 pt-4 border-t border-white/10">
                        {item.bullets.map((b, bIdx) => (
                          <div key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300">
                            <CheckCircle2 size={16} className="text-blue-400 shrink-0 mt-0.5" />
                            <div>
                              <strong className="text-white font-semibold">{b.label}: </strong>
                              <span className="text-[#A7B1C2]">{b.text}</span>
                            </div>
                          </div>
                        ))}
                      </div>

                    </div>
                  </div>

                  {/* Empty Spacer Column for Alignment */}
                  <div className="hidden md:block md:w-1/2" />

                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

