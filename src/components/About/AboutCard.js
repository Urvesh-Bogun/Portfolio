import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi! I am <span className="purple">Urvesh Bogun </span>from  London, United Kingdom.
            <br />
            I am currently a <span className="purple">AWS SOC Analyst </span>at a space startup.
            <br />
            I am studying <span className="purple">Computer Science with Information Security(MSci)</span>.
            <br />
            I am studying at <span className="purple">Royal Holloway, University of London</span>. 
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
            "Security isn’t just about data, it’s about protecting lives."{" "}
          </p>
          <footer className="blockquote-footer">Urvesh Bogun</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;