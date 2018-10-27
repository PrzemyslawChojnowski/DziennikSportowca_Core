import React, { Component } from "react";
import { reduxForm } from "redux-form";

import { NumericBoxField, SelectBoxField } from "../../__common/ReduxForm";
import FormGroup from "../../_components/Forms/FormGroup";
import Label from "../../_components/Forms/Label";
import Row from "../../_components/Forms/Row";
import Col from "../../_components/Forms/Col";

import langs from "../../_constants/langs.pl";

import genderTypes from "../../_constants/genderTypes";

const genders = [
    {
        name: langs.labels.Man,
        value: genderTypes.man
    },
    {
        name: langs.labels.Woman,
        value: genderTypes.woman
    }
];

class Ppm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ppmWeight: null,
            ppmHeight: null,
            ppmAge: null,
            ppmGender: null,
            ppmResult: 0
        };

        this.changeWeight = this.changeWeight.bind(this);
        this.changeHeight = this.changeHeight.bind(this);
        this.changeAge = this.changeAge.bind(this);
        this.changeGender = this.changeGender.bind(this);
        this.calculatePPM = this.calculatePPM.bind(this);
    }

    changeHeight(e, value) {
        this.setState({ ppmHeight: value });

        const { ppmWeight, ppmAge, ppmGender } = this.state;

        if (ppmWeight && value && ppmGender && ppmAge)
            this.calculatePPM(ppmWeight, value, ppmAge, ppmGender);
    }

    changeWeight(e, value) {
        this.setState({ ppmWeight: value });

        const { ppmHeight, ppmAge, ppmGender } = this.state;

        if (value && ppmHeight && ppmGender && ppmAge)
            this.calculatePPM(value, ppmHeight, ppmAge, ppmGender);
    }

    changeAge(e, value) {
        this.setState({ ppmAge: value });

        const { ppmHeight, ppmWeight, ppmGender } = this.state;

        if (value && ppmHeight && ppmGender && ppmWeight)
            this.calculatePPM(ppmWeight, ppmHeight, value, ppmGender);
    }

    changeGender(e, value) {
        this.setState({ ppmGender: value });

        const { ppmHeight, ppmWeight, ppmAge } = this.state;

        if (value && ppmHeight && ppmWeight && ppmAge)
            this.calculatePPM(ppmWeight, ppmHeight, ppmAge, value);
    }

    calculatePPM(weight, height, age, gender) {
        if (weight && height && age && gender) {
            let tmpPPM;

            if (gender == genderTypes.woman)
                tmpPPM = 665.09 + 9.56 * weight + 1.85 * height - 4.67 * age;
            else if (gender == genderTypes.man)
                tmpPPM = 66.47 + 13.75 * weight + 5 * height - 6.75 * age;

            if (tmpPPM < 0) tmpPPM = 0;

            this.setState({ ppmResult: tmpPPM });
            this.props.change("ppmResult", tmpPPM);
        }
    }

    render() {
        return (
            <Row>
                <Col>
                    <FormGroup
                        label={<Label htmlFor="ppmWeight">{langs.labels.weight}</Label>}
                        input={
                            <NumericBoxField
                                name="ppmWeight"
                                id="ppmWeight"
                                onChange={this.changeWeight}
                            />
                        }
                    />
                    <FormGroup
                        label={<Label htmlFor="ppmHeight">{langs.labels.height}</Label>}
                        input={
                            <NumericBoxField
                                name="ppmHeight"
                                id="ppmHeight"
                                onChange={this.changeHeight}
                            />
                        }
                    />
                    <FormGroup
                        label={<Label htmlFor="ppmAge">{langs.labels.Age}</Label>}
                        input={
                            <NumericBoxField name="ppmAge" id="ppmAge" onChange={this.changeAge} />
                        }
                    />
                    <FormGroup
                        label={<Label htmlFor="ppmGender">{langs.labels.Gender}</Label>}
                        input={
                            <SelectBoxField
                                name="ppmGender"
                                id="ppmGender"
                                onChange={this.changeGender}
                                options={genders}
                            />
                        }
                    />
                    <FormGroup
                        label={<Label htmlFor="ppmResult">{langs.labels.ppm}</Label>}
                        input={<NumericBoxField name="ppmResult" id="ppmResult" disabled />}
                    />
                </Col>
            </Row>
        );
    }
}

export default reduxForm({
    form: "ppm"
})(Ppm);
