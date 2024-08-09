import styled from "@emotion/styled";
import { media } from "../../styles/theme";
import { SectionContainer } from "../Typography/SectionContainer";

export const ProgramsContainer = styled(SectionContainer)`
  background-color: #fbfcf7;
`;

export const ProgramsTitleWrapper = styled.div`
  ${media.tablet} {
    max-width: 288px;
  }

  ${media.desktop} {
    max-width: 489px;
  }
`;

export const SectioWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  ${media.tablet} {
    gap: 32px;
  }

  ${media.desktop} {
    padding: 32px 60px;
  }
`;

export const ProgramsBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  gap: 32px;

  ${media.tablet} {
    flex-direction: row;
  }
`;

export const ProgramsImgContainer = styled.div`
  width: 296px;
  height: 360px;
  box-shadow: -60px 0px 70px -20px rgba(140, 151, 117, 0.6);
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  align-items: center;
  object-fit: cover;
  flex-shrink: 0;
  position: relative;

  img {
    transform: scale(-1, 1);
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #efefef1a;
    z-index: 1;
  }

  ${media.tablet} {
    width: 336px;
    height: 590px;

    img {
      height: 100%;
      max-width: none;
    }
  }

  ${media.desktop} {
    width: 360px;
    height: 520px;
  }
`;

export const TextBlock = styled.div`
  height: 436px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  overflow: hidden;

  ${media.tablet} {
    height: 590px;
  }

  ${media.desktop} {
    height: 100%;
    justify-content: space-around;
  }
`;

export const ProgramCardWrapper = styled.div`
  height: 210px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: #f5f6f0;
  padding: 20px 40px;
  gap: 8px;
  flex-shrink: 0;

  h3 {
    font-weight: 600;
    font-size: 20px;
  }

  p {
    font-weight: 400;
    font-size: 16px;
  }

  ${media.tablet} {
    height: 186px;
  }

  ${media.desktop} {
    height: 110px;
    text-align: start;
    align-items: start;
  }
`;
