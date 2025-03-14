import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import optionspricingicon from "../../Assets/Projects/OptionsPricingIcon.png";
import azurelogo from "../../Assets/Projects/resized_azurelogo.png";
import catcoinicon from "../../Assets/Projects/CatCoinIcon.png";
import ciscopackettracericon from "../../Assets/Projects/CiscoPacketTracerIcon.png";
import petsuggestericon from "../../Assets/Projects/PetSuggesterIcon.png";
import automatedticketicon from "../../Assets/Projects/AutomatedTicketIcon.png";

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
                <ul style={{ textAlign: "left", paddingLeft: "20px" }}>
                  <li>Implemented Black-Scholes, Binomial Trees, and Monte Carlo models in <strong className="purple">Python</strong>.</li>
                  <li>Calculated option prices for American and European calls and puts.</li>
                  <li>Used parameters like stock price, strike price, time to maturity, risk-free rate, and volatility.</li>
                </ul>
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
                <ul style={{ textAlign: "left", paddingLeft: "20px" }}>
                  <li>Developed a <strong className="purple">Python</strong> implementation of a blockchain-like structure.</li>
                  <li>Managed transactions for a hypothetical cryptocurrency called CatCoin (CC).</li>
                  <li>Linked blocks using cryptographic hashes to ensure data integrity and security.</li>
                </ul>
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
                <ul style={{ textAlign: "left", paddingLeft: "20px" }}>
                  <li>Developed a pet suggestion system in <strong className="purple">Java</strong> using a binary tree.</li>
                  <li>Asked yes/no questions to suggest pets based on user input.</li>
                  <li>Added functionality to save and load the tree structure.</li>
                </ul>
              }
              ghLink="https://github.com/Urvesh-Bogun/pet-suggester"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={automatedticketicon}
              title="Automated Ticketing System"
              description={
                <ul style={{ textAlign: "left", paddingLeft: "20px" }}>
                  <li>Integrated <strong className="purple">Freshdesk</strong> and <strong className="purple">Slack</strong> APIs to automate ticket notifications.</li>
                  <li>Developed a <strong className="purple">Python</strong> script to fetch and send ticket details.</li>
                  <li>Deployed the solution on <strong className="purple">Heroku</strong> for the option of continuous monitoring.</li>
                </ul>
              }
              ghLink="https://github.com/Urvesh-Bogun/AutomatedTicketingSystem"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;