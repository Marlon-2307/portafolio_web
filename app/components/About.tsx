import React from "react";

const About: React.FC = () => {
    return (
        <>
        <div className="px-4">
             <h2 className="text-gray-900 p-4 pt-16 w-[85%] mx-auto text-3xl font-semibold max-sm:text-center" data-aos="zoom-in-right">Información</h2>
                <div className="w-[90%] mx-auto p-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <div className="p-10 rounded-md hover:shadow-md">
                            <h3 className="text-xl font-bold mb-4 text-gray-900">Académica</h3>
                            <hr className="text-gray-100 w-[70%]"/>
                            <p className="mt-2 text-sm text-gray-500">Estudiante vigente de Ingeniería de Software. A su vez he fortalecido mis conocimientos en plataformas académicas de manera autodidacta.</p>
                        </div>
                        <div className="p-10 rounded-md hover:shadow-md">
                            <h3 className="text-xl font-bold mb-4 text-gray-900">Experiencia</h3>
                            <hr className="text-gray-100 w-[70%]"/>
                            <p className="mt-2 text-sm text-gray-500">He participado en proyectos académicos y personales de desarrollo web, utilizando tecnologías como HTML, CSS, SASS, JavaScript, etc.</p>
                        </div>
                        <div className="p-10 rounded-md hover:shadow-md">
                            <h3 className="text-xl font-bold mb-4 text-gray-900">Misión Personal</h3>
                            <hr className="text-gray-100 w-[70%]"/>
                            <p className="mt-2 text-sm text-gray-500">Me encanta la tecnología y la innovación, siempre en busca de oportunidades de aprender y crecer en el mundo de la ingeniería.</p>
                        </div>
                 </div>
                 <div className="mt-6 md:mt-8 flex justify-end">
                    <a href="#portafolio" className="bg-gray-600 hover:bg-gray-700 text-white py-3 px-8 rounded-sm max-sm:w-full max-sm:text-center">Contactar</a>
                </div>
            </div>
        </div>
        </>
    )
}

export default About;