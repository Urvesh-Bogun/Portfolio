import React from "react";
import { Container } from "react-bootstrap";
import CertificateCards from "./CertificateCards";
import Particle from "../Particle";
import certificateExamPro from "../../Assets/certificateExamPro.pdf";
import certificateCCISC2 from "../../Assets/certificateCCISC2.pdf";
import certificateCiscoPacketTracer from "../../Assets/certificateCiscoPacketTracer.pdf";

function Certificates() {
  const certificatesData = [
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