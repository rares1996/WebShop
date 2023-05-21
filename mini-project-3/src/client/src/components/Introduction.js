import React, { useState } from "react";
import "./../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import ModalForm from "./ModalForm";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

function updateBasket(name, price) {
  console.log(name, price);
}

function Introduction({ backendData }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <div className="jumbotron p-3 p-md-5 text-white rounded bg-dark">
        <div className="col-md-6 px-0">
          <h1
            style={{ "background-color": "rgba(227, 197, 121, 0.714)" }}
            className="display-4 font-italic"
          >
            Discover our wide selection of books
          </h1>
          <p className="lead my-3">
            Multiple lines of text that form the lede, informing new readers
            quickly and efficiently about what's most interesting in this post's
            contents.
          </p>
          <p className="lead mb-0">
            <a href="/books" className="text-white font-weight-bold">
              <button className="btn btn-outline-success">
                <FontAwesomeIcon icon={faBookOpen} /> Find your favourite
                book...
              </button>
            </a>
          </p>
        </div>
      </div>

      <br />
      <h2 style={{ backgroundColor: "steelblue", color: "white" }}>
        Browse Our Categories
      </h2>

      <Row>
        <Col>
          <Card>
            <Card.Img variant="top" src="img/bio.png" />
            <Card.Body>
              <Card.Title>Biography</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Button variant="success">Read more</Button>
            </Card.Body>
            <br />
          </Card>
          <br />
        </Col>

        <Col>
          <Card>
            <Card.Img variant="top" src="img/crime.png" />
            <Card.Body>
              <Card.Title>Crime</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>

              <Button variant="warning">Read more</Button>
            </Card.Body>
            <br />
          </Card>
          <br />
        </Col>
      </Row>

      <Row>
        <Col>
          <Card>
            <Card.Img variant="top" src="img/politics.png" />
            <Card.Body>
              <Card.Title>Politics</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Button variant="secondary">Read more</Button>
            </Card.Body>
            <br />
          </Card>
          <br />
        </Col>

        <Col>
          <Card>
            <Card.Img variant="top" src="img/fiction.png" />
            <Card.Body>
              <Card.Title>Fiction</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>

              <Button variant="primary">Read more</Button>
            </Card.Body>
            <br />
          </Card>
          <br />
        </Col>
      </Row>

      <br />
      <section
        style={{ "background-color": "lightblue" }}
        className="jumbotron text-center"
      >
        <div className="container">
          <h1 className="jumbotron-heading">Books on discount</h1>
          <p className="lead text-muted">
            Something short and leading about the collection below—its contents,
            the creator, etc. Make it short and sweet, but not too short so
            folks don't simply skip over it entirely.
          </p>
          <p>
            <a href="/books" className="btn btn-primary my-2">
              View more books
            </a>
          </p>
          ´
        </div>
      </section>
      <br />
      {/* books are being generated here  */}
      <div
        style={{ width: "100%", justifyContent: "center" }}
        className="container"
      >
        <div className="row row-cols-auto">
          {backendData.map((book, i) => {
            if (book.discount === "yes") {
              return (
                <div id="card" key={i}>
                  <div style={{ width: "15rem" }} className="col">
                    <div className="p bg-light">
                      <div className="card">
                        <img
                          id="bookcover"
                          src={book.picture}
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <h5 id="booktitle" className="card-title">
                            {" "}
                            {book.bookTitle}
                          </h5>

                          <h6 className="author">
                            <strong>{book.author}</strong>
                          </h6>
                          <>
                            <p className="card-text"> </p>
                            <span>
                              <strong>Price:</strong> {book.price}
                            </span>
                            <hr />
                          </>

                          <p>
                            <span id="details" className="details">
                              <strong>Genre:</strong> {book.genre}
                              <br />
                              <strong> Language:</strong> {book.language}
                            </span>
                          </p>

                          <a
                            href="#cartcount"
                            name={book.bookTitle}
                            id={book.price}
                            style={{
                              display: "inline-block",
                              marginRight: "1%",
                            }}
                            onClick={() =>
                              updateBasket(book.bookTitle, book.price)
                            }
                            className="btn btn-primary"
                          >
                            Add to cart
                          </a>

                          <ModalForm
                            heading={book.bookTitle}
                            body={book.author}
                            picture={book.picture}
                            publisher={book.publisher}
                            language={book.language}
                            genre={book.genre}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>

      <section
        style={{ "background-color": "blanchedalmond", height: "12em" }}
        className="jumbotron text-center"
      >
        <div className="container">
          <h1 className="jumbotron-heading">New releases</h1>
          <p className="lead text-muted">
            Something short and leading about the collection below—its contents,
            the creator, etc. Make it short and sweet, but not too short so
            folks don't simply skip over it entirely.
          </p>
          <p>
            <a href="/books" className="btn btn-danger">
              View more books
            </a>
          </p>
        </div>
      </section>

      <br />
      <div style={{ width: "100%" }} className="container">
        <div className="row row-cols-auto">
          {backendData.map((book, i) => {
            if (
              backendData[i].id === backendData.length - 1 ||
              backendData[i].id === backendData.length - 2 ||
              backendData[i].id === backendData.length - 3
            ) {
              return (
                <div id="card" key={i}>
                  <div style={{ width: "15rem" }} className="col">
                    <div className="p bg-light">
                      <div className="card">
                        <img
                          id="bookcover"
                          src={book.picture}
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <h5 id="booktitle" className="card-title">
                            {" "}
                            {book.bookTitle}
                          </h5>

                          <h6 className="author">
                            <strong>{book.author}</strong>
                          </h6>
                          <>
                            <p className="card-text"> </p>
                            <span>
                              <strong>Price:</strong> {book.price}
                            </span>
                            <hr />
                          </>

                          <p>
                            <span id="details" className="details">
                              <strong>Genre:</strong> {book.genre}
                              <br />
                              <strong> Language:</strong> {book.language}
                            </span>
                          </p>

                          <a
                            href="#cartcount"
                            name={book.bookTitle}
                            id={book.price}
                            style={{
                              display: "inline-block",
                              marginRight: "1%",
                            }}
                            onClick={() =>
                              updateBasket(book.bookTitle, book.price)
                            }
                            className="btn btn-primary"
                          >
                            Add to cart
                          </a>

                          <ModalForm
                            heading={book.bookTitle}
                            body={book.author}
                            picture={book.picture}
                            publisher={book.publisher}
                            language={book.language}
                            genre={book.genre}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default Introduction;
