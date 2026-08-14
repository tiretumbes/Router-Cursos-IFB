
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './rotas/Home';
import CursosGraduacao from './rotas/Cursos-graduacao';
import ADS from './rotas/cursos/ads';
import Letras from './rotas/cursos/letras';
import Pedagogia from './rotas/cursos/pedagogia';
import Secretariado from './rotas/cursos/ts';

function App() {
  return (
    <Router>
      <nav className="navbar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/cursos-graduacao">Cursos</Link></li>
          <li><Link to="/detalhes">Detalhes</Link></li>
        </ul>
      </nav>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cursos-graduacao" element={<CursosGraduacao />} />
          <Route path="/cursos-graduacao/ads" element={<ADS />} />
          <Route path="/cursos-graduacao/letras" element={<Letras />} />
          <Route path="/cursos-graduacao/pedagogia" element={<Pedagogia />} />
          <Route path="/cursos-graduacao/secretariado" element={<Secretariado />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
