import "./App.css";
import { data } from "./data";
import useObserver from "./hooks/useObserver";
import Header from "./components/header/Header";
import AboutSection from "./components/about/About";
import Arrow from "./components/animated-arrow/arrow";
import ExperienceSection from "./components/experience/Experience";
import MyStack from "./components/stack/Stack";

function App() {
  useObserver();
  return (
    <div className="App">
      <Header />
      <main className="main">
        <AboutSection data={data.about} />
        <Arrow />
        <ExperienceSection data={data.experience} />
        <Arrow />
        <MyStack stack={data.stack} />
        <Arrow />
        <section role="proyectos">Projects</section>
      </main>
    </div>
  );
}

export default App;
