import React, { useEffect } from "react";
import Link from "next/link";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import 'aos/dist/aos.css';  // Importa los estilos de AOS
import AOS from 'aos';      // Importa la librería de animaciones

const Banner: React.FC = () => {

  // Inicializa AOS en el hook useEffect
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: false,   
    });
  }, []);

  return (
    <div className="relative h-screen">
      {/* Fondo de parallax */}
      <div className="absolute inset-0 bg-parallax bg-fixed bg-cover bg-center opacity-100"></div>

      {/* Contenido */}
      <div className="relative flex flex-col justify-center items-center h-full text-white px-4 md:px-8 lg:px-16">
        <div className="text-center w-full max-w-4xl mt-24 max-lg:mt-10" data-aos="fade-up">
          <h2 className="text-gray-700 text-6xl max-md:text-4xl font-extrabold">
            Hola, <span>Soy Marlon Colon.</span>
          </h2>
          <p className="text-2xl max-md:text-lg md:text-md mt-6 mb-12 text-gray-600">
            Desarrollador Web | Frontend Developer
          </p>

          {/* Botones de navegación */}
          <div className="mt-10 flex items-center justify-center space-x-4 max-md:block max-md:w-[50%] max-md:mx-auto">
            <Link data-aos="fade-right" href="#portafolio">
              <div className="border border-gray-500 text-gray-800 hover:bg-gray-700 hover:text-white shadow-md py-3 px-16 rounded-md transition-transform duration-300 transform hover:translate-y-2 hover:scale-105">
                Proyectos
              </div>
            </Link>
          </div>

          <div className="mt-12">
            <KeyboardArrowDownIcon className="text-gray-800 text-3xl animate-bounce" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
