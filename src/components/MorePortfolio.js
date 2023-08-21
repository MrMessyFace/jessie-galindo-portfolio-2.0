import React from "react";

const MorePortfolio = () => {
  return (
    <div className="portfolio-section">
      <h2>More Portfolio</h2>
      <div className="portfolio-row">
        <div className="portfolio-item">
          <h3>SVG Logo Maker</h3>
          <a
            href="https://drive.google.com/file/d/1dshjHGLKM7oI8R-j7-K8-0m57R6mfw_i/view"
            target="_blank"
            rel="noopener noreferrer"
            title="SVG Logo Maker"
          >
            <img
              src={require("../assets/images/svg-logo-maker-screenshot.jpg")}
              alt="SVG Logo Maker"
            ></img>
          </a>
          <p>
            A Node.js app that generates an SVG file of a simple logo using
            inquiries that collects data from the user.{" "}
            <a
              href="https://github.com/MrMessyFace/svg-logo-maker"
              target="_blank"
              rel="noopener noreferrer"
              title="SVG Logo Maker GitHub Repo"
            >
              <i className="fa-brands fa-github" alt="Github"></i>
            </a>
          </p>
          <p>
            Technologies used: Inquirer, Jest,{" "}
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
          <h3>README Generator</h3>
          <a
            href="https://drive.google.com/file/d/1v2Nm0KMaARYUonXva0OYrHRYJcORxgTZ/view"
            target="_blank"
            rel="noopener noreferrer"
            title="README Generator"
          >
            <img
              src={require("../assets/images/readme-generator-screenshot.jpg")}
              alt="README Generator"
            ></img>
          </a>
          <p>
            A Node.js app that generates a README.md file using inquiries that
            collects data from the user.{" "}
            <a
              href="https://github.com/MrMessyFace/readme-generator"
              target="_blank"
              rel="noopener noreferrer"
              title="README Generator GitHub Repo"
            >
              <i className="fa-brands fa-github" alt="GitHub"></i>
            </a>
          </p>
          <p>
            Technologies used: Inquirer,{" "}
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
          <h3>Weather Dashboard</h3>
          <a
            href="https://mrmessyface.github.io/weather-dashboard/"
            target="_blank"
            rel="noopener noreferrer"
            title="Weather Dashboard"
          >
            <img
              src={require("../assets/images/weather-dashboard-screenshot.jpg")}
              alt="Weather Dashboard"
            ></img>
          </a>
          <p>
            A weather app that searches current weather and five day forecast
            for any city you search.{" "}
            <a
              href="https://github.com/MrMessyFace/weather-dashboard"
              target="_blank"
              rel="noopener noreferrer"
              title="Weather Dashboard GitHub Repo"
            >
              <i className="fa-brands fa-github" alt="GitHub"></i>
            </a>
          </p>
          <p>
            Technologies used: Web API, jQuery,{" "}
            <i className="fa-brands fa-html5" alt="HTML5" title="HTML5"></i>,{" "}
            <i className="fa-brands fa-css3" alt="CSS 3" title="CSS 3"></i>,{" "}
            <i
              className="fa-brands fa-js"
              alt="Javascript"
              title="JavaScript"
            ></i>
            , and{" "}
            <i
              className="fa-brands fa-bootstrap"
              alt="Bootstrap"
              title="Bootstrap"
            ></i>
            .
          </p>
        </div>
        <div className="portfolio-item">
          <h3>Workday Scheduler</h3>
          <a
            href="https://mrmessyface.github.io/workday-scheduler/"
            target="_blank"
            rel="noopener noreferrer"
            title="Workday Scheduler"
          >
            <img
              src={require("../assets/images/workday-scheduler-screenshot.jpg")}
              alt="Workday Scheduler"
            ></img>
          </a>
          <p>
            A 24 hour workday scheduling app with a working clock that updates
            in real time.{" "}
            <a
              href="https://github.com/MrMessyFace/workday-scheduler"
              target="_blank"
              rel="noopener noreferrer"
              title="Workday Scheduler GitHub Repo"
            >
              <i className="fa-brands fa-github" alt="GitHub"></i>
            </a>
          </p>
          <p>
            Technologies used: jQuery, Day.JS,{" "}
            <i className="fa-brands fa-html5" alt="HTML5" title="HTML5"></i>,{" "}
            <i className="fa-brands fa-css3" alt="CSS 3" title="CSS 3"></i>,{" "}
            <i
              className="fa-brands fa-js"
              alt="Javascript"
              title="JavaScript"
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
          <h3>Coding Quiz Challenge</h3>
          <a
            href="https://mrmessyface.github.io/coding-quiz-challenge/"
            target="_blank"
            rel="noopener noreferrer"
            title="Coding Quiz Challenge"
          >
            <img
              src={require("../assets/images/coding-quiz-challenge-screenshot.jpg")}
              alt="Coding Quiz Challenge"
            ></img>
          </a>
          <p>
            A multiple-choice question quiz about JavaScript with a High Score
            system.{" "}
            <a
              href="https://github.com/MrMessyFace/coding-quiz-challenge"
              target="_blank"
              rel="noopener noreferrer"
              title="Coding Quiz Challenge GitHub Repo"
            >
              <i className="fa-brands fa-github" alt="GitHub"></i>
            </a>
          </p>
          <p>
            Technologies used:{" "}
            <i className="fa-brands fa-html5" alt="HTML5" title="HTML5"></i>,{" "}
            <i className="fa-brands fa-css3" alt="CSS 3" title="CSS 3"></i>, and{" "}
            <i
              className="fa-brands fa-js"
              alt="Javascript"
              title="JavaScript"
            ></i>
            .
          </p>
        </div>
        <div className="portfolio-item">
          <h3>Password Generator</h3>
          <a
            href="https://mrmessyface.github.io/password-generator/"
            target="_blank"
            rel="noopener noreferrer"
            title="Password Generator"
          >
            <img
              src={require("../assets/images/password-generator-screenshot.jpg")}
              alt="Password Generator"
            ></img>
          </a>
          <p>
            A customizable password generator that allows the user to choose the
            parameters.{" "}
            <a
              href="https://github.com/MrMessyFace/password-generator"
              target="_blank"
              rel="noopener noreferrer"
              title="Password Generator GitHub Repo"
            >
              <i className="fa-brands fa-github" alt="GitHub"></i>
            </a>
          </p>
          <p>
            Technologies used:{" "}
            <i className="fa-brands fa-html5" alt="HTML5" title="HTML5"></i>,{" "}
            <i className="fa-brands fa-css3" alt="CSS 3" title="CSS 3"></i>, and{" "}
            <i
              className="fa-brands fa-js"
              alt="Javascript"
              title="JavaScript"
            ></i>
            .
          </p>
        </div>
        <div className="portfolio-item">
          <h3>Basic Portfolio</h3>
          <a
            href="https://mrmessyface.github.io/jessie-galindo-basic-portfolio/"
            target="_blank"
            rel="noopener noreferrer"
            title="Jessie Galindo Basic Portfolio"
          >
            <img
              src={require("../assets/images/basic-portfolio-screenshot.jpg")}
              alt="Basic Portfolio"
            ></img>
          </a>
          <p>
            A basic portfolio webpage.{" "}
            <a
              href="https://github.com/MrMessyFace/jessie-galindo-basic-portfolio"
              target="_blank"
              rel="noopener noreferrer"
              title="Jessie Galindo Basic Portfolio GitHub Repo"
            >
              <i className="fa-brands fa-github" alt="GitHub"></i>
            </a>
          </p>
          <p>
            Technologies used:{" "}
            <i className="fa-brands fa-html5" alt="HTML5" title="HTML5"></i> and{" "}
            <i className="fa-brands fa-css3" alt="CSS 3" title="CSS 3"></i>.
          </p>
        </div>
        <div className="portfolio-item">
          <h3>Code Refactor</h3>
          <a
            href="https://mrmessyface.github.io/code-refactor/"
            target="_blank"
            rel="noopener noreferrer"
            title="Code Refactor"
          >
            <img
              src={require("../assets/images/code-refactor-screenshot.jpg")}
              alt="Code Refactor"
            ></img>
          </a>
          <p>
            A webpage that had code refactored to work correctly.{" "}
            <a
              href="https://github.com/MrMessyFace/code-refactor"
              target="_blank"
              rel="noopener noreferrer"
              title="Code Refactor GitHub Repo"
            >
              <i className="fa-brands fa-github" alt="Github"></i>
            </a>
          </p>
          <p>
            Technologies used:{" "}
            <i className="fa-brands fa-html5" alt="HTML5" title="HTML5"></i> and{" "}
            <i className="fa-brands fa-css3" alt="CSS 3" title="CSS 3"></i>.
          </p>
        </div>
        <div className="portfolio-item">
          <h3>Prework Study Guide</h3>
          <a
            href="https://mrmessyface.github.io/prework-study-guide/"
            target="_blank"
            rel="noopener noreferrer"
            title="Prework Study Guide"
          >
            <img
              src={require("../assets/images/prework-study-guide-screenshot.jpg")}
              alt="Prework Study Guide"
            ></img>
          </a>
          <p>
            A study guide to prepare for learning about full stack coding.{" "}
            <a
              href="https://github.com/MrMessyFace/prework-study-guide"
              target="_blank"
              rel="noopener noreferrer"
              title="Prework Study Guide GitHub Repo"
            >
              <i className="fa-brands fa-github" alt="GitHub"></i>
            </a>
          </p>
          <p>
            Technologies used:{" "}
            <i className="fa-brands fa-html5" alt="HTML5" title="HTML5"></i>,{" "}
            <i className="fa-brands fa-css3" alt="CSS 3" title="CSS 3"></i>, and{" "}
            <i
              className="fa-brands fa-js"
              alt="JavaScript"
              title="JavaScript"
            ></i>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default MorePortfolio;
