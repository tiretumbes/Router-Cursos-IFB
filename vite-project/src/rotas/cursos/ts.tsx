import { Link } from 'react-router-dom';

export default function Secretariado() {
  return (
    <section>
      <h1>Tecnologia em Secretariado</h1>
      <p>
        O curso de Tecnologia em Secretariado forma profissionais para atuar em ambientes administrativos e organizacionais. Desenvolvendo competências em gestão documental, atendimento e organização de processos, prepara secretários(as) modernos(as) para gerenciar informações e otimizar fluxos de trabalho.
      </p>
      <Link to="/cursos-graduacao">← Voltar para Cursos</Link>
    </section>
  );
}