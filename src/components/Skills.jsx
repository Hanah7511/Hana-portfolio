import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { skills } from '../data/portfolioData';

function SkillBar({ name, level, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="mb-4 last:mb-0">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-slate-300 text-sm">{name}</span>
        <span className="font-mono text-[#6c63ff] text-xs">{level}%</span>
      </div>
      <div className="h-1 bg-white/[0.06] rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ duration: 1.3, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full bg-gradient-to-r from-[#6c63ff] to-[#38bdf8]"
        />
      </div>
    </div>
  );
}

function SkillCard({ category, items, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="p-6 rounded-2xl border border-white/[0.06] bg-gradient-to-br from-[#0f0f1a] to-[#0a0a10] hover:border-[#6c63ff]/20 transition-all duration-300"
    >
      <div className="flex items-center gap-2.5 mb-5">
        <span className="w-1.5 h-5 rounded-full bg-gradient-to-b from-[#6c63ff] to-[#38bdf8]" />
        <h3 className="font-space font-semibold text-white text-sm">{category}</h3>
      </div>
      {items.map((skill, i) => (
        <SkillBar key={skill.name} name={skill.name} level={skill.level} index={i} />
      ))}
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-28 px-6 bg-[#080810]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-[#6c63ff] text-sm tracking-widest uppercase">{'// stack'}</span>
          <h2 className="font-space text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            Technical Skills
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            From raw data to production-deployed agents — covering the full AI/ML engineering stack.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((group, i) => (
            <SkillCard key={group.category} {...group} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
