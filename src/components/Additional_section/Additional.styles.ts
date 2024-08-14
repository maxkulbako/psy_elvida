import styled from "@emotion/styled";
import { media } from "../../styles/theme";

export const SectioWrapper = styled.div`
  margin: 0 auto;
  max-width: 1120px;
  display: flex;
  gap: 32px;
  flex-direction: column;
  align-items: center;

  ${media.desktop} {
    flex-direction: row;
    justify-content: space-between;
    padding: 0 60px;
  }
`;

export const CallBackWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${media.desktop} {
    max-width: 396px;
    p {
      text-align: left;
    }
  }
`;

export const CallBackText = styled.div`
  font-weight: 500px;
  font-size: 16px;
  color: #42412d;
  margin-bottom: 12px;
`;

export const AdditionalImgContainer = styled.div`
  width: 296px;
  height: 360px;
  box-shadow: 20px 0px 60px 0px rgba(140, 151, 117, 0.2);
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  align-items: center;
  object-fit: cover;
  flex-shrink: 0;
  transform: scaleX(-1);
  position: relative;

  ${media.tablet} {
    width: 669px;
    height: 704px;
  }

  ${media.desktop} {
    width: 545px;
    height: 360px;

    img {
      position: absolute;
      top: -150px;
    }
  }
`;
