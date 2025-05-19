import { SectionHeader } from "~/components/section-header";
import styles from "./description-section.module.css";
import { ImWhatsapp } from "solid-icons/im";

export function DescriptionSection() {
  return (
    <section class={styles["description-section"]}>
      <SectionHeader title="Você recebeu intimação judicial ou de autoridade policial?" />
      <div class={styles["body"] + " screen-container"}>
        <div class={styles["image-container"]}>
          <img
            class={styles["image"]}
            src="/who-we-are.png"
            alt="Foto com o nosso grupo de Advogados"
          />
        </div>
        <div class={styles["text-container"]}>
          <article class={styles["text"]}>
            <p>
              Atuamos em casos criminais desde a fase de inquérito policial até
              instância especial (Superior Tribunal de Justiça e Supremo
              Tribunal Federal).
            </p>
            <p>
              Com sede física em Sorocaba – SP, atuamos em todo o Brasil em
              processos digitais. Atendimento presencial ou online 24 horas.
            </p>
            <p>
              Contamos com advogados especialistas em suas áreas de atuação e
              atendemos de forma presencial ou videoconferência.
            </p>
            <p>
              Hoje, com os processos judiciais digitais, é possível a
              apresentação de defesas em todo o território nacional.
            </p>
            <footer class={styles["button-container"]}>
              <a
                class={styles["button"]}
                href="https://wa.me/556133270102"
                target="_blank"
                aria-label="Whatsapp"
              >
                <ImWhatsapp />
                Entre em Contato
              </a>
            </footer>
          </article>
        </div>
      </div>
    </section>
  );
}
