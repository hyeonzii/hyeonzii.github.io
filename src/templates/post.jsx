import React, { useState, useEffect } from "react";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import { useScroll } from "../hook/useScroll";
import Toc from "../components/Toc";

const shortcodes = { Link };

const HEADER_OFFSET_Y = 81;
export default function PageTemplate({ data, children }) {
  const [currentHeaderUrl, setCurrentHeaderUrl] = useState(""); // Toc를 하이라이트 하기 위해서
  const { scrollY } = useScroll(); //현재 스크롤 위치를 알기 위해서

  // 스크롤 위치에 따른 toc 하이라이트 적용을 위한 함수
  const handleScroll = (currentOffsetY) => {
    let aboveHeaderUrl; // 화면 바로 위쪽에 위치한 header

    const headerElements = document.querySelectorAll(".anchor-header"); //dom 에 있는 모든 헤더 값을 가져온다.

    //모든 헤더 값을 확인
    for (const elem of Array.from(headerElements)) {
      const { top } = elem.getBoundingClientRect(); //가장 상단
      const elemTop = top + currentOffsetY; // toc에서 가장 상단
      const isLast = elem === headerElements[headerElements.length - 1]; //toc에서 가장 마지막

      if (currentOffsetY < elemTop - HEADER_OFFSET_Y) {
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
    handleScroll(scrollY);
  }, [scrollY]);

  return (
    <Layout category=";">
      <div className="flex flex-row justify-center">
        <div className="w-1/2 h-screen overflow-y-auto flex flex-col">
          <div className=" h-fit">
            <div className="font-extrabold text-4xl text-h-blue mt-4 ">
              {data.mdx.frontmatter.title}
            </div>
            <div className="border-b-4 border-h-blue mt-4 mb-8"></div>
          </div>
          <div className=" h-fit -z-10">
            <MDXProvider components={shortcodes}>{children}</MDXProvider>
          </div>
          <div className="h-fit text-h-gray mt-4">
            {data.mdx.frontmatter.date}
          </div>
        </div>
        <Toc
          toc={data.mdx.tableOfContents}
          currentHeaderUrl={currentHeaderUrl}
        />
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
