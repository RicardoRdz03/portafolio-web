import React from "react";
import Navi from "./Navi";
import SobreMi from "./SobreMi";
import Habilidades from "./Habilidades";
import Proyectos from "./Proyectos";
import FooterP from "./FooterP";
import Contacto from "./Contacto";
import ProyectosDef from "./ProyectosDef";
import Certificados from "./Certificados";

function PaginaPrincipal() {
  return (
    <>
      <Navi />
      <SobreMi />
      <Habilidades />
      <ProyectosDef />
      <Certificados />
      <Contacto />
      <FooterP />
    </>
  );
}

export default PaginaPrincipal;
