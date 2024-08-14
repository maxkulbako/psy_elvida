import styled from "@emotion/styled";
import { media, theme } from "../../styles/theme";

export const ButtonWrapper = styled.div`
  width: 235px;
  height: 62px;
  padding: 6px;
  border: 0.5px solid #42412d;
  border-radius: 100px;

  ${media.tablet} {
    width: 263px;
  }
`;

export const StyledButton = styled.button`
  width: 100%;
  height: 100%;
  font-weight: 600;
  font-size: 18px;
  color: ${theme.colors.white};
  border-radius: 100px;
  background: linear-gradient(360deg, #1b1c16 1.88%, #5f7237 93.77%);
  transition: 0.3s ease-in;
  display: flex;
  align-items: center;
  justify-content: center;

  ${media.desktop} {
    &:hover {
      background: none;
      color: rgba(66, 65, 45, 1);
    }
  }
`;

export const SvgIcon = styled.div`
  margin-right: 12px;
  color: ${theme.colors.white};

  svg {
    width: 20px;
    height: 20px;
  }
`;
