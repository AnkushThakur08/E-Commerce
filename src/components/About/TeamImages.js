import React from "react";

const TeamImages = ({ img }) => {
  return (
    <div className="row">
      <div className="col-10 col-sm-10 mx-auto m-5">
        <div class="card-group">
          <div class="card">
            <img class="card-img-top" src={img} alt="" />
            <div class="card-body">
              <h5 class="card-title">Hitesh Choudhary</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>

          <div class="card">
            <img class="card-img-top" src={img} alt="" />
            <div class="card-body">
              <h5 class="card-title">Hitesh Choudhary</h5>
              <p class="card-text">
                This card has supporting text below as a natural lead-in to
                additional content.
              </p>
            </div>
          </div>

          <div class="card">
            <img class="card-img-top" src={img} alt="" />
            <div class="card-body">
              <h5 class="card-title">Hitesh Choudhary</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamImages;
