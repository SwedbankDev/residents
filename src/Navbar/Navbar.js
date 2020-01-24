import React from 'react';
import {NavDropdown, Nav, Navbar, Image} from "react-bootstrap";
import "./Navbar.css";
import { LinkContainer } from "react-router-bootstrap";
import image from "../Header/hsb.jpg";
function NavBar() {
  return (
  <Navbar collapseOnSelect fixed="top" expand="lg" variant="dark" className="navbar-container" style={{backgroundColor:"#255D84"}}>
  <LinkContainer to="/"><Navbar.Brand ><Image thumbnail src={image} style={{maxHeight:"80px", maxWidth: "80px", marginRight:"2vw"}}/>BSF Car Pool</Navbar.Brand></LinkContainer>
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
