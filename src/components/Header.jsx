import { Link } from "react-router-dom";
import "../styles/header.css";

const Header = () => {
  return (
    <>
      <nav>
        <h2>Seguros UNTREF</h2>
        <Link to="/" title="Cotizador">
          🏡
        </Link>
        <Link to="/historial" title="Historial">
          📋
        </Link>
      </nav>
    </>
  );
};

export default Header;
