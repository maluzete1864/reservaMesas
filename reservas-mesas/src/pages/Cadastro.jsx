import { Link } from "react-router-dom";
import "./Cadastro.css";

function Cadastro() {
  return (
    <div className="cadastro-container">
      <h1 className="cadastro-title">Cadastro de Usuário</h1>

      <form className="cadastro-form">
        <label>Nome</label>
        <input type="text" placeholder="Digite seu nome" />

        <label>Sobrenome</label>
        <input type="text" placeholder="Digite seu sobrenome" />

        <label>E-mail</label>
        <input type="email" placeholder="Digite seu e-mail" />

        <label>Rua</label>
        <input type="text" placeholder="Digite a rua" />

        <label>Nº</label>
        <input type="text" placeholder="Número" />

        <label>Bairro</label>
        <input type="text" placeholder="Digite seu bairro" />

        <label>Cidade</label>
        <input type="text" placeholder="Cidade" />

        <label>UF</label>
        <input type="text" maxLength={2} placeholder="UF" />

        <button type="submit" className="btn-cadastrar">Cadastrar</button>
      </form>

      <p className="cadastro-link">
        Já possui conta? <Link to="/">Faça login</Link>
      </p>
    </div>
  );
}

export default Cadastro;
