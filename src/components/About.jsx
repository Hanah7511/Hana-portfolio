import React from "react";
import { motion } from "framer-motion";
import { FiMapPin, FiAward } from "react-icons/fi";

const highlights = [
  {
    title: "AI & Machine Learning",
    description: "End-to-end ML pipelines, deep learning, GNNs, ensemble models.",
    accent: "#4f7cff",
  },
  {
    title: "Agentic AI & GenAI",
    description: "LangGraph multi-agent systems, RAG pipelines, LLM applications.",
    accent: "#a855f7",
  },
  {
    title: "Causal ML",
    description: "DoWhy DAGs, EconML meta-learners, uplift modelling, CATE estimation.",
    accent: "#06b6d4",
  },
  {
    title: "MLOps & Production",
    description: "FastAPI, MLflow, Docker, GitHub Actions, drift detection, real-time APIs.",
    accent: "#10b981",
  },
];

export default function About() {
  return (
    <section id="about" className="py-40 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">

        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#5B7CFF]/20 bg-[#5B7CFF]/10 text-[#5B7CFF] text-xs font-medium uppercase tracking-wider">
            <div className="w-2 h-2 rounded-full bg-[#5B7CFF]" />
            About Me
          </div>
        </motion.div>

        {/* Two-Column Layout */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-white text-4xl md:text-5xl font-bold leading-tight mb-8">
              Building AI that ships,{" "}
              <span className="text-[#4f7cff]">not just experiments.</span>
            </h2>

            <p className="text-slate-400 text-lg leading-relaxed mb-10">
              I'm <span className="text-white font-semibold">Hana Al Haris</span> — an
              AI/ML Engineer from Bangalore · Abu Dhabi. I specialise in multi-agent
              systems, causal ML, and production-grade MLOps. I hold a B.Tech in CS
              (AI & ML) from JAIN University and build enterprise AI from the ground up.
            </p>

            {/* Quick Facts */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 text-slate-400 text-sm">
                <div className="w-8 h-8 rounded-lg bg-[#4f7cff]/10 border border-[#4f7cff]/20 flex items-center justify-center shrink-0">
                  <FiMapPin size={14} className="text-[#4f7cff]" />
                </div>
                Bangalore, India · Abu Dhabi, UAE
              </div>
              <div className="flex items-center gap-3 text-slate-400 text-sm">
                <div className="w-8 h-8 rounded-lg bg-[#4f7cff]/10 border border-[#4f7cff]/20 flex items-center justify-center shrink-0">
                  <FiAward size={14} className="text-[#4f7cff]" />
                </div>
                B.Tech CS (AI &amp; ML) — JAIN University
              </div>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Specialty Cards 2x2 */}
            <div className="grid grid-cols-2 gap-3">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="p-5 rounded-2xl border bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300"
                  style={{ borderColor: `${h.accent}30` }}
                >
                  <div
                    className="w-2 h-2 rounded-full mb-3"
                    style={{ backgroundColor: h.accent }}
                  />
                  <h3 className="text-white font-semibold text-sm mb-2">{h.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{h.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
