import { useState } from "react";
import "./ListarMinhasReservas.css";

function ListarMinhasReservas() {
  const [reservas, setReservas] = useState([
    { id: 1, mesa: 3, data: "2025-10-31", horario: "20:00" },
    { id: 2, mesa: 2, data: "2025-11-01", horario: "19:30" },
  ]);

  const cancelarReserva = (id) => {
    const atualizadas = reservas.filter((r) => r.id !== id);
    setReservas(atualizadas);
  };

  const editarReserva = (id) => {
    alert(`Função de edição da reserva ${id} em desenvolvimento!`);
  };

  const verDetalhes = (reserva) => {
    alert(
      `Reserva: ${reserva.id}\nMesa: ${reserva.mesa}\nData: ${reserva.data}\nHorário: ${reserva.horario}`
    );
  };

  return (
    <div className="minhas-reservas-container">
      <h1 className="titulo">Minhas Reservas</h1>

      <div className="tabela-container">
        <table className="tabela-reservas">
          <thead>
            <tr>
              <th>Nº Reserva</th>
              <th>Mesa</th>
              <th>Data</th>
              <th>Horário</th>
              <th>Ações</th>
            </tr>
          </thead>

          <tbody>
            {reservas.map((r) => (
              <tr key={r.id}>
                <td>{r.id}</td>
                <td>{r.mesa}</td>
                <td>{r.data}</td>
                <td>{r.horario}</td>
                <td className="col-acoes">
                  <button className="btn ver" onClick={() => verDetalhes(r)}>
                    Ver
                  </button>

                  <button className="btn editar" onClick={() => editarReserva(r.id)}>
                    Editar
                  </button>

                  <button className="btn cancelar" onClick={() => cancelarReserva(r.id)}>
                    Cancelar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {reservas.length === 0 && (
          <p className="mensagem-vazia">Nenhuma reserva encontrada.</p>
        )}
      </div>
    </div>
  );
}

export default ListarMinhasReservas;
