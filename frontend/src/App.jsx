import React from "react";
import "@flaticon/flaticon-uicons/css/all/all.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PaginaPrincipal from "./components/PaginaPrincipal";
import PdfViewer from "./components/PdfViewer";
import Contacto from "./components/Contacto";
import ProyectosPage2 from "./components/ProyectosPage2";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<PaginaPrincipal />} />
          <Route path="/cv" element={<PdfViewer />} />
          <Route path="/proyectos" element={<ProyectosPage2 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
