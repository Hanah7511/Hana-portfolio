import React from "react";
import { motion } from "framer-motion";
import { FiMail } from "react-icons/fi";

import profileImg from "../assets/hana.jpg";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
    },
  },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#050505]"
    >
      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(rgba(108,99,255,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(108,99,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "75px 75px",
        }}
      />

      {/* Glow Effects */}
      <div className="absolute top-40 right-40 w-[600px] h-[600px] bg-[#4f7cff]/10 blur-[150px] rounded-full" />
      <div className="absolute left-20 bottom-20 w-[300px] h-[300px] bg-purple-500/10 blur-[120px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6 pt-32 w-full">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* LEFT SIDE */}
          <div>
            {/* NAME */}
            <motion.h1
              variants={item}
              className="font-bold mt-8 leading-[0.95]"
            >
              <span
                className="block text-white"
                style={{
                  fontSize: "clamp(3.2rem,6vw,5rem)",
                }}
              >
                Hi,
              </span>

              <span
                className="block mt-3 bg-gradient-to-r from-[#4f7cff] to-[#7c6cff] bg-clip-text text-transparent whitespace-nowrap"
                style={{
                  fontSize: "clamp(3.2rem,6vw,5rem)",
                }}
              >
                Hana Al Haris
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse", ease: "steps(1)" }}
                  className="text-[#4f7cff] ml-1"
                  style={{ WebkitTextFillColor: "#4f7cff" }}
                >
                  |
                </motion.span>
              </span>
            </motion.h1>

            {/* ROLE */}
            <motion.p
              variants={item}
              className="mt-8 text-[#4f7cff] text-3xl font-medium"
            >
              AI/ML Engineer | GenAI & Agentic Systems | MLOps
            </motion.p>

            {/* DESCRIPTION */}
            <motion.p
              variants={item}
              className="mt-10 text-slate-400 text-xl leading-relaxed max-w-2xl"
            >
              I design and build production-grade AI systems — multi-agent
              LangGraph workflows, causal ML pipelines, RAG systems, and
              MLOps infrastructure. I care about AI that doesn't just work
              in notebooks but reasons, adapts, and ships to production.
            </motion.p>

            {/* BUTTONS */}
            <motion.div
              variants={item}
              className="flex flex-wrap gap-4 mt-12"
            >
              <a href="mailto:hanaharis95@gmail.com">
                <button className="px-8 py-4 rounded-xl border border-white/10 text-white flex items-center gap-2 hover:bg-white/5 transition">
                  <FiMail size={18} />
                  Hi!
                </button>
              </a>
            </motion.div>
          </div>

          {/* RIGHT SIDE */}
          <motion.div
            variants={item}
            className="hidden lg:flex justify-center"
          >
            <div className="relative">
              {/* OUTER GLOW */}
              <div className="absolute inset-0 scale-125 rounded-full bg-[#4f7cff]/20 blur-[100px]" />

              {/* RING 1 */}
              <div className="absolute inset-[-25px] rounded-full border border-[#4f7cff]/20" />

              {/* RING 2 */}
              <div className="absolute inset-[-45px] rounded-full border border-[#4f7cff]/15" />

              {/* IMAGE */}
              <div className="relative w-[520px] h-[520px] rounded-full border-[6px] border-[#4f7cff]/60 overflow-hidden">
                <img
                  src={profileImg}
                  alt="Hana Al Haris"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}