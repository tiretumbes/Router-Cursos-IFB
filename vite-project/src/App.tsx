
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './rotas/Home';
import CursosGraduacao from './rotas/Cursos-graduacao';
import ADS from './rotas/cursos/ads';

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
          <Route path="/cursos-graduacao/:id" element={<ADS />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
