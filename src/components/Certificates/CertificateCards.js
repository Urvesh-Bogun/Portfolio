import React from "react";
import { Button, Card } from "react-bootstrap";
import { AiOutlineDownload } from "react-icons/ai";

function CertificateCards(props) {
  return (
    <Card className="certificate-card-view mb-3">
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <p style={{ color: "grey", fontSize: "0.9em", marginBottom: "10px" }}>
          {props.company}
        </p>
        <div style={{ textAlign: "left", marginTop: "10px" }}>
          <strong>Skills:</strong>
          <br />
          {props.description}
        </div>
        <div style={{ textAlign: "center", marginTop: "10px" }}>
          <Button
            variant="primary"
            href={props.downloadLink}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download Certificate
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CertificateCards;