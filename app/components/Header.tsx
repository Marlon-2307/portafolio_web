import React, { useState } from "react";
import Link from "next/link";

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {/* Escritorio Menu */}
            <div className="fixed top-0 left-0 right-0 z-10 flex justify-between items-center py-6 px-16 max-sm:px-6 bg-white shadow-md">
                <div>
                    <a className="text-gray-900 hover:text-gray-700 text-4xl" href="#"><h3>Marlon <span className="text-gray-500 text-xl">Colon.</span></h3></a>
                </div>  
                <nav className="hidden md:flex items-center gap-10">
                    <Link href="/">
                        <div className="text-gray-600 hover:text-gray-800 transition-transform duration-300 transform hover:translate-y-2 hover:scale-105">Inicio</div>
                    </Link>
                    <Link href="#about">
                        <div className="text-gray-600 hover:text-gray-800 transition-transform duration-300 transform hover:translate-y-2 hover:scale-105">Infomacion</div> 
                    </Link>
                    <Link href="#portafolio">
                        <div className="text-gray-600 hover:text-gray-800 transition-transform duration-300 transform hover:translate-y-2 hover:scale-105">Proyectos</div>
                    </Link>                
                    <Link href="#contact">
                        <div className="text-gray-600 hover:text-gray-800 transition-transform duration-300 transform hover:translate-y-2 hover:scale-105">Contacto</div>
                    </Link>
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