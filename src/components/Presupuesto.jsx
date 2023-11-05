const Presupuesto = (propiedades) => {
  return (
    <tr>
      <td>{propiedades.fecha}</td>
      <td>{propiedades["Seleccione el tipo de propiedad"]}</td>
      <td>{propiedades["Seleccione su ubicacion"]}</td>
      <td>{propiedades.metros}</td>
      <td>{propiedades.cotizacion}</td>
    </tr>
  );
};

export default Presupuesto;
