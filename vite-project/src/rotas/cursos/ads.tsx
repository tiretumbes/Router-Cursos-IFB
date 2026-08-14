import { Link } from 'react-router-dom';

export default function ADS() {
  return (
    <section>
      <h1>Tecnologia em Análise e Desenvolvimento de Sistemas</h1>
      <p>
        O curso de Tecnologia em Análise e Desenvolvimento de Sistemas forma profissionais capazes de analisar, desenvolver, testar e manter sistemas computacionais. Com foco em programação, banco de dados e desenvolvimento web, prepara técnicos para solucionar problemas tecnológicos e criar soluções inovadoras.
      </p>
      <Link to="/cursos-graduacao">← Voltar para Cursos</Link>
    </section>
  );
}