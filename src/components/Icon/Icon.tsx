import "./icon.css";

export default function IconDiv({
  icon_url,
  label,
}: {
  icon_url: string;
  label: string;
}) {
  return (
    <div className="icon-cover">
      <div className="inner-icon-cover">
        <img src={icon_url} alt="" />
        <h4>{label}</h4>
      </div>
    </div>
  );
}
