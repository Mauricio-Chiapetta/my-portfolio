import styles from "@/app/styles/Contact.module.css";
const Contact = () => {
  return (
    <div id="Contact" className={styles["contact-container"]}>
      <h2>Entre em contato</h2>
      <p>
        Se quiser que trabalhemos juntos, tiver alguma dúvida, minha caixa de
        entrada está sempre aberta. Se quiser apenas dizer oi, farei o possível
        para entrar em contato com você! Abraços!
      </p>
      <a
        href="mailto:mauriciochiapetta6@gmail.com"
        className={styles["cta-btns"]}
      >
        Meu email
      </a>
    </div>
  );
};

export default Contact;
