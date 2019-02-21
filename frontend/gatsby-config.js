module.exports = {
  siteMetadata: {
    title: `Gatsby Apollo Prisma Demo`,
    description: ``,
    author: `tannermichaelgaucher@gmail.com`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-styled-components`,
  ],
}
