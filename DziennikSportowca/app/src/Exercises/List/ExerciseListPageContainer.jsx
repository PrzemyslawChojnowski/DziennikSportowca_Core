import { connect } from "react-redux";
import ExerciseListPage from "./ExerciseListPage";
import * as actions from "./actions";

const mapStateToProps = (state, ownProps) => {
    return {
        currentUser: state.authentication.user,
        id: ownProps
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onCreate: model => dispatch(actions.createExercise(model)),
        onUpdate: model => dispatch(actions.updateExercise(model)),
        onGet: id => dispatch(actions.getExercise(id)),
        onDelete: id => dispatch(actions.deleteExercise(id))
    };
};

const ExerciseListPageContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ExerciseListPage);

export default ExerciseListPageContainer;