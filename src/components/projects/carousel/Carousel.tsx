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
      <LeftArrow
        className="arrow"
        id="leftArrow"
        onClick={() => {
          const $contentContainer = document.querySelector(".content-cover");
          $contentContainer!.scrollLeft -= cardWidth;

          document
            .querySelector("#rightArrow")
            ?.classList.remove("hidden", "remove");
          if ($contentContainer!.scrollLeft - 716 == 0) {
            document
              .querySelector("#leftArrow")
              ?.classList.add("hidden", "remove");
          }
        }}
      />
      <div className="content-cover">
        {projects.map((proj, idx) => {
          return <Card key={idx} {...proj} />;
        })}
      </div>
      <RightArrow
        className="arrow"
        id="rightArrow"
        onClick={(e) => {
          e.preventDefault();
          const $contentContainer = document.querySelector(".content-cover");
          $contentContainer!.scrollLeft += cardWidth;
          document
            .querySelector("#leftArrow")
            ?.classList.remove("hidden", "remove");
          if (
            $contentContainer!.scrollLeft + 2 * 708 ==
            $contentContainer?.scrollWidth
          ) {
            document
              .querySelector("#rightArrow")
              ?.classList.add("hidden", "remove");
          }
        }}
      />
    </div>
  );
}
