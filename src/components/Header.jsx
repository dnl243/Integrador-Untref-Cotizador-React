import { Link } from "react-router-dom";
import "../styles/header.css";

const Header = () => {
  return (
    <>
      <Link to="/">
        <h2>Seguros UNTREF</h2>
      </Link>
      <nav>
        <Link to="/cotizador" title="Cotizador">
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
