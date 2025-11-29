import { Link } from "react-router-dom";
import "./Cadastro.css";

function Cadastro() {
  return (
    <div className="page-container">

      <div className="card">
        <h1 className="title">Cadastro de Usuário</h1>

        <form className="form">
          <label>Nome</label>
          <input type="text" className="input" placeholder="Digite seu nome" />

          <label>Sobrenome</label>
          <input type="text" className="input" placeholder="Digite seu sobrenome" />

          <label>E-mail</label>
          <input type="email" className="input" placeholder="Digite seu e-mail" />

          <label>Rua</label>
          <input type="text" className="input" placeholder="Digite a rua" />

          <label>Nº</label>
          <input type="text" className="input" placeholder="Número" />

          <label>Bairro</label>
          <input type="text" className="input" placeholder="Digite seu bairro" />

          <label>Cidade</label>
          <input type="text" className="input" placeholder="Cidade" />

          <label>UF</label>
          <input type="text" className="input" maxLength={2} placeholder="UF" />

          <button type="submit" className="btn-primary">
            Cadastrar
          </button>
        </form>

        <p className="text-center">
          Já possui conta?{" "}
          <Link to="/" className="link">Faça login</Link>
        </p>
      </div>

    </div>
  );
}

export default Cadastro;
