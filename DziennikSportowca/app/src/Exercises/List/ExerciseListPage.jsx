import React, { PureComponent } from "react";
import Table from "../../_components/Table/Table";
import Col from "../../_components/Forms/Col";
import Row from "../../_components/Forms/Row";
import TableColumn from "../../_components/Table/TableColumn";
import Accordion from "../../_components/Accordion";
import Modal from "../../_components/Modal";
import FontAwesome from "../../_components/FontAwesome";

class ExerciseListPage extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            show: false
        };
    }

    componentWillMount() {
        this.props.onGetPage({
            pageSize: 1,
            currentPage: 1,
            sortColumn: "column",
            sortDirection: "asc"
        });
    }

    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col>
                        <button
                            type="button"
                            class="btn btn-primary"
                            data-toggle="modal"
                            data-target="#exampleModal"
                            onClick={() => this.setState({ show: true })}
                        >
                            Launch demo modal
                        </button>
                        
                        <Modal
                            name="exampleModal"
                            show={this.state.show}
                            onClose={() => this.setState({ show: false })}
                            // body={}
                        />
                        <Accordion header="Exercise list">
                            <Table
                                tableOptions={{
                                    striped: true,
                                    dark: true,
                                    hover: true
                                }}
                                headOptions={{ dark: true }}
                                items={this.props.items}
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
