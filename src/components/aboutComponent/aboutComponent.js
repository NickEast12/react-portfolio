import React, { Component } from "react";

class Aboutwrapper extends Component {
  render() {
    return (
      <section className="main__body__wrapper__page about__wrapper" id="about">
        <div className="about__wrapper__inner">
          <h2>About Me</h2>
          <div className="about__wrapper__inner__section">
            <h4>
              Whether I’m working on improving websites for clients or playing
              around with personal projects, I’m always looking to improve my
              skillset and become a better developer. I love bringing ideas to
              life through designing and writing code.
            </h4>
          </div>
          <div className="about__wrapper__inner__section">
            <h3>Background</h3>
            <p>
              I spend most of my time working on Front End projects using HTML,
              CSS and JavaScript using frameworks such as React and Gadsby. If
              I’m not brushing up on my existing skills then I spend my time
              learning new technologies and challenging myself to implement them
              into the projects I have on the go. I’m a big fan of Node.JS and
              the Express framework that I use and experiment with frequently.
            </p>
          </div>
          <div className="about__wrapper__inner__section">
            <h3>Aspiration</h3>
            <p>
              I’m excited to grow as a developer and improve my current
              abilities, it’s a goal of mine to be able to be developer for a
              company in house, In the not so distant future, as it’s the next
              step in my journey to be able to make a career out of my passion
              of web design.
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default Aboutwrapper;
