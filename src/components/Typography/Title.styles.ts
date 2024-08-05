import styled from "@emotion/styled";
import { theme } from "../../styles/theme";

interface StyledTitleProps {
  width?: string;
  align?: "left" | "right";
  color?: "dark" | "light";
  borderBottom?: "dark" | "light" | "none";
}

export const StyledTitle = styled.p<StyledTitleProps>`
  font-family: ${theme.fonts.titleSection.fontFamily};
  font-size: ${theme.fonts.titleSection.fontSize.mobile}px;
  font-weight: ${theme.fonts.titleSection.fontWeight.mobile};
  line-height: ${theme.fonts.titleSection.lineHeight.mobile}px;
  padding-bottom: 20px;
  max-width: ${(props) => props.width || "100%"};
  text-align: ${(props) => (props.align === "left" ? "left" : "right")};
  align-self: ${(props) => (props.align === "left" ? "start" : "end")};
  color: ${(props) =>
    props.color === "dark" ? theme.colors.mainTitle : theme.colors.white};

  border-bottom: ${(props) =>
    props.borderBottom && props.borderBottom !== "none"
      ? `3px solid ${
          props.borderBottom === "dark"
            ? theme.colors.mainDarkBg
            : theme.colors.mainLightBg
        }`
      : "none"};

  ${theme.media.tablet} {
    font-size: ${theme.fonts.titleSection.fontSize.tablet}px;
    line-height: ${theme.fonts.titleSection.lineHeight.tablet}px;
  }

  ${theme.media.desktop} {
    font-size: ${theme.fonts.titleSection.fontSize.desktop}px;
    line-height: ${theme.fonts.titleSection.lineHeight.desktop}px;
  }
`;
