import React from "react";
import { Container } from "react-bootstrap";
import CertificateCards from "./CertificateCards";
import Particle from "../Particle";
import certificateExamPro from "../../Assets/certificateExamPro.pdf"
import certificateCCISC2 from "../../Assets/certificateCCISC2.pdf"
import certificateCiscoPacketTracer from "../../Assets/certificateCiscoPacketTracer.pdf"

function Certificates() {
  const certificatesData = [
    {
      imgPath: null,
      title: "Microsoft Security, Compliance, and Identity Fundamental",
      description: " ",
      downloadLink: certificateExamPro,
    },
    {
      imgPath: null,
      title: "Certified in Cybersecurity (CC) course",
      description: "",
      downloadLink: certificateCCISC2,
    },
    {
      imgPath: null,
      title: "Introduction to Packet Tracer",
      description: "",
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
          Here are some of the certifications I've earned.
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