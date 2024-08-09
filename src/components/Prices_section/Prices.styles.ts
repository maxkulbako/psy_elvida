import styled from "@emotion/styled";
import { media, theme } from "../../styles/theme";

export const PricesTitleWrapper = styled.div`
  align-self: center;

  max-width: 184px;

  ${media.tablet} {
    max-width: 210px;
  }

  ${media.desktop} {
    max-width: 360px;
  }
`;

export const PricesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
`;

export const PricesBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;

  ${media.tablet} {
    flex-direction: row;
  }

  ${media.desktop} {
    padding: 0 60px;
  }
`;

export const PriceCard = styled.div`
  display: flex;
  flex-direction: column;
  height: 212px;
  width: 100%;
  border-radius: 8px;
  border: 3px solid rgba(230, 234, 216, 1);

  &:nth-child(2) {
    border: 3px solid rgba(140, 151, 117, 1);
  }

  ${media.desktop} {
    &:nth-child(2) {
      height: 240px;
    }
  }
`;

export const PricesTitle = styled.div`
  background-color: ${theme.colors.mainDarkBg};
  color: ${theme.colors.white};
  font-weight: 600;
  font-size: 24px;
  text-align: center;
  padding: 12px 20px;

  ${media.desktop} {
    font-weight: 700;
    font-size: 28px;
  }
`;

export const PriceText = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 32px;
  align-items: center;
  p {
    font-weight: 600;
    font-size: 18px;
    line-height: 21.6px;
    text-align: center;

    span {
      font-weight: 400;
      font-size: 18px;
    }
  }

  ${media.desktop} {
    p {
      font-weight: 600;
      font-size: 24px;
      text-align: center;

      span {
        font-weight: 400;
        font-size: 20px;
      }
    }
  }
`;
