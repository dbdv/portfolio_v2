import { Project } from "../../../types";
import "./card.css";
import { BsRocketTakeoffFill as RocketIcon } from "react-icons/bs";
import { BiLinkExternal as LinkIcon } from "react-icons/bi";

export default function Card({
  title,
  deploy,
  description,
  imgPreview,
  repo,
  stack,
}: Project) {
  return (
    <article className="card" draggable={false}>
      <div className="card-visible">
        <img className="card-img" src={imgPreview} alt="" />
        <div className="card-info">
          <h2 className="card-title">{title}</h2>
          <div className="card-stack">
            {stack.map((tech, idx) => {
              return (
                <span key={idx} className="card-stack-item">
                  {tech}
                </span>
              );
            })}
          </div>
          <p className="card-descrip">{description}</p>
          <div className="card-links">
            <a href={repo} target="_blank" className="card-link">
              <LinkIcon />
              <span>Código</span>
            </a>
            {Boolean(deploy) && (
              <a href={deploy} target="_blank" className="card-link demo">
                <span>Demo</span>
                <RocketIcon className="rocket-icon" />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
