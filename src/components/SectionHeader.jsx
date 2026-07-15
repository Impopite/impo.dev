function SectionHeader({ eyebrow, title, accent }) {
    return (
        <>
            <p className="section-label">{eyebrow}</p>
            <h2 className="section-title">{title} <span>{accent}</span></h2>
        </>
    );
}

export default SectionHeader;