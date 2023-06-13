import React from "react";
import "./header.css";
import Me from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";

function Header() {
  return (
    <>
      <header id="header">
        <div className="container header__container">
          <h5>Hello I'm</h5>
          <h1>Jemmy Blyden</h1>
          <h5 className="text-light">Full-Stack Developer</h5>
          <div>
            <div className="me">
              <img src={Me} alt="me" />
            </div>
          </div>
          <HeaderSocials />
          <a href="#footer" className="scroll__down">
            Scroll Down
          </a>
        </div>
      </header>
    </>
  );
}

export default Header;
