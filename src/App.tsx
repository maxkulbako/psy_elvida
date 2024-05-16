import "./App.scss";
import { About } from "./components/About_section/About";
import { Header } from "./components/Header/Header";
import { Story } from "./components/Story_section/Story";

function App() {
  return (
    <>
      <Header />
      <About />
      <Story />
    </>
  );
}

export default App;
