import React from "react";
import CTA from "./CTA";
import "./header.css";
import UI from "../../assets/ui.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1 className="text-enlarge">
          <span>Sanni</span> <span>Lukman</span> <span>Olatayo</span>
        </h1>
        <h5 className="text-light">
          <div>
            <span>hover me</span> Front-End Developer
            <span>
              <sup>hover me</sup>
            </span>
          </div>
        </h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={UI} alt="me" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll down
        </a>
      </div>
    </header>
  );
};

export default Header;
