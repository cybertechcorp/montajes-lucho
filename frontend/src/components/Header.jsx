import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="nav">
      <div className="nav-container">
        <Link to="/" className="logo" style={{ color: 'white', textDecoration: 'none' }}>Montajes Lucho</Link>
        <nav className="menu">
          <Link to="/">Inicio</Link>
          <Link to="/servicios">Servicios</Link>
          <Link to="/contacto">Contacto</Link>
          <Link to="/resenas">Reseñas</Link>
        </nav>
      </div>
    </header>
  );
}