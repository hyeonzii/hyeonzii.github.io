import React from 'react';
import { graphql } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { Link } from 'gatsby';
import Nav from '../components/Header/Nav';

const shortcodes = { Link }; // Provide common components here

function Toc({ toc }) {
    return (
        <aside className="pl-3 border-h-blue">
            <TocElement toc={toc} />
        </aside>
    );
}
const TocElement = ({ toc }) => (
    <ul className=" text-h-gray">
        {toc.items &&
            toc.items.map((item) => (
                <li key={item.title} className="hover:text-black">
                    <a href={item.url}>{item.title}</a>
                    {item.items && <TocElement toc={item} />}
                </li>
            ))}
    </ul>
);

export default function PageTemplate({ data, children }) {
    console.log(data);

    return (
        <div className="w-full h-full flex flex-col z-0">
            <div className="z-20">
                <Nav category=";" />
            </div>
            <div className="h-28 bg-blue-100"></div>
            <div className="z-10 flex flex-row justify-center re">
                <div className="w-1/2 h-screen overflow-y-auto flex flex-col">
                    <div className=" h-fit">
                        <div className="font-extrabold text-4xl text-h-blue mt-4 ">{data.mdx.frontmatter.title}</div>
                        <div className="border-b-4 border-h-blue mt-4 mb-8"></div>
                    </div>
                    <div className=" h-fit">
                        <MDXProvider components={shortcodes}>{children}</MDXProvider>
                    </div>
                    <div className="h-fit text-h-gray mt-4">{data.mdx.frontmatter.date}</div>
                </div>
                <div className="h-fit w-fit fixed right-0 md:">
                    <Toc toc={data.mdx.tableOfContents} />
                </div>
            </div>
        </div>
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
