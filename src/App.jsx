import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home'
import Biblioteca from './pages/Biblioteca'
import Pesquisar from './pages/Pesquisar'
import Pontos from './pages/Pontos'
import Perfil from './pages/Perfil'
import Livro from './pages/Livro'

function App() {

  return (
    <Router>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/biblioteca" element={<Biblioteca/>} />
          <Route path="/pesquisar" element={<Pesquisar />} />
          <Route path="/Pontos" element={<Pontos />} />
          <Route path="/Perfil" element={<Perfil />} />
          <Route path="/livro/:id" element={<Livro />} />
      </Routes>
    </Router>
  )
}

export default App
