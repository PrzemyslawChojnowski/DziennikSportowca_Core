import { initialize } from "redux-form";

import { EXERCISE_LOAD } from "../../_constants/actionTypes";
import ExerciseService from "../../_services/ExerciseService";
import formNames from "../../_constants/names/formNames";

function updateExerciseForm(data) {
    return function(dispatch) {
        dispatch({
            type: EXERCISE_LOAD,
            exercise: data
        });
        dispatch(initialize(formNames.exercise, data));
    };
}

export function getExercise(id) {
    return function(dispatch) {
        return ExerciseService.get(id).then(exercise => dispatch(updateExerciseForm(exercise)));
    };
}

export function createExercise(model) {
    return function(dispatch) {
        return ExerciseService.create(model);
    };
}

export function deleteExercise(id) {
    return function(dispatch) {
        return ExerciseService.delete(id);
    };
}

export function updateExercise(model) {
    return function(dispatch) {
        return ExerciseService.update(model);
    };
}
