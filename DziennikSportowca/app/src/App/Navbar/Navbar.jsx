import React, { Component } from "react";

import UserContainer from "./UserContainer";
import NavbarItem from "./NavbarItem";
import NavbarItemsContainer from "./NavbarItemsContainer";
import NavbarBrand from "./NavbarBrand";
import NavbarDropdown from "./NavbarDropdown";
import MenuItem from "../../_components/Menu/MenuItem";

import langs from "../../_constants/langs.pl";
import urls from "../../_constants/urls";

import NavbarToggle from "./NavbarToggle";

class Navbar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { currentUser, logout, goToUrl } = this.props;

        return (
            <div className="pos-f-t">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <NavbarItemsContainer>
                        <NavbarBrand to={urls.home}>{langs.labels.appName}</NavbarBrand>
                        <NavbarItem to={urls.calculators} name={langs.labels.calculators} />
                        <NavbarItem to={urls.login} name={langs.labels.login} />
                        <NavbarDropdown name={langs.labels.Exercises}>
                            <NavbarItem
                                to={urls.newExerciseForm}
                                name={langs.labels.newExercise}
                                dropdown
                            />
                            <NavbarItem
                                to={urls.exerciseList}
                                name={langs.labels.ExerciseList}
                                dropdown
                            />
                            <NavbarItem
                                to={"exercise/1"}
                                name={langs.labels.newExercise}
                                dropdown
                            />
                        </NavbarDropdown>
                        <NavbarDropdown name={langs.labels.FoodProducts}>
                            <NavbarItem
                                to={urls.foodProductsList}
                                name={langs.labels.List}
                                dropdown
                            />
                        </NavbarDropdown>
                    </NavbarItemsContainer>
                    <UserContainer>
                        {currentUser && <MenuItem name={langs.labels.logout} action={logout} />}
                        <MenuItem name={langs.labels.login} action={() => goToUrl(urls.login)} />
                        <MenuItem
                            name={langs.labels.register}
                            action={() => goToUrl(urls.register)}
                        />
                    </UserContainer>
                </nav>
            </div>
        );
    }
}

export default Navbar;
