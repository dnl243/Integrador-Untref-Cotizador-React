import { useEffect, useState } from "react";
import Header from "./Header";
import Opciones from "./Opciones";
import useHistorial from "../hooks/useHistorial";
import useCotizador from "../hooks/useCotizador";
import Swal from "sweetalert2";

const Cotizador = () => {
  const [presupuesto, setPresupuesto] = useState(0);
  const [datos, setDatos] = useState([]);
  const { elementos, setElementos } = useCotizador();
  const { historial, setHistorial } = useHistorial();

  const realizarCotizacion = () => {
    const { metros, propiedad, ubicacion } = elementos;
    if (metros < 20 || propiedad == 0 || ubicacion == 0) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Debes completar todos los datos!',
      });
    }
    const cotizacion = 35.86 * metros * propiedad * ubicacion;
    setPresupuesto(cotizacion);
  };

  const guardar = () => {
    setHistorial([
      ...historial,
      {
        fecha: new Date().toLocaleString(),
        ...elementos,
        cotizacion: (
          35.86 *
          elementos.metros *
          elementos.propiedad *
          elementos.ubicacion
        ).toFixed(2),
      },
    ]);
    Swal.fire({
      icon: 'success',
      text: 'Cotizacion guardada con éxito!',
    });
  };

  useEffect(() => {
    const leer = async () => setDatos(await (await fetch("/data.json")).json());
    leer();
  }, []);

  return (
    <>
      <Header />
      <h2 className="center">Cotizador 🏡</h2>
      <form className=" center cotizador" onSubmit={(e) => e.preventDefault()}>
        <h3 className="center">Completa los datos solicitados</h3>
        <Opciones
          datos={datos.filter(({ categoria }) => categoria == "propiedad")}
          label={"Seleccione el tipo de propiedad"}
          tipo={"propiedad"}
        />
        <Opciones
          datos={datos.filter(({ categoria }) => categoria == "ubicacion")}
          label={"Seleccione su ubicacion"}
          tipo={"ubicacion"}
        />
        <label htmlFor="metros2">Ingresa los Metros cuadrados:</label>
        <input
          type="number"
          id="metros2"
          defaultValue={20}
          min="20"
          onInput={(e) =>
            setElementos({
              ...elementos,
              metros: isNaN(parseInt(e.target.value))
                ? 20
                : parseInt(e.target.value) < 20
                ? 20
                : parseInt(e.target.value),
            })
          }
        />
        <div className="center">
          <button
            type="button"
            onClick={realizarCotizacion}
            className="button button-outline"
          >
            Cotizar
          </button>
        </div>
        <p className="importe center">
          Precio estimado: ${" "}
          <span id="valorPoliza">{presupuesto.toFixed(2)}</span>
          {presupuesto != 0 && (
            <span
              className="guardar"
              title="Guardar en historial"
              onClick={guardar}
            >
              💾
            </span>
          )}
        </p>
      </form>
    </>
  );
};

export default Cotizador;
