import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Isaac Romero </span>
            from <span className="purple"> Ibarra, Ecuador.</span>
            <br />
            I work as a software engineer on projects at MyThoughts.inc.
            <br />
            I graduated as a Software engineer from the Technical University of the North
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading about psychology
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading poetry
            </li>
            <li className="about-activity">
              <ImPointRight /> Artificial Intelligence
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          "Think about something, reflect on it, adapt to conflicts, and live..."{" "}
          </p>
          <footer className="blockquote-footer"> Isaac Romero.</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
