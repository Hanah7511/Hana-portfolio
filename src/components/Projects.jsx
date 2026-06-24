import React from "react";
import { motion } from "framer-motion";
import { projects } from "../data/portfolioData";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-40 px-6 bg-[#050505]"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-28">
          <span className="text-[#4f7cff] uppercase tracking-[0.3em] text-sm">
            Portfolio
          </span>

          <h2 className="text-white text-5xl md:text-7xl font-bold mt-5">
            Featured Projects
          </h2>

          <p className="text-slate-500 max-w-2xl mx-auto mt-6 text-lg">
            Production-grade AI systems, financial intelligence platforms,
            and agentic applications built for real-world deployment.
          </p>
        </div>

        <div className="space-y-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="group relative overflow-hidden rounded-[36px]
              border border-white/10 bg-[#0b0b12]
              hover:border-[#4f7cff]/30 transition-all duration-300"
            >
              {/* Glow */}
              <div className="absolute -top-32 right-0 w-96 h-96 bg-[#4f7cff]/10 blur-[140px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative p-10 md:p-14">

                {/* Project Number */}
                <div className="text-[#4f7cff] text-sm font-mono mb-6">
                  0{index + 1}
                </div>

                {/* Title */}
                <h3 className="text-white text-3xl md:text-5xl font-bold mb-6">
                  {project.name}
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-lg leading-relaxed max-w-4xl">
                  {project.description}
                </p>
                
                {/* Sub-systems */}
                {project.subsystems && (
                  <div className="grid md:grid-cols-2 gap-4 mt-8">
                    {project.subsystems.map((sub) => (
                      <div key={sub.name} className={`p-5 rounded-xl border ${sub.borderColor} bg-white/[0.02]`}>
                        <div className={`font-mono text-sm font-semibold ${sub.color} mb-2`}>
                          {sub.emoji} {sub.name}
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed mb-4">{sub.description}</p>
                        <a
                          href={sub.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center gap-1.5 text-xs font-mono ${sub.color} hover:opacity-80 transition`}
                        >
                          View on GitHub →
                        </a>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tech */}
                <div className="flex flex-wrap gap-3 mt-10">
                  {project.tech?.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 rounded-full
                      border border-white/10
                      bg-white/[0.03]
                      text-slate-300 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* GitHub */}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex mt-10 text-[#4f7cff] font-medium hover:text-white transition"
                  >
                    View Project →
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}