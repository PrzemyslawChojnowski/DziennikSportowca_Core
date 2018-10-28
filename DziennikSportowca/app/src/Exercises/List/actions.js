import ExerciseService from "../../_services/ExerciseService";
import { EXERCISE_REPOSITORY_SEARCH, EXERCISES_LOAD } from "../../_constants/actionTypes";

function rememberSearchFilter(filter) {
    return function(dispatch) {
        dispatch({
            type: EXERCISE_REPOSITORY_SEARCH,
            filter
        });
    }
}

function rememberLoadedExercises(exercises) {
    return function(dispatch) {
        dispatch({
            type: EXERCISES_LOAD,
            exercises
        })
    }
}

export function getExerciseList(criteria) {
    return function(dispatch) {
        return ExerciseService.getExericseList(criteria).then(result => {
            dispatch(rememberSearchFilter(result.searchCriteria));
            dispatch(rememberLoadedExercises(result.exercises))
        });
    };
}
