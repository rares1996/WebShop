import "./../App.css";
import { Accordion, Form } from "react-bootstrap";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from "@fortawesome/free-solid-svg-icons";
const FilterMenu = (props) => {
  function handle(event, key) {
    console.log(event.target.value)
    console.log(key)
    props.handle(key, event.target.value)
  }
  return (
    <div id="filterbox" className="container">
      <div className="row row-cols-auto">
        <div id="filter" className="col-12">
          <div style={{border: "0.5px", borderStyle: "dashed", borderRadius: "5px", textAlign: "center", backgroundColor: "rgb(230 230 223)"}}>
            <p style={{marginTop: "4%"}}>FILTER BOOKS <FontAwesomeIcon color="grey" icon={faFilter}/></p></div>
          <Accordion>
            <Accordion.Item eventKey="0"> 
              <Accordion.Header>Genre</Accordion.Header>
              <Accordion.Body>
                <Form.Select aria-label="Default select example" onChange={event => handle(event, 'genre')}>
                  <option value="Fiction" >Fiction</option>
                  <option value="Non Fiction">Non-Fiction</option>
                </Form.Select>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Language</Accordion.Header>
              <Accordion.Body>
                <Form.Select aria-label="Default select example" onChange={event => handle(event, 'language')}>
                  <option value="Danish" >Danish</option>
                  <option value="Spanish">Spanish</option>
                  <option value="Japanese">Japanese</option>
                </Form.Select>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>Publisher</Accordion.Header>
              <Accordion.Body>
                <Form.Select aria-label="Default select example" onChange={event => handle(event, 'genre')}>
                  <option value="Fiction" >Fiction</option>
                  <option value="Non Fiction">Non-Fiction</option>
                </Form.Select>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </div>


  );
};

export default FilterMenu;
