"use client";

import React from "react";
import {
  FaEnvelope,
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaWhatsapp,
  FaFileAlt,
} from "react-icons/fa";

const Iconos: React.FC = () => {
  const icons = [
    { icon: <FaEnvelope className="w-5 h-5 md:w-6 md:h-6" />, href: "mailto:marloncolon23@gmail.com", label: "Email" },
    { icon: <FaWhatsapp className="w-5 h-5 md:w-6 md:h-6" />, href: "https://wa.me/+573006052169", label: "WhatsApp" },
    { icon: <FaLinkedin className="w-5 h-5 md:w-6 md:h-6" />, href: "https://www.linkedin.com/in/marlon-colon-504aa0271/", label: "LinkedIn" },
    { icon: <FaGithub className="w-5 h-5 md:w-6 md:h-6" />, href: "https://github.com/Marlon-2307", label: "GitHub" },
    { icon: <FaFileAlt className="w-5 h-5 md:w-6 md:h-6" />, href: "https://drive.google.com/file/d/1MzTZeFdWdcvr_fqYfkd-BLpeQ_JsLnck/view?usp=drive_link", label: "Curriculum Vitae" },
  ];

  return (
    <div
      className="
        fixed top-[80%] left-4 -translate-y-1/2
        flex flex-col items-center gap-2
        z-10
      "
    >
      {icons.map(({ icon, href, label }, index) => (
        <a
          key={index}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="
            relative group
            text-white hover:text-gray-200
            border border-gray-700
            p-2 rounded-xl
          "
        >
          {icon}

          {/* Tooltip SOLO en desktop */}
          <span
            className="
              hidden md:block
              absolute left-14 top-1/2 -translate-y-1/2
              opacity-0 group-hover:opacity-100
              transform -translate-x-2 group-hover:translate-x-0
              bg-white/80 backdrop-blur-sm text-gray-800 text-sm
              px-3 py-1 rounded-md shadow-lg
              whitespace-nowrap
              transition-all duration-300
              pointer-events-none
              z-50
            "
          >
            {label}
          </span>
        </a>
      ))}
    </div>
  );
};

export default Iconos;