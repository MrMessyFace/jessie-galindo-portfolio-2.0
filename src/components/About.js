import React from "react";

const About = () => {
  return (
    <div id="About" className="about-section">
      <h2>About Me</h2>
      <div className="about">
        <div className="aboutimg">
          <img
            src={require("../assets/images/sioux-city.jpg")}
            alt="Sioux City"
          ></img>
        </div>
        <div className="aboutme">
          <h3>Creativity & Innovation</h3>
          <p>
            I am a full stack web developer, amateur graphic designer,
            podcaster, and creative writer working out of Sioux City, Iowa. I
            have a passion for creating things and I am always looking for new
            ways to express myself. I am a graduate of Northwestern University
            Full Stack Coding Bootcamp. I am currently seeking a position as a
            full stack web developer.
          </p>
          <br></br>
          <p>
            Technologies Include: HTML, CSS, JavaScript, jQuery, Bootstrap,
            React, Node.js, Express.js, MySQL, MongoDB, Mongoose, Sequelize, and
            more.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
