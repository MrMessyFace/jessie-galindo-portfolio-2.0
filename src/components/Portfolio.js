import React from "react";

const Portfolio = () => {
  return (
    <div>
      <h2>Portfolio</h2>
      <div>
        <h3>RESUME-POCALYPSE</h3>
        <a
          href="https://resume-pocalypse.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={require("../assets/images/resume-pocalypse.png")}
            height={300}
            alt="Resume-Pocalypse"
          ></img>
        </a>
        <p>
          A group project of a text based adventure game stylized in the theme
          of the Fallout franchise that is also a professional resume generator.
          <a
            href="https://github.com/wasteland-career-solutions/resume-pocalypse"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa-brands fa-github fa-lg"></i>
          </a>
        </p>
      </div>
      <div>
        <h3>HOOP WIZARD</h3>
        <a
          href="https://truck-norris.github.io/hoop-wizard/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={require("../assets/images/hoop-wizard.png")}
            height={300}
            alt="Hoop Wizard"
          ></img>
        </a>
        <p>
          A group project of an NBA themed YouTube video and gif generator.
          <a
            href="https://github.com/truck-norris/hoop-wizard"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa-brands fa-github fa-lg"></i>
          </a>
        </p>
      </div>
      <div>
        <h3>WEATHER DASHBOARD</h3>
        <a
          href="https://mrmessyface.github.io/weather-dashboard/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={require("../assets/images/weather-dashboard.png")}
            height={300}
            alt="Weather Dashboard"
          ></img>
        </a>
        <p>
          A weather app that searches current weather and five day forecast for
          any city you search.
          <a
            href="https://github.com/MrMessyFace/weather-dashboard"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa-brands fa-github fa-lg"></i>
          </a>
        </p>
      </div>
      <div>
        <h3>WORKDAY SCHEDULER</h3>
        <a
          href="https://mrmessyface.github.io/workday-scheduler/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={require("../assets/images/workday-scheduler.png")}
            height={300}
            alt="Workday Scheduler"
          ></img>
        </a>
        <p>
          A 24 hour workday scheduling app that updates in real time.{" "}
          <a
            href="https://github.com/MrMessyFace/workday-scheduler"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa-brands fa-github fa-lg"></i>
          </a>
        </p>
      </div>
      <div>
        <h3>CODING QUIZ CHALLENGE</h3>
        <a
          href="https://mrmessyface.github.io/coding-quiz-challenge/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={require("../assets/images/coding-quiz-challenge.png")}
            height={300}
            alt="Coding Quiz Challenge"
          ></img>
        </a>
        <p>
          A multi-choice quiz on JavaScript.
          <a
            href="https://github.com/MrMessyFace/coding-quiz-challenge"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa-brands fa-github fa-lg"></i>
          </a>
        </p>
      </div>
      <div>
        <h3>PASSWORD GENERATOR</h3>
        <a
          href="https://mrmessyface.github.io/password-generator/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={require("../assets/images/password-generator.png")}
            height={300}
            alt="Password Generator"
          ></img>
        </a>
        <p>
          A JavaScript refactor to create a randomized password generator.{" "}
          <a
            href="https://github.com/MrMessyFace/password-generator"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa-brands fa-github fa-lg"></i>
          </a>
        </p>
      </div>
    </div>
  );
};

export default Portfolio;
