import React from "react";
import Link from "next/link";


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
            <h2 className="text-gray-900 p-4 pt-16 w-[85%] mx-auto text-5xl font-semibold max-sm:text-center mb-4">
                Acerca de <span><hr className="text-gray-800 w-[30%]" /></span>
            </h2>
            <p className="w-[82%] mx-auto text-gray-500 max-md:text-center">
                Aquí encontrarás información detallada sobre mi perfil, mis áreas de trabajo y las habilidades que he desarrollado, con un enfoque particular en programación y tecnología.
            </p>

            <div className="w-[90%] mx-auto p-12 grid grid-cols-2 gap-20 max-md:block mt-6">
                <div>
                    <h2 className="text-2xl mb-4 max-md:text-center">Conóceme</h2>
                    <div className="py-8">
                        <p className="text-gray-500 max-md:text-center">
                            Soy un desarrollador web enfocado en el frontend, dedicado a desarollar interfaces de usuario para sitios web y aplicaciones web que no solo cumplen con las expectativas, sino que impulsan el éxito del producto en su totalidad. Mi experiencia abarca desde la creación de interfaces intuitivas y atractivas hasta la optimización del rendimiento y la usabilidad. Te invito a ver algunos de mis proyectos en la sección de Proyectos, donde podrás ver cómo mis habilidades se traducen en resultados concretos.
                        </p>
                    </div>  
                    <Link href="/">
                        <div className="mt-6 md:mt-8 flex justify-start">
                            <a href="#portafolio" className="border border-gray-800 text-gray-900 hover:bg-gray-800 hover:text-white py-3 px-8 rounded-sm max-sm:w-full max-sm:text-center transition-transform duration-300 transform hover:translate-y-2 hover:scale-105">Contactar</a>
                        </div>   
                    </Link>       
                </div>

                <div>
                    <h2 className="text-gray-900 text-2xl max-md:mt-8 max-md:text-center">Tecnologías</h2>
                    <div className="flex flex-col gap-6 py-10 w-[90%] mx-auto">
                        {skills.map((skill, index) => (
                            <div key={index} className="flex items-center max-sm:block">
                                <div className="text-lg text-gray-700 w-32">
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