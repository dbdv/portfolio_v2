import "./AboutSection.css";

type props = {
  data: string;
};

export default function AboutSection({ data }: props) {
  return (
    <section role="sobre mí" className="padding cover">
      <div className="p-div">
        <div>
          <h2 className="about-title">Sobre mí</h2>
          <img className="react-img-mobile" src="react-icon-480.png" />
        </div>
        {data.split("\n").map((text: string) => (
          <p className="p">{text}</p>
        ))}
      </div>
      <aside id="about-decoration">
        <img className="react-img" src="react-icon-480.png" />
      </aside>
    </section>
  );
}