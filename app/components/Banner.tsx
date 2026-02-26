"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AOS from "aos";
import "aos/dist/aos.css";

const Banner: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="relative h-screen bg-[#0F172A] overflow-hidden">

      {/* Olas de energía sobrias */}
      <div className="absolute inset-0">
        <div className="absolute w-[200%] h-[150%] bg-gradient-to-r from-black via-gray-800 to-black opacity-20 rounded-full animate-wave-slow -top-1/4 -left-1/4"></div>
        <div className="absolute w-[180%] h-[140%] bg-gradient-to-r from-gray-700 via-gray-900 to-black opacity-15 rounded-full animate-wave-slow2 -top-1/3 -left-1/3"></div>
        <div className="absolute w-[220%] h-[160%] bg-gradient-to-r from-gray-600 via-gray-800 to-transparent opacity-10 rounded-full animate-wave-slow3 -top-1/5 -left-1/5"></div>
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6 lg:px-16">
        <h1 data-aos="fade-up" className="text-6xl max-md:text-4xl font-extrabold text-gray-100 drop-shadow-lg">
          Hola, soy Marlon Colon
        </h1>
        <p data-aos="fade-up" data-aos-delay="200" className="text-gray-400 mt-6 text-2xl max-md:text-lg drop-shadow-md">
          Desarrollador Frontend | React | Next.js | MUI
        </p>
        <p data-aos="fade-up" data-aos-delay="400" className="text-gray-500 mt-4 text-lg max-w-2xl">
          Me enfoco en crear experiencias web modernas, responsivas y accesibles, combinando diseño limpio con funcionalidades eficientes.
        </p>

        {/* Botones */}
        <div data-aos="fade-up" data-aos-delay="600" className="mt-10 flex flex-wrap gap-6 justify-center">
          <Link href="#portafolio">
            <div className="px-8 py-3 rounded-xl bg-gray-800 text-gray-100 font-medium shadow-lg hover:scale-105 hover:shadow-gray-700/40 transition-all duration-300 cursor-pointer">
              Ver Proyectos
            </div>
          </Link>
          <Link href="/cv.pdf">
            <div className="px-8 py-3 rounded-xl border border-gray-700 text-gray-300 hover:bg-gray-900 hover:scale-105 transition-all duration-300 cursor-pointer">
              Descargar CV
            </div>
          </Link>
        </div>
      </div>

      {/* Flecha hacia abajo */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
        <KeyboardArrowDownIcon className="text-gray-400 text-4xl animate-bounce" />
      </div>

      {/* Animaciones CSS */}
      <style jsx>{`
        @keyframes waveSlow {
          0% { transform: translateX(-25%) translateY(0) rotate(0deg); }
          50% { transform: translateX(25%) translateY(10px) rotate(5deg); }
          100% { transform: translateX(-25%) translateY(0) rotate(0deg); }
        }
        .animate-wave-slow {
          animation: waveSlow 30s ease-in-out infinite;
        }

        @keyframes waveSlow2 {
          0% { transform: translateX(-20%) translateY(5px) rotate(0deg); }
          50% { transform: translateX(20%) translateY(-10px) rotate(-5deg); }
          100% { transform: translateX(-20%) translateY(5px) rotate(0deg); }
        }
        .animate-wave-slow2 {
          animation: waveSlow2 35s ease-in-out infinite;
        }

        @keyframes waveSlow3 {
          0% { transform: translateX(-30%) translateY(-5px) rotate(0deg); }
          50% { transform: translateX(30%) translateY(10px) rotate(3deg); }
          100% { transform: translateX(-30%) translateY(-5px) rotate(0deg); }
        }
        .animate-wave-slow3 {
          animation: waveSlow3 40s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Banner;