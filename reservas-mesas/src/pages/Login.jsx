import { Link } from "react-router-dom";

function Login() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Login</h2>

      <form>
        <label>Email:</label>
        <input type="email" placeholder="Digite seu email" />
        <br />

        <label>Senha:</label>
        <input type="password" placeholder="Digite sua senha" />
        <br />

        <button type="submit">Entrar</button>
      </form>

      <p>
        Ainda não tem conta?{" "}
        <Link to="/cadastro">Cadastre-se aqui</Link>
      </p>
    </div>
  );
}

export default Login;
