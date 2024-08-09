import styled from "@emotion/styled";
import { media, theme } from "../../styles/theme";
import { StyledPageNumber } from "../Typography/PageNumber.styles";
import ArrowDownIcon from "../../assets/arrow_down.svg";
import ArrowUpIcon from "../../assets/arrow_up.svg";

export const PageNumber = styled(StyledPageNumber)`
  border-bottom: 2px solid #42412d;
`;

export const FaqWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  max-width: 720px;
  align-self: center;
`;

export const FaqBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  align-self: center;
`;

export const Question = styled.div`
  padding: 16px 62px 16px 20px;
  display: flex;
  align-items: center;
  position: relative;
  border: 0.5px solid ${theme.colors.white};
  border-radius: 8px;
  box-shadow: 0 2px 4px 0;
  backdrop-filter: blur(25px);
  background-color: ${theme.colors.mainDarkBg};

  &::before {
    content: url(${ArrowDownIcon});
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
  }

  h3 {
    font-weight: 600;
    font-size: 16px;
    color: #42412d;
  }

  ${media.tablet} {
    padding: 16px 32px;

    h3 {
      padding: 11px 0;
      font-size: 18px;
    }
  }

  ${media.desktop} {
    cursor: pointer;
  }
`;

export const AnswerWrapper = styled.div<{ isOpen: boolean }>`
  max-height: ${({ isOpen }) => (isOpen ? "1000px" : "0")};
  overflow: hidden;
  transition: max-height 1.4s ease, padding 0.6s ease;
  padding: ${({ isOpen }) => (isOpen ? "16px 0" : "0")};
`;

export const Answer = styled(Question)`
  margin-top: 20px;
  flex-direction: column;
  align-items: flex-start;
  background-color: ${theme.colors.mainLightBg};

  &::before {
    content: url(${ArrowUpIcon});
    top: 35px;
  }

  p {
    font-weight: 400;
    font-size: 16px;
  }
`;
