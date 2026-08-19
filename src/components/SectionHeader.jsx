function SectionHeader({ eyebrow, title, accent }) {
  return (
    <div className="section-header">
      <p className="section-eyebrow">{eyebrow}</p>
      <h2 className="section-title">{title} <span className="accent">{accent}</span></h2>
    </div>
  );
}

export default SectionHeader;
