import Resenas from "../pages/Resenas"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import WhatsAppButton from "../components/WhatsAppButton";
import Home from "../pages/Home";
import Servicios from "../pages/Servicios";
import Contacto from "../pages/Contacto";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Header />
      <WhatsAppButton />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/resenas" element={<Resenas />} />
      </Routes>
    </BrowserRouter>
  );
}