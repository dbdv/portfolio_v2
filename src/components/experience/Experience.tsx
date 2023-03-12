import "./experience.css";

import { Job } from "../../types";

type props = {
  data: Job[];
};

export default function ExperienceSection({ data }: props) {
  return (
    <section role="experiencia" className="hidden exp-cover">
      <div className="exp-main">
        <div className="exp-title-div">
          <h2 className="exp-title">Experiencia</h2>
          <img className="js-img-mobile" src="javascript-icon-96.png" />
        </div>
        {
          <ul className="exp-ul">
            {data.map((exp, idx) => {
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
                        {exp.implemenented_stack.map((tech, idx) => {
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
