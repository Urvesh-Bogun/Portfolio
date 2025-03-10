import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import optionspricingicon from "../../Assets/Projects/OptionsPricingIcon.png";
import azurelogo from "../../Assets/Projects/resized_azurelogo.png";
import catcoinicon from "../../Assets/Projects/CatCoinIcon.png";

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
              imgPath={optionspricingicon}
              title="Computational Models to Calculate Option Prices"
              description="Implemented Black-Scholes, Binomial Trees, and Monte Carlo models to calculate option prices for American and European calls and puts using parameters like stock price, strike price, time to maturity, risk-free rate, and volatility."
              ghLink="https://github.com/Urvesh-Bogun/FinancialComputationsForOptionPrices"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={azurelogo}
              title="Deploying a SIEM"
              description={
                <ul style={{ textAlign: "left", paddingLeft: "20px" }}>
                  <li>Created a Virtual Machine (VM) for SIEM monitoring and alerting.</li>
                  <li>Configured Azure Log Analytics Workspace to collect logs from the VM.</li>
                  <li>Implemented Microsoft Sentinel for monitoring and detection of threats.</li>
                  <li>Set up custom alert rules in Sentinel to notify me on VM logins.</li>
                </ul>
              }
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={catcoinicon}
              title="CatCoin Blockchain"
              description="A Python implementation of a blockchain-like structure designed to manage transactions for a hypothetical cryptocurrency called CatCoin (CC). The system links blocks using cryptographic hashes, ensuring data integrity and security for transaction records."
              ghLink="https://github.com/Urvesh-Bogun/CatCoinBlockchain"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;