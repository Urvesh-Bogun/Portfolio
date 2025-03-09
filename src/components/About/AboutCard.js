import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi! I am <span className="purple">Urvesh Bogun </span>
            from <span className="purple"> London, United Kingdom.</span>
            <br />
            I am currently a <span className="purple">student </span>
            at Royal Holloway, University of London
            <br />
            I am studying <span className="purple">Computer Science with Information Security (MSci)</span> 
            <br />
            <br />
            Some other activities that I love to do are:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Listening to music
            </li>
            <li className="about-activity">
              <ImPointRight /> Going to the gym
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Video Games
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Security isn’t just code, it’s about protecting lives."{" "}
          </p>
          <footer className="blockquote-footer">Urvesh Bogun</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;