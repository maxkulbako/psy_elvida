import styles from "./Header.module.scss";
import Logo from "../../assets/logo.svg";
import { CallBackButton } from "../Button/СallBackBtn";
import { useState } from "react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.header_container}>
      <div className={styles.logo_container}>
        <img src={Logo} alt="Logo" />
      </div>
      <nav className={`${styles.menu} ${isOpen ? styles.open : ""}`}>
        <ul>
          <li>
            <a href="#">Про мене</a>
          </li>
          <li>
            <a href="#">Запити</a>
          </li>
          <li>
            <a href="#">Вартість</a>
          </li>
          <li>
            <a href="#">Питання</a>
          </li>
        </ul>
      </nav>
      <div className={styles.callback_header_wrapper}>
        <CallBackButton />
      </div>
      <div className={styles.burger_container}>
        <div
          className={`${styles.burger_wrapper} ${isOpen ? styles.open : ""}`}
          onClick={toggleMenu}
        >
          <div className={styles.burger_line}></div>
          <div className={styles.burger_line}></div>
          <div className={styles.burger_line}></div>
        </div>
        <p>Меню</p>
      </div>
    </header>
  );
};
