import React from "react";
import "../index.css";
import { Divider } from "@nextui-org/react";

function FooterP() {
  return (
    <footer>
      <div className="py-8 bg-neutral-950">
        <div className="flex justify-center">
          <a href="https://github.com/RicardoRdz03">
            <i
              id="icono"
              className="text-white fi fi-brands-github text-3xl mx-4"
            ></i>
          </a>
          <a href="https://www.linkedin.com/in/ricardo-antonio-arteaga-rodríguez-995bbb304/">
            <i
              id="icono"
              className="text-white fi fi-brands-linkedin text-3xl mx-4"
            ></i>
          </a>
        </div>
        <div className="flex justify-center items-center pt-9">
          <div>
            <a href="mailto:ricardo.arteaga.rdz@gmail.com">
              <i className="text-white fi fi-sr-envelope text-3xl mx-4"></i>
            </a>
          </div>
          <Divider orientation="vertical" />
          <div>
            <p className="text-white">ricardo.arteaga.rdz@gmail.com</p>
          </div>
        </div>
        <div className="flex justify-center mt-4 py-4">
          <p className="text-white">
            Hecho por <span className="text-[#F39D42]">Ricardo Arteaga</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
export default FooterP;
