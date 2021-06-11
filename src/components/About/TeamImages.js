import React from "react";
import Heading from "../Reuseable/Heading";

const TeamImages = ({ img, img1, img3 }) => {
  return (
    <div className="row">
      <div className="col-10 col-sm-10 mx-auto m-5">
        <Heading title="Our Team Members" />
        <div className="card-group">
          <div className="card">
            <img className="card-img-top" src={img} alt="" />
            <div className="card-body">
              <h5 className="card-title">Olivia</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>

          <div className="card">
            <img className="card-img-top" src={img1} alt="" />
            <div className="card-body">
              <h5 className="card-title">Sophia</h5>
              <p className="card-text">
                {/* This card has supporting text below as a natural lead-in to
                additional content. */}
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>

          <div className="card">
            <img className="card-img-top" src={img3} alt="" />
            <div className="card-body">
              <h5 className="card-title"> Leader</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamImages;
