import "./Cardapio.css";

function Cardapio() {
  const pratos = [
    {
      nome: "Carne de Sol com Mandioca",
      descricao: "Acompanha arroz, feijão tropeiro e vinagrete.",
      preco: "R$ 39,90",
      imagem: "https://folhago.com.br/blogs/receitas-faceis/wp-content/uploads/2022/08/Mandioca-e-carne-de-sol.jpg"
    },
    {
      nome: "Baião de Dois",
      descricao: "Feito com feijão verde, arroz, queijo coalho e carne seca.",
      preco: "R$ 34,90",
      imagem: "https://th.bing.com/th/id/R.c15a27052436f43159094bbb0b66a9f6?rik=swKnMpzMj0r1UA&riu=http%3a%2f%2fwww.praiasdenatal.com.br%2fwp-content%2fuploads%2f2014%2f08%2fBai%c3%a3o-de-dois.jpg%3f381fd3&ehk=G4FUbxadPdVpO1rm5UfP7MPUBhhaPzTvW%2fRr0Ax8VW0%3d&risl=&pid=ImgRaw&r=0"
    },
    {
      nome: "Moqueca Nordestina",
      descricao: "Peixe ao leite de coco com pimentões e coentro.",
      preco: "R$ 44,90",
      imagem: "https://receitarapido.com/wp-content/uploads/2023/07/Moqueca-Sabor-Tradicao-e-Sabores-Tropicais-em-um-Prato-Delicioso.jpg"
    },
    {
      nome: "Galinhada Caipira",
      descricao: "Arroz temperado com frango, açafrão e legumes.",
      preco: "R$ 29,90",
      imagem: "https://www.comidaereceitas.com.br/wp-content/uploads/2009/02/galinhadaa-780x520.jpg"
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
