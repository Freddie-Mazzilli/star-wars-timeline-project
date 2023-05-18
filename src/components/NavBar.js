import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
    return(
        <nav className="nav-bar">
            <NavLink to="/">Home </NavLink>
            <NavLink to="/search">Search </NavLink>
            <NavLink to="/addmedia">Add Media </NavLink>
        </nav>
    )
}

export default NavBar