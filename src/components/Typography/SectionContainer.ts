import styled from "@emotion/styled";
import { media, theme } from "../../styles/theme";

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 60px 32px;
  background-color: ${theme.colors.mainLightBg};

  ${media.desktop} {
    padding: 100px;
  }
`;
