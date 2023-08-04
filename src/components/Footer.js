import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="copyright">
        &copy; 2023 Jessie S. Galindo. All rights reserved.
      </div>
      <div className="socials">
        <div className="linkedin">
          <a
            href="https://www.linkedin.com/in/jessie-galindo-09418092/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa-brands fa-linkedin fa-lg"></i>
          </a>
        </div>
        <div className="github">
          <a
            href="https://github.com/MrMessyFace"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa-brands fa-github fa-lg"></i>
          </a>
        </div>
        <div className="facebook">
          <a
            href="https://www.facebook.com/MrMessyFace"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-facebook fa-lg"></i>
          </a>
        </div>
        <div className="twitter">
          <a
            href="https://www.twitter.com/MrMessyFace"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-twitter fa-lg"></i>
          </a>
        </div>
        <div className="instagram">
          <a
            href="https://www.instagram.com/MrMessyFace"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-instagram fa-lg"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
