/** @jsxImportSource @emotion/react */
import { buttonStyles, buttonContainerStyles } from "./CallBackBtn.styles.ts";

export const CallBackButton = () => {
  return (
    <div css={buttonContainerStyles}>
      <button css={buttonStyles} onClick={() => console.log("Call Back")}>
        Звʼязатися
      </button>
    </div>
  );
};
