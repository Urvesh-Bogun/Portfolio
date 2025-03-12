import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import optionspricingicon from "../../Assets/Projects/OptionsPricingIcon.png";
import azurelogo from "../../Assets/Projects/resized_azurelogo.png";
import catcoinicon from "../../Assets/Projects/CatCoinIcon.png";
import ciscopackettracericon from "../../Assets/Projects/CiscoPacketTracerIcon.png";
import petsuggestericon from "../../Assets/Projects/PetSuggesterIcon.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={optionspricingicon}
              title="Option Price Calculator"
              description={
                <>
                  Implemented Black-Scholes, Binomial Trees, and Monte Carlo models in <strong className="purple">Python</strong> to calculate option prices for American and European calls and puts using parameters like stock price, strike price, time to maturity, risk-free rate, and volatility.
                </>
              }
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
                  <li>Configured <strong className="purple">Azure</strong> Log Analytics Workspace to collect logs from the VM.</li>
                  <li>Implemented <strong className="purple">Microsoft Sentinel</strong> for monitoring and detection of threats.</li>
                  <li>Set up custom alert rules in Sentinel to notify me on VM logins.</li>
                </ul>
              }
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={catcoinicon}
              title="CatCoin Blockchain"
              description={
                <>
                  A <strong className="purple">Python</strong> implementation of a blockchain-like structure designed to manage transactions for a hypothetical cryptocurrency called CatCoin (CC). The system links blocks using cryptographic hashes, ensuring data integrity and security for transaction records.
                </>
              }
              ghLink="https://github.com/Urvesh-Bogun/CatCoinBlockchain"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ciscopackettracericon}
              title="Home Network Design"
              description={
                <ul style={{ textAlign: "left", paddingLeft: "20px" }}>
                  <li>Implemented a network with a PC, laptop, router, and server.</li>
                  <li>Configured DHCP, DNS, and a secure wireless network.</li>
                  <li>Set up a <strong className="purple">Cisco</strong> server for IP allocation and domain resolution.</li>
                  <li>Verified network integrity with command-line tests.</li>
                </ul>
              }
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={petsuggestericon}
              title="Pet Suggester using Binary Tree"
              description={
                <>
                  Developed a pet suggestion system in <strong className="purple">Java</strong> using a binary tree to ask yes/no questions and suggest pets. Users can add new pets and questions, with functionality to save and load the tree structure.
                </>
              }
              ghLink="https://github.com/Urvesh-Bogun/pet-suggester"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
