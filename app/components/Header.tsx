import React, { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {/* Escritorio Menu */}
            <div className="fixed top-0 left-0 right-0 z-10 flex justify-between items-center py-6 px-16 max-sm:px-6 bg-white shadow-sm">
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
                        <div className="text-gray-600 hover:text-gray-800 transition-transform duration-300 transform hover:translate-y-2 hover:scale-105">Portafolio</div>
                    </Link>                
                    <Link href="#contact">
                        <div className="text-gray-600 hover:text-gray-800 transition-transform duration-300 transform hover:translate-y-2 hover:scale-105">Contacto</div>
                    </Link>
                </nav>
                <div className="md:hidden text-3xl p-0 m-0 cursor-pointer z-50" onClick={toggleMenu}>
                    <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
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
        </>
    );
};

export default Header;