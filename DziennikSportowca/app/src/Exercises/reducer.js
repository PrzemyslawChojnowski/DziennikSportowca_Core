import { combineReducers } from 'redux';
import exerciseFormReducer from './Form/reducer';
import exerciseListReducer from './List/reducer';

const exerciseReducer = combineReducers({
    form: exerciseFormReducer,
    list: exerciseListReducer
});

export default exerciseReducer;