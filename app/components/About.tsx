import React from "react";
import { motion } from "framer-motion";

const About: React.FC = () => {
    const skills = [
        { nombre: "Next.js", percentage: 70 },
        { nombre: "React", percentage: 70 },
        { nombre: "JavaScript", percentage: 75 },
        { nombre: "TypeScript", percentage: 65 },
        { nombre: "TailwindCSS", percentage: 75 },
        { nombre: "CSS3", percentage: 85 },
        { nombre: "HTML5", percentage: 85 },
        { nombre: "Sass", percentage: 65 },
        { nombre: "GIT - GitHub", percentage: 70 }
    ];

    return (
        <div className="px-4" id="about">
            <motion.h2
                className="text-gray-900 p-4 pt-16 w-[85%] mx-auto text-5xl font-semibold mb-4 max-md:text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                Acerca de <span><hr className="text-gray-800 w-[30%]" /></span>
            </motion.h2>
            <motion.p
                className="w-[82%] mx-auto text-gray-500"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                Aquí encontrarás información detallada sobre mi perfil, mis áreas de trabajo y las habilidades que he desarrollado, con un enfoque particular en programación y tecnología.
            </motion.p>

            <div className="w-[80%] mx-auto p-12 grid grid-cols-2 gap-20 max-md:block max-md:w-[100%] mt-4">
                <motion.div
                    className="border border-gray-200 rounded-md p-8 max-md:mb-2 max-md:border-none"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <h2 className="text-2xl mb-4 max-md:text-center">Conóceme</h2>
                    <div className="py-8">
                        <p className="text-gray-500">
                            Soy un desarrollador web enfocado en el frontend, dedicado a desarollar interfaces de usuario para sitios web y aplicaciones web que no solo cumplen con las expectativas, sino que impulsan el éxito del producto en su totalidad. Mi experiencia abarca desde la creación de interfaces intuitivas y atractivas hasta la optimización del rendimiento y la usabilidad. Te invito a ver algunos de mis proyectos en la sección de Proyectos, donde podrás ver cómo mis habilidades se traducen en resultados concretos.
                        </p>
                    </div>  
                </motion.div>
                <motion.div
                    className="rounded-md p-8 border border-gray-200 max-md:border-none max-md:p-0"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <h2 className="text-gray-900 text-2xl max-md:mt-4 max-md:text-center">Tecnologías</h2>
                    <div className="flex flex-col gap-2 py-10 w-[90%] mx-auto">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                className="flex items-center max-sm:block"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
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
                            </motion.div>
                        ))}
                    </div>
                </motion.div>       
            </div>  
        </div>
    );
};

export default About;