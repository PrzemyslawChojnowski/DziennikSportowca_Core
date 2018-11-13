import lodash from "lodash";
import ExerciseService from "../../_services/ExerciseService";
import {
    EXERCISE_REPOSITORY_SEARCH,
    EXERCISES_LOAD,
    TURN_ON_LOADER,
    TURN_OFF_LOADER
} from "../../_constants/actionTypes";

function rememberSearchFilter(filter) {
    return function(dispatch) {
        dispatch({
            type: EXERCISE_REPOSITORY_SEARCH,
            filter
        });
    };
}

function rememberLoadedExercises(exercises) {
    return function(dispatch) {
        dispatch({
            type: EXERCISES_LOAD,
            exercises
        });
    };
}

export function getExerciseList(criteria) {
    return function(dispatch) {
        dispatch({ type: TURN_ON_LOADER });
        return ExerciseService.getExerciseList(criteria).then(result => {
            dispatch(rememberSearchFilter(result.searchCriteria));
            dispatch(rememberLoadedExercises(result.exercises));
            setTimeout(() => dispatch({ type: TURN_OFF_LOADER }), 2000);
        });
    };
}
