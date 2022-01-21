const ContentItem = ({ contentItem }) => {
  if (!contentItem) return null;
  switch (contentItem._type) {
    case "contentItemHeading":
      return <h1>{contentItem.text}</h1>;
    case "contentItemButton":
      return <button>{contentItem.text}</button>;
    case "contentItemText":
      return <p>{contentItem.text}</p>;
    default:
      break;
  }
};

const ContentBlock = ({ contentBlock }) => {
  const { list = [], order = [] } = contentBlock || {};
  return (
    <>
      {order.map((o) => (
        <ContentItem key={o} contentItem={list[o - 1]} />
      ))}
    </>
  );
};

export default ContentBlock;
