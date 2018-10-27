import { connect } from "react-redux";
import ExerciseFormPage from "./ExerciseFormPage";
import * as actions from "./actions";

const mapStateToProps = (state, ownProps) => {debugger
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

const ExerciseFormPageContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ExerciseFormPage);

export default ExerciseFormPageContainer;