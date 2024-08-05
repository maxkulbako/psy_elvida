import styles from "./Themes.module.scss";
import Themes_img from "../../assets/themes_img.jpeg";
import Questions_img from "../../assets/questions_img.jpeg";
import { SectionTitle } from "../Typography/Title";

export const Themes = () => {
  return (
    <div className={styles.themes_container}>
      <p className={styles.page_number}>02</p>
      <div className={styles.themes_block}>
        <div className={styles.text_block_wrapper}>
          <SectionTitle align="left" borderBottom="dark" color="light">
            Теми, на які Ти знайдеш відповіді
          </SectionTitle>
          <div className={styles.themes_wrapper}>
            <div className={styles.thema_wrapper}>
              <p>ВІДНОСИНИ В СІМʼЇ, РОДИНІ</p>
            </div>
            <div className={styles.thema_wrapper}>
              <p>ВИГОРАННЯ</p>
            </div>
            <div className={styles.thema_wrapper}>
              <p>СТОСУНКИ З ПАРТНЕРОМ</p>
            </div>
            <div className={styles.thema_wrapper}>
              <p>САМООЦІНКА</p>
            </div>
            <div className={styles.thema_wrapper}>
              <p>ПОШУК СЕБЕ</p>
            </div>
            <div className={styles.thema_wrapper}>
              <p>САМОРЕАЛІЗАЦІЯ</p>
            </div>
            <div className={styles.thema_wrapper}>
              <p>БАЛАНС В ЖИТТІ</p>
            </div>
            <div className={styles.thema_wrapper}>
              <p>ХТО Я?</p>
            </div>
          </div>
        </div>
        <div className={styles.img_container}>
          <img src={Themes_img} alt="Themes_img" />
        </div>
      </div>
      <p className={styles.page_number} style={{ alignSelf: "flex-start" }}>
        03
      </p>
      <div
        className={styles.themes_block}
        style={{ flexDirection: "row-reverse" }}
      >
        <div className={styles.text_block_wrapper}>
          <p
            className={styles.title}
            style={{ alignSelf: "end", width: "412px" }}
          >
            Запити, з якими звертаються клієнти
          </p>
          <div className={styles.themes_wrapper}>
            <div className={styles.question_wrapper}>
              <p>Я заплуталась з правильним рішенням</p>
            </div>
            <div className={styles.question_wrapper}>
              <p>Мене не розуміють і не чують рідні</p>
            </div>
            <div className={styles.question_wrapper}>
              <p>Не розумію куди рухатись далі </p>
            </div>
            <div className={styles.question_wrapper}>
              <p>Не знаю, що зі мною, але я якась не така</p>
            </div>
            <div className={styles.question_wrapper}>
              <p>Втомилась від постійної гонки</p>
            </div>
            <div className={styles.question_wrapper}>
              <p>Відчуття самозванця</p>
            </div>
            <div className={styles.question_wrapper}>
              <p>Відчуваю в собі сили зробити ривок, але боюсь</p>
            </div>
            <div className={styles.question_wrapper}>
              <p>Не можу казати «ні»</p>
            </div>
            <div className={styles.question_wrapper}>
              <p>Загубила себе. Не знаю з чого почати»</p>
            </div>
          </div>
        </div>
        <div className={styles.img_container}>
          <img
            src={Questions_img}
            alt="Themes_img"
            style={{ transform: "scaleX(-1)" }}
          />
        </div>
      </div>
    </div>
  );
};
