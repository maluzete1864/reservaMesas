import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  return (
    <div className="page-container">

      <div className="card">
        <h1 className="title">Login</h1>

        <form className="form">
          <label>Email</label>
          <input
            type="email"
            placeholder="Digite seu email"
            className="input"
          />

          <label>Senha</label>
          <input
            type="password"
            placeholder="Digite sua senha"
            className="input"
          />

          <button type="submit" className="btn-primary">
            Entrar
          </button>
        </form>

        <p className="text-center">
          Ainda não tem conta?{" "}
          <Link to="/cadastro" className="link">
            Cadastre-se aqui
          </Link>
        </p>
      </div>

    </div>
  );
}

export default Login;
