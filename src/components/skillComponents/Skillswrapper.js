import React, { Component } from "react";

class Skillswrapper extends Component {
  render() {
    return (
      <section
        className="main__body__wrapper__page skills__wrapper"
        id="skills"
      >
        <div className="skills__wrapper__inner">
          <div className="skills__wrapper__inner__title">
            <h2>Skills</h2>
            <p>
              I’ve picked up many skills over the years but I’m not done there,
              I’m always learning and adding new skills to my portfolio.
            </p>
          </div>
          {/* <div className="skills__wrapper__inner__sections">
            <h4>Web Technologies & Frameworks</h4>
            <div className="skills__wrapper__inner__sections__flex">
              <p>HTML5</p>
              <p>CSS3</p>
              <p>SCSS</p>
              <p>JavaScript</p>
              <p>Node.JS</p>
              <p>Express</p>
              <p>PUG</p>
              <p>React.JS</p>
              <p>Gulp</p>
              <p>Webpack</p>
              <p>Git</p>
              <p>WordPress</p>
              <p>MongoDB</p>
              <p>Adobe Suite</p>
              <p>Sketch</p>
            </div>
          </div> */}
          <div className="skills__wrapper__inner__sections">
            <h4>Front End</h4>
            <div className="skills__wrapper__inner__sections__flex">
              <p>HTML5</p>
              <p>CSS3</p>
              <p>SCSS</p>
              <p>JavaScript</p>
              <p>React.JS</p>
              <p>Gatsby.JS</p>
              <p>WordPress</p>
            </div>
          </div>
          <div className="skills__wrapper__inner__sections">
            <h4>Back End</h4>
            <div className="skills__wrapper__inner__sections__flex">
              <p>Node.JS</p>
              <p>Express</p>
              <p>PUG</p>
              <p>MongoDB</p>
            </div>
          </div>
          <div className="skills__wrapper__inner__sections">
            <h4>Tools</h4>
            <div className="skills__wrapper__inner__sections__flex">
              <p>Git</p>
              <p>Gulp</p>
              <p>Webpack</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Skillswrapper;
