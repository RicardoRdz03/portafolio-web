import React from "react";
import {
  Image,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Chip,
  Button,
} from "@nextui-org/react";
import FooterP from "./FooterP";
import { useNavigate } from "react-router-dom";
import "./estilos.css";

function ProyectosPage2() {
  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  return (
    <>
      <Navbar isBlurred={true} onMenuOpenChange={setIsMenuOpen}>
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand>
            <a
              id="mano"
              onClick={() => {
                navigate("/");
              }}
            >
              <p className="text-2xl font-bold text-inherit">
                MI <span className="text-[#F39D42]">PORTAFOLIO</span>
              </p>
            </a>
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem isActive>
            <Link
              id="mano"
              color="foreground"
              onClick={() => {
                navigate("/");
              }}
            >
              Regresar al inicio
            </Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu className="flex justify-center items-center h-screen">
          <NavbarMenuItem className="my-8">
            <Link className="w-full text-inherit	" href="/" size="lg">
              Regresar al inicio
            </Link>
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>

      <div className="">
        <div className=" bg-neutral-100 ">
          <div className="py-5 px-2">
            <div className="grid grid-cols-2 ">
              <div className="col-span-2 sm:col-span-2 md:col-span-1 lg:col-span-1 xl:col-span-1 flex justify-center ">
                <Image
                  style={{ border: "1px solid #000" }}
                  width={500}
                  alt="NextUI hero Image"
                  src="/proyecto6.png"
                />
              </div>
              <div className="col-span-2 sm:col-span-2 md:col-span-1 lg:col-span-1 xl:col-span-1">
                <div className="my-4 flex justify-center">
                  <h1 className="text-[#1b212e] text-xl font-bold text-center">
                    Admin Dashboard - Frontend
                  </h1>
                </div>
                <div className="mb-4 flex justify-center px-5">
                  <p className="text-center text-sm">
                    Página web de un panel de administración utilizando solo
                    HTML y CSS con un estilo limpio y una buena paleta de
                    colores.
                  </p>
                </div>
                <div className="flex justify-center">
                  <Chip className="m-1 text-[#ca4242]" variant="light">
                    HTML
                  </Chip>
                  <Chip className="m-1 text-[#ca4242]" variant="light">
                    CSS
                  </Chip>
                </div>

                <div className="mt-4 flex justify-center">
                  <a
                    target="_blank"
                    href="https://ricardordz03.github.io/Dashboard-Frontend/"
                  >
                    <button id="botones">
                      <i className="fi fi-rr-site-alt text-base pt-2"></i>{" "}
                      Demostración
                    </button>
                  </a>
                  <a
                    target="_blank"
                    href="https://github.com/RicardoRdz03/Dashboard-Frontend"
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
                  <h1 className="text-xl font-bold text-center">
                    CRUD de gestión de empleados
                  </h1>
                </div>
                <div className="mb-4 flex justify-center px-5">
                  <p className="text-center text-sm">
                    Página web realizada con Node.js estableciendo conexión con
                    una base de datos, muestra en pantalla los datos, puede
                    agregar, eliminar y modificar.
                  </p>
                </div>
                <div className="flex justify-center">
                  <Chip
                    className="text-[#ca4242]"
                    variant="light"
                    color="warning"
                  >
                    HTML
                  </Chip>
                  <Chip
                    className="text-[#ca4242]"
                    variant="light"
                    color="warning"
                  >
                    React
                  </Chip>
                  <Chip
                    className="text-[#ca4242]"
                    variant="light"
                    color="warning"
                  >
                    Node.js
                  </Chip>
                </div>
                <div className="flex justify-center">
                  <Chip
                    className="text-[#ca4242]"
                    variant="light"
                    color="warning"
                  >
                    MySQL
                  </Chip>
                  <Chip
                    className="text-[#ca4242]"
                    variant="light"
                    color="warning"
                  >
                    Bootstrap
                  </Chip>
                </div>

                <div className="mt-4 flex justify-center">
                  <a
                    target="_blank"
                    href="https://crud-react-node-mysql.netlify.app"
                  >
                    <button
                      id="botones"
                      className="flex justify-center items-center"
                    >
                      <div className="flex items-center mr-2">
                        <i className="fi fi-rr-site-alt text-base pt-2"></i>
                      </div>
                      Demostración
                    </button>
                  </a>
                  <a
                    target="_blank"
                    href="https://github.com/RicardoRdz03/crud-react-node-mysql-bootstrap"
                  >
                    <button
                      id="botones-underlined"
                      className="flex justify-center items-center"
                    >
                      Repositorio
                      <div className="flex items-center ml-2">
                        <i className="fi fi-brands-github text-base pt-2"></i>
                      </div>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" bg-neutral-100 ">
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
                  <h1 className="text-xl font-bold text-center">
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
                  <Chip
                    className="text-[#ca4242]"
                    variant="light"
                    color="warning"
                  >
                    HTML
                  </Chip>
                  <Chip
                    className="text-[#ca4242]"
                    variant="light"
                    color="warning"
                  >
                    CSS
                  </Chip>
                  <Chip
                    className="text-[#ca4242]"
                    variant="light"
                    color="warning"
                  >
                    React
                  </Chip>
                  <Chip
                    className="text-[#ca4242]"
                    variant="light"
                    color="warning"
                  >
                    Node.js
                  </Chip>
                </div>
                <div className="flex justify-center">
                  <Chip
                    className="text-[#ca4242]"
                    variant="light"
                    color="warning"
                  >
                    MySQL
                  </Chip>
                  <Chip
                    className="text-[#ca4242]"
                    variant="light"
                    color="warning"
                  >
                    TailwindCSS
                  </Chip>
                </div>

                <div className="mt-4 flex justify-center">
                  <a
                    target="_blank"
                    href="https://login-responsive-rick.netlify.app"
                  >
                    <button
                      id="botones"
                      className="flex justify-center items-center"
                    >
                      <div className="flex items-center mr-2">
                        <i className="fi fi-rr-site-alt text-base pt-2"></i>
                      </div>
                      Demostración
                    </button>
                  </a>
                  <a
                    target="_blank"
                    href="https://github.com/RicardoRdz03/Login-responsivo---Full-Stack"
                  >
                    <button
                      id="botones-underlined"
                      className="flex justify-center items-center"
                    >
                      Repositorio
                      <div className="flex items-center ml-2">
                        <i className="fi fi-brands-github text-base pt-2"></i>
                      </div>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" rounded-lg">
          <div className="py-5 px-2">
            <div className="grid grid-cols-2 ">
              <div className="col-span-2 sm:col-span-2 md:col-span-1 lg:col-span-1 xl:col-span-1 flex justify-center ">
                <Image
                  style={{ border: "1px solid #000" }}
                  width={500}
                  alt="NextUI hero Image"
                  src="/proyecto4.png"
                />
              </div>
              <div className="col-span-2 sm:col-span-2 md:col-span-1 lg:col-span-1 xl:col-span-1">
                <div className="my-4 flex justify-center">
                  <h1 className="text-xl font-bold text-center">
                    Veterinaria - Frontend
                  </h1>
                </div>
                <div className="mb-4 flex justify-center px-5">
                  <p className="text-center text-sm">
                    Página web frontend responsiva de una veterinaria ficticia
                  </p>
                </div>
                <div className="flex justify-center">
                  <Chip
                    className="text-[#ca4242]"
                    variant="light"
                    color="warning"
                  >
                    HTML
                  </Chip>
                  <Chip
                    className="text-[#ca4242]"
                    variant="light"
                    color="warning"
                  >
                    CSS
                  </Chip>
                  <Chip
                    className="text-[#ca4242]"
                    variant="light"
                    color="warning"
                  >
                    React
                  </Chip>
                </div>
                <div className="flex justify-center">
                  <Chip
                    className="text-[#ca4242]"
                    variant="light"
                    color="warning"
                  >
                    TailwindCSS
                  </Chip>
                </div>

                <div className="mt-4 flex justify-center">
                  <a
                    target="_blank"
                    href="https://veterinaria-rick.netlify.app"
                  >
                    <button
                      id="botones"
                      className="flex justify-center items-center"
                    >
                      <div className="flex items-center mr-2">
                        <i className="fi fi-rr-site-alt text-base pt-2"></i>
                      </div>
                      Demostración
                    </button>
                  </a>
                  <a
                    target="_blank"
                    href="https://github.com/RicardoRdz03/veterinaria-web"
                  >
                    <button
                      id="botones-underlined"
                      className="flex justify-center items-center"
                    >
                      Repositorio
                      <div className="flex items-center ml-2">
                        <i className="fi fi-brands-github text-base pt-2"></i>
                      </div>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" bg-neutral-100 ">
          <div className="py-5 px-2">
            <div className="grid grid-cols-2 ">
              <div className="col-span-2 sm:col-span-2 md:col-span-1 lg:col-span-1 xl:col-span-1 flex justify-center ">
                <Image
                  style={{ border: "1px solid #000" }}
                  width={500}
                  alt="NextUI hero Image"
                  src="/proyecto2.png"
                />
              </div>
              <div className="col-span-2 sm:col-span-2 md:col-span-1 lg:col-span-1 xl:col-span-1">
                <div className="my-4 flex justify-center">
                  <h1 className="text-xl font-bold text-center">
                    Portafolio web
                  </h1>
                </div>
                <div className="mb-4 flex justify-center px-5">
                  <p className="text-center text-sm">
                    Portafolio web personal que muestra diversas secciones como
                    habilidades, los proyectos realizados etc...
                  </p>
                </div>
                <div className="flex justify-center">
                  <Chip
                    className="text-[#ca4242]"
                    variant="light"
                    color="warning"
                  >
                    HTML
                  </Chip>
                  <Chip
                    className="text-[#ca4242]"
                    variant="light"
                    color="warning"
                  >
                    CSS
                  </Chip>
                  <Chip
                    className="text-[#ca4242]"
                    variant="light"
                    color="warning"
                  >
                    React
                  </Chip>
                  <Chip
                    className="text-[#ca4242]"
                    variant="light"
                    color="warning"
                  >
                    TailwindCSS
                  </Chip>
                </div>
                <div className="flex justify-center">
                  <Chip
                    className="text-[#ca4242]"
                    variant="light"
                    color="warning"
                  >
                    NextUI
                  </Chip>
                </div>

                <div className="mt-4 flex justify-center">
                  <a target="_blank" href="https://rick-portafolio.netlify.app">
                    <button
                      id="botones"
                      className="flex justify-center items-center"
                    >
                      <div className="flex items-center mr-2">
                        <i className="fi fi-rr-site-alt text-base pt-2"></i>
                      </div>
                      Demostración
                    </button>
                  </a>
                  <a
                    target="_blank"
                    href="https://github.com/RicardoRdz03/portafolio-web"
                  >
                    <button
                      id="botones-underlined"
                      className="flex justify-center items-center"
                    >
                      Repositorio
                      <div className="flex items-center ml-2">
                        <i className="fi fi-brands-github text-base pt-2"></i>
                      </div>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterP />
    </>
  );
}

export default ProyectosPage2;
