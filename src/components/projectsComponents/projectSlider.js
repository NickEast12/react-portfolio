import React, { Component } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SVG from "react-inlinesvg";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 3 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisibilityGutter: 60,
    slidesToSlide: 1 // optional, default to 1.
  }
};

class Projectslide extends Component {
  render() {
    return (
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        minimumTouchDrag={80}
        partialVisible={true}
        autoPlay={false}
        autoPlaySpeed={1000}
        keyBoardControl={false}
        transitionDuration={1000}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
        deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-10-px"
      >
        <div className="project__card carousel-card">
          <div className="project__card__img">
            <img src="/images/lashbase-screenshot.png" alt="project 1" />
          </div>
          <div className="project__card__content">
            <h3>LashBase</h3>
            <p>
              A platform to find, book and review eyelash technicians in your
              area built using JavaScript, Node.JS and MongoDB.
            </p>
            <div className="project__card__content__links">
              <a
                href="https://github.com/NickEast12/Lash-Base"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SVG src="/images/icons/003-github.svg" />
              </a>
              <a
                href="https://lashbase.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SVG src="/images/icons/link.svg" />
              </a>
            </div>
          </div>
        </div>
        <div className="project__card carousel-card">
          <div className="project__card__img">
            <img src="/images/vs-screenshot.png" alt="project 1" />
          </div>
          <div className="project__card__content">
            <h3>Vine Street</h3>
            <p>
              Independently managed print service solutions provider based in
              the heart of Mayfair built using EJS, SCSS and Node.JS.
            </p>
            <div className="project__card__content__links">
              <a
                href="https://www.vinestreet.solutions"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SVG src="/images/icons/link.svg" />
              </a>
            </div>
          </div>
        </div>
        <div className="project__card carousel-card">
          <div className="project__card__img">
            <img src="/images/oblit-screenshot.png" alt="project 1" />
          </div>
          <div className="project__card__content">
            <h3>Obliterate </h3>
            <p>Custom-built Shopify store for a small online sole-trader.</p>
            <div className="project__card__content__links">
              <a
                href="https://obliteratehandsanitiser.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SVG src="/images/icons/link.svg" />
              </a>
            </div>
          </div>
        </div>
      </Carousel>
    );
  }
}
export default Projectslide;
