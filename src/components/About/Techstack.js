import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiJava, DiJavascript1, DiPython, DiReact, DiMongodb, DiNodejs } from "react-icons/di";
import { SiPostgresql, SiFirebase, SiMicrosoftazure, SiSqlite, SiTailwindcss, SiTensorflow, SiDjango, SiDocker, SiCsharp, SiFlutter } from "react-icons/si";

function Techstack() {
  const techStack = [
    { icon: <SiFlutter />, name: "Flutter" },
    { icon: <DiReact />, name: "React" },
    { icon: <SiDjango />, name: "Django" },
    { icon: <SiCsharp />, name: "C#" },
    { icon: <DiJava />, name: "Java" },
    { icon: <DiJavascript1 />, name: "JavaScript" },
    { icon: <DiPython />, name: "Python" },
    { icon: <SiTensorflow />, name: "Scikit-learn" }, // Placeholder as scikit-learn icon is not available
    { icon: <SiMicrosoftazure />, name: "Azure" },
    { icon: <SiFirebase />, name: "Firebase" },
    { icon: <SiPostgresql />, name: "PostgreSQL" },
    { icon: <DiMongodb />, name: "MongoDB" },
    { icon: <SiSqlite />, name: "SQLite" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <SiTensorflow />, name: "TensorFlow" },
    { icon: <DiNodejs />, name: "Express.js" }, // Placeholder as Express.js icon is not available
    { icon: <SiDocker />, name: "Docker" }
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techStack.map((tech, index) => (
        <Col key={index} xs={4} md={2} className="tech-icons">
          {tech.icon}
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
