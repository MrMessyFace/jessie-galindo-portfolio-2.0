import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="copyright">
        &copy; 2023 Jessie S. Galindo. All Rights Reserved.
      </div>
      <div className="socials">
        <div className="link-icon">
          <a
            href="https://www.linkedin.com/in/jessie-galindo-09418092/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <i className="fa-brands fa-linkedin fa-2xl" alt="LinkedIn"></i>
          </a>
        </div>
        <div className="link-icon">
          <a
            href="https://github.com/MrMessyFace"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
          >
            <i className="fa-brands fa-github fa-2xl" alt="GitHub"></i>
          </a>
        </div>
        <div className="link-icon">
          <a
            href="https://www.facebook.com/MrMessyFace"
            target="_blank"
            rel="noopener noreferrer"
            title="Facebook"
          >
            <i className="fa-brands fa-facebook fa-2xl" alt="Facebook"></i>
          </a>
        </div>
        <div className="link-icon">
          <a
            href="https://www.twitter.com/MrMessyFace"
            target="_blank"
            rel="noopener noreferrer"
            title="X"
          >
            <i className="fa-brands fa-x-twitter fa-2xl" alt="X"></i>
          </a>
        </div>
        <div className="link-icon">
          <a
            href="https://www.instagram.com/MrMessyFace"
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram"
          >
            <i className="fa-brands fa-instagram fa-2xl" alt="Instagram"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
