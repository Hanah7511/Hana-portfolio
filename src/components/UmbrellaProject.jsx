import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiGithub, FiArrowUpRight } from 'react-icons/fi';
import { projects } from '../data/portfolioData';

export default function UmbrellaProject() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const project = projects[0];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      className="relative rounded-2xl border border-[#6c63ff]/25 overflow-hidden mb-8"
      style={{ background: 'linear-gradient(135deg, #0f0f1c 0%, #0a0a12 100%)' }}
    >
      {/* Top highlight line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-[#6c63ff]/60 to-transparent" />
      {/* Glow orbs */}
      <div className="absolute -top-24 left-1/4 w-96 h-96 bg-[#6c63ff]/6 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-24 right-1/4 w-72 h-72 bg-[#38bdf8]/4 rounded-full blur-3xl pointer-events-none" />

      <div className="relative p-8 md:p-10">
        {/* Header row */}
        <div className="flex flex-wrap items-start justify-between gap-4 mb-7">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="px-2.5 py-1 rounded-md text-xs font-mono bg-amber-500/10 text-amber-400 border border-amber-500/20 uppercase tracking-wider">
                ★ Umbrella Project
              </span>
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono bg-orange-500/10 text-orange-400 border border-orange-500/20">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute h-full w-full rounded-full bg-orange-400 opacity-75" />
                  <span className="relative h-1.5 w-1.5 rounded-full bg-orange-500" />
                </span>
                In Progress
              </span>
            </div>
            <h3 className="font-space text-2xl md:text-3xl font-bold text-white">
              {project.name}
            </h3>
            <p className="text-slate-500 text-sm mt-1 font-mono">
              AML Detection · Financial Crime Investigation · LangGraph Multi-Agent
            </p>
          </div>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl border border-white/10 bg-white/[0.04] text-slate-300 hover:text-white hover:border-white/20 hover:bg-white/[0.08] transition-all text-sm font-medium"
          >
            <FiGithub size={15} /> GitHub <FiArrowUpRight size={13} />
          </a>
        </div>

        <p className="text-slate-400 leading-relaxed mb-8 max-w-3xl">
          {project.description}
        </p>

        {/* Sub-systems */}
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {project.subsystems.map((sub) => (
            <div
              key={sub.name}
              className={`p-5 rounded-xl border ${sub.borderColor} bg-white/[0.02]`}
            >
              <div className={`font-mono text-sm font-semibold ${sub.color} mb-2.5`}>
                {sub.emoji} {sub.name}
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">{sub.description}</p>
            </div>
          ))}
        </div>

        {/* Pipeline flow */}
        <div className="mb-8">
          <p className="font-mono text-xs uppercase tracking-widest text-slate-500 mb-3">
            Pipeline Flow
          </p>
          <div className="flex flex-wrap items-center gap-1.5">
            {project.pipeline.map((step, i) => (
              <React.Fragment key={step}>
                <span className="px-3 py-1.5 rounded-lg text-xs font-mono bg-[#0b1428] border border-[#38bdf8]/25 text-[#38bdf8]">
                  {step}
                </span>
                {i < project.pipeline.length - 1 && (
                  <span className="text-slate-600 text-xs font-mono">→</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 rounded-md text-xs font-mono bg-[#6c63ff]/10 text-[#a78bfa] border border-[#6c63ff]/20"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
