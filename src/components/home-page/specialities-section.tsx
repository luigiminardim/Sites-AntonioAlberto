import { SectionHeader } from "../section-header";
import styles from "./specialities-section.module.css";

export function SpecialitiesSection() {
  return (
    <section class={styles["specialities-section"]} id="nossas-epecialidades">
      <SectionHeader title="Nossas Especialidades" />
      <div class={styles["grid"] + " screen-container"}>
        <SpecialityCard title="Cobrança e recuperação de ativos" />
        <SpecialityCard title="Contratos empresariais" />
        <SpecialityCard title="Proteção de dados pessoais (LGPD)" />
        <SpecialityCard title="Cobrança e recuperação de ativos" />
        <SpecialityCard title="Contratos empresariais" />
        <SpecialityCard title="Proteção de dados pessoais (LGPD)" />
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
