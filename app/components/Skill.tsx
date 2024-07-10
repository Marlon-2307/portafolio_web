import React from "react";
import Image from "next/image";

const Skill: React.FC = () => {
    return (
        <>
        <div className="py-10">
            <h1 className="text-gray-900 text-3xl font-semibold w-[80%] mx-auto max-sm:text-center">Tegnologias</h1>
            <div className="flex justify-center gap-12 py-14 flex-wrap max-sm:grid-cols-3 w-[80%] mx-auto">
                {[
                    { src: "/img/Logo-Git.png", alt: "Logo-git" },
                    { src: "/img/Logo-html-5.webp", alt: "Logo-HTML5" },
                    { src: "/img/Logo-css-3.svg", alt: "Logo-CSS3" },
                    { src: "/img/Logo-Sass.png", alt: "Logo-Sass" },
                    { src: "/img/tailwindcss.webp", alt: "Logo-tailwindcss" },
                    { src: "/img/JavaScript.webp", alt: "Logo-javascript" },
                    { src: "/img/typescrpt.webp", alt: "Logo-Typescript" },
                    { src: "/img/Logo-react.webp", alt: "Logo-react" },
                    { src: "/img/next-js.png", alt: "Logo-nextjs" },

                ].map((logo, index) => (
                    <div key={index} className="relative h-8 w-10 grayscale hover:grayscale-0 transition duration-300">
                        <Image src={logo.src} alt={logo.alt} layout="fill" objectFit="contain" />
                    </div>
                ))}
            </div>
        </div>
    <hr className="text-gray-100 w-[80%] mx-auto"/>
    </>
    );
};

export default Skill;