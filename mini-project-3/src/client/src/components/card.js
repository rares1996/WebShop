import React from "react";
import "./../App.css"; 
import ModalForm from "./ModalForm";

function updateBasket(id) {
  const count = parseInt(localStorage.getItem("count")) + 1 || 1;
  console.log("count", count);
  localStorage.setItem("count", count);

  const books = (localStorage.getItem("books") || "") + " " + id;
  console.log(books);
  localStorage.setItem("books", books);
}

function Card({ backendData, handleBasket }) {
  function handleUpdate(id) {
    handleBasket();
    updateBasket(id);
  }

  return (
    <div style={{ width: "70%" }} className="container">
      <div className="row row-cols-auto">
        {backendData.map((book, i) => {
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
                        style={{ display: "inline-block", marginRight: "1%" }}
                        onClick={() => handleUpdate(book.id)}
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
        })}
      </div>
    </div>
  );
}

export default Card;
