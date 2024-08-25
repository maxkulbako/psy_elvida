import styled from "@emotion/styled";
import { media, theme } from "../../styles/theme";

export const ModalContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: scale(1);
  z-index: 100;
  padding: 32px;
`;

export const ModalWrapper = styled.div`
  max-width: 562px;
  width: 100%;
  background-color: ${theme.colors.mainLightBg};
  position: relative;
  padding: 70px 32px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  border-radius: 8px;
  align-items: center;

  h3 {
    max-width: 240px;
    font-weight: 700;
    font-size: 20px;
    text-align: center;
  }
`;

export const CloseIconWrapper = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;

  ${media.desktop} {
    cursor: pointer;
  }
`;

export const IconsBtnWrapper = styled.div`
  width: 100%;
  display: grid;
  gap: 20px;
  padding: 20px;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(72px, 1fr));
`;

export const BtnWrapper = styled.div<{ selected: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 6px;

  p {
    font-size: 14px;
    font-weight: 600;
  }

  ${media.desktop} {
    cursor: pointer;
  }

  svg {
    fill: ${(props) => (props.selected ? theme.colors.mainDarkBg : "none")};

    ${media.desktop} {
      &:hover {
        fill: ${(props) =>
          props.selected ? theme.colors.mainDarkBg : "#e6ead8"};
      }

      path {
        color: ${(props) => (props.selected ? theme.colors.white : "#000")};
      }
    }
  }

  svg path,
  svg rect {
    color: ${(props) => (props.selected ? theme.colors.white : "currentColor")};
    transition: color 0.3s ease-in;
  }
`;

export const CallBackWrapper = styled.div`
  max-width: 264px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 12px;

  p {
    text-align: center;
    font-size: 14px;
    font-weight: 400;
  }
`;
