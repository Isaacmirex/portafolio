import React from "react";
import { useTranslation } from "react-i18next";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function About() {
  const { t } = useTranslation(); // Utiliza 't' para la traducción

  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              {t('about.know')} <strong className="purple">{t('about.im')}</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          {t('about.professional_skillset')} <strong className="purple">{t('about.tools')}</strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">{t('about.tools')}</strong> {t('about.i_use')}
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
