import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const CATEGORY_STYLES = {
  'LLM Safety': {
    badge: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
    hover: 'hover:border-rose-500/20',
  },
  'Causal ML': {
    badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    hover: 'hover:border-emerald-500/20',
  },
};

export default function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  const styles = CATEGORY_STYLES[project.category] || {
    badge: 'bg-[#6c63ff]/10 text-[#a78bfa] border-[#6c63ff]/20',
    hover: 'hover:border-[#6c63ff]/20',
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 35 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className={`relative flex flex-col rounded-2xl border border-white/[0.06] bg-gradient-to-br from-[#0f0f1a] to-[#0a0a10] p-6 transition-all duration-300 ${styles.hover} group overflow-hidden`}
    >
      {/* Top shimmer */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />

      {/* Category + optional badge */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-5">
        <span className={`px-2.5 py-1 rounded-md text-xs font-mono border ${styles.badge}`}>
          {project.category}
        </span>
        {project.badge && (
          <span className="px-2.5 py-1 rounded-md text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            ⬡ {project.badge}
          </span>
        )}
      </div>

      {/* Title */}
      <h3 className="font-space text-lg font-bold text-white mb-3 group-hover:text-[#a78bfa] transition-colors duration-200">
        {project.name}
      </h3>

      {/* Description */}
      <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-6">
        {project.description}
      </p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <span
            key={t}
            className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/[0.03] text-slate-400 border border-white/[0.06]"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
