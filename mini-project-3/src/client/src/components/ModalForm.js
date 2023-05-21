import React, { useEffect, useState } from "react";
import "./../App.css"; // import css
import "bootstrap/dist/css/bootstrap.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/row";
import Col from "react-bootstrap/col";

export default function ModalForm(probs) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="secondary" onClick={handleShow}>
        Details
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{probs.heading}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            style={{ borderRadius: "50%", display: "block" }}
            width={"100px"}
            height={"100px"}
            src={probs.picture}
          />
          <br />
          <Row>
            <hr />

            <Col>
              <p>
                <h5>Author:</h5> {probs.body}
              </p>
              <p>
                <h5>Genre:</h5> {probs.genre}
              </p>
            </Col>

            <Col>
              <p>
                <h5>Language:</h5> {probs.language}
              </p>
              <p>
                <h5>Publisher:</h5> {probs.publisher}
              </p>
            </Col>
          </Row>

          <hr />
          <p>
            <h5>Description:</h5> {probs.publisher}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
