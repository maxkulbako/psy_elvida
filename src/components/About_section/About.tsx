import styles from "./About.module.scss";
import About_img from "../../assets/about_img.jpeg";
import { CallBackButton } from "../Button/СallBackBtn";

export const About = () => {
  return (
    <div className={styles.about_container}>
      <div className={styles.title}>
        <p>НАПРАВЛЮ ТЕБЕ</p>
        <p>
          ЯК <span>ВИРІШИТИ</span>
        </p>
        <p>
          СКЛАДНІ <span>СИТУАЦІЇ</span>
        </p>
      </div>
      <div className={styles.text_wrapper}>
        <p>Психологиня-консультант.</p>
        <p>Допомагаю людям віднайти гармонію.</p>
        <p>Вселяю віру та любов до себе.</p>
        <p>Пізнай себе по-новому!</p>
      </div>
      <div className={styles.btn_wrapper}>
        <CallBackButton />
      </div>
      <div className={styles.img_wrapper}>
        <div className={styles.quote}>
          <p>
            "Усі відповіді уже в <span>тобі.</span>
          </p>
          <p>
            Я тільки <span>допоможу</span> їх віднайти"
          </p>
        </div>
        <div className={styles.img_container}>
          <img src={About_img} alt="About_img" />
        </div>
      </div>
    </div>
  );
};
