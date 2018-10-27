import { combineReducers } from "redux";

import initialState from "../../_helpers/initialState";
import * as types from "../../_constants/actionTypes";

const filterReducer = (state = initialState.exercise.list.searchFilter, action) => {
    switch (action.type) {
        case types.EXERCISE_REPOSITORY_SEARCH:
            return action.filter;
        default:
            return state;
    }
};

const exercisesReducer = (state = initialState.exercise.list.exercises, action) => {
    switch (action.type) {
        case types.EXERCISES_LOAD:
            return action.exercises;
        default:
            return state;
    }
};

const exerciseListReducer = combineReducers({
    searchFilter: filterReducer,
    exercises: exercisesReducer
});

export default exerciseListReducer;
