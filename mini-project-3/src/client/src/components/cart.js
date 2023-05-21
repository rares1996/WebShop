import React, {  useEffect } from "react";
import "./../App.css"; 
import PaymentForm from "./PaymentForm";

const Cart = (props) => {
  function computeFreq() {
    let ids = localStorage.getItem("books") || "";
    ids = ids === "" ? [] : ids
            .split(" ")
            .map((id) => parseInt(id))
            .splice(1);
    let freq = new Map();
    ids.forEach((id) => {
      const count = freq.has(id) ? freq.get(id) + 1 : 1;
      freq.set(id, count);
    });
    return freq;
  }

  useEffect(() => {
    updateList(computeFreq())
      .then(() => addListeners())
  }, [])

  function removeItem(id) {
    let ids = localStorage.getItem("books")
    console.log("before:", ids)
    ids = ids.substring(0, ids.indexOf(id)) + ids.substring(ids.indexOf(id) + 2)
    console.log("after:", ids)
    localStorage.setItem("books", ids)
    updateList(computeFreq()).then(() => addListeners())
  }

  let removes = [];

  async function updateList(counter) {
    let books = [];
    await fetch("/books")
      .then((res) => res.json())
      .then((data) => {
        books = data.filter((book) => counter.has(book.id));
      });
    console.log("updateList, basket:", books);

    var htmlString = "";

    let total = 0,
      price = 0;
    books.forEach((book) => {
      const quantity = counter.get(book.id);
      price = parseInt(book.price.split(" ")[0]) * quantity;
      total += price;
      htmlString += `<tr> <th scope='row'></th>`;
      htmlString += "<td>" + book.bookTitle + "</td>";
      htmlString += "<td>" + price + " DKK</td>";
      htmlString += "<td>" + quantity + "</td>";
      htmlString += `<td><button onclick="var count = parseInt(localStorage.getItem('count'));
      count = count-${quantity};
      count = count.toString();
       localStorage.setItem('count',count); location.reload();" id="${book.id}">Remove</button></td>;`;
      htmlString += "</tr>"

      console.log(removes.push(book.id));
    });
    document.getElementById("total").innerHTML = total + " DKK";
    localStorage.setItem("total",total);
    document.getElementById("booksList").innerHTML = htmlString;
  }

  function addListeners() {
  
    
    console.log("add listenrs");
    console.log("removes", removes);
    console.log("removes[0]", removes[0]);
    removes.forEach((remove) => {
      console.log(remove);
      const doc = document.getElementById(remove);
      console.log(`Remove #${remove}: ${doc}`);
      doc.addEventListener("click", function () {
        console.log("clicked", remove);
        removeItem(remove);
        
      });
    });
  }

  return (
    <main style={{ minHeight: "30em" }}>
      <h3>Your cart</h3>

      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Books</th>
            <th scope="col">Prices</th>
            <th scope="col">Quantity</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody onload={() => addListeners()} id="booksList"></tbody>
      </table>

      <h3>Checkout</h3>
      <table id="balance" className="table table-light">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Total</th>
            <th scope="col">Checkout</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td id="total"></td>
            <td>
              <PaymentForm />
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  );
};

export default Cart;
