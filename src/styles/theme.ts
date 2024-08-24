import { breakpointDesktop, breakpointTablet } from "./vars";

export const colors = {
  mainDarkBg: "#8C9775",
  mainLightBg: "#F5F6F0",
  buttonBg: "",
  error: "#DC0C31",
  link: "#0029FF",
  white: "#FFFFFF",
  //   neutral colors
  mainBtnText: "#FCFCFC",
  disabledBtnBg: "#CECECE",
  mainPlaceholder: "#939393",
  disabledBtnText: "#464646",
  mainLabel: "#353535",
  mainText: "#232323",
  mainTitle: "#121212",
  //   primary color
  mainAccent: "#FFBD00",
  secondaryAccent: "#3342CC",
};

export const fonts = {
  body: {
    fontFamily: "'Exo 2', sans-serif",
    fontSize: { desktop: 16, tablet: 14, mobile: 12 },
    lineHeight: { tablet: 1.4, mobile: 1.33 },
    letterSpacing: { tablet: 0.25, mobile: 0.4 },
    fontWeight: 400,
  },
  label: {
    fontFamily: "'Exo 2', sans-serif",
    fontSize: { desktop: 14, tablet: 12, mobile: 11 },
    lineHeight: { tablet: 1.33, mobile: 1.45 },
    letterSpacing: { desktop: 0.1, mobile: 0.5 },
    fontWeight: 400,
  },
  title: {
    fontFamily: "'Poiret One', sans-serif",
    fontSize: { desktop: 40, tablet: 36, mobile: 28 },
    lineHeight: { desktop: 48, tablet: 43.2, mobile: 33.6 },
    fontWeight: 400,
  },
  titleAccent: {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: { desktop: 48, tablet: 42, mobile: 28 },
    lineHeight: { desktop: 57.6, tablet: 50.4, mobile: 33.6 },
    fontWeight: { desktop: 600, tablet: 600, mobile: 700 },
  },
  titleSection: {
    fontFamily: "'Poiret One', sans-serif",
    fontSize: { desktop: 48, tablet: 28, mobile: 28 },
    lineHeight: { desktop: 57.6, tablet: 33.6, mobile: 33.6 },
    fontWeight: { desktop: 400, table: 400, mobile: 400 },
  },
  display: {
    fontFamily: "'Exo 2', sans-serif",
    fontSize: { desktop: 57, tablet: 45, mobile: 36 },
    lineHeight: { desktop: 1.1, tablet: 1.15, mobile: 1.2 },
    fontWeight: 700,
  },
};

export const media = {
  tablet: `@media (min-width: ${breakpointTablet}px)`,
  desktop: `@media (min-width: ${breakpointDesktop}px)`,
};

export const theme = {
  colors,
  media,
  fonts,
};
