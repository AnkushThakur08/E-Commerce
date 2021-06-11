import * as React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";
import HeroSection from "../components/Reuseable/HeroSection";
import InfoBlock from "../components/Reuseable/InfoBlock";
import DualInfoBlock from "../components/Reuseable/DualInfoBlock";

import Services from "../components/Services/ServicesWeProvide";

import img1 from "../images/img1.jpeg";
import img2 from "../images/img2.jpeg";
import js from "../images/js.jpeg";
import ceo from "../images/ceo.jpg";

const ServicesPage = ({ data }) => (
  <Layout>
    <Seo title="Services" />
    <HeroSection
      img={data.img.childImageSharp.fluid}
      title="Services"
      subtitle=""
      heroclass="services-background"
    />
    <InfoBlock heading="Our Services" />
    <Services img1={img1} img2={img2} img3={js} heading="What We Provide" />
    <DualInfoBlock heading="Our Expertise" img={ceo} />
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

export default ServicesPage;
