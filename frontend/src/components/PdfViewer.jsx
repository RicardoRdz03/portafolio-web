import React from "react";
import "./estilos.css";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

function PdfViewer() {
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
      <div className="h-screen flex justify-center items-center">
        <iframe
          src={"/CV_Ricardo.pdf"}
          className="w-full h-full "
          title="PDF Viewer"
        />
      </div>
    </>
  );
}

export default PdfViewer;
