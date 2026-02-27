"use client";

import React, { useState, useEffect } from "react";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    email: "",
    observacion: "",
  });

  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost:3000/usuarios", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error();

      setIsSuccess(true);
      setModalMessage("Mensaje enviado correctamente 🚀");

      setFormData({
        nombre: "",
        telefono: "",
        email: "",
        observacion: "",
      });
    } catch {
      setIsSuccess(false);
      setModalMessage("Ocurrió un error al enviar el mensaje.");
    } finally {
      setLoading(false);
      setModalOpen(true);
    }
  };

  return (
    <>
      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50">
          <div className="bg-gray-900 border border-gray-700 rounded-2xl p-10 max-w-md w-full text-center shadow-2xl">
            {isSuccess ? (
              <AiOutlineCheckCircle className="text-green-500 text-6xl mx-auto mb-6" />
            ) : (
              <AiOutlineCloseCircle className="text-red-500 text-6xl mx-auto mb-6" />
            )}

            <p className="text-white text-lg mb-8">{modalMessage}</p>

            <button
              onClick={() => setModalOpen(false)}
              className="px-6 py-3 bg-indigo-600 rounded-xl text-white hover:bg-indigo-700 transition"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}

      <section id="contact" className="px-6 py-24">
        <div className="w-[85%] mx-auto">
          <h2 className="text-white text-5xl font-semibold mb-16">
            Contacto
            <span className="block h-[2px] w-24 bg-gray-600 mt-3"></span>
          </h2>

          <div className="grid md:grid-cols-2 gap-16">
            {/* Info */}
            <div
              data-aos="fade-right"
              className="bg-gray-900 border border-gray-800 rounded-2xl p-10"
            >
              <p className="mb-8 text-gray-400">
                <span className="block text-white mb-1">
                  Teléfono
                </span>
                (+57) 300 6052169
              </p>

              <p className="mb-8 text-gray-400">
                <span className="block text-white mb-1">
                  Email
                </span>
                marloncolon23@gmail.com
              </p>

              <p className="text-gray-400">
                <span className="block text-white mb-1">
                  Ubicación
                </span>
                Barranquilla, Colombia
              </p>
            </div>

            {/* Form */}
            <div
              data-aos="fade-left"
              className="bg-gray-900 border border-gray-800 rounded-2xl p-10"
            >
              <form onSubmit={handleSubmit} className="space-y-10">

                {/* Nombre */}
                <div className="relative">
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    placeholder=" "
                    className="peer w-full bg-transparent border-b-2 border-gray-600 text-white py-3 focus:outline-none focus:border-indigo-500 transition"
                  />
                  <label
                    className="
                      absolute left-0
                      -top-4 text-xs
                      text-indigo-500
                      transition-all duration-300 ease-out
                      peer-placeholder-shown:top-3
                      peer-placeholder-shown:text-base
                      peer-placeholder-shown:text-gray-400
                      peer-focus:-top-4
                      peer-focus:text-xs
                      peer-focus:text-indigo-500
                    "
                  >
                    Nombre
                  </label>
                </div>

                {/* Teléfono */}
                <div className="relative">
                  <input
                    type="text"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    required
                    placeholder=" "
                    className="peer w-full bg-transparent border-b-2 border-gray-600 text-white py-3 focus:outline-none focus:border-indigo-500 transition"
                  />
                  <label
                    className="
                      absolute left-0
                      -top-4 text-xs
                      text-indigo-500
                      transition-all duration-300 ease-out
                      peer-placeholder-shown:top-3
                      peer-placeholder-shown:text-base
                      peer-placeholder-shown:text-gray-400
                      peer-focus:-top-4
                      peer-focus:text-xs
                      peer-focus:text-indigo-500
                    "
                  >
                    Teléfono
                  </label>
                </div>

                {/* Email */}
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder=" "
                    className="peer w-full bg-transparent border-b-2 border-gray-600 text-white py-3 focus:outline-none focus:border-indigo-500 transition"
                  />
                  <label
                    className="
                      absolute left-0
                      -top-4 text-xs
                      text-indigo-500
                      transition-all duration-300 ease-out
                      peer-placeholder-shown:top-3
                      peer-placeholder-shown:text-base
                      peer-placeholder-shown:text-gray-400
                      peer-focus:-top-4
                      peer-focus:text-xs
                      peer-focus:text-indigo-500
                    "
                  >
                    Email
                  </label>
                </div>

                {/* Mensaje */}
                <div className="relative">
                  <textarea
                    name="observacion"
                    value={formData.observacion}
                    onChange={handleChange}
                    required
                    placeholder=" "
                    rows={4}
                    className="peer w-full bg-transparent border-b-2 border-gray-600 text-white py-3 focus:outline-none focus:border-indigo-500 transition resize-none"
                  />
                  <label
                    className="
                      absolute left-0
                      -top-4 text-xs
                      text-indigo-500
                      transition-all duration-300 ease-out
                      peer-placeholder-shown:top-3
                      peer-placeholder-shown:text-base
                      peer-placeholder-shown:text-gray-400
                      peer-focus:-top-4
                      peer-focus:text-xs
                      peer-focus:text-indigo-500
                    "
                  >
                    Mensaje
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 border border-gray-800 rounded-xl text-white hover:bg-gray-800 transition disabled:opacity-50"
                >
                  {loading ? "Enviando..." : "Enviar"}
                </button>

              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;