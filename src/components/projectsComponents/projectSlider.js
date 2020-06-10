import React, { Component } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SVG from "react-inlinesvg";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 3, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisibilityGutter: 60,
    slidesToSlide: 1, // optional, default to 1.
  },
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
            <img src="/images/office1-min.jpg" alt="project 1" />
          </div>
          <div className="project__card__content">
            <h3>Project 1</h3>
            <p>A description about this amazing project</p>
            <div className="project__card__content__links">
              <a href="/">
                <SVG src="/images/icons/003-github.svg" />
              </a>
              <a href="/">
                <SVG src="/images/icons/link.svg" />
              </a>
            </div>
          </div>
        </div>
        <div className="project__card carousel-card">
          <div className="project__card__img">
            <img src="/images/office1-min.jpg" alt="project 1" />
          </div>
          <div className="project__card__content">
            <h3>Project 2</h3>
            <p>A description about this amazing project</p>
            <div className="project__card__content__links">
              <a href="/">
                <SVG src="/images/icons/link.svg" />
              </a>
            </div>
          </div>
        </div>
        <div className="project__card carousel-card">
          <div className="project__card__img">
            <img src="/images/office1-min.jpg" alt="project 1" />
          </div>
          <div className="project__card__content">
            <h3>Project 3 </h3>
            <p>A description about this amazing project</p>
            <div className="project__card__content__links">
              <a href="/">
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
