import React from "react";
import { FaEnvelope, FaLinkedin, FaTwitter, FaGithub, FaWhatsapp } from "react-icons/fa";

const Iconos: React.FC = () => {
    return (
        <div className="fixed top-3/4 left-0 transform -translate-y-1/2 flex flex-col items-center p-2 bg-white z-10 transition-left duration-500 ease-in-out shadow-md rounded-sm">
            <a href="mailto:marloncolon23@gmail.com" className="text-gray-700 hover:text-gray-900 mb-4">
                <FaEnvelope className="w-6 h-6" />
            </a>
            <a href="https://wa.me/3006052169" className="text-gray-700 hover:text-gray-900 mb-4">
                <FaWhatsapp className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/marlon-colon-504aa0271/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900 mb-4">
                <FaLinkedin className="w-6 h-6" />
            </a>
            <a href="https://twitter.com/MarlonColon3" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900 mb-4">
                <FaTwitter className="w-6 h-6" />
            </a>
            <a href="https://github.com/Marlon-2307" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900">
                <FaGithub className="w-6 h-6" />
            </a>
        </div>
    );
}

export default Iconos;