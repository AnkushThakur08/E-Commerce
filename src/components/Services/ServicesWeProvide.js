import React from "react";
import Heading from "../Reuseable/Heading";

const Services = ({ img1, img2, img3, heading }) => {
  return (
    <section className="bg-theme my-5 py-4">
      <div className="container">
        <Heading title={heading} />
        <div className="row">
          <div>
            <div className="card-group">
              <div className="card">
                <img className="card-img-top" src={img1} alt="" />
                <div className="card-body">
                  <h5 className="card-title">PhotoShop</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                </div>
              </div>

              <div className="card">
                <img className="card-img-top" src={img2} alt="" />
                <div className="card-body">
                  <h5 className="card-title">Python</h5>
                  <p className="card-text">
                    This card has supporting text below as a natural lead-in to
                    additional content.
                  </p>
                </div>
              </div>

              <div className="card">
                <img className="card-img-top" src={img3} alt="" />
                <div className="card-body">
                  <h5 className="card-title">Block Chain</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This card has even longer
                    content than the first to show that equal height action.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
