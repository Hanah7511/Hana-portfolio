import React from "react";
import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiPhone,
  FiArrowUpRight,
} from "react-icons/fi";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-40 px-6 bg-[#050505]"
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#5B7CFF]/20 bg-[#5B7CFF]/10 text-[#5B7CFF] text-xs font-medium uppercase tracking-wider">
            <div className="w-2 h-2 rounded-full bg-[#5B7CFF]" />
            Contact
          </div>

          <h2 className="text-white text-5xl md:text-7xl font-bold mt-6">
            Let's Work Together
          </h2>

          <p className="text-slate-500 text-lg mt-6 max-w-2xl mx-auto">
            Open to AI/ML Engineering, GenAI, and Intelligent Systems roles.
            Feel free to reach out for opportunities, collaborations,
            or technical discussions.
          </p>
        </motion.div>

        {/* Main Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[36px] border border-white/10 bg-[#0b0b12] overflow-hidden"
        >
          <div className="grid lg:grid-cols-2">

            {/* Left Side */}
            <div className="p-10 md:p-14 border-b lg:border-b-0 lg:border-r border-white/10">
              <h3 className="text-white text-3xl font-bold mb-10">
                Get in Touch
              </h3>

              <div className="space-y-8">

                <a
                  href="mailto:hanaharis95@gmail.com"
                  className="flex items-center justify-between group"
                >
                  <div>
                    <p className="text-slate-500 text-sm mb-1">
                      Email
                    </p>
                    <p className="text-white text-lg">
                      hanaharis95@gmail.com
                    </p>
                  </div>
                  <FiArrowUpRight
                    size={22}
                    className="text-slate-500 group-hover:text-[#5B7CFF] transition"
                  />
                </a>

                <a
                  href="tel:+918590442650"
                  className="flex items-center justify-between group"
                >
                  <div>
                    <p className="text-slate-500 text-sm mb-1">
                      Phone (India)
                    </p>
                    <p className="text-white text-lg">
                      +91 85904 42650
                    </p>
                  </div>
                  <FiArrowUpRight
                    size={22}
                    className="text-slate-500 group-hover:text-[#5B7CFF] transition"
                  />
                </a>

                <a
                  href="tel:+97156665831"
                  className="flex items-center justify-between group"
                >
                  <div>
                    <p className="text-slate-500 text-sm mb-1">
                      Phone (UAE)
                    </p>
                    <p className="text-white text-lg">
                      +971 56 665 831
                    </p>
                  </div>
                  <FiArrowUpRight
                    size={22}
                    className="text-slate-500 group-hover:text-[#5B7CFF] transition"
                  />
                </a>

                <div>
                  <p className="text-slate-500 text-sm mb-1">
                    Location
                  </p>
                  <p className="text-white text-lg">
                    Bangalore, India · Abu Dhabi, UAE
                  </p>
                </div>

              </div>
            </div>

            {/* Right Side */}
            <div className="p-10 md:p-14">
              <h3 className="text-white text-3xl font-bold mb-10">
                Connect
              </h3>

              <div className="space-y-5">

                <a
                  href="https://github.com/Hanah7511"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-5 rounded-2xl border border-white/10 hover:border-[#5B7CFF]/30 transition"
                >
                  <div className="flex items-center gap-4">
                    <FiGithub size={22} />
                    <span className="text-white">GitHub</span>
                  </div>
                  <FiArrowUpRight />
                </a>

                <a
                  href="https://linkedin.com/in/hana-al-haris-3b7528255"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-5 rounded-2xl border border-white/10 hover:border-[#5B7CFF]/30 transition"
                >
                  <div className="flex items-center gap-4">
                    <FiLinkedin size={22} />
                    <span className="text-white">LinkedIn</span>
                  </div>
                  <FiArrowUpRight />
                </a>

                <a
                  href="mailto:hanaharis95@gmail.com"
                  className="flex items-center justify-between p-5 rounded-2xl border border-white/10 hover:border-[#5B7CFF]/30 transition"
                >
                  <div className="flex items-center gap-4">
                    <FiMail size={22} />
                    <span className="text-white">Email</span>
                  </div>
                  <FiArrowUpRight />
                </a>

                <a
                  href="tel:+918590442650"
                  className="flex items-center justify-between p-5 rounded-2xl border border-white/10 hover:border-[#5B7CFF]/30 transition"
                >
                  <div className="flex items-center gap-4">
                    <FiPhone size={22} />
                    <span className="text-white">Phone</span>
                  </div>
                  <FiArrowUpRight />
                </a>

              </div>
            </div>

          </div>
        </motion.div>

        {/* Footer */}
        <div className="text-center mt-16">
          <p className="text-slate-600">
            © 2026 Hana Al Haris · AI/ML Engineer
          </p>
        </div>

      </div>
    </section>
  );
}
