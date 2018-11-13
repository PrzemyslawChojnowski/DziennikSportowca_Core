import React, { PureComponent } from "react";
import Table from "../../_components/Table/Table";
import Col from "../../_components/Forms/Col";
import Row from "../../_components/Forms/Row";
import TableColumn from "../../_components/Table/TableColumn";
import Accordion from "../../_components/Accordion";
import Modal from "../../_components/Modal";
import FontAwesome from "../../_components/FontAwesome";
import TableActionButton from "../../_components/Table/TableActionButton";
import Button from "../../_components/Button";
import accessModes from "../../_constants/accessModes";

const exerciseModalProps = {
    ["data-toggle"]: "modal",
    ["data-target"]: "#exerciseModal"
};

class FoodProductsListPage extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            showEditModal: false,
            focusedRow: undefined,
            modalAccessType: accessModes.create,
            modalTitle: "Create exercise"
        };

        this.onEditItem = this.onOpenItem.bind(this, accessModes.edit, "Edit exercise");
        this.onPreviewItem = this.onOpenItem.bind(this, accessModes.preview, "Preview exercise");
        this.onDeleteItem = this.onOpenItem.bind(this, accessModes.delete, "Delete exercise");
        this.onCloseEditModal = this.onCloseEditModal.bind(this);

        this.afterFormSubmit = this.afterFormSubmit.bind(this);
    }

    componentWillMount() {
        // this.props.onGetPage({
        //     pageSize: 1,
        //     currentPage: 1,
        //     sortColumn: "column",
        //     sortDirection: "asc"
        // });
    }

    onOpenItem(formDisplayType, modalTitle, focusedRow) {
        this.props.initializeForm("exerciseForm", focusedRow);
        this.setState({ showEditModal: true, formDisplayType, focusedRow, modalTitle });
    }

    onCloseEditModal() {
        this.props.initializeForm("exerciseForm", {});
        this.setState({
            focusedRow: {},
            showEditModal: false,
            formDisplayType: accessModes.create,
            modalTitle: "Create exercise"
        });
    }

    afterFormSubmit() {
        this.setState({
            focusedRow: {},
            showEditModal: false,
            formDisplayType: accessModes.create,
            modalTitle: "Create exercise"
        });
    }

    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col>
                        <Modal
                            name="exerciseModal"
                            show={this.state.showEditModal}
                            onClose={this.onCloseEditModal}
                            header={this.state.modalTitle || ""}
                            withoutFooter
                            // body={
                            //     <ExerciseFormPageContainer
                            //         formDisplayType={this.state.formDisplayType}
                            //         afterSubmit={this.afterFormSubmit}
                            //         onClose={this.onCloseEditModal}
                            //     />
                            // }
                        />
                        <Accordion header="Exercise list">
                            <Button
                                onClick={() => this.setState({ showEditModal: true })}
                                {...exerciseModalProps}
                                float="right"
                                type="success"
                                outline
                            >
                                <FontAwesome icon="plus" /> Create
                            </Button>
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
                                <TableColumn
                                    name={"actions"}
                                    label={"Actions"}
                                    format={item => (
                                        <div>
                                            <TableActionButton
                                                onClick={() => this.onPreviewItem(item)}
                                                type="fab"
                                                icon="readme"
                                                {...exerciseModalProps}
                                            />
                                            <TableActionButton
                                                onClick={() => this.onEditItem(item)}
                                                icon="edit"
                                                {...exerciseModalProps}
                                            />
                                            <TableActionButton
                                                onClick={() => this.onDeleteItem(item)}
                                                icon="times"
                                                {...exerciseModalProps}
                                            />
                                        </div>
                                    )}
                                />
                            </Table>
                        </Accordion>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default FoodProductsListPage;
