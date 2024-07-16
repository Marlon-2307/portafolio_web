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
            <div className="fixed top-0 left-0 right-0 z-10 flex justify-around py-4 px-4 bg-white shadow-xl">
                <div>
                    <a className="text-black text-4xl" href="#"><h3>Code <span className="text-gray-700 text-lg">Mac.</span></h3></a>
                </div>  
                <nav className="hidden md:flex items-center gap-8">
                    <Link href="/">
                        <div className="hover:text-gray-500 border-b-2 border-gray-800">Inicio</div>
                    </Link>
                    <Link href="#about">
                        <div className="hover:text-gray-500">Infomacion</div> 
                    </Link>
                    <Link href="#skill">
                        <div className="hover:text-gray-500">Tegnologias</div>
                    </Link>                
                    <Link href="#contact">
                        <div className="hover:text-gray-500">Contacto</div>
                    </Link>
                </nav>
                <div className="md:hidden text-3xl p-0 m-0 cursor-pointer z-50" onClick={toggleMenu}>
                    <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
                </div>
            </div>
            {/* Movil Menu */}
            <div className={`fixed top-16 left-0 w-72 h-full bg-white z-20 transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-700 ease-in-out`}>
                <div className="flex flex-col pl-12 pt-20 h-full">
                <Link href="/">
                        <div className="hover:text-gray-500 mb-4 text-xl" onClick={toggleMenu}>Inicio</div>
                    </Link>
                    <Link href="#about">
                        <div className="hover:text-gray-500 mb-4 text-xl" onClick={toggleMenu}>Infomacion</div> 
                    </Link>
                    <Link href="#skill">
                        <div className="hover:text-gray-500 mb-4 text-xl" onClick={toggleMenu}>Tegnologias</div>
                    </Link>                
                    <Link href="#contact">
                        <div className="hover:text-gray-500 mb-4 text-xl" onClick={toggleMenu}>Contacto</div>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Header;