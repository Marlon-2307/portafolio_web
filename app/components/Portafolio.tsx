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
            description: "Tienda en línea de productos electrónicos de alta calidad. Los usuarios pueden explorar una amplia gama de dispositivos, desde teléfonos inteligentes hasta equipos de audio, con una experiencia de compra segura y eficiente.",
            technologies: ["Next.js", "React", "Tailwind CSS", "HTML", "TypeScript", "Node.js"],
        },
        { 
            src: "/proyecto1.png", 
            alt: "Craig's Barbería - Captura de pantalla", 
            githubLink: "https://github.com/Marlon-2307/Craigs_barberia", 
            nombre: "Craig's Barbería",
            description: "Sitio web profesional para una barbería, que ofrece a los clientes la posibilidad de reservar citas, conocer los servicios y productos, y explorar estilos de cortes de cabello modernos. Diseñado para reflejar la elegancia y la calidad del servicio.",
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
        <div className="pb-16 pt-12 bg-gray- bg-fixed bg-cover bg-center" id="portafolio">
            <h2 className="text-gray-800 mb-12 text-5xl font-bold w-[80%] mx-auto max-md:text-center">
                Portafolio
                <span>
                    <hr className="text-gray-900 w-[30%] mt-2" />
                </span>
            </h2>
            <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:block gap-10 w-[75%] mx-auto">
                {projects.map((project, index) => (
                    <div key={index} className="group perspective hover:rotate-y-180 duration-700 transform-style-preserve-3d rounded-lg overflow-hidden h-auto max-md:mb-4 hover:shadow-md border borber-gray-300">
                    <div className="relative h-44 w-full overflow-hidden rounded-t-xl">
                        <Image 
                            src={project.src} 
                            alt={project.alt} 
                            layout="fill" 
                            objectFit="cover" 
                            loading="lazy" 
                            className="transition-transform duration-300 transform group-hover:scale-105"
                        />
                    </div>
                    <div className="p-6 bg-white">
                            <p className="text-gray-800 text-xl mb-4">{project.nombre}</p>
                            <p className="text-gray-500 text-sm mb-8">{project.description}</p>
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