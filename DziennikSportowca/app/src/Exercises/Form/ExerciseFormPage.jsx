import React, { PureComponent } from "react";
import { reduxForm } from "redux-form";
import Col from "../../_components/Forms/Col";
import Row from "../../_components/Forms/Row";
import FormGroup from "../../_components/Forms/FormGroup";
import Label from "../../_components/Forms/Label";
import { TextBoxField } from "../../__common/ReduxForm";
import accessModes from "../../_constants/accessModes";

class ExerciseFormPage extends PureComponent {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        // this.props.onGet(1);
    }

    render() {
        const { formDisplayType } = this.props;
        const isPlaintext =
            formDisplayType == accessModes.delete || formDisplayType == accessModes.preview;
            
        return (
            <Row>
                <Col>
                    <FormGroup
                        label={<Label>Id</Label>}
                        input={<TextBoxField name="id" plaintext />}
                    />
                    <FormGroup
                        label={<Label>Exercise name</Label>}
                        input={<TextBoxField name="exerciseName" plaintext={isPlaintext} />}
                    />
                    <FormGroup
                        label={<Label>Activity type</Label>}
                        input={<TextBoxField name="activityType" plaintext={isPlaintext} />}
                    />
                </Col>
            </Row>
        );
    }
}

export default reduxForm({ form: "exerciseForm" })(ExerciseFormPage);
