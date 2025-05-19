import { SectionHeader } from "../section-header";
import styles from "./specialities-section.module.css";

export function SpecialitiesSection() {
  return (
    <section class={styles["specialities-section"]} id="nossas-epecialidades">
      <SectionHeader title="Nossas Especialidades" />
      <div class={styles["grid"] + " screen-container"}>
        <SpecialityCard title="Direito Penal e Administrativo Sancionatório" />
        <SpecialityCard title="Tribunais Superiores e Tribunais Regionais Federais" />
        <SpecialityCard title="Direito Civil, Família e Sucessões" />
        <SpecialityCard title="Direito Imobiliário e Condominial" />
        <SpecialityCard title="Direito Empresarial e Societário" />
        <SpecialityCard title="Resolução de Conflitos e Causas de Grande Complexidade" />
      </div>
    </section>
  );
}

function SpecialityCard(props: { title: string }) {
  return (
    <article class={styles["card"]}>
      <img src="/logo-secondary.png" alt="Logo" class={styles["card-background"]} />
      <h3 class={styles['card-title']}>{props.title}</h3>
    </article>
  );
}
