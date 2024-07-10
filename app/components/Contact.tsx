import React from "react";

const Contact: React.FC = () => {
    return (
    <div className="bg-white">
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
                <form data-aos="fade-up" action="#" method="post" className="space-y-4 mt-12">
                    <div>
                        <label className="block text-gray-800 mb-1 " htmlFor="nombre">Tu Nombre:</label>
                        <input 
                            type="text" 
                            id="nombre" 
                            name="nombre" 
                            required 
                            className="w-full px-4 py-2 border-b-2 border-gray-700 focus:outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-800 mb-1" htmlFor="email">Tu Telefono:</label>
                        <input 
                            type="number" 
                            id="telefono" 
                            name="telefono" 
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
                            required 
                            className="w-full px-4 py-2 border-b-2 border-gray-700 focus:outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-800 mb-1" htmlFor="mensaje">¿En qué podemos ayudarte?</label>
                        <textarea 
                            id="mensaje" 
                            name="mensaje" 
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
    );
};

export default Contact;