import { Project } from "../../../types";
import "./card.css";
import { BsRocketTakeoffFill as RocketIcon } from "react-icons/bs";
import { BiLinkExternal as LinkIcon } from "react-icons/bi";

interface props {
  project?: Project;
  title: string;
}

export default function Card({ project, title }: props) {
  return (
    <article className="card" draggable={false}>
      <div className="card-visible">
        <img className="card-img" src="developer-4.png" alt="" />
        <div className="card-info">
          <h2 className="card-title">App {title}</h2>
          <div className="card-stack">
            <span className="card-stack-item">tech 1</span>
            <span className="card-stack-item">tech 1</span>
            <span className="card-stack-item">tech 1</span>
            <span className="card-stack-item">tech 1</span>
          </div>
          <p className="card-descrip">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quis,
            eum ex sequi dolores quidem cum impedit modi molestias voluptas
            totam in odit esse temporibus cumque amet exercitationem excepturi
            eveniet?
          </p>
          <div className="card-links">
            <a
              href="https://www.google.com"
              target="_blank"
              className="card-link"
            >
              <LinkIcon />
              <span>Código</span>
            </a>
            <a href="" className="card-link">
              <span>Demo</span>
              <RocketIcon className="rocket-icon" />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
