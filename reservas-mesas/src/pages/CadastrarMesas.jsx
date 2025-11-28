import { useState } from "react";
import "./CadastrarMesas.css";

function CadastrarMesas() {
  const [mesa, setMesa] = useState({
    numero: "",
    capacidade: "",
    status: "disponível",
  });

  const [listaMesas, setListaMesas] = useState([]);

  const handleChange = (e) => {
    setMesa({ ...mesa, [e.target.name]: e.target.value });
  };

  const salvarMesa = () => {
    if (!mesa.numero || !mesa.capacidade) {
      alert("Preencha todos os campos!");
      return;
    }

    setListaMesas([...listaMesas, mesa]);

    setMesa({
      numero: "",
      capacidade: "",
      status: "disponível",
    });
  };

  const excluirMesa = (index) => {
    const novasMesas = listaMesas.filter((_, i) => i !== index);
    setListaMesas(novasMesas);
  };

  const editarMesa = (index) => {
    alert("Função de edição será implementada futuramente!");
  };

  return (
    <div className="container-cadastrar">
      <h1 className="titulo">Cadastrar Mesas</h1>

      <div className="card-form">
        <label>Número da Mesa</label>
        <input
          type="number"
          name="numero"
          value={mesa.numero}
          onChange={handleChange}
          placeholder="Ex: 12"
        />

        <label>Capacidade da Mesa</label>
        <input
          type="number"
          name="capacidade"
          value={mesa.capacidade}
          onChange={handleChange}
          placeholder="Ex: 4"
        />

        <label>Status</label>
        <select name="status" value={mesa.status} onChange={handleChange}>
          <option value="disponível">Disponível</option>
          <option value="ocupada">Ocupada</option>
        </select>

        <button className="btn-salvar" onClick={salvarMesa}>
          Salvar Mesa
        </button>
      </div>

      <h2 className="subtitulo">Mesas Cadastradas</h2>

      {listaMesas.length === 0 ? (
        <p className="mensagem-vazia">Nenhuma mesa cadastrada ainda.</p>
      ) : (
        <table className="tabela-mesas">
          <thead>
            <tr>
              <th>Nº Mesa</th>
              <th>Capacidade</th>
              <th>Status</th>
              <th>Ações</th>
            </tr>
          </thead>

          <tbody>
            {listaMesas.map((m, index) => (
              <tr key={index}>
                <td>{m.numero}</td>
                <td>{m.capacidade}</td>
                <td>{m.status}</td>
                <td className="col-acoes">
                  <button className="btn editar" onClick={() => editarMesa(index)}>Editar</button>
                  <button className="btn excluir" onClick={() => excluirMesa(index)}>Excluir</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default CadastrarMesas;
