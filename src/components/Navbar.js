import React from "react";
import { Link } from "react-router-dom";
import pdf from "../assets/pdfs/jessie-galindo-resume-2023.pdf";

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="#About-Me">About</a>
      <a href="#Portfolio">Portfolio</a>
      <Link to="/">
        <img
          src={require("../assets/images/jessie-galindo-avatar.jpg")}
          alt="Jessie Galindo"
        ></img>
      </Link>
      <a href="#Contact">Contact</a>
      {/* <div>
        <button >Outside Work</button>
        <div>
          <a href="#">The Messed Up Wrestling Podcast (COMING SOON!)</a>
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
      </div> */}
      <a href={pdf} target="_blank" rel="noopener noreferrer">
        Resume
      </a>
    </nav>
  );
};

export default Navbar;
