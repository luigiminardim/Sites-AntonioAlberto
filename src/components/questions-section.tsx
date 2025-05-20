import { Accordion } from "@ark-ui/solid";
import styles from "./questions-section.module.css";
import { For } from "solid-js";
import { FaSolidPlus } from "solid-icons/fa";
import { ImWhatsapp } from "solid-icons/im";

const questions: { question: string; answer: string }[] = [
  {
    question:
      "Fui intimado para comparecer à Delegacia. Preciso de um advogado?",
    answer: "Sim, é recomendável ter um advogado para te acompanhar.",
  },
  {
    question: "Se eu for intimado e não comparecer, o que pode me acontecer?",
    answer: "Você pode ser considerado em falta e ter sua situação agravada.",
  },
  {
    question:
      "Após eventual condenação, existe algum trabalho a ser realizado por advogado?",
    answer:
      "Sim, o advogado pode atuar na fase de execução penal, buscando benefícios para o condenado.",
  },
  {
    question: "Existe possibilidade de se fazer acordo em processos penais?",
    answer: "Sim, dependendo do tipo de crime e da fase processual.",
  },
  {
    question:
      "Além de defesa técnica, o que posso esperar de um advogado criminalista?",
    answer:
      "Um advogado criminalista pode te orientar sobre seus direitos, estratégias de defesa e acompanhar todo o processo.",
  },
];

export function QuestionSection() {
  return (
    <section class={styles["container"] + " screen-container"}>
      <header class={styles["header"]}>
        <h3>Está com algum desses problemas?</h3>
        <h2>Dúvidas mais comuns sobre processos criminais</h2>
        <hr />
      </header>
      <div class={styles["body"]}>
        <Accordion.Root class={styles["accordion"]} defaultValue={[]} multiple>
          <For each={questions}>
            {(item, index) => (
              <Accordion.Item value={index().toString()}>
                <Accordion.ItemTrigger>
                  {index() + 1}. {item.question}
                  <Accordion.ItemIndicator>
                    <FaSolidPlus />
                  </Accordion.ItemIndicator>
                </Accordion.ItemTrigger>
                <Accordion.ItemContent>{item.answer}</Accordion.ItemContent>
              </Accordion.Item>
            )}
          </For>
        </Accordion.Root>
        <footer class={styles["button-group"]}>
          <a
            class={styles["button"]}
            href="https://wa.me/556133270102"
            target="_blank"
            aria-label="Whatsapp"
          >
            <ImWhatsapp class={styles["top-bar-item-icon"]} />
            Entre em Contato
          </a>
        </footer>
      </div>
    </section>
  );
}
