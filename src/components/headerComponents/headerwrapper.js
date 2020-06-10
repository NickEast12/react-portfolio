import React, { Component } from "react";
import Particles from "react-particles-js";
import { Link } from "react-scroll";

class Headerwrapper extends Component {
  render() {
    return (
      <header className="main__body__wrapper__page header__wrapper">
        <Particles
          className="particles"
          params={{
            particles: {
              number: {
                value: 50,
                density: {
                  enable: true,
                  value_area: 800,
                },
              },
              color: {
                value: "#ff7a8b",
              },
              shape: {
                type: "circle",
                stroke: {
                  width: 0,
                  color: "#000000",
                },
                polygon: {
                  nb_sides: 5,
                },
                image: {
                  src: "img/github.svg",
                  width: 100,
                  height: 100,
                },
              },
              opacity: {
                value: 0.3551164387345227,
                random: true,
                anim: {
                  enable: false,
                  speed: 1,
                  opacity_min: 0.1,
                  sync: false,
                },
              },
              size: {
                value: 2,
                random: true,
                anim: {
                  enable: false,
                  speed: 40,
                  size_min: 0.1,
                  sync: false,
                },
              },
              line_linked: {
                enable: true,
                distance: 150,
                color: "#ff7a8b",
                opacity: 0.4,
                width: 1,
              },
              move: {
                enable: true,
                speed: 2,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200,
                },
              },
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onhover: {
                  enable: false,
                  mode: "repulse",
                },
                onclick: {
                  enable: false,
                  mode: "bubble",
                },
                resize: true,
              },
              modes: {
                grab: {
                  distance: 400,
                  line_linked: {
                    opacity: 1,
                  },
                },
                bubble: {
                  distance: 400,
                  size: 40,
                  duration: 2,
                  opacity: 8,
                  speed: 7,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
                push: {
                  particles_nb: 4,
                },
                remove: {
                  particles_nb: 2,
                },
              },
            },
            retina_detect: true,
          }}
        />
        <div className="header__wrapper__title">
          <h1>Hi, I'm Lee and I'm a Front End Web Developer</h1>
          <p>I build websites and apps using the latest web technologies</p>
          <div className="header__wrapper__button__wrapper">
            <Link
              activeClass="active"
              to="projects"
              spy={false}
              smooth={true}
              offset={0}
              duration={1000}
            >
              <button className="header__wrapper__button__wrapper__btn def__button outline__button">
                Projects!
              </button>
            </Link>
            <Link
              activeClass="active"
              to="contact"
              spy={false}
              smooth={true}
              offset={0}
              duration={1000}
            >
              <button className="header__wrapper__button__wrapper__btn def__button full__button">
                Contact Me!
              </button>
            </Link>
          </div>
          <div className="header__wrapper__lower">
            <p>
              Find me at{" "}
              <span>
                <a href="/">Github</a>
              </span>{" "}
              and
              <span>
                <a href="/">LinkedIn</a>
              </span>
            </p>
            <p>Built in React</p>
          </div>
        </div>
      </header>
    );
  }
}

export default Headerwrapper;
