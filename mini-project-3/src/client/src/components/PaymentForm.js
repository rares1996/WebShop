import React, { useEffect, useState } from "react";
import "./../App.css"; // import css
import "bootstrap/dist/css/bootstrap.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/row";
import Col from "react-bootstrap/col";
import Form from "react-bootstrap/form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const name = localStorage.getItem("user");
const email = localStorage.getItem("email");
const adress = localStorage.getItem("address");
const total = localStorage.getItem("total");

export default function ModalForm(probs) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
      <Button variant="success" onClick={handleShow}>
        Checkout
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Payment</Modal.Title>
    
        </Modal.Header>
        <Modal.Body>
          <Form>
            <h5>
              <FontAwesomeIcon icon={faAddressCard} /> Delivery info
            </h5>

            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextEmail"
            >
              <Form.Label column sm="2">
                Name
              </Form.Label>
              <Col sm="10">
                <Form.Control defaultValue={name} />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextEmail"
            >
              <Form.Label column sm="2">
                Email
              </Form.Label>
              <Col sm="10">
                <Form.Control defaultValue={email} />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextEmail"
            >
              <Form.Label column sm="2">
                Address
              </Form.Label>
              <Col sm="10">
                <Form.Control defaultValue={adress} />
              </Col>
            </Form.Group>
          </Form>

          <hr></hr>

          <h5>
            <FontAwesomeIcon icon={faCreditCard} /> Card Info
          </h5>
          <Form>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextEmail"
            >
              <Form.Label column sm="2">
                Card owner
              </Form.Label>
              <Col sm="10">
                <Form.Control defaultValue={name} />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextEmail"
            >
              <Form.Label column sm="2">
                Card number
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text" placeholder="#####" />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextEmail"
            >
              <Form.Label column sm="2">
                Expiration
              </Form.Label>
              <Col sm="10">
                <Form.Control type="date" defaultValue={adress} />
              </Col>
            </Form.Group>
          </Form>

          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="2">
              CVR
            </Form.Label>
            <Col sm="10">
              <Form.Control type="number" placeholder="###  " />
            </Col>
          </Form.Group>

          <h5>
            <FontAwesomeIcon icon={faCheckCircle} /> Balance due: {localStorage.getItem("total")} DKK{" "}
          </h5>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleClose}>
            Proceed to payment
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
