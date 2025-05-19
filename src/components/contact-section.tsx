import {
  Accessor,
  createSignal,
  Match,
  Setter,
  Show,
  Signal,
  Switch,
} from "solid-js";
import styles from "./contact-section.module.css";
import { Dialog, useDialog, UseDialogReturn } from "@ark-ui/solid/dialog";
import { Portal } from "solid-js/web";

export function ContactSection() {
  const [isSubmiting, setIsSubmiting] = createSignal(false);
  const [successDialogIsOpen, setSuccessDialogIsOpen] = createSignal(false);
  const onsubmit = async (e: Event) => {
    setIsSubmiting(true);
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    const response = await fetch("/api/contact", { method: "post", body: JSON.stringify(data) });
    if (!response.ok) {
      alert("Estamos tendo problemas ao enviar sua mensagem. Por favor, entre em contato pelo E-mail ou Whatsapp.");
      setIsSubmiting(false);
      return;
    }
    setSuccessDialogIsOpen(true);
    setIsSubmiting(false);
  };

  return (
    <section class={styles["contact-section"] + " screen-container"} id="contato">
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
          , vamos conversar, sobre o seu caso e tirar suas{" "}
          <b>dúvidas!</b>
        </h2>
      </header>
      <form class={styles["contact-form"]} onSubmit={onsubmit}>
        <input type="text" id="name" name="name" placeholder="Nome" />
        <input type="tel" id="phone" name="phone" placeholder="Whatsapp" />
        <input type="email" id="email" name="email" placeholder="E-mail" />
        <button type="submit" disabled={isSubmiting()}>
          <Switch fallback={"Entrar em contato!"}>
            <Match when={isSubmiting()}>Enviando...</Match>
          </Switch>
        </button>
        <SuccessDialog
          isOpen={successDialogIsOpen}
          onIsOpenChange={setSuccessDialogIsOpen}
        />
      </form>
    </section>
  );
}

function SuccessDialog(props: {
  isOpen: Accessor<boolean>;
  onIsOpenChange: Setter<boolean>;
}) {
  const onOpenChange = () => props.onIsOpenChange((x) => !x);
  return (
    <Dialog.Root open={props.isOpen()} onOpenChange={onOpenChange}>
      <Portal>
        <Dialog.Backdrop class={styles["dialog__backdrop"]}>
          <Dialog.Positioner class={styles["dialog__positioner"]}>
            <Dialog.Content class={styles["dialog__content"]}>
              <Dialog.Title class={styles["dialog__title"]}>
                Recebemos sua mensagem!
              </Dialog.Title>
              <Dialog.Description class={styles["dialog__description"]}>
                Nossa equipe entrará em contato o mais breve possível.
                Agradecemos pelo seu contato!
              </Dialog.Description>
              <footer class={styles["dialog__footer"]}>
                <Dialog.CloseTrigger class={styles["dialog__close-trigger"]}>
                  Fechar
                </Dialog.CloseTrigger>
              </footer>
            </Dialog.Content>
          </Dialog.Positioner>
        </Dialog.Backdrop>
      </Portal>
    </Dialog.Root>
  );
}
