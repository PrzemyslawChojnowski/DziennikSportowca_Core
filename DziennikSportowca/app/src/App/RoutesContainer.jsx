import React from "react";
import { Route, Switch } from "react-router-dom";

import { PrivateRoute } from "../_components";
import { HomePage } from "../HomePage";
import { LoginPage } from "../LoginPage";
import { RegisterPage } from "../RegisterPage";
import CalculatorsPageContainer from "../Calculators/CalculatorsPageContainer";
import ExerciseFormPageContainer from "../Exercises/Form/ExerciseFormPageContainer";
import ExerciseListPageContainer from "../Exercises/List/ExerciseListPageContainer";

import urls from "../_constants/urls";

const RoutesContainer = props => {
    return (
        <main>
            <Switch>
                <PrivateRoute exact path={urls.default} component={HomePage} />
                <Route path={urls.home} component={HomePage} />
                <Route path={urls.login} component={LoginPage} />
                <Route path={urls.register} component={RegisterPage} />
                <Route path={urls.calculators} component={CalculatorsPageContainer} />

                {/* Exercise */}
                <Route path={"/exercise/:id"} component={ExerciseFormPageContainer} />
                <Route path={urls.exerciseEditForm(":id")} component={ExerciseFormPageContainer} />
                <Route
                    path={urls.exerciseDeleteForm(":id")}
                    component={ExerciseFormPageContainer}
                />
                <Route
                    path={urls.exerciseOverviewForm(":id")}
                    component={ExerciseFormPageContainer}
                />
                <Route
                    path={urls.exerciseList}
                    component={ExerciseListPageContainer}
                />
            </Switch>
        </main>
    );
};

export default RoutesContainer;
