import React from "react";

export default function Toc({ toc, currentHeaderUrl }) {
  console.log(currentHeaderUrl);

  return <TocElement toc={toc} currentHeaderUrl={currentHeaderUrl} />;
}

const TocElement = ({ toc, currentHeaderUrl }) => (
  <ul>
    {toc.items &&
      toc.items.map((item) => (
        <li key={item.title}>
          <a
            href={item.url}
            className={`hover:text-h-blue ${
              item.url === currentHeaderUrl ? "text-h-blue" : "text-h-gray"
            }`}
          >
            {item.title}
          </a>
          {item.items && <TocElement toc={item} />}
        </li>
      ))}
  </ul>
);
