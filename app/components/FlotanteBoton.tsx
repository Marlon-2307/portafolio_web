import React from 'react';
import { FaAngleUp, FaFileAlt } from 'react-icons/fa';

const FlotanteBoton: React.FC = () => {

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleCVDownload = () => {
        window.open('https://drive.google.com/file/d/1q0aZfUrKaclYG5UHrfRTQr6hh1_bf9t5/view?usp=drive_link', '_blank');
    };

    return (
        <div className="fixed bottom-2 right-4 flex flex-col gap-2 items-end">
            {/* Botón de Descargar CV */}
            <button
                onClick={handleCVDownload}
                className="flex items-center py-2 px-2 bg-white text-gray-700 rounded-sm shadow-md transition max-sm:buttom-6"
            >
                <span className="text-sm mx-2">Curriculum Vitae</span>
                <FaFileAlt className='w-6 h-6 hover:text-gray-800' />      
            </button>

            {/* Botón de Volver Arriba */}
            <button
                onClick={scrollTop}
                className="p-2 bg-white text-gray-700 rounded-sm shadow-lg hover:bg-gray-400 hover:text-white transition"
            >
                <FaAngleUp className='w-6 h-6' />
            </button>
        </div>
    );
};

export default FlotanteBoton;