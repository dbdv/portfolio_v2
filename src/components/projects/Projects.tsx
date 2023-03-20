import { Project } from "../../types";
import Carousel from "./carousel/Carousel";
import "./projects.css";

interface props {
  projects: Project[];
}

export default function Projects({ projects }: props) {
  return (
    <section className="project-section">
      <div className="project-section-title-div">
        <h2 className="project-section-title">Proyectos</h2>
        <img className="git-img-mobile" src="git-icon-96.png" />
      </div>
      <Carousel />
    </section>
  );
}
