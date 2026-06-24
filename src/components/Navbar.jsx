import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const links = [
  { name: "Home", to: "hero" },
  { name: "About", to: "about" },
  { name: "Projects", to: "projects" },
  { name: "Skills", to: "skills" },
  { name: "Experience", to: "experience" },
  { name: "Education", to: "education" },
  { name: "Contact", to: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050505]/80 backdrop-blur-2xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="hero"
          smooth
          duration={500}
          className="cursor-pointer"
        >
          <h1 className="text-3xl font-bold tracking-tight">
            <span className="text-white">H</span>
            <span className="text-[#5B7CFF]">A</span>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth
              duration={500}
              offset={-80}
              className="group relative cursor-pointer text-slate-400 hover:text-white transition-all duration-300 text-sm font-medium"
            >
              {link.name}

              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-[#5B7CFF] to-[#7C6BFF] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Social Icons + Hire Me */}
        <div className="hidden md:flex items-center gap-4">
          <a href="mailto:hanaharis95@gmail.com" aria-label="Email"
            className="text-slate-400 hover:text-white transition-colors duration-200">
            <FiMail size={18} />
          </a>
          <a href="https://github.com/Hanah7511" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
            className="text-slate-400 hover:text-white transition-colors duration-200">
            <FiGithub size={18} />
          </a>
          <a href="https://linkedin.com/in/hana-al-haris-3b7528255" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
            className="text-slate-400 hover:text-white transition-colors duration-200">
            <FiLinkedin size={18} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#050505]/95 backdrop-blur-2xl border-t border-white/5 overflow-hidden"
          >
            <div className="flex flex-col py-4">
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  smooth
                  duration={500}
                  offset={-80}
                  onClick={() => setOpen(false)}
                  className="px-8 py-3 text-slate-300 hover:text-white transition cursor-pointer"
                >
                  {link.name}
                </Link>
              ))}

              <div className="px-8 pt-4">
                <a
                  href="mailto:hanaharis95@gmail.com"
                  className="block text-center py-3 rounded-xl
                             bg-gradient-to-r from-[#5B7CFF] to-[#7C6BFF]
                             text-white font-semibold"
                >
                  Hire Me
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}