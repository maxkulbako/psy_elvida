import { ReactNode } from "react";
import { StyledTitle } from "./Title.styles";

interface SectionTitleProps {
  children: ReactNode | string;
  width?: string;
  align?: "left" | "right";
  color?: "dark" | "light";
  borderBottom?: "dark" | "light" | "none";
}

export const SectionTitle = ({
  children,
  width,
  align,
  color,
  borderBottom,
}: SectionTitleProps) => {
  return (
    <StyledTitle
      width={width}
      align={align}
      color={color}
      borderBottom={borderBottom}
    >
      {children}
    </StyledTitle>
  );
};
