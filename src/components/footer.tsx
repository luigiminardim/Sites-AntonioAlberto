import { ImWhatsapp } from "solid-icons/im";
import styles from "./footer.module.css";
import { TbMailFilled } from "solid-icons/tb";
import { FaBrandsInstagram, FaBrandsLinkedin } from "solid-icons/fa";

export function Footer() {
  return (
    <footer class={styles["footer"] + " screen-container"}>
      <div class={styles["logo-container"]}>
        <img src="/logo.png" alt="Logo Antônio Alberto do Vale Cerqueira" />
      </div>
      <div class={styles["ul-container"]}>
        <h3>MAPA DO SITE</h3>
        <ul>
          <li>
            <a href="/">INÍCIO</a>
          </li>
          <li>
            <a href="/#quem-somos">QUEM SOMOS</a>
          </li>
          <li>
            <a href="/#nossas-epecialidades">NOSSAS ESPECIALIDADES</a>
          </li>
          <li>
            <a href="/#equipe">EQUIPE</a>
          </li>
          <li>
            <a href="/#contato">CONTATO</a>
          </li>
        </ul>
      </div>
      <div class={styles["ul-container"]}>
        <h3>ENDEREÇO</h3>
        <ul>
          <li>
            SHIS QL. 05, Conjunto 5 <br />
            Casa 17, Lago Sul, Brasília - DF <br />
            CEP: 71620-055
          </li>
        </ul>
        <h3>CONTATO</h3>
        <ul>
          <li>
            <a
              href="https://wa.me/556133270102"
              target="_blank"
              aria-label="WhatsApp"
            >
              <ImWhatsapp />
              (61) 3327-0102
            </a>
          </li>
          <li>
            <a
              href="mailto:contato@antonioalberto.adv.br"
              target="_blank"
              aria-label="e-mail"
            >
              <TbMailFilled />
              contato@antonioalberto.adv.br
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/antonioalbertoadvocacia/"
              target="_blank"
              aria-label="Instagram"
            >
              <FaBrandsInstagram />
              @antonioalbertoadvocacia
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/company/antonio-alberto-do-vale-cerqueira-advocacia/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <FaBrandsLinkedin />
              antonio-alberto-do-vale-cerqueira-advocacia
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
