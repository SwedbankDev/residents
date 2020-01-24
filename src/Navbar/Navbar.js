import React from 'react';
import {NavDropdown, Nav, Navbar} from "react-bootstrap";
import "./Navbar.css";
import { LinkContainer } from "react-router-bootstrap";
function NavBar() {
  return (
  <Navbar collapseOnSelect fixed="top" expand="lg" bg="light" variant="light" className="navbar-container">
  <LinkContainer to="/"><Navbar.Brand >BSF Car Pool</Navbar.Brand></LinkContainer>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <LinkContainer to="/home"><Nav.Link>Home</Nav.Link></LinkContainer>
      <LinkContainer to="/qr"><Nav.Link>QR Code</Nav.Link></LinkContainer>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  );
}

export default NavBar;
