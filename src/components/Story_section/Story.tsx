import styles from "./Story.module.scss";
import Story_img from "../../assets/story.jpeg";
import { SectionTitle } from "../Typography/Title";

export const Story = () => {
  return (
    <div className={styles.story_container}>
      <p className={styles.page_number}>01</p>
      <SectionTitle
        width="640px"
        color="dark"
        align="right"
        borderBottom="dark"
      >
        Усі відповіді уже в тобі. <br /> Я тільки допоможу їх віднайти"
      </SectionTitle>
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
  );
};
