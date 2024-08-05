import { ReactNode } from "react";
import { StyledTitle } from "./Title.styles";

interface SectionTitleProps {
  children: ReactNode | string;
  align?: "left" | "right";
  color?: "dark" | "light";
  borderBottom?: "dark" | "light" | "none";
}

export const SectionTitle = ({
  children,
  align,
  color,
  borderBottom,
}: SectionTitleProps) => {
  return (
    <StyledTitle align={align} color={color} borderBottom={borderBottom}>
      {children}
    </StyledTitle>
  );
};
