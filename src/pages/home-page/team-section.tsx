import { SectionHeader } from "../../components/section-header";
import styles from "./team-section.module.css";

export function TeamSection() {
  return (
    <section class={styles["team-section"]}>
      <SectionHeader title="Equipe" />
      <div class={styles["body"] + " screen-container"}>
        <TeamMemberArticle
          imageSrc="/team/antonio-alberto.jpg"
          name="Antônio Alberto do Vale Cerqueira"
          description="Sócio fundador, ex-presidente do Tribunal de Ética da OAB/DF e com formação internacional em Harvard. Sua vasta experiência e reconhecimento no meio jurídico o tornam a escolha certa para a defesa estratégica e humanizada em causas complexas."
        />
        <TeamMemberArticle
          imageSrc="/team/davi-oliveira.jpg"
          name="Davi Ferreira de Oliveira"
          description="Advogado atuante nas áreas Cível, Imobiliária, Condominial e Empresarial, com ênfase na advocacia consultiva e preventiva. Sócio do escritório e ex-conselheiro jovem da OAB/DF, Davi oferece uma abordagem completa e estratégica para proteger seus interesses."
        />
        <TeamMemberArticle
          imageSrc="/team/ana-clara.jpg"
          name="Ana Clara Araujo Soares"
          description="Formada em Direito pela Universidade Católica e contadora, Ana Clara traz uma visão diferenciada e sensível para as questões familiares. Sua dedicação e especialização a tornam um ativo valioso para o time e para os clientes que buscam soluções humanizadas."
        />
      </div>
    </section>
  );
}

function TeamMemberArticle(props: {
  imageSrc: string;
  name: string;
  description: string;
}) {
  return (
    <article class={styles["card"]} id="equipe">
      <header>
        <img src={props.imageSrc} alt={`Foto do ${props.name}`} />
        <h3>{props.name}</h3>
      </header>
      <p>{props.description}</p>
    </article>
  );
}
