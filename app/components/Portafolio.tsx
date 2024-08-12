import React from "react";
import Image from "next/image";

const Portfolio: React.FC = () => {
    const projects = [
        { 
            src: "/proyecto7.png", 
            alt: "imagen-proyecto7", 
            githubLink: "https://github.com/usuario/proyecto7", 
            description: "Proyecto CM Electronics",
            technologies: ["Next.js", "React", "Tailwind CSS", "HTML", "TypeScript", "Node.js"],
        },
        { 
            src: "/proyecto1.png", 
            alt: "imagen-proyecto1", 
            githubLink: "https://github.com/Marlon-2307/Craigs_barberia", 
            description: "Proyecto Craigs Barberia",
            technologies: ["Next.js", "React", "Tailwind CSS", "HTML", "TypeScript", "Node.js",],
        },
        { 
            src: "/proyecto6.png", 
            alt: "imagen-proyecto6", 
            githubLink: "https://github.com/Marlon-2307/GYM-POWER", 
            description: "Proyecto GYM-POWER",
            technologies: ["HTML", "CSS", "JavaScript"],
        },
        { 
            src: "/proyecto2.png", 
            alt: "imagen-proyecto2", 
            githubLink: "https://marlon-2307.github.io/Dental-Clinic/index.html", 
            description: "Proyecto Clínica Dental",
            technologies: ["HTML", "CSS", "SASS", "Node.js"],
        },
    ];

    return (
        <div className="pb-16 pt-12 bg-parallax bg-fixed bg-cover bg-center" id="portafolio">
            <h2 className="text-white mb-12 text-5xl font-bold max-sm:text-center w-[80%] mx-auto">
                Portafolio <span><hr className="text-gray-900 w-[30%]" /></span>
            </h2>
            <div className="flex flex-col sm:grid-cols-2 md:grid-cols-2 gap-10 w-[75%] mx-auto">
                {projects.map((project, index) => (
                    <div key={index} className="flex flex-col md:flex-row gap-12 max-md:gap-6">
                        <div className="relative h-60 w-3/6 max-md:h-52 max-md:w-full overflow-hidden rounded-sm group shadow-sm">
                            <Image 
                                src={project.src} 
                                alt={project.alt} 
                                layout="fill" 
                                objectFit="cover" 
                                loading="lazy" 
                                className="rounded-sm transition-transform duration-300 transform group-hover:scale-105 shadow-lg"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t via-black/70 from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end items-start p-4">
                                <a 
                                    href={project.githubLink} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="text-white text-sm underline hover:text-gray-300 transition-colors"
                                >
                                    Codigo GitHub
                                </a>
                            </div>
                        </div>
                        <div className="flex flex-col justify-between">
                            <div className="w-80">
                                <p className="text-white text-2xl font-semibold mb-2">{project.description}</p>
                                <p className="text-gray-100 text-sm mb-2">Tecnologías utilizadas:</p>
                                <ul className="list-disc list-inside text-gray-200 text-sm">
                                    {project.technologies.map((tech, techIndex) => (
                                        <li key={techIndex}>{tech}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;