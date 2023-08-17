/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
    siteMetadata: {
        title: `my-portfolio`,
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
        'gatsby-plugin-postcss',
        `gatsby-plugin-mdx`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                extensions: [`mdx`, `md`],
                name: `posts`,
                path: `${__dirname}/content/posts`,
            },
        },
        `gatsby-plugin-image`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`, // 정적 이미지를 저장할 디렉토리 이름
                path: `${__dirname}/content/posts/images`, // 이미지 파일이 저장된 디렉토리 경로
            },
        },
        'gatsby-plugin-sharp',
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 800, // 이미지 최대 너비
                            linkImagesToOriginal: false,
                            backgroundColor: 'transparent', //수정
                        },
                    },
                ],
            },
        },
    ],
};
