import { Link } from 'react-router-dom';

export default function CursosGraduacao() {
  return (
    <div>
      <h1>Cursos de Graduação</h1>

      <ListaCursos />
    </div>
  );
}
 
function ListaCursos() {
  return (
    <section>
      <h2>Nossos Cursos</h2>
      <ul>
        <li>
          <Link to="/cursos-graduacao/1">Tecnologia em Análise e Desenvolvimento de Sistemas</Link>
        </li>
        <li>
          <Link to="/cursos-graduacao/2">Licenciatura em Letras – Língua Portuguesa</Link>
        </li>
        <li>
          <Link to="/cursos-graduacao/3">Licenciatura em Pedagogia</Link>
        </li>
        <li>
          <Link to="/cursos-graduacao/4">Tecnologia em Secretariado</Link>
        </li>
      </ul>
    </section>
  );
}