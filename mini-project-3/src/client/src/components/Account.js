import React, { useEffect, useState } from "react";
import "./../App.css"; // import css
import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

const name = localStorage.getItem("user");
const email = localStorage.getItem("email");
const address = localStorage.getItem("address");
const total = localStorage.getItem("total");

const Account = ({}) => {
  return (
    <div style={{ minHeight: "20em" }} lassName="container">
      <FontAwesomeIcon size="6x" color="#212529" icon={faUserCircle} />
      <hr />
      <h4>Name: {name}</h4>
      <h4>Email: {email}</h4>
      <h4>Address: {address}</h4>
    </div>
  );
};
export default Account;
