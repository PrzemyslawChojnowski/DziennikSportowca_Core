import React from "react";
import { Route } from "react-router-dom";

import { PrivateRoute } from "../_components";
import { HomePage } from "../HomePage";
import { LoginPage } from "../LoginPage";
import { RegisterPage } from "../RegisterPage";
import CalculatorsPageContainer from "../Calculators/CalculatorsPageContainer";

import urls from "../_constants/urls";

const RoutesContainer = props => {
    return (
        <div>
            <PrivateRoute exact path={urls.default} component={HomePage} />
            <Route path={urls.home} component={HomePage} />
            <Route path={urls.login} component={LoginPage} />
            <Route path={urls.register} component={RegisterPage} />
            <Route path={urls.calculators} component={CalculatorsPageContainer} />
        </div>
    );
};

export default RoutesContainer;
