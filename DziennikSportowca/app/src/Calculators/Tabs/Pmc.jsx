import React, { Component } from "react";
import { reduxForm } from "redux-form";

import { NumericBoxField } from "../../__common/ReduxForm";
import FormGroup from "../../_components/Forms/FormGroup";
import Label from "../../_components/Forms/Label";
import Row from "../../_components/Forms/Row";
import Col from "../../_components/Forms/Col";

import langs from "../../_constants/langs.pl";

class Pmc extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pmcHeight: null,
            pmcResult: 0
        };

        this.calculatePMC = this.calculatePMC.bind(this);
    }

    calculatePMC(e, value) {
        if (value) {
            let tmpPMC = 50 + 0.75 * (value - 150);

            if (tmpPMC < 0) tmpPMC = 0;

            this.setState({ pmcHeight: value, pmcResult: tmpPMC });
            this.props.change("pmcResult", tmpPMC);
        }
    }

    render() {
        return (
            <Row>
                <Col>
                    <FormGroup
                        label={<Label htmlFor="pmcHeight">{langs.labels.height}</Label>}
                        input={
                            <NumericBoxField
                                name="pmcHeight"
                                id="pmcHeight"
                                onChange={this.calculatePMC}
                            />
                        }
                    />
                    <FormGroup
                        label={<Label htmlFor="pmcResult">{langs.labels.pmc}</Label>}
                        input={<NumericBoxField name="pmcResult" id="pmcResult" disabled />}
                    />
                </Col>
            </Row>
        );
    }
}

export default reduxForm({
    form: "pmc"
})(Pmc);
