import styled from "@emotion/styled";
import { media, theme } from "../../styles/theme";
import { SectionContainer } from "../Typography/SectionContainer";
import ConfidenceImg from "../../assets/confidence_img_desk.webp";

export const ConfidenceContainer = styled(SectionContainer)`
  background: linear-gradient(
      0deg,
      rgba(140, 151, 117, 0.5),
      rgba(140, 151, 117, 0.5)
    ),
    url(${ConfidenceImg});
  background-position: 50% 50%;
  background-size: cover;
  align-items: center;
`;

export const ConfidenceTitleWrapper = styled.div`
  p {
    text-align: center;
  }

  ${media.tablet} {
    min-width: 395px;
  }

  ${media.desktop} {
    min-width: 700px;
  }
`;

export const ConfidenceBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px 24px;
  gap: 32px;

  box-shadow: 0px 2px 20px 0px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(20px);
  background: rgba(255, 255, 255, 0.05);

  ${media.tablet} {
    padding: 24px 48px;
  }
`;

export const Text = styled.p`
  font-family: "Montserrat";
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  width: 100%;
  color: ${theme.colors.white};

  ${media.desktop} {
    font-weight: 200;
    font-size: 20px;
  }
`;
