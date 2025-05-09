import styles from "./contact-section.module.css";

export function ContactSection() {
  return (
    <section class={styles["contact-section"] + " screen-container"}>
      <img
        class={styles["background"]}
        src="/contact-background.jpg"
        alt="Fundo do Formulário de Contato"
      />
      <header>
        <h2>
          Precisa de consultoria de advogados especializados?
          <br />
          <span class={styles["medium"]}>
            Agende uma <b>reunião</b>
          </span>
          , vamos conversar, <br /> sobre o seu caso e tirar suas{" "}
          <b>dúvidas!</b>
        </h2>
      </header>
      <form class={styles["contact-form"]} action="">
        <input type="text" id="name" name="name" placeholder="Nome" />
        <input type="tel" id="phone" name="phone" placeholder="Whatsapp" />
        <input type="email" id="email" name="email"  placeholder="E-mail"/>
        <button type="submit">Entrar em contato!</button>
      </form>
    </section>
  );
}
