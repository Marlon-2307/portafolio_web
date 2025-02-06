import React, { useEffect } from "react";
import 'aos/dist/aos.css';  // Importa los estilos de AOS
import AOS from 'aos';      // Importa la librería de animaciones

const About: React.FC = () => {
    const skills = [
        { nombre: "Next.js", percentage: 65 },
        { nombre: "React", percentage: 65 },
        { nombre: "JavaScript", percentage: 75 },
        { nombre: "Tailwind CSS", percentage: 75 },
        { nombre: "HTML5", percentage: 75 },
        { nombre: "MySQL", percentage: 50 },
        { nombre: "Git - GitHub", percentage: 65 }
    ];

     // Inicializa AOS en el hook useEffect
  useEffect(() => {
    AOS.init({
      duration: 1000,  // Duración de la animación
      once: false,      // Si la animación ocurre solo una vez
    });
  }, []);

    return (
        <div className="px-4" id="about">
            <h2 data-aos="fade-up" className="text-gray-900 p-4 pt-16 w-[85%] mx-auto text-5xl font-semibold mb-4 max-md:text-center">
                Acerca de <span><hr className="text-gray-800 w-[30%]" /></span>
            </h2>
            <p data-aos="fade-up" className="w-[80%] mx-auto text-gray-500">
                Aquí encontrarás información detallada sobre mi perfil, mis áreas de trabajo y las habilidades que he desarrollado, con un enfoque particular en programación y tecnología.
            </p>

            <div className="w-[80%] mx-auto p-12 max-md:p-4 grid grid-cols-2 gap-12 max-lg:block max-md:w-[93%] mt-4 max-lg:mb-4">
                <div  data-aos="fade-up-right" className="border border-gray-200 rounded-md p-8 max-md:mb-4">
                    <h2 className="text-2xl mb-4 max-md:text-center">Conóceme</h2>
                    <div className="py-8">
                        <p className="text-gray-500">
                            Soy un desarrollador web enfocado en el frontend, dedicado a desarollar interfaces de usuario para sitios web y aplicaciones web que no solo cumplen con las expectativas, sino que impulsan el éxito del producto en su totalidad. Mi experiencia abarca desde la creación de interfaces intuitivas y atractivas hasta la optimización del rendimiento y la usabilidad. Te invito a ver algunos de mis proyectos en la sección de Proyectos, donde podrás ver cómo mis habilidades se traducen en resultados concretos.
                        </p>
                    </div>  
                </div>
                <div  data-aos="fade-up-left" className="rounded-md p-8 border border-gray-200 max-md:p-0">
                    <h2 className="text-gray-900 text-2xl max-md:mt-4 max-md:text-center">Tecnologías</h2>
                    <div className="flex flex-col gap-2 py-10 w-[95%] max-md:w-[85%] mx-auto">
                        {skills.map((skill, index) => (
                            <div
                                key={index}
                                className="flex items-center max-sm:block"
                            >
                                <div className="text-md text-gray-600 w-32">
                                    {skill.nombre}
                                </div>
                                <div className="flex-1 h-6 flex items-center">
                                    <div className="w-full h-2 bg-gray-300 rounded-sm overflow-hidden">
                                        <div
                                            className="h-full bg-gray-500 rounded-sm transition-all duration-500 ease-in-out"
                                            style={{ width: `${skill.percentage}%` }}
                                        ></div>
                                    </div>
                                    <span className="ml-2 text-gray-700 text-sm">{skill.percentage}%</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>       
            </div>  
        </div>
    );
};

export default About;