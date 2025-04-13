import React from "react";
import { Container } from "react-bootstrap";
import CertificateCards from "./CertificateCards";
import Particle from "../Particle";
import certificateExamPro from "../../Assets/Certificates/certificateExamPro.pdf";
import certificateCCISC2 from "../../Assets/Certificates/certificateCCISC2.pdf";
import certificateCiscoPacketTracer from "../../Assets/Certificates/certificateCiscoPacketTracer.pdf";
import certificateTata from "../../Assets/Certificates/CertificateTata.pdf";
import certificateAWSJobSim from "../../Assets/Certificates/certificateAWSjobSim.pdf";

function Certificates() {
  const certificatesData = [
    {
      imgPath: null,
      title: " Solutions Architect Job Simulation",
      company: "AWS",
      description: (
        <ul style={{ textAlign: "left", marginLeft: "20px" }}>
          <li>Scalable Hosting Architecture Design (Elastic Beanstalk)</li>
          <li>AWS Solution Planning</li>
          <li>Cost Estimation and Optimization</li>
          <li>Technical Communication and Documentation</li>
          <li>Cloud Deployment Strategy</li>
        </ul>
      ),
      downloadLink: certificateAWSJobSim,
    },

    {
      imgPath: null,
      title: " Cybersecurity Analyst Job Simulation",
      company: "Tata",
      description: (
        <ul style={{ textAlign: "left", marginLeft: "20px" }}>
          <li>IAM Design</li>
          <li>IAM Evaluation</li>
          <li>Project Planning</li>
          <li>Business Process Alignment</li>
          <li>Business Process Analysis</li>
        </ul>
      ),
      downloadLink: certificateTata,
    },
    {
      imgPath: null,
      title: "Microsoft Security, Compliance, and Identity Fundamental",
      company: "ExamPro",
      description: (
        <ul style={{ textAlign: "left", marginLeft: "20px" }}>
          <li>Zero Trust Security Model</li>
          <li>Identity and Access Management (IAM)</li>
          <li>Threat Protection with Microsoft Defender</li>
          <li>Compliance Management</li>
          <li>Security Operations and Monitoring</li>
        </ul>
      ),
      downloadLink: certificateExamPro,
    },
    {
      imgPath: null,
      title: "Certified in Cybersecurity (CC) course",
      company: "ISC²",
      description: (
        <ul style={{ textAlign: "left", marginLeft: "20px" }}>
          <li>Cybersecurity Fundamentals</li>
          <li>Risk Management</li>
          <li>Network Security</li>
          <li>Incident Response</li>
          <li>Security Policies and Procedures</li>
        </ul>
      ),
      downloadLink: certificateCCISC2,
    },
    {
      imgPath: null,
      title: "Introduction to Packet Tracer",
      company: "Cisco",
      description: (
        <ul style={{ textAlign: "left", marginLeft: "20px" }}>
          <li>Network Design and Simulation</li>
          <li>Basic Networking Concepts</li>
          <li>Device Configuration</li>
          <li>Troubleshooting Networks</li>
          <li>Protocol Understanding</li>
        </ul>
      ),
      downloadLink: certificateCiscoPacketTracer,
    },
  ];

  return (
    <Container fluid className="certificate-section">
      <Particle />
      <Container>
        <h1 className="certificate-heading">
          My <strong className="purple">Certifications</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some of the certifications I've earned and the skills learnt from them.
        </p>
        <div className="certificate-list">
          {certificatesData.map((certificate, index) => (
            <CertificateCards key={index} {...certificate} />
          ))}
        </div>
      </Container>
    </Container>
  );
}

export default Certificates;