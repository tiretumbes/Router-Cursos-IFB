import { Link } from 'react-router-dom';

export default function Pedagogia() {
  return (
    <section>
      <h1>Licenciatura em Pedagogia</h1>
      <p>
        O curso de Licenciatura em Pedagogia forma profissionais capacitados para atuar na educação infantil, ensino fundamental e em áreas de gestão e orientação educacional. Com foco no desenvolvimento humano e social, prepara educadores comprometidos com uma formação integral e transformadora.
      </p>
      <Link to="/cursos-graduacao">← Voltar para Cursos</Link>
    </section>
  );
}