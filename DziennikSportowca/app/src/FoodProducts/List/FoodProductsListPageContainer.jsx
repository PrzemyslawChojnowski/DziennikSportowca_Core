import { connect } from "react-redux";
import { initialize } from "redux-form";
import FoodProductsListPage from "./FoodProductsListPage";
import * as actions from "./actions";

const mapStateToProps = (state, ownProps) => {
    return {
        currentUser: state.authentication.user,
        items: state.exercise.list.exercises || []
    };
};

const mapDispatchToProps = dispatch => {
    return {
        // onGetPage: criteria => dispatch(actions.getExerciseList(criteria)),
        initializeForm: (formName, data) => dispatch(initialize(formName, data)),
    };
};

const FoodProductsListPageContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(FoodProductsListPage);

export default FoodProductsListPageContainer;