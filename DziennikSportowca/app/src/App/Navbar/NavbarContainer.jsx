import React from "react";
import { connect } from "react-redux";
import Navbar from "./Navbar";

import { userActions } from "../../_actions/user.actions";

const mapStateToProps = (state, ownProps) => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(userActions.logout())
    };
};

const NavbarContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Navbar);

export default NavbarContainer;