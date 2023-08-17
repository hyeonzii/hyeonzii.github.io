import React from 'react';
import { graphql } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { Link } from 'gatsby';
import Nav from '../Components/Header/Nav';
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';
deckDeckGoHighlightElement();

const shortcodes = { Link }; // Provide common components here

export default function PageTemplate({ data, children }) {
    return (
        <div className="w-full h-full flex flex-col">
            <Nav category=";" />
            <div className="overflow-y-auto flex flex-col justify-center items-center mt-28">
                <div className="w-1/2 h-fit mt-12">
                    <div className="font-extrabold text-4xl text-h-blue mt-4 ">{data.mdx.frontmatter.title}</div>
                    <div className="border-b-4 border-h-blue mt-4"></div>
                </div>
                <div className="w-1/2 h-fit">
                    <MDXProvider components={shortcodes}>{children}</MDXProvider>
                </div>
                <div className="w-1/2 h-fit text-h-gray mt-4">{data.mdx.frontmatter.date}</div>
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
        }
    }
`;
