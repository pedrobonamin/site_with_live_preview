import ContentBlock from "./contentBlock";

const SectionBase = ({ section }) => {
  if (!section) return null;
  return (
    <section
      style={{
        background: section.backgroundColor,
        width: "100vw",
        height: "200px",
        padding: "16px 8px"
      }}
    >
      <ContentBlock contentBlock={section.contentBlock} />
    </section>
  );
};

export default SectionBase;
