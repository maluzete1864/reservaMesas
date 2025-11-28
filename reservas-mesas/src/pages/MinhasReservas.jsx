import { useState } from "react";
import "./MinhasReservas.css";

function MinhasReservas() {

  // Reservas de exemplo (simulação)
  const [reservas] = useState([
    { id: 1, mesa: 4, data: "2025-11-05" },
    { id: 2, mesa: 2, data: "2025-12-01" },
    { id: 3, mesa: 1, data: "2025-12-20" },
  ]);

  const [filtroMesa, setFiltroMesa] = useState("");
  const [filtroReserva, setFiltroReserva] = useState("");
  const [filtroData, setFiltroData] = useState("");

  const [resultado, setResultado] = useState([]);

  const consultar = () => {
    let filtradas = reservas.filter((r) => {
      const mesaOK = filtroMesa ? r.mesa == filtroMesa : true;
      const reservaOK = filtroReserva ? r.id == filtroReserva : true;
      const dataOK = filtroData ? r.data === filtroData : true;

      return mesaOK && reservaOK && dataOK;
    });

    setResultado(filtradas);
  };

  const limpar = () => {
    setFiltroMesa("");
    setFiltroReserva("");
    setFiltroData("");
    setResultado([]);
  };

  return (
    <div className="minhasreservas-container">
      <h1>Minhas Reservas</h1>

      <div className="filtros">
        <label>Nº da Mesa</label>
        <input
          type="number"
          value={filtroMesa}
          onChange={(e) => setFiltroMesa(e.target.value)}
        />

        <label>Nº da Reserva</label>
        <input
          type="number"
          value={filtroReserva}
          onChange={(e) => setFiltroReserva(e.target.value)}
        />

        <label>Data</label>
        <input
          type="date"
          value={filtroData}
          onChange={(e) => setFiltroData(e.target.value)}
        />

        <button onClick={consultar}>Consultar</button>
        <button onClick={limpar}>Limpar</button>
      </div>

      <h3>Resultados:</h3>
      {resultado.length > 0 ? (
        <table border="1" cellPadding="5">
          <thead>
            <tr>
              <th>Nº da reserva</th>
              <th>Nº da mesa</th>
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
