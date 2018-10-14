import React, { Component } from "react";
import { reduxForm } from "redux-form";

import { NumericBoxField, SelectBoxField } from "../../__common/ReduxForm";
import FormGroup from "../../_components/Forms/FormGroup";
import Label from "../../_components/Forms/Label";
import Row from "../../_components/Forms/Row";
import Col from "../../_components/Forms/Col";

import langs from "../../_constants/langs.pl";

import genderTypes from "../../_constants/genderTypes";
import activityTypes from "../../_constants/activityTypes";

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

const activities = [
    {
        name: langs.labels.PatientLayingInBed,
        value: activityTypes.patientLayingInBed
    },
    {
        name: langs.labels.LowActivity,
        value: activityTypes.lowActivity
    },
    {
        name: langs.labels.MediumActivity,
        value: activityTypes.mediumActivity
    },
    {
        name: langs.labels.BigActivity,
        value: activityTypes.bigActivity
    },
    {
        name: langs.labels.VeryBigActivity,
        value: activityTypes.veryBigActivity
    },
    {
        name: langs.labels.ExtremeActivity,
        value: activityTypes.extremeActivity
    }
];

class Cpm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cpmWeight: null,
            cpmHeight: null,
            cpmAge: null,
            cpmGender: null,
            cpmActivity: null,
            cpmResult: 0
        };

        this.changeWeight = this.changeWeight.bind(this);
        this.changeHeight = this.changeHeight.bind(this);
        this.changeAge = this.changeAge.bind(this);
        this.changeGender = this.changeGender.bind(this);
        this.changeActivity = this.changeActivity.bind(this);
        this.calculateCPM = this.calculateCPM.bind(this);
    }

    changeHeight(e, value) {
        this.setState({ cpmHeight: value });

        const { cpmWeight, cpmAge, cpmGender, cpmActivity } = this.state;

        if (cpmWeight && value && cpmGender && cpmAge && cpmActivity)
            this.calculateCPM(cpmWeight, value, cpmGender, cpmAge, cpmActivity);
    }

    changeWeight(e, value) {
        this.setState({ cpmWeight: value });

        const { cpmHeight, cpmAge, cpmGender, cpmActivity } = this.state;

        if (value && cpmHeight && cpmGender && cpmAge && cpmActivity)
            this.calculateCPM(value, cpmHeight, cpmGender, cpmAge, cpmActivity);
    }

    changeAge(e, value) {
        this.setState({ cpmAge: value });

        const { cpmHeight, cpmWeight, cpmGender, cpmActivity } = this.state;

        if (value && cpmHeight && cpmGender && cpmWeight && cpmActivity)
            this.calculateCPM(cpmWeight, cpmHeight, cpmGender, value, cpmActivity);
    }

    changeGender(e, value) {
        this.setState({ cpmGender: value });

        const { cpmHeight, cpmWeight, cpmAge, cpmActivity } = this.state;

        if (value && cpmHeight && cpmWeight && cpmAge && cpmActivity)
            this.calculateCPM(cpmWeight, cpmHeight, cpmAge, value, cpmActivity);
    }

    changeActivity(e, value) {
        this.setState({ cpmActivity: value });

        const { cpmHeight, cpmWeight, cpmAge, cpmGender } = this.state;

        if (value && cpmHeight && cpmWeight && cpmAge && cpmActivity)
            this.calculateCPM(cpmWeight, cpmHeight, cpmAge, cpmGender, value);
    }

    calculateCPM(weight, height, age, gender, activity) {
        if (weight && height && age && gender && activity) {
            let tmpCPM = 0;

            if (gender == genderTypes.woman)
                tmpCPM =
                    665.09 +
                    9.56 * parseInt(weight) +
                    1.85 * parseInt(height) -
                    4.67 * parseInt(age);
            else if (gender == genderTypes.man)
                tmpCPM =
                    66.47 + 13.75 * parseInt(weight) + 5 * parseInt(height) - 6.75 * parseInt(age);

            switch (activity) {
                case activityTypes.patientLayingInBed:
                    tmpCPM *= 1.2;
                    break;
                case activityTypes.lowActivity:
                    tmpCPM *= 1.4;
                    break;
                case activityTypes.mediumActivity:
                    tmpCPM *= 1.6;
                    break;
                case activityTypes.bigActivity:
                    tmpCPM *= 1.75;
                    break;
                case activityTypes.veryBigActivity:
                    tmpCPM *= 2.0;
                    break;
                case activityTypes.extremeActivity:
                    tmpCPM *= 2.3;
                    break;
            }

            if (tmpCPM < 0) tmpCPM = 0;

            this.setState({ cpmResult: tmpCPM });
            this.props.change("cpmResult", tmpCPM);
        }
    }

    render() {
        return (
            <Row>
                <Col>
                    <FormGroup
                        label={<Label htmlFor="cpmWeight">{langs.labels.weight}</Label>}
                        input={
                            <NumericBoxField
                                name="cpmWeight"
                                id="cpmWeight"
                                onChange={this.changeWeight}
                            />
                        }
                    />
                    <FormGroup
                        label={<Label htmlFor="cpmHeight">{langs.labels.height}</Label>}
                        input={
                            <NumericBoxField
                                name="cpmHeight"
                                id="cpmHeight"
                                onChange={this.changeHeight}
                            />
                        }
                    />
                    <FormGroup
                        label={<Label htmlFor="cpmAge">{langs.labels.Age}</Label>}
                        input={
                            <NumericBoxField name="cpmAge" id="cpmAge" onChange={this.changeAge} />
                        }
                    />
                    <FormGroup
                        label={<Label htmlFor="cpmGender">{langs.labels.Gender}</Label>}
                        input={
                            <SelectBoxField
                                name="cpmGender"
                                id="cpmGender"
                                onChange={this.changeGender}
                                options={genders}
                            />
                        }
                    />
                    <FormGroup
                        label={<Label htmlFor="cpmActivity">{langs.labels.ActivityType}</Label>}
                        input={
                            <SelectBoxField
                                name="cpmActivity"
                                id="cpmActivity"
                                onChange={this.changeActivity}
                                options={activities}
                            />
                        }
                    />

                    <FormGroup
                        label={<Label htmlFor="cpmResult">{langs.labels.cpm}</Label>}
                        input={<NumericBoxField name="cpmResult" id="cpmResult" disabled />}
                    />
                </Col>
            </Row>
        );
    }
}

export default reduxForm({
    form: "cpm"
})(Cpm);
