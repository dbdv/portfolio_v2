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
      <div className="exp-main">
        <div className="exp-title-div">
          <h2 className="exp-title">Experiencia</h2>
          <img className="js-img-mobile" src="javascript-icon-96.png" />
        </div>
        {
          <ul className="exp-ul">
            {data.experience.map((exp, idx) => {
              return (
                <li className="exp-item" key={idx + exp.company}>
                  <div>
                    <h3 className="exp-company-job-title">{exp.title}</h3>
                    <div className="exp-company-data-div">
                      <h4 className="exp-company-title">{exp.company}</h4>
                      <div className="exp-company-dates">
                        <span>{exp.since}</span>
                        <span>-</span>
                        <span>{exp.until}</span>
                      </div>
                      <div className="exp-company-stack">
                        {exp.stack.map((tech, idx) => {
                          return (
                            <span
                              className="exp-company-stack-item"
                              key={idx + tech}
                            >
                              {tech}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <ul className="exp-company-achiv-ul">
                    {exp.achievements.map((achiv, idx) => {
                      return (
                        <li
                          className="exp-company-achiv-item"
                          key={idx + achiv}
                        >
                          {achiv}
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
            })}
          </ul>
        }
      </div>
      <aside id="exp-decoration">
        <img className="exp-img" src="developer-4.png" />
      </aside>
    </section>
  );
}

export default App;
