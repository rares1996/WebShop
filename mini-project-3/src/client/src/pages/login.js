import React, { useEffect, useState } from "react";
import "./../App.css"; 
import LoginForm from "./../components/LoginForm"


function Login(props) {
  return (
    <div className="container">
        <LoginForm/>
    </div>
    )
};

export default Login;