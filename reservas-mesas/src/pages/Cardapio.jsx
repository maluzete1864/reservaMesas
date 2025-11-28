import "./Cardapio.css";

function Cardapio() {
  return (
    <div className="cardapio-container">
      <h1>Cardápio</h1>

      <div className="pratos">
        <div className="prato">
          <img src="https://images.unsplash.com/photo-1606973035033-07c5b91c2c8a" alt="Prato 1" />
          <h3>Baião de Dois</h3>
          <p>Arroz, feijão verde, queijo coalho e temperos da casa.</p>
        </div>

        <div className="prato">
          <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c" alt="Prato 2" />
          <h3>Carne de Sol</h3>
          <p>Acompanha mandioca cozida, vinagrete e farofa.</p>
        </div>

        <div className="prato">
          <img src="https://images.unsplash.com/photo-1617196037304-081814dc2e36" alt="Prato 3" />
          <h3>Galinhada</h3>
          <p>Arroz temperado com frango caipira e especiarias.</p>
        </div>
      </div>
    </div>
  );
}

export default Cardapio;
