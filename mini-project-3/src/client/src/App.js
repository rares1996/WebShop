import React, { useEffect, useState } from "react";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Books from "./pages/Books";
import Login from "./pages/login";
import Cart from "./pages/cart";
import SignUp from "./pages/SignUp";
import Account from "./pages/Account";
import Intro from "./pages/HomePage";


function App() {
   function validateUser() {
    // document.getElementById("cartcount").innerHTML = localStorage.getItem("count");
    var name = localStorage.getItem("user")
    if ((localStorage.getItem("user") != null) && (localStorage.getItem("password").length >= 5)) {
        document.getElementById("account").innerHTML = name;
        document.getElementById("accountlink").setAttribute("href", "/account");
    }
    const count = parseInt(localStorage.getItem("count")) || 0
    localStorage.setItem("count", count)
    setBasketCount(count)
}

const [basketCount, setBasketCount] = useState(0)

function updateBasket() {
  const count = parseInt(localStorage.getItem("count"))+1 || 1
  // localStorage.setItem("count", count)
  setBasketCount(count)
}

  return (
    <main onLoad={validateUser}>

      <NavBar basketCount={basketCount}/>

        <Routes>
          <Route path='/' element={<Intro/>}/>
          <Route path='/books' element={<Books updateBasket={() => updateBasket()}/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/Home' element={<Intro/>}/>
          <Route path='/account' element={<Account/>}/>
          
        </Routes>

   <Footer />
    </main>
  );
}

export default App;
