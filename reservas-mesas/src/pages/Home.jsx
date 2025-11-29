import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">

      {/* ÁREA PRINCIPAL COM IMAGEM DE FUNDO */}
      <section className="banner">
        <h1 className="banner-title">RESTAURANTE SABOR DA TERRA</h1>
        <h3 className="banner-subtitle">COZINHA NORDESTINA</h3>

        <Link to="/reservar-mesas" className="btn-reservas">
          Reservas
        </Link>
      </section>

      {/* RODAPÉ */}
      <footer className="rodape">
        xxxxxx (99) 99999-9999 — xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
      </footer>
    </div>
  );
}

export default Home;
