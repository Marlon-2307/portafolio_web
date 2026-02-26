import React from "react";
import { FaEnvelope, FaLinkedin, FaTwitter, FaGithub, FaWhatsapp } from "react-icons/fa";

const Iconos: React.FC = () => {
  const icons = [
    { icon: <FaEnvelope className="w-8 h-8" />, href: "mailto:marloncolon23@gmail.com", label: "Email" },
    { icon: <FaWhatsapp className="w-8 h-8" />, href: "https://wa.me/+573006052169", label: "WhatsApp" },
    { icon: <FaLinkedin className="w-8 h-8" />, href: "https://www.linkedin.com/in/marlon-colon-504aa0271/", label: "LinkedIn" },
    { icon: <FaGithub className="w-8 h-8" />, href: "https://github.com/Marlon-2307", label: "GitHub" },
  ];

  return (
    <div className="fixed top-3/4 left-4 transform -translate-y-1/2 flex flex-col items-center p-2 bg-transparent z-10 shadow-md rounded-xl">
      {icons.map(({ icon, href, label }, index) => (
        <a
          key={index}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group text-white hover:text-gray-200 mb-2 border border-gray-700 p-2 rounded-xl"
        >
          {icon}
          {/* Tooltip */}
          <span className="absolute left-14 top-1/2 -translate-y-1/2
                           opacity-0 group-hover:opacity-100
                           transform -translate-x-2 group-hover:translate-x-0
                           bg-white/80 backdrop-blur-sm text-gray-900 font-semibold text-sm
                           px-3 py-1 rounded-md shadow-lg
                           whitespace-nowrap
                           transition-all duration-300
                           pointer-events-none
                           z-50
                           before:content-[''] before:absolute before:left-[-6px] before:top-1/2 before:-translate-y-1/2 before:border-6 before:border-t-transparent before:border-b-transparent before:border-r-white"
          >
            {label}
          </span>
        </a>
      ))}
    </div>
  );
};

export default Iconos;