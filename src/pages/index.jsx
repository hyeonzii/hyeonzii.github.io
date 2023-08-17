import React from 'react';
import 'aos/dist/aos.css';
import { graphql, Link } from 'gatsby';
import Nav from '../Components/Header/Nav';
import notebook from '../images/notebook.png';

import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';
deckDeckGoHighlightElement();

function IndexPage({ data }) {
    let introText = 'bg-gradient-to-r from-h-blue to-h-gray text-transparent bg-clip-text font-extrabold text-3xl';

    const posts = data.allMdx.edges;

    return (
        <div className="w-full h-full flex flex-col ">
            <Nav category="home" />
            <div className="overflow-y-auto flex flex-col justify-center items-center mt-24">
                <div className="w-1/2 h-fit p-10">
                    <div className="flex justify-center items-center">
                        <img src={notebook} className="w-60" alt="notebook"></img>
                        <div className="ml-20">
                            <p className={introText}>안녕하세요</p>
                            <p className={introText}>FRONTEND DEVELOPER</p>
                            <p className={introText}>이현지 입니다.</p>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 h-fit mt-8">
                    <div className=" w-96 border-b-4 border-h-blue"></div>
                    <div className="font-bold text-h-blue text-5xl ml-4 -mt-11 ">RECENT</div>

                    <div className="mt-4">
                        {posts.map((post) => (
                            <Link
                                to={post.node.frontmatter.slug}
                                key={post.node.id}
                                className="w-full h-56 p-4 flex flex-col rounded-lg cursor-pointer hover:bg-post-hover-gray"
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

export default IndexPage;
