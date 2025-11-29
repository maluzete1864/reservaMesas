import "./Perfil.css";
import { Link } from "react-router-dom";

function Perfil() {

  const usuario = {
    nome: "Rosa",
    sobrenome: "do deserto",
    email: "desertoderosas@example.com",
    rua: "Rua das Flores",
    numero: "123",
    bairro: "margaridas",
    cidade: "florel",
    uf: "MS",
  };

  return (
    <div className="page-container">

      <div className="card perfil-card-elegante">
        <h1 className="title">Meu Perfil</h1>

        <div className="perfil-info">
          <p><strong>Nome:</strong> {usuario.nome} {usuario.sobrenome}</p>
          <p><strong>Email:</strong> {usuario.email}</p>
          <p><strong>Rua:</strong> {usuario.rua}</p>
          <p><strong>Número:</strong> {usuario.numero}</p>
          <p><strong>Bairro:</strong> {usuario.bairro}</p>
          <p><strong>Cidade:</strong> {usuario.cidade}</p>
          <p><strong>UF:</strong> {usuario.uf}</p>
        </div>

        <Link to="/atualizar-perfil" className="btn-primary btn-full">
          Atualizar Perfil
        </Link>
      </div>

    </div>
  );
}

export default Perfil;
