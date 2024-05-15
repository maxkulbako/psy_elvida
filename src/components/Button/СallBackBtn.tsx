import styles from "./CallBackBtn.module.scss";

export const CallBackButton = () => {
  return (
    <div className={styles.btn_container}>
      <button
        className={styles.callback_btn}
        onClick={() => console.log("Call Back")}
      >
        Звʼязатися
      </button>
    </div>
  );
};
