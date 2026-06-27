import React from "react";
import { motion } from "framer-motion";
import { HiAcademicCap } from "react-icons/hi";
import { education } from "../data/portfolioData";

export default function Education() {
  const edu = education[0];

  return (
    <section
      id="education"
      className="py-32 px-6 bg-[#080810]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="font-mono text-[#4f7cff] tracking-[0.3em] uppercase text-sm">
            Education
          </span>

          <h2 className="text-5xl md:text-6xl font-bold text-white mt-5">
            Academic Background
          </h2>

          <p className="text-slate-500 mt-4 text-lg">
            Building a strong foundation in AI, Machine Learning and Systems.
          </p>
        </motion.div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[36px]
          border border-white/10 bg-[#0b0b12]"
        >
          {/* Glow */}
          <div className="absolute -top-32 right-0 w-96 h-96 bg-[#4f7cff]/10 blur-[120px]" />

          <div className="relative p-10 md:p-14">
            <div className="grid lg:grid-cols-[100px_1fr_auto] gap-8 items-start">
              
              {/* Icon */}
              <div className="w-20 h-20 rounded-3xl bg-[#4f7cff]/10 border border-[#4f7cff]/20 flex items-center justify-center">
                <HiAcademicCap
                  size={40}
                  className="text-[#4f7cff]"
                />
              </div>

              {/* Content */}
              <div>
                <h3 className="text-3xl font-bold text-white">
                  {edu.degree}
                </h3>

                <p className="text-[#4f7cff] text-lg mt-3">
                  {edu.institution}
                </p>

                <p className="text-slate-500 mt-2">
                  {edu.period}
                </p>
              </div>

            </div>

            {/* Courses */}
            <div className="mt-14">
              <h4 className="text-white text-lg font-semibold mb-6">
                Relevant Coursework
              </h4>

              <div className="flex flex-wrap gap-3">
                {edu.courses.map((course) => (
                  <span
                    key={course}
                    className="px-5 py-3 rounded-2xl
                    border border-white/10
                    bg-white/[0.03]
                    text-slate-300
                    hover:border-[#4f7cff]/30
                    hover:text-white
                    transition-all"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}