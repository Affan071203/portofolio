import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, AlertCircle, Wrench, Trophy } from 'lucide-react';
import { ProjectItem } from '../types';

interface ModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-3xl rounded-3xl bg-[#0D1B35] border border-white/15 shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col my-auto"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between p-6 border-b border-white/10 bg-[#050B18]/70">
            <div>
              <span className="text-xs font-bold text-blue-400 tracking-wider uppercase">
                {project.categoryLabel} • {project.year}
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-1">
                {project.title}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
              aria-label="Close Modal"
            >
              <X size={20} />
            </button>
          </div>

          {/* Modal Content */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
            
            {/* Image Preview */}
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#050B18]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 sm:h-80 object-cover object-center"
              />
            </div>

            {/* Tagline / Subtitle */}
            <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-200 text-sm font-semibold">
              {project.tagline}
            </div>

            {/* Problem & Challenge */}
            <div className="space-y-2">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <AlertCircle size={16} className="text-amber-400" />
                <span>The Challenge / Client Pain Point</span>
              </h4>
              <p className="text-sm text-[#A7B1C2] leading-relaxed pl-6">
                {project.problem}
              </p>
            </div>

            {/* Execution & Solution */}
            <div className="space-y-2">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Wrench size={16} className="text-blue-400" />
                <span>Execution &amp; Solution Architecture</span>
              </h4>
              <p className="text-sm text-[#A7B1C2] leading-relaxed pl-6">
                {project.solution}
              </p>
            </div>

            {/* Measurable Impact */}
            <div className="space-y-2">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Trophy size={16} className="text-emerald-400" />
                <span>Impact &amp; Key Results</span>
              </h4>
              <p className="text-sm text-[#A7B1C2] leading-relaxed pl-6">
                {project.impact}
              </p>
            </div>

            {/* Technologies */}
            <div className="pt-4 border-t border-white/10">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
                Technologies &amp; Tools Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg text-xs font-semibold bg-white/5 border border-white/10 text-gray-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Modal Footer */}
          <div className="p-4 sm:p-6 border-t border-white/10 bg-[#050B18]/70 flex items-center justify-between">
            <span className="text-xs text-gray-400">
              Assigned Role: <strong className="text-white">{project.role}</strong>
            </span>
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-xl text-xs font-bold bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
