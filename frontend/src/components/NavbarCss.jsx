import React, { useState } from "react";

function NavbarCss() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-2xl">Mi Sitio</div>
          <div className="md:hidden">
            <button
              onClick={handleToggle}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className={`w-full md:flex md:items-center md:w-auto ${
              isOpen ? "" : "hidden"
            }`}
          >
            <ul className="text-white md:flex md:space-x-6">
              <li>
                <a href="#" className="block py-2 md:py-0">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 md:py-0">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 md:py-0">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 md:py-0">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavbarCss;
