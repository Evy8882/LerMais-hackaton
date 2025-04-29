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

function App() {

  return (
    <Router>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/biblioteca" element={<Biblioteca/>} />
          <Route path="/pesquisar" element={<Pesquisar />} />
      </Routes>
    </Router>
  )
}

export default App
