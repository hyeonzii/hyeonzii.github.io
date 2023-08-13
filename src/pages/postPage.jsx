import React from 'react';
import 'aos/dist/aos.css';
import Nav from '../Components/Header/Nav';

function MainPage({ data }) {
    console.log(data);

    return (
        <div className="w-full h-full flex flex-col">
            <Nav category="posts" />
            <div className="flex flex-col justify-center items-center mt-28">
                <div className="w-1/2 h-fit">
                    <div className="mt-8">
                        <li className="w-full h-60 p-4 flex flex-col rounded-lg cursor-pointer hover:bg-post-hover-gray">
                            <div className="font-extrabold mt-3 text-2xl flex-none">아직</div>
                            <div className="text-slate-500 mt-3 flex-grow">미완성</div>
                            <div className="text-slate-500 mt-3 flex-none">입니당ㅠ</div>
                        </li>
                    </div>
                </div>
            </div>
        </div>
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
                    }
                }
            }
        }
    }
`;

export default MainPage;
