import "./App.css";
import "./experience.css";
import Header from "./components/header/Header";
import AboutSection from "./components/about/About";
import { data } from "./data";
import { useEffect, useRef } from "react";
import Arrow from "./components/animated-arrow/arrow";

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("showInterception", entry.isIntersecting);
      });
    });

    document.querySelectorAll(".hidden").forEach((element) => {
      observer.observe(element);
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <main className="main">
        <AboutSection data={data.about} />
        <Arrow />
        <ExperienceSection />
        <section role="mi stack">Stack</section>
        <section role="proyectos">Projects</section>
      </main>
    </div>
  );
}
function ExperienceSection() {
  return (
    <section role="experiencia" className="hidden exp-cover">
      <div>
        <div className="exp-title-div">
          <h2 className="exp-title">Experiencia</h2>
          <img className="js-img-mobile" src="javascript-icon-96.png" />
        </div>
        <ul className="exp-ul">
          {data.experience.map((exp) => {
            return <li className="exp-item">algo</li>;
          })}
        </ul>
      </div>
      <aside id="exp-aside">
        <img className="exp-img" src="developer-2.png" />
      </aside>
    </section>
  );
}

export default App;
