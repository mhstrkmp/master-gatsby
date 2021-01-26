import dotenv from "dotenv";
dotenv.config({ path: ".env" });

export default {
  siteMetadata: {
    title: "Slicks Slices",
    siteUrl: "https://gatsby.pizza",
    description: "The best pizza place in Hamilton!",
    twitter: "@SlicksSlices",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "q9yum5pn",
        dataset: "production",
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
};
