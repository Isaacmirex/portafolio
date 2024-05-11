import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/profile.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I am a person who innovates with the product, investing in a living software, managing all possible variables to have a quality product, from people to software, through hardware programming. 💭
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> C#,Arduino,Java,Dart,Javascript and Python. </b>
              </i>
              <br />
              <br />
              My field of interest's are building new &nbsp;
              <i>
                <b className="purple">Hardware and Software Products,</b> and
                also in areas related to{" "}
                <b className="purple">
                  Innovating with AI APIs, Managing People, Transitioning IDEAS into Products.
                </b>
              </i>

              <br />
              <br />
              Whenever possible, I apply my passion for developing products with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  React.js
                </b>
                </i>. I aim to lead innovative ideas through <b className="purple">AI</b> applications, integrating hardware for enhanced quality of life. I proficiently navigate <b className="purple">Azure, Express, Python, ArduinoID, Render, Raliway, Firebase, Figma, .Net, Flutter and More.. </b> for exceptional user experiences.

            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Isaacmirex"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li> */}
              {/* <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/IsaacRomero/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li> */}
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/catcoat_ir/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
