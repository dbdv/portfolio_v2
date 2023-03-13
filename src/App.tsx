import "./App.css";
import { data } from "./data";
import useObserver from "./hooks/useObserver";
import Header from "./components/header/Header";
import AboutSection from "./components/about/About";
import Arrow from "./components/animated-arrow/arrow";
import ExperienceSection from "./components/experience/Experience";
import { useEffect } from "react";

import "./stack.css";
import "./icon.css";
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
        <MyStack />
        <Arrow />
        <section role="proyectos">Projects</section>
      </main>
    </div>
  );
}

function MyStack() {
  return (
    <section role="mi stack" className="hidden padding">
      <div className="external-container">
        <div className="section-main-div-cover">
          <h2 className="section-title stack-title">Mi stack</h2>
          <img className="node-img-mobile" src="node-icon-240.png" />
        </div>
        <h3>Lenguajes y Frameworks</h3>
        <article className="cover-lang-icons">
          {data.stack.laguanges.map((lang) => {
            return (
              <IconDiv icon_url={lang.icon_url} label={lang.laguange_name} />
            );
          })}
        </article>
        <h3>Otras Tecnologías</h3>
        <article className="cover-techs-icons">
          {data.stack.techlonogies.map((tech, idx) => {
            return (
              <IconDiv icon_url={tech.icon_url} label={tech.technology_name} />
            );
          })}
        </article>
      </div>
      <aside></aside>
    </section>
  );
}

function IconDiv({ icon_url, label }: { icon_url: string; label: string }) {
  useEffect(() => {
    console.log(document.querySelectorAll(".icon-cover"));
    document.querySelectorAll(".icon-cover").forEach((element, idx) => {
      element.setAttribute("style", `animation-delay: 1s`);
    });
  }, []);

  return (
    <div className="icon-cover">
      <div className="inner-icon-cover">
        <img src={icon_url} alt="" />
        <h4>{label}</h4>
      </div>
    </div>
  );
}

export default App;
