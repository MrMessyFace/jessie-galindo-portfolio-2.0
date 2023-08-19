import React from "react";
import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <div id="Portfolio" className="portfolio-section">
      <h2>Portfolio</h2>
      <div className="portfolio-row">
        <div className="portfolio-item">
          <h3>Hoop Wizard</h3>
          <a
            href="https://truck-norris.github.io/hoop-wizard/"
            target="_blank"
            rel="noopener noreferrer"
            title="Hoop Wizard"
          >
            <img
              src={require("../assets/images/hoop-wizard-screenshot.jpg")}
              alt="Hoop Wizard"
            ></img>
          </a>
          <p>
            An NBA themed YouTube video and Giphy generator.{" "}
            <a
              href="https://github.com/truck-norris/hoop-wizard"
              target="_blank"
              rel="noopener noreferrer"
              title="Hoop Wizard GitHub Repo"
            >
              <i className="fa-brands fa-github" alt="Github"></i>
            </a>
          </p>
          <p>
            Technologies used:{" "}
            <i className="fa-brands fa-html5" alt="HTML5" title="HTML5"></i>,{" "}
            <i className="fa-brands fa-css3" alt="CSS 3" title="CSS 3"></i>,{" "}
            <i
              className="fa-brands fa-js"
              alt="Javascript"
              title="JavaScript"
            ></i>
            , and{" "}
            <i
              className="fa-brands fa-font-awesome"
              alt="Font Awesome"
              title="Font Awesome"
            ></i>
            .
          </p>
        </div>
        <div className="portfolio-item">
          <h3>Note Taker</h3>
          <a
            href="https://notes-app-jg2023.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
            title="Note Taker"
          >
            <img
              src={require("../assets/images/note-taker-screenshot.jpg")}
              alt="Note Taker"
            ></img>
          </a>
          <p>
            A note taking app.{" "}
            <a
              href="https://github.com/MrMessyFace/note-taker"
              target="_blank"
              rel="noopener noreferrer"
              title="Note Taker GitHub Repo"
            >
              <i className="fa-brands fa-github" alt="Github"></i>
            </a>
          </p>
          <p>
            Technologies used: Express.JS,{" "}
            <i className="fa-brands fa-html5" alt="HTML5" title="HTML5"></i>,{" "}
            <i className="fa-brands fa-css3" alt="CSS 3" title="CSS 3"></i>,{" "}
            <i
              className="fa-brands fa-js"
              alt="JavaScript"
              title="JavaScript"
            ></i>
            ,{" "}
            <i
              className="fa-brands fa-node-js"
              alt="Node.JS"
              title="Node.JS"
            ></i>
            ,{" "}
            <i
              className="fa-brands fa-bootstrap"
              alt="Bootstrap"
              title="Bootstrap"
            ></i>
            , and{" "}
            <i
              className="fa-brands fa-font-awesome"
              alt="Font Awesome"
              title="Font Awesome"
            ></i>
            .
          </p>
        </div>
        <div className="portfolio-item">
          <h3>Resume-Pocalypse</h3>
          <a
            href="https://resume-pocalypse.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
            title="Resume-Pocalypse"
          >
            <img
              src={require("../assets/images/resume-pocalypse-screenshot.jpg")}
              alt="Resume-Pocalypse"
            ></img>
          </a>
          <p>
            A text based adventure game stylized in the theme of the Fallout
            franchise that is also a professional resume generator.{" "}
            <a
              href="https://github.com/wasteland-career-solutions/resume-pocalypse"
              target="_blank"
              rel="noopener noreferrer"
              title="Resume-Pocalypse GitHub Repo"
            >
              <i className="fa-brands fa-github" alt="Github"></i>
            </a>
          </p>
          <p>
            Technologies used: Express.JS, Express Handlebars, MySQL2, PDFKit,
            Sequelize,{" "}
            <i className="fa-brands fa-css3" alt="CSS 3" title="CSS 3"></i>,{" "}
            <i
              className="fa-brands fa-js"
              alt="JavaScript"
              title="JavaScript"
            ></i>
            ,{" "}
            <i
              className="fa-brands fa-node-js"
              alt="Node.JS"
              title="Node.JS"
            ></i>
            ,{" "}
            <i
              className="fa-brands fa-bootstrap"
              alt="Bootstrap"
              title="Bootstrap"
            ></i>
            , and{" "}
            <i
              className="fa-brands fa-font-awesome"
              alt="Font Awesome"
              title="Font Awesome"
            ></i>
            .
          </p>
        </div>
        <div className="portfolio-item">
          <h3>Just Another Text Editor</h3>
          <a
            href="https://young-ocean-37817-b9df5f618cd6.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
            title="Just Another Text Editor"
          >
            <img
              src={require("../assets/images/just-another-text-editor-screenshot.jpg")}
              alt="Just Another Text Editor"
            ></img>
          </a>
          <p>
            A text editor that uses PWA technology to save your work offline.{" "}
            <a
              href="https://github.com/MrMessyFace/just-another-text-editor"
              target="_blank"
              rel="noopener noreferrer"
              title="Just Another Text Editor GitHub Repo"
            >
              <i className="fa-brands fa-github" alt="Github"></i>
            </a>
          </p>
          <p>
            Technologies used: Express.JS,{" "}
            <i className="fa-brands fa-html5" alt="HTML5" title="HTML5"></i>,{" "}
            <i className="fa-brands fa-css3" alt="CSS3" title="CSS 3"></i>,{" "}
            <i
              className="fa-brands fa-js"
              alt="JavaScript"
              title="JavaScript"
            ></i>
            , and{" "}
            <i
              className="fa-brands fa-node-js"
              alt="Node.JS"
              title="Node.JS"
            ></i>
            .
          </p>
        </div>
        <div className="portfolio-item">
          <h3>NetMinder</h3>
          <a
            href="https://netminder-frontend-c2d1f8e64193.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
            title="NetMinder"
          >
            <img
              src={require("../assets/images/netminder-screenshot.jpg")}
              alt="NetMinder"
            ></img>
          </a>
          <p>
            A professional networking reminder app that helps remind you to
            contact colleagues or clients to further network yourself.{" "}
            <a
              href="https://github.com/React-Rangers/netminder-frontend"
              target="_blank"
              rel="noopener noreferrer"
              title="NetMinder Front End GitHub Repo"
            >
              <i className="fa-brands fa-github" alt="Github"></i>
            </a>{" "}
            <a
              href="https://github.com/React-Rangers/netminder-backend"
              target="_blank"
              rel="noopener noreferrer"
              title="NetMinder Back End GitHub Repo"
            >
              <i className="fa-brands fa-github" alt="Github"></i>
            </a>
          </p>
          <p>
            Technologies used: Apollo, Ant Design, Express.JS, GraphQL, JSON Web
            Token, MongoDB, Mongoose, React Router Dom,{" "}
            <i
              className="fa-brands fa-react"
              alt="React JS"
              title="React JS"
            ></i>
            , <i className="fa-brands fa-html5" alt="HTML5" title="HTML5"></i>,{" "}
            <i className="fa-brands fa-css3" alt="CSS 3" title="CSS 3"></i>,{" "}
            <i
              className="fa-brands fa-js"
              alt="JavaScript"
              title="JavaScript"
            ></i>
            ,{" "}
            <i
              className="fa-brands fa-node-js"
              alt="Node.JS"
              title="Node.JS"
            ></i>
            ,{" "}
            <i
              className="fa-brands fa-bootstrap"
              alt="Bootstrap"
              title="Bootstrap"
            ></i>
            , and{" "}
            <i
              className="fa-brands fa-font-awesome"
              alt="Font Awesome"
              title="Font Awesome"
            ></i>
            .
          </p>
        </div>
      </div>
      {/* <Link to="/more-portfolio">More Portfolio</Link> */}
    </div>
  );
};

export default Portfolio;
