import { SectionHeader } from "../section-header";
import styles from "./team-section.module.css";

export function TeamSection() {
  return (
    <section class={styles["team-section"]}>
      <SectionHeader title="Equipe" />
      <div class={styles["body"] + " screen-container"}>
        <TeamMemberArticle
          imageSrc="/team/felipe.png"
          name="Felipe Barbosa"
          description="Advogado e sócio-fundador do escritório. Formado pela FADI (Faculdade de Direito de Sorocaba) e pós-graduando em Direito Empresarial pela FGV (Fundação Getúlio Vargas). Possui experiência em diversos ramos do Direito, especialmente Empresarial, Penal e Família e Sucessões. "
        />
        <TeamMemberArticle
          imageSrc="/team/felipe.png"
          name="Felipe Barbosa"
          description="Advogado e sócio-fundador do escritório. Formado pela FADI (Faculdade de Direito de Sorocaba) e pós-graduando em Direito Empresarial pela FGV (Fundação Getúlio Vargas). Possui experiência em diversos ramos do Direito, especialmente Empresarial, Penal e Família e Sucessões. "
        />
        <TeamMemberArticle
          imageSrc="/team/felipe.png"
          name="Felipe Barbosa"
          description="Advogado e sócio-fundador do escritório. Formado pela FADI (Faculdade de Direito de Sorocaba) e pós-graduando em Direito Empresarial pela FGV (Fundação Getúlio Vargas). Possui experiência em diversos ramos do Direito, especialmente Empresarial, Penal e Família e Sucessões. "
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
    <article class={styles["card"]}>
      <header>
        <img src={props.imageSrc} alt={`Foto do ${props.name}`} />
        <h3>{props.name}</h3>
      </header>
      <p>{props.description}</p>
    </article>
  );
}
