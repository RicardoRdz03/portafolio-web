import React from "react";
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

function Navi() {
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
            <a href="#">
              <p className=" text-2xl font-bold text-inherit">
                MI <span className="text-[#F39D42]">PORTAFOLIO</span>
              </p>
            </a>
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem isActive>
            <Link color="foreground" href="#">
              Inicio
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#habilidades">
              Habilidades
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#proyectos">
              Proyectos
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#certificaciones">
              Certificaciones
            </Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu className="flex justify-center items-center h-screen">
          <NavbarMenuItem className="my-8">
            <Link className="w-full text-inherit	" href="/" size="lg">
              Inicio
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem className="my-8">
            <Link className="w-full text-inherit	" href="#habilidades" size="lg">
              Habilidades
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem className="my-8">
            <Link className="w-full text-inherit	" href="#proyectos" size="lg">
              Proyectos
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem className="my-8">
            <Link
              className="w-full text-inherit	"
              href="#certificaciones"
              size="lg"
            >
              Certificaciones
            </Link>
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
    </>
  );
}
export default Navi;
