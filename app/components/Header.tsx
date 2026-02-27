import React, { useState } from "react";
import Link from "next/link";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop Menu */}
      <div className="fixed top-2 left-4 right-4 z-50 flex justify-between items-center py-2 px-16 max-sm:px-6 backdrop-blur-md shadow-md rounded-xl border border-gray-700">
        <a className="text-white text-4xl hover:text-gray-300" href="#">
          <h3>
            M<span className="text-gray-300 text-xl">C.</span>
          </h3>
        </a>

        <nav className="hidden md:flex items-center gap-4">
          <Link
            href="/"
            className="text-white py-2 px-4 rounded-lg transition-all duration-300 hover:bg-gray-800"
          >
            Inicio
          </Link>

          <Link
            href="#about"
            className="text-white py-2 px-4 rounded-lg transition-all duration-300 hover:bg-gray-800"
          >
            Información
          </Link>

          <Link
            href="#portafolio"
            className="text-white py-2 px-4 rounded-lg transition-all duration-300 hover:bg-gray-800"
          >
            Proyectos
          </Link>

          <Link
            href="#contact"
            className="text-white py-2 px-4 rounded-lg transition-all duration-300 hover:bg-gray-800"
          >
            Contacto
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <div
          className="md:hidden text-3xl cursor-pointer z-50"
          onClick={toggleMenu}
        >
          <div className={`space-y-2 ${isOpen ? "open" : ""}`}>
            <div className="w-8 h-0.5 bg-white transition-transform duration-500 linea-1"></div>
            <div className="w-8 h-0.5 bg-white transition-opacity duration-500 linea-2"></div>
            <div className="w-8 h-0.5 bg-white transition-transform duration-500 linea-3"></div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-20 left-0 w-full h-64 bg-white z-40 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-500 ease-in-out`}
      >
        <div className="flex flex-col pl-12 pt-14 h-full">
          <Link
            href="/"
            onClick={closeMenu}
            className="text-gray-600 hover:text-gray-800 mb-4 text-xl transition-transform duration-300 hover:translate-x-2 hover:scale-105"
          >
            Inicio
          </Link>

          <Link
            href="#about"
            onClick={closeMenu}
            className="text-gray-600 hover:text-gray-800 mb-4 text-xl transition-transform duration-300 hover:translate-x-2 hover:scale-105"
          >
            Información
          </Link>

          <Link
            href="#portafolio"
            onClick={closeMenu}
            className="text-gray-600 hover:text-gray-800 mb-4 text-xl transition-transform duration-300 hover:translate-x-2 hover:scale-105"
          >
            Portafolio
          </Link>

          <Link
            href="#contact"
            onClick={closeMenu}
            className="text-gray-600 hover:text-gray-800 mb-4 text-xl transition-transform duration-300 hover:translate-x-2 hover:scale-105"
          >
            Contacto
          </Link>
        </div>
      </div>

      <style jsx>{`
        .open .linea-1 {
          transform: rotate(45deg) translateY(10px);
        }

        .open .linea-2 {
          opacity: 0;
        }

        .open .linea-3 {
          transform: rotate(-45deg) translateY(-10px);
        }
      `}</style>
    </>
  );
};

export default Header;