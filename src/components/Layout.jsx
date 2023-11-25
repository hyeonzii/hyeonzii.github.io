import React from "react";
import Nav from "./Nav";
import Head from "./Head";

function Layout({ children, category }) {
  return (
    <div className="w-full h-full flex flex-col">
      <Nav category={category} />
      <div className="w-full h-fit flex flex-col justify-center items-center mt-28">
        {children}
      </div>
    </div>
  );
}

export default Layout;
