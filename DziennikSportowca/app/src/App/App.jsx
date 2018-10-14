import React from "react";
import { connect } from "react-redux";

import { history } from "../_helpers";
import { alertActions } from "../_actions";

import NavbarContainer from "./Navbar/NavbarContainer";
import NavbarToggle from "./Navbar/NavbarToggle";
import RoutesContainer from "./RoutesContainer";

class App extends React.Component {
    constructor(props) {
        super(props);

        const { dispatch } = this.props;
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }

    render() {
        const { alert } = this.props;
        return (
            <React.Fragment>
                <NavbarContainer>
                    <NavbarToggle />
                </NavbarContainer>
                
                <div className="jumbotron">
                    <div className="container">
                        <div className="col-sm-8 col-sm-offset-2">
                            {alert.message && (
                                <div className={`alert ${alert.type}`}>{alert.message}</div>
                            )}
                            <RoutesContainer />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    const { alert } = state;
    return {
        alert
    };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App };
