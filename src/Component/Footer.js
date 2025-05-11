import React from "react";
import "./footer.css";
import git from "../Image/github.png";
import linkedin from "../Image/linkedin.png";
import fb from "../Image/Facebook.png";
import insta from "../Image/instagram.png";

const Footer = () => {
  return (
    <div>
      <div className="footer__icons">
        <a href="https://github.com/sukriti145" target="blank">
          <img src={git} alt="GitHub" />
        </a>
        <a
          href="https://www.linkedin.com/in/sukriti-sood-b44500208/"
          target="blank"
        >
          <img src={linkedin} alt="LinkedIn" />
        </a>
      </div>
      <h3 className="footer" style={{ color: "white" }}>
        Design and code by Sukriti Sood
      </h3>
    </div>
  );
};

export default Footer;
