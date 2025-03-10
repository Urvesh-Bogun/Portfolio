import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FaDownload } from "react-icons/fa";

function CertificateCards(props) {
  return (
    <Card className="certificate-card-view mb-3"> 
      {props.imgPath && (
        <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      )}
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "center" }}>
          {props.description}
        </Card.Text>
        <Button
          variant="primary"
          href={props.downloadLink}
          download
          target="_blank"
        >
          <FaDownload /> &nbsp; Download Certificate
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CertificateCards;