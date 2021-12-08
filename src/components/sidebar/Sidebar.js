import React from "react";
import { NavItem, NavLink, Nav } from "reactstrap";
import classNames from "classnames";
import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar({ isOpen, toggle }) {
  return (
    
    <div className={classNames("sidebar", { "is-open": isOpen })}>
      <div className="sidebar-header">
        {/* Displays the 'X' mark for closing the sidebar in phone */}
        <span color="info" onClick={toggle} style={{ color: "#fff" }}>
          &times;
        </span>
        <h3>Menu</h3>
      </div>
      <div className="side-menu">
        <Nav vertical className="list-unstyled pb-3">
          <NavItem>
            <NavLink tag={Link} to={"/dashboard/home"}>
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to={"/dashboard/pr"}>
              PR Team
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to={"/dashboard/edu"}>
              Edu Team
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to={"/dashboard/design"}>
              Design Team
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to={"/dashboard/webops"}>
              WebOps Team
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to={"/dashboard/jee"}>
              JEE
            </NavLink>
          </NavItem>          
        </Nav>
      </div>
    </div>
  );
}

export default Sidebar;
