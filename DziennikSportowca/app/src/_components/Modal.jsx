import React, { PureComponent } from "react";
import Button from "./Button";

class Modal extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        const { name, show, header, body, footer, withHeaderCloseButton, onClose } = this.props;
        return (
            <div
                className={`modal fade ${show && "show"}`}
                id={name}
                tabindex="-1"
                role="dialog"
                aria-labelledby={`${name}Label`}
                aria-hidden="true"
            >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id={`${name}Label`}>
                                {header}
                            </h5>
                            {withHeaderCloseButton && (
                                <Button
                                    onClick={onClose}
                                    customClassName="close"
                                    modal
                                    ariaLabel="Close"
                                >
                                    <span aria-hidden="true">&times;</span>
                                </Button>
                            )}
                        </div>
                        <div className="modal-body">{body}</div>
                        <div className="modal-footer">
                            {footer ? (
                                footer
                            ) : (
                                <React.Fragment>
                                    <Button modal onClick={onClose} type="danger">Close</Button>
                                </React.Fragment>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Modal.defaultProps = {
    withHeaderCloseButton: true
};

export default Modal;
