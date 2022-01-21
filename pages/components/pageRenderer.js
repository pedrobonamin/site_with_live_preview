import Link from "next/link";
import SectionBase from "./sectionBase";

const PageRenderer = ({ preview, page, slug }) => {
  return (
    <div>
      <div
        style={{
          cursor: "pointer",
          position: "absolute",
          right: "32px",
          bottom: "32px",
          background: "lightGray",
          padding: "8px",
          borderRadius: "4px",
        }}
      >
        {preview ? (
          <Link href={`/api/exit-preview?slug=${slug}`}>
            <div>
              <div>Preview Mode Activated!</div>
              Go to live site
            </div>
          </Link>
        ) : (
          <div>This is a live site</div>
        )}
      </div>
      {page?.sections?.map((section) => (
        <SectionBase key={section?._key} section={section} />
      ))}
    </div>
  );
};

export default PageRenderer;
