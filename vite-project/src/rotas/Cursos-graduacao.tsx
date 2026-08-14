import { Routes, Route, Link } from 'react-router-dom';
import ADS from './cursos/ads';
import Letras from './cursos/letras';
import Pedagogia from './cursos/pedagogia';
import Secretariado from './cursos/ts';

export default function CursosGraduacao() {
  return (
    <div>
      <h1>Cursos de Graduação</h1>

      <main>
        <Routes>
          <Route path="/" element={<ListaCursos />} />
          <Route path="/ads" element={<ADS />} />
          <Route path="/letras" element={<Letras />} />
          <Route path="/pedagogia" element={<Pedagogia />} />
          <Route path="/secretariado" element={<Secretariado />} />
        </Routes>
      </main>
    </div>
  );
}
 
function ListaCursos() {
  return (
    <section>
      <h2>Nossos Cursos</h2>
      <ul>
        <li>
          <Link to="/cursos-graduacao/ads">Tecnologia em Análise e Desenvolvimento de Sistemas</Link>
        </li>
        <li>
          <Link to="/cursos-graduacao/letras">Licenciatura em Letras – Língua Portuguesa</Link>
        </li>
        <li>
          <Link to="/cursos-graduacao/pedagogia">Licenciatura em Pedagogia</Link>
        </li>
        <li>
          <Link to="/cursos-graduacao/secretariado">Tecnologia em Secretariado</Link>
        </li>
      </ul>
    </section>
  );
}