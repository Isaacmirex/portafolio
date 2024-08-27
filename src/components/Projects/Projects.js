import React from "react";
import { useTranslation } from "react-i18next";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import estres from "../../Assets/Projects/estres_ia.png";
import goteo from "../../Assets/Projects/riego_goteo.png";
import backend from "../../Assets/Projects/utn_backen_api.png";
import mongo from "../../Assets/Projects/facturacion_mongo.png";
import frutas from "../../Assets/Projects/secador_frutas.png";
import uv from "../../Assets/Projects/luces_uv.png";

function Projects() {
  const { t } = useTranslation(); // Utiliza 't' para la traducción

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          {t('projects.recent_works')} <strong className="purple">{t('projects.recent_projects')}</strong>
        </h1>
        <p style={{ color: "white" }}>
          {t('projects.recent_projects')}
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={estres}
              isBlog={false}
              title={t('projects.stress_detector.title')}
              description={t('projects.stress_detector.description')}
              demoLink="https://controlansiedadutn.web.app/Home"
              ghLink="https://github.com/Isaacmirex/fronted_sensores_utn"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={goteo}
              isBlog={false}
              title={t('projects.drip_irrigation.title')}
              description={t('projects.drip_irrigation.description')}
              ghLink="https://github.com/Isaacmirex"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={backend}
              isBlog={false}
              title={t('projects.utn_backend.title')}
              description={t('projects.utn_backend.description')}
              ghLink="https://github.com/Isaacmirex/app_backend_utn_v2"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mongo}
              isBlog={false}
              title={t('projects.mongo_invoicing.title')}
              description={t('projects.mongo_invoicing.description')}
              ghLink="https://github.com/Isaacmirex/facturacionApiMongoDB"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={frutas}
              isBlog={false}
              title={t('projects.fruit_dehydrator.title')}
              description={t('projects.fruit_dehydrator.description')}
              ghLink="https://github.com/Isaacmirex"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={uv}
              title={t('projects.uv_disinfectant.title')}
              description={t('projects.uv_disinfectant.description')}
              ghLink="https://github.com/Isaacmirex"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

