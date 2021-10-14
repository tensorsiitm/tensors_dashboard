import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";
import { Navbar, Button, NavbarBrand } from "reactstrap";
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
      <NavbarBrand className="logo-container" href="/">
        <img src={logo} className="img-fluid " />
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
