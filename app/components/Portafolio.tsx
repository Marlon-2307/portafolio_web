import React from "react";
import Image from "next/image";

const Portfolio: React.FC = () => {
    const projects = [
        { 
            src: "/proyecto1.png", 
            alt: "imagen-proyecto1", 
            githubLink: "https://github.com/Marlon-2307/Craig-Barber", 
            description: "Proyecto de barbería",
        },
        { 
            src: "/proyecto2.png", 
            alt: "imagen-proyecto2", 
            githubLink: "https://github.com/Marlon-2307/Dental-Clinic", 
            description: "Clínica dental",
        },
        { 
            src: "/proyecto4.png", 
            alt: "imagen-proyecto4", 
            githubLink: "https://github.com/Marlon-2307/Portafolio",  
            description: "Mi portafolio personal",
        },
        { 
            src: "/proyecto6.png", 
            alt: "imagen-proyecto6", 
            githubLink: "https://github.com/Marlon-2307/GYM-POWER", 
            description: "Proyecto de gimnasio",
        },
        { 
            src: "/proyecto7.png", 
            alt: "imagen-proyecto7", 
            githubLink: "https://github.com/usuario/proyecto7", 
            description: "Descripción del proyecto 7",
        },
    ];

    return (
        <div className="pb-16 pt-10 w-[80%] mx-auto">
            <h2 className="text-gray-900 mb-12 text-3xl font-semibold max-sm:text-center">Portafolio</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-2 py-8">
                {projects.map((project, index) => (
                    <div key={index} className="relative h-44 w-full overflow-hidden rounded-sm group">
                        <Image 
                            src={project.src} 
                            alt={project.alt} 
                            layout="fill" 
                            objectFit="cover" 
                            loading="lazy" 
                            className="rounded-sm transition-transform duration-300 transform group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t via-black/70 from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end items-start p-4">
                            <a 
                                href={project.githubLink} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-white text-sm underline hover:text-gray-300 transition-colors"
                            >
                                Ver en GitHub
                            </a>
                        </div>
                        <p className="mt-2 text-center text-gray-700">{project.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;