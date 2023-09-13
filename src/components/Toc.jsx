import React from "react";

function Toc({ toc, currentHeaderUrl }) {
  console.log(currentHeaderUrl);

  return (
    <aside className="pl-3 border-h-blue h-fit w-fit md:visible invisible mt-32 sticky top-24">
      <TocElement toc={toc} currentHeaderUrl={currentHeaderUrl} />
    </aside>
  );
}

const TocElement = ({ toc, currentHeaderUrl }) => (
  <ul className=" text-h-gray">
    {toc.items &&
      toc.items.map((item) => (
        <li key={item.title}>
          <a href={item.url} className={`hover:text-black`}>
            {item.title}
          </a>
          {item.items && <TocElement toc={item} />}
        </li>
      ))}
  </ul>
);
