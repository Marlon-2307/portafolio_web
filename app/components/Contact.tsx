import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        nombre: "",
        telefono: "",
        email: "",
        observacion: ""
    });

    const [modalOpen, setModalOpen] = useState(false); 
    const [modalMessage, setModalMessage] = useState(''); 
    const [isCheck, setIsCheck] = useState(false); 
    const [redirectOnClose, setRedirectOnClose] = useState(false); 

    const router = useRouter();

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        try {
            const response = await fetch("http://localhost:3000/usuarios", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error("Error al enviar el mensaje");
            }

            const data = await response.json();
            console.log("Mensaje enviado:", data);
            setIsCheck(true);
            setModalMessage("Información enviada con éxito"); 
            setModalOpen(true);
            setRedirectOnClose(true); 
        } catch (error) {
            console.error("Error al enviar el mensaje:", error);
            setIsCheck(false);
            setModalMessage("Error al enviar información"); 
            setModalOpen(true);
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const closeModal = () => {
        setModalOpen(false);
        if (redirectOnClose) {
            router.push('/');
        }
    }

    return (
        <>
            {modalOpen && (
                <div className="bg-black bg-opacity-70 fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
                    <div className="relative w-auto max-w-3xl mx-auto my-6">
                        <div className="bg-white rounded-lg shadow-lg outline-none focus:outline-none">
                            <div className="relative p-6 flex-auto flex flex-col items-center justify-center">
                                {isCheck ? (
                                    <AiOutlineCheckCircle className="text-gray-600 text-6xl mb-4" />
                                ) : (
                                    <AiOutlineCloseCircle className="text-red-600 text-6xl mb-4" />
                                )}
                                <p className="my-4 text-black font-semibold text-center text-lg leading-relaxed">{modalMessage}</p>
                            </div>
                            <div className="flex justify-center items-center p-6 rounded-b">
                                <button
                                    className="bg-gray-700 text-white w-80 mx-auto font-semibold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                                    type="button"
                                    onClick={closeModal}
                                >
                                    Volver al Inicio
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <div className="w-[80%] mx-auto py-12">    
            <h3 className="text-5xl mb-12 text-gray-900 font-semibold max-md:text-center">Contacto <span><hr className="text-gray-800 w-[30%]" /></span></h3>
                <div className="grid grid-cols-[1fr_2fr] gap-4 w-[90%] mx-auto max-md:block">      
                    <div className="w-[100%] max-md:w-full mt-6 max-md:mb-14">                         
                        <p className="mb-6 text-gray-800">
                            Teléfono: <br />
                            <span className="text-gray-500">(+57) 300 6052169</span>
                        </p>
                        <p className="mb-6 text-gray-800">
                            Email: <br />
                            <span className="text-gray-500">marloncolon23@gmail.com</span>
                        </p>
                        <p className="text-gray-800">
                            Vivo en: <br />
                            <span className="text-gray-500">Barranquilla, Colombia.</span>
                        </p>
                    </div>
                    <div className="w-[100%] max-md:w-full">
                        <form onSubmit={handleSubmit} className="space-y-4 mt-6 max-md:mt-2">
                            <div>
                                <label className="block text-gray-800 mb-1" htmlFor="nombre">Tu Nombre:</label>
                                <input
                                    type="text"
                                    id="nombre"
                                    name="nombre"
                                    value={formData.nombre}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border-b-2 border-gray-700 focus:outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-800 mb-1" htmlFor="telefono">Tu Teléfono:</label>
                                <input
                                    type="text"
                                    id="telefono"
                                    name="telefono"
                                    value={formData.telefono}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border-b-2 border-gray-700 focus:outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-800 mb-1" htmlFor="email">Tu Email:</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border-b-2 border-gray-700 focus:outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-800 mb-1" htmlFor="observacion">Tu Mensaje:</label>
                                <textarea
                                    id="observacion"
                                    name="observacion"
                                    value={formData.observacion}
                                    onChange={handleChange}
                                    rows={4}
                                    required
                                    className="w-full px-4 py-2 border-b-2 border-gray-700 focus:outline-none resize-none"
                                ></textarea>
                            </div>
                            <div className="flex justify-end">
                                <input
                                    type="submit"
                                    value="Enviar"
                                    className="w-[50%] max-md:w-full border border-gray-700 text-gray-800 hover:text-white py-4 rounded-sm cursor-pointer hover:bg-gray-800 transition duration-300"
                                />
                            </div>
                        </form>
                    </div>
                </div> 
            </div>
        </>
    );
};

export default Contact;