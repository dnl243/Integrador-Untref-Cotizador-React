import "../styles/inicio.css";
import { Link } from "react-router-dom";
import Header from "./Header";

const Inicio = () => {
  return (
    <>
      <Header />
      <section>
        <h3>No te duermas, cotizá con nosotros!!</h3>
        <Link to="/cotizador">
          <button type="button">Cotizar ahora</button>
        </Link>
      </section>
    </>
  );
};

export default Inicio;
