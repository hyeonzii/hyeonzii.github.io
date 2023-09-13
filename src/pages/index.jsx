import React, { useState } from "react";
import "aos/dist/aos.css";
import { graphql, Link } from "gatsby";
import notebook from "../images/notebook.png";
import Layout from "../components/Layout";
import cursor from "../images/cursor.png";
import ContentLayout from "../components/ContentLayout";

function IndexPage({ data }) {
  const posts = data.allMdx.edges;
  const [mouseState, setMouseState] = useState(0);

  const introText = [
    mouseState ? "블로그 제작기가" : "안녕하세요",
    mouseState ? "궁금하다면" : "FRONTEND DEVELOPER",
    mouseState ? "클릭하세요!" : "이현지 입니다.",
  ];

  const onMouseEnter = () => {
    setMouseState(1);
  };

  const onMouseLeave = () => {
    setMouseState(0);
  };

  return (
    <Layout category="home">
      <ContentLayout>
        <div className="flex gap-2 justify-center items-center">
          <div className="flex-1">
            <Link href="https://velog.io/@hyeonzii/series/%EA%B0%9C%EC%B8%A0%EB%B9%84">
              <div className="relative w-60 ">
                <img
                  src={notebook}
                  className="w-full hover:bg-post-hover-gray rounded-xl cursor-pointer"
                  alt="notebook"
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                />
                {mouseState ? null : (
                  <img
                    src={cursor}
                    className="animate-blink-effect absolute bottom-0 left-0 rotate-45 flex-1"
                  />
                )}
              </div>
            </Link>
          </div>
          <div className="flex-1 flex flex-col">
            {introText.map((text, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-h-blue to-h-gray text-transparent bg-clip-text font-extrabold text-3xl"
              >
                {text}
              </div>
            ))}
          </div>
        </div>
      </ContentLayout>
      <ContentLayout>
        <div className="mt-12">
          <div className=" w-96 border-b-4 border-h-blue"></div>
          <div className="font-bold text-h-blue text-5xl ml-4 -mt-11">
            RECENT
          </div>
        </div>
        {posts.map((post) => (
          <Link
            to={post.node.frontmatter.slug}
            key={post.node.id}
            className="mt-1 w-full h-fit p-4 flex flex-col rounded-lg cursor-pointer hover:bg-post-hover-gray"
          >
            <div className="font-extrabold mt-2 text-2xl flex-none">
              {post.node.frontmatter.title}
            </div>
            <div className="text-slate-500 mt-2 flex-grow">
              {post.node.excerpt}
            </div>
            <div className="text-slate-500 mt-2 flex-none">
              {post.node.frontmatter.date}
            </div>
          </Link>
        ))}
      </ContentLayout>
    </Layout>
  );
}

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }, limit: 2) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            slug
          }
        }
      }
    }
  }
`;

export default IndexPage;
