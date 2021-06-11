import * as React from "react";
import { graphql } from "gatsby";

import card from "../images/card.jpeg";
import Member1 from "../images/Member1.jpeg";
import Member2 from "../images/Member2.jpeg";
import ceo from "../images/ceo.jpg";

import Layout from "../components/layout";
import Seo from "../components/seo";

import HeroSection from "../components/Reuseable/HeroSection";
import InfoBlock from "../components/Reuseable/InfoBlock";
import DualInfoBlock from "../components/Reuseable/DualInfoBlock";
import TeamImages from "../components/About/TeamImages";

const AboutPage = ({ data }) => (
  <Layout>
    <Seo title="About" />
    <HeroSection
      img={data.img.childImageSharp.fluid}
      title="About Us"
      subtitle=""
      heroclass="about-background"
    />
    <InfoBlock heading="Our Vision" />
    <TeamImages img={Member1} img1={Member2} img3={card} />
    <DualInfoBlock heading="Message from CEO" img={ceo} />
  </Layout>
);

export const query = graphql`
  {
    img: file(relativePath: { eq: "about.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
          src
        }
      }
    }
  }
`;

export default AboutPage;
