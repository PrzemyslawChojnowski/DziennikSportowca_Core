import React from "react";
import { Link } from "react-router-dom";

const NavbarItem = props => {
    return (
        <li className="nav-item">
            <Link className="nav-link" to={props.to}>{props.name}</Link>
        </li>
    );
};

export default NavbarItem;
