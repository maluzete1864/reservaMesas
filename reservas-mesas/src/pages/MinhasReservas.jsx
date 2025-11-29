import { useState } from "react";

function MinhasReservas() {
  const [filtros, setFiltros] = useState({
    mesa: "",
    reserva: "",
    data: "",
  });

  
  const [reservas] = useState([
    { id: 1, mesa: 3, data: "2025-10-31" },
    { id: 2, mesa: 2, data: "2025-11-01" },
    { id: 3, mesa: 1, data: "2025-11-05" },
  ]);

  const [resultado, setResultado] = useState([]);

  const handleChange = (e) => {
    setFiltros({ ...filtros, [e.target.name]: e.target.value });
  };

  const consultar = () => {
    const filtradas = reservas.filter((r) => {
      const mesaOk = filtros.mesa ? r.mesa == filtros.mesa : true;
      const reservaOk = filtros.reserva ? r.id == filtros.reserva : true;
      const dataOk = filtros.data ? r.data === filtros.data : true;

      return mesaOk && reservaOk && dataOk;
    });

    setResultado(filtradas);
  };

  const limpar = () => {
    setFiltros({ mesa: "", reserva: "", data: "" });
    setResultado([]);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Minhas Reservas</h2>

      <label>Nº da mesa:</label>
      <input
        name="mesa"
        value={filtros.mesa}
        onChange={handleChange}
        placeholder="Ex: 1"
      />
      <br />

      <label>Nº da reserva:</label>
      <input
        name="reserva"
        value={filtros.reserva}
        onChange={handleChange}
        placeholder="Ex: 3"
      />
      <br />

      <label>Data:</label>
      <input
        type="date"
        name="data"
        value={filtros.data}
        onChange={handleChange}
      />
      <br />

      <button onClick={consultar}>Consultar</button>
      <button onClick={limpar}>Limpar</button>

      <h3>Resultado:</h3>

      {resultado.length > 0 ? (
        <table border="1" cellPadding="5">
          <thead>
            <tr>
              <th>Nº Reserva</th>
              <th>Mesa</th>
              <th>Data</th>
            </tr>
          </thead>
          <tbody>
            {resultado.map((r) => (
              <tr key={r.id}>
                <td>{r.id}</td>
                <td>{r.mesa}</td>
                <td>{r.data}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Nenhum resultado encontrado.</p>
      )}
    </div>
  );
}

export default MinhasReservas;
