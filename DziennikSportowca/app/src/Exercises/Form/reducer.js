import { combineReducers } from "redux";

import initialState from "../../_helpers/initialState";
import * as types from "../../_constants/actionTypes";

const exerciseReducer = (state = initialState.exercise.form, action) => {
    switch (action.type) {
        case types.EXERCISE_LOAD:
            return action.exercise;
        default:
            return state;
    }
};

const exerciseFormReducer = combineReducers({
    form: exerciseReducer
});

export default exerciseFormReducer;
