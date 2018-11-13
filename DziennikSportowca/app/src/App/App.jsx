import React, { PureComponent } from "react";
import { connect } from "react-redux";

import { history } from "../_helpers";
import { alertActions } from "../_actions";

import NavbarContainer from "./Navbar/NavbarContainer";
import NavbarToggle from "./Navbar/NavbarToggle";
import RoutesContainer from "./RoutesContainer";
import BreadcrumbContainer from "../_components/Breadcrumb";
import CubeLoader from "../_components/Loaders/CubeLoader";
import CubeSpinnerLoader from "../_components/Loaders/CubeSpinnerLoader";
import BallSpinnerLoader from "../_components/Loaders/BallSpinnerLoader";
import RectangleSpinnerLoader from "../_components/Loaders/RectangleSpinnerLoader";
import RotatingCubesSpinnerLoader from "../_components/Loaders/RotatingCubesSpinnerLoader";
import PulseBallLoader from "../_components/Loaders/PulseBallLoader";
import RotatingBallsLoader from "../_components/Loaders/RotatingBallsLoader";
import BounceDotsLoader from "../_components/Loaders/BounceDotsLoader";
import CircleLoader from "../_components/Loaders/CircleLoader";
import FadingCircleLoader from "../_components/Loaders/FadingCircleLoader";
import FoldingCubeLoader from "../_components/Loaders/FoldingCubeLoader";

class App extends PureComponent {
    constructor(props) {
        super(props);

        const { dispatch } = this.props;
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }

    render() {
        const { alert, isLoaderActive } = this.props;
        return (
            <React.Fragment>
                <FoldingCubeLoader isActive={isLoaderActive} />
                <NavbarContainer>
                    <NavbarToggle />
                </NavbarContainer>

                <div className="jumbotron">
                    <div className="container">
                        <BreadcrumbContainer />
                        {alert.message && (
                            <div className={`alert ${alert.type}`}>{alert.message}</div>
                        )}
                        <RoutesContainer />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    const { alert } = state;
    return {
        alert,
        isLoaderActive: state.loader.isActive
    };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App };
