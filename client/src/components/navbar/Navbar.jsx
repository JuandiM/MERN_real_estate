import "./navbar.scss";
import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

const NavbarHeader = () => {
  return (
    <Navbar fixed="top" className="navbar" collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <div className="logo">
            <Link to="/" className="link">
              <img className="logo" src="./assets/logo1d.png" alt="logo" />
            </Link>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav">
          <MenuIcon />
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="menu me-auto">
            <Nav.Link className="menuList effect-one" href="/">
              Home
            </Nav.Link>
            <Nav.Link className="menuList effect-one" href="/properties">
              Properties
            </Nav.Link>
            <Nav.Link className="menuList effect-one" href="/properties/villas">
              Villas
            </Nav.Link>
            <Nav.Link
              className="menuList effect-one"
              href="/properties/apartments"
            >
              Apartments
            </Nav.Link>
            <Nav.Link className="menuList effect-one" href="/">
              About us
            </Nav.Link>
            <Nav.Link className="menuList effect-one" href="#contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarHeader;
