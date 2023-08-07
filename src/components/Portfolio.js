import React from "react";
import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <div id="Portfolio" className="portfolio-section">
      <h2>Portfolio</h2>
      <div className="portfolio-row">
        <div className="portfolio-column">
          <div className="portfolio-item">
            <h3>Hoop Wizard</h3>
            <a
              href="https://truck-norris.github.io/hoop-wizard/"
              target="_blank"
              rel="noopener noreferrer"
              title="Hoop Wizard"
            >
              <img
                src={require("../assets/images/hoop-wizard.png")}
                alt="Hoop Wizard"
              ></img>
            </a>
            <p>
              A group project of an NBA themed YouTube video and gif generator.{" "}
              <a
                href="https://github.com/truck-norris/hoop-wizard"
                target="_blank"
                rel="noopener noreferrer"
                title="Hoop Wizard GitHub Repo"
              >
                <i class="fa-brands fa-github"></i>
              </a>
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
                src={require("../assets/images/resume-pocalypse.png")}
                alt="Resume-Pocalypse"
              ></img>
            </a>
            <p>
              A group project of a text based adventure game stylized in the
              theme of the Fallout franchise that is also a professional resume
              generator.{" "}
              <a
                href="https://github.com/wasteland-career-solutions/resume-pocalypse"
                target="_blank"
                rel="noopener noreferrer"
                title="Resume-Pocalypse GitHub Repo"
              >
                <i class="fa-brands fa-github"></i>
              </a>
            </p>
          </div>
          <div className="portfolio-item">
            <h3>NetMinder</h3>
            <a
              href="https://netminder-frontend.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
              title="NetMinder"
            >
              <img
                src={require("../assets/images/netminder.png")}
                alt="NetMinder"
              ></img>
            </a>
            <p>
              A group project of a professional networking reminder app that
              helps remind you to contact colleagues or clients to further
              network yourself.{" "}
              <a
                href="https://github.com/React-Rangers/netminder-frontend"
                target="_blank"
                rel="noopener noreferrer"
                title="NetMinder Front End GitHub Repo"
              >
                <i class="fa-brands fa-github"></i>
              </a>{" "}
              <a
                href="https://github.com/React-Rangers/netminder-backend"
                target="_blank"
                rel="noopener noreferrer"
                title="NetMinder Back End GitHub Repo"
              >
                <i class="fa-brands fa-github"></i>
              </a>
            </p>
          </div>
        </div>
        <div className="portfolio-column">
          <div className="portfolio-item">
            <h3>Note Taker</h3>
            <a
              href="https://note-taker-jg.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
              title="Note Taker"
            >
              <img
                src={require("../assets/images/notes-app.png")}
                alt="Note Taker"
              ></img>
            </a>
            <p>
              A note taking app that uses Express.js and Node.js.{" "}
              <a
                href="https://github.com/MrMessyFace/notes-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fa-brands fa-github"></i>
              </a>
            </p>
          </div>
          <div className="portfolio-item">
            <h3>Just Another Text Editor</h3>
            <a
              href="https://pwa-text-editor.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
              title="Just Another Text Editor"
            >
              <img
                src={require("../assets/images/just-another-text-editor.png")}
                alt="Just Another Text Editor"
              ></img>
            </a>
            <p>
              A text editor that uses PWA technology to save your work offline.{" "}
              <a
                href="https://github.com/MrMessyFace/pwa-text-editor"
                target="_blank"
                rel="noopener noreferrer"
                title="Just Another Text Editor GitHub Repo"
              >
                <i class="fa-brands fa-github"></i>
              </a>
            </p>
          </div>
          <div className="portfolio-item">
            <h3>The Messed Up Wrestling Podcast</h3>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              title="The Messed Up Wrestling Podcast"
            >
              <img alt="The Messed Up Wrestling Podcast"></img>
            </a>
            <p>
              Homepage of The Messed Up Wrestling Podcast.{" "}
              <a
                href="https://github.com/MrMessyFace/messed-up-wrestling-podcast"
                target="_blank"
                rel="noopener noreferrer"
                title="The Messed Up Wrestling Podcast GitHub Repo"
              >
                <i class="fa-brands fa-github"></i>
              </a>
            </p>
          </div>
        </div>
      </div>
      <Link to="/more-portfolio">More Portfolio</Link>
    </div>
  );
};

export default Portfolio;
