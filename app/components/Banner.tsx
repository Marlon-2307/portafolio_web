import React from "react";
import Link from "next/link";

const Banner: React.FC = () => {
    return (
        <>
          <div className="relative h-screen">
            <div className="absolute inset-0 bg-parallax bg-fixed bg-cover bg-center">           
            </div>
            <div className="relative flex flex-col justify-center items-center h-full text-white">
                <div className="textos text-center w-[65%] mx-auto">
                    <h1 className="text-4xl md:text-6xl text-gray-900">
                    Developer<span className="text-3xl md:text-3xl"> Web.</span>
                    </h1>
                    <p className="text-lg md:text-md mt-4 mb-12 md:mt-6 text-gray-800">
                        ¡Hola! Soy Marlon Colon, un desarrollador web apasionado y orientado a resultados, que administra sitios web y aplicaciones que conducen al éxito del producto general.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-4 justify-end max-sm:flex-col max-sm:items-stretch">
                        <Link href="#portafolio">
                            <div className="bg-white border border-gray-500 hover:bg-gray-700 text-black hover:text-white py-3 px-10 rounded-sm max-sm:w-full">
                                Portafolio
                            </div>
                        </Link>
                        <Link href="https://drive.google.com/file/d/1scHgEEyrXPohoduNBupx0Pbn8QfFdvka/view?usp=drive_link">
                            <div className="bg-gray-600 text-white hover:bg-gray-700 py-3 px-6 rounded-sm max-sm:w-full">
                                Descargar CV
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Banner;