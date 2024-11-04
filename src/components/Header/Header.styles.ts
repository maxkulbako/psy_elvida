import styled from "@emotion/styled";
import { media, theme } from "../../styles/theme";

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 36px 32px 12px 32px;
  background-color: ${theme.colors.mainDarkBg};
  display: flex;
  align-items: center;
  gap: 26px;

  border-bottom: 1px solid rgba(66, 65, 45, 1);

  ${media.tablet} {
    padding: 12px 32px;
  }

  ${media.desktop} {
    padding: 12px 100px;
    justify-content: space-between;
  }
`;

export const LogoWrapper = styled.div`
  height: 36px;
  flex: 1;

  ${media.tablet} {
    height: 48px;
  }

  ${media.desktop} {
    flex: none;
  }

  img {
    height: inherit;
  }
`;

export const Menu = styled.nav<{ isOpen: boolean }>`
  z-index: 100;
  transition: opacity 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  pointer-events: ${({ isOpen }) => (isOpen ? "auto" : "none")};
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  flex-direction: ${({ isOpen }) => (isOpen ? "column" : "row")};
  align-items: center;
  position: ${({ isOpen }) => (isOpen ? "fixed" : "static")};
  top: ${({ isOpen }) => (isOpen ? "85px" : "initial")};
  left: ${({ isOpen }) => (isOpen ? "0" : "initial")};
  width: ${({ isOpen }) => (isOpen ? "100%" : "auto")};
  height: ${({ isOpen }) => (isOpen ? "395px" : "auto")};
  backdrop-filter: ${({ isOpen }) => (isOpen ? "blur(20px)" : "none")};
  padding: ${({ isOpen }) => (isOpen ? "60px 0" : "0")};

  ul {
    display: flex;
    flex-direction: ${({ isOpen }) => (isOpen ? "column" : "row")};
    gap: 30px;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    padding: 3px;
    position: relative;

    ${media.tablet} {
      padding: 6px 15px;
    }

    text-align: ${({ isOpen }) => (isOpen ? "center" : "left")};
  }

  a {
    cursor: pointer;
    font-size: 16px;
    color: rgba(255, 255, 255, 1);
    text-decoration: none;
    position: relative;

    ${media.desktop} {
      &:after {
        content: "";
        display: block;
        position: absolute;
        right: 0;
        bottom: 0;
        width: 0;
        height: 1px;
        background-color: rgba(255, 255, 255, 1);
        transition: width 0.7s;
      }

      &:hover:after {
        width: 100%;
        left: 0;
        bottom: 0;
        height: 1px;
        background-color: rgba(255, 255, 255, 1);
      }
    }
  }

  ${media.desktop} {
    display: flex;
    opacity: 1;
    pointer-events: auto;
    height: auto;
    position: static;
    padding: 0;
    backdrop-filter: none;
  }
`;

export const BurgerContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: center;

  p {
    display: none;
    font-size: 14px;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);

    ${media.tablet} {
      display: block;
    }
  }

  ${media.desktop} {
    display: none;
  }
`;

export const BurgerWrapper = styled.div<{ isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 25px;
  height: 22px;
  cursor: pointer;
`;

export const BurgerLine = styled.div<{ isOpen: boolean; index: number }>`
  width: 100%;
  height: 2px;
  background-color: rgba(255, 255, 255, 1);
  transition: all 0.3s ease;

  ${({ isOpen, index }) => {
    if (!isOpen) return "";

    if (index === 1) {
      return "transform: rotate(45deg) translate(8px, 8px);";
    }
    if (index === 2) {
      return "transform: scale(0.1);";
    }
    if (index === 3) {
      return "transform: rotate(-45deg) translate(7px, -6px);";
    }

    return "";
  }}
`;

export const CallBackHeaderWrapper = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;
