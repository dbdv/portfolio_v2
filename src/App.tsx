import "./App.css";
import "./experience.css";
import Header from "./components/header/Header";
import AboutSection from "./components/about/About";
import { data } from "./data";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <AboutSection data={data.about} />
        <ExperienceSection />
        <section role="mi stack">Stack</section>
        <section role="proyectos">Projects</section>
      </main>
    </div>
  );
}

function ExperienceSection() {
  return (
    <section role="experiencia" className="exp-cover">
      <div>
        <div className="exp-title-div">
          <h2 className="exp-title">Experiencia</h2>
          <img className="js-img-mobile" src="javascript-icon-96.png" />
        </div>
        <ul className="exp-ul">
          {data.experience.map((exp) => {
            return <li className="exp-item">{JSON.stringify(exp)}</li>;
          })}
        </ul>
      </div>
      <aside>
        <img className="exp-img" src="developer-2.png" />
      </aside>
    </section>
  );
}

export default App;
