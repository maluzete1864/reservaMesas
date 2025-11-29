import "./Cardapio.css";

function Cardapio() {
  const pratos = [
    {
      nome: "Carne de Sol com Mandioca",
      descricao: "Acompanha arroz, feijão tropeiro e vinagrete.",
      preco: "R$ 39,90",
      imagem: "https://i.imgur.com/RW1zUOa.jpeg"
    },
    {
      nome: "Baião de Dois",
      descricao: "Feito com feijão verde, arroz, queijo coalho e carne seca.",
      preco: "R$ 34,90",
      imagem: "https://i.imgur.com/b0KzGfh.jpeg"
    },
    {
      nome: "Moqueca Nordestina",
      descricao: "Peixe ao leite de coco com pimentões e coentro.",
      preco: "R$ 44,90",
      imagem: "https://i.imgur.com/3F2pQxg.jpeg"
    },
    {
      nome: "Galinhada Caipira",
      descricao: "Arroz temperado com frango, açafrão e legumes.",
      preco: "R$ 29,90",
      imagem: "https://i.imgur.com/tqvTQWk.jpeg"
    }
  ];

  return (
    <div className="cardapio-container">
      <h1>Cardápio</h1>

      <div className="pratos-grid">
        {pratos.map((prato, index) => (
          <div className="prato-card" key={index}>
            <img src={prato.imagem} alt={prato.nome} className="prato-img" />
            <h3>{prato.nome}</h3>
            <p>{prato.descricao}</p>
            <span className="preco">{prato.preco}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cardapio;
