import React from "react";
import Heading from "../Reuseable/Heading";

function ContactForm() {
  return (
    <section className="py-3">
      <Heading title="Contact Us" />
      <div className="col-10 col-sm-8 mx-auto">
        <form action="https://formspree.io/f/mpzkrwzd" method="POST">
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
            />
          </div>

          <div className="form-group">
            <input
              className="form-control"
              type="email"
              name="email"
              id="email"
              placeholder="Your Email"
            />
          </div>

          <div className="form-group">
            <input
              className="form-control"
              type="text"
              name="mobile"
              id="mobile"
              placeholder="Your Mobile"
            />
          </div>

          <div className="form-group">
            <textarea
              className="form-control"
              type="text"
              name="description"
              id="description"
              placeholder="Your Description"
            />
          </div>

          <button type="submit" className="btn btn-outline-info btn-block">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
