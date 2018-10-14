import React, { Component } from "react";
import { reduxForm } from "redux-form";

import { NumericBoxField } from "../../__common/ReduxForm";
import FormGroup from "../../_components/Forms/FormGroup";
import Label from "../../_components/Forms/Label";
import Row from "../../_components/Forms/Row";
import Col from "../../_components/Forms/Col";

import langs from "../../_constants/langs.pl";

class Bmi extends Component {
    constructor(props) {
        super(props);

        this.state = {
            bmiWeight: null,
            bmiHeight: null,
            bmiResult: 0
        };

        this.changeWeight = this.changeWeight.bind(this);
        this.changeHeight = this.changeHeight.bind(this);
        this.calculateBMI = this.calculateBMI.bind(this);
    }

    changeHeight(e, value) {
        this.setState({ bmiHeight: value });
        const { bmiWeight } = this.state;

        this.calculateBMI(bmiWeight, value);
    }

    changeWeight(e, value) {
        this.setState({ bmiWeight: value });
        const { bmiHeight } = this.state;

        this.calculateBMI(value, bmiHeight);
    }

    calculateBMI(weight, height) {
        if (weight && height) {
            let tmpBMI = weight / ((height / 100) * (height / 100));

            if (tmpBMI < 0) tmpBMI = 0;

            this.setState({ bmiResult: tmpBMI });
            this.props.dispatch(this.props.change("bmiResult", tmpBMI));
        } else {
            this.setState({ bmiResult: 0 });
            this.props.dispatch(this.props.change("bmiResult", 0));
        }
    }

    render() {
        return (
            <Row>
                <Col>
                    <FormGroup
                        label={<Label htmlFor="bmiWeight">{langs.labels.weight}</Label>}
                        input={
                            <NumericBoxField
                                name="bmiWeight"
                                id="bmiWeight"
                                onChange={this.changeWeight}
                            />
                        }
                    />
                    <FormGroup
                        label={<Label htmlFor="bmiHeight">{langs.labels.height}</Label>}
                        input={
                            <NumericBoxField
                                name="bmiHeight"
                                id="bmiHeight"
                                onChange={this.changeHeight}
                            />
                        }
                    />
                    <FormGroup
                        label={<Label htmlFor="bmiResult">{langs.labels.bmi}</Label>}
                        input={<NumericBoxField name="bmiResult" id="bmiResult" disabled />}
                    />
                </Col>
            </Row>
        );
    }
}

export default reduxForm({
    form: "bmi"
})(Bmi);
