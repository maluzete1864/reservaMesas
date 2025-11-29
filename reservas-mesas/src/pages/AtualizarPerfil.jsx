import "./AtualizarPerfil.css";

function AtualizarPerfil() {
  return (
    <div className="perfil-update-container">
      <h1 className="perfil-update-title">Atualizar Perfil</h1>

      <form className="perfil-update-form">

        <div className="input-group">
          <label>Nome</label>
          <input type="text" placeholder="Digite o novo nome" />
        </div>

        <div className="input-group">
          <label>Sobrenome</label>
          <input type="text" placeholder="Digite o novo sobrenome" />
        </div>

        <div className="input-group">
          <label>Email</label>
          <input type="email" placeholder="Digite o novo e-mail" />
        </div>

        <div className="input-group">
          <label>Senha</label>
          <input type="password" placeholder="Nova senha" />
        </div>

        <div className="input-group">
          <label>Confirmar Senha</label>
          <input type="password" placeholder="Repita a nova senha" />
        </div>

        <button type="submit" className="btn-update-save">
          Salvar Alterações
        </button>
      </form>
    </div>
  );
}

export default AtualizarPerfil;
