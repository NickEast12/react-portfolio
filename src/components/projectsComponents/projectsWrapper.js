import React, { Component } from "react";
import Projectslider from "./projectSlider";

class Projectswrapper extends Component {
  render() {
    return (
      <section
        className="main__body__wrapper__page projects__wrapper"
        id="projects"
      >
        <div className="projects__wrapper__inner">
          <div className="projects__wrapper__inner__title">
            <h2>Projects</h2>
            <p>
              Take a swipe at my most recent projects. Use the links to take a
              look at the project or its source code.
            </p>
          </div>
          <Projectslider />
        </div>
      </section>
    );
  }
}

export default Projectswrapper;
