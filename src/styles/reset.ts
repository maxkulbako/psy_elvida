import { css } from "@emotion/react";

export const reset = css`
  html {
    scroll-behavior: smooth;
  }

  * {
    padding: 0px;
    margin: 0px;
    border: none;

    font-family: "Montserrat", sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: #2a2a2a;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Links */

  a,
  a:link,
  a:visited {
    text-decoration: none;
  }

  a:hover {
    text-decoration: none;
  }

  /* Common */

  aside,
  nav,
  footer,
  header,
  section,
  main {
    display: block;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    font-size: inherit;
    font-weight: inherit;
  }

  ul,
  ul li {
    list-style: none;
  }

  img {
    vertical-align: top;
  }

  img,
  svg {
    display: block;
    max-width: 100%;
    height: auto;
  }

  address {
    font-style: normal;
  }

  /* Form */

  input,
  textarea,
  button,
  select {
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    background-color: transparent;
  }

  input::-ms-clear {
    display: none;
  }

  button,
  input[type="submit"] {
    display: inline-block;
    box-shadow: none;
    background-color: transparent;
    background: none;
    cursor: pointer;
  }

  input:focus,
  input:active,
  button:focus,
  button:active {
    outline: none;
  }

  button::-moz-focus-inner {
    padding: 0;
    border: 0;
  }

  label {
    cursor: pointer;
  }

  legend {
    display: block;
  }

  body {
    display: block;
    min-width: 320px;

    margin-left: auto;
    margin-right: auto;

    @media screen and (min-width: 360px) {
      min-width: 360px;
    }

    @media screen and (min-width: 768px) {
      min-width: 768px;
    }

    @media screen and (min-width: 1440px) {
      min-width: 1440px;
      max-width: 1440px;
    }
  }
`;
