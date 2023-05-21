import React, { useEffect, useState } from "react";
import "./../App.css";

const LoginForm = () => {
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("/customers")
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);

  function checkUser() {
    let e = document.getElementById("email").value;
    let p = document.getElementById("password").value;

    backendData.map((customer) => {
      if (customer.email === e && customer.password === p) {
        localStorage.setItem("user", customer.name);
        localStorage.setItem("password", customer.password);
        localStorage.setItem("email", customer.email);
        localStorage.setItem("address", customer.address);
        alert("Welcome:" + " " + customer.name);
      } else {
        window.location.reload();
      }
    });
  }

  return (
    <main className="form-signin">
      <div className="row  justify-content-md-center mb-6">
        <div class="col col-6 mb-4">
          <form action="/">
            <h1 className="h3 mb-3 fw-normal">Log in</h1>

            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="email"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInput">E-mail</label>
            </div>
            <br />
            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <br />
            <button
              onClick={checkUser}
              className="w-100 btn btn-lg btn-primary"
              type="submit"
            >
              Log in
            </button>
            <br />
            <a href="/signup">
              <tag>
                New customer?
                <button
                  type="button"
                  style={{ margin: "1%" }}
                  className="w-100 btn btn-lg btn-outline-primary"
                >
                  Sign up
                </button>
              </tag>
            </a>
          </form>
        </div>
      </div>
    </main>
  );
};

export default LoginForm;
