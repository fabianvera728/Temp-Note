import React from "react";
import './navbar.css'
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="d-flex__column">
        <div className="">
          Avatar
        </div>
        <NavLink activeClassName="Navbar__link-selected" to="/overviews">Overview</NavLink>
        <NavLink activeClassName="Navbar__link-selected" to="/tasks">Task</NavLink>
        <NavLink activeClassName="Navbar__link-selected" to="/documents">Documents</NavLink>
        <NavLink activeClassName="Navbar__link-selected" to="/notes">Notes</NavLink>
        <NavLink activeClassName="Navbar__link-selected" to="/output">Output</NavLink>
        <NavLink activeClassName="Navbar__link-selected" to="/support">Support</NavLink>
      </div>
      <div className="d-flex__column">
        <span>Projects</span>
        <span>Bussines</span>
        <span>Personal</span>
        <span>Add new</span>
      </div>
    </div>
  )
}

export default Navbar;
