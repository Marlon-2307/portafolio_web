import React from 'react';
import { FaWhatsapp, FaAngleUp, FaFileAlt } from 'react-icons/fa';

const FlotanteBoton: React.FC = () => {

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleCVDownload = () => {
        window.open('https://drive.google.com/file/d/1G7TeINvpwakbzmr8aQcm7GBrnXSjBadI/view?usp=drive_link', '_blank');
    };

    return (
        <div className="fixed bottom-6 right-4 flex flex-col gap-2 items-end">
            {/* Botón de Descargar CV */}
            <button
                onClick={handleCVDownload}
                className="flex items-center py-2 px-2 bg-white text-gray-700 rounded-sm shadow-md transition max-sm:buttom-6"
            >
                <span className="text-sm mx-2">Descargar CV</span>
                <FaFileAlt className='w-6 h-6 hover:text-gray-800' />      
            </button>

            {/* Botón de Volver Arriba */}
            <button
                onClick={scrollTop}
                className="max-sm:hidden p-2 bg-white text-gray-700 rounded-full shadow-lg hover:bg-gray-800 hover:text-white transition"
            >
                <FaAngleUp className='w-6 h-6' />
            </button>
        </div>
    );
};

export default FlotanteBoton;