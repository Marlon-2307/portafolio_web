import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About: React.FC = () => {
  const skills = {
  "Lenguajes": [
    "JavaScript",
    "TypeScript",
  ],

  "Frameworks y Librerías": [
    "React",
    "Next.js",
    "Material UI (MUI)",
    "Tailwind CSS",
  ],

  "SEO y Optimización Web": [
    "SEO técnico",
    "SEO on-page",
    "Performance Optimization",
  ],

  "Herramientas y Control de Versiones": [
    "Git",
    "GitHub",
    "Bitbucket",
  ],
};

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section id="about" className="px-4 py-20">
      {/* Título */}
      <div className="w-[85%] mx-auto">
        <h2
          data-aos="fade-up"
          className="text-white text-5xl font-semibold mb-6 max-md:text-center inline-block"
        >
          Acerca de
          <span className="block h-[2px] w-24 bg-gray-600 mt-3 max-md:mx-auto"></span>
        </h2>

        <p
          data-aos="fade-up"
          className="text-gray-400 max-w-3xl max-md:text-center"
        >
          Aquí encontrarás información detallada sobre mi perfil, mis áreas de
          trabajo y las habilidades que he desarrollado, con un enfoque
          particular en programación y tecnología.
        </p>
      </div>

      {/* Contenido */}
      <div className="w-[85%] mx-auto mt-12 grid md:grid-cols-2 gap-12">
        {/* Conóceme */}
        <div
          data-aos="fade-up-right"
          className="border border-gray-800 rounded-xl p-8 bg-black/20 backdrop-blur-sm"
        >
          <h3 className="text-2xl text-white mb-6 max-md:text-center">
            Conóceme
          </h3>

          <p className="text-gray-400 leading-relaxed">
            Desarrollador Frontend con experiencia en React y Next.js, y en la construcción de aplicaciones web escalables orientadas al rendimiento. Enfocado en optimización (SSR, Core Web Vitals), SEO técnico y arquitectura basada en componentes reutilizables. Experiencia integrando APIs REST y colaborando en equipos bajo metodologías ágiles como Scrum.
          </p>
        </div>

        {/* Tecnologías */}
        <div
          data-aos="fade-up-left"
          className="border border-gray-800 rounded-xl p-8 bg-black/20 backdrop-blur-sm"
        >
          <h3 className="text-2xl text-white mb-8 max-md:text-center">
            Tecnologías
          </h3>

          <div className="flex flex-col gap-8">
            {Object.entries(skills).map(([category, techs]) => (
              <div key={category}>
                <h4 className="text-white/80  mb-4">
                  {category}
                </h4>

                <div className="flex flex-wrap gap-3">
                  {techs.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-gray-800 text-gray-300 rounded-xl text-sm transition-all duration-300 hover:bg-white/80  hover:text-gray-800 hover:scale-105 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;