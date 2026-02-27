"use client";

import React from "react";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-800 py-12">
      <div className="w-[85%] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        
        {/* Copyright */}
        <p className="text-gray-300 text-md">
          © {year} Marlon Colón. Todos los derechos reservados.
        </p>

        {/* Link */}
        <a
          href="https://marloncolon.site"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-indigo-500 transition duration-300 text-md"
        >
          www.marloncolon.site
        </a>

      </div>
    </footer>
  );
};

export default Footer;