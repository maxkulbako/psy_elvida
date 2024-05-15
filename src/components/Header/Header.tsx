import styles from "./Header.module.scss";
import Logo from "../../assets/logo.svg";
import { CallBackButton } from "../Button/СallBackBtn";

export const Header = () => {
  return (
    <header className={styles.header_container}>
      <img src={Logo} className={styles.logo_container} alt="Logo" />
      <nav className={styles.menu}>
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
      <CallBackButton />
    </header>
  );
};
