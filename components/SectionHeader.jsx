export default function SectionHeader({ kicker, title, copy, align = "left" }) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <span className="section-kicker">{kicker}</span>
      <h2 className="section-heading">{title}</h2>
      {copy ? <p className="section-copy">{copy}</p> : null}
    </div>
  );
}
