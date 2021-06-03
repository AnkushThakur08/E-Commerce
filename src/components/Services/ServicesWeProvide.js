import React from "react";
import Heading from "../Reuseable/Heading";

const Services = ({ img1, img2, img3, heading }) => {
  return (
    <section className="bg-theme my-5 py-4">
      <div className="container">
        <Heading title={heading} />
        <div className="row">
          <div>
            <div class="card-group">
              <div class="card">
                <img class="card-img-top" src={img1} alt="" />
                <div class="card-body">
                  <h5 class="card-title">PhotoShop</h5>
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                </div>
              </div>

              <div class="card">
                <img class="card-img-top" src={img2} alt="" />
                <div class="card-body">
                  <h5 class="card-title">Python</h5>
                  <p class="card-text">
                    This card has supporting text below as a natural lead-in to
                    additional content.
                  </p>
                </div>
              </div>

              <div class="card">
                <img class="card-img-top" src={img3} alt="" />
                <div class="card-body">
                  <h5 class="card-title">Block Chain</h5>
                  <p class="card-text">
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
