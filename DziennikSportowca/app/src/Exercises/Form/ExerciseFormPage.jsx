import React, { PureComponent } from "react";
import { reduxForm } from "redux-form";
import Col from "../../_components/Forms/Col";
import Row from "../../_components/Forms/Row";
import FormGroup from "../../_components/Forms/FormGroup";
import Label from "../../_components/Forms/Label";
import { TextBoxField } from "../../__common/ReduxForm";
import accessModes from "../../_constants/accessModes";
import Card from "../../_components/Card";
import Button from "../../_components/Button";

class ExerciseFormPage extends PureComponent {
    constructor(props) {
        super(props);

        this.switchSubmitMethod = this.switchSubmitMethod.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillMount() {
        this.props.onGet(1);
    }

    switchSubmitMethod(model) {
        switch (this.props.formDisplayType) {
            case accessModes.create:
                return this.props.onCreate(model);
            case accessModes.delete:
                return this.props.onDelete(model.id);
            case accessModes.edit:
                return this.props.onUpdate(model);
        }
    }

    onSubmit(model) {
        return this.switchSubmitMethod(model).then(data => {
            this.props.afterSubmit(data);
        });
    }

    render() {
        const { formDisplayType, handleSubmit, onCloseOnModal } = this.props;
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
                        input={<TextBoxField name="name" plaintext={isPlaintext} />}
                    />
                    <FormGroup
                        label={<Label>Activity type</Label>}
                        input={<TextBoxField name="activityType" plaintext={isPlaintext} />}
                    />
                    <hr />

                    {formDisplayType != accessModes.preview && (
                        <Button
                            float="right"
                            type="success"
                            outline
                            onClick={handleSubmit(this.onSubmit)}
                        >
                            Save
                        </Button>
                    )}
                    <Button float="left" type="primary" outline onClick={onCloseOnModal}>
                        Close
                    </Button>
                </Col>
            </Row>
        );
    }
}

export default reduxForm({ form: "exerciseForm" })(ExerciseFormPage);
