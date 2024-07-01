import React from "react";
import { Card, CardBody, CardHeader, Chip, Image } from "@nextui-org/react";
function Proyectos() {
  return (
    <>
      <div id="proyectos" className="pt-16 pb-16">
        <div className="flex justify-center pb-6">
          <h1 className="text-4xl font-bold text-[#F39D42]">PROYECTOS</h1>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <div className="col-span-1 "></div>
          <div className="col-span-3 bg-stone-900 rounded-lg pt-4 sm:col-span-3 md:col-span-3 lg:col-span-1 xl:col-span-1 mx-4 sm:mx-4 md:mx-4 lg:mx-auto xl:mx-auto">
            <div className="flex justify-center">
              <h1 className="text-xl font-bold">CRUD</h1>
            </div>
            <div className="flex justify-center m-2">
              <p className="text-sm text-center">
                Página web realizada con Node.js estableciendo conexión con una
                base de datos, muestra en pantalla los datos, puede agregar,
                eliminar y modificar.
              </p>
            </div>

            <div className="flex justify-center mt-4 ">
              <Image
                width={"100%"}
                alt="NextUI hero Image"
                src="/proyecto1.png"
              />
            </div>
          </div>
          <div className="col-span-1"></div>
        </div>
      </div>
    </>
  );
}
export default Proyectos;
