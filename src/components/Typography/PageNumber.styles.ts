import styled from "@emotion/styled";
import { theme } from "../../styles/theme";

interface PageNumberProps {
  align?: "left" | "right";
  color?: "dark" | "light";
}

export const StyledPageNumber = styled.p<PageNumberProps>`
  display: none;
  padding-bottom: 5px;
  font-family: "Montserrat", sans-serif;
  width: fit-content;
  font-size: 16px;
  font-style: italic;
  font-weight: 500;
  line-height: 19.2px;
  color: ${(props) =>
    props.color === "dark" ? theme.colors.mainTitle : theme.colors.white};
  align-self: ${(props) => (props.align === "left" ? "start" : "flex-end")};

  border-bottom: 2px solid ${theme.colors.mainDarkBg};

  ${theme.media.desktop} {
    display: block;
  }
`;
