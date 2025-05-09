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
          Nosso foco é<br />o seu <b>direito.</b>
        </p>
        <hr />
      </div>
    </section>
  );
}
