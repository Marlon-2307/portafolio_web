import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className="fixed top-0 left-0 right-0 z-10 flex justify-around py-4 px-4 bg-white shadow-xl">
                <div>
                    <a className="text-black text-4xl" href="#"><h3>Code <span className="text-gray-700 text-lg">Mac.</span></h3></a>
                </div>  
                <nav className="hidden md:flex items-center gap-8">
                    <a href="#" className="hover:text-gray-500">Inicio</a>
                    <a href="#" className="hover:text-gray-500">Infomacion</a>                          
                    <a href="#" className="hover:text-gray-500">Tegnologias</a>
                    <a href="#" className="hover:text-gray-500">Contacto</a>
                </nav>
                <div className="md:hidden text-3xl p-0 m-0 cursor-pointer z-50" onClick={toggleMenu}>
                    <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
                </div>
            </div>
            {/* Mobile Menu */}
            <div className={`fixed top-0 left-0 w-full h-full bg-white z-20 transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-500 ease-in-out`}>
                <div className="flex flex-col items-center justify-center h-full">
                    <a href="#" className="hover:text-gray-500 mb-4 text-xl" onClick={toggleMenu}>Inicio</a>
                    <a href="#" className="hover:text-gray-500 mb-4 text-xl" onClick={toggleMenu}>Infomacion</a>                          
                    <a href="#" className="hover:text-gray-500 mb-4 text-xl" onClick={toggleMenu}>Tegnologias</a>
                    <a href="#" className="hover:text-gray-500 mb-4 text-xl" onClick={toggleMenu}>Contacto</a>
                </div>
            </div>
        </>
    );
};

export default Header;