import React, { Component } from "react";
import Headerwrapper from "../headerComponents/headerwrapper";
import Imagewrapper from "../imageComponents/imageWrapper";
import Aboutwrapper from "../aboutComponents/aboutComponent";
import Projectswrapper from "../projectsComponents/projectsWrapper";
import Skillswrapper from "../skillComponents/Skillswrapper";
import ContactWrapper from "../contactComponents/contactwrapper";
import Menu from "../menuComponents/menuComponent";

class Mainwrapper extends Component {
  render() {
    return (
      //! keep
      <div className="main__body__wrapper">
        <Menu />
        <div className="desktop__display__gird">
          <div className="desktop__display__gird--one">
            <Headerwrapper />
          </div>
          <div className="desktop__display__gird--two">
            <Imagewrapper />
            <Aboutwrapper />
            <Projectswrapper />
            <Skillswrapper />
            <ContactWrapper />
          </div>
        </div>
      </div>
    );
  }
}

export default Mainwrapper;
