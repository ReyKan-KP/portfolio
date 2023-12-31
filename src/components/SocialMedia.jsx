// SocialMedia.js

import React from "react";
import "./SocialMedia.css";
import "font-awesome/css/font-awesome.min.css";

const SocialMedia = () => {
  return (
    <div className="mainSocial">
      <ul>
        <li className="itemSocial">
          <a href="https://www.instagram.com/kanishak_pranjal_/">
            <i className="fa fa-instagram iconSocial"></i>
          </a>
        </li>
        <li className="itemSocial">
          <a href="https://www.linkedin.com/in/kanishak-pranjal-070a45235/">
            <i className="fa fa-linkedin iconSocial"></i>
          </a>
        </li>
        <li className="itemSocial">
          <a href="#">
            <i className="fa fa-youtube iconSocial"></i>
          </a>
        </li>
        <li className="itemSocial">
          <a href="#">
            <i className="fa fa-github iconSocial"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialMedia;
