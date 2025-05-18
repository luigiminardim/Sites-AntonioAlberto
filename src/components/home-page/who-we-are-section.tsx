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
              Atendemos pessoas naturais e empresas, com foco na melhor solução
              possível e desejável para cada caso. Todo cliente é único e deve
              receber a máxima atenção.
            </p>
            <p>
              Nosso propósito não é apenas fazer o direito de nosso cliente ser
              reconhecido e respeitado, mas também que o seja no tempo mais
              breve possível, dando-lhe, ao longo do caminho, todo o amparo
              necessário, com a indispensável transparência.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
