import React from "react";
import CTA from "./CTA";
import "./header.css";
import ME from "../../assets/me.png";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Sanni Lukman</h1>
        <h5 className="text-light">Front-End Developer</h5>
        <CTA />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll down
        </a>
      </div>
    </header>
  );
};

export default Header;
