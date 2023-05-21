import React, { useEffect, useState } from "react";
import "./../App.css";

const SignUpForm = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();
  const [lastname, setLastname] = useState();

  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("/customers")
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);

  let ge = false;
  function checkUser() {
    let e = document.getElementById("email").value;
    backendData.map((customer) => {
      if (customer.email === e) {
        alert("This email is already in use");
        window.location.reload();
        ge =  false;
      } else if (customer.email != e) {
        ge = true;
      }
    });
  }


  function register() {
    checkUser()

    var user = { name, lastname, email, password };
    if (
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) &&
      password.length >= 5
    ) {
      if (ge === true) {
        alert("Successfully registered");
        fetch("/customers", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(user),
        });
        localStorage.setItem("user", name);
      } else {
        alert('incorrect data entered')
      }
    } else {
      alert(
        "You have entered an invalid email or a password with less than 5 characters."
      );
    }

   
  }

  return (
    <main className="form-signin">
      <div className="row  justify-content-md-center mb-6">
        <div class="col col-6 mb-4">
          <form action="/">
            <h1 className="h3 mb-3 fw-normal">Sign Up</h1>
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label htmlFor="floatingInput">Name</label>
            </div>
            <br />
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="lastname"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
              />
              <label htmlFor="floatingInput">Last Name</label>
            </div>
            <br />
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <br />
            <button
              onClick={register}
              className="w-100 btn btn-lg btn-primary"
              type="submit"
            >
              Sign up
            </button>
            <br />
            <a href="/login">
              <tag>
                Already registered?
                <button
                  type="button"
                  style={{ margin: "1%" }}
                  className="w-100 btn btn-lg btn-outline-primary"
                >
                  Log in
                </button>
              </tag>
            </a>
          </form>
        </div>
      </div>
    </main>
  );
};

export default SignUpForm;
