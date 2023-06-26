import Card from "../card/Card";
import "./carousel.css";
import {
  FaAngleLeft as LeftArrow,
  FaAngleRight as RightArrow,
} from "react-icons/fa";
import { useEffect, useState } from "react";
import { Project } from "../../../types";

interface CarrouselProps {
  projects: Project[];
}

export default function Carousel({ projects }: CarrouselProps) {
  const [cardWidth, setCardWidth] = useState(0);

  useEffect(() => {
    if (document.querySelector(".card"))
      setCardWidth(document.querySelector(".card")!.clientWidth + 16);
  }, []);

  return (
    <div className="carousel" draggable={false}>
      {projects.map((proj, idx) => {
        return <Card key={idx} {...proj} />;
      })}
    </div>
  );
}
