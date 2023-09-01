import React from 'react';
import 'aos/dist/aos.css';
import Nav from '../components/Header/Nav';
import { graphql, Link } from 'gatsby';

function postPage({ data }) {
    const posts = data.allMdx.edges;

    return (
        <div className="w-full h-full flex flex-col">
            <Nav category="posts" />
            <div className="flex flex-col justify-center items-center mt-28">
                <div className="w-1/2 h-fit">
                    <div className="mt-8">
                        {posts.map((post) => (
                            <Link
                                to={post.node.frontmatter.slug}
                                key={post.node.id}
                                className="w-full h-fit p-4 flex flex-col rounded-lg cursor-pointer hover:bg-post-hover-gray"
                            >
                                <div className="font-extrabold mt-2 text-2xl flex-none">
                                    {post.node.frontmatter.title}
                                </div>
                                <div className="text-slate-500 mt-2 flex-grow">{post.node.excerpt}</div>
                                <div className="text-slate-500 mt-2 flex-none">{post.node.frontmatter.date}</div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
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

export default postPage;
