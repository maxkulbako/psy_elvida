import "./App.scss";
import { About } from "./components/About_section/About";
import { Confidence } from "./components/Confidence_section/Confidence";
import { Header } from "./components/Header/Header";
import { Prices } from "./components/Prices_section/Prices";
import { Story } from "./components/Story_section/Story";
import { Themes } from "./components/Themes_section/Themes";
import { Programs } from "./components/Programs_section/Promgrams";
import { Questions } from "./components/Questions_section/Questions";

function App() {
  return (
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
  );
}

export default App;
