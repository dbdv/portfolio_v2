import "./App.css";
import "./header-styles.css";
import data from "./data.json" /* assert { type: "json" } */;
import {
  IoMdMailUnread as MailICon,
  IoLogoLinkedin as LinkedinIcon,
  IoIosContact as CvICon,
  IoIosArrowUp as SliderIcon,
} from "react-icons/io";

function App() {
  console.log(data, typeof data);
  return (
    <div className="App">
      <Header />
      <main className="padding">
        <section role="sobre mí">
          <p></p>
        </section>
        <section role="mi stack">Stack</section>
        <section role="proyectos">Projects</section>
      </main>
    </div>
  );
}

function Header() {
  return (
    <header id="header" role="name-job title" className="padding">
      <div>
        <h1>Daniel Bustillos</h1>
        <h2>Fullstack developer</h2>
      </div>
      <div>
        <div id="slider-controller">
          <label htmlFor="">
            Contáctame <SliderIcon />
          </label>
          <input type="checkbox" />
        </div>
        <ul role="contacto" id="contact-list">
          <li role="linkedin">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/daniel-alejandro-bustillos/"
              id="linkedin"
            >
              <LinkedinIcon />
              LinkedIn
            </a>
          </li>
          <li role="cv">
            <a download={true} href="/Daniel_Bustillos_CV.pdf" id="cv">
              <CvICon />
              curriculum
            </a>
          </li>
          <li role="email">
            <a href="mailto:bustillosdaniel4@gmail.com" id="email">
              <MailICon />
              email
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default App;
