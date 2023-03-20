import Card from "../card/Card";
import "./carousel.css";
import {
  FaAngleLeft as LeftArrow,
  FaAngleRight as RightArrow,
} from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

export default function Carousel() {
  const [isDragging, setIsDragging] = useState(false);
  const [prevX, setPrevX] = useState(0);
  const [prevScrollLeft, setprevScrollLeft] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const [positionDiff, setPositionDiff] = useState(0);

  const autoSlide = () => {
    console.log("acc3333");
    const carousel = document.querySelector(".content-cover");
    const valDiff = cardWidth - Math.abs(positionDiff);
    if (carousel!.scrollLeft > prevScrollLeft) {
      console.log("se mueve a la izq");
      return (carousel!.scrollLeft +=
        positionDiff > cardWidth / 3 ? valDiff : Math.abs(positionDiff));
    }
    console.log("se mueve a la derec");
    carousel!.scrollLeft -=
      positionDiff > cardWidth / 3 ? valDiff : Math.abs(positionDiff);
  };

  useEffect(() => {
    setCardWidth(document.querySelector(".card")!.clientWidth + 14);
    console.log(cardWidth);
  }, []);

  return (
    <div className="carousel" draggable={false}>
      <LeftArrow
        className="arrow"
        onClick={() => {
          document.querySelector(".content-cover")!.scrollLeft -= cardWidth;
        }}
      />
      <div
        // onClick={() => setIsDragging(true)}
        onMouseDown={(e) => {
          e.preventDefault();
          console.log("aca 1");
          const carousel = document.querySelector(".content-cover");
          setPrevX(e.pageX);
          setprevScrollLeft(carousel!.scrollLeft);
          setIsDragging(true);
        }}
        onTouchStart={(e) => {
          e.preventDefault();
          console.log("aca 1");
          const carousel = document.querySelector(".content-cover");
          setPrevX(e.touches[0].pageX);
          setprevScrollLeft(carousel!.scrollLeft);
          setIsDragging(true);
        }}
        onMouseUp={() => setIsDragging(false)}
        onTouchEnd={() => {
          setIsDragging(false);
          autoSlide();
        }}
        onMouseMove={(e) => {
          e.preventDefault();
          console.log("aca 2");
          if (isDragging) {
            const carousel = document.querySelector(".content-cover");
            setPositionDiff(e.pageX - prevX);
            carousel!.scrollLeft = prevScrollLeft - positionDiff;
            autoSlide();
          }
        }}
        onTouchMove={(e) => {
          e.preventDefault();
          console.log("aca 2");
          if (isDragging) {
            const carousel = document.querySelector(".content-cover");
            setPositionDiff(e.touches[0].pageX - prevX);
            carousel!.scrollLeft = prevScrollLeft - positionDiff;
          }
        }}
        className="content-cover"
      >
        <Card title="1" />
        <Card title="2" />
        <Card title="3" />
      </div>
      <RightArrow
        className="arrow"
        onClick={(e) => {
          e.preventDefault();
          document.querySelector(".content-cover")!.scrollLeft += cardWidth;
        }}
      />
    </div>
  );
}
