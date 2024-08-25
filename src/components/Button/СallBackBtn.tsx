/** @jsxImportSource @emotion/react */
import { StyledButton, ButtonWrapper, SvgIcon } from "./CallBackBtn.styles.ts";
import { useModal } from "../../ModalContext.tsx";

interface CallBackButtonProps {
  text: string;
  svgIcon?: React.ReactNode;
  inModal?: boolean;
  onClick?: () => void;
}

export const CallBackButton = ({
  text,
  svgIcon,
  inModal,
  onClick,
}: CallBackButtonProps) => {
  const { openModal } = useModal();

  const handleClick = () => {
    if (inModal && onClick) {
      onClick();
    } else {
      openModal();
    }
  };

  return (
    <ButtonWrapper onClick={handleClick}>
      <StyledButton>
        {svgIcon && <SvgIcon>{svgIcon}</SvgIcon>}
        {text}
      </StyledButton>
    </ButtonWrapper>
  );
};
