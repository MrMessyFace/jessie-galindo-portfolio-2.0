function Portfolio() {
  return (
    <div id="Portfolio">
      <div className="container">
        <div className="row: justify-content-center">
          <div className="portfoliohead">
            <h2>PORTFOLIO</h2>
          </div>
        </div>
      </div>
      <div className="portfolio-content">
        <div className="portcard">
          <div className="card">
            <h3 className="card-title">RESUME-POCALYPSE</h3>
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
            <div className="card-text">
              <p>
                A group project of a text based adventure game stylized in the
                theme of the Fallout franchise that is also a professional
                resume generator.{" "}
                <a
                  href="https://github.com/wasteland-career-solutions/resume-pocalypse"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fa-brands fa-github fa-lg"></i>
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="portcard">
          <div className="card">
            <h3 className="card-title">HOOP WIZARD</h3>
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
            <div className="card-text">
              <p>
                A group project of an NBA themed YouTube video and gif
                generator.{" "}
                <a
                  href="https://github.com/truck-norris/hoop-wizard"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fa-brands fa-github fa-lg"></i>
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="portcard">
          <div className="card">
            <h3 className="card-title">WEATHER DASHBOARD</h3>
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
            <div className="card-text">
              <p>
                A weather app that searches current weather and five day
                forecast for any city you search.{" "}
                <a
                  href="https://github.com/MrMessyFace/weather-dashboard"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fa-brands fa-github fa-lg"></i>
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="portcard">
          <div className="card">
            <h3 className="card-title">WORKDAY SCHEDULER</h3>
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
            <div className="card-text">
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
          </div>
        </div>
        <div className="portcard">
          <div className="card">
            <h3 className="card-title">CODING QUIZ CHALLENGE</h3>
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
            <div className="card-text">
              <p>
                A multi-choice quiz on JavaScript.{" "}
                <a
                  href="https://github.com/MrMessyFace/coding-quiz-challenge"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fa-brands fa-github fa-lg"></i>
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="portcard">
          <div className="card">
            <h3 className="card-title">PASSWORD GENERATOR</h3>
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
            <div className="card-text">
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
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
