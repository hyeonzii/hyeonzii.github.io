import React, { useState, useEffect } from "react";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import Toc from "../components/Toc";

const shortcodes = { Link };

function useScroll() {
  const [state, setState] = useState({
    y: 0,
  });

  const onScroll = (event) => {
    setState({ y: window.scrollY });
  };

  console.log(state); //check point!!!

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return { state };
}

const HEADER_OFFSET_Y = 80;
export default function PageTemplate({ data, children }) {
  const [currentHeaderUrl, setCurrentHeaderUrl] = useState(""); // Toc를 하이라이트 하기 위해서

  const [scrollY, setState] = useState({
    y: 0,
  });

  //스크롤 위치 설정
  const onScroll = (event) => {
    setState({ y: window.scrollY });
  };

  // 스크롤 위치에 따른 toc 하이라이트 적용을 위한 함수
  const handleScroll = (currentOffsetY) => {
    let aboveHeaderUrl; // 화면 바로 위쪽에 위치한 header

    const headerElements = document.querySelectorAll(".anchor-header"); //dom 에 있는 모든 헤더 값을 가져온다.

    console.log(headerElements);

    //모든 헤더 값을 확인
    for (const elem of Array.from(headerElements)) {
      const { top } = elem.getBoundingClientRect(); //현재 화면에서 상단?
      const elemTop = top + currentOffsetY.y; //그 보려고하는 헤더가 상단에 있나 확인하기 위해서
      const isLast = elem === headerElements[headerElements.length - 1]; //toc에서 가장 마지막

      /*console.log(decodeURI(elem.getAttribute("href")));

      console.log("y: " + currentOffsetY.y);

      console.log("top: " + top);
      console.log("elemTop: " + elemTop);
      console.log("isLast: " + isLast);*/

      if (currentOffsetY.y < elemTop - HEADER_OFFSET_Y) {
        // 기억해둔 aboveHeaderUrl이 있다면 바로 위 header와 현재 element 사이에 화면이 스크롤 되어 있다.
        aboveHeaderUrl && setCurrentHeaderUrl(aboveHeaderUrl);
        // 기억해둔 aboveHeaderUrl이 없다면 첫번째 header다.
        // 이때는 어떤 header도 active 하지 않은 상태다.
        !aboveHeaderUrl && setCurrentHeaderUrl("");
        break;
      } else {
        // 마지막 header면 다음 element가 없기 때문에 현재 header를 active header라 간주한다.
        const href = elem.getAttribute("href");
        if (href) {
          if (isLast) setCurrentHeaderUrl(decodeURI(href));
          //decodeURI 는 한글 깨지는 것 방지
          else aboveHeaderUrl = decodeURI(href);
        }
      }
    }
  };

  useEffect(() => {
    console.log(scrollY);
    window.addEventListener("scroll", onScroll);
    handleScroll(scrollY);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollY]);

  return (
    <Layout category={";"}>
      <div className="md:w-4/6 w-full h-fit flex flex-row gap-10 px-10 justify-center">
        <div className="grow">
          <div className="font-extrabold items-start text-4xl text-h-blue mb-4">
            {data.mdx.frontmatter.title}
          </div>
          <div className="border-b-4 border-h-blue mb-4"></div>
          <div className="h-fit -z-10">
            <MDXProvider components={shortcodes}>{children}</MDXProvider>
          </div>
          <div className="items-start mb-4 h-fit text-h-gray mt-4">
            {data.mdx.frontmatter.date.split("T").shift()}
          </div>
        </div>
        <div className="flex-none w-40 self-start sticky top-28 md:visible invisible">
          <Toc
            toc={data.mdx.tableOfContents}
            currentHeaderUrl={currentHeaderUrl}
          />
        </div>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date
      }
      tableOfContents
    }
  }
`;
