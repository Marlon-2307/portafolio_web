import React, { useState, useEffect } from "react"; // Importa React y useState, useEffect
import { FaChevronLeft, FaChevronRight, FaChevronDown, FaChevronUp } from "react-icons/fa";
import Image from "next/image";

const Portfolio: React.FC = () => {
    const [isOpen, setIsOpen] = useState<number | null>(null);
    // Estado para guardar el índice de la imagen actual por proyecto
    const [currentImageIndexes, setCurrentImageIndexes] = useState<number[]>([]);

    const projects = [
        { 
            src: "/proyecto7.png", 
            alt: "CM Electronics - Captura de pantalla", 
            nombre: "CM Electronics",
            description: "Tienda en línea especializada en productos electrónicos de alta calidad. Ofrecemos una amplia selección de dispositivos, desde equipos de audio hasta accesorios, brindando a los usuarios una experiencia de compra segura, rápida y eficiente.",
            technologies: ["Next.js", "React", "Tailwind CSS", "HTML", "TypeScript", "Node.js"],
            images: ["/proyecto7.png", "/sesion-categorias.png", "/sesion-footer.png", "/sesion-login.png", "/sesion-productoid.png", "/sesion-carrito.png"],
        },
        { 
            src: "/proyecto2.png", 
            alt: "Clínica Dental - Captura de pantalla", 
            nombre: "Clínica Dental",
            description: "Sitio web informativo y fácil de usar para una clínica dental, que ofrece a los pacientes la posibilidad de agendar citas, conocer los servicios dentales ofrecidos y consejos sobre salud bucal. Todo con un enfoque el bienestar del paciente.",
            technologies: ["HTML", "CSS", "SASS", "Node.js"],
            images: ["/proyecto2.png", "/banner.png", "/form.png", "/blog.png"],
        },
        { 
            src: "/proyecto6.png", 
            alt: "GYM-POWER - Captura de pantalla", 
            nombre: "GYM-POWER",
            description: "Aplicación diseñada para entusiastas del fitness y gimnasios. GYM-POWER permite a los usuarios crear rutinas de entrenamiento personalizadas, seguir su progreso, y acceder a recursos y consejos de expertos para maximizar su rendimiento.",
            technologies: ["HTML", "CSS", "JavaScript"],
            images: ["/proyecto6.png", "/sesion-trainer.png", "/sesion-planes.png", "/sesion-footerGYM.png", "/sesion-formulario.png"],
        }
    ];

    // Inicializar el índice de la imagen para cada proyecto
    const initializeImageIndexes = () => {
        setCurrentImageIndexes(new Array(projects.length).fill(0));
    };

    // Función para mostrar la imagen anterior
    const showPrevImage = (projectIndex: number) => {
        setCurrentImageIndexes((prevIndexes) => {
            const newIndexes = [...prevIndexes];
            newIndexes[projectIndex] = (newIndexes[projectIndex] - 1 + projects[projectIndex].images.length) % projects[projectIndex].images.length;
            return newIndexes;
        });
    };

    // Función para mostrar la imagen siguiente
    const showNextImage = (projectIndex: number) => {
        setCurrentImageIndexes((prevIndexes) => {
            const newIndexes = [...prevIndexes];
            newIndexes[projectIndex] = (newIndexes[projectIndex] + 1) % projects[projectIndex].images.length;
            return newIndexes;
        });
    };

    // Inicializar los índices de las imágenes al montar el componente
    useEffect(() => {
        initializeImageIndexes();
    }, []);

    return (
        <div className=" pt-12 bg-fixed bg-cover bg-center" id="portafolio">
            <h2 className="text-gray-800 mb-12 text-5xl font-bold w-[80%] mx-auto max-md:text-center">
                Proyectos
                <span>
                    <hr className="text-gray-900 w-[30%] mt-2" />
                </span>
            </h2>
            <div>
                {projects.map((project, index) => (
                    <div 
                        key={index}
                        className="group relative overflow-hidden rounded-md cursor-pointer max-md:mb-4 grid grid-cols-2 max-lg:grid-cols-2 max-md:block gap-10 w-[75%] mx-auto max-lg:w-[80%] mb-10"
                    >
                        {/* Contenedor de la Imagen */}
                        <div className="relative h-60 w-full max-md:h-44 overflow-hidden rounded-t-md bg-gray-100">
                            <Image 
                                src={project.images[currentImageIndexes[index]]} 
                                alt={project.alt} 
                                layout="responsive" 
                                width={700} 
                                height={500} 
                                objectFit="cover" 
                                loading="lazy" 
                                className="absolute inset-0 transition-transform duration-700 ease-in-out transform group-hover:scale-110 border rounded-md"
                            />
                            {/* Botones para navegar entre imágenes */}
                            <div className="absolute inset-2 flex items-center justify-between p-2">
                                <button 
                                    className="bg-gray-700 bg-opacity-50 text-white px-2 py-4 rounded-sm hover:bg-gray-600 hover:bg-opacity-70 transition-transform duration-300 transform hover:scale-110"
                                    onClick={() => showPrevImage(index)}
                                >
                                    <FaChevronLeft className="text-4xl max-md:text-2xl" />
                                </button>
                                <button 
                                    className="bg-gray-700 bg-opacity-50 text-white px-2 py-4 rounded-sm hover:bg-gray-600 hover:bg-opacity-70 transition-transform duration-300 transform hover:scale-110"
                                    onClick={() => showNextImage(index)}
                                >
                                    <FaChevronRight className="text-4xl max-md:text-2xl" />
                                </button>
                            </div>
                        </div>
                        
                        {/* Contenedor de la Documentación */}
                        <div className="p-6 bg-white relative transition-transform duration-300 rounded-md">
                            <p className="text-gray-800 text-3xl mb-4">{project.nombre}</p>
                            <p className="text-gray-500 text-md mb-8">{project.description}</p>
                            <div className="flex items-center justify-between cursor-pointer">
                                <p className="text-gray-500 text-sm mb-2">Tecnologías utilizadas</p>
                                <div className="flex items-center">
                                    {isOpen === index ? (
                                        <FaChevronUp className="text-gray-300 hover:text-gray-500 text-md transition-transform duration-300" onClick={() => setIsOpen(null)} />
                                    ) : (
                                        <FaChevronDown className="text-gray-300 hover:text-gray-500 text-md transition-transform duration-300" onClick={() => setIsOpen(index)} />
                                    )}
                                </div>
                            </div>
                            {isOpen === index && (
                                <ul className="list-inside text-gray-500 text-sm mt-2 transition-transform duration-500 transform translate-y-0 opacity-100">
                                    {project.technologies.map((tech, techIndex) => (
                                        <li key={techIndex} className="transition-transform duration-300 transform translate-y-2 opacity-0 animate-slideIn">{tech}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;
