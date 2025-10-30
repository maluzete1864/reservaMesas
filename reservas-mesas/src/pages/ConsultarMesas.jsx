import { useState } from "react";

function ConsultarMesas() {
  const [filtro, setFiltro] = useState({ status: "", capacidade: "" });

  // Simulação de mesas cadastradas
  const [mesas] = useState([
    { numero: 1, capacidade: 2, status: "disponível" },
    { numero: 2, capacidade: 4, status: "ocupada" },
    { numero: 3, capacidade: 6, status: "disponível" },
  ]);

  const [resultado, setResultado] = useState([]);

  const consultar = () => {
    let filtradas = mesas.filter((m) => {
      const statusOk = filtro.status ? m.status === filtro.status : true;
      const capOk = filtro.capacidade ? m.capacidade == filtro.capacidade : true;
      return statusOk && capOk;
    });
    setResultado(filtradas);
  };

  const limpar = () => {
    setFiltro({ status: "", capacidade: "" });
    setResultado([]);
  };

  return (
    <div>
      <h2>Consultar Mesas</h2>

      <label>Status:</label>
      <select
        name="status"
        value={filtro.status}
        onChange={(e) => setFiltro({ ...filtro, status: e.target.value })}
      >
        <option value="">Todos</option>
        <option value="disponível">Disponível</option>
        <option value="ocupada">Ocupada</option>
      </select>
      <br />

      <label>Capacidade:</label>
      <input
        type="number"
        value={filtro.capacidade}
        onChange={(e) => setFiltro({ ...filtro, capacidade: e.target.value })}
      />
      <br />

      <button onClick={consultar}>Consultar</button>
      <button onClick={limpar}>Limpar</button>

      <h3>Resultados:</h3>
      {resultado.length > 0 ? (
        <ul>
          {resultado.map((m, i) => (
            <li key={i}>
              Mesa {m.numero} — Capacidade: {m.capacidade} — Status: {m.status}
            </li>
          ))}
        </ul>
      ) : (
        <p>Nenhum resultado encontrado.</p>
      )}
    </div>
  );
}

export default ConsultarMesas;
