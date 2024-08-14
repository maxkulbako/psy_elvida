/** @jsxImportSource @emotion/react */
import { StyledButton, ButtonWrapper, SvgIcon } from "./CallBackBtn.styles.ts";

interface CallBackButtonProps {
  text: string;
  svgIcon?: React.ReactNode;
}

export const CallBackButton = ({ text, svgIcon }: CallBackButtonProps) => {
  return (
    <ButtonWrapper>
      <StyledButton onClick={() => console.log("Call Back")}>
        {svgIcon && <SvgIcon>{svgIcon}</SvgIcon>}
        {text}
      </StyledButton>
    </ButtonWrapper>
  );
};
