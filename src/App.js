import React from "react";
import "./Assets/css/main.min.css";
import Headerwrapper from "./components/headerComponents/headerwrapper";
import Imagewrapper from "./components/imageComponents/imageWrapper";
import Aboutwrapper from "./components/aboutComponents/aboutComponent";
import Projectswrapper from "./components/projectsComponents/projectsWrapper";
import Skillswrapper from "./components/skillComponents/Skillswrapper";
import ContactWrapper from "./components/contactComponents/contactwrapper";
import Menu from "./components/menuComponents/menuComponent";
function App() {
  return (
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

export default App;
