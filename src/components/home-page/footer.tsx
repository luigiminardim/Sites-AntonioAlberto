import { ImWhatsapp } from "solid-icons/im";
import styles from "./footer.module.css";
import { TbMailFilled } from "solid-icons/tb";
import { FaBrandsInstagram, FaBrandsLinkedin } from "solid-icons/fa";

export function Footer() {
  return (
    <footer class={styles["footer"] + " screen-container"}>
      <div class={styles["logo-container"]}>
        <img
          src="/logo-white.png"
          alt="Logo Antônio Alberto do Vale Cerqueira"
        />
      </div>
      <div class={styles["ul-container"]}>
        <h3>MAPA DO SITE</h3>
        <ul>
          <li>
            <a href="/">INÍCIO</a>
          </li>
          <li>
            <a href="#quem-somos">QUEM SOMOS</a>
          </li>
          <li>
            <a href="#nossas-epecialidades">NOSSAS ESPECIALIDADES</a>
          </li>
          <li>
            <a href="#equipe">EQUIPE</a>
          </li>
          <li>
            <a href="#contato">CONTATO</a>
          </li>
        </ul>
      </div>
      <div class={styles["ul-container"]}>
        <h3>ENDEREÇO</h3>
        <ul>
          <li>
            RUA MARIA CARMEN RODRIGUES SAKER, 90, SALA 1009 <br />
            ALTO DA BOA VISTA, SOROCABA-SP
          </li>
        </ul>
        <h3>CONTATO</h3>
        <ul>
          <li>
            <a href="https://wa.me/556133270102" target="_blank">
              <ImWhatsapp />
              (61) 3327-0102
            </a>
          </li>
          <li>
            <a href="mailto:contato@antonioalberto.adv.br">
              <TbMailFilled />
              contato@antonioalberto.adv.br
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/antonioalbertoadvocacia/">
              <FaBrandsInstagram />
              antonioalbertoadvocacia
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/antonio-alberto-do-vale-cerqueira-advocacia/">
              <FaBrandsLinkedin />
              antonio-alberto-do-vale-cerqueira-advocacia
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
