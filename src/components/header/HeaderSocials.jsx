import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://github.com/LatinLady" target="_blank">
        <BsGithub />
      </a>
      <a href="#" target="_blank">
        <BsLinkedin />
      </a>
    </div>
  );
};

export default HeaderSocials;
