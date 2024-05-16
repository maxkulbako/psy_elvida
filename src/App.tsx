import "./App.scss";
import { About } from "./components/About_section/About";
import { Header } from "./components/Header/Header";
import { Story } from "./components/Story_section/Story";
import { Themes } from "./components/Themes_section/Themes";

function App() {
  return (
    <>
      <Header />
      <About />
      <Story />
      <Themes />
    </>
  );
}

export default App;
