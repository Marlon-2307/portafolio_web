"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { Github, ExternalLink } from "lucide-react";

interface Project {
  nombre: string;
  description: string;
  technologies: string[];
  images: string[];
  liveUrl?: string;
  githubUrl?: string
}

const Portfolio: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);


  const projects: Project[] = [
    {
      nombre: "CM Electronics",
      description:
        "E-commerce desarrollado con SSR para mejorar rendimiento, SEO y escalabilidad",
      technologies: ["Next.js", "React", "Tailwind", "TypeScript"],
      images: ["/proyecto1.png"],
      liveUrl: "https://tuproyecto.com",
      githubUrl: "https://github.com/usuario/proyecto"
    },
    {
      nombre: "T-Solutions",
      description:
        "Sitio corporativo optimizado para SEO técnico, estructura semántica y experiencia de usuario.",
      technologies: ["HTML", "CSS", "JavaScript"],
      images: ["/proyecto2.png"],
      liveUrl: "https://marlon-2307.github.io/Tech/",
      githubUrl: "https://github.com/Marlon-2307/Tech"
    },
    {
      nombre: "GYM-POWER",
      description:
        "Página web para gimnasio optimizada para dispositivos móviles.",
      technologies: ["HTML", "CSS", "JavaScript"],
      images: ["/proyecto3.png"],
      liveUrl: "https://marlon-2307.github.io/GYM-POWER/",
      githubUrl: "https://github.com/usuario/proyecto"
    },
    /* {
      nombre: "T-Solutions",
      description:
        "Web optimizada para SEO técnico y experiencia de usuario.",
      technologies: ["HTML", "CSS", "JavaScript"],
      images: ["/Img-1.png"],
      liveUrl: "https://marlon-2307.github.io/Tech/",
    }, */
  ];

  const totalImages = projects.reduce(
    (acc, project) => acc + project.images.length,
    0
  );

  // Transformamos los proyectos en una lista plana de imágenes con info
  const flatImages = projects.flatMap((project) =>
    project.images.map((img) => ({
      ...project,
      image: img,
    }))
  );

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const changeImage = (direction: "next" | "prev") => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prev) => {
        if (direction === "next") {
          return (prev + 1) % flatImages.length;
        } else {
          return (prev - 1 + flatImages.length) % flatImages.length;
        }
      });
      setFade(true);
    }, 200);
  };

  const currentProject = flatImages[currentIndex];

  return (
    <section id="portafolio" className="px-6 py-18">
      <div className="w-full max-w-5xl mx-auto px-4 max-md:text-center">
        <h2 className="text-white text-5xl font-semibold mb-12">
          Proyectos
          <span className="block h-[2px] w-24 bg-gray-600 mt-3 max-md:mx-auto max-sm:text-center"></span>
        </h2>
      </div>

      <div className="w-[85%] mx-auto flex flex-col md:flex-row gap-16 items-center">
        {/* Imagen */}
        <div data-aos="fade-right" className="flex-1">
          <div className="bg-black/20 p-6 rounded-xl border border-gray-700">
            <div className="relative rounded-xl overflow-hidden transition-all duration-700 hover:scale-[1.02]">
              <Image
                src={currentProject.image}
                alt={currentProject.nombre}
                width={1000}
                height={700}
                className={`rounded-xl transition-opacity duration-500 ${
                  fade ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>

            {/* Indicadores */}
            <div className="flex justify-center gap-3 mt-6">
              {flatImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-3 h-3 rounded-full transition ${
                    currentIndex === idx
                      ? "bg-indigo-500 scale-125"
                      : "bg-gray-500"
                  }`}
                />
              ))}
            </div>

            {/* Flechas */}
            <div className="flex justify-between mt-6">
              <button
                onClick={() => changeImage("prev")}
                className="text-gray-400 hover:text-white transition"
              >
                <FaChevronLeft size={20} />
              </button>

              <button
                onClick={() => changeImage("next")}
                className="text-gray-400 hover:text-white transition"
              >
                <FaChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Info */}
        <div data-aos="fade-left" className="flex-1">
          <h3 className="text-3xl text-white mb-4">{currentProject.nombre}</h3>

          <p className="text-gray-400 mb-6 leading-relaxed">
            {currentProject.description}
          </p>

          <div className="flex flex-wrap gap-3 mb-6">
            {currentProject.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 bg-gray-800 text-gray-300 rounded-xl text-sm hover:bg-white hover:text-gray-800 transition"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-3">
            {currentProject.liveUrl && (
              <a
                href={currentProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-1.5 border border-gray-700 text-white rounded-xl hover:bg-gray-800 transition"
              >
                Ver demo
                <ExternalLink size={18} />
              </a>
            )}

            {currentProject.githubUrl && (
              <a
                href={currentProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-1.5 border border-gray-700 text-white rounded-xl hover:bg-gray-800 transition"
              >
                Ver código
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;