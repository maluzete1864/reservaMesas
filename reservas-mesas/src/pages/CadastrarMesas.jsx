import { useState } from "react";

function CadastrarMesas() {
  const [mesa, setMesa] = useState({
    numero: "",
    capacidade: "",
    status: "disponível",
  });

  const [mesas, setMesas] = useState([]);

  const handleChange = (e) => {
    setMesa({ ...mesa, [e.target.name]: e.target.value });
  };

  const salvarMesa = () => {
    setMesas([...mesas, mesa]);
    setMesa({ numero: "", capacidade: "", status: "disponível" });
  };

  const excluirMesa = (index) => {
    const novas = mesas.filter((_, i) => i !== index);
    setMesas(novas);
  };

  return (
    <div>
      <h2>Cadastrar Mesas</h2>
      <label>Número da Mesa:</label>
      <input name="numero" value={mesa.numero} onChange={handleChange} />
      <br />

      <label>Capacidade:</label>
      <input name="capacidade" value={mesa.capacidade} onChange={handleChange} />
      <br />

      <label>Status:</label>
      <select name="status" value={mesa.status} onChange={handleChange}>
        <option value="disponível">Disponível</option>
        <option value="ocupada">Ocupada</option>
      </select>
      <br />

      <button onClick={salvarMesa}>Salvar</button>

      <h3>Mesas Cadastradas:</h3>
      <ul>
        {mesas.map((m, i) => (
          <li key={i}>
            Mesa {m.numero} - Capacidade: {m.capacidade} - {m.status}
            <button onClick={() => excluirMesa(i)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CadastrarMesas;
