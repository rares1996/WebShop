import React, { useEffect, useState } from "react";
import "./../App.css"; 
import Introduction from "../components/Introduction"


function Intro(props) {

  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("/books")
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);
  
  return (
    <div className="container">
        <Introduction backendData = {backendData} />
    </div>
    )
};

export default Intro;