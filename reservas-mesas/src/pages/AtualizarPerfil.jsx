function AtualizarPerfil() {
  return (
    <div>
      <h2>Atualizar Perfil</h2>
      <form>
        <label>Nome:</label>
        <input type="text" placeholder="Digite o novo nome" />
        <br />

        <label>Email:</label>
        <input type="email" placeholder="Digite o novo e-mail" />
        <br />

        <label>Senha:</label>
        <input type="password" placeholder="Nova senha" />
        <br />

        <button type="submit">Salvar Alterações</button>
      </form>
    </div>
  );
}

export default AtualizarPerfil;
