import { Link } from "react-router-dom";

function Header() {
  return (
    <header style={{ background: "#222", color: "#fff", padding: "10px" }}>
      <nav style={{ display: "flex", gap: "15px" }}>
        <Link to="/" style={{ color: "#fff" }}>Login</Link>
        <Link to="/cadastro" style={{ color: "#fff" }}>Cadastro</Link>
        <Link to="/perfil" style={{ color: "#fff" }}>Perfil</Link>
        <Link to="/cadastrar-mesas" style={{ color: "#fff" }}>Cadastrar Mesas</Link>
        <Link to="/reservar-mesas" style={{ color: "#fff" }}>Reservar Mesas</Link>
        <Link to="/consultar-mesas" style={{ color: "#fff" }}>Consultar Mesas</Link>
        <Link to="/minhas-reservas" style={{ color: "#fff" }}>Minhas Reservas</Link>
      </nav>
    </header>
  );
}

export default Header;