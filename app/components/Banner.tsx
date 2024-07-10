import React from "react";

const Banner: React.FC = () => {
    return (
        <>
          <div className="relative h-screen">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("/fondo1.jpg")' }}>           
            </div>
            <div className="relative flex flex-col justify-center items-center h-full text-white">
                <div className="textos text-center w-[65%] mx-auto">
                    <h1 className="text-4xl md:text-5xl text-gray-900 uppercase">
                        Frontend<span className="text-3xl md:text-3xl"> Developer.</span>
                    </h1>
                    <p className="text-md md:text-md mt-4 mb-12 md:mt-6 text-gray-800">
                        ¡Hola! Soy Marlon Colon, un desarrollador web apasionado y orientado a resultados, que administra sitios web y aplicaciones que conducen al éxito del producto general.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-4 justify-end max-sm:flex-col max-sm:items-stretch">
                        <a href="#" className="bg-white hover:bg-gray-700 text-black hover:text-white py-3 px-10 rounded-sm max-sm:w-full">
                            Portafolio
                        </a>
                        <a href="https://drive.google.com/file/d/1scHgEEyrXPohoduNBupx0Pbn8QfFdvka/view?usp=drive_link" className="bg-gray-600 text-white hover:bg-gray-700 py-3 px-6 rounded-sm max-sm:w-full">
                            Descargar CV
                        </a>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Banner;