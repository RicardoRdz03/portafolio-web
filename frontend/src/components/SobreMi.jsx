import React from "react";
import { Button, Image } from "@nextui-org/react";
import "@flaticon/flaticon-uicons/css/all/all.css";
import { useNavigate } from "react-router-dom";

function SobreMi() {
  const navigate = useNavigate();
  return (
    <>
      <div className=" mb-16">
        <div
          style={{ height: "90vh" }}
          className="flex justify-center items-center px-8"
        >
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row  rounded-lg ">
            <div className="lg:w-1/2 lg:mt-0 flex justify-center">
              <Image width={300} alt="NextUI hero Image" src="astro.png" />
            </div>
            <div className="lg:w-1/2  flex items-center justify-center">
              <div>
                <h1
                  id="titulo"
                  className="text-[#ff4c4c] text-6xl	text-center mb-4"
                >
                  ¡Hola!
                </h1>
                <p className="text-sm md:text-base py-3 text-center">
                  Soy Ricardo, Ingeniero en Sistemas Computacionales, con
                  conocimientos en desarrollo web y experiencia práctica en
                  HTML, CSS, JavaScript, React, Node.js, y otras tecnologías
                  relevantes. Siempre dispuesto a aprender algo nuevo.
                </p>
                <div className=" flex justify-center mt-4">
                  <button
                    onClick={() => {
                      navigate("/cv");
                    }}
                    id="botones"
                  >
                    <i className="fi fi-rr-download"></i> Descargar CV
                  </button>

                  <a href="#contacto">
                    <button id="botones-underlined">
                      <i className="fi fi-rr-envelope pt-1"></i> Contacto
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SobreMi;
