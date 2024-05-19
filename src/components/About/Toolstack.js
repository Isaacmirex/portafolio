import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiVisualstudiocode, SiPostman, SiMicrosoftteams, SiWindows, SiVisualstudio } from "react-icons/si";

function Toolstack() {
  const tools = [
    { icon: <SiWindows />, name: "Windows" },
    { icon: <SiPostman />, name: "Postman" },
    { icon: <SiVisualstudiocode />, name: "VSCode" },
    { icon: <SiVisualstudio />, name: "Visual Studio" },
    { icon: <SiMicrosoftteams />, name: "Microsoft Teams" }
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool, index) => (
        <Col key={index} xs={4} md={2} className="tech-icons">
          {tool.icon}
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
