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

    const [modalOpen, setModalOpen] = useState(false); // Control de apertura de ventana modal
    const [modalMessage, setModalMessage] = useState(''); // Mensaje que muestra en la ventana modal
    const [isCheck, setIsCheck] = useState(false); // Visualizacion del icono check o close
    const [redirectOnClose, setRedirectOnClose] = useState(false); // Controlar la redirección después de cerrar la ventana modal

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
            setModalMessage("Informacion enviada con exito"); 
            setModalOpen(true);
            setRedirectOnClose(true); 
        } catch (error) {
            console.error("Error al enviar el mensaje:", error);
            setIsCheck(false);
            setModalMessage("Error al enviar informacion"); 
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
                                    Cerrar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div id="contact">
                <div className="flex flex-col md:flex-row p-6 gap-12 w-[85%] mx-auto py-20">
                    <div className="md:w-1/3 mb-6 md:mb-0">
                        <div className="text-white">
                            <h3 className="text-2xl mb-4 text-black font-semibold">Mantengámonos en contacto</h3>
                            <p className="mb-2 text-gray-800">
                                Teléfono: <br />
                                <span className="text-gray-500">(+57) 300 6052169</span>
                            </p>
                            <p className="mb-2 text-gray-800">
                                Email: <br />
                                <span className="text-gray-500">marloncolon23@gmail.com</span>
                            </p>
                            <p className="text-gray-800">
                                Vivo en: <br />
                                <span className="text-gray-500">Barranquilla, Colombia.</span>
                            </p>
                        </div>
                    </div>
                    <div className="md:w-2/3">
                        <form onSubmit={handleSubmit} data-aos="fade-up" action="#" method="post" className="space-y-4 mt-12">
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
                                <label className="block text-gray-800 mb-1" htmlFor="telefono">Tu Telefono:</label>
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
                                <label className="block text-gray-800 mb-1" htmlFor="mensaje">Tu Mensaje:</label>
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
                            <div>
                                <input
                                    type="submit"
                                    value="Enviar"
                                    className="w-full bg-gray-600 text-white py-2 rounded-sm cursor-pointer hover:bg-gray-700 transition duration-300 uppercase"
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