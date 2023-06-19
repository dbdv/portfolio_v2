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
  const [isDragging, setIsDragging] = useState(false);
  const [prevX, setPrevX] = useState(0);
  const [prevScrollLeft, setprevScrollLeft] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const [positionDiff, setPositionDiff] = useState(0);

  const autoSlide = () => {
    const carousel = document.querySelector(".content-cover");
    const valDiff = cardWidth - Math.abs(positionDiff);
    if (carousel!.scrollLeft > prevScrollLeft) {
      return (carousel!.scrollLeft +=
        Math.abs(positionDiff) > cardWidth / 2
          ? valDiff
          : -Math.abs(positionDiff));
    }
    carousel!.scrollLeft -=
      Math.abs(positionDiff) > cardWidth / 2
        ? valDiff
        : -Math.abs(positionDiff);
  };

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
      <div
        onTouchStart={(e) => {
          e.preventDefault();
          const carousel = document.querySelector(".content-cover");
          setPrevX(e.touches[0].pageX);
          setprevScrollLeft(carousel!.scrollLeft);
          setIsDragging(true);
        }}
        onTouchEnd={() => {
          setIsDragging(false);
          autoSlide();
        }}
        onTouchMove={(e) => {
          e.preventDefault();
          if (isDragging) {
            const carousel = document.querySelector(".content-cover");
            setPositionDiff(e.touches[0].pageX - prevX);
            carousel!.scrollLeft = prevScrollLeft - positionDiff;
          }
        }}
        className="content-cover"
        draggable={false}
      >
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
