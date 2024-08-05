import { ThemeProvider, Global } from "@emotion/react";
import { theme } from "./styles/theme";
import { About } from "./components/About_section/About";
import { Confidence } from "./components/Confidence_section/Confidence";
import { Header } from "./components/Header/Header";
import { Prices } from "./components/Prices_section/Prices";
import { Story } from "./components/Story_section/Story";
import { Themes } from "./components/Themes_section/Themes";
import { Programs } from "./components/Programs_section/Promgrams";
import { Questions } from "./components/Questions_section/Questions";
import { globalStyles } from "./styles/global";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <>
        <Header />
        <About />
        <Story />
        <Themes />
        <Prices />
        <Confidence />
        <Programs />
        <Questions />
      </>
    </ThemeProvider>
  );
}

export default App;
