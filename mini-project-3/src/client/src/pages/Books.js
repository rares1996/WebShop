import React, { useEffect, useState } from "react";
import "./../App.css"; 
import FilterMenu from "../components/FilterMenu"
import Card from "../components/card"

function Books(props) {
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("/books")
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
        handleBasket();
      });
  }, []);

  function handleFilter(key, value) {
    console.log('HomePage: ' + key + ', ' + value)
    fetch("/books/"+key+"/"+value)
      .then(res => res.json())
      .then(data => setBackendData(data))
  }

  function handleBasket() {
    props.updateBasket()
  }
  
  return (
    <div className="container">
    <div className="row row-cols-lg-2 ">
      <FilterMenu handle={handleFilter}/>
      <Card backendData={backendData} handleBasket={handleBasket}/>
    </div>
  </div>)
};

export default Books;