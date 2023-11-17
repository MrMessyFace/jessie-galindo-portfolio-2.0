import React from "react";
import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <div id="Portfolio" className="portfolio-section">
      <h2>Portfolio</h2>
      <div className="portfolio-row">
        {/* <div className="portfolio-item">
          <h3>Messed Up Wrestling Podcast</h3>
          <a
            href="https://github.com/MrMessyFace/messed-up-wrestling-podcast"
            target="_blank"
            rel="noopener noreferrer"
            title="The Messed Up Wrestling Podcast"
          >
            <img
              src={require("../assets/images/coming-soon.jpg")}
              alt="Coming Soon"
            ></img>
          </a>
          <p>
            Homepage of The Messed Up Wrestling Podcast.{" "}
            <a
              href="https://github.com/MrMessyFace/messed-up-wrestling-podcast"
              target="_blank"
              rel="noopener noreferrer"
              title="The Messed Up Wrestling Podcast GitHub Repo"
            >
              <i className="fa-brands fa-github" alt="Github"></i>
            </a>
          </p>
          <p>
            Technologies used: React Router Dom,{" "}
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
            , and{" "}
            <i
              className="fa-brands fa-font-awesome"
              alt="Font Awesome"
              title="Font Awesome"
            ></i>
            .
          </p>
        </div> */}
        <div className="portfolio-item">
          <h3>Barber by Juan</h3>
          <a
            href="https://www.barberbyjuan.com/"
            target="_blank"
            rel="noopener noreferrer"
            title="Barber by Juan"
          >
            <img
              src={require("../assets/images/barber-by-juan-screenshot.png")}
              alt="Barber by Juan"
            ></img>
          </a>
          <p>
            A website for a barber shop in Garland, Texas.{" "}
            <a
              href="https://github.com/MrMessyFace/barber-by-juan"
              target="_blank"
              rel="noopener noreferrer"
              title="Barber by Juan GitHub Repo"
            >
              <i className="fa-brands fa-github" alt="Github"></i>
            </a>
          </p>
          <p>
            Technologies used: Apollo, React, React Player,{" "}
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
        {/* <div className="portfolio-item">
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
        </div> */}
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
        {/* <div className="portfolio-item">
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
        </div> */}
        <div className="portfolio-item">
          <h3>Tech Blog</h3>
          <a
            href="https://tech-blog-jg2023-1d9dc6a7613a.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
            title="Tech Blog"
          >
            <img
              src={require("../assets/images/tech-blog-screenshot.jpg")}
              alt="Tech Blog"
            ></img>
          </a>
          <p>
            A blog site specifically about tech stuff.{" "}
            <a
              href="https://github.com/MrMessyFace/tech-blog"
              target="_blank"
              rel="noopener noreferrer"
              title="Tech Blog GitHub Repo"
            >
              <i className="fa-brands fa-github" alt="GitHub"></i>
            </a>
          </p>
          <p>
            Technologies used: Express.JS, Express Handlebars, MySQL2,
            Sequelize, Bcrypt,{" "}
            <i className="fa-brands fa-html5" alt="HTML5" title="HTML5"></i>,{" "}
            <i className="fa-brands fa-css3" alt="CSS 3" title="CSS 3"></i>,{" "}
            <i
              className="fa-brands fa-js"
              alt="Javascript"
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
          <h3>E-Commerce Back-End</h3>
          <a
            href="https://drive.google.com/file/d/1AIYmVwSAagZvlUFugtgvL0bzH1gItOD7/view"
            target="_blank"
            rel="noopener noreferrer"
            title="E-Commerce Back-End"
          >
            <img
              src={require("../assets/images/e-commerce-back-end-screenshot.jpg")}
              alt="E-Commerce Back-End"
            ></img>
          </a>
          <p>
            A Node.js backend database app that uses Express and MySql2 and can
            be interacted with using Postman or Insomnia.{" "}
            <a
              href="https://github.com/MrMessyFace/e-commerce-back-end"
              target="_blank"
              rel="noopener noreferrer"
              title="E-Commerce Back-End GitHub Repo"
            >
              <i className="fa-brands fa-github" alt="Github"></i>
            </a>
          </p>
          <p>
            Technologies used: Express.JS, Nodemon, MySQL2, Sequelize, DotENV,{" "}
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
          <h3>Employee Tracker</h3>
          <a
            href="https://drive.google.com/file/d/1H8dcsMjENQv2zEfXL24NgO-ekdcEz6TH/view"
            target="_blank"
            rel="noopener noreferrer"
            title="Employee Tracker"
          >
            <img
              src={require("../assets/images/employee-tracker-screenshot.jpg")}
              alt="Employee Tracker"
            ></img>
          </a>
          <p>
            A Node.js database app that uses inquiries to help the user search
            the database for a company.{" "}
            <a
              href="https://github.com/MrMessyFace/employee-tracker"
              target="_blank"
              rel="noopener noreferrer"
              title="Employee Tracker GitHub Repo"
            >
              <i className="fa-brands fa-github" alt="GitHub"></i>
            </a>
          </p>
          <p>
            Technologies used: Inquirer, Express.JS, MySQL2,{" "}
            <i
              className="fa-brands fa-js"
              alt="Javascript"
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
      </div>
      <Link to="/more-portfolio">More Portfolio</Link>
    </div>
  );
};

export default Portfolio;
