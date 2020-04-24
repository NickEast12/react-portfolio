import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import { Link } from "react-scroll";

const Menu = () => {
  const [isToggled, setToggle] = useState(false);
  const fade = useSpring({
    opacity: isToggled ? 1 : 0
  });

  return (
    <div className="menu__button">
      <img
        src="/nick_logo_2020.png"
        alt="logo"
        onClick={() => setToggle(!isToggled)}
      />
      <animated.div className="menu__wrapper" style={fade}>
        <h3>Menu</h3>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={0}
          duration={200}
        >
          <div className="menu__wrapper__item">
            <h4>About</h4>
            <p>just siome small text to desctibe</p>
          </div>
        </Link>
        <Link
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={0}
          duration={200}
        >
          <div className="menu__wrapper__item">
            <h4>Projects</h4>
            <p>just siome small text to desctibe </p>
          </div>
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={0}
          duration={200}
        >
          <div className="menu__wrapper__item">
            <h4>Skills</h4>
            <p>just siome small text to desctibe</p>
          </div>
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={0}
          duration={200}
        >
          <div className="menu__wrapper__item">
            <h4>Contact</h4>
            <p>just siome small text to desctibe </p>
          </div>
        </Link>
      </animated.div>
    </div>
  );
};

export default Menu;
