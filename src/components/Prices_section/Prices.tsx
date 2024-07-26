import { CallBackButton } from "../Button/СallBackBtn";
import styles from "./Prices.module.scss";

export const Prices = () => {
  return (
    <div className={styles.prices_container}>
      <p className={styles.page_number}>04</p>
      <div className={styles.prices_wrapper}>
        <p className={styles.title}>"Тарифи"</p>
        <div className={styles.prices_block}>
          <div className={styles.price_card}>
            <div>
              <p className={styles.price_title}>500 грн</p>
            </div>
            <div className={styles.price_text}>
              <p>
                1 <br />
                <span>консультація</span>
              </p>
            </div>
          </div>
          <div className={styles.price_card}>
            <div>
              <p className={styles.price_title}>2500 грн</p>
            </div>
            <div className={styles.price_text}>
              <p>
                5+1 <br />
                <span>1 консультація в</span> <br />
                ПОДАРУНОК <br />
                <span style={{ fontWeight: "500", fontSize: "500" }}>
                  *рекомендую
                </span>
              </p>{" "}
            </div>
          </div>
          <div className={styles.price_card}>
            <div>
              <p className={styles.price_title}>5000 грн</p>
            </div>
            <div className={styles.price_text}>
              <p>
                10+3 <br />
                <span>3 консультації в</span> <br />
                ПОДАРУНОК
              </p>
            </div>
          </div>
        </div>
        <div style={{ alignSelf: "center" }}>
          <CallBackButton />
        </div>
      </div>
    </div>
  );
};
