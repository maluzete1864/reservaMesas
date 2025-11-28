import "./AtualizarPerfil.css";

function AtualizarPerfil() {
  return (
    <div className="atualizar-container">
      <h1 className="titulo">Atualizar Perfil</h1>

      <form className="form-atualizar">

        <label>Nome</label>
        <input type="text" placeholder="Digite o novo nome" />

        <label>Sobrenome</label>
        <input type="text" placeholder="Digite o novo sobrenome" />

        <label>Email</label>
        <input type="email" placeholder="Digite o novo e-mail" />

        <label>Senha</label>
        <input type="password" placeholder="Nova senha" />

        <label>Confirmar Senha</label>
        <input type="password" placeholder="Repita a nova senha" />

        <button type="submit" className="btn-salvar">
          Salvar Alterações
        </button>
      </form>
    </div>
  );
}

export default AtualizarPerfil;
