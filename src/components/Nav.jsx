import React from "react";
import { Link } from "gatsby";

function Nav(props) {
  const buttons = [
    { page: "/postPage", text: "posts" },
    { page: "/aboutPage", text: "about" },
    { page: "/guestPage", text: "guest" },
  ];

  return (
    <div className="w-full pt-4 bg-white h-content fixed flex justify-center items-center z-10">
      <div className="w-full md:w-4/6 flex">
        <div className="flex-none w-fit m-2 h-16 flex justify-center items-center">
          <Link
            to="/"
            className=" text-h-blue text-xl font-bold transition-all duration-300 hover:scale-105 hover:underline underline-offset-1 hover:font-extrabold hover:text-4xl"
          >
            hyeonzii
          </Link>
        </div>
        <div className="grow"></div>
        <div className="flex-none flex">
          {buttons.map((button, index) => (
            <Link
              to={button.page}
              key={index}
              className={`cursor-pointer rounded-full m-4 w-16 h-16  flex justify-center items-center transition-all duration-300 ${
                props.category === button.text
                  ? "bg-h-gray text-3xl font-extrabold "
                  : "bg-h-blue font-bold  hover:bg-h-gray hover:text-3xl hover:font-extrabold hover:scale-105"
              }`}
            >
              {button.text}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Nav;
