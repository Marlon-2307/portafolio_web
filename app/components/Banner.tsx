import React from "react";
import Link from "next/link";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Banner: React.FC = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 bg-parallax bg-fixed bg-cover bg-center opacity-100"></div>
      <div className="relative flex flex-col justify-center items-center h-full text-white px-4 md:px-8 lg:px-16">
        <div className="text-center w-full max-w-4xl mt-24 max-lg:mt-10">
          <h2 className="text-gray-700 text-6xl font-bold">
            Hola, <span>Soy Marlon Colon.</span>
          </h2>
          <p className="text-lg md:text-md mt-6 mb-12 text-gray-600">
          Desarrollador Frontend Jr. con un enfoque a resultados, dedicado a construir sitios y aplicaciones web que no solo cumplen, sino que superan las expectativas. Me apasiona transformar ideas innovadoras en experiencias digitales.
          </p>
          <div className="mt-10 flex flex-col items-center">
            <Link href="#portafolio">
              <div className="border border-gray-600 text-gray-800 hover:bg-gray-700 hover:text-white shadow-lg py-3 px-16 rounded-sm    transition-transform duration-300 transform hover:translate-y-2 hover:scale-105">
                Proyectos
              </div>
            </Link>
            <div className="mt-8">
              <KeyboardArrowDownIcon className="text-gray-800 text-3xl animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;