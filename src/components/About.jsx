import React from "react";
import { motion } from "framer-motion";

const highlights = [
  {
    emoji: "⚡",
    title: "AI & Machine Learning",
    description: "End-to-end ML pipelines, deep learning, GNNs, ensemble models.",
  },
  {
    emoji: "🤖",
    title: "Agentic AI & GenAI",
    description: "LangGraph multi-agent systems, RAG pipelines, LLM applications.",
  },
  {
    emoji: "🔬",
    title: "Causal ML",
    description: "DoWhy DAGs, EconML meta-learners, uplift modelling, CATE estimation.",
  },
  {
    emoji: "🚀",
    title: "MLOps & Production",
    description: "FastAPI, MLflow, Docker, GitHub Actions, drift detection, real-time APIs.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-40 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <span className="text-[#4f7cff] text-sm uppercase tracking-[0.3em]">
            About Me
          </span>
        </motion.div>

        {/* Short Para */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-12"
        >
          <h2 className="text-white text-4xl md:text-5xl font-bold leading-tight mb-8">
            Building AI that ships,{" "}
            <span className="text-[#4f7cff]">not just experiments.</span>
          </h2>

          <p className="text-slate-400 text-lg leading-relaxed">
            I'm <span className="text-white font-semibold">Hana Al Haris</span> — an AI/ML Engineer
            from Bangalore · Abu Dhabi. I specialise in multi-agent systems, causal ML,
            and production-grade MLOps. Currently finishing my B.Tech in CS (AI & ML)
            at JAIN University while building enterprise AI from the ground up.
          </p>
        </motion.div>

        {/* 4 Highlight Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-5 rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:border-[#4f7cff]/30 hover:bg-white/[0.04] transition-all duration-300"
            >
              <h3 className="text-white font-semibold text-sm mb-2">{h.title}</h3>
              <p className="text-slate-500 text-xs leading-relaxed">{h.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { value: "4+", label: "AI Projects" },
            { value: "15+", label: "Technologies" },
            { value: "2", label: "Internships" },
            { value: "7.8", label: "CGPA" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="border border-white/10 rounded-3xl p-6 bg-white/[0.02] text-center"
            >
              <h3 className="text-4xl font-bold text-[#4f7cff]">{stat.value}</h3>
              <p className="text-slate-500 mt-2 text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
