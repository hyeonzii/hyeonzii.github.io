import React from 'react';
import 'aos/dist/aos.css';
import { graphql, Link } from 'gatsby';
import Nav from '../components/Header/Nav';
import notebook from '../images/notebook.png';
import TypingAnimation from '../components/typingAnimation';

function IndexPage({ data }) {
    const posts = data.allMdx.edges;
    const introText = '안녕하세요🖐️\nFRONTEND DEVELOPER 🔨\n이현지 입니다.';
    const introTextStyle =
        'bg-gradient-to-r from-h-blue to-h-gray text-transparent bg-clip-text font-extrabold text-3xl';

    return (
        <div className="w-full h-full flex flex-col ">
            <Nav category="home" />
            <div className="overflow-y-auto flex flex-col justify-center items-center mt-24">
                <div className="w-1/2 h-fit p-10">
                    <div className="flex gap-2 justify-center items-center">
                        <div className="flex-1">
                            <img src={notebook} className="w-60 flex-1" alt="notebook" />
                        </div>
                        <div className="flex-1">
                            <TypingAnimation text={introText} typingSpeed={200} />
                        </div>
                    </div>
                </div>
                <div className="w-1/2 h-fit mt-8">
                    <div className=" w-96 border-b-4 border-h-blue"></div>
                    <div className="font-bold text-h-blue text-5xl ml-4 -mt-11">RECENT</div>

                    <div className="mt-4">
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

export default IndexPage;
