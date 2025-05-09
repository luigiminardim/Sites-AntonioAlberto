import styles from "./section-header.module.css";

type SectionHeaderProps = {
  title: string;
};

export function SectionHeader({ title }: SectionHeaderProps) {
  return (
    <header class={styles["section-header"] + " screen-container"}>
      <h2 class={styles["title"]}>{title}</h2>
      <span class={styles['icon-container']}>
        <span class={styles['horizontal-bar']}></span>
        <span class={styles['circle']}>
            <img src="/logo-branco.png" alt="Logo Branca"/>
        </span>
      </span>
    </header>
  );
}
