import styled from "@emotion/styled";
import { media, theme } from "../../styles/theme";
import { ThemesTitleWrapper } from "../Themes_section/Themes.styles";

interface SectionContainerProps {
  background?: "green" | null;
}

export const SectionContainer = styled.div<SectionContainerProps>`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 60px 32px;
  background-color: ${(props) =>
    props.background == "green"
      ? theme.colors.mainDarkBg
      : theme.colors.mainLightBg};

  ${media.desktop} {
    padding: 100px;
  }
`;
