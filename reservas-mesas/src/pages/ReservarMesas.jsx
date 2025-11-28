import { useState } from "react";
import "./ReservarMesas.css";

function ReservarMesas() {
  const [reserva, setReserva] = useState({
    data: "",
    horario: "",
    nome: "",
    contato: "",
    mesa: "",
    pessoas: ""
  });

  const [reservas, setReservas] = useState([]);

  const handleChange = (e) => {
    setReserva({ ...reserva, [e.target.name]: e.target.value });
  };

  const confirmarReserva = () => {
    if (!reserva.data || !reserva.horario || !reserva.nome || !reserva.contato || !reserva.mesa) {
      alert("Preencha todos os campos!");
      return;
    }

    setReservas([...reservas, { ...reserva, id: reservas.length + 1 }]);
    alert("Reserva realizada com sucesso!");

    setReserva({
      data: "",
      horario: "",
      nome: "",
      contato: "",
      mesa: "",
      pessoas: ""
    });
  };

  return (
    <div className="reservar-container">
      <h1 className="titulo">Reservar Mesa</h1>

      <form className="form-reserva">
        <label>Data da reserva</label>
        <input
          type="date"
          name="data"
          value={reserva.data}
          onChange={handleChange}
        />

        <label>Horário</label>
        <input
          type="time"
          name="horario"
          value={reserva.horario}
          onChange={handleChange}
        />

        <label>Nome do cliente</label>
        <input
          name="nome"
          value={reserva.nome}
          placeholder="Seu nome"
          onChange={handleChange}
        />

        <label>Contato</label>
        <input
          name="contato"
          value={reserva.contato}
          placeholder="Telefone"
          onChange={handleChange}
        />

        <label>Mesa</label>
        <input
          name="mesa"
          value={reserva.mesa}
          placeholder="Número da mesa"
          onChange={handleChange}
        />

        <label>Quantidade de pessoas</label>
        <input
          type="number"
          name="pessoas"
          value={reserva.pessoas}
          placeholder="Ex: 4"
          onChange={handleChange}
        />

        <button type="button" className="btn-confirmar" onClick={confirmarReserva}>
          Confirmar Reserva
        </button>
      </form>

      <h2 className="subtitulo">Reservas Feitas</h2>

      <ul className="lista-reservas">
        {reservas.map((r) => (
          <li key={r.id} className="item-reserva">
            <strong>#{r.id}</strong> — Mesa {r.mesa} — {r.data} às {r.horario}
            <br />
            Cliente: {r.nome} / {r.contato}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ReservarMesas;
