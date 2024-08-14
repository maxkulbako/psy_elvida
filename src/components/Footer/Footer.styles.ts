import styled from "@emotion/styled";
import { media, theme } from "../../styles/theme";
import { SectionContainer } from "../Typography/SectionContainer";

export const FooterContainer = styled(SectionContainer)`
  padding-bottom: 60px;
  display: flex;
  flex-direction: column;
  gap: 40px;

  p {
    text-align: center;
    color: ${theme.colors.white};
    font-weight: 400;
    font-size: 18px;
  }

  ${media.desktop} {
    p {
      text-align: start;
    }
  }
`;

export const FooterWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  ${media.desktop} {
    justify-content: space-between;
    flex-direction: row;
  }
`;

export const ContactsWrapper = styled.div`
  p {
    color: ${theme.colors.white};
    font-weight: 400;
    font-size: 18px;

    &:nth-child(1) {
      margin-bottom: 10px;
    }
  }
`;

export const FooterLogoContainer = styled.div`
  display: none;
  height: 48px;

  img {
    height: inherit;
  }
`;

export const FooterSmallLogoContainer = styled.div`
  height: 44px;

  img {
    height: inherit;
  }
`;

export const SocialMediaWrapper = styled.div`
  display: flex;
  gap: 16px;
  color: ${theme.colors.white};

  path {
    color: ${theme.colors.white};
    transition: ease-in 0.3s;
  }

  rect {
    color: ${theme.colors.white};
    transition: ease-in 0.3s;
  }

  svg {
    cursor: pointer;

    ${media.desktop} {
      &:hover {
        fill: #e6ead8;

        path {
          color: #000;
        }
      }
    }
  }
`;
