import styles from "./Confidence.module.scss";
import SmallLogo from "../../assets/small_logo.svg";

export const Confidence = () => {
  return (
    <div className={styles.confidence_container}>
      <p className={styles.page_number}>05</p>
      <div className={styles.confidence_block}>
        <p className={styles.title}>100% КОНФІДЕНЦІЙНОСТІ</p>
        <p className={styles.text_block}>
          Я дію відповідно до етичних стандартів УАПП <br></br>
          <br></br>
        </p>
        <p className={styles.text_block}>
          Завжди враховую інтереси своїх клієнтів, усвідомлюю <br></br>
          межі своїх знань, <br></br>
          досвіду та навичок.
        </p>
        <img className={styles.small_logo} src={SmallLogo} alt="" />
      </div>
    </div>
  );
};
