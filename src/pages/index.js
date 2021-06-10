import * as React from "react";
import { graphql } from "gatsby";
import card from "../images/card.jpeg";
import Layout from "../components/layout";
import Seo from "../components/seo";
import HeroSection from "../components/Reuseable/HeroSection";
import InfoBlock from "../components/Reuseable/InfoBlock";
import DualInfoBlock from "../components/Reuseable/DualInfoBlock";
import CourseCart from "../components/Cart/CourseCart";

const IndexPage = ({ data }) => (
  <Layout>
    <Seo title="Home" />
    <HeroSection
      img={data.img.childImageSharp.fluid}
      title="I Write Code"
      subtitle="LearnCodeOnline.in"
      heroclass="hero-background"
    />
    <InfoBlock heading="Our Story" />
    <CourseCart courses={data.courses} />
    <InfoBlock heading="Payments" />
    <DualInfoBlock heading="Our Team" img={card} />
  </Layout>
);

export const query = graphql`
  {
    img: file(relativePath: { eq: "heromain.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    courses: allContentfulCourses {
      edges {
        node {
          id
          title
          price
          category
          description {
            description
          }
          image {
            fixed(height: 120, width: 200) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
