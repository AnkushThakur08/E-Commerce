import React, { Component } from "react";
import Heading from "../Reuseable/Heading";
import Img from "gatsby-image";

export default class CartBundle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bundle: props.bundle.edges,
      mybundle: props.bundle.edges,
    };
  }

  render() {
    console.log(this.state.bundle);
    return (
      <section className="py-5">
        <div className="container">
          <Heading title="Our Special Bundles" />
          <div className="row my-3">
            <div className="col-10 mx-auto text-center"></div>
          </div>
          <div className="row">
            {this.state.mybundle.map(({ node }) => {
              return (
                <div
                  key={node.id}
                  className="col-11 col-md-6 d-flex my-3 mx-auto"
                >
                  <Img fixed={node.image.fixed} />
                  <div className="flex-grow-1 px-3">
                    <div className="d-flex justify-content-between">
                      <h6 className="mb-0">{node.title}</h6>
                      {/* <h6 className="mb-0 text-success">
                        &#x20b9; {node.price}
                      </h6> */}
                    </div>
                    <h6 className="mb-0 text-success">&#x20b9; {node.price}</h6>
                    <br />
                    {/* <h6 className="mb-0 text-success">&#x20b9; {node.price}</h6> */}
                    {/* <p className="text-muted">{node.description.description}</p> */}
                    <button
                      className="btn btn-warning snipcart-add-item "
                      data-item-id={node.id}
                      data-item-price={node.price}
                      data-item-url="https://ankushthakur-ecom-site.netlify.app/"
                      data-item-image={node.image.fixed.src}
                      data-item-name={node.title}
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}
