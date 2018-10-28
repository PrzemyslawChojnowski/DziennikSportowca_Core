import { connect } from "react-redux";
import { initialize } from "redux-form";
import ExerciseListPage from "./ExerciseListPage";
import * as actions from "./actions";

const mapStateToProps = (state, ownProps) => {
    return {
        currentUser: state.authentication.user,
        items: state.exercise.list.exercises || []
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onGetPage: criteria => dispatch(actions.getExerciseList(criteria)),
        initializeForm: (formName, data) => dispatch(initialize(formName, data))
    };
};

const ExerciseListPageContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ExerciseListPage);

export default ExerciseListPageContainer;