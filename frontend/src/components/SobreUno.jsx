import React from "react";
import { Button, Image } from "@nextui-org/react";

function SobreUno() {
  return (
    <>
      <div className="grid grid-cols-2 gap-4 flex justify-center items-center h-screen px-8 pt-8">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row  rounded-lg ">
          <div className="col-span-1">
            <h1 className="text-6xl	 font-bold mb-4 text-[#87CEEB]	">
              <span className="text-white">
                &lt;<span className="text-red-500">/</span>&gt;
              </span>{" "}
              Bienvenido
            </h1>
            <p className="text-justify text-xl">
              Soy Ricardo, egresado de la carrera Ingeniería en Sistemas
              Computacionales con un enfoque especializado en desarrollo web,
              especialmente en el frontend. Siempre estoy dispuesto a aprender
              cosas nuevas.
            </p>
            <div className="flex justify-center pt-2 ">
              <Button className="bg-red-500	" radius="full" variant="shadow">
                Descargar CV
              </Button>
            </div>
          </div>

          <div className="col-span-1 flex justify-center">
            <Image width={350} alt="NextUI hero Image" src="astro.png" />
          </div>
        </div>
      </div>
    </>
  );
}

export default SobreUno;
