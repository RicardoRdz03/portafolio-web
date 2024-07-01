import React from "react";
import { Button, Image } from "@nextui-org/react";

function Certificados() {
  return (
    <>
      <div id="certificaciones" className=" bg-[#1b212e] pt-16">
        <div className="flex justify-center">
          <h1
            id="titulo"
            className="text-5xl md:text-6xl text-[#ff4c4c] font-bold pb-16"
          >
            CERTIFICACIONES
          </h1>
        </div>

        <div className="flex justify-center">
          <div className="w-96 pb-16 px-2">
            <div className="flex justify-center">
              <Image src="/certificado1.png" width={"100%"} />
            </div>
            <div className="flex justify-center">
              <h1 className=" text-white text-xl text-center">
                Responsive Web Desgin - freeCodeCamp
              </h1>
            </div>
            <div className="flex justify-center mt-3">
              <a
                target="_blank"
                href="https://www.freecodecamp.org/certification/RicardoAntonioArteagaRodriguez/responsive-web-design"
              >
                <button className="flex justify-center" id="botones">
                  Ver credencial
                  <div className="ml-2">
                    <i className="fi fi-rr-share-square mt-1"></i>
                  </div>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Certificados;
