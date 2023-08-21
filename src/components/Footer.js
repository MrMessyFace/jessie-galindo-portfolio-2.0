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
            title="Twitter"
          >
            <i className="fa-brands fa-x-twitter fa-2xl" alt="Twitter"></i>
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
        <div className="link-icon">
          <a
            href="https://mrmessyface.tumblr.com/"
            target="_blank"
            rel="noopener noreferrer"
            title="Tumblr"
          >
            <i className="fa-brands fa-tumblr fa-2xl" alt="Tumblr"></i>
          </a>
        </div>
        <div className="link-icon">
          <a
            href="https://www.tiktok.com/@mrmessyface"
            target="_blank"
            rel="noopener noreferrer"
            title="TikTok"
          >
            <i className="fa-brands fa-tiktok fa-2xl" alt="TikTok"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
