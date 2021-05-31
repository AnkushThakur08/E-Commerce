import * as React from "react";
import { graphql } from "gatsby"; 

import Layout from "../components/layout";
import Seo from "../components/seo";
import HeroSection from "../components/Reuseable/HeroSection";

const IndexPage = ({ data }) => (
  <Layout>
    <Seo title="Home" />
    <HeroSection
      img={data.img.childImageSharp.fluid}
      title="I Write Code"
      subtitle="LearnCodeOnline.in"
      heroclass="hero-background"
    />
  </Layout>
);

export const query = graphql`
  {
    img: file(relativePath: { eq: "heromain.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
          src
        }
      }
    }
  }
`;

export default IndexPage;
