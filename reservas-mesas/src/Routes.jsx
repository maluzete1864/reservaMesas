import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Perfil from "./pages/Perfil";
import AtualizarPerfil from "./pages/AtualizarPerfil";
import CadastrarMesas from "./pages/CadastrarMesas";
import ReservarMesas from "./pages/ReservarMesas";
import ConsultarMesas from "./pages/ConsultarMesas";
import ListarMinhasReservas from "./pages/ListarMinhasReservas";
import Header from "./components/Header";
import Home from "./pages/Home";
import Cardapio from "./pages/Cardapio";


function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/atualizar-perfil" element={<AtualizarPerfil />} />
        <Route path="/cadastrar-mesas" element={<CadastrarMesas />} />
        <Route path="/reservar-mesas" element={<ReservarMesas />} />
        <Route path="/consultar-mesas" element={<ConsultarMesas />} />
        <Route path="/minhas-reservas" element={<ListarMinhasReservas />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cardapio" element={<Cardapio />} />


      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
