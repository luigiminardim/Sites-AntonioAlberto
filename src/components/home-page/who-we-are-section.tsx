import { SectionHeader } from "~/components/section-header";
import styles from "./who-we-are-section.module.css";

export function WhoWeAreSection() {
  return (
    <section class={styles["who-we-are-section"]} id="quem-somos">
      <SectionHeader title="Quem Somos" />
      <div class={styles["body"] + " screen-container"}>
        <div class={styles["image-container"]}>
          <img
            class={styles["image"]}
            src="/who-we-are.png"
            alt="Foto com o nosso grupo de Advogados"
          />
        </div>
        <div class={styles["text-container"]}>
          <div class={styles["text"]}>
            <p>
              Fundada em abril de 1998, a Antonio Alberto do Vale Cerqueira
              Advocacia oferece uma advocacia diferenciada, com foco na
              humanização e na profunda compreensão das necessidades de cada
              cliente. Ao longo de mais de duas décadas, desenvolvemos expertise
              em consultoria estratégica, gestão de crises e atuação contenciosa
              de alta complexidade em diversos tribunais e órgãos
              administrativos.
            </p>
            <p>
              Nossa vasta e comprovada experiência no acompanhamento de
              processos nos Tribunais Superiores, TCU, Justiça Federal,
              Tribunais Estaduais (TJDFT, TJSP, TJRJ, TJMT, TJMG, TJGO e
              outros), justiça do trabalho e em órgãos da Administração direta e
              indireta, especialmente na segurança pública estadual e federal,
              nos habilita a lidar com os desafios jurídicos mais intrincados.
              Essa trajetória nos confere um know-how essencial para prestar
              assistência jurídica de excelência em diversas áreas do Direito,
              com notável especialização em causas que exigem um olhar
              estratégico e soluções inovadoras.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
