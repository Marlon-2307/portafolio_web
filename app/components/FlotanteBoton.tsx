import React, { useState } from 'react';
import { FaWhatsapp, FaAngleUp, FaFileAlt } from 'react-icons/fa';

const FlotanteBoton: React.FC = () => {
    const [showTooltip, setShowTooltip] = useState(false);

    const handleWhatsAppClick = () => {
        window.open('https://wa.me/3001234567', '_blank');
    };

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleCVDownload = () => {
        window.open('https://drive.google.com/file/d/1G7TeINvpwakbzmr8aQcm7GBrnXSjBadI/view?usp=drive_link', '_blank');
    };

    return (
        <div className="fixed bottom-6 right-4 flex flex-col gap-2 items-end">
            {/* Tooltip Condicional */}
            {(
                <div className="absolute right-12 bottom-12 w-32 p-2 text-center bg-white text-gray-800 text-sm rounded-md shadow-sm">
                    Descargar CV
                </div>
            )}

            {/* Botón de Descargar CV */}
            <button
                onClick={handleCVDownload}
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
                className="p-2 bg-white text-gray-700 rounded-full shadow-lg hover:bg-gray-800 hover:text-white transition"
            >
                <FaFileAlt className='w-6 h-6' />
            </button>

            {/* Botón de WhatsApp */}
            {/* <button
                onClick={handleWhatsAppClick}
                className="p-2 bg-white text-gray-700 rounded-full shadow-lg hover:bg-gray-800 hover:text-white transition"
            >animate-pulse
                <FaWhatsapp className='w-6 h-6' />
            </button> */}

            {/* Botón de Volver Arriba */}
            <button
                onClick={scrollTop}
                className="p-2 bg-white text-gray-700 rounded-full shadow-lg hover:bg-gray-800 hover:text-white transition"
            >
                <FaAngleUp className='w-6 h-6' />
            </button>
        </div>
    );
};

export default FlotanteBoton;