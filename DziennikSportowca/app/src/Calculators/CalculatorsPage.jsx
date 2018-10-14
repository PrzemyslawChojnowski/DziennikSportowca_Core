import React, { Component } from "react";
import { reduxForm } from "redux-form";

import TabsContainer from "../_components/Tabs/TabsContainer";
import Tab from "../_components/Tabs/Tab";
import Bmi from "./Tabs/Bmi";
import Cpm from "./Tabs/Cpm";
import Pmc from "./Tabs/Pmc";
import Ppm from "./Tabs/Ppm";

import langs from "../_constants/langs.pl";

class CalculatorsPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <TabsContainer id={"calculators"} defaultIndex={1}>
                    <Tab name={langs.labels.bmi} id="bmi" index={1}><Bmi /></Tab>
                    <Tab name={langs.labels.cpm} id="cpm" index={2}><Cpm /></Tab>
                    <Tab name={langs.labels.pmc} id="pmc" index={3}><Pmc /></Tab>
                    <Tab name={langs.labels.ppm} id="ppm" index={4}><Ppm /></Tab>
                </TabsContainer>
            </React.Fragment>
        );
    }
}

export default CalculatorsPage;
