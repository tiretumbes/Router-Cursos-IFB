
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './rotas/Home';
import CursosGraduacao from './rotas/Cursos-graduacao';
import ADS from './rotas/cursos/ads';
import Detalhes from './rotas/cursos/detalhes';
import CadastrarCurso from './rotas/cursos/cadastrarCurso';

function App() {
  return (
    <Router>
      <nav className="navbar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/cursos-graduacao">Cursos</Link></li>
          <li><Link to="/detalhes">Detalhes</Link></li>
          <li><Link to="/cadastrar-curso">Cadastrar Curso</Link></li>
        </ul>
      </nav>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cursos-graduacao" element={<CursosGraduacao />} />
          <Route path="/cursos-graduacao/:id" element={<ADS />} />
          <Route path="/detalhes" element={<Detalhes />} />
          <Route path= "/cadastrar-curso" element={<CadastrarCurso />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
