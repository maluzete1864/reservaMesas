import { useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">
         ReservaMesas
      </div>

      <div className="menu-container">
        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          Menu ☰
        </button>

        {menuOpen && (
          <nav className="menu-dropdown">

           
            <Link to="/home" onClick={() => setMenuOpen(false)}>
              Início
            </Link>

           
            <Link to="/" onClick={() => setMenuOpen(false)}>Login</Link>
            <Link to="/cadastro" onClick={() => setMenuOpen(false)}>Cadastro</Link>
            <Link to="/perfil" onClick={() => setMenuOpen(false)}>Perfil</Link>

          
            <Link to="/cadastrar-mesas" onClick={() => setMenuOpen(false)}>
              Cadastrar Mesas
            </Link>

            <Link to="/reservar-mesas" onClick={() => setMenuOpen(false)}>
              Reservar Mesas
            </Link>

            <Link to="/consultar-mesas" onClick={() => setMenuOpen(false)}>
              Consultar Mesas
            </Link>

            <Link to="/minhas-reservas" onClick={() => setMenuOpen(false)}>
              Minhas Reservas
            </Link>

        
            <Link to="/cardapio" onClick={() => setMenuOpen(false)}>
              Cardápio
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;
