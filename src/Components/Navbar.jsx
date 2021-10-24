import React from "react";
import logo from "../assets/images/nbaInfo-logo.png";

export const scrollFunc = (sectionName) => {
  sectionName.current.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "end",
  });
};

const Navbar = (props) => {
  return (
    <div className="main-navbar">
      <div className="logo-wrapper">
        <img src={logo} alt="Logo Nba" className="bg-image" />
      </div>
      <div className="link-wrapper">
        <ul>
          <li onClick={() => scrollFunc(props.sections[0])}>Games</li>
          <li onClick={() => scrollFunc(props.sections[1])}>Players</li>
          <li onClick={() => scrollFunc(props.sections[2])}>Teams</li>
          <li onClick={() => scrollFunc(props.sections[3])}>About Us</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
