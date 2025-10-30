import { Link } from "react-router-dom";

function Cadastro() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Cadastro de Usuário</h2>

      <form>
        <label>Nome:</label>
        <input type="text" placeholder="Digite seu nome" />
        <br />

        <label>Email:</label>
        <input type="email" placeholder="Digite seu email" />
        <br />

        <label>Senha:</label>
        <input type="password" placeholder="Digite sua senha" />
        <br />

        <button type="submit">Cadastrar</button>
      </form>

      <p>
        Já possui conta?{" "}
        <Link to="/">Faça login</Link>
      </p>
    </div>
  );
}

export default Cadastro;
