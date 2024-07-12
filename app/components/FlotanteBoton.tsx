import { FaWhatsapp, FaAngleUp } from 'react-icons/fa';
import { useState } from 'react';

const handleWhatsAppClick = () => {
    window.open('https://wa.me/3006052169', '_blank');
};

const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
};

const FlotanteBoton: React.FC = () => {
    const [showTooltip, setShowTooltip] = useState(false); 

    return (
        <div className="fixed bottom-4 right-4 flex flex-col gap-2 items-end">

            <div className="relative flex flex-col items-center group">
                <button
                    id="btnWhatsApp"
                    onClick={handleWhatsAppClick}
                    onMouseEnter={() => setShowTooltip(true)} 
                    onMouseLeave={() => setShowTooltip(false)} 
                    className="p-2 bg-gray-600 text-white rounded-full shadow-lg hover:bg-gray-800 transition"
                >
                    <FaWhatsapp className='w-6 h-6' />
                </button>

                {showTooltip && (
                    <div className="absolute bottom-4 right-10 mb-2 w-56 p-2 bg-white text-black text-sm rounded-md shadow-md">
                        ¿En qué podemos ayudarte?
                    </div>
                )}
            </div>
            
            <button
                onClick={scrollTop}
                id="boton-top"
                className="p-2 bg-gray-600 text-white rounded-full shadow-md hover:bg-gray-800 transition"
            >
                <FaAngleUp className='w-6 h-6' /> 
            </button>
        </div>
    );
};

export default FlotanteBoton;