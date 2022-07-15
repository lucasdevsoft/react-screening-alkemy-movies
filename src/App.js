// Libraries
import { Routes, Route } from 'react-router-dom';
import React from "react";

// Components
import Login from './components/Login';
import Listado from './components/Listado';
import Detalle from "./components/Detalle";
import Resultados from "./components/Resultados";
import Header from './components/Header';
import Footer from './components/Footer';

// Styles
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="listado" element={<Listado />} />
          <Route path="detalle" element={<Detalle />} />
          <Route path="resultados" element={<Resultados />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;

