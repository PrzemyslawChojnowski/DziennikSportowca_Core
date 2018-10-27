import React, { PureComponent } from "react";
import Table from "../../_components/Table/Table";
import Col from "../../_components/Forms/Col";
import Row from "../../_components/Forms/Row";
import TableColumn from "../../_components/Table/TableColumn";
import Accordion from "../../_components/Accordion";

class ExerciseListPage extends PureComponent {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        // this.props.onGet(1);
    }

    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col>
                        <Accordion header="Exercise list">
                            <Table
                                tableOptions={{
                                    striped: true,
                                    dark: true,
                                    hover: true
                                }}
                                headOptions={{ dark: true }}
                                items={[
                                    { id: 1, exerciseName: "Name 1", activityType: "Type 1" },
                                    { id: 2, exerciseName: "Name 2", activityType: "Type 2" },
                                    { id: 3, exerciseName: "Name 3", activityType: "Type 3" }
                                ]}
                                caption={"Exercise List"}
                            >
                                <TableColumn name={"id"} label={"Id"} />
                                <TableColumn name={"exerciseName"} label={"Name"} />
                                <TableColumn name={"activityType"} label={"Type"} />
                            </Table>
                        </Accordion>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default ExerciseListPage;
