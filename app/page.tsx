"use client";

import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import About from "./components/About";
import Portafolio from "./components/Portafolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Iconos from "./components/Iconos";
import FlotanteBoton from "./components/FlotanteBoton";

const Home: React.FC = () => {
  return (
    <>
    <Header />
    <Banner />
    <About />
    <Portafolio />
    <Contact />
    <Footer />
    <Iconos />
    <FlotanteBoton />
    </>
  );
}

export default Home;
