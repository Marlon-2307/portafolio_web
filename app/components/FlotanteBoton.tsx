import React from 'react';
import { FaAngleUp, FaFileAlt } from 'react-icons/fa';

const FlotanteBoton: React.FC = () => {

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    /* const handleCVDownload = () => {
        window.open('https://drive.google.com/file/d/1MzTZeFdWdcvr_fqYfkd-BLpeQ_JsLnck/view?usp=drive_link', '_blank');
    }; */

    return (
        <div className="fixed bottom-2 right-4 flex flex-col gap-2 items-end">
            {/* Botón de Descargar CV */}
            
            {/* Botón de Volver Arriba */}
            <button
                onClick={scrollTop}
                className="p-2 bg-transparent text-white border border-gray-700 rounded-xl shadow-lg hover:bg-gray-400 hover:text-white transition"
            >
                <FaAngleUp className='w-6 h-6' />
            </button>
        </div>
    );
};

export default FlotanteBoton;