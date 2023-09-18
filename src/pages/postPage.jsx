import React, { useEffect, useState } from "react";
import "aos/dist/aos.css";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";

function PostPage({ data }) {
  const posts = data.allMdx.edges;
  const [showTag, setShowTag] = useState(false);
  const [Tag, setTag] = useState("");
  let arr = [];

  posts.forEach((e) => {
    let t_arr = e.node.frontmatter.category.split(",");
    t_arr.forEach((e) => {
      if (!arr.includes(e)) arr.push(e);
    });
  });

  return (
    <Layout category="posts">
      {/* TagBtn */}
      <div className="w-1/2 h-fit mt-10 flex flex-row justify-center">
        <div className="">
          {posts.map((post) =>
            post.node.frontmatter.category.includes(Tag) ? (
              <Link
                to={post.node.frontmatter.slug}
                key={post.node.id}
                className="w-full h-fit p-4 flex flex-col rounded-lg cursor-pointer hover:bg-post-hover-gray"
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
            ) : null
          )}
        </div>
        <div className="w-14 ml-3 sticky top-28 self-start ">
          <div
            className={`font-bold w-fit h-fit ${
              showTag
                ? "text-h-blue hover:text-h-gray"
                : "text-h-gray hover:text-h-blue"
            }  text-xl ml-4 cursor-pointer`}
            onClick={() => {
              setShowTag(!showTag);
              setTag("");
            }}
          >
            TAG LIST
          </div>
          {/* TagList */}
          {showTag ? (
            <div className="p-3 h-fit w-fit rounded-2xl border-h-blue border-4">
              <ul className="flex flex-wrap gap-3">
                {arr.map((item) => (
                  <li
                    key={item}
                    className={` w-fit h-fit text-sm p-3 font-bold rounded-full cursor-pointer ${
                      Tag === item
                        ? "text-white bg-black "
                        : "text-gray-500 bg-h-gray hover:bg-h-blue hover:text-black"
                    }`}
                    onClick={() => {
                      setTag(item);
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            slug
            category
          }
        }
      }
    }
  }
`;

export default PostPage;
