import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
    return (
        <>
        <Link href="https://marloncolon.site">
            <div className="p-16 bg-black">
                <h4 className="text-white">© 2024 <span className="text-gray-400 underline cursor-pointer">marloncolon.site</span> Todos los Derechos Reservados.</h4>
            </div>
         </Link>
        </>
    )
}

export default Footer; 