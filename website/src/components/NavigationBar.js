import React from "react";
import { Navbar, NavbarBrand } from "react-bootstrap";

function NavigationBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <NavbarBrand className="m-auto">Kounter Shot!</NavbarBrand>
    </Navbar>
  );
}

export default NavigationBar;
