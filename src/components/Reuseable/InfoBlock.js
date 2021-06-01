import React from "react";
import Heading from "./Heading";
import { Link } from "gatsby";

const InfoBlock = ({ heading }) => {
  return (
    <section className="bg-theme my-5 py-4">
      <div className="container">
        <Heading title={heading} />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-white mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
              blanditiis at autem beatae porro, quibusdam iusto non similique
              velit! Debitis quos obcaecati beatae nihil sapiente iure nulla
              molestias numquam quam expedita necessitatibus, dolore labore
              blanditiis explicabo, sunt similique sequi recusandae? Vel facere
              totam exercitationem est voluptates, eligendi fugiat alias autem
              odit dolore consectetur cum iure nulla doloribus pariatur velit
              tempore!
            </p>
            <Link to="/about/">
              <button className="btn btn-lg btn-warning">{heading}</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoBlock;
