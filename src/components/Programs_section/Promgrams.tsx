import styles from "./Programs.module.scss";
import Programs_img from "../../assets/programs_img.jpeg";

export const Programs = () => {
  return (
    <div className={styles.programs_container}>
      <p className={styles.page_number}>06</p>
      <div className={styles.block_wrapper}>
        <p className={styles.title}>
          Мої програми. <br></br> Персональні та групові
        </p>
        <div className={styles.section_block}>
          <div className={styles.img_container}>
            <img src={Programs_img} alt="Programs_img" />
          </div>
          <div className={styles.text_block}>
            <div className={styles.text_wrapper}>
              <h3>Корпоративні лекції</h3>
              <p>
                Звертайтесь до мене щодо проведення лекцій чи тренінгів, щоб
                збільшити ефективність своїх співробітників для збільшення
                доходу.
              </p>
            </div>
            <div className={styles.text_wrapper}>
              <h3>Некомерційне партнерство</h3>
              <p>Я активно підтримую ініціативи, які дотичні до психоосвіти.</p>
            </div>
            <div className={styles.text_wrapper}>
              <h3>Корпоративні лекції</h3>
              <p>
                Звертайтесь до мене щодо проведення лекцій чи тренінгів, щоб
                збільшити ефективність своїх співробітників для збільшення
                доходу.
              </p>
            </div>
            <div className={styles.text_wrapper}>
              <h3>Некомерційне партнерство</h3>
              <p>Я активно підтримую ініціативи, які дотичні до психоосвіти.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
