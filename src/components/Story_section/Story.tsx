import styles from "./Story.module.scss";
import Story_img from "../../assets/story.jpeg";

export const Story = () => {
  return (
    <div className={styles.story_container}>
      <p className={styles.page_number}>01</p>
      <div className={styles.quote}>
        <p className={styles.quote_text}>"Усі відповіді уже в тобі.</p>
        <p className={styles.quote_text}>Я тільки допоможу їх віднайти"</p>
        <div className={styles.section_block}>
          <div className={styles.img_container}>
            <img src={Story_img} alt="About_img" />
          </div>
          <div className={styles.text_wrapper}>
            <h2>Моя історія </h2>
            <p>
              Сім років тому я розпочала свою подорож до психології. Я знаю, як
              почувається людина, яка відчуває біль, вигорання і розгубленість.{" "}
            </p>
            <p>
              Знаю, як віднайти омріяний BALANCE. Сміливо починати все з нуля і
              реалізовуватися на повну.{" "}
            </p>
            <p>
              Моя місія - спільно з тобою знайти твою внутрішню силу, віру і
              бажання, які допоможуть жити на повну і саме головне - відчути
              справжню енергію життя.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
