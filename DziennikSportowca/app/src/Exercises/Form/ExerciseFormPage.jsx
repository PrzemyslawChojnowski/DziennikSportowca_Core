import React, { PureComponent } from "react";

class ExerciseFormPage extends PureComponent {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.onGet(1);
    }

    render() {
        return <div>Hello from exercise form component</div>;
    }
}

export default ExerciseFormPage;
