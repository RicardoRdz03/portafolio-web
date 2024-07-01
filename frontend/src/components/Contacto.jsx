import React from "react";
import { useState } from "react";
import { Button, Input, Textarea } from "@nextui-org/react";
import axios from "axios";

function Contacto() {
  const alerta = () => {
    alert("Enviando correo, por favor espere a que recargue la página");
  };

  return (
    <>
      <div id="contacto" className=" pt-16 pb-16 ">
        <div className="flex justify-center">
          <h1
            id="titulo"
            className="text-5xl md:text-6xl text-[#ff4c4c] font-bold mb-6"
          >
            CONTACTO
          </h1>
        </div>
        <div className="flex justify-center">
          <div className=" py-6  rounded-lg w-screen sm:w-screen md:w-10/12 lg:w-1/2 xl:w-1/2 ">
            <div className="flex justify-center ">
              <p className="text-center">
                Ponte en contacto conmigo a traves del siguiente formulario
              </p>
            </div>
            <form
              action="https://formsubmit.co/ricardo.arteaga.rdz@gmail.com"
              method="POST"
              onSubmit={alerta}
            >
              <div className="flex justify-center my-2 mx-6">
                <Input type="text" name="name" label="Nombre" />
              </div>
              <div className="flex justify-center my-2 mx-6">
                <Input type="email" name="email" label="Correo electronico" />
              </div>
              <div className="flex justify-center my-2 mx-6">
                <Input type="text" name="subject" label="Asunto" />
              </div>
              <div className="flex justify-center my-2 mx-6">
                <Textarea name="message" label="Mensaje" />
              </div>
              <div className="flex justify-center mt-4">
                <button
                  type="submit"
                  className="flex justify-center items-center"
                  id="botones-underlined"
                >
                  Enviar
                  <div className="ml-2 flex items-center">
                    <i className="fi fi-ss-paper-plane-top pt-1"></i>
                  </div>
                </button>
              </div>
              <div>
                <input
                  type="hidden"
                  name="_next"
                  value="https://rick-portafolio.netlify.app"
                />
                <input type="hidden" name="_captcha" value="false" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contacto;
