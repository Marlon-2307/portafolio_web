import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Image from "next/image";


const Portfolio: React.FC = () => {
    const [isOpen, setIsOpen] = useState<number | null>(null);

    const projects = [
        { 
            src: "/proyecto7.png", 
            alt: "CM Electronics - Captura de pantalla", 
            githubLink: "https://github.com/usuario/proyecto7", 
            nombre: "CM Electronics",
            description: "Tienda en línea especializada en productos electrónicos de alta calidad. Ofrecemos una amplia selección de dispositivos, desde equipos de audio hasta accesorios, brindando a los usuarios una experiencia de compra segura, rápida y eficiente.",
            technologies: ["Next.js", "React", "Tailwind CSS", "HTML", "TypeScript", "Node.js"],
        },
        { 
            src: "/proyecto1.png", 
            alt: "Craig's Barbería - Captura de pantalla", 
            githubLink: "https://github.com/Marlon-2307/Craigs_barberia", 
            nombre: "Craig's Barbería",
            description: "Sitio web profesional para una barbería que permite a los clientes reservar citas, conocer los servicios y productos, y explorar estilos de cortes de cabello modernos. Diseñado para reflejar la elegancia y calidad del servicio.",
            technologies: ["Next.js", "React", "Tailwind CSS", "HTML", "TypeScript", "Node.js",],
        },
        { 
            src: "/proyecto2.png", 
            alt: "Clínica Dental - Captura de pantalla", 
            githubLink: "https://marlon-2307.github.io/Dental-Clinic/index.html", 
            nombre: "Clínica Dental",
            description: "Sitio web informativo y fácil de usar para una clínica dental, que ofrece a los pacientes la posibilidad de agendar citas, conocer los servicios dentales ofrecidos y consejos sobre salud bucal. Todo con un enfoque el bienestar del paciente.",
            technologies: ["HTML", "CSS", "SASS", "Node.js"],
        },
        { 
            src: "/proyecto6.png", 
            alt: "GYM-POWER - Captura de pantalla", 
            githubLink: "https://github.com/Marlon-2307/GYM-POWER", 
            nombre: "GYM-POWER",
            description: "Aplicación diseñada para entusiastas del fitness y gimnasios. GYM-POWER permite a los usuarios crear rutinas de entrenamiento personalizadas, seguir su progreso, y acceder a recursos y consejos de expertos para maximizar su rendimiento",
            technologies: ["HTML", "CSS", "JavaScript"],
        }
    ];

    const click = (index: number) => {
        setIsOpen(isOpen === index ? null : index);
    };
    

    return (
        <div className="pb-16 pt-12 bg-fixed bg-cover bg-center" id="portafolio">
        <h2 className="text-gray-800 mb-12 text-5xl font-bold w-[80%] mx-auto max-md:text-center">
            Portafolio
            <span>
                <hr className="text-gray-900 w-[30%] mt-2" />
            </span>
        </h2>
        <div className="grid grid-cols-2 max-lg:grid-cols-2 max-md:block gap-10 w-[72%] mx-auto max-lg:w-[80%]">
            {projects.map((project, index) => (
                <div 
                    key={index}
                    className="group relative overflow-hidden rounded-lg cursor-pointer transform transition-transform duration-500 hover:shadow-lg hover:scale-95 border border-gray-300 max-md:mb-4"
                    onClick={() => click(index)}
                >
                    <div 
                        className="relative h-52 w-full overflow-hidden rounded-t-md bg-gray-100 transition-transform duration-500 transform group-hover:scale-110"
                    >
                        <Image 
                            src={project.src} 
                            alt={project.alt} 
                            layout="fill" 
                            objectFit="cover" 
                            loading="lazy" 
                            className="absolute inset-0 transition-transform duration-700 transform group-hover:translate-z-10"
                        />
                    </div>
                    <div className="p-6 bg-white relative z-10 transition-transform duration-700">
                        <p className="text-gray-800 text-xl mb-4">
                            {project.nombre}
                        </p>
                        <p className="text-gray-500 text-sm mb-8">
                            {project.description}
                        </p>
                        <div className="flex items-center justify-between cursor-pointer" onClick={() => click(index)}>
                            <p className="text-gray-500 text-sm mb-2">Tecnologías utilizadas</p>
                            {isOpen === index ? (
                                <FaChevronUp className="text-gray-300 hover:text-gray-500 text-sm" />
                            ) : (
                                <FaChevronDown className="text-gray-300 hover:text-gray-500 text-sm" />
                            )}
                        </div>
                        {isOpen === index && (
                            <ul className="list-inside text-gray-500 text-sm mt-2">
                                {project.technologies.map((tech, techIndex) => (
                                    <li key={techIndex}>{tech}</li>
                                ))}
                            </ul>
                        )}
                        <div className="mt-10">
                            <a 
                                href={project.githubLink} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-gray-500 text-sm no-underline hover:text-gray-600 transition-colors border border-gray-300 p-2 rounded-sm"
                            >
                                Código en GitHub
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
    );
};

export default Portfolio;