import React from "react";
import "./../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faLockOpen } from "@fortawesome/free-solid-svg-icons";
import { DropDown } from "./DropDown";

export function checkLogin() {
  if (localStorage.getItem("password").length >= 5) {
    document.getElementById("logout").style.display = "inline-block";
  } else if (localStorage.getItem("password").length < 5)
    document.getElementById("logout").style.display = "none";
}

export function logOut() {
  localStorage.clear();
  alert("Are you sure you want to log out?");
  console.log("logged out");
}

const Navbar = ({ basketCount }) => {
  return (
    <nav onLoad={checkLogin} className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid d-flex justify-content-center">
        <a className="navbar-brand" href="/">
          <img
            style={{
              marginRight: "2%",
              marginLeft: "10%",
              width: "100px",
              height: "100px;",
            }}
            src="/img/logo.png"
            alt=""
          />
        </a>

        <DropDown
          className="burger"
          menuitem="MENU"
          menuitem1="Home"
          menulink1="/"
          menuitem2="NonFiction"
          menulink2="/books"
          menuitem3="Fiction"
          menulink3="/books"
          menuitem4="All genre"
          menulink4="/books"
        />

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <a className="nav-link" href="/">
              Home
            </a>

            <DropDown
              menuitem="Fiction"
              menuitem1="Horror"
              menulink1="/books"
              menuitem2="Romance"
              menulink2="/books"
              menuitem3="Classic"
              menulink3="/books"
              menuitem4="All genre"
              menulink4="/books"
            />

            <DropDown
              menuitem="Non-Fiction"
              menuitem1="Biography"
              menulink1="/books"
              menuitem2="Science"
              menulink2="/books"
              menuitem3="Philosphy"
              menulink3="/books"
              menuitem4="All genre"
              menulink4="/books"
            />

            <li className="nav-item">
              <a className="nav-link" href="#">
                Young Adult
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Kids
              </a>
            </li>
          </ul>
        </div>
        <a href="cart">
          <button
            type="button"
            style={{ margin: "1%" }}
            className="btn btn-outline-primary position-relative"
          >
            <i id="cart">
              <FontAwesomeIcon icon={faCartPlus} />{" "}
            </i>
            <span
              id="cartcount"
              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            >
              {basketCount}
              <span className="visually-hidden">unread messages</span>
            </span>
          </button>
        </a>
        <a id="accountlink" href="/login">
          <button
            style={{ margin: "0.5em" }}
            type="button"
            className="btn btn-outline-secondary position-relative"
          >
            <span id="account">
              {" "}
              <FontAwesomeIcon icon={faUserCircle} /> Log in
            </span>
          </button>
        </a>

        <a id="logout" style={{ display: "none" }} href="/login">
          <button
            onClick={logOut}
            style={{ marginLeft: "-2px" }}
            type="button"
            className="btn btn-danger position-relative"
          >
            <span id="account2">
              {" "}
              <FontAwesomeIcon icon={faLockOpen} />
            </span>
          </button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
