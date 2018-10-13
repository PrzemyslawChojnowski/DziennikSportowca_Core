import React, { Component } from "react";

import UserContainer from "./UserContainer";
import NavbarItem from "./NavbarItem";
import NavbarItemsContainer from "./NavbarItemsContainer";
import NavbarBrand from "./NavbarBrand";
import MenuItem from "../../_components/Menu/MenuItem";

import NavbarToggle from "./NavbarToggle";

class Navbar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="pos-f-t">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <NavbarItemsContainer>
                        <NavbarBrand to="/home">dsa</NavbarBrand>
                        <NavbarItem to="/register" name="Register" />
                        <NavbarItem to="/register" name="Register" />
                    </NavbarItemsContainer>
                    <UserContainer>
                        <MenuItem name="Wyloguj" action={this.props.logout} />
                    </UserContainer>
                </nav>
            </div>
        );
    }
}

export default Navbar;
