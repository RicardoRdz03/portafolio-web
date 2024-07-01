import React, { useEffect } from "react";
import { Image, Chip, Button, Divider } from "@nextui-org/react";
import "./estilos.css";
import Aos from "aos";
import { useNavigate, Link } from "react-router-dom";

function ProyectosDef() {
  const navigate = useNavigate();

  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <div id="proyectos" className="my-16">
        <div className=" pb-16">
          <div className="flex justify-center pt-16 pb-16">
            <h1
              id="titulo"
              className="text-5xl md:text-6xl text-[#ff4c4c] font-bold"
            >
              PROYECTOS
            </h1>
          </div>
          <div className="mb-8 px-2 md:px-28">
            <p className="text-sm md:text-base text-center text-black italic">
              <span className="font-bold italic">Nota:</span> Los proyectos que
              cuentan con backend fueron alojados en un servidor gratuito, favor
              de ser pacientes al momento de realizar una petición. Puede tardar
              en responder la primera vez.
            </p>
          </div>

          <div className=" rounded-lg">
            <div className="py-5 px-2">
              <div className="grid grid-cols-2 ">
                <div className="col-span-2 sm:col-span-2 md:col-span-1 lg:col-span-1 xl:col-span-1 flex justify-center ">
                  <Image
                    style={{ border: "1px solid #000" }}
                    width={500}
                    alt="NextUI hero Image"
                    src="/proyecto5.png"
                  />
                </div>
                <div className="col-span-2 sm:col-span-2 md:col-span-1 lg:col-span-1 xl:col-span-1">
                  <div className="my-4 flex justify-center">
                    <h1 className="text-[#1b212e] text-xl font-bold text-center">
                      Login - Aplicación Full Stack
                    </h1>
                  </div>
                  <div className="mb-4 flex justify-center">
                    <p className="text-center text-sm px-5">
                      Login responsivo funcional con página de inicio de sesión,
                      página de registro y sesión de usuarios
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <Chip className="m-1 text-[#ca4242]" variant="light">
                      HTML
                    </Chip>
                    <Chip className="m-1 text-[#ca4242]" variant="light">
                      CSS
                    </Chip>
                    <Chip className="m-1 text-[#ca4242]" variant="light">
                      React
                    </Chip>
                    <Chip className="m-1 text-[#ca4242]" variant="light">
                      Node.js
                    </Chip>
                  </div>
                  <div className="flex justify-center">
                    <Chip className="m-1 text-[#ca4242]" variant="light">
                      MySQL
                    </Chip>
                    <Chip className="m-1 text-[#ca4242]" variant="light">
                      TailwindCSS
                    </Chip>
                  </div>

                  <div className="mt-4 flex justify-center">
                    <a
                      target="_blank"
                      href="https://login-responsive-rick.netlify.app"
                    >
                      <button id="botones">
                        <i className="fi fi-rr-site-alt text-base pt-2"></i>{" "}
                        Demostración
                      </button>
                    </a>
                    <a
                      target="_blank"
                      href="https://github.com/RicardoRdz03/Login-responsivo---Full-Stack"
                    >
                      <button id="botones-underlined">
                        <i className="fi fi-brands-github text-base pt-2"></i>{" "}
                        Repositorio
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Divider />
          <div className=" rounded-lg">
            <div className="py-5 px-2">
              <div className="grid grid-cols-2 ">
                <div className="col-span-2 sm:col-span-2 md:col-span-1 lg:col-span-1 xl:col-span-1 flex justify-center ">
                  <Image
                    style={{ border: "1px solid #000" }}
                    width={500}
                    alt="NextUI hero Image"
                    src="/proyecto1.png"
                  />
                </div>
                <div className="col-span-2 sm:col-span-2 md:col-span-1 lg:col-span-1 xl:col-span-1">
                  <div className="my-4 flex justify-center">
                    <h1 className="text-[#1b212e] text-xl font-bold text-center">
                      CRUD de gestión de empleados
                    </h1>
                  </div>
                  <div className="mb-4 flex justify-center px-5">
                    <p className="text-center text-sm">
                      Página web realizada con Node.js estableciendo conexión
                      con una base de datos, muestra en pantalla los datos,
                      puede agregar, eliminar y modificar.
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <Chip className="m-1 text-[#ca4242]" variant="light">
                      HTML
                    </Chip>
                    <Chip className="m-1 text-[#ca4242]" variant="light">
                      React
                    </Chip>
                    <Chip className="m-1 text-[#ca4242]" variant="light">
                      Node.js
                    </Chip>
                  </div>
                  <div className="flex justify-center">
                    <Chip className="m-1 text-[#ca4242]" variant="light">
                      MySQL
                    </Chip>
                    <Chip className="m-1 text-[#ca4242]" variant="light">
                      Bootstrap
                    </Chip>
                  </div>

                  <div className="mt-4 flex justify-center">
                    <a
                      target="_blank"
                      href="https://crud-react-node-mysql.netlify.app"
                    >
                      <button id="botones">
                        <i className="fi fi-rr-site-alt text-base pt-2"></i>{" "}
                        Demostración
                      </button>
                    </a>
                    <a
                      target="_blank"
                      href="https://github.com/RicardoRdz03/crud-react-node-mysql-bootstrap"
                    >
                      <button id="botones-underlined">
                        <i className="fi fi-brands-github text-base pt-2"></i>{" "}
                        Repositorio
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-3">
            <a href="/proyectos">
              <button id="botones">
                VER TODOS LOS PROYECTOS{" "}
                <i className="fi fi-sr-folder-open pt-1"></i>
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProyectosDef;
