import React from "react";
import { Link } from "react-router-dom";
import Freelancing from "../components/Freelancing";
import pdf from "../assets/pdfs/jessie-galindo-resume.pdf";

const Navbar = () => {
  return (
    <nav className="navbar">
      <nav className="navbar-left">
        <div className="navbar-image">
          <Link to="/">
            <img
              src={require("../assets/images/jessie-galindo-avatar.jpg")}
              alt="Jessie Galindo"
              title="Home"
            ></img>
          </Link>
        </div>
      </nav>
      <nav className="navbar-right">
        <Link to="/about">About</Link>•<Link to="/portfolio">Portfolio</Link>•
        <Link to="/contact">Contact</Link>•
        <div className="dropdown-menu">
          <button className="dropdown-button">Outside Work</button>
          <div className="dropdown-content">
            <a
              href="http://officialmessedupcomics.tumblr.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Messed Up Comics
            </a>
            <a
              href="https://www.youtube.com/@IABProductions"
              target="blank"
              rel="noopener noreferrer"
            >
              IAB Productions
            </a>
          </div>
        </div>
        •
        <a href={pdf} target="_blank" rel="noopener noreferrer">
          Resume
        </a>
        •
        <div>
          <Freelancing />
        </div>
      </nav>
    </nav>
  );
};

export default Navbar;
