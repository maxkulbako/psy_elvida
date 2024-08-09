import styled from "@emotion/styled";
import { SectionContainer } from "../Typography/SectionContainer";
import { media, theme } from "../../styles/theme";
import ThemesImg from "../../assets/themes_img.jpeg";
import QuotesSvg from "../../assets/quotes.svg";

export const ThemesContainer = styled(SectionContainer)`
  background: linear-gradient(
      0deg,
      rgba(131, 142, 108, 0.5),
      rgba(131, 142, 108, 0.5)
    ),
    url(${ThemesImg});
  background-position: 50% 50%;
  background-size: cover;
  gap: 32px;

  ${media.tablet} {
    gap: 60px;
  }

  ${media.desktop} {
    gap: 32px;
  }
`;

export const ThemesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  gap: 32px;

  ${media.desktop} {
    flex-direction: row;
    padding: 0 60px 68px 60px;
  }
`;

export const ThemesTitleWrapper = styled.div`
  max-width: 281px;

  ${media.tablet} {
    max-width: 210px;
  }

  ${media.desktop} {
    max-width: 360px;
  }
`;

export const ThemesImgContainer = styled.div`
  width: 296px;
  height: 360px;
  display: flex;
  overflow: hidden;
  align-items: center;
  border-radius: 4px;
  border: 1px solid ${theme.colors.white};
  box-shadow: 20px 0px 30px -17.14px rgba(246, 255, 229, 0.2);

  ${media.tablet} {
    display: none;
  }

  ${media.desktop} {
    display: flex;
    width: 360px;
    height: 520px;
  }
`;

export const ThemesBlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  ${media.desktop} {
    gap: 60px;
  }
`;

export const ThemesBlock = styled.div`
  display: flex;
  max-width: 700px;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ThemaWrapper = styled.div`
  width: 138px;
  padding: 13px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 1);
  border-radius: 148px;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(50px);
  text-align: center;

  p {
    font-size: 10px;
    font-weight: 500;
    color: ${theme.colors.white};
  }

  ${media.tablet} {
    width: 340px;
    padding: 16px 0;

    p {
      font-size: 18px;
      font-weight: 600;
    }
  }
`;

export const QuestionsWrapper = styled(ThemesWrapper)`
  ${media.desktop} {
    flex-direction: row-reverse;
    padding: 0 60px;
  }
`;

export const QuestionsTitleWrapper = styled.div`
  width: 100%;
  align-self: flex-end;

  ${media.tablet} {
    max-width: 240px;
  }

  ${media.desktop} {
    max-width: 412px;
  }
`;

export const QuestionWrapper = styled.div`
  width: 250px;
  height: 66px;
  padding: 17px 23px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(131, 142, 108, 1);
  border-radius: 148px;

  p {
    font-size: 16px;
    font-weight: 500;
    color: ${theme.colors.white};
    text-align: center;
  }

  &::before {
    content: url(${QuotesSvg});
    position: absolute;
    top: -3px;
    left: 3px;
    z-index: 1;
  }

  ${media.tablet} {
    padding: 18px 44px 18px 60px;
    width: 340px;

    &::before {
      top: 10px;
      left: 32px;
    }
  }
`;
