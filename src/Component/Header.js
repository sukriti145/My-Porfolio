import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import git from "../Image/github.png";
import linkedin from "../Image/linkedin.png";
import fb from "../Image/Facebook.png";
import insta from "../Image/instagram.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="header__top">
      <button className="menu-toggle" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} size="1x" />
      </button>
      <ul className={menuOpen ? "active" : ""}>
        <li>
          <Link style={{ color: "orange" }} to="/home">
            Home
          </Link>
        </li>
        <li>
          <Link style={{ color: "orange" }} to="/about">
            About
          </Link>
        </li>
        <li>
          <Link style={{ color: "orange" }} to="/project">
            Project
          </Link>
        </li>
        <li>
          <Link style={{ color: "orange" }} to="/technologies">
            Technologies
          </Link>
        </li>
        <li>
          <Link style={{ color: "orange" }} to="/contact">
            Contact
          </Link>
        </li>
        <li>
          <a href="https://github.com/sukriti145" target="blank">
            <img className="links-1" src={git} alt="" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/sukriti-sood-b44500208/"
            target="blank"
          >
            <img className="links-1" src={linkedin} alt="" />
          </a>
        </li>
      
        
      </ul>
    </div>
  );
};

export default Header;
