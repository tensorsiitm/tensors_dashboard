import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";
import { Navbar, Button, NavbarBrand } from "reactstrap";
import { NavLink } from "react-router-dom";
import "./Topbar.css";
import logo from "../../assets/logo.png";

function Topbar({ toggleSidebar }) {
  return (
    <Navbar
      color="light"
      light
      className="navbar shadow-sm p-3 bg-white"
      expand="md"
    >
      <NavbarBrand>
        {" "}
        <NavLink className="logo-container" to="/">
          <img src={logo} className="img-fluid " />
        </NavLink>
      </NavbarBrand>
      <Button
        color="info"
        className="sidebar-toggle-button"
        onClick={toggleSidebar}
      >
        <FontAwesomeIcon icon={faAlignLeft} />
      </Button>
    </Navbar>
  );
}

export default Topbar;
