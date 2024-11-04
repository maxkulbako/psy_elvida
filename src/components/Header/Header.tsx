import {
  HeaderContainer,
  LogoWrapper,
  Menu,
  BurgerContainer,
  BurgerWrapper,
  BurgerLine,
  CallBackHeaderWrapper,
} from "./Header.styles";
import Logo from "../../assets/logo.svg";
import { CallBackButton } from "../Button/СallBackBtn";
import { useState } from "react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks: { text: string; sectionId: string }[] = [
    { text: "Про мене", sectionId: "section_story" },
    { text: "Запити", sectionId: "section_questions" },
    { text: "Вартість", sectionId: "section_prices" },
    { text: "Питання", sectionId: "section_faq" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleButtonClick =
    (sectionId: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" }); // Прокрутка к элементу
      }
      setIsOpen(false);
    };

  return (
    <HeaderContainer>
      <LogoWrapper>
        <img src={Logo} alt="Logo" />
      </LogoWrapper>
      <Menu isOpen={isOpen}>
        <ul>
          {navLinks.map((link, index) => (
            <li key={index}>
              <a onClick={handleButtonClick(link.sectionId)}>{link.text}</a>
            </li>
          ))}
        </ul>
      </Menu>
      <CallBackHeaderWrapper>
        <CallBackButton text="Звʼязатися" />
      </CallBackHeaderWrapper>
      <BurgerContainer onClick={toggleMenu}>
        <BurgerWrapper isOpen={isOpen}>
          <BurgerLine isOpen={isOpen} index={1} />
          <BurgerLine isOpen={isOpen} index={2} />
          <BurgerLine isOpen={isOpen} index={3} />
        </BurgerWrapper>
      </BurgerContainer>
    </HeaderContainer>
  );
};
