import styled from "@emotion/styled";
import { media } from "../../styles/theme";

export const StoryTitleWrapper = styled.div`
  ${media.tablet} {
    max-width: 371px;
    align-self: end;
  }

  ${media.desktop} {
    max-width: 640px;
  }
`;

export const SectioWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  ${media.desktop} {
    gap: 60px;
  }
`;

export const StoryBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  gap: 32px;

  ${media.tablet} {
    flex-direction: row;
  }

  ${media.desktop} {
    padding: 0 60px;
  }
`;

export const StoryImgContainer = styled.div`
  max-width: 256px;
  height: 360px;
  box-shadow: -60px 0px 70px -20px rgba(140, 151, 117, 0.6);
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  align-items: center;
  flex-shrink: 0;

  ${media.tablet} {
    max-width: 336px;
    height: 398px;
  }

  ${media.desktop} {
    max-width: 420px;
    height: 550px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  ${media.desktop} {
    width: 485px;
  }
`;

export const TextTitle = styled.h2`
  font-weight: 600;
  font-size: 18px;

  ${media.desktop} {
    font-size: 20px;
  }
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 16px;

  ${media.desktop} {
    font-size: 20px;
  }
`;
