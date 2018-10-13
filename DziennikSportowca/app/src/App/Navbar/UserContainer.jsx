import React, { Component } from "react";

class UserContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="pos-f-t">
                <div className="nav-item dropdown">
                    <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDropdownMenuLink"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                    >
                        <i className="far fa-user fa-2x" />
                    </a>
                    <div
                        className="dropdown-menu dropdown-menu-right"
                        aria-labelledby="navbarDropdownMenuLink"
                    >
                        <a className="dropdown-item" href="#">
                            Action
                        </a>
                        <a className="dropdown-item" href="#">
                            Another action
                        </a>
                        <a className="dropdown-item" href="#">
                            Something else here
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserContainer;
