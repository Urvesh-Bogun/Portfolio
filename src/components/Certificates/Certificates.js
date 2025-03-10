import React from "react";
import CertificateCards from "./CertificateCards";

const Certificates = () => {
  const certificatesData = [
    {
      imgPath: null,
      title: "Microsoft Security, Compliance, and Identity Fundamental",
      description: "Here I Learnt",
      downloadLink: null,
    },

  ];

  return (
    <div>
      <h1>Certifications</h1>
      <div className="certificate-container">
        {certificatesData.map((certificate, index) => (
          <CertificateCards key={index} {...certificate} />
        ))}
      </div>
    </div>
  );
};

export default Certificates;