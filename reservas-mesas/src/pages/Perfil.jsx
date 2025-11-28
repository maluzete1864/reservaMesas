import "./Perfil.css";
import { Link } from "react-router-dom";

function Perfil() {
  // informações fictícias (simulando um usuário logado)
  const usuario = {
    nome: "Maria Luiza",
    sobrenome: "Meira",
    email: "maria@example.com",
    rua: "Rua das Flores",
    numero: "123",
    bairro: "Centro",
    cidade: "Nova Andradina",
    uf: "MS",
  };

  return (
    <div className="perfil-container">
      <h1 className="perfil-titulo">Meu Perfil</h1>

      <div className="perfil-card">
        <p><strong>Nome:</strong> {usuario.nome} {usuario.sobrenome}</p>
        <p><strong>Email:</strong> {usuario.email}</p>
        <p><strong>Rua:</strong> {usuario.rua}</p>
        <p><strong>Número:</strong> {usuario.numero}</p>
        <p><strong>Bairro:</strong> {usuario.bairro}</p>
        <p><strong>Cidade:</strong> {usuario.cidade}</p>
        <p><strong>UF:</strong> {usuario.uf}</p>

        <Link to="/atualizar-perfil" className="btn-editar-perfil">
          Atualizar Perfil
        </Link>
      </div>
    </div>
  );
}

export default Perfil;
