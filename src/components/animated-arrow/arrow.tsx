import "./arrow.css";

export default function Arrow() {
  const moveDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };
  return (
    <div
      onClick={window.innerWidth < 768 ? () => moveDown() : undefined}
      className="arrow-item hidden"
    >
      <div className="arrow-cover">
        <div className="arrow-shape arrow-1"></div>
      </div>
    </div>
  );
}
