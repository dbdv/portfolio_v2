import Card from "../card/Card";
import "./carousel.css";
import {
  FaAngleLeft as LeftArrow,
  FaAngleRight as RightArrow,
} from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Carousel() {
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
    setCardWidth(document.querySelector(".card")!.clientWidth + 16);
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
