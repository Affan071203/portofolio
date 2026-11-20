import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { ProjectItem } from '../types';
import { ProjectModal } from './ProjectModal';

const FILTER_TABS = [
  { id: 'all', label: 'All Projects' },
  { id: 'web', label: 'Web Development' },
  { id: 'mobile', label: 'Mobile Apps' },
  { id: 'research', label: 'IT Solutions & Research' }
];

export const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects = activeTab === 'all'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === activeTab);

  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-semibold tracking-wider uppercase mb-3">
            <span>Portfolio Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Selected Projects
          </h2>
          <p className="text-base sm:text-lg text-[#A7B1C2] leading-relaxed">
            A showcase of my work, experience, and technical capabilities in developing intuitive, high-impact solutions.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {FILTER_TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-4 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all focus:outline-none ${
                  isActive
                    ? 'text-white bg-blue-600 shadow-md shadow-blue-600/30'
                    : 'text-gray-300 bg-[#0D1B35]/60 hover:bg-[#0D1B35] border border-white/10 hover:border-blue-400/30'
                }`}
              >
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group rounded-3xl bg-[#0D1B35]/70 backdrop-blur-xl border border-white/10 hover:border-blue-500/40 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/30 flex flex-col"
              >
                {/* Image Preview Container */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#0A1326]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B35] via-transparent to-transparent opacity-80" />

                  {/* Top Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase bg-black/60 backdrop-blur-md text-blue-300 border border-white/15">
                      {project.categoryLabel}
                    </span>
                  </div>

                  {/* Year Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-bold text-gray-300 bg-[#050B18]/70 backdrop-blur-md border border-white/10">
                      {project.year}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-semibold text-blue-400 mb-3">
                      {project.tagline}
                    </p>
                    <p className="text-sm text-[#A7B1C2] leading-relaxed line-clamp-3 mb-6">
                      {project.description}
                    </p>

                    {/* Technologies Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-white/5 border border-white/5 text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer: Action Button */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="text-xs text-gray-400 font-medium">
                      Role: <strong className="text-gray-200">{project.role}</strong>
                    </span>

                    <button
                      onClick={() => setSelectedProject(project)}
                      className="px-4 py-2 rounded-xl text-xs font-bold bg-blue-600/20 hover:bg-blue-600 text-blue-300 hover:text-white border border-blue-500/30 hover:border-transparent transition-all flex items-center gap-1.5 group/btn"
                    >
                      <span>View Details</span>
                      <ArrowUpRight size={14} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
