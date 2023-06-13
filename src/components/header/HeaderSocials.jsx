import React from "react";
import { BsGithub } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://github.com/LatinLady" target="_blank" rel="noreferrer" >
        <BsGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
