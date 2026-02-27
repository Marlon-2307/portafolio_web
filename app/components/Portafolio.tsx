"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

interface Project {
  nombre: string;
  description: string;
  technologies: string[];
  images: string[];
  liveUrl?: string;
}

const Portfolio: React.FC = () => {
  const [currentIndexes, setCurrentIndexes] = useState<number[]>([]);
  const [fade, setFade] = useState(true);
  const [lightbox, setLightbox] = useState<{
    open: boolean;
    projectIndex: number;
    imageIndex: number;
  }>({ open: false, projectIndex: 0, imageIndex: 0 });

  const projects: Project[] = [
    {
      nombre: "CM Electronics",
      description:
        "Tienda online optimizada con SSR, rendimiento y arquitectura escalable.",
      technologies: ["Next.js", "React", "Tailwind", "TypeScript"],
      images: [
        "/proyecto7.png",
        "/sesion-categorias.png",
        "/sesion-footer.png",
      ],
      liveUrl: "https://tuproyecto.com",
    },
    {
      nombre: "Clínica Dental",
      description:
        "Web optimizada para SEO técnico y experiencia de usuario.",
      technologies: ["HTML", "CSS", "SASS"],
      images: ["/proyecto2.png", "/banner.png", "/form.png"],
      liveUrl: "https://tuproyecto2.com",
    },
  ];

  useEffect(() => {
    setCurrentIndexes(new Array(projects.length).fill(0));
    AOS.init({ duration: 1000, once: true });
  }, []);

  const changeImage = (projectIndex: number, direction: "next" | "prev") => {
    setFade(false);

    setTimeout(() => {
      setCurrentIndexes((prev) => {
        const updated = [...prev];
        const total = projects[projectIndex].images.length;

        if (direction === "next") {
          updated[projectIndex] = (updated[projectIndex] + 1) % total;
        } else {
          updated[projectIndex] =
            (updated[projectIndex] - 1 + total) % total;
        }

        return updated;
      });

      setFade(true);
    }, 200);
  };

  const openLightbox = (projectIndex: number) => {
    setLightbox({
      open: true,
      projectIndex,
      imageIndex: currentIndexes[projectIndex],
    });
  };

  return (
    <section id="portafolio" className="px-6 py-18">
      <div className="w-[85%] mx-auto">
        <h2 className="text-white text-5xl font-semibold mb-12">
          Proyectos
          <span className="block h-[2px] w-24 bg-gray-600 mt-3"></span>
        </h2>
      </div>

      <div className="w-[85%] mx-auto space-y-24">
        {projects.map((project, index) => (
          <div
            key={project.nombre}
            className="grid md:grid-cols-2 gap-16 items-center"
          >
            {/* MacBook Effect */}
            <div data-aos="fade-right">
              <div className="bg-black/20 p-6 rounded-xl border border-gray-700">
                <div
                  onClick={() => openLightbox(index)}
                  className="cursor-pointer relative rounded-xl overflow-hidden transition-all duration-700 hover:scale-[1.02]"
                >
                  <Image
                    src={project.images[currentIndexes[index]]}
                    alt={project.nombre}
                    width={1000}
                    height={700}
                    className={`rounded-xl transition-opacity duration-500 ${
                      fade ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </div>

                {/* Indicadores */}
                <div className="flex justify-center gap-3 mt-6">
                  {project.images.map((_, imgIndex) => (
                    <button
                      key={imgIndex}
                      onClick={() =>
                        setCurrentIndexes((prev) => {
                          const updated = [...prev];
                          updated[index] = imgIndex;
                          return updated;
                        })
                      }
                      className={`w-3 h-3 rounded-full transition ${
                        currentIndexes[index] === imgIndex
                          ? "bg-indigo-500 scale-125"
                          : "bg-gray-500"
                      }`}
                    />
                  ))}
                </div>

                {/* Flechas */}
                <div className="flex justify-between mt-6">
                  <button
                    onClick={() => changeImage(index, "prev")}
                    className="text-gray-400 hover:text-white transition"
                  >
                    <FaChevronLeft size={20} />
                  </button>

                  <button
                    onClick={() => changeImage(index, "next")}
                    className="text-gray-400 hover:text-white transition"
                  >
                    <FaChevronRight size={20} />
                  </button>
                </div>
              </div>
            </div>

            {/* Info */}
            <div data-aos="fade-left">
              <h3 className="text-3xl text-white mb-4">
                {project.nombre}
              </h3>

              <p className="text-gray-400 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 bg-gray-800 text-gray-300 rounded-xl text-sm hover:bg-white hover:text-gray-800 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 border border-gray-800 text-white rounded-xl hover:bg-gray-800 transition duration-300"
                >
                  Ver proyecto →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox.open && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-50">
          <button
            onClick={() => setLightbox({ ...lightbox, open: false })}
            className="absolute top-6 right-6 text-white"
          >
            <FaTimes size={28} />
          </button>

          <div className="max-w-5xl w-full px-6">
            <Image
              src={
                projects[lightbox.projectIndex].images[
                  lightbox.imageIndex
                ]
              }
              alt="preview"
              width={1400}
              height={900}
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;