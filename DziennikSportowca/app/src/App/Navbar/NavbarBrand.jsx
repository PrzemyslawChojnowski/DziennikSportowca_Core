import React from "react";
import { Link } from "react-router-dom";

const NavbarBrand = props => {
    return (
        <div className="navbar-brand">
            <Link className="nav-link" to={props.to}>
                {props.children}
            </Link>
        </div>
    );
};

export default NavbarBrand;
