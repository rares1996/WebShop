import React, { useEffect, useState } from "react";
import "./../App.css"; // import css
import "./../home.css"; // import css
import "bootstrap/dist/css/bootstrap.css";
import { Dropdown } from "react-bootstrap";

export function DropDown(probs) {
  return (
    <>
      <Dropdown className={probs.className}>
        <Dropdown.Toggle
          className="nav-link"
          id="dropdown-button-dark-example1"
          variant="none"
        >
          {probs.menuitem}
        </Dropdown.Toggle>
        <Dropdown.Menu variant="light">
          <Dropdown.Item href={probs.menulink1} active>
            {probs.menuitem1}
          </Dropdown.Item>
          <Dropdown.Item href={probs.menulink2}>
            {probs.menuitem2}
          </Dropdown.Item>
          <Dropdown.Item href={probs.menulink3}>
            {probs.menuitem3}
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href={probs.menulink4}>
            {probs.menuitem4}
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}
