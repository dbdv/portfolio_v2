import "./stack.css";

import IconDiv from "../Icon/Icon";
import { Stack } from "../../types";

export default function MyStack({ stack }: { stack: Stack }) {
  return (
    <section role="mi stack" className="hidden padding">
      <div className="external-container">
        <div className="section-main-div-cover">
          <h2 className="section-title stack-title">Mi stack</h2>
          <img className="node-img-mobile" src="node-icon-240.png" />
        </div>
        <h3>Lenguajes y Frameworks</h3>
        <article className="cover-lang-icons">
          {stack.laguanges.map((lang) => {
            return (
              <IconDiv icon_url={lang.icon_url} label={lang.laguange_name} />
            );
          })}
        </article>
        <h3>Otras Tecnologías</h3>
        <article className="cover-techs-icons">
          {stack.techlonogies.map((tech, idx) => {
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
