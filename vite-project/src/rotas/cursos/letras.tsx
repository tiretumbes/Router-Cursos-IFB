import { Link } from 'react-router-dom';

export default function Letras() {
  return (
    <section>
      <h1>Licenciatura em Letras – Língua Portuguesa</h1>
      <p>
        A Licenciatura em Letras – Língua Portuguesa forma professores com base sólida em leitura, escrita, literatura e linguística. O curso prepara profissionais para atuar na educação básica, desenvolvendo práticas pedagógicas que valorizam a comunicação e a expressão criativa.
      </p>
      <Link to="/cursos-graduacao">← Voltar para Cursos</Link>
    </section>
  );
}