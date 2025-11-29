import { useState } from "react";
import "./ConsultarMesas.css";

function ConsultarMesas() {
 
  const [mesas] = useState([
    { numero: 1, capacidade: 2, status: "disponível" },
    { numero: 2, capacidade: 4, status: "ocupada" },
    { numero: 3, capacidade: 6, status: "disponível" },
    { numero: 4, capacidade: 4, status: "ocupada" },
  ]);

  const [filtro, setFiltro] = useState({
    numero: "",
    capacidade: "",
    status: "",
  });

  const [resultado, setResultado] = useState([]);

  const handleChange = (e) => {
    setFiltro({ ...filtro, [e.target.name]: e.target.value });
  };

  const consultar = () => {
    let filtradas = mesas.filter((m) => {
      const numeroOK = filtro.numero ? m.numero == filtro.numero : true;
      const capOK = filtro.capacidade ? m.capacidade == filtro.capacidade : true;
      const statusOK = filtro.status ? m.status == filtro.status : true;
      return numeroOK && capOK && statusOK;
    });

    setResultado(filtradas);
  };

  const limpar = () => {
    setFiltro({ numero: "", capacidade: "", status: "" });
    setResultado([]);
  };

  return (
    <div className="mesas-container">
      <h1 className="titulo">Consultar Mesas</h1>

     
      <div className="card-filtros">
        <label>Número da Mesa</label>
        <input
          type="number"
          name="numero"
          value={filtro.numero}
          onChange={handleChange}
          placeholder="Ex: 1"
        />

        <label>Capacidade</label>
        <input
          type="number"
          name="capacidade"
          value={filtro.capacidade}
          onChange={handleChange}
          placeholder="Ex: 4 pessoas"
        />

        <label>Status</label>
        <select name="status" value={filtro.status} onChange={handleChange}>
          <option value="">Todos</option>
          <option value="disponível">Disponível</option>
          <option value="ocupada">Ocupada</option>
        </select>

        <div className="botoes">
          <button onClick={consultar} className="btn-consultar">Consultar</button>
          <button onClick={limpar} className="btn-limpar">Limpar</button>
        </div>
      </div>

   
      <div className="card-resultados">
        <h2>Resultados</h2>

        {resultado.length === 0 ? (
          <p>Nenhuma mesa encontrada.</p>
        ) : (
          <table className="tabela">
            <thead>
              <tr>
                <th>Nº Mesa</th>
                <th>Capacidade</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {resultado.map((m, i) => (
                <tr key={i}>
                  <td>{m.numero}</td>
                  <td>{m.capacidade} pessoas</td>
                  <td className={m.status === "disponível" ? "verde" : "vermelho"}>
                    {m.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default ConsultarMesas;
