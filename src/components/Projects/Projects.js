import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import optionpriceicon from "../../Assets/Projects/resized_optionpriceicon.png";
import azurelogo from "../../Assets/Projects/resized_azurelogo.png";

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
              imgPath={optionpriceicon}
              isBlog={false}
              title="Computational Models to Calculate Option Prices"
              description="Implemented Black Scholes, Trees and Monte Carlo to calculate option prices for American or European Calls and puts from given parameters"
              ghLink="https://github.com/Urvesh-Bogun/financial-computations"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={azurelogo}
              isBlog={false}
              title="Deploying a SIEM"
              description=" Created a Virtual Machine (VM) for SIEM monitoring and alerting. Configured Azure Log Analytics Workspace to collect logs from the VM. Implemented Microsoft Sentinel for monitoring and detection to threats. Set up custom alert rules in Sentinel to notify me on VM logins."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
