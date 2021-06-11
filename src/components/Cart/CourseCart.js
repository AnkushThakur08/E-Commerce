import React, { Component } from "react";
import Heading from "../Reuseable/Heading";
import Img from "gatsby-image";

const getCaty = items => {
  let holdItems = items.map(items => {
    return items.node.category;
    // 2. Iterating Every Object and getting it Category (now, category may be repeated)
  });

  let holdCategories = new Set(holdItems);
  // 3. Get Unique value from category
  let categories = Array.from(holdCategories);
  // 4.Then we created Array
  categories = ["All", ...categories];
  // 5. All button
  return categories;
};

export default class CourseCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: props.courses.edges,
      mycourses: props.courses.edges,
      mycategories: getCaty(props.courses.edges),
      // 1. function = category find out kregye....edges se pura node object de rhe hai
    };
  }

  catyClicked = category => {
    let keepItSafe = [...this.state.courses];

    if (category === "All") {
      this.setState(() => {
        return { mycourses: keepItSafe };
      });
    } else {
      let holdme = keepItSafe.filter(({ node }) => node.category === category);
      this.setState(() => {
        return { mycourses: holdme };
      });
    }
  };

  render() {
    console.log(this.state.courses);
    return (
      <section className="py-5">
        <div className="container">
          <Heading title="Our Amazing Online Courses" />
          <div className="row my-3">
            <div className="col-10 mx-auto text-center">
              {this.state.mycategories.map((category, index) => {
                return (
                  <button
                    className="btn btn-info button"
                    type="button"
                    key={index}
                    onClick={() => {
                      this.catyClicked(category);
                    }}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="row">
            {this.state.mycourses.map(({ node }) => {
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
                    <p className="text-muted">{node.description.description}</p>
                    <button
                      className="btn btn-warning snipcart-add-item "
                      data-item-id={node.id}
                      data-item-price={node.price}
                      data-item-url="https://ankushthakur-ecom-site.netlify.app/"
                      data-item-image={node.image.fixed.src}
                      data-item-name={node.title}
                    >
                      Join Now
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
