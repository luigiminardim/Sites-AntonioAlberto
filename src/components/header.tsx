import { TbMailFilled, TbPhoneFilled } from "solid-icons/tb";
import styles from "./header.module.css";
import { ImPhone } from "solid-icons/im";
import { FaBrandsInstagram, FaBrandsLinkedin } from "solid-icons/fa";

export function Header() {
  return (
    <header class={styles["header"]}>
      <div class={styles["top-bar"] + " screen-container"}>
        <ul class={styles["top-bar-contact-list"]}>
          <li>
            <a href="mailto:contato@antonioalberto.adv.br">
              <TbMailFilled class={styles["top-bar-item-icon"]} />
              CONTATO@ANTONIOALBERTO.ADV.BR
            </a>
          </li>
          <li>
            <a href="tel:+556133270102">
              <ImPhone class={styles["top-bar-item-icon"]} />
              (61) 3327-0102
            </a>
          </li>
        </ul>
        <ul class={styles["top-bar-social-list"]}>
          <li>
            <a href="https://www.instagram.com/antonioalbertoadvocacia/">
              <FaBrandsInstagram class={styles["top-bar-item-icon"]} />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/antonio-alberto-do-vale-cerqueira-advocacia/">
              <FaBrandsLinkedin class={styles["top-bar-item-icon"]} />
            </a>
          </li>
        </ul>
      </div>
      <div class={styles["body"] + " screen-container"}>
        <img
          class={styles["logo-image"]}
          src="/logo.png"
          alt="Logo Antônio Alberto do Vale Cerqueira Advocacia"
        />
        <nav class={styles["nav"]}>
          <a href="#quem-somos" class={styles["nav-link"]}>
            QUEM SOMOS
          </a>
          <a href="#nossas-epecialidades" class={styles["nav-link"]}>
            NOSSAS ESPECIALIDADES
          </a>
          <a href="#equipe" class={styles["nav-link"]}>
            EQUIPE
          </a>
          <a href="#contato" class={styles["nav-link"]}>
            CONTATO
          </a>
        </nav>
      </div>
    </header>
  );
}
