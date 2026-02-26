import React, { useState } from "react";
// import DarkMode from "../components/DarkMode";
import Link from "next/link";

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {/* Escritorio Menu */}
            <div className="fixed top-0 left-4 right-4 z-10 flex justify-between items-center py-6 px-16 max-sm:px-6 backdrop-blur-md shadow-md rounded-xl top-2 border border-gray-700">
                <div>
                    <a className="text-white hover:text-gray-700 text-4xl" href="#"><h3>M<span className="text-gray-300 text-xl">C.</span></h3></a>
                </div>  
                <nav className="hidden md:flex items-center gap-4">
                    <Link href="/">
                        <div className="text-white cursor-pointerpx-3 py-1 rounded-md text-white transition-all duration-300 hover:bg-white/10 hover:bg-gray-700 cursor-pointer p-4 rounded-lg">Inicio</div>
                    </Link>
                    <Link href="#about">
                        <div className="text-white cursor-pointerpx-3 py-1 rounded-md text-white transition-all duration-300 hover:bg-white/10 hover:bg-gray-700 cursor-pointer p-4 rounded-lg">Infomacion</div> 
                    </Link>
                    <Link href="#portafolio">
                        <div className="text-white cursor-pointerpx-3 py-1 rounded-md text-white transition-all duration-300 hover:bg-white/10 hover:bg-gray-700 cursor-pointer p-4 rounded-lg">Proyectos</div>
                    </Link>                
                    <Link href="#contact">
                        <div className="text-white cursor-pointerpx-3 py-1 rounded-md text-white transition-all duration-300 hover:bg-white/10 hover:bg-gray-700 cursor-pointer p-4 rounded-lg">Contacto</div>
                    </Link>
                    {/* <DarkMode /> */}
                </nav>
                <div className="md:hidden text-3xl p-0 m-0 cursor-pointer z-50" onClick={toggleMenu}>
                    {/* Icono de la hamburguesa con animación */}
                    <div className={`hamburger ${isOpen ? "open" : ""} space-y-2`}>
                        <div className="w-8 h-0.5 bg-black transition-transform duration-500 transform origin-center linea-1"></div>
                        <div className="w-8 h-0.5 bg-black transition-opacity duration-500 linea-2"></div>
                        <div className="w-8 h-0.5 bg-black transition-transform duration-500 transform origin-center linea-3"></div>
                    </div>
                </div>
            </div>
            {/* Movil Menu */}
            <div className={`fixed top-20 left-0 w-full h-64 bg-white z-20 transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-700 ease-in-out`}>
                <div className="flex flex-col pl-12 pt-14 h-full">
                    <Link href="/">
                        <div className="text-gray-600 hover:text-gray-800 mb-4 text-xl transition-transform duration-300 transform hover:translate-x-2 hover:scale-105 cursor-pointer">
                            Inicio
                        </div>
                    </Link>
                    <Link href="#about">
                        <div className="text-gray-600 hover:text-gray-800 mb-4 text-xl transition-transform duration-300 transform hover:translate-x-2 hover:scale-105 cursor-pointer">
                            Información
                        </div>
                    </Link>
                    <Link href="#portafolio">
                        <div className="text-gray-600 hover:text-gray-800 mb-4 text-xl transition-transform duration-300 transform hover:translate-x-2 hover:scale-105 cursor-pointer">
                            Portafolio
                        </div>
                    </Link>
                    <Link href="#contact">
                        <div className="text-gray-600 hover:text-gray-800 mb-4 text-xl transition-transform duration-300 transform hover:translate-x-2 hover:scale-105 cursor-pointer">
                            Contacto
                        </div>
                    </Link>
                    {/* <DarkMode /> */}
                </div>
            </div>
            <style jsx>{`
                .open .linea-1 {
                    transform: rotate(45deg) translateY(10px);
                }

                .open .linea-2 {
                    opacity: 0;
                }

                .open .linea-3 {
                    transform: rotate(-45deg) translateY(-10px);
                }
            `}</style>
        </>
    );
};

export default Header;