import { connect } from "react-redux";
import CalculatorsPage from "./CalculatorsPage";

const mapStateToProps = (state, ownProps) => {
    return {
        currentUser: state.authentication.user
    };
};

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(userActions.logout()),
        goToUrl: url => commonActions.goToUrl(url)
    };
};

const CalculatorsPageContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CalculatorsPage);

export default CalculatorsPageContainer;