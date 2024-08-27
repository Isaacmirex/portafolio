import React from "react";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation(); // Utiliza 't' para la traducción

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              {t('home2.let_me_introduce_myself')}
            </h1>
            <p className="home-about-body">
              {t('home2.about_description')}
              <br />
              <br />
              {t('home2.skills')}
              <i>
                <b className="purple"> C#, Arduino, Java, Dart, JavaScript, and Python. </b>
              </i>
              <br />
              <br />
              {t('home2.interests')} &nbsp;
              <i>
                <b className="purple">{t('home2.products')}</b> {t('home2.ai_apis')}
              </i>
              <br />
              <br />
              {t('home2.node_react')}
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
            <h1>{t('footer.connect_with_me')}</h1>
            <p>
              {t('footer.feel_free_to')} <span className="purple">{t('footer.connect')}</span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Isaacmirex"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/isaacromero-catcoatdev"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
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
