import { ImWhatsapp } from "solid-icons/im";
import styles from "./landing-page-header.module.css";

export function LandingPageHeader() {
  return (
    <header class={styles["container"] + " screen-container"}>
      <img
        class={styles["logo"]}
        src="/logo-white.png"
        alt="Logo Antônio Alberto do Vale Cerqueira"
      />
      <img
        class={styles["background"]}
        src="/landing-page/header-background.jpg"
        alt="Imagem de Fundo"
      />
      <div class={styles["inner-container"]}>
        <div class={styles["text-container"]}>
          <h2>
            Advogados criminalistas especializados em flagrantes, defesas
            judiciais, inquéritos policiais e execuções penais.
          </h2>
          <p>
            Temos como propósito defender o cidadão de arbitrariedades cometidas
            por autoridades na condução de investigações e ações penais, a fim
            de garantir a observância da Constituição Federal (Lei Maior),
            garantindo ao cliente, além de informações claras, defesa técnica
            adequada.
          </p>
        </div>
        <a
          class={styles["button"]}
          href="https://wa.me/556133270102"
          target="_blank"
          aria-label="Whatsapp"
        >
          <ImWhatsapp />
          Entre em Contato
        </a>
      </div>
    </header>
  );
}
