import * as React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";

import HeroSection from "../components/Reuseable/HeroSection";
import InfoBlock from "../components/Reuseable/InfoBlock";
import ContactForm from "../components/contact/ContactForm";

const ContactPage = ({ data }) => (
  <Layout>
    <Seo title="About" />
    <HeroSection
      img={data.img.childImageSharp.fluid}
      title="Contact Us"
      subtitle=""
      heroclass="about-background"
    />

    <InfoBlock heading="How we can Help?" />
    <ContactForm />
  </Layout>
);

export const query = graphql`
  {
    img: file(relativePath: { eq: "contact.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
          src
        }
      }
    }
  }
`;

export default ContactPage;
