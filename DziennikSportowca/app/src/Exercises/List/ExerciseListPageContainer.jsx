import { connect } from "react-redux";
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
        onGetPage: criteria => dispatch(actions.getExerciseList(criteria))
    };
};

const ExerciseListPageContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ExerciseListPage);

export default ExerciseListPageContainer;