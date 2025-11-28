import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  return (
    <div className="login-container">
      <h1 className="login-title">Login</h1>

      <form className="login-form">
        <label>Email:</label>
        <input type="email" placeholder="Digite seu email" />

        <label>Senha:</label>
        <input type="password" placeholder="Digite sua senha" />

        <button type="submit" className="btn-login">Entrar</button>
      </form>

      <p className="login-link">
        Ainda não tem conta? <Link to="/cadastro">Cadastre-se aqui</Link>
      </p>
    </div>
  );
}

export default Login;
