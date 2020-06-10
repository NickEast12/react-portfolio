import React, { Component } from "react";
import SVG from "react-inlinesvg";
import Particles from "react-particles-js";

class ContactWrapper extends Component {
  render() {
    return (
      <footer
        className="main__body__wrapper__page contact__wrapper"
        id="contact"
      >
        <Particles
          className="particles"
          params={{
            particles: {
              number: {
                value: 60,
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
        <div className="contact__wrapper__inner">
          <h2>Contact Me</h2>
          <div className="contact__wrapper__inner__title">
            <p>
              So if you’ve read all the above and are still here, I want to say
              thank you for taking the time to find out more about me. Why not
              send me an email to say Hi?
            </p>
          </div>
          <a href="/">
            <div className="contact__wrapper__inner__links def__button email">
              <SVG src="/images/icons/002-telegram.svg" />
              <p>Email</p>
            </div>
          </a>
          <div className="contact__wrapper__inner__title">
            <h4>Or find me online..</h4>
          </div>
          <div className="contact__wrapper__inner__social">
            <a href="/">
              <div className="contact__wrapper__inner__social__btn linkedin ">
                <SVG src="/images/icons/001-linkedin.svg" />
                <p>Linkedin</p>
              </div>
            </a>
            <a href="/">
              <div className="contact__wrapper__inner__social__btn  github">
                <SVG src="/images/icons/003-github.svg" />
                <p>GitHub</p>
              </div>
            </a>
            <a href="/">
              <div className="contact__wrapper__inner__social__btn spotify ">
                <SVG src="/images/icons/004-spotify.svg" />
                <p>Spotify</p>
              </div>
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default ContactWrapper;
