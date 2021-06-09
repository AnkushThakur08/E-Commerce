import React from "react";
import Heading from "./Heading";
import { Link } from "gatsby";

const DualInfoBlock = ({ heading, img }) => {
  return (
    <section className="bg-theme my-5 py-4">
      <div className="container">
        <Heading title={heading} />
        <div className="row">
          <div className="col-8 mx-auto">
            <p className="lead text-white mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
              blanditiis at autem beatae porro, quibusdam iusto non similique
              velit! Debitis quos obcaecati beatae nihil sapiente iure nulla
              molestias numquam quam expedita necessitatibus, dolore labore
              blanditiis explicabo, sunt similique sequi recusandae? Vel facere
              totam exercitationem est voluptates, eligendi fugiat alias autem
              odit dolore consectetur cum iure nulla doloribus pariatur velit
              tempore Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Vero blanditiis at autem beatae porro, quibusdam iusto non
              similique velit! Debitis quos obcaecati beatae nihil sapiente iure
              nulla molestias numquam quam expedita necessitatibus, dolore
              labore blanditiis explicabo, sunt similique sequi recusandae? Vel
              facere totam exercitationem est voluptates, eligendi fugiat alias
              autem odit dolore consectetur cum iure nulla doloribus pariatur
              velit tempore Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Vero blanditiis at autem beatae porro, quibusdam iusto non
              similique velit! Debitis quos obcaecati beatae nihil sapiente iure
              nulla molestias numquam quam expedita necessitatibus, dolore
              labore blanditiis explicabo, sunt similique sequi recusandae? Vel
              facere totam exercitationem est voluptates, eligendi fugiat alias
              autem odit dolore consectetur cum iure nulla doloribus pariatur
              velit tempore!
            </p>
          </div>
          <div className="col-4">
            <div className="card bg-dark">
              <img className="card-img-top" src={img} alt="Images Here" />
              <div className="card-body">
                <h5 className="card-title text-success">{heading}</h5>
                <p className="card-text text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                  blanditiis at autem beatae porro, quibusdam iusto non
                  similique velit! Debitis quos obcaecati beatae nihil sapiente
                  iure nulla molestias numquam quam expedita necessitatibus,
                  dolore labore blanditiis explicabo, sunt similique sequi
                  recusandae
                </p>

                <Link to="/about/">
                  <button className="btn btn-block btn-warning">
                    {heading}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DualInfoBlock;
