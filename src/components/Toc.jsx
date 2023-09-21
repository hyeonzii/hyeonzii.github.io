import React from "react";

export default function Toc({ toc, currentHeaderUrl }) {
  // console.log(currentHeaderUrl);
  //console.log(toc);

  return <TocElement toc={toc} currentHeaderUrl={currentHeaderUrl} />;
}

const TocElement = ({ toc, currentHeaderUrl }) => (
  <div>
    {toc.items &&
      toc.items.map((item) => (
        <div key={item.title}>
          <a
            href={item.url}
            className={`hover:text-h-blue ${
              item.url === currentHeaderUrl ? "text-h-blue" : "text-h-gray"
            }`}
          >
            {item.title}
          </a>
          {item.items && <TocElement toc={item} />}
        </div>
      ))}
  </div>
);
