import React from "react";
import { Navbar } from "react-bootstrap";

function NavigationBar() {
  return (
    <Navbar bg="dark" variant="dark" fixed="top">
      <Navbar.Brand className="m-auto">
        <h4>Kounter Shot!</h4>
      </Navbar.Brand>
    </Navbar>
  );
}

export default NavigationBar;
