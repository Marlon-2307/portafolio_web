import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaChevronDown, FaChevronUp } from "react-icons/fa";
import Image from "next/image";

const Portfolio: React.FC = () => {
    const [isOpen, setIsOpen] = useState<number | null>(null);
    const [selectedProject, setSelectedProject] = useState<any | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const projects = [
        { 
            src: "/proyecto7.png", 
            alt: "CM Electronics - Captura de pantalla", 
            githubLink: "https://github.com/usuario/proyecto7", 
            nombre: "CM Electronics",
            description: "Tienda en línea especializada en productos electrónicos de alta calidad. Ofrecemos una amplia selección de dispositivos, desde equipos de audio hasta accesorios, brindando a los usuarios una experiencia de compra segura, rápida y eficiente.",
            technologies: ["Next.js", "React", "Tailwind CSS", "HTML", "TypeScript", "Node.js"],
            images: ["/proyecto7.png", "/sesion-categorias.png", "/sesion-footer.png", "/sesion-login.png", "/sesion-productoid.png", "/sesion-carrito.png"],
        },
        { 
            src: "/proyecto1.png", 
            alt: "Craig's Barbería - Captura de pantalla", 
            githubLink: "https://github.com/Marlon-2307/Craigs_barberia", 
            nombre: "Craig's Barbería",
            description: "Sitio web profesional para una barbería que permite a los clientes reservar citas, conocer los servicios y productos, y explorar estilos de cortes de cabello modernos. Diseñado para reflejar la elegancia y calidad del servicio.",
            technologies: ["Next.js", "React", "Tailwind CSS", "HTML", "TypeScript", "Node.js"],
            images: ["/proyecto1.png", "/sesion-servicios.png", "/sesion-club.png", "/sesion-footer-craigs.png", "/sesion-login-craigs.png"],
        },
        { 
            src: "/proyecto2.png", 
            alt: "Clínica Dental - Captura de pantalla", 
            githubLink: "https://github.com/Marlon-2307/Dental-Clinic", 
            nombre: "Clínica Dental",
            description: "Sitio web informativo y fácil de usar para una clínica dental, que ofrece a los pacientes la posibilidad de agendar citas, conocer los servicios dentales ofrecidos y consejos sobre salud bucal. Todo con un enfoque el bienestar del paciente.",
            technologies: ["HTML", "CSS", "SASS", "Node.js"],
            images: ["/proyecto2.png", "/banner.png", "/form.png", "/blog.png"],
        },
        { 
            src: "/proyecto6.png", 
            alt: "GYM-POWER - Captura de pantalla", 
            githubLink: "https://github.com/Marlon-2307/GYM-POWER", 
            nombre: "GYM-POWER",
            description: "Aplicación diseñada para entusiastas del fitness y gimnasios. GYM-POWER permite a los usuarios crear rutinas de entrenamiento personalizadas, seguir su progreso, y acceder a recursos y consejos de expertos para maximizar su rendimiento",
            technologies: ["HTML", "CSS", "JavaScript"],
            images: ["/proyecto6.png", "/sesion-trainer.png", "/sesion-planes.png", "/sesion-footerGYM.png", "/sesion-formulario.png"],
        }
    ];

    const openModal = (project: any) => {
        setSelectedProject(project);
        setCurrentImageIndex(0); 
        setIsModalOpen(true); 
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProject(null);
    };

    const showPrevImage = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.stopPropagation(); 
        if (selectedProject) {
            setCurrentImageIndex((prevIndex) => 
                (prevIndex - 1 + selectedProject.images.length) % selectedProject.images.length
            );
        }
    };

    const showNextImage = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.stopPropagation(); 
        if (selectedProject) {
            setCurrentImageIndex((prevIndex) => 
                (prevIndex + 1) % selectedProject.images.length
            );
        }
    };

    return (
        <div className="pb-12 pt-12 bg-fixed bg-cover bg-center" id="portafolio">
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
                        className="group relative overflow-hidden rounded-md cursor-pointer transform transition-transform duration-500 hover:shadow-lg hover:scale-100 border border-gray-300 max-md:mb-4"
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
                            <div className="flex items-center justify-between cursor-pointer">
                                <p className="text-gray-500 text-sm mb-2">Tecnologías utilizadas</p>
                                <div className="flex items-center">
                                    {isOpen === index ? (
                                        <FaChevronUp className="text-gray-300 hover:text-gray-500 text-sm" onClick={() => setIsOpen(null)} />
                                    ) : (
                                        <FaChevronDown className="text-gray-300 hover:text-gray-500 text-sm" onClick={() => setIsOpen(index)} />
                                    )}
                                </div>
                            </div>
                            {isOpen === index && (
                                <ul className="list-inside text-gray-500 text-sm mt-2">
                                    {project.technologies.map((tech, techIndex) => (
                                        <li key={techIndex}>{tech}</li>
                                    ))}
                                </ul>
                            )}
                            <div className="mt-10">
                                <button 
                                    onClick={() => openModal(project)}
                                    className="text-gray-500 text-sm no-underline hover:text-gray-600 transition-colors border border-gray-300 p-2 rounded-sm"
                                >
                                    Ver Proyecto
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {isModalOpen && selectedProject && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80" onClick={closeModal}>
                    <div className=" p-6 rounded-md w-[90%] max-w-4xl relative" onClick={(e) => e.stopPropagation()}>

                        <div className="relative">
                            <div className="flex justify-between items-center mb-4">
                                <button 
                                    className="text-gray-400 p-2 rounded-full text-4xl animate-pulse"
                                    onClick={showPrevImage}
                                >
                                    <FaChevronLeft />
                                </button>
                                <Image 
                                    src={selectedProject.images[currentImageIndex]} 
                                    alt={`Imagen del proyecto ${selectedProject.nombre}`} 
                                    layout="responsive" 
                                    width={700}
                                    height={500}
                                    objectFit="cover" 
                                    className="rounded-md mx-auto"
                                />
                                <button 
                                    className="text-gray-400 p-2 rounded-full text-4xl animate-pulse"
                                    onClick={showNextImage}
                                >
                                    <FaChevronRight />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Portfolio;