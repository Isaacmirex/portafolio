import React from "react";
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
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={estres}
              isBlog={false}
              title="Stress Detector IA"
              description="A device designed to measure stress levels in students at UTN. The data is uploaded to a PostgreSQL backend, which then feeds into an AI model. This model predicts stress based on the Perceived Stress Scale test and biometric data"
              demoLink="https://controlansiedadutn.web.app/Home"
              ghLink="https://github.com/Isaacmirex/fronted_sensores_utn"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={goteo}
              isBlog={false}
              title="Drip Irrigation"
              description="A device was created to detect soil moisture and activate irrigation automatically based on a set schedule. Alternatively, it can be manually controlled by the user. The programming was developed using Arduino IDE, and the system utilizes moisture sensors, solenoid valves, relays, and other components."
              ghLink="https://github.com/Isaacmirex"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={backend}
              isBlog={false}
              title="UTN Backend"
              description="API was developed using Express, focused on generating a template to be used in any enterprise software. This backend includes modules for users, school activities, teachers, classrooms, and roles."
              ghLink="https://github.com/Isaacmirex/app_backend_utn_v2"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mongo}
              isBlog={false}
              title="Electronic Invoicing API with MongoDB"
              description="application that allows connectivity with clients, products, and records. This API serves as a template for developing a robust backend. Its purpose is to leverage the technology of a NoSQL database."
              ghLink="https://github.com/Isaacmirex/facturacionApiMongoDB"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={frutas}
              isBlog={false}
              title="Fruit Dehydrator"
              description="A device designed to aid in the dehydration of fruits. It is controlled by an Arduino Nano. The device manages input and output fans, a nickel-chromium heating element, and responds to temperature and humidity levels sensed by the sensor. Depending on these readings, relays are activated to regulate heat output: if the temperature is too high for fruit dehydration, the heat output is reduced; if it's too low, the heating element and air distribution fans are activated."
              ghLink="https://github.com/Isaacmirex"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={uv}
              // isBlog={true}
              title="UV Light Disinfectant Invento"
              description="Using a mobile app developed by the inventor, UV light in a fruit disinfection box is controlled. An Arduino with a Bluetooth module receives data sent from the phone and executes intensity control commands for the UV light."
              ghLink="https://github.com/Isaacmirex"
              // ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
