import { Link } from "react-router-dom";
import "./index.css";

export default function Navbar() {
  return (
    <header className="nav">
      <div className="nav-container">
        <Link to="/" className="logo" style={{ color: 'white', textDecoration: 'none' }}>Montajes Lucho</Link>
        <nav className="menu">
          <Link to="/">Inicio</Link>
          <Link to="/services">Servicios</Link>
          <Link to="/contact">Contacto</Link>
          <Link to="/reviews">Reseñas</Link>
        </nav>
      </div>
    </header>
  );
}