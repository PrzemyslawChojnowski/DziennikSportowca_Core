import { connect } from "react-redux";
import ExerciseFormPage from "./ExerciseFormPage";
import * as actions from "./actions";
import accessModes from "../../_constants/accessModes";

const mapStateToProps = (state, ownProps) => {
    return {
        currentUser: state.authentication.user,
        formDisplayType: accessModes.create || ownProps.formDisplayType
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onCreate: model => dispatch(actions.createExercise(model)),
        onUpdate: model => dispatch(actions.updateExercise(model)),
        onGet: id => dispatch(actions.getExercise(id)),
        onDelete: id => dispatch(actions.deleteExercise(id)),

        afterSubmit: data => ownProps.afterSubmit(data),
        onCloseOnModal: () => ownProps.onClose(),
    };
};

const ExerciseFormPageContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ExerciseFormPage);

export default ExerciseFormPageContainer;
