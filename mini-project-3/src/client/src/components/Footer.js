import React, { useEffect, useState } from "react";
import "./../App.css";

const Footer = ({}) => {
  return (
    <section className="">
      <footer
        className="text-center text-white"
        style={{ backgroundColor: "#0a4275" }}
      >
        <div className="container p-4 pb-0">
          <section className="">
            <p className="d-flex justify-content-center align-items-center">
              <span className="me-3">Register for free</span>
              <a href="/signup">
              <button 
                type="button"
                className="btn btn-outline-light btn-rounded"
              >
                Sign up!
              </button></a>
            </p>
          </section>
        </div>

        <div className="text-center p-3"></div>
      </footer>
    </section>
  );
};

export default Footer;
