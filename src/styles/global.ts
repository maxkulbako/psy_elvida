import { css } from "@emotion/react";
import { reset } from "./reset";

const common = css`
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Poiret+One:wght@400;500;600&display=swap");
  html,
  body {
    font-style: normal;
  }
`;

export const globalStyles = css`
  ${common}
  ${reset}
`;
