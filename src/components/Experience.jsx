import React from "react";
import { motion } from "framer-motion";
import { experience } from "../data/portfolioData";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-32 px-6 bg-[#050505]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="font-mono text-[#4f7cff] tracking-[0.3em] uppercase text-sm">
            Experience
          </span>

          <h2 className="text-5xl md:text-6xl font-bold text-white mt-5">
            Professional Journey
          </h2>

          <p className="text-slate-500 mt-4 text-lg">
            Building intelligent systems through AI, ML and analytics.
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {experience.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              className="group relative overflow-hidden rounded-[32px]
              border border-white/10 bg-[#0b0b12]
              hover:border-[#4f7cff]/30 transition-all duration-300"
            >
              {/* Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute -top-32 right-0 w-80 h-80 bg-[#4f7cff]/10 blur-[120px]" />
              </div>

              <div className="relative p-10 md:p-12">
                <div className="grid md:grid-cols-[180px_1fr] gap-10">
                  {/* Year */}
                  <div>
                    <div className="text-5xl md:text-6xl font-bold text-[#4f7cff]">
                      {job.period.slice(-4)}
                    </div>

                    <div className="mt-3 text-slate-500 text-sm">
                      {job.period}
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-3xl font-bold text-white">
                      {job.title}
                    </h3>

                    <div className="mt-3 flex flex-wrap gap-3">
                      <span className="text-[#4f7cff] font-medium">
                        {job.company}
                      </span>

                      <span className="text-slate-500">
                        •
                      </span>

                      <span className="text-slate-400">
                        {job.location}
                      </span>
                    </div>

                    <p className="mt-8 text-slate-400 text-lg leading-relaxed max-w-3xl">
                      {job.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}