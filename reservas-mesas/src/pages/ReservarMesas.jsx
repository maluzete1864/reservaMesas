import { useState } from "react";

function ReservarMesas() {
  const [reserva, setReserva] = useState({
    data: "",
    horario: "",
    nome: "",
    contato: "",
    mesa: "",
  });

  const [reservas, setReservas] = useState([]);

  const handleChange = (e) => {
    setReserva({ ...reserva, [e.target.name]: e.target.value });
  };

  const confirmarReserva = () => {
    setReservas([...reservas, reserva]);
    setReserva({ data: "", horario: "", nome: "", contato: "", mesa: "" });
  };

  return (
    <div>
      <h2>Reservar Mesas</h2>

      <label>Data da Reserva:</label>
      <input type="date" name="data" value={reserva.data} onChange={handleChange} />
      <br />

      <label>Horário:</label>
      <input type="time" name="horario" value={reserva.horario} onChange={handleChange} />
      <br />

      <label>Nome do Cliente:</label>
      <input name="nome" value={reserva.nome} onChange={handleChange} />
      <br />

      <label>Contato:</label>
      <input name="contato" value={reserva.contato} onChange={handleChange} />
      <br />

      <label>Mesa:</label>
      <input name="mesa" value={reserva.mesa} onChange={handleChange} />
      <br />

      <button onClick={confirmarReserva}>Confirmar Reserva</button>

      <h3>Reservas Feitas:</h3>
      <ul>
        {reservas.map((r, i) => (
          <li key={i}>
            {r.nome} - Mesa {r.mesa} em {r.data} às {r.horario}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ReservarMesas;
