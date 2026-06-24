import React from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const links = [
  { icon: <FiGithub size={18} />, href: "https://github.com/Hanah7511", label: "GitHub" },
  { icon: <FiLinkedin size={18} />, href: "https://linkedin.com/in/hana-al-haris-3b7528255", label: "LinkedIn" },
  { icon: <FiMail size={18} />, href: "mailto:hanaharis95@gmail.com", label: "Email" },
];

export default function SidebarIcons() {
  return (
    <div className="fixed left-6 bottom-0 z-50 hidden lg:flex flex-col items-center gap-5">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target={link.href.startsWith("http") ? "_blank" : undefined}
          rel="noopener noreferrer"
          aria-label={link.label}
          className="text-slate-500 hover:text-[#4f7cff] hover:-translate-y-1 transition-all duration-200"
        >
          {link.icon}
        </a>
      ))}
      <div className="w-px h-20 bg-slate-700 mt-2" />
    </div>
  );
}
