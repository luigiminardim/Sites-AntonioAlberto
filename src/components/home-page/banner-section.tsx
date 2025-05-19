import styles from "./banner-section.module.css";

export function BannerSection() {
  return (
    <section class={styles["banner-section"]}>
      <img
        class={styles["background-image"]}
        src="/banner-background.jpg"
        alt="Imagem de Fundo"
      />
      <div class={styles["surface"]}>
        <p>
        Complexidade Jurídica,<br />Atendimento <b>Humano</b>
        </p>
        <hr />
      </div>
    </section>
  );
}
