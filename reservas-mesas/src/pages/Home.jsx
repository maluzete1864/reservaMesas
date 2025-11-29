import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Bem-vindo ao nosso restaurante</h1>
      <p className="home-subtitle">Escolha uma opção abaixo:</p>

      <div className="home-buttons">
        <Link to="/cadastro" className="btn-home">Cadastrar Usuário</Link>
        <Link to="/perfil" className="btn-home">Meu Perfil</Link>
      </div>
    </div>
  );
}

export default Home;
