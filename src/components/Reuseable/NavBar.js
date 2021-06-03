import React, { useState } from "react";
// gatsby
import { Link } from "gatsby";

import { FaCartArrowDown } from "react-icons/fa";
import logo from "../../images/logo.png";

// Reactstrap
import { Collapse, Navbar, NavbarToggler, Nav } from "reactstrap";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      {/* bg-theme is our custom Variable */}
      <Navbar className="navbar navbar-expand-sm bg-theme text-white">
        <Link to="/" className="navbar-brand ml-5">
          <img src={logo} alt="logo" width="40px" />
        </Link>
        <NavbarToggler className="text-white" onClick={toggle}>
          Menu
        </NavbarToggler>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="navbar-nav ml-auto mr-5" navbar>
            <Link to="/" className="nav-link text-white">
              Home
            </Link>
            <Link to="/About" className="nav-link text-white">
              About
            </Link>
            <Link to="/Services" className="nav-link text-white">
              Services
            </Link>
            <Link to="/contact" className="nav-link text-white">
              Contact
            </Link>
            <Link to="/" className="nav-link text-white">
              <FaCartArrowDown size={28} />
            </Link>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
